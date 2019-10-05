let services = document.getElementsByClassName('services')[0];
let servicesList = document.getElementById('service-list');
let header = document.querySelector('header');

// services.addEventListener('mouseover', () => {
//     servicesList.style.display = 'flex';
// });

// servicesList.addEventListener('mouseleave', () => {
//     servicesList.style.display = 'none';
// });

// header.addEventListener('mouseover', () => {
//     servicesList.style.display = 'none';
// });

// Set the order of the cards in the header --- NEEDS REFACTORING
let cards = Array.from(document.querySelectorAll('header .card'));
cards.forEach((card, i) => {
    card.style.order = i;
});
if (window.innerWidth < 621) {
    cards.forEach((card, i) => {
        if (i === 2)
            card.style.order = 3;
        else if (i === 3)
            card.style.order = 2;
    });
} else {
    cards.forEach((card, i) => {
        card.style.order = i;
    });
}
window.addEventListener('resize', () => {
    if (window.innerWidth < 621) {
        cards.forEach((card, i) => {
            if (i === 2)
                card.style.order = 3;
            else if (i === 3)
                card.style.order = 2;
        });
    } else {
        cards.forEach((card, i) => {
            card.style.order = i;
        });
    }
});

// hamburger button and drop down menu for small screens
document.querySelector('.hamburger-btn').onclick = handleHamburgerClick;
let menuIsOpen = false;
function handleHamburgerClick() {
    if (menuIsOpen){
        closeMenu();    
    } else {
        document.querySelector('nav').style.height = '325px';
        document.querySelector('nav').style.opacity = 1;
        document.querySelector('nav .main-links').style.height = '290px';
        document.querySelector('nav .main-links').style.opacity = 1;
        document.querySelectorAll('nav .main-links li').forEach(item => {
          item.style.height = '70px';  
        })
        menuIsOpen = true;
    }
}

function closeMenu() {
    if (window.innerWidth < 685) {
        document.querySelector('nav').style.height = '75px';
        document.querySelector('nav .main-links').style.height = '0px';
        document.querySelector('nav .main-links').style.opacity = 0;
        document.querySelectorAll('nav .main-links li').forEach(item => {
            item.style.height = '0px';
        });
        menuIsOpen = false;  
    }
}