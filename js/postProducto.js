import { conexionAPI } from "./api.js";

const form = document.querySelector('[data-formulario]');

async function postProducto(evento) {

    //evento.preventDefault();

    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    await conexionAPI.postProducto(nombre, precio, imagen); 
}

form.addEventListener('submit', evento => postProducto(evento));