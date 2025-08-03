const productos = [
  {
    nombre: 'Camiseta Deportiva',
    imagen: 'assets/img/camiseta.jpg',
    descripcion: 'Camiseta cómoda y transpirable, ideal para entrenamientos.',
    precio: '$19.99'
  },
  {
    nombre: 'Zapatillas Urbanas',
    imagen: 'assets/img/zapatillas.webp',
    descripcion: 'Zapatillas ligeras para uso diario con estilo moderno.',
    precio: '$49.99'
  },
  {
    nombre: 'Mochila Compacta',
    imagen: 'assets/img/mochila.jpg',
    descripcion: 'Mochila resistente con múltiples compartimentos.',
    precio: '$34.90'
  }
];

function mostrarProductos() {
  const contenedor = document.getElementById('product-list');
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'mdl-cell mdl-cell--4-col';

    card.innerHTML = `
      <div class="mdl-card mdl-shadow--2dp product-card">
        <div class="mdl-card__media">
          <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%">
        </div>
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">${producto.nombre}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          ${producto.descripcion}
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <span><strong>${producto.precio}</strong></span>
        </div>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

mostrarProductos();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('Service Worker registrado');
  });
}
