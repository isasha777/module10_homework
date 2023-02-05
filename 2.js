const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.j-btn-test');



btn.addEventListener('click', () => {
 window.alert("ширина экрана: " + window.innerWidth +" пикселей, высота экрана: " + window.innerHeight + " пикселей");
});