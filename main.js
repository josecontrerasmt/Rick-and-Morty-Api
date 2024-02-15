import cargarPersonajes from "./src/cargarPersonajes.js";
import fetchPersonajes from "./src/fetchPersonajes.js";
import './src/listenerCategorias.js';
import './src/buscarFiltros.js';
import './src/limpiarFiltros.js';
import './src/paginacion.js';
import './src/buscarPersonaje.js';
import './src/botonMore.js'
import './src/botonDesplazamiento.js'
const cargar=async()=>{
    const datos = await fetchPersonajes();
    cargarPersonajes(datos);
}
cargar();