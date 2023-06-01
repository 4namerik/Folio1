const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const ul =document.querySelector('.login')

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
    ul.classList.toggle('slide');
});