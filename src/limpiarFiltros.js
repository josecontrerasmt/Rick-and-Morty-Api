import cargarPersonajes from "./cargarPersonajes.js";
import fetchPersonajes from "./fetchPersonajes.js";

const limpiar = document.querySelectorAll('.button__reset');
const contenedorEspecie = document.querySelector('.grupo__especie');
const contenedorEstado = document.querySelector('.grupo__estado');
const contenedorGenero = document.querySelector('.grupo__genero');

limpiar.forEach(boton =>{
    boton.addEventListener('click', async(e)=>{
        e.preventDefault();
        contenedorEspecie.querySelector('.button--active')?.classList.remove('button--active');
        contenedorEstado.querySelector('.button--active')?.classList.remove('button--active');
        contenedorGenero.querySelector('.button--active')?.classList.remove('button--active');

        document.getElementById('personajeTitulo').textContent=``;
        document.getElementById('personajeTituloCategoria').textContent=``;

        document.querySelector('.personajes__container').setAttribute('data-pagina',1);
        document.querySelector('.personajes__container').setAttribute('data-busqueda','total');

        document.querySelector('.todos__personajes').classList.add('all--active');

        document.querySelector('.boton--general').classList.remove('boton--open');
        document.querySelector('.categorias').classList.remove('categorias--open');
        

        try {
            const datos = await fetchPersonajes();
            cargarPersonajes(datos);
        } catch (error) {
            console.log(error);
        }
    });
});