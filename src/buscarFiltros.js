import cargarPersonajes from "./cargarPersonajes.js";
import fetchBusqueda from "./fetchBusqueda.js";

const buscadorCategoria = document.querySelector('#categoria__buscar');
const input = document.querySelector('#buscador__input');



buscadorCategoria.addEventListener('click',async(e)=>{
    e.preventDefault();
    const especie=document.querySelector('.grupo__especie .button--active')?.textContent || 'All';
    const estado=document.querySelector('.grupo__estado .button--active')?.textContent || 'All';
    const genero=document.querySelector('.grupo__genero .button--active')?.textContent || 'All';
    input.value='';
    // Modificando los atributos del contenedor 
    document.querySelector('.personajes__container').setAttribute('data-pagina',1);
    document.querySelector('.personajes__container').setAttribute('data-busqueda','filtros');
    
    document.querySelector('.boton--general').classList.remove('boton--open');
    document.querySelector('.categorias').classList.remove('categorias--open');

    
    
    try {
        document.getElementById('personajeTitulo').textContent=``;
        document.getElementById('personajeTituloCategoria').innerHTML='';

        document.querySelector('.todos__personajes').classList.add('all--active');

        document.querySelector('.personajes__container').innerHTML='<img src="imgs/portal.png" alt="Cargando..." class="portal">';

        const datos = await fetchBusqueda(1);
        cargarPersonajes(datos);
        // Categoria del personaje y limpiar
        if(!(especie==='All' && estado ==='All' && genero==='All')){
            document.getElementById('personajeTituloCategoria').innerHTML=`Species: ${especie}<br>Status: ${estado}<br>Gender: ${genero}`;
            document.querySelector('.todos__personajes').classList.remove('all--active');
        }
    } catch (error) {
        document.querySelector('.todos__personajes').classList.remove('all--active');
        console.log(error);
    }
});