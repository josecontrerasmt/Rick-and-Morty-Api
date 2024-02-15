const botonMore = document.querySelector('.boton--general');

botonMore.addEventListener('click',(e)=>{
    e.preventDefault();
    const boton = e.target.closest('button');
    boton.classList.toggle('boton--open');
    document.querySelector('.categorias').classList.toggle('categorias--open');
});
