import cargarPersonajes from "./cargarPersonajes.js";
import fetchBusqueda from "./fetchBusqueda.js";

const buscadorNombre = document.querySelector('#buscador__enviar');
const input = document.querySelector('#buscador__input');

buscadorNombre.addEventListener('click',async(e)=>{
    e.preventDefault();
    document.querySelector('.grupo__especie .button--active')?.classList.remove('button--active');
    document.querySelector('.grupo__estado .button--active')?.classList.remove('button--active');
    document.querySelector('.grupo__genero .button--active')?.classList.remove('button--active');
    // Modificando los atributos del contenedor 
    if(input.value!=''){
        document.querySelector('.personajes__container').setAttribute('data-pagina',1);
        document.querySelector('.personajes__container').setAttribute('data-busqueda','input');
        document.querySelector('.personajes__container').setAttribute('data-name',`${input.value}`);
        
        document.querySelector('.todos__personajes').classList.add('all--active');

        const nombre = input.value;

        try {
            document.getElementById('personajeTitulo').textContent=``;
            document.getElementById('personajeTituloCategoria').innerHTML='';

            document.querySelector('.personajes__container').innerHTML='<img src="imgs/portal.png" alt="Cargando..." class="portal">';
            const datos = await fetchBusqueda(1,nombre);
            cargarPersonajes(datos);

            // Nombre del personaje y limpiar
            document.querySelector('.todos__personajes').classList.remove('all--active');
            document.getElementById('personajeTitulo').textContent=`${datos.results[0].name}`;

        } catch (error) {
            document.getElementById('personajeTitulo').textContent=``;
            document.querySelector('.todos__personajes').classList.remove('all--active');
            console.log(error);
            return;
        }finally{
            input.value='';
        }
    }
});