import { conexionAPI } from "./api.js";

export default async function deleteProducto(id) {
    
    await conexionAPI.deleteProducto(id); 
}


