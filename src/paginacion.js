import cargarPersonajes from "./cargarPersonajes.js";
import fetchBusqueda from "./fetchBusqueda.js";
import fetchPersonajes from "./fetchPersonajes.js";

const izquierda = document.querySelector('.izquierda');
const derecha = document.querySelector('.derecha');

derecha.addEventListener('click',async(e)=>{
    e.preventDefault();
    const paginaActual = document.querySelector('.personajes__container').dataset.pagina;
    const paginaBuscar = document.querySelector('.personajes__container').dataset.busqueda;
    let paginaSiguiente = parseInt(paginaActual)+1;

    const personajeNombre = document.querySelector('.personajes__container')?.dataset.name;

    document.querySelector('.personajes__container').innerHTML='<img src="imgs/portal.png" alt="Cargando..." class="portal">';

    if(paginaBuscar==='total'){
        try {
            const datos=await fetchPersonajes(parseInt(paginaActual));
            if(datos.info.next!=null){
                const datosSiguientes=await fetchPersonajes(paginaSiguiente);
                document.querySelector('.personajes__container').setAttribute('data-pagina',paginaSiguiente);
                cargarPersonajes(datosSiguientes);
            }else{
                paginaSiguiente=1;
                document.querySelector('.personajes__container').setAttribute('data-pagina',paginaSiguiente);
                const datosUltimos=await fetchPersonajes(paginaSiguiente);
                cargarPersonajes(datosUltimos);
            }
        } catch (e) {
            console.log(e);
        }
    }
    if(paginaBuscar==='filtros'){
        try {
            const datos=await fetchBusqueda(parseInt(paginaActual));
            if(datos.info.next!=null){
                const datosSiguientes=await fetchBusqueda(paginaSiguiente);
                document.querySelector('.personajes__container').setAttribute('data-pagina',paginaSiguiente);
                cargarPersonajes(datosSiguientes);
            }else{
                paginaSiguiente=1;
                document.querySelector('.personajes__container').setAttribute('data-pagina',paginaSiguiente);
                const datosUltimos=await fetchBusqueda(paginaSiguiente);
                cargarPersonajes(datosUltimos);
            }
        } catch (e) {
            console.log(e);
        }
    }
    if(paginaBuscar==='input'){
        try {
            const datos=await fetchBusqueda(parseInt(paginaActual),personajeNombre);
            if(datos.info.next!=null){
                const datosSiguientes=await fetchBusqueda(paginaSiguiente,personajeNombre);
                document.querySelector('.personajes__container').setAttribute('data-pagina',paginaSiguiente);
                cargarPersonajes(datosSiguientes);
            }else{
                paginaSiguiente=1;
                document.querySelector('.personajes__container').setAttribute('data-pagina',paginaSiguiente);
                const datosUltimos=await fetchBusqueda(paginaSiguiente,personajeNombre);
                cargarPersonajes(datosUltimos);
            }
        } catch (e) {
            console.log(e);
        }
    }
});
izquierda.addEventListener('click',async(e)=>{
    e.preventDefault();
    window.scrollTo(0,0);
    const paginaActual = document.querySelector('.personajes__container').dataset.pagina;
    // cambiar a tipo de pagina 
    const paginaBuscar = document.querySelector('.personajes__container').dataset.busqueda;
    let paginaAnterior = parseInt(paginaActual)-1;
    const personajeNombre = document.querySelector('.personajes__container')?.dataset.name;

    document.querySelector('.personajes__container').innerHTML='<img src="imgs/portal.png" alt="Cargando..." class="portal">';

    if(paginaBuscar==='total'){
        try {
            const datos=await fetchPersonajes(parseInt(paginaActual));

            if(datos.info.prev!=null){
                const datosAnteriores=await fetchPersonajes(paginaAnterior);
                document.querySelector('.personajes__container').setAttribute('data-pagina',paginaAnterior);
                cargarPersonajes(datosAnteriores);
            }else{
                paginaAnterior=datos.info.pages;
                document.querySelector('.personajes__container').setAttribute('data-pagina',`${paginaAnterior}`);
                const datosUltimos=await fetchPersonajes(paginaAnterior);
                cargarPersonajes(datosUltimos);
            }
        } catch (e) {
            console.log(e);
        }
    }
    if(paginaBuscar==='filtros'){
        try {
            const datos=await fetchBusqueda(parseInt(paginaActual));

            if(datos.info.prev!=null){
                const datosAnteriores=await fetchBusqueda(paginaAnterior);
                document.querySelector('.personajes__container').setAttribute('data-pagina',paginaAnterior);
                cargarPersonajes(datosAnteriores);
            }else{
                paginaAnterior=datos.info.pages;
                document.querySelector('.personajes__container').setAttribute('data-pagina',`${paginaAnterior}`);
                const datosUltimos=await fetchBusqueda(paginaAnterior);
                cargarPersonajes(datosUltimos);
            }
        } catch (e) {
            console.log(e);
        }
    }
    if(paginaBuscar==='input'){
        try {
            const datos=await fetchBusqueda(parseInt(paginaActual),personajeNombre);
            console.log(datos);
            if(datos.info.prev!=null){
                const datosAnteriores=await fetchBusqueda(paginaAnterior,personajeNombre);
                document.querySelector('.personajes__container').setAttribute('data-pagina',paginaAnterior);
                cargarPersonajes(datosAnteriores);
            }else{
                paginaAnterior=datos.info.pages;
                document.querySelector('.personajes__container').setAttribute('data-pagina',`${paginaAnterior}`);
                const datosUltimos=await fetchBusqueda(paginaAnterior,personajeNombre);
                cargarPersonajes(datosUltimos);
            }
        } catch (e) {
            console.log(e);
        }
    }
});
