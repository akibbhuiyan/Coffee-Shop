let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search_form');
let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active')
}
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active')
}
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () => {
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
const list = document.querySelectorAll('#list');

function activelink() {
    list.forEach((item) =>
    item.classList.remove('menu-active'));
    item.classList.add('menu-active');
}
list.forEach((item) =>
    item.addEventListener('click',activelink));