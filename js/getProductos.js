import { conexionAPI } from "./api.js";
import deleteProducto from "./deleteProducto.js"

const lista = document.querySelector('[data-lista]');

export default function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement('li');
    producto.className = "div__card";
    producto.innerHTML = ` <div class="div__card-container">
                            <div class="div__card-image">
                                <img src="${imagen}" class="img__card-img"/>
                            </div>
                            <div class="div__card-name">${nombre}</div>
                            <div class="div__card-info-bottom">
                                <div class="div__card-precio">$  ${precio}</div>
                                <div class="div__card-eliminar"><i class="fa fa-trash" aria-hidden="true" data-i="${id}"></i></div>
                            </div>
                        </div>`;

    return producto;
}

async function getProductos() {
    try {
        const listaAPI = await conexionAPI.getProductos();

        listaAPI.forEach(producto => {
            lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id));
        });

        const iconDeleteNodes = document.querySelectorAll('[data-i]');

        for(let i = 0; i < iconDeleteNodes.length; i++) {
            iconDeleteNodes[i].addEventListener('click', function() {
                const selectedIconValue = this.getAttribute('data-i');
                deleteProducto(selectedIconValue);
            });
        }
    }
    catch {
        lista.innerHTML = `<h2 class="mensaje-titulo">Ha ocurrido un problema con la conexión</h2>`
    }
}

getProductos();