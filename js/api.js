async function getProductos() {
    const conexion = await fetch('http://localhost:3002/productos');
    
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function postProducto(nombre, precio, imagen) {
    const conexion = await fetch('http://localhost:3002/productos', {
         method: 'POST',
         headers: {
             "Content-type": "application/json"
         },
         body: JSON.stringify({
             nombre: nombre,
             precio: precio,
             imagen: imagen
         })
     });
 
     const conexionConvertida = conexion.json();  
     
     if(!conexion.ok) {
         throw new Error("Ha ocurrido un error al enviar el video.");
     }
 
     return conexionConvertida;
 }

 async function deleteProducto(id) {
    console.log(`http://localhost:3002/productos/${id}`);
    const conexion = await fetch(`http://localhost:3002/productos/${id}`, {
         method: 'DELETE',
         headers: {
             "Content-type": "application/json"
         }
     });

     const conexionConvertida = conexion.json();  
     
     if(!conexion.ok) {
         throw new Error("Ha ocurrido un error al enviar el video.");
     }
 
     return conexionConvertida;
 }

export const conexionAPI = {
    getProductos,
    postProducto,
    deleteProducto
}
