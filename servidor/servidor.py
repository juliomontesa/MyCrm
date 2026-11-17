#!/usr/bin/env python3
"""Servidor local de Mi CRM.

Hace dos cosas:
  1. Sirve la aplicacion (Index.html y app/) en http://localhost:8000
  2. Guarda y entrega el documento del CRM en MySQL (base "crm", tabla "documento").

El documento completo vive en una sola fila: es el mismo JSON que antes se
guardaba en localStorage, con esquema version 2.
"""

import json
import http.client
import os
import pathlib
import socket
import subprocess
import sys
import time
import urllib.parse
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

try:
    import pymysql
except ImportError:
    print("Falta el conector de MySQL. Instalalo con:")
    print("  python -m pip install pymysql")
    sys.exit(1)


RAIZ = pathlib.Path(__file__).resolve().parent.parent
LOCAL = pathlib.Path(os.environ.get("LOCALAPPDATA", pathlib.Path.home() / "AppData" / "Local"))
MYSQL_DIR = pathlib.Path(os.environ.get("CRM_MYSQL_DIR", LOCAL / "MyCrm" / "mysql"))
CONFIG = pathlib.Path(os.environ.get("CRM_MYSQL_CONFIG", MYSQL_DIR / "crm.cnf"))
MY_INI = pathlib.Path(os.environ.get("CRM_MY_INI", MYSQL_DIR / "my.ini"))
MYSQLD = pathlib.Path(
    os.environ.get("CRM_MYSQLD", r"C:\Program Files\MySQL\MySQL Server 8.4\bin\mysqld.exe")
)

MAXIMO = 25 * 1024 * 1024  # 25 MB: de sobra para un CRM local
REVISIONES = 100  # cuantas copias anteriores se conservan en la tabla historial


def leer_config():
    """Lee la conexion desde crm.cnf (formato clave=valor, sin secciones reales).

    Las variables de entorno CRM_MYSQL_* mandan sobre el archivo, para poder
    levantar una base de prueba sin tocar la del usuario.
    """
    cfg = {
        "host": "127.0.0.1",
        "puerto": 3306,
        "base": "crm",
        "usuario": "crm",
        "clave": "",
    }
    if CONFIG.exists():
        for linea in CONFIG.read_text(encoding="utf-8").splitlines():
            linea = linea.strip()
            if not linea or linea.startswith("[") or "=" not in linea:
                continue
            clave, valor = linea.split("=", 1)
            clave = clave.strip().lower()
            valor = valor.strip()
            if clave == "host":
                cfg["host"] = valor
            elif clave in ("puerto", "port"):
                cfg["puerto"] = int(valor)
            elif clave in ("base", "database"):
                cfg["base"] = valor
            elif clave in ("usuario", "user"):
                cfg["usuario"] = valor
            elif clave in ("clave", "password"):
                cfg["clave"] = valor
    if os.environ.get("CRM_MYSQL_HOST"):
        cfg["host"] = os.environ["CRM_MYSQL_HOST"]
    if os.environ.get("CRM_MYSQL_PUERTO"):
        cfg["puerto"] = int(os.environ["CRM_MYSQL_PUERTO"])
    if os.environ.get("CRM_MYSQL_BASE"):
        cfg["base"] = os.environ["CRM_MYSQL_BASE"]
    if os.environ.get("CRM_MYSQL_USUARIO"):
        cfg["usuario"] = os.environ["CRM_MYSQL_USUARIO"]
    if "CRM_MYSQL_CLAVE" in os.environ:
        cfg["clave"] = os.environ["CRM_MYSQL_CLAVE"]
    return cfg


CFG = leer_config()


def conectar():
    return pymysql.connect(
        host=CFG["host"],
        port=CFG["puerto"],
        user=CFG["usuario"],
        password=CFG["clave"],
        database=CFG["base"],
        charset="utf8mb4",
        autocommit=False,
        connect_timeout=5,
    )


def puerto_abierto(host, puerto):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.6)
        return s.connect_ex((host, puerto)) == 0


def crm_respondiendo(puerto):
    """True si ya hay un servidor del CRM atendiendo en este puerto."""
    try:
        conexion = http.client.HTTPConnection("127.0.0.1", puerto, timeout=3)
        conexion.request("GET", "/api/salud")
        respuesta = conexion.getresponse()
        respuesta.read()
        conexion.close()
        return respuesta.status == 200
    except Exception:
        return False


def asegurar_mysql():
    """Si MySQL no responde, intenta levantarlo con la configuracion local."""
    try:
        conectar().close()
        return True, "ya estaba encendido"
    except Exception:
        pass

    if puerto_abierto(CFG["host"], CFG["puerto"]):
        return False, "el puerto responde pero la conexion fue rechazada (revisa crm.cnf)"

    if not MYSQLD.exists():
        return False, "no encontre mysqld en " + str(MYSQLD)
    if not MY_INI.exists():
        return False, "no encontre " + str(MY_INI)

    print("MySQL no estaba encendido. Iniciandolo...")
    log = open(MYSQL_DIR / "servidor-mysql.log", "ab")
    subprocess.Popen(
        [str(MYSQLD), "--defaults-file=" + str(MY_INI)],
        stdout=log,
        stderr=log,
        creationflags=0x08000000,  # CREATE_NO_WINDOW
    )
    for _ in range(60):
        time.sleep(0.5)
        try:
            conectar().close()
            return True, "iniciado por el servidor"
        except Exception:
            pass
    return False, "no arranco en 30 segundos (mira servidor-mysql.log)"


def estado_mysql():
    try:
        cn = conectar()
        try:
            with cn.cursor() as cur:
                cur.execute("SELECT version, actualizado FROM documento WHERE id = 1")
                fila = cur.fetchone()
                cur.execute("SELECT COUNT(*) FROM historial")
                revisiones = cur.fetchone()[0]
        finally:
            cn.close()
        return {
            "ok": True,
            "mysql": True,
            "base": CFG["base"],
            "host": CFG["host"],
            "puerto": CFG["puerto"],
            "documento": bool(fila),
            "version": fila[0] if fila else None,
            "actualizado": fila[1].isoformat(sep=" ", timespec="seconds") if fila else None,
            "revisiones": revisiones,
        }
    except Exception as ex:
        return {"ok": False, "mysql": False, "error": str(ex)}


class Manejador(SimpleHTTPRequestHandler):
    server_version = "MiCRM/2.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(RAIZ), **kwargs)

    # ------------------------------------------------------------- utilidades
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

    def host_valido(self):
        host = (self.headers.get("Host") or "").strip().lower()
        if host.startswith("["):
            host = host[1:].split("]", 1)[0]
        else:
            host = host.split(":", 1)[0]
        return host in ("127.0.0.1", "localhost", "::1")

    def responder(self, estado, obj=None, crudo=None):
        if crudo is None:
            crudo = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        elif isinstance(crudo, str):
            crudo = crudo.encode("utf-8")
        self.send_response(estado)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(crudo)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(crudo)

    def sin_contenido(self):
        self.send_response(204)
        self.send_header("Content-Length", "0")
        self.end_headers()

    def error_mysql(self, ex):
        self.responder(
            503,
            {
                "ok": False,
                "error": "mysql",
                "detalle": str(ex),
                "ayuda": "Revisa que MySQL este encendido. Reinicia con iniciar-crm.bat.",
            },
        )

    # -------------------------------------------------------------------- GET
    def do_GET(self):
        if not self.host_valido():
            return self.responder(403, {"ok": False, "error": "host"})
        ruta = urllib.parse.urlsplit(self.path).path
        if ruta == "/api/salud":
            return self.responder(200, estado_mysql())
        if ruta == "/api/db":
            return self.leer_documento()
        if ruta == "/api/historial":
            return self.listar_historial()
        if ruta.startswith("/api/"):
            return self.responder(404, {"ok": False, "error": "no-existe"})
        if ruta == "/":
            self.path = "/Index.html"
        return super().do_GET()

    def do_HEAD(self):
        return self.do_GET()

    def leer_documento(self):
        try:
            cn = conectar()
            try:
                with cn.cursor() as cur:
                    cur.execute("SELECT datos FROM documento WHERE id = 1")
                    fila = cur.fetchone()
            finally:
                cn.close()
        except Exception as ex:
            return self.error_mysql(ex)
        if not fila:
            return self.sin_contenido()
        datos = fila[0]
        if isinstance(datos, (bytes, bytearray)):
            datos = datos.decode("utf-8")
        return self.responder(200, crudo=datos)

    def listar_historial(self):
        try:
            cn = conectar()
            try:
                with cn.cursor() as cur:
                    cur.execute(
                        "SELECT id, version, guardado FROM historial ORDER BY id DESC LIMIT 20"
                    )
                    filas = cur.fetchall()
            finally:
                cn.close()
        except Exception as ex:
            return self.error_mysql(ex)
        return self.responder(
            200,
            {
                "ok": True,
                "revisiones": [
                    {"id": f[0], "version": f[1], "guardado": f[2].isoformat(sep=" ", timespec="seconds")}
                    for f in filas
                ],
            },
        )

    # -------------------------------------------------------------------- PUT
    def do_PUT(self):
        if not self.host_valido():
            return self.responder(403, {"ok": False, "error": "host"})
        ruta = urllib.parse.urlsplit(self.path).path
        if ruta == "/api/db":
            return self.guardar_documento()
        return self.responder(404, {"ok": False, "error": "no-existe"})

    def guardar_documento(self):
        try:
            largo = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            largo = 0
        if largo <= 0:
            return self.responder(400, {"ok": False, "error": "vacio"})
        if largo > MAXIMO:
            return self.responder(413, {"ok": False, "error": "muy-grande"})

        crudo = self.rfile.read(largo)
        try:
            documento = json.loads(crudo.decode("utf-8"))
        except Exception:
            return self.responder(400, {"ok": False, "error": "json-invalido"})
        if not isinstance(documento, dict):
            return self.responder(400, {"ok": False, "error": "no-es-objeto"})
        version = documento.get("version")
        if not isinstance(version, int) or isinstance(version, bool) or version < 1:
            return self.responder(400, {"ok": False, "error": "version-invalida"})

        texto = crudo.decode("utf-8")
        try:
            cn = conectar()
            try:
                with cn.cursor() as cur:
                    cur.execute("SELECT id FROM documento WHERE id = 1 FOR UPDATE")
                    existe = cur.fetchone() is not None
                    if existe:
                        cur.execute(
                            "INSERT INTO historial (datos, version, guardado) "
                            "SELECT datos, version, actualizado FROM documento WHERE id = 1"
                        )
                        cur.execute(
                            "UPDATE documento SET datos = %s, version = %s, actualizado = NOW(3) WHERE id = 1",
                            (texto, version),
                        )
                    else:
                        cur.execute(
                            "INSERT INTO documento (id, datos, version, actualizado) VALUES (1, %s, %s, NOW(3))",
                            (texto, version),
                        )
                    cur.execute(
                        "DELETE FROM historial WHERE id NOT IN ("
                        "  SELECT id FROM (SELECT id FROM historial ORDER BY id DESC LIMIT %s) recientes"
                        ")",
                        (REVISIONES,),
                    )
                cn.commit()
            except Exception:
                cn.rollback()
                raise
            finally:
                cn.close()
        except Exception as ex:
            return self.error_mysql(ex)

        estado = estado_mysql()
        return self.responder(
            200,
            {
                "ok": True,
                "guardado": estado.get("actualizado"),
                "version": version,
                "revisiones": estado.get("revisiones"),
            },
        )


def main():
    puerto = int(os.environ.get("CRM_PUERTO", "8000"))
    print("=" * 58)
    print("  Mi CRM - servidor local")
    print("=" * 58)
    print("Carpeta:", RAIZ)
    print("MySQL:  ", CFG["usuario"] + "@" + CFG["host"] + ":" + str(CFG["puerto"]) + "/" + CFG["base"])
    print("Config: ", CONFIG)

    ok, detalle = asegurar_mysql()
    if ok:
        print("MySQL:   conectado (" + detalle + ")")
    else:
        print("MySQL:   SIN CONEXION -> " + detalle)
        print("         La app se abrira, pero no dejara trabajar hasta que MySQL responda.")

    if puerto_abierto("127.0.0.1", puerto):
        print()
        if crm_respondiendo(puerto):
            print("Ya hay un CRM abierto en http://localhost:" + str(puerto))
            print("Usa esa ventana. Para cerrarla: Ctrl + C en la otra consola.")
        else:
            print("El puerto", puerto, "esta ocupado por un proceso que no responde.")
            print("Cierra las ventanas viejas del CRM o reinicia el computador.")
            print("Si sigue igual, abre el Administrador de tareas y termina los procesos python.exe.")
        print("=" * 58)
        sys.exit(1)

    try:
        servidor = ThreadingHTTPServer(("127.0.0.1", puerto), Manejador)
    except OSError as ex:
        print()
        print("No pude abrir el puerto", puerto, ":", ex)
        print("Puede que ya haya otro CRM abierto. Cierra esta ventana o cambia CRM_PUERTO.")
        sys.exit(1)

    url = "http://localhost:" + str(puerto)
    print()
    print("Abre el CRM en:", url)
    print("Para cerrar: Ctrl + C en esta ventana.")
    print("=" * 58)

    if os.environ.get("CRM_SIN_NAVEGADOR", "") != "1":
        try:
            webbrowser.open(url)
        except Exception:
            pass

    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print("\nCerrando el servidor...")
    finally:
        servidor.server_close()


if __name__ == "__main__":
    main()
