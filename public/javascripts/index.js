const hamburger = document.querySelector('hamburger-menu');
const navMenu = document.querySelector('mainNav');

hamburger.addEventListener('click', () => {
    navMenu.classList('hide');
});