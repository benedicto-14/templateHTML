const validarScroll = (numero) =>{
    let nav = document.querySelector('.navegacion').classList;
    if (numero > 35) {
        nav.add("nv-border");
    }else{
        nav.remove("nv-border");
    }
}

document.addEventListener('scroll',function () {
    validarScroll(window.pageYOffset); 
});