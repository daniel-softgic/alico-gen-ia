# Manual de uso · GEN IA Alico

## 0. ¿Qué necesito para que funcione?
| Servicio | ¿Obligatorio? | Para qué | Costo |
|---|---|---|---|
| **GitHub (Pages)** | Sí, para tener un link web | Aloja el código. Es solo una vitrina: **no guarda datos** | Gratis |
| **Clave de IA (Anthropic)** | Para la IA real | Triage, respuestas, preguntas a datos. Sin ella funciona en «modo básico» | Pago por uso (centavos por sesión) |
| **Google Apps Script + Sheets + Drive** | Para guardar datos de todos los equipos y que el celular del cliente llegue al PC | Registro de eventos, reclamos, preguntas, modelo de visión, documentos | Gratis (cuenta Google) |
| Epicor, CRM, WhatsApp/B2Chat | No en el taller | Hoy son simulados; se conectan en un proyecto real | — |

Sin nube ni clave el portal abre y se puede presentar, pero los datos quedan solo en ese navegador y la IA es básica.

## 1. Montaje (una sola vez, ~30 min)
**A. Publicar en GitHub**
1. github.com → New repository (ej. `alico-planta`), público o privado con Pages habilitado.
2. Sube todo el contenido de la carpeta (el `index.html` en la raíz).
3. Settings → Pages → Branch `main` / root → Save. En 1–2 min tienes `https://TU-USUARIO.github.io/alico-planta/`.

**B. Crear la nube (Google)**
1. Crea una hoja de cálculo vacía → Extensiones → Apps Script.
2. Pega el contenido de `apps-script/Code.gs`. Cambia `SECRET` por una clave tuya.
3. Ejecuta la función `autorizar` y acepta permisos (Hojas y Drive).
4. Implementar → Nueva implementación → Aplicación web → Ejecutar como «Yo» · Acceso «Cualquier usuario» → copia la URL que termina en `/exec`.
5. En Drive aparecerá la carpeta `Alico-Taller-IA` con `Modelos` y `Conocimiento`.

> Si ya tenías el Apps Script instalado: pega el `Code.gs` nuevo (trae el permiso del portal del cliente) y en Implementar → Administrar implementaciones → editar → **Nueva versión**. La URL `/exec` no cambia.

**C. Clave de IA**
console.anthropic.com → API Keys → crea una clave **con límite de gasto** (ej. USD 10). Bórrala al terminar el taller.

**D. Conectar el portal (en el PC del taller)**
Abre el link de GitHub → **Ajustes** → pega: nombre de sesión, clave de IA, URL `/exec` y clave de la nube → «Probar IA» y «Probar nube» deben salir ✅ → Guardar. Los ajustes quedan solo en ese navegador; repite en cada equipo (el celular del cliente no necesita nada).

## 2. Antes del taller (checklist)
- PC con Chrome o Edge, conectado al TV, pantalla completa (F11), micrófono permitido.
- Chips arriba en verde: «IA conectada» y «Nube conectada».
- Pon un nombre de sesión por grupo (ej. «Grupo 2 · 10:00»): así cada registro queda identificado.
- Cámara conectada y probada para el caso 1.
- Sube a Drive/Conocimiento 2–3 documentos reales de Alico (manual de selladora, ficha de producto) para el caso 3.

## 3. Cómo se usa cada pieza
**Portada:** las líneas muestran de qué área sale cada dato de cada caso (botón «🔌 Datos» las oculta). Al pasar sobre un edificio se resaltan sus fuentes. Los mensajes de clientes llegan volando al caso 4. «🔊 Bienvenida» y «▶ Recorrido con voz» narran todo. Teclas 1–5 entran a cada caso.

**Todos los casos:** botón «🔊 Escuchar» arriba narra de qué trata el caso.

**1 · Inspección visual** (operarios, supervisores, Calidad)
1. Arriba elige línea, producto (catálogo real), operario; el lote y la OP se generan solos.
2. «Activar cámara» → «Enseñar a la IA»: captura el fondo vacío (B) y luego 2–3 piezas buenas (C). Opcional: defectos conocidos (D) eligiendo el tipo de la lista.
3. Acerca una pieza: círculo verde = pasa y suma al contador; círculo rojo = se retira, suena, lo dice en voz alta y crea el informe. Tres rechazos del mismo lote en 10 min ponen el lote en observación.
4. «📄 Informe»: trazabilidad completa, causas probables (6M) y botones hacia conocimiento técnico, torre de control, centro del cliente y Maestro. Con clave de IA, «Analizar la foto» y la clasificación automática de anomalías.
5. «📊 Informes de calidad» (o «↗ en otra pestaña»): % defecto por día y línea, Pareto, causas 6M, por turno y operario, costo de no calidad y tabla de trazabilidad. Se actualizan solos mientras la línea corre.
- Sin cámara: «Modo simulación» → «▶ Línea automática» pasa piezas buenas y malas.

**2 · Maestro** (operarios): toca la imagen del problema o el micrófono. «Panel de la planta» trae 2 años de historia de ejemplo (24 meses, temporada alta, hallazgos) más lo que registren hoy.

**3 · Agente de conocimiento técnico** (técnicos, ingeniería, Calidad)
- Nivel 1: responde con la fuente de la base de Alico. «👎 No resolvió» pasa al nivel 2.
- Nivel 2: investiga en la web con citas (necesita la clave de IA y que la organización tenga habilitada la búsqueda web en console.anthropic.com; si no, usa conocimiento general y fuentes de referencia).
- Nivel 3: «Escalar al especialista» sugiere fabricante, proveedor, laboratorio o especialista interno.
- Nivel 4: al resolver un ticket o «🌱 Guardar en la base», el agente lo aprende. Las lecciones que llegan de la visión artificial también entran aquí.

**4 · Centro de inteligencia del cliente**
- «Cliente · Portal»: QR grande para que cada participante reporte un caso real desde su celular, con foto.
- El reclamo llega a la bandeja en segundos, con aviso sonoro y triage automático.
- Canal del celular: si la nube (Apps Script) está conectada, va a Google Sheets; si no, usa un relevo público sin configuración (ntfy.sh) para que funcione el día del taller. No pidas datos sensibles por este canal.

**5 · Torre de control**: «🩺 Diagnóstico» da la salud de la compañía y de 9 áreas; toca un área para ir al detalle. Cada gráfico tiene íconos para cambiar a líneas, área, barras, torta, dona o tabla. «Pregúntale a tus datos» acepta voz.

## 4. Qué datos capta y dónde quedan (Google Sheets)
Eventos (uso y defectos) · Reclamos · Preguntas (caso 3 y 5) · Escalados · Turnos y Casos (Maestro). Drive/Modelos: modelo de visión y fotos de reclamos. Todo etiquetado con el nombre de sesión.

## 5. Pruebas reales: qué es real y qué no
- **Real:** IA, cámara/visión, voz, portal del cliente, flujo de reclamos, guardado en Sheets/Drive, documentos propios.
- **Simulado (EJEMPLO):** Epicor/CRM/WhatsApp, clientes, ventas, inventario, base técnica inicial.
- **Para pruebas con datos de Alico:** sube documentos reales (caso 3), un CSV de ventas (caso 5) y deja que el equipo cree reclamos reales de prueba (caso 4).

## 6. Si algo falla
| Síntoma | Solución |
|---|---|
| Chip «IA modo básico» | Falta la clave en Ajustes de ese equipo |
| «Solo este equipo» | Falta URL/clave de nube; reimplementa Apps Script y copia la URL `/exec` |
| «Nube: auth» | La clave de Ajustes no coincide con `SECRET` |
| El celular no aparece en la bandeja | Nube desconectada o espera ~10 s; el PC consulta cada 8 s |
| Micrófono no responde | Usar Chrome/Edge y permitir el micrófono |
| Cámara no abre | Usar el link https de GitHub y permitir cámara |

## 7. Seguridad y datos personales
- La clave de IA vive en el navegador: úsala con límite de gasto y bórrala al terminar.
- Para un uso productivo la clave debe ir en un servidor (no en el navegador): se hace en el proyecto real.
- El portal del cliente pide consentimiento; revisa el texto con jurídico. No subas datos personales reales al demo sin autorización.
