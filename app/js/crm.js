(() => {
  const le = {
      Chile: {
        moneda: {
          codigo: "CLP",
          simbolo: "$",
          decimales: 0,
          miles: ".",
          decimal: ",",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 19
        },
        id_tributario: "RUT",
        nombre_documento: "Cotización",
        telefono: "56"
      },
      México: {
        moneda: {
          codigo: "MXN",
          simbolo: "$",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 16
        },
        id_tributario: "RFC",
        nombre_documento: "Cotización",
        telefono: "52"
      },
      Colombia: {
        moneda: {
          codigo: "COP",
          simbolo: "$",
          decimales: 0,
          miles: ".",
          decimal: ",",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 19
        },
        id_tributario: "NIT",
        nombre_documento: "Cotización",
        telefono: "57"
      },
      Perú: {
        moneda: {
          codigo: "PEN",
          simbolo: "S/",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IGV",
          tasa: 18
        },
        id_tributario: "RUC",
        nombre_documento: "Cotización",
        telefono: "51"
      },
      Argentina: {
        moneda: {
          codigo: "ARS",
          simbolo: "$",
          decimales: 2,
          miles: ".",
          decimal: ",",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 21
        },
        id_tributario: "CUIT",
        nombre_documento: "Presupuesto",
        telefono: "54"
      },
      España: {
        moneda: {
          codigo: "EUR",
          simbolo: "€",
          decimales: 2,
          miles: ".",
          decimal: ",",
          simbolo_despues: !0
        },
        impuesto: {
          nombre: "IVA",
          tasa: 21
        },
        id_tributario: "NIF",
        nombre_documento: "Presupuesto",
        telefono: "34"
      },
      Uruguay: {
        moneda: {
          codigo: "UYU",
          simbolo: "$",
          decimales: 2,
          miles: ".",
          decimal: ",",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 22
        },
        id_tributario: "RUT",
        nombre_documento: "Presupuesto",
        telefono: "598"
      },
      Paraguay: {
        moneda: {
          codigo: "PYG",
          simbolo: "Gs.",
          decimales: 0,
          miles: ".",
          decimal: ",",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 10
        },
        id_tributario: "RUC",
        nombre_documento: "Presupuesto",
        telefono: "595"
      },
      Bolivia: {
        moneda: {
          codigo: "BOB",
          simbolo: "Bs",
          decimales: 2,
          miles: ".",
          decimal: ",",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 13
        },
        id_tributario: "NIT",
        nombre_documento: "Cotización",
        telefono: "591"
      },
      Ecuador: {
        moneda: {
          codigo: "USD",
          simbolo: "$",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 15
        },
        id_tributario: "RUC",
        nombre_documento: "Cotización",
        telefono: "593"
      },
      "Costa Rica": {
        moneda: {
          codigo: "CRC",
          simbolo: "₡",
          decimales: 2,
          miles: ".",
          decimal: ",",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 13
        },
        id_tributario: "Cédula jurídica",
        nombre_documento: "Cotización",
        telefono: "506"
      },
      Guatemala: {
        moneda: {
          codigo: "GTQ",
          simbolo: "Q",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 12
        },
        id_tributario: "NIT",
        nombre_documento: "Cotización",
        telefono: "502"
      },
      "El Salvador": {
        moneda: {
          codigo: "USD",
          simbolo: "$",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 13
        },
        id_tributario: "NIT",
        nombre_documento: "Cotización",
        telefono: "503"
      },
      Honduras: {
        moneda: {
          codigo: "HNL",
          simbolo: "L",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "ISV",
          tasa: 15
        },
        id_tributario: "RTN",
        nombre_documento: "Cotización",
        telefono: "504"
      },
      Nicaragua: {
        moneda: {
          codigo: "NIO",
          simbolo: "C$",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "IVA",
          tasa: 15
        },
        id_tributario: "RUC",
        nombre_documento: "Cotización",
        telefono: "505"
      },
      Panamá: {
        moneda: {
          codigo: "USD",
          simbolo: "$",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "ITBMS",
          tasa: 7
        },
        id_tributario: "RUC",
        nombre_documento: "Cotización",
        telefono: "507"
      },
      "República Dominicana": {
        moneda: {
          codigo: "DOP",
          simbolo: "RD$",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "ITBIS",
          tasa: 18
        },
        id_tributario: "RNC",
        nombre_documento: "Cotización",
        telefono: "1"
      },
      "Estados Unidos": {
        moneda: {
          codigo: "USD",
          simbolo: "$",
          decimales: 2,
          miles: ",",
          decimal: ".",
          simbolo_despues: !1
        },
        impuesto: {
          nombre: "Sales tax",
          tasa: 0
        },
        id_tributario: "EIN",
        nombre_documento: "Cotización",
        telefono: "1"
      }
    },
    v = (() => {
      "use strict";

      function e(D, _, ...O) {
        const G = document.createElement(D);
        for (const [Q, X] of Object.entries(_ || {})) X == null || X === !1 || (Q.startsWith("on") ? G.addEventListener(Q.slice(2), X) : Q === "class" ? G.className = X : Q === "value" ? G.value = X : Q === "checked" || Q === "selected" || Q === "disabled" ? G[Q] = !0 : G.setAttribute(Q, X === !0 ? "" : X));
        return H(G, O), G
      }

      function H(D, _) {
        if (!(_ == null || _ === !1)) {
          if (Array.isArray(_)) return _.forEach(O => H(D, O));
          D.appendChild(_ instanceof Node ? _ : document.createTextNode(String(_)))
        }
      }

      function V(D, ..._) {
        return H(D, _), D
      }

      function F(D) {
        for (; D.firstChild;) D.removeChild(D.firstChild);
        return D
      }
      const r = () => crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2);

      function T(D, _) {
        return +(Math.round(+(D + "e" + _)) + "e-" + _)
      }

      function A(D, _) {
        const O = _.decimales,
          [G, Q] = Math.abs(T(D || 0, O)).toFixed(O).split("."),
          X = G.replace(/\B(?=(\d{3})+(?!\d))/g, _.miles);
        return (D < 0 ? "-" : "") + X + (O ? _.decimal + Q : "")
      }

      function P(D, _) {
        const O = A(D, _);
        return _.simbolo_despues ? O + " " + _.simbolo : _.simbolo.length === 1 ? _.simbolo + O : _.simbolo + " " + O
      }

      function i(D, _) {
        const O = parseFloat((D.replace(/[.,]/g, "") || "0") + "." + (_.replace(/[.,]/g, "") || "0"));
        return isFinite(O) ? O : null
      }

      function d(D, _) {
        const O = String(D || "").replace(/\s/g, "").split(_.simbolo).join("").replace(/[^\d.,]/g, "").replace(/^[.,]+/, "");
        if (!/\d/.test(O)) return null;
        const G = Math.max(O.lastIndexOf("."), O.lastIndexOf(",")),
          X = G >= 0 && O.length - G - 1 <= 2 ? i(O.slice(0, G), O.slice(G + 1)) : i(O, "");
        return X == null ? null : T(X, _.decimales)
      }

      function c(D, _, O = 1e6, G = 4) {
        const Q = String(D || "").replace(/[^\d.,]/g, "");
        if (!/\d/.test(Q)) return null;
        const X = _.decimal,
          ie = _.miles === X ? null : _.miles;
        let ne;
        const re = Q.lastIndexOf(X);
        if (re >= 0) ne = i(Q.slice(0, re), Q.slice(re + 1));
        else if (ie && Q.includes(ie) && !new RegExp("^\\d{1,3}(\\" + ie + "\\d{3})+$").test(Q)) {
          const b = Q.lastIndexOf(ie);
          ne = i(Q.slice(0, b), Q.slice(b + 1))
        } else ne = i(Q, "");
        return ne == null ? null : Math.min(O, T(ne, G))
      }

      function f(D, _) {
        const [O, G] = String(T(D || 0, 4)).split(".");
        return O.replace(/\B(?=(\d{3})+(?!\d))/g, _.miles) + (G ? _.decimal + G : "")
      }
      const E = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        y = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

      function p() {
        const D = new Date;
        return D.getFullYear() + "-" + String(D.getMonth() + 1).padStart(2, "0") + "-" + String(D.getDate()).padStart(2, "0")
      }

      function l(D) {
        const _ = String(D);
        if (_.length > 10) {
          const X = new Date(_);
          return {
            a: X.getFullYear(),
            m: X.getMonth() + 1,
            d: X.getDate()
          }
        }
        const [O, G, Q] = _.split("-").map(Number);
        return {
          a: O,
          m: G,
          d: Q
        }
      }

      function I(D) {
        if (!D) return "";
        const {
          a: _,
          m: O,
          d: G
        } = l(D);
        return G + " " + E[O - 1] + " " + _
      }

      function M(D) {
        if (!D) return "";
        const {
          a: _,
          m: O,
          d: G
        } = l(D);
        return G + " de " + y[O - 1] + " de " + _
      }

      function B(D, _) {
        const {
          a: O,
          m: G,
          d: Q
        } = l(D), X = new Date(O, G - 1, Q + _);
        return X.getFullYear() + "-" + String(X.getMonth() + 1).padStart(2, "0") + "-" + String(X.getDate()).padStart(2, "0")
      }

      function j(D) {
        const {
          a: _,
          m: O,
          d: G
        } = l(D), Q = l(p());
        return Math.round((new Date(_, O - 1, G) - new Date(Q.a, Q.m - 1, Q.d)) / 864e5)
      }

      function m(D) {
        const _ = j(D);
        return _ === 0 ? "hoy" : _ === 1 ? "mañana" : _ === -1 ? "ayer" : _ < 0 ? "hace " + -_ + " días" : "en " + _ + " días"
      }
      const S = (D, _, O) => D + " " + (D === 1 ? _ : O),
        x = D => String(D || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      function N(D) {
        const _ = String(D || "").trim().split(/\s+/).filter(Boolean);
        return ((_[0] || "?")[0] + (_.length > 1 ? _[_.length - 1][0] : "")).toUpperCase()
      }

      function C(D, _) {
        let O = String(D || "").trim();
        const G = O.startsWith("+");
        if (O = O.replace(/\D/g, ""), !O) return null;
        const Q = (le[_] || {}).telefono || "";
        return !G && Q && !O.startsWith(Q) && (O = Q + O.replace(/^0+/, "")), "https://wa.me/" + O
      }
      const R = D => {
          const _ = String(D || "").replace(/[^\d+]/g, "");
          return _ ? "tel:" + _ : null
        },
        W = D => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(D || "").trim()) ? "mailto:" + encodeURIComponent(D.trim()) : null;

      function K(D, _, O) {
        const G = URL.createObjectURL(_ instanceof Blob ? _ : new Blob([_], {
            type: O
          })),
          Q = e("a", {
            href: G,
            download: D
          });
        document.body.appendChild(Q), Q.click(), Q.remove(), setTimeout(() => URL.revokeObjectURL(G), 2e3)
      }
      return {
        h: e,
        poner: V,
        vaciar: F,
        uid: r,
        redondear: T,
        numero: A,
        dinero: P,
        leerMonto: d,
        leerCantidad: c,
        cantidad: f,
        hoy: p,
        fecha: I,
        fechaLarga: M,
        sumarDias: B,
        diasHasta: j,
        relativo: m,
        cuenta: S,
        normalizar: x,
        iniciales: N,
        whatsapp: C,
        telefonoLink: R,
        correoLink: W,
        descargar: K,
        MESES: E
      }
    })(),
    je = {
      inicio: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
      leads: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20.5a6.5 6.5 0 0 1 13 0"/><path d="M16 4.7a3.5 3.5 0 0 1 0 6.6"/><path d="M18.5 14.4a6.5 6.5 0 0 1 3 5.6"/>',
      clientes: '<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8.5 7V5.5A2.5 2.5 0 0 1 11 3h2a2.5 2.5 0 0 1 2.5 2.5V7"/><path d="M3 12.5h18"/>',
      cotizaciones: '<path d="M14 2.5H6.5A2 2 0 0 0 4.5 4.5v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z"/><path d="M14 2.5V8h5.5"/><path d="M8.5 13h7M8.5 17h4.5"/>',
      configuracion: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
      buscar: '<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.5-4.5"/>',
      mas: '<path d="M12 5v14M5 12h14"/>',
      editar: '<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/>',
      borrar: '<path d="M3.5 6.5h17"/><path d="M8.5 6.5V4.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2"/><path d="M6 6.5l1 13a1.5 1.5 0 0 0 1.5 1.4h7a1.5 1.5 0 0 0 1.5-1.4l1-13"/>',
      cliente: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20.5a6.5 6.5 0 0 1 13 0"/><path d="m16 11 2 2 4-4"/>',
      telefono: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
      correo: '<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6.5 9 6.5 9-6.5"/>',
      whatsapp: '<path d="M4.5 4.5h15A1.5 1.5 0 0 1 21 6v9.5a1.5 1.5 0 0 1-1.5 1.5H10l-5 4v-4h-.5A1.5 1.5 0 0 1 3 15.5V6a1.5 1.5 0 0 1 1.5-1.5z"/><path d="M8 10.75h.01M12 10.75h.01M16 10.75h.01"/>',
      calendario: '<rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
      descargar: '<path d="M12 3.5v12"/><path d="m7 10.5 5 5 5-5"/><path d="M4 20.5h16"/>',
      subir: '<path d="M12 15.5v-12"/><path d="m7 8.5 5-5 5 5"/><path d="M4 20.5h16"/>',
      cerrar: '<path d="M18 6 6 18M6 6l12 12"/>',
      check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
      flecha: '<path d="M7 17 17 7M8 7h9v9"/>',
      abajo: '<path d="m6 9 6 6 6-6"/>',
      atras: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
      copiar: '<rect x="8.5" y="8.5" width="12" height="12" rx="2.5"/><path d="M15.5 8.5V6A2.5 2.5 0 0 0 13 3.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5"/>',
      propuesta: '<rect x="3.5" y="2.5" width="17" height="19" rx="2.5"/><path d="M7.5 7h9M7.5 11h9M7.5 15h5"/>',
      escudo: '<path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6z"/><path d="m9 12 2 2 4-4"/>',
      alerta: '<path d="M10.3 3.9 1.8 18.5A2 2 0 0 0 3.5 21.5h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4.5M12 17.5h.01"/>',
      info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 11v5.5M12 7.5h.01"/>',
      documento: '<path d="M14 2.5H6.5A2 2 0 0 0 4.5 4.5v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z"/><path d="M14 2.5V8h5.5"/><path d="m15.5 14.5 1 1.6 1.7.3-1.2 1.3.3 1.8-1.8-.9-1.8.9.3-1.8-1.2-1.3 1.7-.3z"/>',
      candado: '<rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>'
    };

  function oe(e, H) {
    const V = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return V.setAttribute("viewBox", "0 0 24 24"), V.setAttribute("fill", "none"), V.setAttribute("stroke", "currentColor"), V.setAttribute("stroke-width", "1.8"), V.setAttribute("stroke-linecap", "round"), V.setAttribute("stroke-linejoin", "round"), V.setAttribute("aria-hidden", "true"), V.setAttribute("class", "icono" + (H ? " " + H : "")), V.innerHTML = je[e] || "", V
  }
  const fe = (() => {
      "use strict";
      const V = (P, i) => BigInt(Math.round(+(String(P || 0) + "e" + i))),
        F = P => 10n ** BigInt(P),
        r = (P, i) => (2n * P + i) / (2n * i),
        T = (P, i) => Number(P) / 10 ** i;

      function A(P, i) {
        const d = i.decimales,
          c = P.impuesto || {
            tasa: 0,
            modo: "sin"
          },
          f = V(c.tasa || 0, 2),
          E = 100n * F(2),
          y = (P.items || []).map(m => {
            const S = V(m.cantidad || 0, 4),
              x = V(v.redondear(m.precio || 0, d), d),
              N = E - V(m.descuento || 0, 2),
              C = r(S * x * N, F(4) * E);
            return {
              precio: T(x, d),
              total: T(C, d),
              _total: C
            }
          }),
          p = y.reduce((m, S) => m + S._total, 0n),
          l = r(p * V(P.descuento || 0, 2), E),
          I = p - l;
        let M = I,
          B = 0n,
          j = I;
        return c.modo === "suma" && f > 0n ? (B = r(M * f, E), j = M + B) : c.modo === "incluido" && f > 0n && (M = r(j * E, E + f), B = j - M), y.forEach(m => delete m._total), {
          lineas: y,
          subtotal: T(p, d),
          descuento: T(l, d),
          neto: T(M, d),
          impuesto: T(B, d),
          total: T(j, d),
          conImpuesto: c.modo !== "sin" && f > 0n
        }
      }
      return {
        totales: A,
        DEC_CANTIDAD: 4,
        DEC_PORCENTAJE: 2
      }
    })(),
    u = (() => {
      "use strict";
      const e = "crm-propuestas-comunidad:v1",
        VERSION = 2,
        PRIORIDADES = [{
          id: "baja",
          nombre: "Baja"
        }, {
          id: "normal",
          nombre: "Normal"
        }, {
          id: "alta",
          nombre: "Alta"
        }],
        V = [{
          id: "nuevo",
          nombre: "Nuevo"
        }, {
          id: "contactado",
          nombre: "Contactado"
        }, {
          id: "cotizado",
          nombre: "Cotizado"
        }, {
          id: "ganado",
          nombre: "Ganado"
        }, {
          id: "perdido",
          nombre: "Perdido"
        }],
        F = ["nuevo", "contactado", "cotizado"],
        r = ["WhatsApp", "Instagram", "Facebook", "Recomendación", "Sitio web", "Llamada", "Otro"],
        T = [{
          id: "borrador",
          nombre: "Borrador"
        }, {
          id: "enviada",
          nombre: "Enviada"
        }, {
          id: "aceptada",
          nombre: "Aceptada"
        }, {
          id: "rechazada",
          nombre: "Rechazada"
        }],
        A = ["suma", "incluido", "sin"],
        P = ["clasica", "minimal", "corporativa", "elegante", "moderna", "ejecutiva"],
        i = {
          principal: "#1d4e89",
          acento: "#e07a2f"
        },
        d = {
          cotizacion: {
            prefijo: "COT",
            nombre: "Cotización"
          },
          propuesta: {
            prefijo: "PROP",
            nombre: "Propuesta"
          }
        };
      let c = null,
        f = !1;
      const E = [],
        y = (a, z = 200) => typeof a == "string" ? a.slice(0, z) : "",
        p = (a, z, w, U = null) => typeof a == "number" && isFinite(a) ? Math.min(w, Math.max(z, a)) : U,
        l = a => typeof a == "string" && /^\d{4}-\d{2}-\d{2}$/.test(a) ? a : "",
        I = a => typeof a == "string" && !isNaN(Date.parse(a)) ? a : new Date().toISOString(),
        M = a => typeof a == "string" && /^[\w-]{1,64}$/.test(a),
        B = a => M(a) ? a : v.uid(),
        j = (a, z, w) => z.includes(a) ? a : w,
        m = a => Array.isArray(a) ? a.filter(z => z && typeof z == "object") : [],
        S = (a, z) => typeof a == "string" && /^#[0-9a-f]{6}$/i.test(a) ? a.toLowerCase() : z,
        x = a => a && typeof a == "object" && !Array.isArray(a) ? a : {},
        N = (a, z, w, U, Z) => v.redondear(p(a, z, w, U), Z),
        C = (a, z, w) => (Array.isArray(a) ? a : []).filter(U => typeof U == "string" && U.trim()).slice(0, z).map(U => U.slice(0, w)),
        R = a => typeof a == "string" && /^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]+$/.test(a) && a.length < 15e5 ? a : "";

      function W(a) {
        return a = a && typeof a == "object" ? a : {}, {
          codigo: y(a.codigo, 5) || "CLP",
          simbolo: y(a.simbolo, 5) || "$",
          decimales: a.decimales === 2 ? 2 : 0,
          miles: j(a.miles, [".", ",", " ", "'"], "."),
          decimal: j(a.decimal, [",", "."], ","),
          simbolo_despues: a.simbolo_despues === !0
        }
      }

      function K(a) {
        if (!a || typeof a != "object") return null;
        const z = le[a.pais] ? a.pais : "",
          w = a.impuesto && typeof a.impuesto == "object" ? a.impuesto : {},
          U = a.idTributario && typeof a.idTributario == "object" ? a.idTributario : {};
        return {
          nombre: y(a.nombre, 120),
          pais: z,
          moneda: W(a.moneda || (le[z] || {}).moneda),
          impuesto: {
            nombre: y(w.nombre, 30) || "IVA",
            tasa: N(w.tasa, 0, 100, 0, 2),
            modo: j(w.modo, A, w.incluido ? "incluido" : w.tasa > 0 ? "suma" : "sin")
          },
          validez: Math.floor(p(a.validez, 1, 365, 15)),
          condiciones: D(a.condiciones),
          datosPago: y(a.datosPago, 600),
          idTributario: {
            etiqueta: y(U.etiqueta, 20),
            valor: y(U.valor, 40)
          },
          email: y(a.email, 120),
          telefono: y(a.telefono, 40),
          direccion: y(a.direccion, 200),
          web: y(a.web, 120),
          logo: R(a.logo),
          logoProporcion: p(a.logoProporcion, .1, 20, 1),
          colores: {
            principal: S(x(a.colores).principal, i.principal),
            acento: S(x(a.colores).acento, i.acento)
          },
          plantilla: j(a.plantilla, P, "clasica")
        }
      }

      function D(a) {
        return a = x(a), {
          pago: y(a.pago, 1e3),
          entrega: y(a.entrega, 1e3),
          garantia: y(a.garantia, 1e3),
          notas: y(a.notas, 2e3)
        }
      }

      function _(a) {
        return {
          id: B(a.id),
          nombre: y(a.nombre, 120),
          empresa: y(a.empresa, 120),
          telefono: y(a.telefono, 40),
          email: y(a.email, 120),
          origen: y(a.origen, 40),
          interes: y(a.interes, 500),
          valor: p(a.valor, 0, 1e12),
          etapa: j(a.etapa, V.map(z => z.id), "nuevo"),
          seguimiento: l(a.seguimiento),
          notas: y(a.notas, 2e3),
          clienteId: M(a.clienteId) ? a.clienteId : "",
          creado: I(a.creado),
          actualizado: I(a.actualizado)
        }
      }

      function O(a) {
        return {
          id: B(a.id),
          nombre: y(a.nombre, 120),
          empresa: y(a.empresa, 120),
          idTributario: y(a.idTributario, 40),
          email: y(a.email, 120),
          telefono: y(a.telefono, 40),
          direccion: y(a.direccion, 200),
          notas: y(a.notas, 2e3),
          creado: I(a.creado),
          actualizado: I(a.actualizado)
        }
      }

      function G(a) {
        return {
          id: B(a.id),
          descripcion: y(a.descripcion, 300),
          detalle: y(a.detalle, 1e3),
          cantidad: N(a.cantidad, 0, 1e6, 1, 4),
          unidad: y(a.unidad, 20),
          precio: N(a.precio, 0, 1e12, 0, 2),
          descuento: N(a.descuento, 0, 100, 0, 2)
        }
      }

      function Q(a) {
        return a = x(a), {
          titulo: y(a.titulo, 200),
          contexto: y(a.contexto, 3e3),
          solucion: y(a.solucion, 3e3),
          incluye: C(a.incluye, 30, 1e3),
          noIncluye: C(a.noIncluye, 30, 1e3),
          etapas: m(a.etapas).slice(0, 20).map(z => ({
            nombre: y(z.nombre, 120),
            duracion: y(z.duracion, 60),
            descripcion: y(z.descripcion, 600)
          })),
          porQue: y(a.porQue, 2e3),
          proximos: y(a.proximos, 1500)
        }
      }

      function Tarea(a) {
        a = x(a);
        const z = x(a.entidad);
        return {
          id: B(a.id),
          titulo: y(a.titulo, 200),
          detalle: y(a.detalle, 2e3),
          vence: l(a.vence),
          prioridad: j(a.prioridad, PRIORIDADES.map(w => w.id), "normal"),
          estado: a.estado === "hecha" ? "hecha" : "pendiente",
          entidad: {
            tipo: j(z.tipo, ["lead", "cliente", "cotizacion"], ""),
            id: M(z.id) ? z.id : ""
          },
          creado: I(a.creado),
          actualizado: I(a.actualizado),
          completada: typeof a.completada == "string" && !isNaN(Date.parse(a.completada)) ? a.completada : ""
        }
      }

      function Actividad(a) {
        a = x(a);
        return {
          id: B(a.id),
          fecha: I(a.fecha),
          tipo: y(a.tipo, 30) || "sistema",
          entidadTipo: j(a.entidadTipo, ["lead", "cliente", "cotizacion", "tarea", "plantilla"], ""),
          entidadId: M(a.entidadId) ? a.entidadId : "",
          texto: y(a.texto, 500),
          meta: x(a.meta)
        }
      }

      function Plantilla(a) {
        a = x(a);
        return {
          id: B(a.id),
          nombre: y(a.nombre, 120).trim() || "Plantilla sin nombre",
          propuesta: Q(a.propuesta),
          creado: I(a.creado)
        }
      }

      function X(a, z) {
        const w = j(a.tipo, Object.keys(d), "cotizacion"),
          U = x(a.contacto),
          Z = x(a.cliente),
          se = x(a.impuesto);
        return {
          id: B(a.id),
          tipo: w,
          numero: Math.floor(p(a.numero, 0, 1e6, 0)),
          estado: j(a.estado, T.map(he => he.id), "borrador"),
          fecha: l(a.fecha) || v.hoy(),
          validez: Math.floor(p(a.validez, 1, 365, 15)),
          contacto: {
            tipo: j(U.tipo, ["cliente", "lead"], ""),
            id: M(U.id) ? U.id : ""
          },
          cliente: {
            nombre: y(Z.nombre, 120),
            empresa: y(Z.empresa, 120),
            idTributario: y(Z.idTributario, 40),
            email: y(Z.email, 120),
            telefono: y(Z.telefono, 40),
            direccion: y(Z.direccion, 200)
          },
          items: m(a.items).slice(0, 200).map(G),
          descuento: N(a.descuento, 0, 100, 0, 2),
          impuesto: {
            nombre: y(se.nombre, 30) || "IVA",
            tasa: N(se.tasa, 0, 100, 0, 2),
            modo: j(se.modo, A, "sin")
          },
          condiciones: D(a.condiciones),
          propuesta: w === "propuesta" ? Q(a.propuesta) : null,
          plantilla: j(a.plantilla, P, ""),
          moneda: W(x(a.moneda).codigo ? a.moneda : z || le.Chile.moneda),
          creado: I(a.creado),
          actualizado: I(a.actualizado)
        }
      }

      function ie() {
        return {
          version: VERSION,
          negocio: null,
          leads: [],
          clientes: [],
          cotizaciones: [],
          tareas: [],
          plantillas: [],
          actividad: [],
          contadores: {
            cotizacion: 0,
            propuesta: 0
          },
          numeracion: {
            cotizacion: {
              prefijo: d.cotizacion.prefijo
            },
            propuesta: {
              prefijo: d.propuesta.prefijo
            }
          },
          respaldo: {
            ultimo: ""
          },
          migrado: null,
          creado: new Date().toISOString()
        }
      }

      function ne(a) {
        if (!a || typeof a != "object") throw new Error("formato desconocido");
        const desde = a.version;
        if (desde !== 1 && desde !== VERSION) throw new Error("version desconocida");
        const z = ie(),
          w = a.contadores && typeof a.contadores == "object" ? a.contadores : {},
          U = K(a.negocio),
          num = a.numeracion && typeof a.numeracion == "object" ? a.numeracion : {},
          numeracion = {};
        Object.keys(d).forEach(tipo => {
          const cfg = num[tipo] && typeof num[tipo] == "object" ? num[tipo] : {},
            pref = y(cfg.prefijo, 8).toUpperCase().replace(/[^A-Z0-9]/g, "");
          numeracion[tipo] = {
            prefijo: pref || d[tipo].prefijo
          }
        });
        const estado = {
          version: VERSION,
          negocio: U,
          leads: m(a.leads).map(_).filter(Z => Z.nombre),
          clientes: m(a.clientes).map(O).filter(Z => Z.nombre),
          cotizaciones: m(a.cotizaciones).map(Z => X(Z, U && U.moneda)).filter(Z => Z.numero > 0),
          tareas: desde === VERSION ? m(a.tareas).slice(0, 5e3).map(Tarea).filter(Z => Z.titulo) : [],
          plantillas: desde === VERSION ? m(a.plantillas).slice(0, 100).map(Plantilla) : [],
          actividad: desde === VERSION ? m(a.actividad).slice(0, 2e3).map(Actividad).filter(Z => Z.texto) : [],
          contadores: {
            cotizacion: Math.floor(p(w.cotizacion, 0, 1e6, 0)),
            propuesta: Math.floor(p(w.propuesta, 0, 1e6, 0))
          },
          numeracion: numeracion,
          respaldo: {
            ultimo: a.respaldo && typeof a.respaldo.ultimo == "string" && !isNaN(Date.parse(a.respaldo.ultimo)) ? a.respaldo.ultimo : ""
          },
          migrado: null,
          creado: a.creado ? I(a.creado) : z.creado
        };
        if (desde !== VERSION) {
          estado.migrado = {
            desde: desde,
            cuando: new Date().toISOString()
          }, estado.actividad = [{
            id: v.uid(),
            fecha: new Date().toISOString(),
            tipo: "migracion",
            entidadTipo: "",
            entidadId: "",
            texto: "Tus datos se actualizaron al formato nuevo (versión " + VERSION + "). No se borró nada.",
            meta: {
              desde: desde
            }
          }]
        }
        return estado
      }

      function re() {
        let a;
        try {
          a = localStorage.getItem(e)
        } catch {
          return {
            error: "sin-almacenamiento"
          }
        }
        if (a == null) return c = ie(), {
          nuevo: !0
        };
        let w;
        try {
          w = JSON.parse(a)
        } catch {
          return f = !0, {
            error: "ilegible",
            crudo: a
          }
        }
        const desde = w && typeof w == "object" ? w.version : null;
        if (desde !== 1 && desde !== VERSION) return {
          error: "version",
          version: desde,
          crudo: a
        };
        try {
          c = ne(w);
          if (desde !== VERSION) {
            let copia = !1;
            try {
              localStorage.setItem(e + ":respaldo-v" + desde, a), copia = !0
            } catch {}
            if (!b(!0) && copia) {
              try {
                localStorage.removeItem(e + ":respaldo-v" + desde)
              } catch {}
              b(!0)
            }
            return {
              migrado: !0,
              desde: desde
            }
          }
          return {}
        } catch {
          return f = !0, {
            error: "ilegible",
            crudo: a
          }
        }
      }

      function b(silencioso) {
        if (f) return silencioso || s.aviso("No se guardó: el CRM está abierto en otra pestaña. Trabaja en esa.", "error"), !1;
        try {
          localStorage.setItem(e, JSON.stringify(c))
        } catch {
          return silencioso || s.aviso("No se pudo guardar: el espacio del navegador está lleno. Descarga un respaldo y avísale a quien te pasó el CRM.", "error"), !1
        }
        return E.forEach(a => a()), !0
      }

      function L(a) {
        E.push(a)
      }

      function Y() {
        f = !0
      }
      const o = () => {
        try {
          return ((localStorage.getItem(e) || "").length + e.length) / 5242880
        } catch {
          return 0
        }
      };

      const nombreEtapa = a => (V.find(z => z.id === a) || {}).nombre || a,
        nombreEstado = a => (T.find(z => z.id === a) || {}).nombre || a;

      function registrar(tipo, entidadTipo, entidadId, texto, meta) {
        c.actividad.unshift({
          id: v.uid(),
          fecha: new Date().toISOString(),
          tipo: tipo,
          entidadTipo: entidadTipo || "",
          entidadId: entidadId || "",
          texto: texto,
          meta: meta || {}
        }), c.actividad.length > 2e3 && (c.actividad.length = 2e3)
      }

      function t(a) {
        const z = new Date().toISOString(),
          w = c.leads.find(Z => Z.id === a.id),
          U = _({
            ...w || {
              creado: z
            },
            ...a,
            actualizado: z
          });
        if (w) {
          const Z = [];
          w.etapa !== U.etapa && Z.push("Etapa: " + nombreEtapa(w.etapa) + " → " + nombreEtapa(U.etapa)), w.seguimiento !== U.seguimiento && Z.push(U.seguimiento ? "Próximo seguimiento: " + v.fecha(U.seguimiento) : "Seguimiento quitado"), ["nombre", "empresa", "telefono", "email", "origen", "interes", "valor", "notas", "clienteId"].some(he => w[he] !== U[he]) && Z.push("Datos actualizados"), Object.assign(w, U), Z.length && registrar("lead", "lead", U.id, Z.join(" · "))
        } else c.leads.unshift(U), registrar("lead", "lead", U.id, "Lead creado");
        return b() ? w || U : null
      }

      function n(a) {
        const z = c.leads.find(w => w.id === a);
        z && registrar("lead", "lead", a, "Lead eliminado: " + z.nombre), c.leads = c.leads.filter(w => w.id !== a), c.cotizaciones.forEach(w => {
          w.contacto.tipo === "lead" && w.contacto.id === a && (w.contacto = {
            tipo: "",
            id: ""
          })
        }), c.tareas.forEach(w => {
          w.entidad.tipo === "lead" && w.entidad.id === a && (w.entidad = {
            tipo: "",
            id: ""
          })
        }), b()
      }

      function g(a) {
        const z = new Date().toISOString(),
          w = c.clientes.find(Z => Z.id === a.id),
          U = O({
            ...w || {
              creado: z
            },
            ...a,
            actualizado: z
          });
        if (w) {
          const Z = [];
          ["nombre", "empresa", "idTributario", "email", "telefono", "direccion", "notas"].some(he => w[he] !== U[he]) && Z.push("Datos actualizados"), Object.assign(w, U), Z.length && registrar("cliente", "cliente", U.id, Z.join(" · "))
        } else c.clientes.unshift(U), registrar("cliente", "cliente", U.id, "Cliente creado");
        return b() ? w || U : null
      }

      function h(a) {
        const z = c.clientes.find(w => w.id === a);
        z && registrar("cliente", "cliente", a, "Cliente eliminado: " + z.nombre), c.clientes = c.clientes.filter(w => w.id !== a), c.leads.forEach(w => {
          w.clienteId === a && (w.clienteId = "")
        }), c.cotizaciones.forEach(w => {
          w.contacto.tipo === "cliente" && w.contacto.id === a && (w.contacto = {
            tipo: "",
            id: ""
          })
        }), c.tareas.forEach(w => {
          w.entidad.tipo === "cliente" && w.entidad.id === a && (w.entidad = {
            tipo: "",
            id: ""
          })
        }), b()
      }

      function q(a) {
        return c.negocio = K({
          ...c.negocio || {},
          ...a
        }), b()
      }

      function k(a) {
        const z = le[a];
        return z ? {
          pais: a,
          moneda: z.moneda,
          impuesto: {
            nombre: z.impuesto.nombre,
            tasa: z.impuesto.tasa,
            modo: c.negocio && c.negocio.impuesto.modo || "sin"
          },
          idTributario: {
            etiqueta: z.id_tributario,
            valor: c.negocio && c.negocio.idTributario.valor || ""
          }
        } : {}
      }
      const ee = a => ((c.numeracion && c.numeracion[a.tipo] && c.numeracion[a.tipo].prefijo) || d[a.tipo].prefijo) + "-" + String(a.numero).padStart(4, "0"),
        ae = a => v.sumarDias(a.fecha, a.validez),
        $ = a => a.estado === "enviada" && v.diasHasta(ae(a)) < 0;

      function J(a, z) {
        return a === "cliente" ? c.clientes.find(w => w.id === z) : a === "lead" ? c.leads.find(w => w.id === z) : null
      }

      function ye(a) {
        return {
          nombre: a.nombre,
          empresa: a.empresa,
          idTributario: a.idTributario || "",
          email: a.email,
          telefono: a.telefono,
          direccion: a.direccion || ""
        }
      }

      function pe(a, z) {
        const w = c.negocio || K({
            pais: "Chile",
            ...k("Chile")
          }),
          [U, Z] = String(z || "").split(":"),
          se = J(U, Z);
        return X({
          tipo: a,
          moneda: w.moneda,
          fecha: v.hoy(),
          validez: w.validez,
          contacto: se ? {
            tipo: U,
            id: Z
          } : {},
          cliente: se ? ye(se) : {},
          items: [{
            cantidad: 1
          }],
          impuesto: w.impuesto,
          condiciones: w.condiciones,
          propuesta: a === "propuesta" ? {} : null
        })
      }

      function me(a) {
        const z = new Date().toISOString(),
          w = c.cotizaciones.find(Z => Z.id === a.id),
          U = X({
            ...w || {
              creado: z
            },
            ...a,
            actualizado: z
          }, Se());
        if (w) {
          const Z = w.estado;
          Object.assign(w, U, {
            numero: w.numero,
            tipo: w.tipo
          }), Z !== U.estado && registrar("cotizacion", "cotizacion", U.id, "Estado: " + nombreEstado(Z) + " → " + nombreEstado(U.estado))
        } else {
          const Z = c.cotizaciones.filter(he => he.tipo === U.tipo).map(he => he.numero);
          U.numero = Math.max(c.contadores[U.tipo], 0, ...Z) + 1, c.contadores[U.tipo] = U.numero;
          const se = U.contacto.tipo === "lead" && J("lead", U.contacto.id);
          se && ["nuevo", "contactado"].includes(se.etapa) && (se.etapa = "cotizado"), c.cotizaciones.unshift(U), registrar("cotizacion", "cotizacion", U.id, "Cotización creada: " + ee(U))
        }
        return b() ? w || U : null
      }

      function Ce(a) {
        const z = c.cotizaciones.find(w => w.id === a);
        z && registrar("cotizacion", "cotizacion", a, "Cotización eliminada: " + ee(z)), c.cotizaciones = c.cotizaciones.filter(w => w.id !== a), b()
      }

      function ze(a) {
        const z = c.cotizaciones.find(U => U.id === a),
          w = JSON.parse(JSON.stringify(z));
        return delete w.id, delete w.numero, delete w.creado, w.estado = "borrador", w.fecha = v.hoy(), w.items.forEach(U => delete U.id), me(w)
      }

      function te(a, z) {
        c.cotizaciones.forEach(w => {
          w.contacto.tipo === "lead" && w.contacto.id === a && (w.contacto = {
            tipo: "cliente",
            id: z
          })
        }), b()
      }
      const be = (a, z) => c.cotizaciones.filter(w => w.contacto.tipo === a && w.contacto.id === z),
        Se = () => c.negocio ? c.negocio.moneda : W(le.Chile.moneda),
        Ae = a => a.moneda || Se(),
        xe = () => c.negocio && c.negocio.idTributario.etiqueta || "RUT";

      function Te(a) {
        c.respaldo.ultimo = new Date().toISOString(), registrar("respaldo", "", "", "Respaldo descargado" + (a ? " (" + a + ")" : "")), b(), v.descargar("respaldo-crm-" + v.hoy() + (a ? "-" + a : "") + ".json", JSON.stringify(c, null, 2), "application/json")
      }
      async function Ee(a) {
        if (a.size > 8 * 1024 * 1024) throw new Error("Ese archivo es demasiado grande para ser un respaldo del CRM.");
        try {
          const z = JSON.parse((await a.text()).replace(/^\uFEFF/, ""));
          return z && z.app === "mini-crm" ? {
            miniCrm: !0,
            leads: qe(z)
          } : ne(z)
        } catch {
          throw new Error('Ese archivo no es un respaldo del CRM, o está dañado. Busca uno que se llame "respaldo-crm-…" o "mini-crm-respaldo-…".')
        }
      }

      function qe(a) {
        return m(a.leads).slice(0, 5e3).map(z => {
          const w = m(z.historial).map(Z => y(Z.fecha, 10) + ": " + y(Z.texto, 1e3)).join(`
`),
            U = [y(z.notas, 2e3), w ? `Historial del Mini CRM:
` + w : ""].filter(Boolean).join(`

`);
          return _({
            nombre: z.nombre,
            telefono: z.telefono,
            email: z.email,
            origen: z.origen,
            interes: z.interes,
            valor: z.monto > 0 ? z.monto : null,
            etapa: z.etapa === "interesado" ? "contactado" : z.etapa,
            seguimiento: z.proximoContacto,
            notas: U,
            creado: z.creado,
            actualizado: z.actualizado
          })
        }).filter(z => z.nombre.trim())
      }

      function Le(a) {
        const z = U => v.normalizar(U.nombre) + "|" + String(U.telefono || "").replace(/\D/g, ""),
          w = new Set(c.leads.map(z));
        return a.filter(U => !w.has(z(U)) && w.add(z(U)))
      }

      function Pe(a) {
        return c.leads.push(...a), b() ? !0 : (c.leads.splice(-a.length), !1)
      }

      function Me(a) {
        const z = c;
        for (const w of Object.keys(d)) a.contadores[w] = Math.max(a.contadores[w], z.contadores[w]);
        return c = a, b() ? !0 : (c = z, !1)
      }
      function guardarTarea(a) {
        const z = new Date().toISOString(),
          w = c.tareas.find(item => item.id === a.id),
          U = Tarea({
            ...w || {
              creado: z
            },
            ...a,
            actualizado: z
          });
        if (!U.titulo) return null;
        return w ? Object.assign(w, U) : c.tareas.unshift(U), registrar("tarea", "tarea", U.id, w ? "Tarea actualizada: " + U.titulo : "Tarea creada: " + U.titulo), b() ? w || U : null
      }

      function borrarTarea(a) {
        const z = c.tareas.find(w => w.id === a);
        z && registrar("tarea", "tarea", a, "Tarea eliminada: " + z.titulo), c.tareas = c.tareas.filter(w => w.id !== a), b()
      }

      function alternarTarea(a) {
        const z = c.tareas.find(w => w.id === a);
        if (!z) return null;
        const w = z.estado === "hecha" ? "pendiente" : "hecha";
        return z.estado = w, z.completada = w === "hecha" ? new Date().toISOString() : "", z.actualizado = new Date().toISOString(), registrar("tarea", "tarea", z.id, (w === "hecha" ? "Tarea completada: " : "Tarea reabierta: ") + z.titulo), b() ? z : null
      }

      function tareasDe(a, z) {
        return c.tareas.filter(w => w.entidad.tipo === a && w.entidad.id === z)
      }

      function tareasPendientes() {
        return c.tareas.filter(w => w.estado !== "hecha").sort((w, U) => {
          const Z = w.vence || "9999-12-31",
            se = U.vence || "9999-12-31";
          return Z === se ? PRIORIDADES.findIndex(item => item.id === U.prioridad) - PRIORIDADES.findIndex(item => item.id === w.prioridad) : Z.localeCompare(se)
        })
      }

      function historialDe(a, z) {
        return c.actividad.filter(w => w.entidadTipo === a && w.entidadId === z)
      }

      function guardarPlantilla(a) {
        a = x(a);
        const z = y(a.nombre, 120).trim();
        if (!z) return null;
        const w = a.id ? c.plantillas.find(item => item.id === a.id) : null,
          U = {
            id: B(a.id),
            nombre: z,
            propuesta: Q(a.propuesta),
            creado: I(a.creado)
          };
        return w ? Object.assign(w, U) : c.plantillas.unshift(U), registrar("plantilla", "plantilla", U.id, (w ? "Plantilla actualizada: " : "Plantilla guardada: ") + z), b() ? U : null
      }

      function borrarPlantilla(a) {
        c.plantillas = c.plantillas.filter(z => z.id !== a), b()
      }

      function duplicados(tipo, datos, exceptoId) {
        datos = x(datos);
        const correo = v.normalizar(String(datos.email || "").trim()),
          tel = String(datos.telefono || "").replace(/\D/g, "").slice(-8),
          nombre = v.normalizar(String(datos.nombre || "").trim()),
          ident = String(datos.idTributario || "").replace(/[^0-9a-z]/gi, "").toLowerCase();
        const fuentes = tipo === "cliente" ? c.clientes.map(item => ({
          tipo: "cliente",
          item: item
        })) : c.leads.map(item => ({
          tipo: "lead",
          item: item
        }));
        tipo === "lead" && c.clientes.forEach(item => fuentes.push({
          tipo: "cliente",
          item: item
        }));
        const salida = [];
        return fuentes.forEach(f => {
          if (exceptoId && f.item.id === exceptoId) return;
          if (f.tipo === "cliente" && datos.clienteId && f.item.id === datos.clienteId) return;
          const motivos = [],
            otroTel = String(f.item.telefono || "").replace(/\D/g, ""),
            otraIdent = String(f.item.idTributario || "").replace(/[^0-9a-z]/gi, "").toLowerCase();
          correo && v.normalizar(f.item.email || "") === correo && motivos.push("mismo correo"), tel.length >= 6 && otroTel.slice(-8) === tel && motivos.push("mismo teléfono"), nombre && v.normalizar(f.item.nombre || "") === nombre && motivos.push("mismo nombre"), ident && otraIdent === ident && motivos.push("misma identificación"), motivos.length && salida.push({
            tipo: f.tipo,
            item: f.item,
            motivos: motivos
          })
        }), salida
      }

      function siguienteNumero(tipo) {
        if (!d[tipo]) return 1;
        const numeros = c.cotizaciones.filter(a => a.tipo === tipo).map(a => a.numero);
        return Math.max(c.contadores[tipo] || 0, 0, ...numeros) + 1
      }

      function configurarNumeracion(tipo, prefijo, siguiente) {
        if (!d[tipo]) return null;
        const limpio = y(prefijo, 8).toUpperCase().replace(/[^A-Z0-9]/g, "");
        if (!limpio) return null;
        c.numeracion[tipo].prefijo = limpio;
        const n = Math.floor(Number(siguiente));
        n > 0 && (c.contadores[tipo] = Math.max(0, n - 1));
        return b() ? c.numeracion[tipo] : null
      }
      return {
        VERSION: VERSION,
        ETAPAS: V,
        ACTIVAS: F,
        ORIGENES: r,
        ESTADOS: T,
        MODOS: A,
        TIPOS: d,
        PLANTILLAS: P,
        COLORES: i,
        PRIORIDADES: PRIORIDADES,
        cargar: re,
        guardar: b,
        alCambiar: L,
        bloquear: Y,
        ocupado: o,
        limpiar: ne,
        guardarLead: t,
        borrarLead: n,
        guardarCliente: g,
        borrarCliente: h,
        guardarNegocio: q,
        valoresDePais: k,
        codigo: ee,
        vence: ae,
        vencida: $,
        buscarContacto: J,
        datosDeContacto: ye,
        borrador: pe,
        guardarCotizacion: me,
        borrarCotizacion: Ce,
        duplicarCotizacion: ze,
        moverCotizaciones: te,
        cotizacionesDe: be,
        guardarTarea: guardarTarea,
        borrarTarea: borrarTarea,
        alternarTarea: alternarTarea,
        tareasDe: tareasDe,
        tareasPendientes: tareasPendientes,
        historialDe: historialDe,
        guardarPlantilla: guardarPlantilla,
        borrarPlantilla: borrarPlantilla,
        duplicados: duplicados,
        siguienteNumero: siguienteNumero,
        configurarNumeracion: configurarNumeracion,
        moneda: Se,
        monedaDe: Ae,
        etiquetaId: xe,
        respaldo: Te,
        leerRespaldo: Ee,
        reemplazar: Me,
        tieneDatos: () => c.leads.length + c.clientes.length + c.cotizaciones.length > 0,
        leadsNuevos: Le,
        sumarLeads: Pe,
        get estado() {
          return c
        },
        get soloLectura() {
          return f
        }
      }
    })(),
    ce = (() => {
      "use strict";
      const V = "Documento comercial. No constituye factura ni documento tributario.",
        F = "#1f2328",
        r = "#555c63",
        T = "#8b9198",
        A = "#e3e6e8",
        P = "#1b7f3b";
      window.pdfMake && pdfMake.setUrlAccessPolicy(() => !1);
      const i = o => [1, 3, 5].map(t => parseInt(o.slice(t, t + 2), 16)),
        d = o => "#" + o.map(t => Math.round(Math.max(0, Math.min(255, t))).toString(16).padStart(2, "0")).join(""),
        c = (o, t, n) => {
          const g = i(o),
            h = i(t);
          return d(g.map((q, k) => q + (h[k] - q) * n))
        },
        f = o => {
          const [t, n, g] = i(o).map(h => (h /= 255, h <= .03928 ? h / 12.92 : ((h + .055) / 1.055) ** 2.4));
          return .2126 * t + .7152 * n + .0722 * g
        },
        E = (o, t) => {
          const [n, g] = [f(o), f(t)].sort((h, q) => q - h);
          return (n + .05) / (g + .05)
        },
        y = o => E(o, "#ffffff") >= E(o, F) ? "#ffffff" : F,
        p = o => {
          let t = o;
          for (let n = 0; n < 10 && E(t, "#ffffff") < 3.2; n++) t = c(t, "#000000", .15);
          return t
        };

      function l(o) {
        const t = u.estado.negocio,
          n = u.monedaDe(o),
          g = fe.totales(o, n),
          h = t.colores.principal,
          q = t.colores.acento,
          k = o.impuesto,
          ee = v.cantidad(k.tasa, n) + "%",
          ae = o.items.map((te, be) => ({
            ...te,
            total: g.lineas[be].total,
            precio: g.lineas[be].precio
          })).filter(te => te.descripcion.trim() || te.precio),
          $ = t.idTributario.etiqueta || "RUT",
          J = o.cliente,
          ye = le[t.pais] || {},
          pe = [];
        g.descuento && (pe.push({
          etiqueta: "Subtotal",
          valor: v.dinero(g.subtotal, n)
        }), pe.push({
          etiqueta: "Descuento " + v.cantidad(o.descuento, n) + "%",
          valor: "− " + v.dinero(g.descuento, n),
          descuento: !0
        })), g.conImpuesto && (pe.push({
          etiqueta: "Neto",
          valor: v.dinero(g.neto, n)
        }), pe.push({
          etiqueta: k.nombre + " " + ee,
          valor: v.dinero(g.impuesto, n)
        }));
        const me = o.condiciones,
          Ce = v.fechaLarga(u.vence(o)),
          ze = [
            ["Validez", "Esta oferta es válida hasta el " + Ce + "."],
            ["Forma de pago", me.pago],
            ["Plazo de entrega", me.entrega],
            ["Garantía", me.garantia],
            ["Notas", me.notas],
            ["Datos para el pago", t.datosPago]
          ].filter(([, te]) => te && te.trim()).map(([te, be]) => ({
            titulo: te,
            texto: be.trim()
          }));
        return {
          cot: o,
          n: t,
          moneda: n,
          t: g,
          filas: ae,
          filasTotales: pe,
          condiciones: ze,
          vence: Ce,
          c: {
            p: h,
            a: q,
            pTexto: p(h),
            aTexto: p(q),
            sobreP: y(h),
            sobreA: y(q),
            tinte: c(h, "#ffffff", .9),
            tinteA: c(q, "#ffffff", .86),
            bordeA: c(q, "#ffffff", .62)
          },
          codigo: u.codigo(o),
          propuesta: o.tipo === "propuesta",
          titulo: o.tipo === "propuesta" ? "Propuesta" : ye.nombre_documento || "Cotización",
          fecha: v.fechaLarga(o.fecha),
          fechaCorta: v.fecha(o.fecha),
          dinero: te => v.dinero(te, n),
          cant: te => v.cantidad(te, n),
          total: v.dinero(g.total, n),
          notaTotal: g.conImpuesto ? "Incluye " + k.nombre + " " + ee : "",
          hayDescuentoLinea: ae.some(te => te.descuento > 0),
          emisor: [t.idTributario.valor ? $ + " " + t.idTributario.valor : "", t.direccion, [t.email, t.telefono].filter(Boolean).join(" · "), t.web].filter(Boolean),
          cliente: J,
          clienteLineas: [J.empresa && J.empresa !== J.nombre ? J.empresa : "", J.idTributario ? $ + " " + J.idTributario : "", [J.email, J.telefono].filter(Boolean).join(" · "), J.direccion].filter(Boolean)
        }
      }
      const I = (o, t) => String(o || "").trim().split(/\n\s*\n/).map(n => ({
        text: n.trim(),
        margin: [0, 0, 0, 6],
        ...t || {}
      }));

      function M(o, {
        ancho: t = 150,
        alto: n = 52,
        color: g,
        tam: h = 18,
        fuente: q,
        alinear: k
      } = {}) {
        return o.n.logo ? {
          image: o.n.logo,
          fit: [t, n],
          alignment: k
        } : {
          text: o.n.nombre,
          bold: !0,
          fontSize: h,
          color: g || o.c.pTexto,
          font: q,
          alignment: k
        }
      }

      function B(o, t, n, g = 595.28 - 88) {
        return {
          canvas: [{
            type: "line",
            x1: 0,
            y1: 0,
            x2: g,
            y2: 0,
            lineWidth: t,
            lineColor: o
          }],
          margin: n
        }
      }

      function j(o, t, n) {
        const g = t.map(q => ({
            text: o.mayus ? q.titulo.toUpperCase() : q.titulo,
            bold: !0,
            fontSize: o.cabezaTam || 8.5,
            color: o.cabezaColor,
            fillColor: o.cabezaFondo,
            characterSpacing: o.espaciado || 0,
            font: o.fuente,
            alignment: q.alinear || (o.centrar ? "center" : "left")
          })),
          h = n.map((q, k) => q.map((ee, ae) => ({
            ...ee && typeof ee == "object" ? ee : {
              text: String(ee)
            },
            alignment: t[ae].alinear || (o.centrar ? "center" : "left"),
            fillColor: o.filaFondo ? o.filaFondo(k) : void 0
          })));
        return {
          table: {
            headerRows: 1,
            widths: t.map(q => q.ancho),
            body: [g, ...h],
            dontBreakRows: !0
          },
          layout: o.layout,
          margin: [0, 4, 0, 14]
        }
      }

      function m(o, t) {
        const n = [t.numerar ? {
            titulo: "#",
            ancho: 16,
            alinear: "center"
          } : null, {
            titulo: "Descripción",
            ancho: "*",
            alinear: "left"
          }, {
            titulo: "Cant.",
            ancho: 46,
            alinear: "right"
          }, {
            titulo: "Precio unit.",
            ancho: 78,
            alinear: "right"
          }, o.hayDescuentoLinea ? {
            titulo: "Desc.",
            ancho: 38,
            alinear: "right"
          } : null, {
            titulo: "Total",
            ancho: 80,
            alinear: "right"
          }].filter(Boolean),
          g = o.filas.map((h, q) => [t.numerar ? {
            text: String(q + 1),
            color: T
          } : null, {
            stack: [{
              text: h.descripcion || "—",
              bold: !0
            }, h.detalle ? {
              text: h.detalle,
              fontSize: 8.5,
              color: r,
              margin: [0, 2, 0, 0]
            } : null].filter(Boolean)
          }, {
            stack: [o.cant(h.cantidad), h.unidad ? {
              text: h.unidad,
              fontSize: 7.5,
              color: T
            } : null].filter(Boolean)
          }, o.dinero(h.precio), o.hayDescuentoLinea ? h.descuento ? o.cant(h.descuento) + "%" : "" : null, {
            text: o.dinero(h.total),
            bold: !0
          }].filter(k => k !== null));
        return j(t, n, g.length ? g : [n.map((h, q) => q === 0 ? {
          text: "Sin ítems",
          color: T
        } : "")])
      }

      function S(o, t) {
        const n = o.cot.propuesta.etapas.filter(g => g.nombre.trim() || g.descripcion.trim());
        return j(t, [{
          titulo: "#",
          ancho: 16,
          alinear: "center"
        }, {
          titulo: "Etapa",
          ancho: "*",
          alinear: "left"
        }, {
          titulo: "Duración",
          ancho: 100,
          alinear: "right"
        }], n.map((g, h) => [{
          text: String(h + 1),
          color: T
        }, {
          stack: [{
            text: g.nombre || "Etapa " + (h + 1),
            bold: !0
          }, g.descripcion ? {
            text: g.descripcion,
            fontSize: 8.5,
            color: r,
            margin: [0, 2, 0, 0]
          } : null].filter(Boolean)
        }, g.duracion || ""]))
      }

      function x(o, t) {
        const n = o.filasTotales.map(h => [{
            text: h.etiqueta,
            color: t.etiqueta || r
          }, {
            text: h.valor,
            alignment: "right",
            color: h.descuento ? P : F
          }]),
          g = {
            bold: !0,
            fontSize: t.totalTam || 13,
            color: t.totalColor,
            fillColor: t.totalFondo,
            font: t.fuente
          };
        return {
          table: {
            widths: ["*", "auto"],
            body: [...n, [{
              text: t.totalTexto || "Total",
              ...g
            }, {
              text: o.total,
              alignment: "right",
              ...g
            }]]
          },
          layout: t.layout,
          unbreakable: !0
        }
      }

      function N(o, t, {
        excluir: n = [],
        estiloTexto: g = {}
      } = {}) {
        return o.condiciones.filter(h => !n.includes(h.titulo)).map(h => ({
          stack: [t(h.titulo), {
            text: h.texto,
            margin: [0, 2, 0, 10],
            ...g
          }],
          unbreakable: !0
        }))
      }

      function C(o) {
        const t = n => ({
          stack: [{
            canvas: [{
              type: "line",
              x1: 0,
              y1: 0,
              x2: 210,
              y2: 0,
              lineWidth: .8,
              lineColor: o
            }]
          }, {
            text: n,
            fontSize: 8,
            color: T,
            margin: [0, 4, 0, 0]
          }]
        });
        return {
          columns: [t("Nombre y firma de aceptación"), t("Fecha")],
          columnGap: 30,
          margin: [0, 26, 0, 0]
        }
      }
      const R = () => ({
          text: V,
          fontSize: 7.5,
          color: T,
          alignment: "center",
          margin: [0, 10, 0, 0]
        }),
        W = (o, t, n) => ({
          ...t.seccion(o, n),
          headlineLevel: 1
        });

      function K(o, t) {
        const n = o.cot.propuesta,
          g = (q, k, ee) => k.length ? {
            stack: [{
              text: q,
              bold: !0,
              margin: [0, 0, 0, 4]
            }, {
              ul: k,
              markerColor: ee,
              margin: [0, 0, 0, 4]
            }]
          } : {
            text: ""
          },
          h = n.etapas.some(q => q.nombre.trim() || q.descripcion.trim());
        return [n.titulo ? {
          text: n.titulo,
          fontSize: 17,
          bold: !0,
          font: t.fuenteTitulos,
          color: F,
          margin: [0, 4, 0, 2]
        } : null, n.contexto ? [W(o, t, "Lo que necesitas"), I(n.contexto)] : null, n.solucion ? [W(o, t, "Lo que proponemos"), I(n.solucion)] : null, n.incluye.length || n.noIncluye.length ? [W(o, t, "Alcance"), {
          columns: [g("Incluye", n.incluye, o.c.pTexto), g("No incluye", n.noIncluye, T)],
          columnGap: 24
        }] : null, h ? [W(o, t, "Etapas"), S(o, t.tabla(o))] : null, W(o, t, "Inversión")]
      }

      function D(o, t) {
        const n = o.propuesta ? o.cot.propuesta : null;
        return [n && n.porQue ? [W(o, t, "Por qué elegirnos"), I(n.porQue)] : null, {
          stack: [n && n.proximos ? [t.seccion(o, "Próximos pasos"), I(n.proximos)] : null, C(t === G.elegante ? o.c.bordeA : T), R()].flat().filter(Boolean),
          unbreakable: !0
        }]
      }
      const _ = (o, t) => ({
          hLineWidth: (n, g) => n === 0 ? 0 : n === 1 && t ? t.grosor : n === g.table.body.length ? .8 : .6,
          vLineWidth: () => 0,
          hLineColor: n => n === 1 && t ? t.color : o,
          paddingLeft: () => 8,
          paddingRight: () => 8,
          paddingTop: () => 7,
          paddingBottom: () => 7
        }),
        O = (o = 6) => ({
          hLineWidth: () => 0,
          vLineWidth: () => 0,
          paddingLeft: () => o + 2,
          paddingRight: () => o + 2,
          paddingTop: () => o - 1,
          paddingBottom: () => o - 1
        }),
        G = {
          clasica: {
            nombre: "Clásica",
            descripcion: "Ordenada y con el total destacado. Sirve para todo.",
            margenes: [44, 40, 44, 56],
            encabezado(o) {
              const t = n => ({
                text: n,
                fontSize: 7.5,
                bold: !0,
                color: o.c.aTexto,
                characterSpacing: 1,
                alignment: "right"
              });
              return [{
                columns: [M(o), {
                  width: "auto",
                  stack: [o.n.logo ? {
                    text: o.n.nombre,
                    bold: !0,
                    alignment: "right",
                    fontSize: 10.5
                  } : null, ...o.emisor.map(n => ({
                    text: n,
                    alignment: "right",
                    fontSize: 8.5,
                    color: r
                  }))].filter(Boolean)
                }],
                columnGap: 20
              }, B(o.c.p, 2, [0, 14, 0, 18]), {
                columns: [{
                  stack: [{
                    text: o.titulo,
                    fontSize: 26,
                    bold: !0
                  }, {
                    text: "N° " + o.codigo,
                    color: o.c.aTexto,
                    bold: !0
                  }]
                }, {
                  width: "auto",
                  columns: [{
                    width: "auto",
                    stack: [t("EMISIÓN"), {
                      text: o.fecha,
                      alignment: "right",
                      margin: [0, 3, 0, 0]
                    }]
                  }, {
                    width: "auto",
                    stack: [t("VÁLIDA HASTA"), {
                      text: o.vence,
                      alignment: "right",
                      margin: [0, 3, 0, 0]
                    }]
                  }],
                  columnGap: 26,
                  margin: [0, 8, 0, 0]
                }]
              }, {
                columns: [{
                  table: {
                    widths: ["*"],
                    body: [
                      [{
                        stack: [{
                          text: "PARA",
                          fontSize: 7.5,
                          bold: !0,
                          color: o.c.aTexto,
                          characterSpacing: 1,
                          margin: [0, 0, 0, 4]
                        }, {
                          text: o.cliente.nombre || "—",
                          bold: !0,
                          fontSize: 12
                        }, ...o.clienteLineas.map(n => ({
                          text: n,
                          fontSize: 8.5,
                          color: r
                        }))]
                      }]
                    ]
                  },
                  layout: {
                    hLineColor: () => A,
                    vLineColor: () => A,
                    hLineWidth: () => .8,
                    vLineWidth: () => .8,
                    paddingLeft: () => 14,
                    paddingRight: () => 14,
                    paddingTop: () => 12,
                    paddingBottom: () => 12
                  }
                }, {
                  width: 190,
                  table: {
                    widths: ["*"],
                    body: [
                      [{
                        fillColor: o.c.tinte,
                        stack: [{
                          text: "TOTAL",
                          fontSize: 7.5,
                          bold: !0,
                          color: o.c.aTexto,
                          characterSpacing: 1
                        }, {
                          text: o.total,
                          fontSize: 20,
                          bold: !0,
                          color: o.c.pTexto,
                          margin: [0, 4, 0, 2]
                        }, o.notaTotal ? {
                          text: o.notaTotal,
                          fontSize: 8,
                          color: r
                        } : null].filter(Boolean)
                      }]
                    ]
                  },
                  layout: O(13)
                }],
                columnGap: 14,
                margin: [0, 18, 0, 18]
              }]
            },
            tabla: o => ({
              cabezaFondo: o.c.p,
              cabezaColor: o.c.sobreP,
              mayus: !0,
              espaciado: .6,
              cabezaTam: 7.5,
              layout: _(A)
            }),
            seccion: (o, t) => ({
              text: t.toUpperCase(),
              fontSize: 8.5,
              bold: !0,
              color: o.c.aTexto,
              characterSpacing: 1.2,
              margin: [0, 14, 0, 6]
            }),
            cierre(o) {
              return {
                columns: [{
                  stack: N(o, n => ({
                    text: n.toUpperCase(),
                    fontSize: 7.5,
                    bold: !0,
                    color: o.c.aTexto,
                    characterSpacing: 1
                  }))
                }, {
                  width: 220,
                  stack: [x(o, {
                    totalFondo: o.c.p,
                    totalColor: o.c.sobreP,
                    layout: {
                      hLineWidth: (n, g) => n > 0 && n < g.table.body.length - 1 ? .6 : 0,
                      vLineWidth: () => 0,
                      hLineColor: () => A,
                      paddingLeft: () => 10,
                      paddingRight: () => 10,
                      paddingTop: (n, g) => n === g.table.body.length - 1 ? 9 : 5,
                      paddingBottom: (n, g) => n === g.table.body.length - 1 ? 9 : 5
                    }
                  })]
                }],
                columnGap: 26
              }
            },
            pie: (o, t, n) => ({
              columns: [{
                text: o.codigo
              }, {
                text: "Página " + t + " de " + n,
                alignment: "right"
              }],
              fontSize: 8,
              color: T,
              margin: [44, 22, 44, 0]
            })
          },
          minimal: {
            nombre: "Minimal",
            descripcion: "Limpia y sobria. Mucho espacio en blanco.",
            margenes: [52, 44, 52, 56],
            encabezado(o) {
              const t = h => ({
                  text: h,
                  fontSize: 8,
                  bold: !0,
                  color: o.c.pTexto,
                  characterSpacing: 1.6,
                  margin: [0, 0, 0, 6]
                }),
                n = o.condiciones.find(h => h.titulo === "Forma de pago"),
                g = o.condiciones.find(h => h.titulo === "Plazo de entrega");
              return [{
                columns: [{
                  stack: [o.n.logo ? {
                    image: o.n.logo,
                    fit: [110, 40],
                    margin: [0, 0, 0, 8]
                  } : null, {
                    text: o.n.nombre.toUpperCase(),
                    bold: !0,
                    fontSize: 16
                  }, ...o.emisor.map(h => ({
                    text: h,
                    color: T,
                    fontSize: 9
                  }))].filter(Boolean)
                }, {
                  width: "auto",
                  stack: [{
                    text: o.titulo.toUpperCase(),
                    fontSize: 26,
                    bold: !0,
                    color: o.c.pTexto,
                    alignment: "right",
                    characterSpacing: .5
                  }, {
                    text: "N° " + o.codigo,
                    alignment: "right",
                    color: r,
                    margin: [0, 6, 0, 0]
                  }, {
                    text: "Fecha: " + o.fechaCorta,
                    alignment: "right",
                    color: r
                  }, {
                    text: "Vigencia: " + o.cot.validez + " días",
                    alignment: "right",
                    color: r
                  }]
                }]
              }, {
                columns: [{
                  stack: [t(o.propuesta ? "PREPARADA PARA" : "COTIZADO PARA"), {
                    text: o.cliente.nombre || "—",
                    fontSize: 11
                  }, ...o.clienteLineas.map(h => ({
                    text: h,
                    color: r
                  }))]
                }, n || g ? {
                  stack: [t("CONDICIONES DE PAGO"), n ? {
                    text: n.texto
                  } : null, g ? {
                    text: "Entrega: " + g.texto,
                    color: r,
                    margin: [0, 4, 0, 0]
                  } : null].filter(Boolean)
                } : {
                  text: ""
                }],
                columnGap: 40,
                margin: [0, 24, 0, 18]
              }]
            },
            tabla: o => ({
              cabezaFondo: o.c.p,
              cabezaColor: o.c.sobreP,
              mayus: !0,
              espaciado: 1.4,
              cabezaTam: 8,
              layout: {
                hLineWidth: t => t < 2 ? 0 : .6,
                vLineWidth: () => 0,
                hLineColor: () => A,
                paddingLeft: () => 10,
                paddingRight: () => 10,
                paddingTop: () => 8,
                paddingBottom: () => 8
              }
            }),
            seccion: (o, t) => ({
              text: t.toUpperCase(),
              fontSize: 8,
              bold: !0,
              color: o.c.pTexto,
              characterSpacing: 1.6,
              margin: [0, 16, 0, 6]
            }),
            cierre(o) {
              const n = N(o, g => ({
                text: g.toUpperCase(),
                fontSize: 8,
                bold: !0,
                color: o.c.pTexto,
                characterSpacing: 1.6
              }), {
                excluir: ["Forma de pago", "Plazo de entrega"],
                estiloTexto: {
                  color: r
                }
              });
              return [{
                columns: [{
                  text: ""
                }, {
                  width: 250,
                  stack: [x(o, {
                    totalFondo: o.c.tinte,
                    totalColor: o.c.pTexto,
                    totalTam: 14,
                    totalTexto: "TOTAL",
                    layout: O(7)
                  })]
                }]
              }, n.length ? {
                stack: [{
                  text: "",
                  margin: [0, 10, 0, 0]
                }, ...n]
              } : null]
            },
            pie: (o, t, n) => ({
              text: o.codigo + "   ·   Página " + t + " de " + n,
              alignment: "center",
              fontSize: 8,
              color: T,
              margin: [0, 24, 0, 0]
            })
          },
          corporativa: {
            nombre: "Corporativa",
            descripcion: "Título grande y formas de color. Para empresas.",
            margenes: [56, 44, 56, 50],
            fondo(o, t) {
              const n = (h, q, k) => ({
                type: "polyline",
                closePath: !0,
                points: h.map(([ee, ae]) => ({
                  x: ee,
                  y: ae
                })),
                color: q,
                fillOpacity: k,
                lineColor: q,
                strokeOpacity: 0
              });
              return {
                canvas: [...t === 1 ? [n([
                  [330, 0],
                  [595.28, 0],
                  [595.28, 120]
                ], o.c.p, .12), n([
                  [455, 0],
                  [595.28, 0],
                  [595.28, 270],
                  [505, 150]
                ], o.c.a, .16), n([
                  [400, 0],
                  [520, 0],
                  [470, 70]
                ], o.c.p, .22), n([
                  [595.28, 120],
                  [595.28, 330],
                  [540, 230]
                ], o.c.p, .14)] : [], n([
                  [595.28, 640],
                  [595.28, 841.89],
                  [430, 841.89]
                ], o.c.p, .1), n([
                  [595.28, 735],
                  [595.28, 841.89],
                  [505, 841.89]
                ], o.c.a, .18), n([
                  [0, 841.89 - 70],
                  [0, 841.89],
                  [120, 841.89]
                ], o.c.p, .08)]
              }
            },
            encabezado(o) {
              const t = n => ({
                text: n,
                fontSize: 13,
                color: o.c.pTexto,
                margin: [0, 0, 0, 6]
              });
              return [M(o, {
                ancho: 170,
                alto: 44,
                tam: 14
              }), {
                text: o.propuesta ? `Propuesta
comercial` : o.titulo + ` de
servicios`,
                fontSize: 30,
                bold: !0,
                color: o.c.pTexto,
                lineHeight: 1.02,
                margin: [0, o.n.logo ? 10 : 18, 0, 6]
              }, {
                text: "N° " + o.codigo + "   ·   " + o.fecha,
                color: r
              }, {
                columns: [{
                  stack: [t("Datos del cliente"), {
                    text: o.cliente.nombre || "—",
                    fontSize: 10
                  }, ...o.clienteLineas.map(n => ({
                    text: n,
                    fontSize: 10
                  }))]
                }, {
                  stack: [t("Datos del emisor"), {
                    text: o.n.nombre,
                    fontSize: 10
                  }, ...o.emisor.map(n => ({
                    text: n,
                    fontSize: 10
                  }))]
                }],
                columnGap: 30,
                margin: [0, 16, 0, 12]
              }]
            },
            tabla: o => ({
              cabezaFondo: o.c.p,
              cabezaColor: o.c.sobreP,
              cabezaTam: 9.5,
              centrar: !0,
              layout: {
                hLineWidth: () => 1,
                vLineWidth: () => 1,
                hLineColor: () => o.c.p,
                vLineColor: () => o.c.p,
                paddingLeft: () => 8,
                paddingRight: () => 8,
                paddingTop: () => 6,
                paddingBottom: () => 6
              }
            }),
            seccion: (o, t) => ({
              text: t,
              fontSize: 14,
              bold: !0,
              color: o.c.pTexto,
              margin: [0, 16, 0, 6]
            }),
            cierre(o) {
              return [{
                columns: [{
                  text: ""
                }, {
                  width: 240,
                  stack: [x(o, {
                    totalFondo: o.c.p,
                    totalColor: o.c.sobreP,
                    layout: {
                      hLineWidth: () => 1,
                      vLineWidth: () => 1,
                      hLineColor: () => o.c.p,
                      vLineColor: () => o.c.p,
                      paddingLeft: () => 10,
                      paddingRight: () => 10,
                      paddingTop: () => 6,
                      paddingBottom: () => 6
                    }
                  })]
                }]
              }, o.condiciones.length ? {
                stack: [{
                  text: "CONDICIONES",
                  fontSize: 13,
                  bold: !0,
                  color: o.c.pTexto,
                  margin: [0, 14, 0, 4]
                }, ...o.condiciones.map(t => ({
                  text: [{
                    text: t.titulo + ": ",
                    bold: !0
                  }, t.texto],
                  color: o.c.pTexto,
                  margin: [0, 0, 0, 3]
                }))]
              } : null]
            },
            pie: (o, t, n) => ({
              text: "Página " + t + " de " + n,
              alignment: "right",
              fontSize: 8,
              color: T,
              margin: [0, 20, 56, 0]
            })
          },
          elegante: {
            nombre: "Elegante",
            descripcion: "Títulos con serifa sobre fondo suave. Para servicios y eventos.",
            margenes: [66, 64, 66, 78],
            fuenteTitulos: "Times",
            fondo(o) {
              return {
                canvas: [{
                  type: "rect",
                  x: 0,
                  y: 0,
                  w: 595.28,
                  h: 841.89,
                  color: o.c.tinteA
                }, {
                  type: "rect",
                  x: 28,
                  y: 28,
                  w: 595.28 - 56,
                  h: 841.89 - 56,
                  r: 26,
                  color: "#ffffff"
                }]
              }
            },
            encabezado(o) {
              const t = {
                characterSpacing: .6
              };
              return [{
                text: o.titulo.toUpperCase(),
                font: "Times",
                bold: !0,
                fontSize: 28,
                characterSpacing: 3,
                alignment: "center"
              }, {
                text: o.codigo,
                font: "Times",
                bold: !0,
                fontSize: 12,
                alignment: "center",
                characterSpacing: 2,
                margin: [0, 2, 0, 0]
              }, {
                text: "Fecha: " + o.fechaCorta,
                fontSize: 9,
                alignment: "center",
                characterSpacing: 1.4,
                bold: !0,
                margin: [0, 4, 0, 20]
              }, {
                columns: [{
                  stack: [{
                    text: "CLIENTE",
                    font: "Times",
                    bold: !0,
                    fontSize: 12,
                    characterSpacing: 1.5,
                    margin: [0, 0, 0, 4]
                  }, {
                    text: "Nombre: " + (o.cliente.nombre || "—"),
                    ...t
                  }, ...o.clienteLineas.map(n => ({
                    text: n,
                    ...t
                  }))]
                }, {
                  width: "auto",
                  stack: [M(o, {
                    ancho: 130,
                    alto: 60,
                    fuente: "Times",
                    tam: 16,
                    alinear: "right"
                  })],
                  margin: [0, 6, 0, 0]
                }],
                columnGap: 20,
                margin: [0, 0, 0, 18]
              }]
            },
            tabla: o => ({
              cabezaFondo: o.c.tinteA,
              cabezaColor: F,
              mayus: !0,
              fuente: "Times",
              cabezaTam: 9.5,
              espaciado: .8,
              centrar: !0,
              layout: {
                hLineWidth: () => 1,
                vLineWidth: () => 1,
                hLineColor: () => o.c.bordeA,
                vLineColor: () => o.c.bordeA,
                paddingLeft: () => 8,
                paddingRight: () => 8,
                paddingTop: () => 6,
                paddingBottom: () => 6
              }
            }),
            seccion: (o, t) => ({
              text: t.toUpperCase(),
              font: "Times",
              bold: !0,
              fontSize: 12,
              characterSpacing: 1.5,
              margin: [0, 18, 0, 6]
            }),
            cierre(o) {
              const t = o.condiciones.find(g => g.titulo === "Validez"),
                n = o.condiciones.filter(g => g.titulo !== "Validez");
              return [{
                columns: [t ? {
                  text: t.texto,
                  bold: !0,
                  fontSize: 9,
                  characterSpacing: .8,
                  alignment: "center",
                  margin: [0, 6, 16, 0]
                } : {
                  text: ""
                }, {
                  width: 230,
                  stack: [x(o, {
                    totalFondo: o.c.tinteA,
                    totalColor: F,
                    fuente: "Times",
                    layout: {
                      hLineWidth: () => 0,
                      vLineWidth: () => 0,
                      fillColor: () => o.c.tinteA,
                      paddingLeft: () => 12,
                      paddingRight: () => 12,
                      paddingTop: () => 5,
                      paddingBottom: () => 5
                    }
                  })]
                }]
              }, ...n.map(g => ({
                stack: [{
                  text: g.titulo.toUpperCase(),
                  font: "Times",
                  bold: !0,
                  fontSize: 10,
                  characterSpacing: 1.2,
                  alignment: "center",
                  margin: [0, 12, 0, 2]
                }, {
                  text: g.texto,
                  alignment: "center",
                  characterSpacing: .6
                }],
                unbreakable: !0
              }))]
            },
            pie(o, t, n) {
              return {
                columns: [{
                  width: "auto",
                  stack: [o.n.logo ? {
                    image: o.n.logo,
                    fit: [70, 26]
                  } : {
                    text: o.n.nombre,
                    font: "Times",
                    bold: !0,
                    fontSize: 10
                  }]
                }, {
                  text: [o.emisor.join("  ·  "), `
Página ` + t + " de " + n].join(""),
                  alignment: "right",
                  fontSize: 7.5,
                  color: r,
                  characterSpacing: .4
                }],
                columnGap: 16,
                margin: [66, 14, 66, 0]
              }
            }
          },
          moderna: {
            nombre: "Moderna",
            descripcion: "Colores fuertes y barra de contacto. Para oficios y talleres.",
            margenes: [48, 46, 48, 74],
            encabezado(o) {
              return [{
                columns: [{
                  text: o.titulo,
                  fontSize: 44,
                  bold: !0,
                  color: o.c.aTexto,
                  margin: [0, 18, 0, 0]
                }, {
                  width: "auto",
                  stack: [M(o, {
                    ancho: 150,
                    alto: 60,
                    color: F,
                    tam: 15,
                    alinear: "right"
                  })]
                }]
              }, {
                columns: [{
                  stack: [{
                    text: "Cliente:",
                    bold: !0,
                    fontSize: 11
                  }, {
                    text: o.cliente.nombre || "—",
                    bold: !0,
                    fontSize: 13
                  }, ...o.clienteLineas.map(t => ({
                    text: t,
                    color: r
                  }))]
                }, {
                  width: "auto",
                  stack: [{
                    text: o.titulo + " No. " + o.codigo,
                    bold: !0,
                    fontSize: 12,
                    alignment: "right"
                  }, {
                    text: "Fecha: " + o.fecha,
                    alignment: "right",
                    color: r
                  }, {
                    text: "Válida hasta: " + o.vence,
                    alignment: "right",
                    color: r
                  }]
                }],
                margin: [0, 18, 0, 20]
              }]
            },
            tabla: o => ({
              cabezaFondo: o.c.p,
              cabezaColor: o.c.sobreP,
              cabezaTam: 10,
              filaFondo: () => "#eceef0",
              layout: {
                hLineWidth: () => 2,
                vLineWidth: () => 2,
                hLineColor: () => "#ffffff",
                vLineColor: () => "#ffffff",
                paddingLeft: () => 10,
                paddingRight: () => 10,
                paddingTop: () => 9,
                paddingBottom: () => 9
              }
            }),
            seccion: (o, t) => ({
              text: t,
              fontSize: 15,
              bold: !0,
              color: o.c.aTexto,
              margin: [0, 18, 0, 6]
            }),
            cierre(o) {
              const t = h => o.condiciones.find(q => q.titulo === h),
                n = (h, q) => q.length ? {
                  stack: [{
                    text: h,
                    fontSize: 15,
                    bold: !0,
                    color: o.c.aTexto,
                    margin: [0, 0, 0, 4]
                  }, ...q]
                } : {
                  text: ""
                },
                g = h => h ? [{
                  text: h.titulo,
                  bold: !0,
                  margin: [0, 4, 0, 0]
                }, {
                  text: h.texto,
                  color: r
                }] : [];
              return [{
                columns: [{
                  text: ""
                }, {
                  width: 230,
                  stack: [x(o, {
                    totalTexto: "TOTAL",
                    totalColor: F,
                    totalTam: 13,
                    layout: O(5)
                  })]
                }]
              }, {
                columns: [n("Condiciones", [...g(t("Forma de pago")), ...g(t("Garantía")), ...g(t("Datos para el pago"))]), n("Entrega", [...g(t("Plazo de entrega")), ...g(t("Validez")), ...g(t("Notas"))])],
                columnGap: 30,
                margin: [0, 24, 0, 0],
                unbreakable: !0
              }]
            },
            pie(o, t, n) {
              const g = [o.n.telefono, o.n.email, o.n.web].filter(Boolean);
              return {
                table: {
                  widths: ["*", "auto"],
                  body: [
                    [{
                      text: g.join("     ·     ") || o.n.nombre,
                      color: o.c.sobreA,
                      bold: !0,
                      fontSize: 9,
                      margin: [48, 0, 0, 0]
                    }, {
                      text: t + " / " + n,
                      color: o.c.sobreA,
                      fontSize: 8,
                      margin: [0, 0, 48, 0]
                    }]
                  ]
                },
                layout: {
                  hLineWidth: () => 0,
                  vLineWidth: () => 0,
                  fillColor: () => o.c.a,
                  paddingTop: () => 15,
                  paddingBottom: () => 15,
                  paddingLeft: () => 0,
                  paddingRight: () => 0
                },
                margin: [0, 30, 0, 0]
              }
            }
          },
          ejecutiva: {
            nombre: "Ejecutiva",
            descripcion: "Banda de color arriba con tu logo. Se ve seria y moderna.",
            margenes: [48, 40, 48, 56],
            fondo(o, t) {
              if (t !== 1) return null;
              const n = c(o.c.sobreP, o.c.p, .25),
                g = o.n.logoProporcion || 1,
                h = Math.min(120, 40 * g),
                q = h / g;
              return [{
                canvas: [{
                  type: "rect",
                  x: 0,
                  y: 0,
                  w: 595.28,
                  h: 196,
                  color: o.c.p
                }, o.n.logo ? {
                  type: "rect",
                  x: 40,
                  y: 32,
                  w: h + 16,
                  h: q + 12,
                  r: 6,
                  color: "#ffffff"
                } : null].filter(Boolean),
                absolutePosition: {
                  x: 0,
                  y: 0
                }
              }, {
                columns: [{
                  stack: [o.n.logo ? {
                    image: o.n.logo,
                    width: h,
                    height: q
                  } : {
                    text: o.n.nombre,
                    bold: !0,
                    fontSize: 18,
                    color: o.c.sobreP
                  }, o.n.logo ? {
                    text: o.n.nombre,
                    bold: !0,
                    color: o.c.sobreP,
                    margin: [0, 12, 0, 0]
                  } : null, ...o.emisor.map(k => ({
                    text: k,
                    fontSize: 8.5,
                    color: n
                  }))].filter(Boolean)
                }, {
                  width: "auto",
                  stack: [{
                    text: o.titulo,
                    fontSize: 30,
                    bold: !0,
                    color: o.c.sobreP,
                    alignment: "right"
                  }, {
                    text: "N° " + o.codigo,
                    bold: !0,
                    color: o.c.sobreP,
                    alignment: "right",
                    margin: [0, 2, 0, 6]
                  }, {
                    text: "Emisión: " + o.fecha,
                    fontSize: 9,
                    color: n,
                    alignment: "right"
                  }, {
                    text: "Válida hasta: " + o.vence,
                    fontSize: 9,
                    color: n,
                    alignment: "right"
                  }]
                }],
                columnGap: 20,
                margin: [48, 38, 48, 0]
              }]
            },
            encabezado(o) {
              return [{
                text: "",
                margin: [0, 170, 0, 0]
              }, {
                columns: [{
                  stack: [{
                    text: o.propuesta ? "PREPARADA PARA" : "PARA",
                    fontSize: 7.5,
                    bold: !0,
                    color: o.c.aTexto,
                    characterSpacing: 1.2,
                    margin: [0, 0, 0, 4]
                  }, {
                    text: o.cliente.nombre || "—",
                    bold: !0,
                    fontSize: 13
                  }, ...o.clienteLineas.map(t => ({
                    text: t,
                    color: r,
                    fontSize: 9
                  }))]
                }, {
                  width: 200,
                  table: {
                    widths: ["*"],
                    body: [
                      [{
                        stack: [{
                          text: "TOTAL",
                          fontSize: 7.5,
                          bold: !0,
                          color: o.c.aTexto,
                          characterSpacing: 1.2
                        }, {
                          text: o.total,
                          fontSize: 21,
                          bold: !0,
                          color: o.c.pTexto,
                          margin: [0, 3, 0, 1]
                        }, o.notaTotal ? {
                          text: o.notaTotal,
                          fontSize: 8,
                          color: r
                        } : null].filter(Boolean)
                      }]
                    ]
                  },
                  layout: {
                    hLineWidth: () => 0,
                    vLineWidth: t => t === 0 ? 3 : 0,
                    vLineColor: () => o.c.a,
                    fillColor: () => o.c.tinte,
                    paddingLeft: () => 14,
                    paddingRight: () => 12,
                    paddingTop: () => 11,
                    paddingBottom: () => 11
                  }
                }],
                columnGap: 20,
                margin: [0, 0, 0, 22]
              }]
            },
            tabla: o => ({
              cabezaColor: T,
              mayus: !0,
              espaciado: 1,
              cabezaTam: 7.5,
              layout: _(A, {
                grosor: 1.5,
                color: o.c.p
              })
            }),
            seccion: (o, t) => ({
              stack: [{
                text: t,
                bold: !0,
                fontSize: 13,
                color: o.c.pTexto
              }, {
                canvas: [{
                  type: "line",
                  x1: 0,
                  y1: 3,
                  x2: 26,
                  y2: 3,
                  lineWidth: 2.5,
                  lineColor: o.c.a
                }]
              }],
              margin: [0, 16, 0, 8]
            }),
            cierre(o) {
              return {
                columns: [{
                  stack: N(o, n => ({
                    text: n,
                    bold: !0,
                    color: o.c.pTexto
                  }), {
                    estiloTexto: {
                      color: r
                    }
                  })
                }, {
                  width: 220,
                  stack: [x(o, {
                    totalFondo: o.c.p,
                    totalColor: o.c.sobreP,
                    layout: {
                      hLineWidth: () => 0,
                      vLineWidth: () => 0,
                      paddingLeft: () => 10,
                      paddingRight: () => 10,
                      paddingTop: (n, g) => n === g.table.body.length - 1 ? 10 : 4,
                      paddingBottom: (n, g) => n === g.table.body.length - 1 ? 10 : 4
                    }
                  })]
                }],
                columnGap: 26
              }
            },
            pie: (o, t, n) => ({
              stack: [{
                canvas: [{
                  type: "line",
                  x1: 0,
                  y1: 0,
                  x2: 595.28 - 96,
                  y2: 0,
                  lineWidth: .6,
                  lineColor: A
                }]
              }, {
                columns: [{
                  text: o.n.nombre + "  ·  " + o.codigo
                }, {
                  text: "Página " + t + " de " + n,
                  alignment: "right"
                }],
                margin: [0, 6, 0, 0]
              }],
              fontSize: 8,
              color: T,
              margin: [48, 18, 48, 0]
            })
          }
        },
        Q = o => o.plantilla || u.estado.negocio && u.estado.negocio.plantilla || "clasica";

      function X(o, t) {
        const n = l(o),
          g = G[t] || G[Q(o)] || G.clasica,
          h = [...g.encabezado(n), n.propuesta ? K(n, g) : null, m(n, g.tabla(n)), g.cierre(n), D(n, g)];
        return {
          pageSize: "A4",
          pageMargins: g.margenes,
          info: {
            title: n.codigo + (n.cliente.nombre ? " " + n.cliente.nombre : ""),
            author: n.n.nombre,
            creator: "CRM Propuestas",
            producer: "CRM Propuestas"
          },
          defaultStyle: {
            font: "Roboto",
            fontSize: 9.5,
            color: F,
            lineHeight: 1.22
          },
          background: g.fondo ? q => g.fondo(n, q) : void 0,
          footer: (q, k) => g.pie(n, q, k),
          pageBreakBefore: (q, k) => q.headlineLevel === 1 && k.length === 0,
          content: h.filter(Boolean)
        }
      }
      const ie = (o, t) => pdfMake.createPdf(X(o, t));

      function ne(o) {
        return (u.codigo(o) + " " + (o.cliente.nombre || "")).replace(/[\\/:*?"<>|\u0000-\u001f]/g, "").replace(/\s+/g, " ").trim().slice(0, 80) + ".pdf"
      }
      async function re(o) {
        try {
          const t = await ie(o).getBlob();
          return v.descargar(ne(o), t), s.aviso("PDF descargado: quedó en tu carpeta Descargas."), !0
        } catch {
          return s.aviso("No se pudo crear el PDF. Revisa que la cotización tenga sus datos y vuelve a intentar.", "error"), !1
        }
      }
      async function b(o, t, {
        titulo: n,
        alDescargar: g
      } = {}) {
        let h = null;
        const q = v.h("iframe", {
            class: "previa__marco",
            title: "Vista previa del PDF"
          }),
          k = s.modal({
            titulo: n || "Vista previa · " + u.codigo(o),
            bajada: "Así lo va a ver tu cliente.",
            cuerpo: v.h("div", {
              class: "previa"
            }, v.h("p", {
              class: "previa__cargando"
            }, "Armando el PDF…"), q),
            pie: [s.boton("Cerrar", {
              onclick: () => k.cerrar()
            }), g !== !1 ? s.boton("Descargar PDF", {
              icono: "descargar",
              tipo: "primario",
              onclick: () => {
                k.cerrar(), (g || (() => re(o)))()
              }
            }) : null],
            ancho: "xl",
            alCerrar: () => {
              h && URL.revokeObjectURL(h)
            }
          });
        try {
          const ee = await ie(o, t).getBlob();
          h = URL.createObjectURL(ee), q.src = h, k.el.querySelector(".previa__cargando").remove()
        } catch {
          k.el.querySelector(".previa__cargando").textContent = "No se pudo armar la vista previa."
        }
      }

      function L() {
        return {
          ...u.borrador("cotizacion"),
          numero: 1,
          cliente: {
            nombre: "Cliente de ejemplo",
            empresa: "Empresa Ejemplo SpA",
            idTributario: "",
            email: "cliente@example.com",
            telefono: "",
            direccion: "Calle Ejemplo 123"
          },
          items: [{
            id: "a",
            descripcion: "Servicio principal",
            detalle: "Lo que incluye este servicio, en una línea.",
            cantidad: 1,
            unidad: "servicio",
            precio: 25e4,
            descuento: 0
          }, {
            id: "b",
            descripcion: "Materiales",
            detalle: "",
            cantidad: 3,
            unidad: "unidad",
            precio: 18e3,
            descuento: 0
          }, {
            id: "c",
            descripcion: "Mantención mensual",
            detalle: "",
            cantidad: 6,
            unidad: "mes",
            precio: 3e4,
            descuento: 0
          }]
        }
      }
      const Y = u.PLANTILLAS.map(o => ({
        id: o,
        nombre: G[o].nombre,
        descripcion: G[o].descripcion
      }));
      return {
        documento: X,
        descargar: re,
        vistaPrevia: b,
        ejemplo: L,
        nombreArchivo: ne,
        plantillaDe: Q,
        PLANTILLAS: Y,
        crear: ie
      }
    })(),
    s = (() => {
      "use strict";
      const {
        h: e
      } = v;

      function H(m, S = "ok") {
        let x = document.querySelector(".avisos");
        x || (x = e("div", {
          class: "avisos",
          role: "status",
          "aria-live": "polite"
        }), document.body.appendChild(x));
        const N = e("div", {
          class: "aviso aviso--" + S
        }, oe(S === "error" ? "alerta" : "check"), e("span", null, m));
        x.appendChild(N), setTimeout(() => N.classList.add("aviso--sale"), S === "error" ? 7e3 : 3500), setTimeout(() => N.remove(), S === "error" ? 7400 : 3900)
      }

      function V({
        titulo: m,
        bajada: S,
        cuerpo: x,
        pie: N,
        ancho: C = "md",
        alCerrar: R
      }) {
        const W = e("button", {
            class: "boton-icono",
            type: "button",
            "aria-label": "Cerrar"
          }, oe("cerrar")),
          K = e("dialog", {
            class: "modal modal--" + C
          }, e("div", {
            class: "modal__cabeza"
          }, e("div", null, e("h2", {
            class: "modal__titulo"
          }, m), S ? e("p", {
            class: "modal__bajada"
          }, S) : null), W), e("div", {
            class: "modal__cuerpo"
          }, x), N ? e("div", {
            class: "modal__pie"
          }, N) : null),
          D = () => {
            K.open && K.close()
          };
        W.addEventListener("click", D), K.addEventListener("cancel", O => {
          K.querySelector("form") && O.preventDefault()
        }), K.addEventListener("close", () => {
          K.remove(), R && R()
        }), document.body.appendChild(K), K.showModal();
        const _ = K.querySelector("input:not([type=hidden]), textarea, select");
        return _ && _.focus(), {
          cerrar: D,
          el: K
        }
      }

      function F({
        titulo: m,
        texto: S,
        si: x = "Sí",
        peligro: N = !1
      }) {
        return new Promise(C => {
          const W = V({
            titulo: m,
            ancho: "sm",
            cuerpo: e("p", {
              class: "texto-2"
            }, S),
            pie: [e("button", {
              class: "boton boton--suave",
              type: "button",
              onclick: () => {
                C(!1), W.cerrar()
              }
            }, "Cancelar"), e("button", {
              class: "boton " + (N ? "boton--peligro" : "boton--primario"),
              type: "button",
              onclick: () => {
                C(!0), W.cerrar()
              }
            }, x)],
            alCerrar: () => C(!1)
          })
        })
      }

      function r(m) {
        const S = "c-" + m.nombre + "-" + Math.random().toString(36).slice(2, 7),
          x = {
            id: S,
            name: m.nombre,
            required: m.requerido,
            placeholder: m.placeholder,
            maxlength: m.max
          };
        let N;
        if (m.tipo === "textarea") N = e("textarea", {
          ...x,
          rows: m.filas || 3,
          class: "control"
        }), N.value = m.valor || "";
        else if (m.tipo === "select") N = e("select", {
          ...x,
          class: "control"
        }, m.opciones.map(C => e("option", {
          value: C.valor,
          selected: C.valor === m.valor
        }, C.texto)));
        else if (m.tipo === "monto") {
          const C = u.moneda(),
            R = e("input", {
              ...x,
              type: "text",
              inputmode: "decimal",
              class: "control control--monto",
              autocomplete: "off"
            });
          R.value = m.valor == null ? "" : v.numero(m.valor, C), R.addEventListener("blur", () => {
            const W = v.leerMonto(R.value, C);
            R.value = W == null ? "" : v.numero(W, C)
          }), N = e("div", {
            class: "control-con-prefijo"
          }, e("span", {
            class: "prefijo"
          }, C.simbolo), R)
        } else if (N = e("input", {
            ...x,
            type: m.tipo || "text",
            class: "control",
            autocomplete: "off"
          }), N.value = m.valor || "", m.sugerencias) {
          const C = e("datalist", {
            id: S + "-l"
          }, m.sugerencias.map(R => e("option", {
            value: R
          })));
          N.setAttribute("list", S + "-l"), N = [N, C]
        }
        return e("div", {
          class: "campo" + (m.ancho === "completo" ? " campo--completo" : "")
        }, e("label", {
          for: S,
          class: "campo__etiqueta"
        }, m.etiqueta, m.requerido ? e("span", {
          class: "requerido"
        }, " *") : null), N, m.ayuda ? e("p", {
          class: "campo__ayuda"
        }, m.ayuda) : null)
      }

      function T(m, S) {
        const x = e("form", {
          class: "formulario",
          novalidate: !0
        }, m.map(r));
        return x.addEventListener("submit", N => {
          N.preventDefault();
          const C = (_, O) => {
              _.focus(), _.closest(".campo").classList.add("campo--error"), H(O, "error")
            },
            R = [...x.querySelectorAll("[required]")].find(_ => !String(_.value).trim());
          if (R) return C(R, "Falta completar: " + R.closest(".campo").querySelector("label").firstChild.textContent);
          const W = [...x.querySelectorAll("input[type=email]")].find(_ => _.value && !_.checkValidity());
          if (W) return C(W, "Revisa el correo: le falta algo, como la @ o el punto.");
          const K = {},
            D = u.moneda();
          m.forEach(_ => {
            const O = x.elements[_.nombre];
            K[_.nombre] = _.tipo === "monto" ? v.leerMonto(O.value, D) : O.value.trim()
          }), S(K)
        }), x.addEventListener("input", N => {
          const C = N.target.closest(".campo");
          C && C.classList.remove("campo--error")
        }), x
      }

      function A(m, {
        icono: S,
        tipo: x = "suave",
        onclick: N,
        chico: C,
        titulo: R,
        enviar: W,
        form: K
      } = {}) {
        return e("button", {
          class: "boton boton--" + x + (C ? " boton--chico" : ""),
          type: W ? "submit" : "button",
          form: K,
          title: R,
          onclick: N
        }, S ? oe(S) : null, m ? e("span", null, m) : null)
      }

      function P(m, S, x, N) {
        return N ? e("a", {
          class: "boton-icono",
          href: N,
          title: S,
          "aria-label": S,
          target: N.startsWith("http") ? "_blank" : null,
          rel: "noopener noreferrer"
        }, oe(m)) : e("button", {
          class: "boton-icono",
          type: "button",
          title: S,
          "aria-label": S,
          onclick: x
        }, oe(m))
      }

      function i(m, S, x) {
        return e("header", {
          class: "pagina__cabeza"
        }, e("div", null, e("h1", {
          class: "pagina__titulo"
        }, m), S ? e("p", {
          class: "pagina__bajada"
        }, S) : null), x ? e("div", {
          class: "pagina__acciones"
        }, x) : null)
      }

      function d({
        icono: m,
        titulo: S,
        texto: x,
        accion: N
      }) {
        return e("div", {
          class: "vacio"
        }, e("span", {
          class: "vacio__icono"
        }, oe(m)), e("h3", {
          class: "vacio__titulo"
        }, S), e("p", {
          class: "vacio__texto"
        }, x), N || null)
      }

      function c(m) {
        const S = u.ETAPAS.find(x => x.id === m) || u.ETAPAS[0];
        return e("span", {
          class: "etapa etapa--" + S.id
        }, S.nombre)
      }

      function f(m, S) {
        return e("span", {
          class: "avatar" + (S ? " " + S : ""),
          "aria-hidden": "true"
        }, v.iniciales(m))
      }

      function E(m) {
        const S = u.estado.negocio && u.estado.negocio.pais,
          x = v.whatsapp(m.telefono, S),
          N = v.telefonoLink(m.telefono),
          C = v.correoLink(m.email);
        return e("div", {
          class: "contacto"
        }, x ? P("whatsapp", "Escribir por WhatsApp", null, x) : null, N ? P("telefono", "Llamar", null, N) : null, C ? P("correo", "Enviar correo", null, C) : null)
      }
      const y = {};
      let p = null;

      function l(m) {
        p = m
      }

      function I(m, S) {
        y[m] = S
      }

      function M() {
        const [m, ...S] = location.hash.replace(/^#\/?/, "").split("/");
        return {
          nombre: y[m] ? m : "inicio",
          parametro: decodeURIComponent(S.join("/"))
        }
      }

      function B(m) {
        location.hash === "#/" + m ? j() : location.hash = "#/" + m
      }

      function j() {
        if (p) {
          const N = p;
          p = null, N()
        }
        const {
          nombre: m,
          parametro: S
        } = M(), x = document.getElementById("contenido");
        if (x && (v.vaciar(x), y[m](x, S), document.querySelectorAll(".menu__item").forEach(N => N.classList.toggle("menu__item--activo", N.dataset.ruta === m)), m !== "buscar")) {
          const N = document.getElementById("buscador");
          N && (N.value = "")
        }
      }
      return {
        aviso: H,
        modal: V,
        confirmar: F,
        campo: r,
        formulario: T,
        boton: A,
        botonIcono: P,
        encabezado: i,
        vacio: d,
        etapa: c,
        avatar: f,
        contacto: E,
        ruta: I,
        ir: B,
        dibujar: j,
        actual: M,
        alSalir: l
      }
    })(),
    ue = (() => {
      "use strict";
      const {
        h: e
      } = v, H = "56920832812", V = "2.0.0", F = "https://alvarocofre.dev/novedades/crm-propuestas.json", r = "crm-propuestas-comunidad:avisos-cerrados", T = {
        equipo: {
          titulo: "¿Tu equipo también necesita ver esto?",
          texto: "Este CRM vive solo en este computador. Si lo subimos a internet, tus trabajadores entran desde su celular o su notebook, cada uno con su usuario, y ven los mismos leads y cotizaciones en tiempo real.",
          boton: "Quiero subirlo a internet",
          mensaje: "Hola Álvaro, vengo del CRM y quiero que mi equipo también lo use"
        },
        espacio: {
          titulo: "Tu CRM se está llenando",
          texto: "El navegador guarda hasta cierto límite. En internet tu CRM no tiene límite y tus datos quedan respaldados.",
          boton: "Pasar a la nube",
          mensaje: "Hola Álvaro, mi CRM se está llenando y quiero pasarlo a la nube"
        },
        respaldo: {
          titulo: "Respaldo automático en internet",
          texto: "Si este computador falla o se borra el navegador, pierdes todos tus clientes. En internet tu CRM se respalda solo, todos los días, sin que tengas que acordarte.",
          boton: "Quiero respaldo automático",
          mensaje: "Hola Álvaro, quiero respaldo automático para mi CRM"
        },
        ia: {
          titulo: "Recibe leads desde WhatsApp",
          texto: "¿Y si cada persona que te escribe por WhatsApp quedara guardada sola acá, y un asistente con IA le contestara al tiro?",
          boton: "Conocer el asistente",
          mensaje: "Hola Álvaro, vengo del CRM y quiero el asistente con IA para WhatsApp"
        }
      };

      function A(C) {
        const R = T[C],
          W = s.modal({
            titulo: R.titulo,
            ancho: "sm",
            cuerpo: e("p", {
              class: "texto-2"
            }, R.texto),
            pie: [s.boton("Ahora no", {
              onclick: () => W.cerrar()
            }), e("a", {
              class: "boton boton--pro",
              href: "https://wa.me/" + H + "?text=" + encodeURIComponent(R.mensaje),
              target: "_blank",
              rel: "noopener noreferrer",
              onclick: () => W.cerrar()
            }, oe("whatsapp"), e("span", null, R.boton))]
          })
      }
      let P = null,
        i = !1;
      const d = {
          novedad: "Novedad",
          promocion: "Promoción",
          recurso: "Recurso"
        },
        c = (C, R) => typeof C == "string" ? C.trim().slice(0, R) : "",
        f = C => typeof C == "string" && /^https:\/\/(alvarocofre\.dev\/|wa\.me\/56920832812)/.test(C) ? C : "";

      function E(C) {
        const R = C.split(".").map(Number),
          W = V.split(".").map(Number);
        for (let K = 0; K < 3; K++)
          if (R[K] !== W[K]) return R[K] > W[K];
        return !1
      }
      const y = () => !!(P && P.version && P.descarga && E(P.version));

      function p() {
        try {
          const C = JSON.parse(localStorage.getItem(r) || "[]");
          return Array.isArray(C) ? C : []
        } catch {
          return []
        }
      }

      function l(C) {
        try {
          localStorage.setItem(r, JSON.stringify([C, ...p().filter(R => R !== C)].slice(0, 50)))
        } catch {}
        B()
      }
      const I = (C, R, W) => e("a", {
        class: "boton boton--pro" + (R ? " " + R : ""),
        href: C.link,
        target: "_blank",
        rel: "noopener noreferrer",
        onclick: W
      }, e("span", null, C.boton));

      function M(C, R) {
        return e("div", {
          class: "aviso-caja novedad"
        }, oe(R), e("div", {
          class: "novedad__texto"
        }, e("span", {
          class: "novedad__tipo"
        }, C.etiqueta), e("strong", null, C.titulo), C.texto ? e("p", null, C.texto) : null), C.link ? I(C, "boton--chico") : null, s.botonIcono("cerrar", "Ocultar este aviso", () => l(C.id)))
      }

      function B() {
        N();
        const C = document.getElementById("novedades");
        if (!C || (v.vaciar(C), !P)) return;
        const R = p(),
          {
            version: W,
            descarga: K,
            avisos: D
          } = P;
        y() && !R.includes("v" + W) && C.appendChild(M({
          id: "v" + W,
          etiqueta: "Actualización",
          titulo: "Hay una versión nueva del CRM (" + W + ")",
          texto: "Descárgala y reemplaza esta carpeta. Tus datos se mantienen.",
          boton: "Descargar",
          link: K
        }, "descargar")), D.filter(_ => !_.popup && !R.includes(_.id)).forEach(_ => C.appendChild(M(_, "info")))
      }

      function j() {
        const C = P.avisos.find(W => W.popup && !p().includes(W.id));
        if (!C || document.querySelector("dialog[open]")) return;
        const R = s.modal({
          titulo: C.titulo,
          bajada: C.etiqueta,
          ancho: "sm",
          cuerpo: C.texto ? e("p", {
            class: "texto-2"
          }, C.texto) : null,
          pie: [s.boton("Cerrar", {
            onclick: () => R.cerrar()
          }), C.link ? I(C, null, () => R.cerrar()) : null],
          alCerrar: () => l(C.id)
        })
      }

      function m(C) {
        if (!C || typeof C != "object" || !c(C.id, 40) || !c(C.titulo, 120)) return null;
        const R = d[C.tipo] ? C.tipo : "novedad";
        return {
          id: "a-" + c(C.id, 40),
          etiqueta: d[R],
          titulo: c(C.titulo, 120),
          texto: c(C.texto, 400),
          boton: c(C.boton, 40) || "Ver más",
          link: f(C.link),
          popup: C.popup === !0
        }
      }
      async function S() {
        try {
          const R = await (await fetch(F, {
            cache: "no-store",
            credentials: "omit",
            referrerPolicy: "no-referrer"
          })).json();
          P = {
            version: typeof R.version == "string" && /^\d+\.\d+\.\d+$/.test(R.version) ? R.version : "",
            descarga: f(R.descarga),
            avisos: (Array.isArray(R.avisos) ? R.avisos : []).slice(0, 5).map(m).filter(Boolean)
          }
        } catch {}
        i = !0, B(), P && j()
      }

      function x() {
        return e("section", {
          class: "tarjeta"
        }, e("div", {
          class: "tarjeta__cabeza"
        }, e("div", null, e("h2", {
          class: "tarjeta__titulo"
        }, "Versión y actualizaciones"), e("p", {
          class: "texto-3"
        }, "Cada vez que abres el CRM con internet, revisa si hay una versión nueva, novedades o recursos para ti. Solo lee esos avisos: tus datos no salen de este computador."))), e("div", {
          id: "estado-version",
          class: "version"
        }))
      }

      function N() {
        const C = document.getElementById("estado-version");
        if (!C) return;
        v.vaciar(C);
        let R;
        i ? P ? y() ? R = [e("span", {
          class: "insignia insignia--mal"
        }, "Hay una versión nueva: " + P.version), I({
          boton: "Descargar",
          link: P.descarga
        }, "boton--chico")] : R = e("span", {
          class: "insignia insignia--ok"
        }, "Es la más nueva") : R = e("span", {
          class: "texto-3"
        }, "Sin conexión. Se revisa la próxima vez que abras el CRM con internet.") : R = e("span", {
          class: "texto-3"
        }, "Revisando si hay novedades…"), v.poner(C, e("span", null, "Tienes la versión ", e("strong", null, V)), R)
      }
      return {
        ofrecer: A,
        revisar: S,
        pintar: B,
        tarjetaVersion: x
      }
    })();
  (() => {
    "use strict";
    const {
      h: e
    } = v;

    function H(T, A, P, i) {
      return e("div", {
        class: "kpi"
      }, e("span", {
        class: "kpi__etiqueta"
      }, T), e("div", {
        class: "kpi__fila"
      }, e("strong", {
        class: "kpi__valor"
      }, A), P ? e("span", {
        class: "insignia insignia--" + (i || "neutro")
      }, P) : null))
    }

    function V(T) {
      const A = u.ETAPAS.map(d => ({
          ...d,
          n: T.filter(c => c.etapa === d.id).length
        })),
        P = Math.max(1, ...A.map(d => d.n)),
        i = A.reduce((d, c) => c.n > d.n ? c : d, A[0]);
      return e("div", {
        class: "barras"
      }, A.map(d => {
        const c = e("div", {
          class: "barra" + (d.n && d.id === i.id ? " barra--destacada" : "")
        }, e("span", {
          class: "barra__valor"
        }, d.n));
        return c.style.height = Math.max(14, Math.round(d.n / P * 100)) + "%", e("div", {
          class: "barras__col"
        }, e("div", {
          class: "barras__pista"
        }, c), e("span", {
          class: "barras__etiqueta" + (d.id === i.id && d.n ? " barras__etiqueta--fuerte" : "")
        }, d.nombre))
      }))
    }

    function F(T) {
      const A = T.filter(i => i.seguimiento && u.ACTIVAS.includes(i.etapa)).sort((i, d) => i.seguimiento.localeCompare(d.seguimiento)).slice(0, 6);
      if (!A.length) return e("p", {
        class: "texto-3 tarjeta__nada"
      }, "No tienes seguimientos pendientes. Cuando a un lead le pongas fecha de seguimiento, aparece acá.");
      let P = null;
      return e("div", {
        class: "agenda"
      }, A.map(i => {
        const d = v.diasHasta(i.seguimiento),
          c = d < 0 ? "Atrasados" : d === 0 ? "Hoy" : v.fecha(i.seguimiento),
          f = c !== P ? e("p", {
            class: "agenda__grupo"
          }, c) : null;
        return P = c, [f, e("div", {
          class: "evento evento--" + (d < 0 ? "atrasado" : d === 0 ? "hoy" : "pronto"),
          tabindex: "0",
          onclick: () => ge.abrir(i),
          onkeydown: E => {
            E.key === "Enter" && ge.abrir(i)
          }
        }, e("span", {
          class: "evento__icono"
        }, oe("calendario")), e("div", {
          class: "evento__texto"
        }, e("strong", null, i.nombre), e("span", null, i.interes || v.relativo(i.seguimiento))), e("div", {
          onclick: E => E.stopPropagation()
        }, s.contacto(i)))]
      }))
    }

    function r(T, A) {
      if (!T.length) return e("div", {
        class: "tarjeta__nada"
      }, e("p", {
        class: "texto-3"
      }, "Todavía no haces cotizaciones. Arma la primera y aparece acá."));
      const P = [...T].sort((i, d) => d.actualizado.localeCompare(i.actualizado)).slice(0, 5);
      return e("ul", {
        class: "historial__lista"
      }, P.map(i => e("li", null, e("a", {
        href: "#/cotizacion/" + i.id,
        class: "historial__item"
      }, e("strong", null, u.codigo(i)), e("span", {
        class: "historial__para"
      }, i.cliente.nombre || "Sin cliente"), e("span", {
        class: "estado-pastilla estado--" + i.estado
      }, u.ESTADOS.find(d => d.id === i.estado).nombre), e("span", {
        class: "historial__total"
      }, v.dinero(fe.totales(i, u.monedaDe(i)).total, u.monedaDe(i)))))))
    }
    s.ruta("inicio", T => {
      const {
        leads: A,
        clientes: P,
        negocio: i,
        cotizaciones: d
      } = u.estado, c = u.moneda(), f = A.filter(m => u.ACTIVAS.includes(m.etapa)), E = f.filter(m => Date.now() - Date.parse(m.creado) < 7 * 864e5).length, y = f.filter(m => m.seguimiento && v.diasHasta(m.seguimiento) < 0).length, p = f.filter(m => m.seguimiento && v.diasHasta(m.seguimiento) <= 0).length, l = v.hoy().slice(0, 7), I = d.filter(m => m.fecha.startsWith(l) && m.estado !== "borrador" && u.monedaDe(m).codigo === c.codigo), M = I.filter(m => m.estado === "aceptada"), B = m => m.reduce((S, x) => S + fe.totales(x, c).total, 0), tareasHoy = u.tareasPendientes().filter(m => m.vence && m.vence <= v.hoy());
      if (T.appendChild(s.encabezado("Inicio", "Hola, " + (i && i.nombre || "bienvenido") + ". Esto es lo que tienes hoy.", s.boton("Nuevo lead", {
          icono: "mas",
          tipo: "primario",
          onclick: () => ge.abrir()
        }))), T.appendChild(e("div", {
          id: "novedades",
          class: "novedades"
        })), ue.pintar(), !A.length && !P.length && !d.length) {
        T.appendChild(e("section", {
          class: "tarjeta bienvenida"
        }, e("div", {
          class: "bienvenida__texto"
        }, e("p", {
          class: "rotulo"
        }, "Primeros pasos"), e("h2", null, "Anota a tu primer interesado"), e("p", {
          class: "texto-2"
        }, "Cada vez que alguien te pregunte por tus servicios, agrégalo como lead. Ponle una fecha de seguimiento y el CRM te lo recuerda acá."), e("ol", {
          class: "pasos"
        }, e("li", null, "Agrega tus leads y clientes."), e("li", null, "Hazles una cotización o una propuesta."), e("li", null, "Descárgala en PDF y mándala."))), e("div", {
          class: "bienvenida__accion"
        }, s.boton("Agregar mi primer lead", {
          icono: "mas",
          tipo: "primario",
          onclick: () => ge.abrir()
        }), s.boton("Agregar un cliente", {
          onclick: () => _e.abrir()
        }))));
        return
      }
      const j = u.ocupado();
      if (j >= .7) {
        const m = e("span", {
          class: "medidor__relleno medidor__relleno--alto"
        });
        m.style.width = Math.round(j * 100) + "%", T.appendChild(e("section", {
          class: "tarjeta tarjeta--lleno"
        }, e("div", {
          class: "tarjeta__cabeza"
        }, e("div", null, e("h2", {
          class: "tarjeta__titulo"
        }, "Tu CRM va en " + Math.round(j * 100) + "% de su capacidad"), e("p", {
          class: "texto-3"
        }, "En internet no tiene límite y tus datos quedan respaldados.")), s.boton("Pasar a la nube", {
          icono: "subir",
          tipo: "pro",
          chico: !0,
          onclick: () => ue.ofrecer("espacio")
        })), e("div", {
          class: "medidor__pista"
        }, m)))
      }
      T.appendChild(e("section", {
        class: "tarjeta"
      }, e("div", {
        class: "tarjeta__cabeza"
      }, e("div", null, e("h2", {
        class: "tarjeta__titulo"
      }, "Resumen"), e("p", {
        class: "texto-3"
      }, v.fechaLarga(v.hoy())))), e("div", {
        class: "kpis"
      }, H("Leads activos", f.length, E ? "+" + E + " esta semana" : null, "ok"), H("Seguimientos para hoy", p, y ? y + " atrasado" + (y > 1 ? "s" : "") : null, "mal"), H("Cotizado este mes", v.dinero(B(I), c), I.length ? I.length + (I.length === 1 ? " cotización" : " cotizaciones") : null, "neutro"), H("Aceptado este mes", v.dinero(B(M), c), M.length ? M.length + (M.length === 1 ? " aceptada" : " aceptadas") : null, "ok")))), T.appendChild(e("div", {
        class: "grilla-2"
      }, e("section", {
        class: "tarjeta"
      }, e("div", {
        class: "tarjeta__cabeza"
      }, e("div", null, e("h2", {
        class: "tarjeta__titulo"
      }, "Leads por etapa"), e("p", {
        class: "texto-3"
      }, A.length + " en total")), s.boton("Ver leads", {
        chico: !0,
        onclick: () => s.ir("leads")
      })), V(A)), e("section", {
        class: "tarjeta"
      }, e("div", {
        class: "tarjeta__cabeza"
      }, e("h2", {
        class: "tarjeta__titulo"
      }, "Próximos seguimientos")), F(A)))), T.appendChild(e("section", {
        class: "tarjeta tarjeta--separada"
      }, e("div", {
        class: "tarjeta__cabeza"
      }, e("div", null, e("h2", {
        class: "tarjeta__titulo"
      }, "Tareas para hoy"), e("p", {
        class: "texto-3"
      }, tareasHoy.length ? v.cuenta(tareasHoy.length, "pendiente", "pendientes") : "Nada pendiente para hoy")), s.boton("Nueva tarea", {
        icono: "mas",
        chico: !0,
        onclick: () => we.abrir()
      })), tareasHoy.length ? e("div", {
        class: "tareas"
      }, tareasHoy.slice(0, 6).map(m => we.fila(m, {
        alCambiar: s.dibujar
      }))) : e("p", {
        class: "texto-3 tarjeta__nada"
      }, "No tienes tareas para hoy. Crea una para no olvidar el próximo paso."))), T.appendChild(e("section", {
        class: "tarjeta tarjeta--separada"
      }, e("div", {
        class: "tarjeta__cabeza"
      }, e("div", null, e("h2", {
        class: "tarjeta__titulo"
      }, "Últimas cotizaciones"), e("p", {
        class: "texto-3"
      }, v.cuenta(P.length, "cliente", "clientes") + " · " + d.length + " en total")), e("div", {
        class: "pagina__acciones"
      }, d.length ? s.boton("Ver todas", {
        chico: !0,
        onclick: () => s.ir("cotizaciones")
      }) : null, s.boton("Nueva cotización", {
        icono: "mas",
        chico: !0,
        tipo: "primario",
        onclick: () => de.nueva("cotizacion")
      }))), r(d, c)))
    })
  })();
  const we = (() => {
    "use strict";
    const {
      h: e
    } = v;

    function prioridad(id) {
      return u.PRIORIDADES.find(a => a.id === id) || u.PRIORIDADES[1]
    }

    function cuando(iso) {
      const a = new Date(iso);
      if (isNaN(a)) return "";
      return v.fecha(iso) + " " + String(a.getHours()).padStart(2, "0") + ":" + String(a.getMinutes()).padStart(2, "0")
    }

    function nombreEntidad(entidad) {
      if (!entidad || !entidad.tipo || !entidad.id) return "";
      if (entidad.tipo === "lead") {
        const a = u.estado.leads.find(z => z.id === entidad.id);
        return a ? "Lead: " + a.nombre : ""
      }
      if (entidad.tipo === "cliente") {
        const a = u.estado.clientes.find(z => z.id === entidad.id);
        return a ? "Cliente: " + a.nombre : ""
      }
      if (entidad.tipo === "cotizacion") {
        const a = u.estado.cotizaciones.find(z => z.id === entidad.id);
        return a ? u.codigo(a) : ""
      }
      return ""
    }

    function abrirEntidad(entidad) {
      if (!entidad || !entidad.id) return;
      if (entidad.tipo === "lead") {
        const a = u.estado.leads.find(z => z.id === entidad.id);
        a && ge.abrir(a)
      } else if (entidad.tipo === "cliente") {
        const a = u.estado.clientes.find(z => z.id === entidad.id);
        a && _e.abrir(a)
      } else if (entidad.tipo === "cotizacion") {
        u.estado.cotizaciones.some(z => z.id === entidad.id) && de.abrir(entidad.id)
      }
    }

    function fechaTarea(a) {
      if (!a.vence) return e("span", null, "Sin fecha");
      const z = v.diasHasta(a.vence);
      return e("span", {
        class: a.estado === "hecha" ? "" : z < 0 ? "fecha-atrasada" : z === 0 ? "fecha-hoy" : ""
      }, z < 0 ? "Atrasada · " + v.fecha(a.vence) : z === 0 ? "Hoy" : v.fecha(a.vence), z > 0 ? e("small", null, v.relativo(a.vence)) : null)
    }

    function fila(a, opciones = {}) {
      const z = a.estado === "hecha",
        w = opciones.alCambiar || (() => s.dibujar()),
        U = nombreEntidad(a.entidad);
      return e("div", {
        class: "tarea" + (z ? " tarea--hecha" : "")
      }, e("button", {
        type: "button",
        class: "tarea__check" + (z ? " tarea__check--hecha" : ""),
        "aria-label": z ? "Marcar como pendiente" : "Marcar como hecha",
        title: z ? "Reabrir" : "Completar",
        onclick: () => {
          u.alternarTarea(a.id) && w()
        }
      }, oe("check")), e("div", {
        class: "tarea__cuerpo",
        tabindex: "0",
        role: "button",
        onclick: () => abrir(a, {
          alCambiar: w
        }),
        onkeydown: Z => {
          Z.key === "Enter" && abrir(a, {
            alCambiar: w
          })
        }
      }, e("span", {
        class: "tarea__titulo" + (z ? " tarea__titulo--hecha" : "")
      }, a.titulo), a.detalle ? e("span", {
        class: "tarea__detalle"
      }, a.detalle) : null, e("span", {
        class: "tarea__meta"
      }, fechaTarea(a), e("span", {
        class: "prioridad prioridad--" + a.prioridad
      }, prioridad(a.prioridad).nombre), U ? e("button", {
        type: "button",
        class: "tarea__entidad",
        onclick: Z => {
          Z.stopPropagation(), abrirEntidad(a.entidad)
        }
      }, U) : null)))
    }

    function abrir(a, opciones = {}) {
      const z = !a || !a.id,
        w = a || {},
        U = w.entidad || opciones.entidad || {
          tipo: "",
          id: ""
        },
        Z = !!(opciones.entidad && opciones.entidad.tipo && opciones.entidad.id),
        se = [{
          nombre: "titulo",
          etiqueta: "¿Qué hay que hacer?",
          requerido: !0,
          valor: w.titulo,
          max: 200,
          ancho: "completo",
          placeholder: "Ej: llamar para confirmar la reunión"
        }, {
          nombre: "vence",
          etiqueta: "Para cuándo",
          tipo: "date",
          valor: w.vence,
          ayuda: "Si no pones fecha, queda en la lista de pendientes."
        }, {
          nombre: "prioridad",
          etiqueta: "Prioridad",
          tipo: "select",
          valor: w.prioridad || "normal",
          opciones: u.PRIORIDADES.map(he => ({
            valor: he.id,
            texto: he.nombre
          }))
        }, {
          nombre: "detalle",
          etiqueta: "Detalle",
          tipo: "textarea",
          valor: w.detalle,
          max: 2e3,
          filas: 3,
          ancho: "completo"
        }];
      if (!Z) {
        const he = [{
          valor: "",
          texto: "Sin relación"
        }].concat(u.estado.clientes.map(item => ({
          valor: "cliente:" + item.id,
          texto: "Cliente · " + item.nombre
        }))).concat(u.estado.leads.map(item => ({
          valor: "lead:" + item.id,
          texto: "Lead · " + item.nombre
        }))).concat(u.estado.cotizaciones.map(item => ({
          valor: "cotizacion:" + item.id,
          texto: u.codigo(item) + " · " + (item.cliente.nombre || "sin cliente")
        })));
        se.push({
          nombre: "entidad",
          etiqueta: "Relacionada con",
          tipo: "select",
          valor: U.tipo ? U.tipo + ":" + U.id : "",
          opciones: he,
          ayuda: "Puedes dejar una tarea suelta, sin cliente."
        })
      }
      const he = s.formulario(se, item => {
        let ent = U;
        if (!Z) {
          const re = String(item.entidad || "").split(":");
          ent = re[0] ? {
            tipo: re[0],
            id: re[1]
          } : {
            tipo: "",
            id: ""
          }
        }
        const rt = u.guardarTarea({
          ...w,
          titulo: item.titulo,
          vence: item.vence,
          prioridad: item.prioridad,
          detalle: item.detalle,
          entidad: ent
        });
        rt && (it.cerrar(), s.aviso(z ? "Tarea creada" : "Tarea guardada"), opciones.alCambiar ? opciones.alCambiar() : s.dibujar())
      });
      he.id = "form-tarea";
      const it = s.modal({
        titulo: z ? "Nueva tarea" : "Editar tarea",
        bajada: Z ? nombreEntidad(U) : "Las tareas vencidas aparecen en Inicio.",
        cuerpo: he,
        pie: [z ? null : s.boton("Eliminar", {
          icono: "borrar",
          tipo: "texto-peligro",
          onclick: async () => {
            it.cerrar(), await s.confirmar({
              titulo: "¿Eliminar esta tarea?",
              texto: "Se borra de tu lista. No se puede deshacer.",
              si: "Eliminar",
              peligro: !0
            }) && (u.borrarTarea(w.id), s.aviso("Tarea eliminada"), opciones.alCambiar ? opciones.alCambiar() : s.dibujar())
          }
        }), e("span", {
          class: "separador-flex"
        }), s.boton("Cancelar", {
          onclick: () => it.cerrar()
        }), s.boton(z ? "Crear tarea" : "Guardar", {
          tipo: "primario",
          enviar: !0,
          form: "form-tarea"
        })],
        ancho: "md"
      });
      return it
    }

    function listaHistorial(a) {
      return e("ol", {
        class: "linea"
      }, a.map(z => e("li", {
        class: "linea__item linea__item--" + z.tipo
      }, e("span", {
        class: "linea__punto"
      }), e("div", {
        class: "linea__texto"
      }, e("p", null, z.texto), e("span", {
        class: "texto-3"
      }, cuando(z.fecha))))))
    }

    function panel(a, z, opciones = {}) {
      const w = e("div", {
        class: "panel-entidad"
      });

      function U() {
        v.vaciar(w);
        const Z = u.tareasDe(a, z);
        w.appendChild(e("section", {
          class: "bloque"
        }, e("div", {
          class: "bloque__cabeza"
        }, e("h3", {
          class: "bloque__titulo"
        }, "Tareas"), s.boton("Agregar", {
          icono: "mas",
          chico: !0,
          onclick: () => abrir(null, {
            entidad: {
              tipo: a,
              id: z
            },
            alCambiar: U
          })
        })), Z.length ? e("div", {
          class: "tareas"
        }, Z.map(se => fila(se, {
          alCambiar: U
        }))) : e("p", {
          class: "texto-3 bloque__nada"
        }, "Sin tareas para este " + (a === "cliente" ? "cliente" : "lead") + ".")));
        const se = u.historialDe(a, z).slice(0, 12);
        se.length && w.appendChild(e("section", {
          class: "bloque"
        }, e("h3", {
          class: "bloque__titulo"
        }, "Historial"), listaHistorial(se)))
      }
      return U(), {
        el: w,
        actualizar: U
      }
    }

    function historial(a, z, titulo) {
      const w = e("section", {
        class: "tarjeta"
      });

      function U() {
        v.vaciar(w);
        const Z = u.historialDe(a, z).slice(0, 20);
        w.appendChild(e("div", {
          class: "tarjeta__cabeza"
        }, e("div", null, e("h2", {
          class: "tarjeta__titulo"
        }, titulo || "Historial"), e("p", {
          class: "texto-3"
        }, "Lo que ha pasado con esto.")))), w.appendChild(Z.length ? listaHistorial(Z) : e("p", {
          class: "texto-3 bloque__nada"
        }, "Todavía no hay movimientos."))
      }
      return U(), {
        el: w,
        actualizar: U
      }
    }

    function plantillas(a, alAplicar) {
      const z = e("section", {
        class: "tarjeta plantillas"
      });

      function w() {
        v.vaciar(z), z.appendChild(e("div", {
          class: "tarjeta__cabeza"
        }, e("div", null, e("h2", {
          class: "tarjeta__titulo"
        }, "Plantillas"), e("p", {
          class: "texto-3"
        }, "Reutiliza el texto de una propuesta.")), s.boton("Guardar actual", {
          icono: "mas",
          chico: !0,
          onclick: () => U()
        })));
        const Z = u.estado.plantillas;
        z.appendChild(Z.length ? e("div", {
          class: "plantillas__lista"
        }, Z.map(se => e("div", {
          class: "plantilla"
        }, e("div", {
          class: "plantilla__texto"
        }, e("strong", null, se.nombre), e("span", {
          class: "texto-3"
        }, v.fecha(se.creado))), e("div", {
          class: "plantilla__acciones"
        }, s.boton("Usar", {
          chico: !0,
          tipo: "primario",
          onclick: () => {
            a.propuesta = JSON.parse(JSON.stringify(se.propuesta)), alAplicar(), s.aviso("Plantilla aplicada: " + se.nombre)
          }
        }), s.botonIcono("borrar", "Eliminar plantilla", async () => {
          await s.confirmar({
            titulo: '¿Eliminar "' + se.nombre + '"?',
            texto: "La plantilla se borra, pero las propuestas que hiciste quedan igual.",
            si: "Eliminar",
            peligro: !0
          }) && (u.borrarPlantilla(se.id), w())
        }))))) : e("p", {
          class: "texto-3 bloque__nada"
        }, "Aún no tienes plantillas. Guarda esta propuesta para reutilizarla."))
      }

      function U() {
        const Z = s.formulario([{
          nombre: "nombre",
          etiqueta: "Nombre de la plantilla",
          requerido: !0,
          valor: "",
          max: 120,
          ancho: "completo",
          placeholder: "Ej: Propuesta de sitio web"
        }], se => {
          const he = u.guardarPlantilla({
            nombre: se.nombre,
            propuesta: a.propuesta
          });
          he && (it.cerrar(), w(), s.aviso("Plantilla guardada"))
        });
        Z.id = "form-plantilla";
        const it = s.modal({
          titulo: "Guardar como plantilla",
          bajada: "Se guarda el texto de esta propuesta para usarlo en otra.",
          cuerpo: Z,
          pie: [s.boton("Cancelar", {
            onclick: () => it.cerrar()
          }), s.boton("Guardar plantilla", {
            tipo: "primario",
            enviar: !0,
            form: "form-plantilla"
          })],
          ancho: "sm"
        })
      }
      return w(), {
        el: z,
        actualizar: w
      }
    }

    async function avisarDuplicados(a, z, w) {
      const U = u.duplicados(a, z, w);
      if (!U.length) return !0;
      const Z = U.slice(0, 3).map(se => se.item.nombre + " (" + (se.tipo === "cliente" ? "cliente" : "lead") + ": " + se.motivos.join(", ") + ")").join(" · ");
      return await s.confirmar({
        titulo: "Puede que ya exista",
        texto: "Ya tienes a " + Z + ". ¿Quieres guardarlo igual?",
        si: "Guardar igual"
      })
    }

    let U = "pendientes";

    function vista(a) {
      const z = u.estado.tareas,
        w = u.tareasPendientes(),
        Z = v.hoy(),
        se = [{
          id: "pendientes",
          nombre: "Pendientes",
          lista: w
        }, {
          id: "hoy",
          nombre: "Hoy y atrasadas",
          lista: w.filter(item => item.vence && item.vence <= Z)
        }, {
          id: "hechas",
          nombre: "Hechas",
          lista: z.filter(item => item.estado === "hecha").sort((item, he) => (he.completada || he.actualizado).localeCompare(item.completada || item.actualizado))
        }, {
          id: "todas",
          nombre: "Todas",
          lista: [...z].sort((item, he) => item.estado === he.estado ? (item.vence || "9999-12-31").localeCompare(he.vence || "9999-12-31") : item.estado === "hecha" ? 1 : -1)
        }],
        he = se.find(item => item.id === U) || se[0];
      if (a.appendChild(s.encabezado("Tareas", "Lo que tienes que hacer, con fecha y cliente. En Inicio ves lo de hoy.", s.boton("Nueva tarea", {
          icono: "mas",
          tipo: "primario",
          onclick: () => abrir()
        }))), !z.length) {
        a.appendChild(e("section", {
          class: "tarjeta"
        }, s.vacio({
          icono: "calendario",
          titulo: "Todavía no tienes tareas",
          texto: "Anota acá lo que no quieres olvidar: llamar a un lead, mandar una propuesta, cobrar. Si le pones fecha, aparece en Inicio.",
          accion: s.boton("Crear mi primera tarea", {
            icono: "mas",
            tipo: "primario",
            onclick: () => abrir()
          })
        })));
        return
      }
      a.appendChild(e("section", {
        class: "tarjeta"
      }, e("div", {
        class: "pestanas",
        role: "tablist"
      }, se.map(item => e("button", {
        class: "pestana" + (item.id === U ? " pestana--activa" : ""),
        type: "button",
        role: "tab",
        "aria-selected": item.id === U ? "true" : "false",
        onclick: () => {
          U = item.id, s.dibujar()
        }
      }, item.nombre, e("span", {
        class: "pestana__cuenta"
      }, item.lista.length)))), he.lista.length ? e("div", {
        class: "tareas tareas--pagina"
      }, he.lista.map(item => fila(item, {
        alCambiar: s.dibujar
      }))) : e("p", {
        class: "texto-3 tarjeta__nada"
      }, U === "hoy" ? "Nada para hoy. Vas al día." : "No hay tareas acá.")))
    }
    return {
      vista: vista,
      abrir: abrir,
      fila: fila,
      panel: panel,
      historial: historial,
      listaHistorial: listaHistorial,
      plantillas: plantillas,
      avisarDuplicados: avisarDuplicados
    }
  })();
  s.ruta("tareas", we.vista);
  const ge = (() => {
    "use strict";
    const {
      h: e
    } = v;
    let H = "activos";

    function V(i) {
      const d = !i;
      i = i || {
        etapa: "nuevo"
      };
      const c = s.formulario([{
        nombre: "nombre",
        etiqueta: "Nombre",
        requerido: !0,
        valor: i.nombre,
        max: 120,
        placeholder: "Ej: Rosa Pérez"
      }, {
        nombre: "empresa",
        etiqueta: "Empresa o negocio",
        valor: i.empresa,
        max: 120
      }, {
        nombre: "telefono",
        etiqueta: "Teléfono o WhatsApp",
        tipo: "tel",
        valor: i.telefono,
        max: 40,
        placeholder: "Ej: +56 9 1234 5678"
      }, {
        nombre: "email",
        etiqueta: "Correo",
        tipo: "email",
        valor: i.email,
        max: 120
      }, {
        nombre: "origen",
        etiqueta: "¿Cómo llegó?",
        valor: i.origen,
        max: 40,
        sugerencias: u.ORIGENES,
        placeholder: "Ej: Instagram"
      }, {
        nombre: "etapa",
        etiqueta: "Etapa",
        tipo: "select",
        valor: i.etapa,
        opciones: u.ETAPAS.map(l => ({
          valor: l.id,
          texto: l.nombre
        }))
      }, {
        nombre: "interes",
        etiqueta: "¿Qué necesita?",
        tipo: "textarea",
        valor: i.interes,
        max: 500,
        ancho: "completo",
        filas: 2,
        placeholder: "Ej: una página web para su peluquería"
      }, {
        nombre: "valor",
        etiqueta: "Valor estimado",
        tipo: "monto",
        valor: i.valor,
        ayuda: "Lo que crees que podría comprarte. Es opcional."
      }, {
        nombre: "seguimiento",
        etiqueta: "Próximo seguimiento",
        tipo: "date",
        valor: i.seguimiento,
        ayuda: "El día que le vas a volver a escribir. Aparece en Inicio."
      }, {
        nombre: "notas",
        etiqueta: "Notas",
        tipo: "textarea",
        valor: i.notas,
        max: 2e3,
        ancho: "completo"
      }], async l => {
        const datos = {
          ...i,
          ...l
        };
        if (!await we.avisarDuplicados("lead", datos, i.id)) return;
        const I = u.guardarLead(datos);
        if (I) {
          if (p.cerrar(), f === "cliente") return r(I);
          if (f === "cotizacion") return de.nueva("cotizacion", I.clienteId ? "cliente:" + I.clienteId : "lead:" + I.id);
          s.aviso(d ? "Lead guardado" : "Cambios guardados"), s.dibujar()
        }
      });
      c.id = "form-lead";
      const panel = d ? null : we.panel("lead", i.id);
      let f = null;
      const E = l => () => {
          f = l, c.requestSubmit(), f = null
        },
        y = [d ? null : s.boton("Eliminar", {
          icono: "borrar",
          tipo: "texto-peligro",
          onclick: () => F(i, p)
        }), e("span", {
          class: "separador-flex"
        }), !d && !i.clienteId ? s.boton("Pasar a cliente", {
          icono: "cliente",
          onclick: E("cliente")
        }) : null, d ? null : s.boton("Hacer cotización", {
          icono: "cotizaciones",
          onclick: E("cotizacion")
        }), s.boton("Cancelar", {
          onclick: () => p.cerrar()
        }), s.boton(d ? "Guardar lead" : "Guardar cambios", {
          tipo: "primario",
          enviar: !0,
          form: "form-lead"
        })],
        p = s.modal({
          titulo: d ? "Nuevo lead" : i.nombre,
          bajada: d ? "Solo el nombre es obligatorio. Lo demás lo puedes completar después." : i.clienteId ? "Ya es cliente." : null,
          cuerpo: panel ? [c, panel.el] : c,
          pie: y,
          ancho: "lg"
        })
    }
    async function F(i, d) {
      await s.confirmar({
        titulo: "¿Eliminar a " + i.nombre + "?",
        texto: "Se borra este lead y sus notas. No se puede deshacer.",
        si: "Eliminar",
        peligro: !0
      }) && (d.cerrar(), u.borrarLead(i.id), s.aviso("Lead eliminado"), s.dibujar())
    }

    function r(i, d) {
      _e.abrir({
        nombre: i.nombre,
        empresa: i.empresa,
        telefono: i.telefono,
        email: i.email,
        notas: i.notas
      }, c => {
        u.guardarLead({
          ...i,
          etapa: "ganado",
          clienteId: c.id
        }) && (u.moverCotizaciones(i.id, c.id), d && d(c), s.aviso(i.nombre + " ya es cliente"))
      })
    }

    function T(i, d) {
      u.guardarLead({
        ...i,
        etapa: d
      }) && (s.aviso(i.nombre + ": " + u.ETAPAS.find(c => c.id === d).nombre), s.dibujar())
    }

    function A(i) {
      const d = u.moneda(),
        c = i.seguimiento && u.ACTIVAS.includes(i.etapa) && v.diasHasta(i.seguimiento) < 0,
        f = e("select", {
          class: "etapa-selector etapa--" + i.etapa,
          "aria-label": "Etapa de " + i.nombre,
          onclick: E => E.stopPropagation(),
          onchange: E => T(i, E.target.value)
        }, u.ETAPAS.map(E => e("option", {
          value: E.id,
          selected: E.id === i.etapa
        }, E.nombre)));
      return e("tr", {
        class: "fila-clic",
        tabindex: "0",
        onclick: () => V(i),
        onkeydown: E => {
          E.key === "Enter" && V(i)
        }
      }, e("td", null, e("div", {
        class: "persona"
      }, s.avatar(i.nombre), e("div", null, e("strong", null, i.nombre), i.empresa ? e("span", {
        class: "texto-3"
      }, i.empresa) : null))), e("td", {
        class: "col-interes"
      }, i.interes ? e("span", {
        class: "recorte"
      }, i.interes) : e("span", {
        class: "texto-3"
      }, "—")), e("td", {
        class: "num"
      }, i.valor ? v.dinero(i.valor, d) : e("span", {
        class: "texto-3"
      }, "—")), e("td", null, f), e("td", null, i.seguimiento ? e("span", {
        class: c ? "fecha-atrasada" : ""
      }, v.fecha(i.seguimiento), e("small", null, v.relativo(i.seguimiento))) : e("span", {
        class: "texto-3"
      }, "—")), e("td", {
        class: "col-acciones",
        onclick: E => E.stopPropagation()
      }, s.contacto(i)))
    }

    function P(i) {
      const d = u.estado.leads,
        c = y => d.filter(p => y === "activos" ? u.ACTIVAS.includes(p.etapa) : y === "todos" || p.etapa === y).length,
        f = [{
          id: "activos",
          nombre: "Activos"
        }, ...u.ETAPAS, {
          id: "todos",
          nombre: "Todos"
        }];
      if (i.appendChild(s.encabezado("Leads", "Las personas interesadas en lo que vendes. Cuando te compren, pásalas a clientes.", [s.boton("Recibir leads desde WhatsApp", {
          icono: "whatsapp",
          tipo: "pro",
          onclick: () => ue.ofrecer("ia")
        }), s.boton("Nuevo lead", {
          icono: "mas",
          tipo: "primario",
          onclick: () => V()
        })])), !d.length) {
        i.appendChild(e("section", {
          class: "tarjeta"
        }, s.vacio({
          icono: "leads",
          titulo: "Todavía no tienes leads",
          texto: "Anota acá a cada persona que te pregunta por tus servicios: por WhatsApp, Instagram o en persona. Así no se te olvida ninguna.",
          accion: s.boton("Agregar mi primer lead", {
            icono: "mas",
            tipo: "primario",
            onclick: () => V()
          })
        })));
        return
      }
      const E = d.filter(y => H === "activos" ? u.ACTIVAS.includes(y.etapa) : H === "todos" || y.etapa === H);
      i.appendChild(e("section", {
        class: "tarjeta tarjeta--tabla"
      }, e("div", {
        class: "pestanas",
        role: "tablist"
      }, f.map(y => e("button", {
        class: "pestana" + (y.id === H ? " pestana--activa" : ""),
        type: "button",
        role: "tab",
        "aria-selected": y.id === H ? "true" : "false",
        onclick: () => {
          H = y.id, s.dibujar()
        }
      }, y.nombre, e("span", {
        class: "pestana__cuenta"
      }, c(y.id))))), E.length ? e("div", {
        class: "tabla-scroll"
      }, e("table", {
        class: "tabla"
      }, e("thead", null, e("tr", null, e("th", null, "Nombre"), e("th", null, "Qué necesita"), e("th", {
        class: "num"
      }, "Valor"), e("th", null, "Etapa"), e("th", null, "Seguimiento"), e("th", null, e("span", {
        class: "solo-lector"
      }, "Contactar")))), e("tbody", null, E.map(A)))) : e("p", {
        class: "tabla-vacia"
      }, "No hay leads en esta etapa.")))
    }
    return {
      vista: P,
      abrir: V,
      pasarACliente: r
    }
  })();
  s.ruta("leads", ge.vista);
  const _e = (() => {
    "use strict";
    const {
      h: e
    } = v;

    function H(A, P) {
      const i = !A || !A.id;
      A = A || {};
      const d = s.formulario([{
        nombre: "nombre",
        etiqueta: "Nombre",
        requerido: !0,
        valor: A.nombre,
        max: 120,
        placeholder: "Persona o empresa"
      }, {
        nombre: "empresa",
        etiqueta: "Razón social o empresa",
        valor: A.empresa,
        max: 120
      }, {
        nombre: "idTributario",
        etiqueta: u.etiquetaId(),
        valor: A.idTributario,
        max: 40,
        ayuda: "Aparece en la cotización si lo pones."
      }, {
        nombre: "telefono",
        etiqueta: "Teléfono o WhatsApp",
        tipo: "tel",
        valor: A.telefono,
        max: 40
      }, {
        nombre: "email",
        etiqueta: "Correo",
        tipo: "email",
        valor: A.email,
        max: 120
      }, {
        nombre: "direccion",
        etiqueta: "Dirección",
        valor: A.direccion,
        max: 200
      }, {
        nombre: "notas",
        etiqueta: "Notas",
        tipo: "textarea",
        valor: A.notas,
        max: 2e3,
        ancho: "completo"
      }], async p => {
        const datos = {
          ...A,
          ...p
        };
        if (!await we.avisarDuplicados("cliente", datos, A.id)) return;
        const l = u.guardarCliente(datos);
        if (l) {
          if (y.cerrar(), c === "cotizacion") return de.nueva("cotizacion", "cliente:" + l.id);
          P ? P(l) : s.aviso(i ? "Cliente guardado" : "Cambios guardados"), s.dibujar()
        }
      });
      d.id = "form-cliente";
      const panel = i ? null : we.panel("cliente", A.id);
      let c = null;
      const f = i ? [] : u.cotizacionesDe("cliente", A.id),
        E = f.length ? e("div", {
          class: "historial"
        }, e("h3", {
          class: "historial__titulo"
        }, "Sus cotizaciones"), e("ul", {
          class: "historial__lista"
        }, f.map(p => e("li", null, e("a", {
          href: "#/cotizacion/" + p.id,
          class: "historial__item",
          onclick: () => y.cerrar()
        }, e("strong", null, u.codigo(p)), e("span", {
          class: "texto-3"
        }, v.fecha(p.fecha)), e("span", {
          class: "estado-pastilla estado--" + p.estado
        }, u.ESTADOS.find(l => l.id === p.estado).nombre), e("span", {
          class: "historial__total"
        }, v.dinero(fe.totales(p, u.monedaDe(p)).total, u.monedaDe(p)))))))) : null,
        y = s.modal({
          titulo: i ? "Nuevo cliente" : A.nombre,
          bajada: i ? "Estos datos se copian en cada cotización que le hagas." : null,
          cuerpo: [d, E, panel ? panel.el : null],
          pie: [i ? null : s.boton("Eliminar", {
            icono: "borrar",
            tipo: "texto-peligro",
            onclick: () => V(A, y)
          }), e("span", {
            class: "separador-flex"
          }), i ? null : s.boton("Hacer cotización", {
            icono: "cotizaciones",
            onclick: () => {
              c = "cotizacion", d.requestSubmit(), c = null
            }
          }), s.boton("Cancelar", {
            onclick: () => y.cerrar()
          }), s.boton(i ? "Guardar cliente" : "Guardar cambios", {
            tipo: "primario",
            enviar: !0,
            form: "form-cliente"
          })],
          ancho: "lg"
        })
    }
    async function V(A, P) {
      await s.confirmar({
        titulo: "¿Eliminar a " + A.nombre + "?",
        texto: "Se borran sus datos del CRM. Sus cotizaciones se mantienen, con los datos que ya tenían. No se puede deshacer.",
        si: "Eliminar",
        peligro: !0
      }) && (P.cerrar(), u.borrarCliente(A.id), s.aviso("Cliente eliminado"), s.dibujar())
    }

    function F(A) {
      const P = u.cotizacionesDe("cliente", A.id).length;
      return P ? P + (P === 1 ? " cotización" : " cotizaciones") : "Desde " + v.fecha(A.creado)
    }

    function r(A) {
      return e("article", {
        class: "cliente",
        tabindex: "0",
        onclick: () => H(A),
        onkeydown: P => {
          P.key === "Enter" && H(A)
        }
      }, e("div", {
        class: "cliente__cabeza"
      }, s.avatar(A.nombre, "avatar--grande"), e("div", {
        class: "cliente__nombre"
      }, e("strong", null, A.nombre), A.empresa ? e("span", {
        class: "texto-3"
      }, A.empresa) : null)), e("dl", {
        class: "cliente__datos"
      }, A.idTributario ? [e("dt", null, u.etiquetaId()), e("dd", null, A.idTributario)] : null, A.email ? [e("dt", null, "Correo"), e("dd", null, A.email)] : null, A.telefono ? [e("dt", null, "Teléfono"), e("dd", null, A.telefono)] : null, A.direccion ? [e("dt", null, "Dirección"), e("dd", null, A.direccion)] : null), e("div", {
        class: "cliente__pie",
        onclick: P => P.stopPropagation()
      }, e("span", {
        class: "texto-3"
      }, F(A)), s.contacto(A)))
    }

    function T(A) {
      const P = u.estado.clientes;
      if (A.appendChild(s.encabezado("Clientes", "Quienes ya te compraron. Sus datos se copian en cada cotización.", s.boton("Nuevo cliente", {
          icono: "mas",
          tipo: "primario",
          onclick: () => H()
        }))), !P.length) {
        A.appendChild(e("section", {
          class: "tarjeta"
        }, s.vacio({
          icono: "clientes",
          titulo: "Todavía no tienes clientes",
          texto: "Agrégalos acá, o pasa un lead a cliente cuando te compre: sus datos se copian solos.",
          accion: s.boton("Agregar un cliente", {
            icono: "mas",
            tipo: "primario",
            onclick: () => H()
          })
        })));
        return
      }
      A.appendChild(e("section", {
        class: "grilla-clientes"
      }, P.map(r)))
    }
    return {
      vista: T,
      abrir: H
    }
  })();
  s.ruta("clientes", _e.vista);
  const De = (() => {
      "use strict";
      const {
        h: e
      } = v;
      let H = "todas";

      function V(d, c) {
        if (d.contacto.tipo !== "lead") return;
        const f = u.buscarContacto("lead", d.contacto.id);
        f && s.confirmar({
          titulo: "¡Bien! ¿Pasamos a " + f.nombre + " a clientes?",
          texto: "Sus datos se copian a Clientes, el lead queda como ganado y sus cotizaciones lo siguen.",
          si: "Pasar a cliente"
        }).then(E => {
          E && ge.pasarACliente(f, c)
        })
      }

      function F(d, c) {
        u.guardarCotizacion({
          ...d,
          estado: c
        }), s.aviso(u.codigo(d) + ": " + u.ESTADOS.find(f => f.id === c).nombre), s.dibujar(), c === "aceptada" && V(d)
      }

      function r(d) {
        return e("select", {
          class: "estado-selector estado--" + d.estado,
          "aria-label": "Estado de " + u.codigo(d),
          onclick: c => c.stopPropagation(),
          onchange: c => F(d, c.target.value)
        }, u.ESTADOS.map(c => e("option", {
          value: c.id,
          selected: c.id === d.estado
        }, c.nombre)))
      }

      function T(d) {
        const c = u.monedaDe(d),
          f = fe.totales(d, c).total,
          E = u.vence(d),
          y = d.estado === "aceptada" || d.estado === "rechazada";
        return e("tr", {
          class: "fila-clic",
          tabindex: "0",
          onclick: () => de.abrir(d.id),
          onkeydown: p => {
            p.key === "Enter" && de.abrir(d.id)
          }
        }, e("td", null, e("div", {
          class: "codigo"
        }, e("span", {
          class: "codigo__icono codigo__icono--" + d.tipo
        }, oe(d.tipo === "propuesta" ? "propuesta" : "cotizaciones")), e("div", null, e("strong", null, u.codigo(d)), e("span", {
          class: "texto-3"
        }, u.TIPOS[d.tipo].nombre)))), e("td", null, d.cliente.nombre ? e("div", {
          class: "apilado"
        }, e("strong", null, d.cliente.nombre), d.cliente.empresa ? e("span", {
          class: "texto-3"
        }, d.cliente.empresa) : null) : e("span", {
          class: "texto-3"
        }, "Sin cliente")), e("td", null, v.fecha(d.fecha), u.vencida(d) ? e("small", {
          class: "fecha-atrasada"
        }, "Venció el " + v.fecha(E)) : y ? null : e("small", null, "Vence " + v.relativo(E))), e("td", {
          class: "num"
        }, e("strong", null, v.dinero(f, c))), e("td", null, r(d)), e("td", {
          class: "col-acciones",
          onclick: p => p.stopPropagation()
        }, e("div", {
          class: "contacto"
        }, s.botonIcono("documento", "Ver PDF", () => ce.vistaPrevia(d)), s.botonIcono("descargar", "Descargar PDF", () => ce.descargar(d)))))
      }
      const A = () => s.boton("Nueva propuesta", {
          icono: "propuesta",
          onclick: () => de.nueva("propuesta")
        }),
        P = () => s.boton("Nueva cotización", {
          icono: "mas",
          tipo: "primario",
          onclick: () => de.nueva("cotizacion")
        });

      function i(d) {
        const c = u.estado.cotizaciones;
        if (d.appendChild(s.encabezado("Cotizaciones", "La cotización es la lista de precios. La propuesta además explica el proyecto, qué incluye y en qué etapas.", [A(), P()])), !c.length) {
          d.appendChild(e("section", {
            class: "tarjeta"
          }, s.vacio({
            icono: "cotizaciones",
            titulo: "Todavía no tienes cotizaciones",
            texto: "Arma la primera: eliges el cliente, escribes lo que cotizas y el CRM calcula los totales.",
            accion: e("div", {
              class: "vacio__acciones"
            }, A(), P())
          })));
          return
        }
        const f = [{
            id: "todas",
            nombre: "Todas"
          }, ...u.ESTADOS],
          E = p => c.filter(l => p === "todas" || l.estado === p).length,
          y = c.filter(p => H === "todas" || p.estado === H);
        d.appendChild(e("section", {
          class: "tarjeta tarjeta--tabla"
        }, e("div", {
          class: "pestanas",
          role: "tablist"
        }, f.map(p => e("button", {
          class: "pestana" + (p.id === H ? " pestana--activa" : ""),
          type: "button",
          role: "tab",
          "aria-selected": p.id === H ? "true" : "false",
          onclick: () => {
            H = p.id, s.dibujar()
          }
        }, p.nombre, e("span", {
          class: "pestana__cuenta"
        }, E(p.id))))), y.length ? e("div", {
          class: "tabla-scroll"
        }, e("table", {
          class: "tabla"
        }, e("thead", null, e("tr", null, e("th", null, "Número"), e("th", null, "Para"), e("th", null, "Fecha"), e("th", {
          class: "num"
        }, "Total"), e("th", null, "Estado"), e("th", null, e("span", {
          class: "solo-lector"
        }, "PDF")))), e("tbody", null, y.map(T)))) : e("p", {
          class: "tabla-vacia"
        }, "No hay cotizaciones en este estado.")))
      }
      return s.ruta("cotizaciones", i), {
        alAceptar: V
      }
    })(),
    de = (() => {
      "use strict";
      const {
        h: e
      } = v, H = ["unidad", "servicio", "hora", "día", "mes", "proyecto", "sesión", "m²", "metro", "kit"], V = 200, F = 20;
      let r = null,
        T = !1,
        A = null,
        P = null,
        i = null,
        d = null,
        c = new Map,
        doc = null,
        hist = null;
      const f = (b, L) => s.ir("nueva/" + b + (L ? "/" + L : "")),
        E = b => s.ir("cotizacion/" + b),
        y = () => u.TIPOS[r.tipo].nombre,
        p = () => r.numero ? y() + " " + u.codigo(r) : r.tipo === "propuesta" ? "Nueva propuesta" : "Nueva cotización",
        l = b => b.cliente.nombre.trim() || b.items.some(L => L.descripcion.trim() || L.precio) || b.propuesta && b.propuesta.titulo.trim();

      function I(b) {
        P && (P.textContent = b)
      }

      function M() {
        T = !0, _(), I("Guardando…"), clearTimeout(A), A = setTimeout(B, 600)
      }

      function B() {
        if (clearTimeout(A), A = null, !r || u.soloLectura || !T) return;
        if (!r.numero && !l(r)) return I("Se guarda solo apenas escribas algo.");
        const b = !r.numero,
          L = u.guardarCotizacion(r);
        if (!L) return I("No se pudo guardar.");
        T = !1, r.id = L.id, r.numero = L.numero, b && location.hash.startsWith("#/nueva") && (history.replaceState(null, "", "#/cotizacion/" + r.id), i && (i.textContent = p())), I("Guardado en este computador")
      }

      function j({
        etiqueta: b,
        valor: L,
        alCambiar: Y,
        tipo: o = "text",
        filas: t,
        placeholder: n,
        max: g,
        ancho: h,
        ayuda: q,
        sugerencias: k
      }) {
        const ee = "e-" + Math.random().toString(36).slice(2, 9),
          ae = o === "textarea" ? e("textarea", {
            id: ee,
            class: "control",
            rows: t || 3,
            placeholder: n,
            maxlength: g
          }) : e("input", {
            id: ee,
            class: "control",
            type: o,
            placeholder: n,
            maxlength: g,
            autocomplete: "off"
          });
        ae.value = L ?? "", ae.addEventListener("input", () => {
          Y(ae.value), M()
        });
        let $ = null;
        return k && ($ = e("datalist", {
          id: ee + "-l"
        }, k.map(J => e("option", {
          value: J
        }))), ae.setAttribute("list", ee + "-l")), e("div", {
          class: "campo" + (h === "completo" ? " campo--completo" : "")
        }, b ? e("label", {
          for: ee,
          class: "campo__etiqueta"
        }, b) : null, ae, $, q ? e("p", {
          class: "campo__ayuda"
        }, q) : null)
      }

      function m(b, L, Y) {
        return j({
          etiqueta: b,
          tipo: "textarea",
          filas: 5,
          max: 9e3,
          ayuda: Y,
          valor: L.join(`
`),
          alCambiar: o => {
            L.splice(0, L.length, ...o.split(`
`).map(t => t.trim()).filter(Boolean).slice(0, 30))
          }
        })
      }

      function S({
        valor: b,
        leer: L,
        mostrar: Y,
        alCambiar: o,
        placeholder: t,
        clase: n,
        etiqueta: g,
        prefijo: h
      }) {
        const q = e("input", {
          class: "control " + (n || ""),
          type: "text",
          inputmode: "decimal",
          placeholder: t,
          autocomplete: "off",
          "aria-label": g
        });
        return q.value = b ? Y(b) : "", q.addEventListener("input", () => {
          const k = L(q.value);
          o(k ?? 0), M()
        }), q.addEventListener("blur", () => {
          const k = L(q.value);
          q.value = k ? Y(k) : ""
        }), h ? e("div", {
          class: "control-con-prefijo " + (n || "")
        }, e("span", {
          class: "prefijo"
        }, h), q) : q
      }

      function x(b, L, Y) {
        return e("div", {
          class: "tarjeta__cabeza"
        }, e("div", null, e("h2", {
          class: "tarjeta__titulo"
        }, b), L ? e("p", {
          class: "texto-3"
        }, L) : null), Y || null)
      }

      function N() {
        const b = e("section", {
            class: "tarjeta"
          }),
          L = () => {
            const {
              clientes: o,
              leads: t
            } = u.estado, n = r.contacto.tipo ? r.contacto.tipo + ":" + r.contacto.id : "", g = t.filter(k => k.etapa !== "perdido" && !k.clienteId), h = e("select", {
              class: "control",
              id: "para-selector",
              onchange: k => Y(k.target.value)
            }, e("option", {
              value: ""
            }, "Escribir los datos a mano"), o.length ? e("optgroup", {
              label: "Clientes"
            }, o.map(k => e("option", {
              value: "cliente:" + k.id,
              selected: n === "cliente:" + k.id
            }, k.nombre + (k.empresa ? " · " + k.empresa : "")))) : null, g.length ? e("optgroup", {
              label: "Leads"
            }, g.map(k => e("option", {
              value: "lead:" + k.id,
              selected: n === "lead:" + k.id
            }, k.nombre + (k.empresa ? " · " + k.empresa : "")))) : null), q = r.cliente;
            v.poner(v.vaciar(b), x("Para", "Elige a uno de tus clientes o leads, o escribe sus datos."), e("div", {
              class: "campo campo--selector"
            }, e("label", {
              for: "para-selector",
              class: "campo__etiqueta"
            }, "Cliente o lead"), h), e("div", {
              class: "formulario"
            }, j({
              etiqueta: "Nombre",
              valor: q.nombre,
              max: 120,
              alCambiar: k => {
                q.nombre = k
              },
              placeholder: "Persona o empresa"
            }), j({
              etiqueta: "Empresa o razón social",
              valor: q.empresa,
              max: 120,
              alCambiar: k => {
                q.empresa = k
              }
            }), j({
              etiqueta: u.etiquetaId(),
              valor: q.idTributario,
              max: 40,
              alCambiar: k => {
                q.idTributario = k
              }
            }), j({
              etiqueta: "Correo",
              tipo: "email",
              valor: q.email,
              max: 120,
              alCambiar: k => {
                q.email = k
              }
            }), j({
              etiqueta: "Teléfono",
              tipo: "tel",
              valor: q.telefono,
              max: 40,
              alCambiar: k => {
                q.telefono = k
              }
            }), j({
              etiqueta: "Dirección",
              valor: q.direccion,
              max: 200,
              alCambiar: k => {
                q.direccion = k
              }
            })))
          },
          Y = o => {
            if (!o) r.contacto = {
              tipo: "",
              id: ""
            };
            else {
              const [t, n] = o.split(":");
              r.contacto = {
                tipo: t,
                id: n
              }, r.cliente = u.datosDeContacto(u.buscarContacto(t, n))
            }
            L(), M()
          };
        return L(), b
      }

      function C() {
        const b = r.propuesta;
        return e("section", {
          class: "tarjeta"
        }, x("El proyecto", "Cuéntale al cliente que entendiste lo que necesita."), e("div", {
          class: "formulario"
        }, j({
          etiqueta: "Nombre del proyecto",
          valor: b.titulo,
          max: 200,
          ancho: "completo",
          placeholder: "Ej: Página web nueva para la panadería",
          alCambiar: L => {
            b.titulo = L
          }
        }), j({
          etiqueta: "¿Qué necesita el cliente?",
          tipo: "textarea",
          filas: 4,
          valor: b.contexto,
          max: 3e3,
          ancho: "completo",
          ayuda: "Su situación hoy y lo que quiere lograr.",
          alCambiar: L => {
            b.contexto = L
          }
        }), j({
          etiqueta: "¿Qué le propones?",
          tipo: "textarea",
          filas: 4,
          valor: b.solucion,
          max: 3e3,
          ancho: "completo",
          ayuda: "Cómo lo vas a resolver, en palabras simples.",
          alCambiar: L => {
            b.solucion = L
          }
        })))
      }

      function R() {
        const b = r.propuesta,
          L = e("div", {
            class: "etapas"
          }),
          Y = s.boton("Agregar etapa", {
            icono: "mas",
            chico: !0,
            onclick: () => {
              b.etapas.push({
                nombre: "",
                duracion: "",
                descripcion: ""
              }), o(), M(), L.querySelector(".etapa-fila:last-child input").focus()
            }
          }),
          o = () => {
            v.vaciar(L), b.etapas.forEach((t, n) => {
              L.appendChild(e("div", {
                class: "etapa-fila"
              }, e("span", {
                class: "item__n"
              }, n + 1), j({
                valor: t.nombre,
                max: 120,
                placeholder: "Etapa, ej: Diseño",
                alCambiar: g => {
                  t.nombre = g
                }
              }), j({
                valor: t.duracion,
                max: 60,
                placeholder: "Duración, ej: 2 semanas",
                alCambiar: g => {
                  t.duracion = g
                }
              }), s.botonIcono("borrar", "Quitar etapa", () => {
                b.etapas.splice(n, 1), o(), M()
              }), e("span"), j({
                tipo: "textarea",
                filas: 2,
                valor: t.descripcion,
                max: 600,
                placeholder: "Qué se hace en esta etapa (opcional)",
                alCambiar: g => {
                  t.descripcion = g
                }
              })))
            }), Y.disabled = b.etapas.length >= F
          };
        return o(), e("section", {
          class: "tarjeta"
        }, x("Alcance", "Lo que incluye y lo que no: así no hay malentendidos después."), e("div", {
          class: "formulario"
        }, m("Qué incluye", b.incluye, "Escribe una cosa por línea."), m("Qué no incluye", b.noIncluye, "Una por línea. Es opcional.")), e("div", {
          class: "subtitulo"
        }, e("h3", null, "Etapas"), e("p", {
          class: "texto-3"
        }, "Opcional: en qué orden y cuánto demora cada parte.")), L, Y)
      }

      function W() {
        const b = r.propuesta;
        return e("section", {
          class: "tarjeta"
        }, x("Cierre", "Por qué elegirte y qué tiene que hacer el cliente para partir."), e("div", {
          class: "formulario"
        }, j({
          etiqueta: "¿Por qué elegirte?",
          tipo: "textarea",
          valor: b.porQue,
          max: 2e3,
          ancho: "completo",
          ayuda: "Tu experiencia, cómo trabajas. Sin inventar: solo lo que es verdad.",
          alCambiar: L => {
            b.porQue = L
          }
        }), j({
          etiqueta: "Próximos pasos",
          tipo: "textarea",
          filas: 2,
          valor: b.proximos,
          max: 1500,
          ancho: "completo",
          placeholder: "Ej: Si te hace sentido, respóndeme y agendamos la primera reunión.",
          alCambiar: L => {
            b.proximos = L
          }
        })))
      }

      function K() {
        const b = u.monedaDe(r),
          L = e("div", {
            class: "items"
          }),
          Y = () => ({
            id: v.uid(),
            descripcion: "",
            detalle: "",
            cantidad: 1,
            unidad: "",
            precio: 0,
            descuento: 0
          }),
          o = s.boton("Agregar ítem", {
            icono: "mas",
            onclick: () => {
              r.items.push(Y()), n(), M(), L.querySelector(".item:last-child .item__desc").focus()
            }
          }),
          t = (h, q) => {
            const k = e("span", {
              class: "item__total"
            });
            c.set(h, k);
            const ee = e("input", {
              class: "control item__desc",
              type: "text",
              maxlength: 300,
              placeholder: "Qué vendes o qué trabajo haces",
              "aria-label": "Descripción del ítem " + (q + 1)
            });
            ee.value = h.descripcion, ee.addEventListener("input", () => {
              h.descripcion = ee.value, M()
            });
            const ae = e("textarea", {
              class: "control item__detalle",
              rows: 1,
              maxlength: 1e3,
              placeholder: "Detalle (opcional)",
              "aria-label": "Detalle del ítem " + (q + 1)
            });
            ae.value = h.detalle, ae.addEventListener("input", () => {
              h.detalle = ae.value, M()
            });
            const $ = e("input", {
              class: "control item__chico",
              type: "text",
              maxlength: 20,
              placeholder: "Unidad",
              list: "unidades",
              "aria-label": "Unidad"
            });
            return $.value = h.unidad, $.addEventListener("input", () => {
              h.unidad = $.value, M()
            }), e("div", {
              class: "item"
            }, e("span", {
              class: "item__n"
            }, q + 1), ee, S({
              valor: h.cantidad,
              etiqueta: "Cantidad",
              clase: "item__num",
              leer: J => v.leerCantidad(J, b),
              mostrar: J => v.cantidad(J, b),
              alCambiar: J => {
                h.cantidad = J
              }
            }), S({
              valor: h.precio,
              etiqueta: "Precio unitario",
              clase: "item__num",
              prefijo: b.simbolo,
              leer: J => v.leerMonto(J, b),
              mostrar: J => v.numero(J, b),
              alCambiar: J => {
                h.precio = J
              }
            }), k, s.botonIcono("borrar", "Quitar ítem", () => {
              r.items.splice(q, 1), r.items.length || r.items.push(Y()), n(), M()
            }), e("span"), ae, $, S({
              valor: h.descuento,
              etiqueta: "Descuento en %",
              clase: "item__chico",
              placeholder: "Desc. %",
              leer: J => v.leerCantidad(J, b, 100, 2),
              mostrar: J => v.cantidad(J, b) + "%",
              alCambiar: J => {
                h.descuento = J
              }
            }), e("span"), e("span"))
          },
          n = () => {
            c = new Map, v.vaciar(L).appendChild(e("div", {
              class: "items__cabeza"
            }, e("span", null, "#"), e("span", null, "Descripción"), e("span", {
              class: "num"
            }, "Cant."), e("span", {
              class: "num"
            }, "Precio unit."), e("span", {
              class: "num"
            }, "Total"), e("span"))), r.items.forEach((h, q) => L.appendChild(t(h, q))), o.disabled = r.items.length >= V, _()
          };
        r.items.forEach(h => {
          h.id || (h.id = v.uid())
        });
        const g = e("section", {
          class: "tarjeta"
        }, x(r.tipo === "propuesta" ? "Inversión" : "Lo que cotizas", 'Escribe los precios como siempre: "180.000" o "180000". Los totales se calculan solos.'), e("datalist", {
          id: "unidades"
        }, H.map(h => e("option", {
          value: h
        }))), L, o);
        return n(), g
      }

      function D() {
        const b = r.condiciones;
        return e("section", {
          class: "tarjeta"
        }, x("Condiciones", "Vienen de tu configuración. Cámbialas solo para este cliente si hace falta."), e("div", {
          class: "formulario"
        }, j({
          etiqueta: "Forma de pago",
          tipo: "textarea",
          filas: 2,
          valor: b.pago,
          max: 1e3,
          placeholder: "Ej: 50% al aceptar y 50% contra entrega",
          alCambiar: L => {
            b.pago = L
          }
        }), j({
          etiqueta: "Plazo de entrega",
          tipo: "textarea",
          filas: 2,
          valor: b.entrega,
          max: 1e3,
          placeholder: "Ej: 10 días hábiles desde el pago",
          alCambiar: L => {
            b.entrega = L
          }
        }), j({
          etiqueta: "Garantía",
          tipo: "textarea",
          filas: 2,
          valor: b.garantia,
          max: 1e3,
          placeholder: "Ej: 6 meses en mano de obra",
          alCambiar: L => {
            b.garantia = L
          }
        }), j({
          etiqueta: "Notas",
          tipo: "textarea",
          filas: 2,
          valor: b.notas,
          max: 2e3,
          alCambiar: L => {
            b.notas = L
          }
        })))
      }

      function _() {
        if (!r || !d) return;
        const b = u.monedaDe(r),
          L = fe.totales(r, b);
        r.items.forEach((n, g) => {
          const h = c.get(n);
          h && (h.textContent = v.dinero(L.lineas[g].total, b))
        });
        const Y = (n, g, h) => e("div", {
            class: "totales__fila" + (h ? " " + h : "")
          }, e("span", null, n), e("span", null, g)),
          o = r.impuesto,
          t = v.cantidad(o.tasa, b) + "%";
        v.poner(v.vaciar(d), L.descuento ? Y("Subtotal", v.dinero(L.subtotal, b)) : null, L.descuento ? Y("Descuento " + v.cantidad(r.descuento, b) + "%", "− " + v.dinero(L.descuento, b), "totales__fila--descuento") : null, L.conImpuesto ? Y("Neto", v.dinero(L.neto, b)) : null, L.conImpuesto ? Y(o.nombre + " " + t, v.dinero(L.impuesto, b)) : null, e("div", {
          class: "totales__total"
        }, e("span", null, "Total"), e("strong", null, v.dinero(L.total, b))), e("p", {
          class: "totales__nota"
        }, o.modo === "incluido" && L.conImpuesto ? "Los precios ya incluyen " + o.nombre + "." : o.modo === "sin" || !L.conImpuesto ? "Sin " + o.nombre + "." : o.nombre + " " + t + " sumado al neto."))
      }

      function pintarDoc() {
        if (!doc || !r) return;
        v.vaciar(doc), doc.appendChild(N()), r.tipo === "propuesta" && (doc.appendChild(C()), doc.appendChild(R())), doc.appendChild(K()), doc.appendChild(D()), r.tipo === "propuesta" && doc.appendChild(W())
      }

      function O() {
        const b = u.monedaDe(r),
          L = r.impuesto,
          Y = v.cantidad(L.tasa, b) + "%",
          plantillas = r.tipo === "propuesta" ? we.plantillas(r, () => {
            M(), pintarDoc()
          }) : null;
        hist = r.id ? we.historial("cotizacion", r.id, "Historial") : null;
        d = e("div", {
          class: "totales"
        });
        const o = e("p", {
            class: "campo__ayuda"
          }),
          t = () => {
            const $ = u.vence(r);
            o.textContent = "Vence el " + v.fechaLarga($) + (v.diasHasta($) < 0 ? " (ya venció)" : "")
          };
        t();
        const n = e("select", {
            class: "control estado-selector estado--" + r.estado,
            "aria-label": "Estado",
            onchange: $ => {
              r.estado = $.target.value, $.target.className = "control estado-selector estado--" + r.estado, M(), B(), hist && hist.actualizar(), r.estado === "aceptada" && De.alAceptar(r, J => {
                r.contacto = {
                  tipo: "cliente",
                  id: J.id
                }
              })
            }
          }, u.ESTADOS.map($ => e("option", {
            value: $.id,
            selected: $.id === r.estado
          }, $.nombre))),
          g = e("input", {
            class: "control",
            type: "date",
            "aria-label": "Fecha"
          });
        g.value = r.fecha, g.addEventListener("change", () => {
          /^\d{4}-\d{2}-\d{2}$/.test(g.value) && (r.fecha = g.value, t(), M())
        });
        const h = e("input", {
          class: "control",
          type: "number",
          min: 1,
          max: 365,
          "aria-label": "Días de validez"
        });
        h.value = r.validez, h.addEventListener("input", () => {
          const $ = Math.floor(Number(h.value));
          $ >= 1 && $ <= 365 && (r.validez = $, t(), M())
        });
        const q = e("select", {
            class: "control",
            "aria-label": "Impuesto",
            onchange: $ => {
              L.modo = $.target.value, M()
            }
          }, e("option", {
            value: "suma",
            selected: L.modo === "suma"
          }, "Sumar " + L.nombre + " " + Y), e("option", {
            value: "incluido",
            selected: L.modo === "incluido"
          }, "Precios con " + L.nombre + " incluido"), e("option", {
            value: "sin",
            selected: L.modo === "sin"
          }, "Sin " + L.nombre)),
          k = u.estado.negocio,
          ee = $ => (ce.PLANTILLAS.find(J => J.id === $) || ce.PLANTILLAS[0]).nombre,
          ae = e("select", {
            class: "control",
            "aria-label": "Diseño del PDF",
            onchange: $ => {
              r.plantilla = $.target.value, M()
            }
          }, e("option", {
            value: "",
            selected: !r.plantilla
          }, "El de siempre (" + ee(k && k.plantilla) + ")"), ce.PLANTILLAS.map($ => e("option", {
            value: $.id,
            selected: r.plantilla === $.id
          }, $.nombre)));
        return e("aside", {
          class: "editor__lado"
        }, e("section", {
          class: "tarjeta resumen"
        }, e("div", {
          class: "resumen__fila"
        }, e("span", {
          class: "campo__etiqueta"
        }, "Estado"), n), e("div", {
          class: "resumen__grilla"
        }, e("div", {
          class: "campo"
        }, e("span", {
          class: "campo__etiqueta"
        }, "Fecha"), g), e("div", {
          class: "campo"
        }, e("span", {
          class: "campo__etiqueta"
        }, "Válida por (días)"), h)), o, e("div", {
          class: "campo"
        }, e("span", {
          class: "campo__etiqueta"
        }, "Impuesto"), q), e("div", {
          class: "campo"
        }, e("span", {
          class: "campo__etiqueta"
        }, "Descuento general"), S({
          valor: r.descuento,
          etiqueta: "Descuento general en %",
          placeholder: "Sin descuento",
          leer: $ => v.leerCantidad($, b, 100, 2),
          mostrar: $ => v.cantidad($, b) + "%",
          alCambiar: $ => {
            r.descuento = $
          }
        })), d, e("div", {
          class: "campo"
        }, e("span", {
          class: "campo__etiqueta"
        }, "Diseño del PDF"), ae), e("div", {
          class: "resumen__pdf"
        }, s.boton("Ver PDF", {
          icono: "documento",
          onclick: Q
        }), s.boton("Descargar PDF", {
          icono: "descargar",
          tipo: "primario",
          onclick: X
        })), e("div", {
          class: "resumen__acciones"
        }, s.boton("Duplicar", {
          icono: "copiar",
          chico: !0,
          onclick: ie
        }), s.boton("Eliminar", {
          icono: "borrar",
          chico: !0,
          tipo: "texto-peligro",
          onclick: ne
        }))), hist ? hist.el : null, plantillas ? plantillas.el : null)
      }

      function G() {
        return B(), r.numero ? u.estado.cotizaciones.find(b => b.id === r.id) : (s.aviso("Escribe primero para quién es o qué cotizas.", "error"), null)
      }

      function Q() {
        const b = G();
        b && ce.vistaPrevia(b, null, {
          alDescargar: X
        })
      }
      async function X() {
        const b = G();
        if (!(!b || !await ce.descargar(b) || b.estado !== "borrador" || !await s.confirmar({
            titulo: "¿Se la vas a mandar al cliente?",
            texto: "Si la marcas como enviada, el CRM te muestra en Inicio cuánto llevas cotizado y te avisa cuando esté por vencer.",
            si: "Sí, marcar como enviada"
          }))) {
          if (r && r.id === b.id) {
            r.estado = "enviada", T = !0, B(), hist && hist.actualizar();
            const Y = document.querySelector(".resumen .estado-selector");
            Y && (Y.value = "enviada", Y.className = "control estado-selector estado--enviada")
          } else u.guardarCotizacion({
            ...b,
            estado: "enviada"
          });
          s.aviso(u.codigo(b) + " quedó como enviada")
        }
      }

      function ie() {
        if (B(), !r.numero) return s.aviso("Escribe algo primero: no hay nada que copiar.", "error");
        const b = u.duplicarCotizacion(r.id);
        b && (s.aviso("Copia creada: " + u.codigo(b)), E(b.id))
      }
      async function ne() {
        if (!r.numero) return r = null, s.ir("cotizaciones");
        B(), await s.confirmar({
          titulo: "¿Eliminar " + u.codigo(r) + "?",
          texto: "Se borra para siempre. Su número no se vuelve a usar.",
          si: "Eliminar",
          peligro: !0
        }) && (u.borrarCotizacion(r.id), r = null, s.aviso("Eliminada"), s.ir("cotizaciones"))
      }

      function re(b) {
        i = e("h1", {
          class: "pagina__titulo"
        }, p()), P = e("span", null, r.numero ? "Guardado en este computador" : "Se guarda solo apenas escribas algo."), doc = e("div", {
          class: "editor__doc"
        }), pintarDoc(), v.poner(b, e("header", {
          class: "pagina__cabeza"
        }, e("div", null, e("a", {
          class: "volver",
          href: "#/cotizaciones"
        }, oe("atras"), "Cotizaciones"), i, e("p", {
          class: "pagina__bajada guardado"
        }, P))), e("div", {
          class: "editor"
        }, doc, O())), _(), s.alSalir(() => {
          B(), r = null
        })
      }
      return s.ruta("nueva", (b, L) => {
        const [Y, o] = L.split("/");
        r = u.borrador(u.TIPOS[Y] ? Y : "cotizacion", o), T = !1, re(b)
      }), s.ruta("cotizacion", (b, L) => {
        const Y = u.estado.cotizaciones.find(o => o.id === L);
        if (!Y) {
          b.appendChild(s.encabezado("No la encontré", "Puede que se haya eliminado.")), b.appendChild(e("section", {
            class: "tarjeta"
          }, s.vacio({
            icono: "cotizaciones",
            titulo: "Esta cotización ya no existe",
            texto: "Vuelve a la lista para ver las que tienes.",
            accion: s.boton("Ver cotizaciones", {
              tipo: "primario",
              onclick: () => s.ir("cotizaciones")
            })
          })));
          return
        }
        r = JSON.parse(JSON.stringify(Y)), T = !1, re(b)
      }), window.addEventListener("pagehide", () => B()), {
        nueva: f,
        abrir: E
      }
    })(),
    ke = (() => {
      "use strict";
      const {
        h: e
      } = v, H = [{
        valor: "suma",
        texto: "Le sumo el impuesto (IVA) después"
      }, {
        valor: "incluido",
        texto: "Mis precios ya incluyen el impuesto"
      }, {
        valor: "sin",
        texto: "No cobro impuesto o no estoy seguro"
      }];

      function V(...p) {
        const l = {
          negocio: T,
          marca: d,
          cotizaciones: c,
          datos: y
        };
        p.forEach(I => {
          const M = document.getElementById("tarjeta-" + I);
          M && M.replaceWith(l[I]())
        })
      }
      const F = () => Object.keys(le).map(p => ({
        valor: p,
        texto: p
      }));

      function r() {
        const p = s.formulario([{
          nombre: "nombre",
          etiqueta: "¿Cómo se llama tu negocio?",
          requerido: !0,
          max: 120,
          ancho: "completo",
          placeholder: "Puede ser tu nombre",
          ayuda: "Así aparece en tus cotizaciones."
        }, {
          nombre: "pais",
          etiqueta: "¿En qué país trabajas?",
          tipo: "select",
          valor: "Chile",
          opciones: F(),
          ancho: "completo",
          ayuda: "Define la moneda y cómo se escriben los precios."
        }, {
          nombre: "modo",
          etiqueta: "Cuando le das un precio a un cliente…",
          tipo: "select",
          valor: "sin",
          opciones: H,
          ancho: "completo",
          ayuda: "Si no estás seguro, deja la última: el total queda igual al precio que das. Se cambia cuando quieras."
        }], I => {
          const M = u.valoresDePais(I.pais);
          u.guardarNegocio({
            nombre: I.nombre,
            ...M,
            impuesto: {
              ...M.impuesto,
              modo: I.modo
            }
          }), l.cerrar(), ve.dibujarMarco(), s.aviso("Listo, ya puedes empezar")
        });
        p.id = "form-bienvenida";
        const l = s.modal({
          titulo: "Bienvenido a tu CRM",
          bajada: "Tres datos y empiezas. Todo lo demás lo puedes cambiar después en Configuración.",
          cuerpo: p,
          pie: s.boton("Empezar", {
            tipo: "primario",
            enviar: !0,
            form: "form-bienvenida"
          }),
          ancho: "sm",
          alCerrar: () => {
            u.estado.negocio || u.guardarNegocio({
              nombre: "Mi negocio",
              ...u.valoresDePais("Chile")
            }), ve.dibujarMarco()
          }
        })
      }

      function T() {
        const p = u.estado.negocio || {},
          l = s.formulario([{
            nombre: "nombre",
            etiqueta: "Nombre del negocio",
            requerido: !0,
            valor: p.nombre,
            max: 120
          }, {
            nombre: "pais",
            etiqueta: "País",
            tipo: "select",
            valor: p.pais || "Chile",
            opciones: F()
          }, {
            nombre: "idValor",
            etiqueta: u.etiquetaId(),
            valor: p.idTributario && p.idTributario.valor,
            max: 40,
            ayuda: "Tu identificación tributaria. Es opcional."
          }, {
            nombre: "telefono",
            etiqueta: "Teléfono",
            tipo: "tel",
            valor: p.telefono,
            max: 40
          }, {
            nombre: "email",
            etiqueta: "Correo",
            tipo: "email",
            valor: p.email,
            max: 120
          }, {
            nombre: "web",
            etiqueta: "Sitio web o Instagram",
            valor: p.web,
            max: 120
          }, {
            nombre: "direccion",
            etiqueta: "Dirección",
            valor: p.direccion,
            max: 200,
            ancho: "completo"
          }], M => {
            const B = M.pais !== p.pais,
              j = B ? u.valoresDePais(M.pais) : {};
            u.guardarNegocio({
              ...j,
              nombre: M.nombre,
              telefono: M.telefono,
              email: M.email,
              web: M.web,
              direccion: M.direccion,
              idTributario: {
                etiqueta: (j.idTributario || p.idTributario || {}).etiqueta || "RUT",
                valor: M.idValor
              }
            }) && (B ? V("negocio", "cotizaciones") : V("negocio"), s.aviso(B ? "Guardado. Las cotizaciones nuevas van en la moneda de " + M.pais + "; las que ya hiciste quedan como estaban." : "Datos del negocio guardados"))
          });
        l.id = "form-negocio";
        const I = u.moneda();
        return e("section", {
          class: "tarjeta",
          id: "tarjeta-negocio"
        }, e("div", {
          class: "tarjeta__cabeza"
        }, e("div", null, e("h2", {
          class: "tarjeta__titulo"
        }, "Mi negocio"), e("p", {
          class: "texto-3"
        }, "Estos datos van en el encabezado de tus cotizaciones."))), l, e("div", {
          class: "tarjeta__pie"
        }, e("span", {
          class: "texto-3"
        }, "Moneda: " + I.codigo + " · ejemplo " + v.dinero(12345675e-1, I)), s.boton("Guardar", {
          tipo: "primario",
          enviar: !0,
          form: "form-negocio"
        })))
      }
      const A = [{
        nombre: "Azul",
        principal: "#1d4e89",
        acento: "#e07a2f"
      }, {
        nombre: "Verde",
        principal: "#0f766e",
        acento: "#f59e0b"
      }, {
        nombre: "Marino",
        principal: "#2e4460",
        acento: "#ee6c4d"
      }, {
        nombre: "Vino",
        principal: "#7f1d1d",
        acento: "#c9a227"
      }, {
        nombre: "Grafito",
        principal: "#1f2937",
        acento: "#d97706"
      }, {
        nombre: "Terracota",
        principal: "#b45309",
        acento: "#1f2937"
      }, {
        nombre: "Rosa",
        principal: "#9d174d",
        acento: "#f472b6"
      }, {
        nombre: "Turquesa",
        principal: "#0e7490",
        acento: "#f97316"
      }];
      async function P(p) {
        if (p.size > 8 * 1024 * 1024) throw new Error("La imagen pesa demasiado. Prueba con una más liviana.");
        const l = new Uint8Array(await p.slice(0, 4).arrayBuffer()),
          I = l[0] === 137 && l[1] === 80 && l[2] === 78 && l[3] === 71,
          M = l[0] === 255 && l[1] === 216 && l[2] === 255;
        if (!I && !M) throw new Error("El logo tiene que ser una imagen PNG o JPG, que son las más comunes. Si lo tienes en otro formato, ábrelo y guárdalo como PNG.");
        const B = URL.createObjectURL(p);
        try {
          const j = new Image;
          j.src = B, await j.decode();
          for (const m of [800, 500, 320]) {
            const S = Math.min(1, m / Math.max(j.naturalWidth, j.naturalHeight)),
              x = Math.max(1, Math.round(j.naturalWidth * S)),
              N = Math.max(1, Math.round(j.naturalHeight * S)),
              C = e("canvas", {
                width: x,
                height: N
              }),
              R = C.getContext("2d");
            M && (R.fillStyle = "#ffffff", R.fillRect(0, 0, x, N)), R.drawImage(j, 0, 0, x, N);
            const W = I ? C.toDataURL("image/png") : C.toDataURL("image/jpeg", .9);
            if (W.length < 14e5) return {
              logo: W,
              logoProporcion: x / N
            }
          }
          throw new Error("El logo es demasiado pesado. Prueba con una versión más simple.")
        } finally {
          URL.revokeObjectURL(B)
        }
      }

      function i(p) {
        const l = M => e("span", {
            class: "mini__" + M
          }),
          I = {
            clasica: [l("logo"), l("lineas-der"), l("regla"), l("titulo"), e("span", {
              class: "mini__fila"
            }, l("caja"), l("caja mini__caja--tinte")), l("tabla-cabeza"), l("filas"), l("total-der")],
            minimal: [l("nombre"), l("titulo-der"), l("dos-col"), l("tabla-cabeza"), l("filas"), l("total-tinte")],
            corporativa: [l("formas"), l("logo"), l("titulo-grande"), l("dos-col"), l("tabla-bordes"), l("total-der")],
            elegante: [l("tarjeta"), l("titulo-centro"), l("dos-col"), l("tabla-suave"), l("total-tinte")],
            moderna: [l("titulo-acento"), l("dos-col"), l("tabla-cabeza"), l("filas-grises"), l("total-der"), l("barra")],
            ejecutiva: [l("banda"), l("dos-col"), l("filas"), l("total-der")]
          };
        return e("span", {
          class: "mini mini--" + p,
          "aria-hidden": "true"
        }, I[p])
      }

      function d() {
        const p = u.estado.negocio || {},
          l = p.colores || u.COLORES,
          I = (S, x) => {
            u.guardarNegocio(S) && (V("marca"), x && s.aviso(x))
          },
          M = e("input", {
            type: "file",
            accept: "image/png,image/jpeg",
            class: "solo-lector",
            id: "logo-archivo"
          });
        M.addEventListener("change", async () => {
          const S = M.files[0];
          if (S) try {
            I(await P(S), "Logo guardado. Ya aparece en tus PDF.")
          } catch (x) {
            s.aviso(x.message, "error")
          }
        });
        const B = (S, x) => {
            const N = e("input", {
              type: "color",
              class: "color__input",
              "aria-label": x,
              value: l[S]
            });
            return N.addEventListener("change", () => I({
              colores: {
                ...l,
                [S]: N.value
              }
            }, "Color guardado")), e("label", {
              class: "color"
            }, N, e("span", null, e("strong", null, x), e("span", {
              class: "texto-3"
            }, l[S])))
          },
          j = S => {
            const x = e("button", {
              type: "button",
              class: "paleta" + (S.principal === l.principal && S.acento === l.acento ? " paleta--activa" : ""),
              title: S.nombre,
              "aria-label": "Colores " + S.nombre,
              onclick: () => I({
                colores: {
                  principal: S.principal,
                  acento: S.acento
                }
              }, "Colores " + S.nombre)
            }, e("span", {
              class: "paleta__a"
            }), e("span", {
              class: "paleta__b"
            }));
            return x.style.setProperty("--p", S.principal), x.style.setProperty("--a", S.acento), x
          },
          m = e("div", {
            class: "galeria"
          }, ce.PLANTILLAS.map(S => {
            const x = (p.plantilla || "clasica") === S.id,
              N = e("div", {
                class: "diseno" + (x ? " diseno--activo" : "")
              }, e("button", {
                type: "button",
                class: "diseno__elegir",
                "aria-pressed": x ? "true" : "false",
                onclick: () => I({
                  plantilla: S.id
                }, "Diseño " + S.nombre + " elegido")
              }, i(S.id), e("span", {
                class: "diseno__nombre"
              }, S.nombre, x ? e("span", {
                class: "insignia insignia--ok"
              }, "En uso") : null), e("span", {
                class: "diseno__texto"
              }, S.descripcion)), e("button", {
                type: "button",
                class: "diseno__ver",
                onclick: () => ce.vistaPrevia(ce.ejemplo(), S.id, {
                  titulo: "Diseño " + S.nombre,
                  alDescargar: !1
                })
              }, "Ver ejemplo"));
            return N.style.setProperty("--p", l.principal), N.style.setProperty("--a", l.acento), N
          }));
        return e("section", {
          class: "tarjeta",
          id: "tarjeta-marca"
        }, e("div", {
          class: "tarjeta__cabeza"
        }, e("div", null, e("h2", {
          class: "tarjeta__titulo"
        }, "Tu marca en el PDF"), e("p", {
          class: "texto-3"
        }, "Tu logo, tus colores y el diseño de tus cotizaciones."))), e("div", {
          class: "marca"
        }, e("div", {
          class: "marca__logo"
        }, p.logo ? e("img", {
          src: p.logo,
          alt: "Tu logo",
          class: "marca__imagen"
        }) : e("span", {
          class: "marca__vacio"
        }, oe("subir"), "Sin logo"), e("div", {
          class: "marca__botones"
        }, M, e("label", {
          for: "logo-archivo",
          class: "boton boton--suave boton--chico"
        }, oe("subir"), p.logo ? "Cambiar logo" : "Subir logo"), p.logo ? s.boton("Quitar", {
          chico: !0,
          tipo: "texto-peligro",
          onclick: () => I({
            logo: "",
            logoProporcion: 1
          }, "Logo quitado")
        }) : null), e("p", {
          class: "campo__ayuda"
        }, "Una imagen PNG o JPG. Si tiene fondo transparente, mejor.")), e("div", {
          class: "marca__colores"
        }, e("span", {
          class: "campo__etiqueta"
        }, "Colores"), e("div", {
          class: "paletas"
        }, A.map(j)), e("div", {
          class: "colores"
        }, B("principal", "Principal"), B("acento", "Acento")))), e("div", {
          class: "subtitulo"
        }, e("h3", null, "Diseño del PDF"), e("p", {
          class: "texto-3"
        }, "Elige el que más te guste. En cada cotización puedes usar otro.")), m)
      }

      function c() {
        const p = u.estado.negocio || {},
          l = p.impuesto || {
            nombre: "IVA",
            tasa: 0,
            modo: "sin"
          },
          I = p.condiciones || {},
          num = u.estado.numeracion || {
            cotizacion: {
              prefijo: "COT"
            },
            propuesta: {
              prefijo: "PROP"
            }
          },
          M = s.formulario([{
            nombre: "impNombre",
            etiqueta: "Nombre del impuesto",
            valor: l.nombre,
            max: 30
          }, {
            nombre: "impTasa",
            etiqueta: "Tasa (%)",
            valor: String(l.tasa).replace(".", ","),
            max: 6,
            ayuda: "Solo el número. En Chile el IVA es 19."
          }, {
            nombre: "impModo",
            etiqueta: "Por defecto",
            tipo: "select",
            valor: l.modo,
            opciones: [{
              valor: "suma",
              texto: "Sumar " + l.nombre + " al precio"
            }, {
              valor: "incluido",
              texto: "Mis precios ya incluyen " + l.nombre
            }, {
              valor: "sin",
              texto: "Sin " + l.nombre
            }],
            ayuda: "En cada cotización lo puedes cambiar."
          }, {
            nombre: "validez",
            etiqueta: "Validez (días)",
            tipo: "number",
            valor: String(p.validez || 15),
            ayuda: "Cuántos días vale la oferta."
          }, {
            nombre: "pago",
            etiqueta: "Forma de pago",
            tipo: "textarea",
            filas: 2,
            valor: I.pago,
            max: 1e3,
            placeholder: "Ej: 50% al aceptar y 50% contra entrega"
          }, {
            nombre: "entrega",
            etiqueta: "Plazo de entrega",
            tipo: "textarea",
            filas: 2,
            valor: I.entrega,
            max: 1e3
          }, {
            nombre: "garantia",
            etiqueta: "Garantía",
            tipo: "textarea",
            filas: 2,
            valor: I.garantia,
            max: 1e3
          }, {
            nombre: "notas",
            etiqueta: "Notas",
            tipo: "textarea",
            filas: 2,
            valor: I.notas,
            max: 2e3
          }, {
            nombre: "datosPago",
            etiqueta: "Datos para el pago",
            tipo: "textarea",
            filas: 3,
            valor: p.datosPago,
            max: 600,
            ancho: "completo",
            placeholder: "Ej: Banco, tipo de cuenta, número y correo para el comprobante",
            ayuda: "Aparecen al final del PDF para que el cliente sepa dónde transferir."
          }, {
            nombre: "prefCot",
            etiqueta: "Prefijo de cotizaciones",
            valor: num.cotizacion.prefijo,
            max: 8,
            ayuda: "Hasta 8 letras o números. Ej: COT."
          }, {
            nombre: "sigCot",
            etiqueta: "Próximo número de cotización",
            tipo: "number",
            valor: String(u.siguienteNumero("cotizacion")),
            ayuda: "No puede ser menor al último usado: los números no se repiten."
          }, {
            nombre: "prefProp",
            etiqueta: "Prefijo de propuestas",
            valor: num.propuesta.prefijo,
            max: 8,
            ayuda: "Ej: PROP."
          }, {
            nombre: "sigProp",
            etiqueta: "Próximo número de propuesta",
            tipo: "number",
            valor: String(u.siguienteNumero("propuesta")),
            ayuda: "No puede ser menor al último usado."
          }], B => {
            const j = String(B.impTasa).trim().replace("%", "").replace(",", "."),
              m = /^\d{1,3}(\.\d{1,2})?$/.test(j) ? Number(j) : NaN,
              S = Math.floor(Number(B.validez));
            if (!(m >= 0 && m <= 100)) return s.aviso('Escribe la tasa como un número entre 0 y 100, por ejemplo 19. Si no cobras impuesto, elige "Sin IVA" abajo.', "error");
            if (!(S >= 1 && S <= 365)) return s.aviso("La validez tiene que ser entre 1 y 365 días.", "error");
            const prefijo = J => String(J || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
            if (!prefijo(B.prefCot) || !prefijo(B.prefProp)) return s.aviso("El prefijo solo puede tener letras y números (hasta 8).", "error");
            if (!u.guardarNegocio({
                impuesto: {
                  nombre: B.impNombre || "IVA",
                  tasa: m,
                  modo: B.impModo
                },
                validez: S,
                condiciones: {
                  pago: B.pago,
                  entrega: B.entrega,
                  garantia: B.garantia,
                  notas: B.notas
                },
                datosPago: B.datosPago
              })) return;
            u.configurarNumeracion("cotizacion", B.prefCot, B.sigCot), u.configurarNumeracion("propuesta", B.prefProp, B.sigProp), s.aviso("Guardado. Se usa en las cotizaciones nuevas."), V("cotizaciones")
          });
        return M.id = "form-cotizaciones", e("section", {
          class: "tarjeta",
          id: "tarjeta-cotizaciones"
        }, e("div", {
          class: "tarjeta__cabeza"
        }, e("div", null, e("h2", {
          class: "tarjeta__titulo"
        }, "Cotizaciones"), e("p", {
          class: "texto-3"
        }, "Lo que se copia en cada cotización nueva. Las que ya hiciste no cambian."))), M, e("div", {
          class: "tarjeta__pie"
        }, e("span"), s.boton("Guardar", {
          tipo: "primario",
          enviar: !0,
          form: "form-cotizaciones"
        })))
      }
      async function f(p) {
        const l = u.leadsNuevos(p);
        if (!l.length) return s.aviso(p.length ? "Esos clientes del Mini CRM ya están en tu CRM." : "Ese respaldo del Mini CRM no trae clientes.", "error");
        !await s.confirmar({
          titulo: "Pasar tus clientes del Mini CRM",
          texto: "Se van a agregar " + v.cuenta(l.length, "cliente", "clientes") + " del Mini CRM como leads. Lo que ya tienes en este CRM no se borra.",
          si: "Agregar"
        }) || !u.sumarLeads(l) || (ve.dibujarMarco(), s.aviso(v.cuenta(l.length, "lead agregado", "leads agregados") + " desde el Mini CRM"))
      }
      async function E(p) {
        let l;
        try {
          l = await u.leerRespaldo(p)
        } catch (j) {
          return s.aviso(j.message, "error")
        }
        if (l.miniCrm) return f(l.leads);
        if (l.negocio && l.negocio.logo) try {
          const j = new Image;
          j.src = l.negocio.logo, await j.decode();
          const m = e("canvas", {
            width: j.naturalWidth,
            height: j.naturalHeight
          });
          m.getContext("2d").drawImage(j, 0, 0), l.negocio.logo = m.toDataURL("image/png"), l.negocio.logoProporcion = j.naturalWidth / j.naturalHeight, l.negocio.logo.length > 14e5 && (l.negocio.logo = "")
        } catch {
          l.negocio.logo = ""
        }
        const I = v.cuenta(l.leads.length, "lead", "leads") + ", " + v.cuenta(l.clientes.length, "cliente", "clientes") + " y " + v.cuenta(l.cotizaciones.length, "cotización", "cotizaciones"),
          M = u.tieneDatos();
        await s.confirmar({
          titulo: "¿Cargar este respaldo?",
          texto: "Trae " + I + (l.negocio ? " de " + l.negocio.nombre : "") + ". Reemplaza todo lo que tienes ahora." + (M ? " Antes, te descargo un respaldo de lo actual por si lo necesitas." : ""),
          si: "Cargar respaldo"
        }) && (M && u.respaldo("antes-de-cargar"), u.reemplazar(l) && (ve.dibujarMarco(), s.aviso("Respaldo cargado: " + I)))
      }

      function y() {
        const {
          respaldo: p
        } = u.estado, l = e("input", {
          type: "file",
          accept: ".json,application/json",
          class: "solo-lector",
          id: "respaldo-archivo"
        });
        l.addEventListener("change", () => {
          l.files[0] && E(l.files[0]), l.value = ""
        });
        const I = u.ocupado(),
          M = e("span", {
            class: "medidor__relleno" + (I > .8 ? " medidor__relleno--alto" : "")
          });
        return M.style.width = Math.max(1, Math.round(I * 100)) + "%", e("section", {
          class: "tarjeta",
          id: "tarjeta-datos"
        }, e("div", {
          class: "tarjeta__cabeza"
        }, e("div", null, e("h2", {
          class: "tarjeta__titulo"
        }, "Tus datos"), e("p", {
          class: "texto-3"
        }, "Viven solo en este computador, dentro de este navegador. No se suben a internet."))), e("div", {
          class: "aviso-caja"
        }, oe("escudo"), e("p", null, "Si alguien borra los datos de navegación de este navegador, se borra también tu CRM. Descarga un respaldo cada semana y guárdalo en otra parte, como tu correo o un pendrive.")), e("div", {
          class: "medidor"
        }, e("div", {
          class: "medidor__texto"
        }, e("span", null, "Espacio usado"), e("strong", null, Math.round(I * 100) + "%")), e("div", {
          class: "medidor__pista"
        }, M)), e("div", {
          class: "tarjeta__pie"
        }, e("span", {
          class: "texto-3"
        }, p.ultimo ? "Último respaldo: " + v.fecha(p.ultimo) : "Todavía no descargas ningún respaldo."), e("div", {
          class: "pagina__acciones"
        }, l, e("label", {
          for: "respaldo-archivo",
          class: "boton boton--suave",
          tabindex: "0",
          onkeydown: B => {
            B.key === "Enter" && l.click()
          }
        }, oe("subir"), e("span", null, "Cargar un respaldo")), s.boton("Descargar respaldo", {
          icono: "descargar",
          tipo: "primario",
          onclick: () => {
            u.respaldo(), V("datos")
          }
        }))), e("p", {
          class: "campo__ayuda tarjeta__nota"
        }, 'Para pasar tu CRM a otro computador: descarga un respaldo acá, abre el CRM en el otro computador y usa "Cargar un respaldo".'), e("p", {
          class: "campo__ayuda"
        }, '¿Vienes del Mini CRM? Usa "Cargar un respaldo" con tu archivo "mini-crm-respaldo-…" y tus clientes se suman como leads, sin borrar nada.'))
      }
      return s.ruta("configuracion", p => {
        p.appendChild(s.encabezado("Configuración", "Los datos de tu negocio y el respaldo de tu información.")), p.appendChild(e("div", {
          class: "pila"
        }, T(), d(), c(), y(), ue.tarjetaVersion())), ue.pintar()
      }), {
        bienvenida: r
      }
    })();
  (() => {
    "use strict";
    const {
      h: e
    } = v, H = (F, ...r) => r.some(T => v.normalizar(T).includes(F));

    function V(F, r, T) {
      return e("li", null, e("button", {
        class: "resultado",
        type: "button",
        onclick: T
      }, s.avatar(F.nombre), e("span", {
        class: "resultado__texto"
      }, e("strong", null, F.nombre), e("span", {
        class: "texto-3"
      }, [F.empresa, F.email, F.telefono].filter(Boolean).join(" · "))), e("span", {
        class: "insignia insignia--neutro"
      }, r)))
    }
    s.ruta("buscar", (F, r) => {
      const T = v.normalizar(r).trim(),
        {
          leads: A,
          clientes: P
        } = u.estado,
        i = T ? A.filter(f => H(T, f.nombre, f.empresa, f.email, f.telefono, f.interes)) : [],
        d = T ? P.filter(f => H(T, f.nombre, f.empresa, f.email, f.telefono, f.idTributario)) : [],
        c = T ? u.estado.cotizaciones.filter(f => H(T, u.codigo(f), f.cliente.nombre, f.cliente.empresa, f.propuesta && f.propuesta.titulo)) : [];
      if (F.appendChild(s.encabezado("Buscar", T ? 'Resultados para "' + r.trim() + '"' : "Escribe arriba un nombre, empresa, correo, teléfono o número de cotización.")), !!T) {
        if (!i.length && !d.length && !c.length) {
          F.appendChild(e("section", {
            class: "tarjeta"
          }, s.vacio({
            icono: "buscar",
            titulo: "No encontré nada",
            texto: "Prueba con otra parte del nombre, o con el teléfono."
          })));
          return
        }
        F.appendChild(e("section", {
          class: "tarjeta"
        }, e("ul", {
          class: "resultados"
        }, c.map(f => V({
          nombre: u.codigo(f),
          empresa: f.cliente.nombre,
          email: f.propuesta && f.propuesta.titulo
        }, u.TIPOS[f.tipo].nombre, () => de.abrir(f.id))), d.map(f => V(f, "Cliente", () => _e.abrir(f))), i.map(f => V(f, "Lead", () => ge.abrir(f))))))
      }
    })
  })();
  (() => {
    "use strict";
    const {
      h: e
    } = v, H = [{
      icono: "inicio",
      titulo: "Cómo funciona",
      pasos: ["Anota a cada persona que te pregunta por tus servicios en Leads.", 'Cuando quiera precios, abre su ficha y toca "Hacer cotización".', "Escribe lo que cotizas. El CRM calcula los totales solo.", 'Toca "Descargar PDF" y mándaselo por WhatsApp o correo.', "Cuando te diga que sí, márcala como Aceptada: el lead pasa a cliente."]
    }, {
      icono: "leads",
      titulo: "Leads y clientes",
      texto: ["Un lead es alguien interesado que todavía no te compra. Un cliente es alguien que ya te compró.", "Ponle a cada lead una fecha de seguimiento: el día que le vas a volver a escribir. En Inicio ves a quién te toca contactar hoy y quién está atrasado.", "Con los botones de WhatsApp, teléfono y correo le escribes directo, sin buscar su número.", "En la ficha de cada lead y cliente ves su historial: cuándo lo creaste, qué cambiaste y qué tareas tiene."]
    }, {
      icono: "calendario",
      titulo: "Tareas y recordatorios",
      texto: ["En Tareas anotas lo que no quieres olvidar: llamar a un lead, mandar una propuesta, cobrar. Puedes ponerle fecha y prioridad.", "Cada tarea puede ir ligada a un lead, un cliente o una cotización. También puedes dejarla suelta.", "En Inicio aparecen las tareas para hoy y las atrasadas, con un botón para marcarlas como hechas."]
    }, {
      icono: "cotizaciones",
      titulo: "Cotizaciones y propuestas",
      texto: ["La cotización es la lista de precios. La propuesta además explica el proyecto: qué necesita el cliente, qué le propones, qué incluye y en qué etapas se hace.", "Todo se guarda solo mientras escribes. Cada una recibe su número (COT-0001, PROP-0001) y ese número nunca se repite. En Configuración puedes cambiar el prefijo y el próximo número.", 'Escribe los precios como siempre: "180.000" o "180000". Si un trabajo tiene precio por unidad, pon la cantidad y el CRM multiplica.', "Si haces propuestas parecidas, guárdalas como plantilla y reutiliza el texto en la siguiente. Cada cotización guarda un historial con los cambios de estado."]
    }, {
      icono: "alerta",
      titulo: "El impuesto (IVA)",
      texto: ["En cada cotización eliges entre tres opciones: sumar el IVA al precio, precios con el IVA ya incluido, o sin IVA.", 'Si no sabes cuál te corresponde, usa "Sin IVA": el total queda igual al precio que das. Después confírmalo con tu contador y lo cambias en Configuración.', "Una cotización no es una factura. La factura o boleta la sigues haciendo donde siempre."]
    }, {
      icono: "documento",
      titulo: "El PDF",
      texto: ['Con "Ver PDF" lo revisas antes de mandarlo. Con "Descargar PDF" queda en tu carpeta Descargas, con el número y el nombre del cliente.', "Para mandarlo por WhatsApp desde el computador: entra a web.whatsapp.com, abre el chat del cliente y arrastra el PDF a la conversación.", "Tu logo, tus colores y el diseño se eligen en Configuración. Hay seis diseños, y en cada cotización puedes usar otro distinto."]
    }, {
      icono: "escudo",
      titulo: "Tus datos y los respaldos",
      texto: ["Todo queda guardado solo en este computador, dentro del navegador. No se sube a internet y nadie más lo ve.", 'Ojo con esto: si alguien borra los datos de navegación (las "cookies y datos de sitios"), se borra también el CRM. Por eso, descarga un respaldo cada semana y guárdalo en otra parte, como tu correo o un pendrive.', 'Para cambiarte de computador: descarga un respaldo, abre el CRM en el computador nuevo y en Configuración usa "Cargar un respaldo".', "No abras archivos HTML que te manden personas que no conoces: un archivo así, abierto en el mismo navegador, podría leer los datos guardados."]
    }], V = [
      ["¿Necesito internet?", "No. El CRM funciona completo sin internet. Solo lo necesitas para mandar el PDF por WhatsApp o correo. Si hay internet, al abrirse revisa si salió una versión nueva: solo lee ese aviso, tus datos no salen de este computador."],
      ["¿Cómo se actualiza?", "Cuando hay una versión nueva, al abrir el CRM te aparece un aviso en Inicio con el botón para descargarla. Descomprímela y reemplaza la carpeta vieja: tus leads, clientes y cotizaciones se mantienen, porque viven en el navegador y no en la carpeta. En Configuración ves qué versión tienes."],
      ["Vengo del Mini CRM, ¿cómo paso mis clientes?", 'En el Mini CRM, entra a Configuración y toca "Guardar copia de seguridad": se descarga un archivo que se llama "mini-crm-respaldo-…". Después, en este CRM, entra a Configuración, toca "Cargar un respaldo" y elige ese archivo. Tus clientes se suman como leads y no se borra nada de lo que ya tenías acá. El logo y los colores se configuran de nuevo.'],
      ["¿Lo puedo usar en el celular?", 'No, es para computador. Abre siempre el archivo "Abrir CRM" en el mismo computador y con el mismo navegador.'],
      ["¿Con qué navegador lo abro?", 'Con Google Chrome o Microsoft Edge. Si se te abre en otro, haz clic derecho sobre "Abrir CRM", elige "Abrir con" y escoge uno de esos dos.'],
      ["Lo abrí en dos pestañas y una se bloqueó", "Es a propósito, para que una pestaña no borre lo que hiciste en la otra. Trabaja en una sola."],
      ["¿Puedo mover la carpeta del CRM?", "Sí, puedes moverla dentro del mismo computador. Pero copiarla a otro computador no lleva tus datos: para eso está el respaldo."],
      ["¿Cuánto cabe?", "Miles de cotizaciones. En Configuración ves cuánto espacio llevas usado."]
    ];
    s.ruta("ayuda", F => {
      F.appendChild(s.encabezado("Ayuda", "Todo lo que necesitas para usar tu CRM. Si te pierdes, vuelve acá.")), F.appendChild(e("div", {
        class: "ayuda"
      }, H.map(r => e("section", {
        class: "tarjeta ayuda__tema"
      }, e("div", {
        class: "ayuda__cabeza"
      }, e("span", {
        class: "codigo__icono"
      }, oe(r.icono)), e("h2", {
        class: "tarjeta__titulo"
      }, r.titulo)), r.pasos ? e("ol", {
        class: "pasos ayuda__pasos"
      }, r.pasos.map(T => e("li", null, T))) : null, r.texto ? r.texto.map(T => e("p", {
        class: "ayuda__texto"
      }, T)) : null)))), F.appendChild(e("section", {
        class: "tarjeta tarjeta--separada"
      }, e("div", {
        class: "tarjeta__cabeza"
      }, e("h2", {
        class: "tarjeta__titulo"
      }, "Preguntas frecuentes")), e("div", {
        class: "preguntas"
      }, V.map(([r, T]) => e("details", {
        class: "pregunta"
      }, e("summary", null, r), e("p", null, T))))))
    })
  })();
  const ve = (() => {
    "use strict";
    const {
      h: e
    } = v, H = [{
      ruta: "inicio",
      nombre: "Inicio",
      icono: "inicio"
    }, {
      ruta: "leads",
      nombre: "Leads",
      icono: "leads"
    }, {
      ruta: "clientes",
      nombre: "Clientes",
      icono: "clientes"
    }, {
      ruta: "tareas",
      nombre: "Tareas",
      icono: "calendario"
    }, {
      ruta: "cotizaciones",
      nombre: "Cotizaciones",
      icono: "cotizaciones"
    }, {
      ruta: "configuracion",
      nombre: "Configuración",
      icono: "configuracion"
    }, {
      ruta: "ayuda",
      nombre: "Ayuda",
      icono: "info"
    }];

    function V(f) {
      const E = f && f.logo ? e("img", {
        src: f.logo,
        alt: "",
        class: "negocio__logo"
      }) : s.avatar(f && f.nombre || "Mi negocio", "avatar--marca");
      return e("a", {
        class: "negocio",
        href: "#/configuracion",
        title: "Datos de tu negocio"
      }, E, e("span", {
        class: "negocio__texto"
      }, e("strong", null, f && f.nombre || "Mi negocio"), e("span", null, f && f.pais || "Configurar")), oe("abajo", "negocio__flecha"))
    }

    function F() {
      const f = u.estado.respaldo.ultimo,
        E = f ? -v.diasHasta(f) : null,
        p = u.tieneDatos() && (E == null || E >= 7);
      return e("div", {
        class: "respaldo" + (p ? " respaldo--pendiente" : "")
      }, e("div", {
        class: "respaldo__cabeza"
      }, oe(p ? "alerta" : "escudo"), e("strong", null, p ? "Haz un respaldo" : "Datos en este computador")), e("p", null, f ? "Último respaldo: " + (E === 0 ? "hoy" : E === 1 ? "ayer" : "hace " + E + " días") : "Aún no tienes respaldo."), e("button", {
        class: "respaldo__boton",
        type: "button",
        onclick: () => {
          u.respaldo(), s.aviso("Respaldo descargado. Guárdalo en otra parte.")
        }
      }, oe("descargar"), "Descargar respaldo"), p ? e("button", {
        class: "respaldo__pro",
        type: "button",
        onclick: () => ue.ofrecer("respaldo")
      }, "Respaldo automático en internet") : null)
    }

    function r() {
      const f = u.estado.leads.filter(E => u.ACTIVAS.includes(E.etapa)).length,
        m = u.tareasPendientes().filter(E => E.vence && E.vence <= v.hoy()).length;
      return e("aside", {
        class: "lateral"
      }, e("a", {
        class: "logo",
        href: "#/inicio"
      }, e("span", {
        class: "logo__marca"
      }, oe("documento")), e("span", null, "Propuestas")), V(u.estado.negocio), e("nav", {
        class: "menu",
        "aria-label": "Menú principal"
      }, H.map(E => e("a", {
        class: "menu__item",
        href: "#/" + E.ruta,
        "data-ruta": E.ruta
      }, oe(E.icono), e("span", null, E.nombre), E.ruta === "leads" && f ? e("span", {
        class: "menu__cuenta"
      }, f) : E.ruta === "tareas" && m ? e("span", {
        class: "menu__cuenta menu__cuenta--alerta"
      }, m) : null)), e("button", {
        class: "menu__item menu__item--pro",
        type: "button",
        onclick: () => ue.ofrecer("equipo")
      }, oe("clientes"), e("span", null, "Invitar a mi equipo"), oe("candado", "menu__candado"))), e("div", {
        class: "lateral__pie"
      }, F(), e("p", {
        class: "creditos"
      }, "Desarrollado por ", e("a", {
        href: "https://alvarocofre.dev",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "SICS"))))
    }

    function T() {
      const f = e("input", {
          id: "buscador",
          class: "buscador__input",
          type: "search",
          placeholder: "Buscar leads y clientes",
          autocomplete: "off",
          "aria-label": "Buscar",
          oninput: p => {
            const l = p.target.value;
            l.trim() ? history.replaceState(null, "", "#/buscar/" + encodeURIComponent(l)) : history.replaceState(null, "", "#/inicio"), s.dibujar(), p.target.focus()
          }
        }),
        {
          nombre: E,
          parametro: y
        } = s.actual();
      return E === "buscar" && (f.value = y), e("div", {
        class: "superior"
      }, e("label", {
        class: "buscador"
      }, oe("buscar"), f, e("kbd", null, "Ctrl K")), e("span", {
        class: "superior__estado"
      }, oe("candado"), "Tus datos se quedan en este computador"))
    }
    let A = !1;

    function P() {
      if (A) return;
      const f = v.vaciar(document.getElementById("app"));
      f.className = "marco", f.appendChild(r()), f.appendChild(e("div", {
        class: "principal"
      }, T(), e("main", {
        id: "contenido",
        class: "pagina"
      }))), s.dibujar()
    }

    function i(f, E, y) {
      const p = v.vaciar(document.getElementById("app"));
      p.className = "pantalla-completa", p.appendChild(e("div", {
        class: "pantalla"
      }, e("span", {
        class: "vacio__icono"
      }, oe("alerta")), e("h1", null, f), e("p", null, E), e("div", {
        class: "pantalla__acciones"
      }, y)))
    }

    function d() {
      if (!("BroadcastChannel" in window)) return;
      const f = new BroadcastChannel("crm-propuestas-comunidad");
      f.onmessage = E => {
        E.data === "abierto" && (u.bloquear(), A = !0, document.querySelectorAll("dialog").forEach(y => y.close()), i("El CRM está abierto en otra pestaña", "Para no mezclar cambios, trabaja en una sola. Si prefieres seguir en esta, aprieta el botón y la otra queda en pausa.", s.boton("Seguir en esta pestaña", {
          tipo: "primario",
          onclick: () => location.reload()
        })))
      }, f.postMessage("abierto")
    }

    function c() {
      console.log("%c¿Qué buscas por acá? 👀", "font-size:20px;color:#59B9C7;font-weight:bold"), console.log("%cNo hay WordPress, no hay template. Si llegaste hasta acá, escríbeme: alvarocofre.dev", "font-size:14px;color:#2B313F");
      const f = u.cargar();
      if (f.error === "sin-almacenamiento") return i("Este navegador no deja guardar datos", 'Abre el archivo "Abrir CRM" con Google Chrome o Microsoft Edge. Si ya estás en uno de ellos, revisa que no sea una ventana de incógnito.', null);
      if (f.error === "ilegible") return i("No pude leer tus datos", "No borré nada. Descarga lo que hay y mándaselo a quien te pasó el CRM para recuperarlo.", s.boton("Descargar mis datos", {
        icono: "descargar",
        tipo: "primario",
        onclick: () => v.descargar("datos-crm-sin-leer-" + v.hoy() + ".txt", f.crudo, "text/plain")
      }));
      if (f.error === "version") return i("Estos datos son de una versión más nueva", "No borré nada. Descarga una copia de tus datos y actualiza el CRM a la última versión antes de seguir trabajando en este navegador.", e("div", {
        class: "pagina__acciones"
      }, s.boton("Descargar mis datos", {
        icono: "descargar",
        tipo: "primario",
        onclick: () => v.descargar("datos-crm-version-" + (f.version || "nueva") + ".json", f.crudo, "application/json")
      }), s.boton("Recargar", {
        onclick: () => location.reload()
      })));
      d(), window.addEventListener("hashchange", s.dibujar), document.addEventListener("keydown", E => {
        if ((E.ctrlKey || E.metaKey) && E.key.toLowerCase() === "k") {
          E.preventDefault();
          const y = document.getElementById("buscador");
          y && y.focus()
        }
      }), u.alCambiar(() => {
        const E = document.querySelector(".lateral");
        E && E.replaceWith(r()), document.querySelectorAll(".menu__item").forEach(y => y.classList.toggle("menu__item--activo", y.dataset.ruta === s.actual().nombre))
      }), P(), u.estado.negocio || ke.bienvenida(), f.migrado && s.aviso("Tus datos se actualizaron al formato nuevo. No se borró nada."), ue.revisar()
    }
    return {
      iniciar: c,
      dibujarMarco: P
    }
  })();
  ve.iniciar();
})();
