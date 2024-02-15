
const fetchBusqueda= async(pagina=1,nombre='')=>{
    const especie=document.querySelector('.grupo__especie .button--active')?.id || '';
    const estado=document.querySelector('.grupo__estado .button--active')?.id || '';
    const genero=document.querySelector('.grupo__genero .button--active')?.id || '';
    try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${nombre}&species=${especie}&status=${estado}&gender=${genero}`);
        if(respuesta.ok){
            const datos = await respuesta.json();
            return datos;
        }else{
            document.querySelector('.personajes__container').innerHTML=`
            <div class="sinPersonajes-Container">
                <h2>No characters found</h2>
                <img src="imgs/sinPersonajes.png" alt="Sin personajes" class="sinPersonajes__img">
            </div>
            `;
            throw new Error('No characters found');
        }
    } catch (e) {
        console.log(e);
    }
}
export default fetchBusqueda;