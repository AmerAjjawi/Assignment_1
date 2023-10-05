const menuIcon = document.querySelector('menu-icon');
const navMenu = document.querySelector('nav-menu-hide');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
});