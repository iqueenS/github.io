document.getElementById('year').textContent = new Date().getFullYear();
const burger = document.getElementById('burger');
const nav = document.getElementById('navlinks');
burger.addEventListener('click',()=> nav.classList.toggle('open'));