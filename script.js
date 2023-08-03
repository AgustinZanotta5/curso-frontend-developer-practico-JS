const navEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggledesktopmenu);
console.log("js funcionando");
function toggledesktopmenu() {
    desktopmenu.classList.toggle ("inactive");
    console.log("function funcionando");

}
/* casi pierdo todo