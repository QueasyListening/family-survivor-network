let services = document.getElementsByClassName('services')[0];

services.addEventListener('click', () => {
    const list = document.getElementById('service-list');
    console.log(list.style.display);
    list.style.display === 'flex' ? list.style.display = 'none' : list.style.display = 'flex';
})