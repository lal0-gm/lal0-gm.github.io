function mostrar(){
    document.getElementById('nav').classList.toggle('mostrar');
}

document.getElementById('btn-menu').onclick = function () {
    mostrar();
};