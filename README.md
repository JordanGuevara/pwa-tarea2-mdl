# PWA Boilerplate con Material Design Lite

Este proyecto realizado es una plantilla inicial para crear Progressive Web Apps (PWAs) con Material Design Lite. Incluye herramientas de desarrollo modernas, recarga en vivo y control de calidad de código.

## Scripts usados
- `npm install --save-dev live-server` → Instalación live-server como dependencia de desarrollo.
- `npm run dev` → Inicia un servidor local con recarga en vivo (`live-server`).
- `npm run lint` → Ejecuta ESLint sobre el código para encontrar errores.
- `npm run format` → Formatea automáticamente el código con Prettier.
- `npm run serve` → Simula un entorno de producción usando `http-server`.

## Estructura de Carpetas

- `index.html` → Página principal con MDL.
- `manifest.json` → Configuración de PWA.
- `sw.js` → Service Worker básico.
- `assets/(img-icons)` → Iconos e imágenes.
- `css/` → Archivo CSS para la plantilla.
- `js/` → Archivos JS para los productos.

## Funcionalidades principales del sistema de productos

La plantilla incluye un sistema básico para mostrar productos con imágenes, utilizando HTML, CSS y JavaScript de forma modular y extensible.

### `index.html`
- Contiene la **estructura principal** de la interfaz.
- Utiliza componentes de **Material Design Lite (MDL)** para tarjetas de productos (`mdl-card`).
- Integra una **galería de productos** renderizada dinámicamente.

### `css/app.css`
- Define los estilos personalizados para mejorar la presentación de los productos.
- Controla el diseño de las tarjetas, el espaciado, tamaños de imagen y la responsividad.
- Aplica sombras, bordes y alineación a las tarjetas de producto.

### `js/app.js`
Contiene la lógica principal del sistema de productos:
- Define un arreglo `productos` con objetos que incluyen `nombre`, `descripcion`, `precio`, `imagen`.
- Usa `JavaScript puro` para:
  - Recorrer el arreglo de productos.
  - Crear dinámicamente tarjetas (`div`) por cada producto.
  - Insertarlas en el contenedor `product-container` del DOM.
- Permite agregar productos fácilmente desde el código sin modificar el HTML manualmente.

## Comandos para clonar dicho repositorio

```bash
git clone https://github.com/JordanGuevara/pwa-tarea2-mdl.git
cd pwa-tarea2-mdl
npm install
npm run dev
```

## Imagenes de demostración

[![Ver demo](https://img.shields.io/badge/ver-demo-0d47a1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://jordanguevara.github.io/pwa-tarea2-mdl/)

