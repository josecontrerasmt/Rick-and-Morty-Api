
const botonDesplazar = document.querySelector('.boton--abajo');

botonDesplazar.addEventListener('click', (e)=>{
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});