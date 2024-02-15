
const fetchPersonajes= async(pagina=1)=>{
    try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&`);
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
        console.log(error);
        return;
    }
}
export default fetchPersonajes;