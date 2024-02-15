const contenedorEspecie = document.querySelector('.grupo__especie');
const contenedorEstado = document.querySelector('.grupo__estado');
const contenedorGenero = document.querySelector('.grupo__genero');

    contenedorEspecie.addEventListener('click',(e)=>{
        if(e.target.matches('button')){
            contenedorEspecie.querySelector('.button--active')?.classList.remove('button--active');
            e.target.classList.add('button--active');
        }
    });
    contenedorEstado.addEventListener('click',(e)=>{
        if(e.target.matches('button')){
            contenedorEstado.querySelector('.button--active')?.classList.remove('button--active');
            e.target.classList.add('button--active');
        }
    });
    contenedorGenero.addEventListener('click',(e)=>{
        if(e.target.matches('button')){
            contenedorGenero.querySelector('.button--active')?.classList.remove('button--active');
            e.target.classList.add('button--active');
        }
    });