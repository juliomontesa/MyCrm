# Mi CRM

CRM local para gestionar leads, clientes, cotizaciones y propuestas. Funciona sin servidor ni cuenta: los datos se guardan en el navegador (`localStorage`) y no salen del computador.

## Funciones

- **Leads y clientes** con etapas, valores, seguimiento y acciones rápidas de WhatsApp, teléfono y correo.
- **Tareas y recordatorios** con fecha, prioridad y vínculo a un lead, cliente o cotización. Vista propia de tareas y tarjeta de "para hoy" en Inicio.
- **Cotizaciones y propuestas** con ítems, descuentos, impuestos y exportación a PDF.
- **Plantillas de propuesta** reutilizables.
- **Numeración configurable** (prefijo y próximo número) sin repetir números.
- **Historial de estados** de cada cotización y propuesta.
- **Historial/timeline** por lead y cliente: creación, cambios, tareas y eliminaciones.
- **Detección de duplicados** por nombre, correo, teléfono o ID tributario.
- **Respaldo y restauración** en JSON.
- **Migraciones con versionado** del esquema de datos, con respaldo automático antes de migrar.

## Cómo usarlo

1. Descarga o clona este repositorio.
2. Abre `Index.html` con Google Chrome o Microsoft Edge.
3. La primera vez se pide el nombre del negocio, el país y cómo se escriben los precios.

No necesita instalar nada ni conectarse a internet. Solo se usa internet para enviar el PDF por WhatsApp o correo, y para revisar si hay una versión nueva.

## Estructura

```
Index.html              Página de entrada
app/
  css/estilos.css       Estilos de toda la aplicación
  js/crm.js             Código de la aplicación (fuente editable)
  js/crm.min.js         Copia minificada de referencia
  vendor/               pdfmake y fuentes para generar PDF
```

## Datos y privacidad

- Todo se guarda en el navegador de tu computador.
- No hay cuentas, servidores ni scripts de terceros dentro del HTML.
- Para no perder datos, descarga un respaldo desde Configuración o desde el aviso de respaldo.

## Versión

2.0.0

## Créditos

Desarrollado por [SICS](https://alvarocofre.dev).
