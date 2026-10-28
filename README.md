# Actualización fotográfica — 28 de octubre de 2026

Se conserva la web en HTML, CSS y JavaScript vanilla, sin compilación ni despliegue. Las fotografías recibidas están en `img/`; no existe `imgs/` en este proyecto. Los siete JPG originales se conservan intactos.

## Revisión de las fotografías

| Original | Resolución | Contenido y selección |
| --- | --- | --- |
| 31.jpg | 1600 × 1200, horizontal | Fachada: seleccionada para la portada por mostrar la vivienda completa. |
| 32.jpg | 1200 × 1600, vertical | Acceso exterior con plantas: seleccionada, sin recortar. |
| 43.jpg | 1600 × 1200, horizontal | Salón: seleccionada como vista amplia del interior. |
| 42.jpg | 1600 × 1200, horizontal | Comedor y arco hacia cocina: seleccionada; no constituye una vista completa de la cocina. |
| 39.jpg | 1600 × 1200, horizontal | Otra vista del salón: descartada por sombras profundas y contraluz. |
| 125.jpg | 1600 × 1200, horizontal | Calle vista desde la vivienda: descartada para priorizar los espacios de la casa. |
| 81-1.jpg | 1600 × 1200, horizontal | Piscina y patio: no publicada al faltar confirmación de pertenencia y condiciones de uso. |

Las fotografías tienen resolución suficiente para el diseño. Los interiores presentan luz desigual y el acceso sombras marcadas; se mantienen su aspecto auténtico y sus proporciones, sin ampliación artificial. No se han identificado fotos de dormitorios ni baños.

## Integración y comprobaciones

Portada con fachada auténtica y galería de salón, acceso y comedor. WebP con calidad 84 y anchos de 640, 1200 y, cuando el original lo permite, 1600 px. Selección responsive mediante srcset, dimensiones explícitas, textos alternativos y carga diferida fuera de portada. Las imágenes se muestran completas; enlaces nativos permiten ampliarlas en otra pestaña con ratón, teclado o toque, sin visor personalizado.

Se mantienen cabecera, navegación, fuentes, colores, animación de portada, dirección, teléfono, enlaces y JavaScript original. La ilustración SVG se conserva como archivo, pero deja de mostrarse.

Chrome local: cuatro imágenes cargadas y destinos de enlaces internos existentes en 375, 768, 1440 y 1920 px, sin desbordamiento horizontal. Inspección visual de capturas a 375 y 1440 px. Emulación móvil a 375 px; no se ha probado en un iPhone físico. JavaScript original validado con node --check.

**Autorización de publicación:** el usuario confirma el 28 de octubre de 2026 que tiene autorización para publicar las fotografías aportadas. No se ha desplegado la web.

---

## Documentación histórica de la versión inicial

Los apartados siguientes describen la versión anterior a la integración fotográfica; sus referencias a la ilustración en portada y a la ausencia de galería han quedado sustituidas por la actualización anterior.

# Casa Sierra de Cádiz — CASA / 20

Landing estática independiente en HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server en VS Code. No necesita instalación, compilación ni servicios externos para mostrar el contenido. No se ha realizado ningún despliegue.

## Información y fuentes

Consulta realizada el 23 de octubre de 2026. Nombre, dirección y teléfono proceden del encargo: Casa Sierra de Cádiz, Calle Sierra de Cádiz, 20, 11670 El Bosque, Cádiz; 956 461 296.

Se contrastó la actividad de alojamiento rural con los resultados indexados de la web del propio establecimiento, que coinciden con el nombre, la calle y el teléfono:

- [Web del establecimiento: localización y entorno](https://sierradecadiz20.blogspot.com/p/localizacion-y-entorno.html). Publica Calle Sierra de Cádiz, 20 y 20A, El Bosque y 956 46 12 96. La apertura directa mediante la herramienta de consulta falló; se pudo consultar su contenido indexado.
- [Web del establecimiento: buhardilla](https://sierradecadiz20.blogspot.com/p/buhardilla.html). El contenido indexado identifica el establecimiento como alojamiento rural y reproduce el mismo teléfono y dirección.
- [Sensación Rural](https://www.sensacionrural.es/casas-rurales-en-cadiz/casa-sierra-de-cadiz_58806). Corrobora el nombre, la actividad rural y la dirección 20 y 20A.

Se ha usado únicamente la clasificación general de alojamiento rural. No se publican capacidad, equipamiento, tarifas, condiciones, horarios ni disponibilidad. Las fuentes difieren en algunos datos y no acreditan por sí solas su vigencia. Se mantiene el número 20 y el teléfono facilitados en el encargo; no se añaden otros contactos. Los datos estructurados emplean `LodgingBusiness`, sin estrellas, precios, coordenadas ni instalaciones.

Google Maps utiliza una búsqueda por la dirección literal, sin inventar coordenadas. Los botones Contactar van a `#contacto`; únicamente Llamar utiliza `tel:+34956461296`.

## Identidad y recursos

Composición CASA / 20 basada en planos de cal, sombras geométricas, carpintería granate y una placa numérica. Ilustración conceptual, sin pretender representar el edificio real. No se usan fotografías de otras casas ni imágenes generadas que se presenten como la propiedad.

- `img/casa-20.svg`: ilustración vectorial original creada específicamente para este proyecto. Fuente: elaboración propia; sin imágenes de terceros ni atribuciones externas requeridas. Se identifica expresamente en la web como ilustración ajena a la representación de la propiedad. Escalable, local y sin dependencias.
- `favicon.svg` e iconos SVG: dibujos originales del proyecto.
- Fraunces, fuente variable: [Google Fonts / Fraunces](https://github.com/google/fonts/tree/main/ofl/fraunces). Licencia SIL Open Font License 1.1, conservada en `css/OFL-Fraunces.txt`.
- Hanken Grotesk, fuente variable: [Google Fonts / Hanken Grotesk](https://github.com/google/fonts/tree/main/ofl/hankengrotesk). Licencia SIL Open Font License 1.1, conservada en `css/OFL-HankenGrotesk.txt`.

Fuentes alojadas localmente con `font-display: swap`. No hay peticiones a Google Fonts, cookies, analítica, mapas incrustados ni bibliotecas externas. Open Graph incluye título, descripción, tipo y locale; se omiten URL e imagen absolutas al no haberse facilitado un dominio público ni una fotografía autorizada.

## Comparación con proyectos disponibles

Se revisaron HTML y CSS de La Casita de El Bosque, La Casa del Muro, Casa Rural La Cascada, Manantial de los Cañitos, Isaac Phoenix, Realty Canoe, Ferretería Corrales y El Garaje de Elías. La comparación fue de código y estructuras, no de capturas de esas páginas.

Esta propuesta utiliza Fraunces y Hanken Grotesk, no las fuentes de esas referencias. Sustituye los héroes fotográficos, menús editoriales, navegación flotante y composiciones orgánicas por planos arquitectónicos rectangulares, navegación integrada en cabecera y un área conjunta de dirección y contacto. Botones con sombra desplazada y pictogramas propios; pie con datos agrupados y remate cromático horizontal. No contiene eslóganes, galerías, carruseles ni servicios inventados.

## Verificación

- `node --check js/script.js`: correcto.
- Chrome headless local: comprobación de la página en anchos 375, 768, 1440 y 1920 px; sin desbordamientos horizontales de elementos, fuentes cargadas y ninguna imagen rota.
- Inspección visual de capturas completas a 375 y 1440 px.
- Enlaces internos: todos sus destinos existen. Teléfono y búsqueda de Google Maps contrastados con el encargo. No se ha realizado una llamada ni verificado el punto que Google Maps devuelve.
- Copia: comprobadas la rama de éxito y la alternativa por permiso denegado con una API del portapapeles simulada en el navegador. No se afirma haber verificado el portapapeles del sistema. La alternativa muestra un campo de selección manual y recibe el foco.
- Sin excepciones JavaScript durante la sesión de navegador. `prefers-reduced-motion: reduce` desactiva la animación. Enlace para saltar al contenido, navegación nativa por enlaces y botones, foco visible, `aria-live` para copia y texto alternativo de la ilustración.
- Se han creado archivos exclusivamente para esta landing; los proyectos previos no se han editado. No hay configuración de Netlify ni herramientas de compilación.

El año del pie se actualiza con JavaScript; el HTML contiene 2026 como alternativa. Para probar la copia mediante la API real del navegador, usar Live Server en localhost; si el permiso se deniega, permanece disponible la selección manual.
