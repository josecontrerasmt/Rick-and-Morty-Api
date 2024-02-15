
const contenedor = document.querySelector('.personajes__container');

const cargarPersonajes=(datos)=>{
    const personajes=datos.results;
    const paginaTotal = datos.info.pages;
    const paginaActual = document.querySelector('.personajes__container').dataset.pagina;

    document.getElementById('pagina').textContent=`Page: ${paginaActual}/${paginaTotal}`;
    contenedor.innerHTML='';
    personajes.forEach(personaje => {
        const plantilla=`
        <article class="personaje">
        <img src="${personaje.image}" alt="" class="imgPersonaje">
        <div class="personaje__info">
            <span class="nombre">${personaje.name}</span>
            <span class="especie">Species: ${personaje.species} </span>
            <span class="estado ${personaje.status}">${personaje.status}</span>
            <span class="genero">Gender: ${personaje.gender}</span>
            <span class="ubicacion">Location: ${personaje.location.name}</span>
        </div>
        </article>
        `;
        contenedor.innerHTML+=plantilla;
    });
}
export default cargarPersonajes;