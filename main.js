const $nav = document.querySelector("#hamburguer button")
const $navMenu = document.querySelector(".hamburger__menu")
$nav.addEventListener('click', e => {
    $nav.classList.toggle('open');
    $navMenu.classList.toggle('open-menu')
})