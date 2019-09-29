let services = document.getElementsByClassName('services')[0];
let servicesList = document.getElementById('service-list');
let header = document.querySelector('header');

services.addEventListener('mouseover', () => {
    servicesList.style.display = 'flex';
});

servicesList.addEventListener('mouseleave', () => {
    servicesList.style.display = 'none';
});

header.addEventListener('mouseover', () => {
    servicesList.style.display = 'none';
});