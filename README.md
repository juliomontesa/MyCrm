# Mi CRM

CRM local para gestionar leads, clientes, cotizaciones y propuestas. La aplicación se abre desde un servidor local y guarda todo en **MySQL**, en el mismo computador. No hay cuentas, nube ni scripts de terceros.

## Funciones

- **Leads y clientes** con etapas, valores, seguimiento y acciones rápidas de WhatsApp, teléfono y correo.
- **Tareas y recordatorios** con fecha, prioridad y vínculo a un lead, cliente o cotización.
- **Cotizaciones y propuestas** con ítems, descuentos, impuestos y exportación a PDF.
- **Plantillas de propuesta** reutilizables.
- **Numeración configurable** (prefijo y próximo número) sin repetir números.
- **Historial de estados** de cada cotización y propuesta.
- **Historial/timeline** por lead y cliente.
- **Detección de duplicados** por nombre, correo, teléfono o ID tributario.
- **Respaldo y restauración** en JSON.
- **Migraciones con versionado** del esquema de datos.

## Requisitos

- Windows.
- **Python 3** con `pymysql` (`python -m pip install pymysql`).
- **MySQL Community Server 8.4** instalado en `C:\Program Files\MySQL\MySQL Server 8.4`.

## Cómo usarlo

1. Abre **`iniciar-crm.bat`** con doble clic.
2. Se enciende MySQL si hace falta, arranca el servidor y abre el navegador en `http://localhost:8000`.
3. La primera vez se pide el nombre del negocio, el país y cómo se escriben los precios.

Para cerrar, usa `Ctrl + C` en la ventana del servidor. MySQL puede quedar encendido; la próxima vez el servidor lo reutiliza.

> No abras `Index.html` con doble clic. El CRM necesita el servidor local y MySQL para funcionar; sin ellos muestra una pantalla de error y no deja trabajar.

## Dónde están los datos

- Base de datos: **`crm`**.
- Tabla **`documento`**: una sola fila (`id = 1`) con el documento JSON completo del CRM.
- Tabla **`historial`**: las últimas 100 versiones anteriores del documento, como red de seguridad.
- Conexión: `%LOCALAPPDATA%\MyCrm\mysql\crm.cnf` (usuario, clave y puerto).
- Datos de MySQL: `%LOCALAPPDATA%\MyCrm\mysql\data`.

El servidor escucha solo en `127.0.0.1:8000`, así que no queda expuesto a la red local ni a internet.

## Respaldos

En **Configuración → Tus datos** puedes descargar un respaldo JSON y volver a cargarlo. Ese archivo es el documento completo y sirve para mover el CRM a otro computador.

Si ya tenías datos guardados en el navegador (`localStorage`) y MySQL está vacío, la app los sube sola la primera vez que abre desde `localhost:8000`. Si tus datos venían de otra dirección o de abrir el archivo directamente, descarga un respaldo desde el CRM anterior y cárgalo con **Cargar un respaldo**.

## Estructura

```
Index.html              Página de entrada
iniciar-crm.bat         Enciende MySQL y el servidor local
servidor/
  servidor.py           Servidor local + API de MySQL
app/
  css/estilos.css       Estilos de toda la aplicación
  js/crm.js             Código de la aplicación (fuente editable)
  js/crm.min.js         Copia minificada de referencia
  vendor/               pdfmake y fuentes para generar PDF
```

## API local

| Método | Ruta | Qué hace |
|---|---|---|
| `GET` | `/api/salud` | Estado de MySQL y del documento |
| `GET` | `/api/db` | Devuelve el documento completo (`204` si aún no existe) |
| `PUT` | `/api/db` | Guarda el documento completo |
| `GET` | `/api/historial` | Lista las últimas revisiones |

## Versión

2.0.0

## Créditos

Desarrollado por [SICS](https://alvarocofre.dev).
