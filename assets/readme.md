# Sitio web — Mai Estética (San Juan)

No pude abrir el Instagram directamente porque la red bloquea el acceso
automático a su contenido, así que el sitio quedó armado con una
identidad propia (nombre, logo de texto y paleta de color) coherente
con el rubro, pero **100% editable en minutos**. Todo lo que hay que
tocar está centralizado, no hace falta recorrer el HTML entero.

## Estructura del proyecto

```
estetica-web/
├── index.html                 → todo el contenido y las secciones
├── assets/
│   ├── css/style.css          → estilos (variables de marca al principio)
│   ├── js/
│   │   ├── nav.js             → menú móvil y header al hacer scroll
│   │   ├── reveal.js          → animación de aparición al scrollear
│   │   ├── testimonials.js    → carrusel de testimonios (desactivado hasta tener reseñas reales)
│   │   ├── booking.js         → arma el mensaje de WhatsApp del turno
│   │   └── main.js            → detalles generales (año del footer, etc.)
│   └── img/                   → poné acá las fotos/logo reales
└── README.md
```

## Qué reemplazar primero

1. **Colores**: abrí `assets/css/style.css`, bloque `:root` (arriba de
   todo). Cambiá los valores hexadecimales por los colores reales de
   la marca (podés sacarlos con cualquier "color picker" del logo).
2. **Logo**: hoy es texto ("MF" + "Estética"). Si tenés el logo en
   imagen, reemplazá el bloque `.logo` en `index.html` por un
   `<img src="assets/img/logo.png" alt="Mai Estética">`.
3. **Número de WhatsApp**: aparece en tres lugares — buscá
   `5492644587125` en `index.html` (botón flotante y sección de
   contacto) y en `assets/js/booking.js` (constante `WHATSAPP_NUMBER`).
4. **Dirección, horarios y mapa**: sección `#ubicacion` en
   `index.html`. Para el mapa, lo más simple es buscar la dirección en
   Google Maps → "Compartir" → "Insertar un mapa" y pegar esa URL en
   el `src` del `<iframe>`.
5. **Servicios reales y precios**: sección `#servicios`. Cada
   tratamiento es un bloque `<article class="service-card">`; podés
   sumar, borrar o editar los que necesites.
6. **Fotos**: agregá las imágenes reales en `assets/img/` y
   reemplazá los bloques `.hero__blob` y `.about__media` (hoy son
   fondos decorativos) por `<img>` reales.
7. **Testimonios**: sección `#testimonios`, con permiso de las
   clientas.

## Cómo verlo

Abrí `index.html` con doble clic, o mejor, con una extensión tipo
"Live Server" (VS Code) para que los cambios se vean al instante.

## Cómo publicarlo

Cualquier hosting estático funciona (Netlify, Vercel, GitHub Pages,
hosting tradicional). Solo hay que subir la carpeta `estetica-web`
completa, manteniendo la estructura de subcarpetas `assets/`.

## Ideas para más adelante (queda preparado para escalar)

- Reemplazar el formulario de turnos por una agenda real (Calendly,
  Booksy, o un backend propio) tocando solo `booking.js`.
- Sumar filtros por categoría en `#servicios` (ya cada tarjeta tiene
  un `data-category`, falta solo la interfaz de filtro).
- Conectar el bloque de Novedades a los últimos posts de Instagram
  vía su API oficial (hoy es contenido estático de ejemplo).
