const button = document.getElementById('mobile-btn')


const menu = document.getElementById('menu')


const closeMenu = document.querySelectorAll('.close-menu');


let count = 0;



closeMenu.forEach(closeMenu => {

    closeMenu.addEventListener('click', () => {

        menu.style.display = 'none'
    });
});






button.addEventListener('click', () => {


    count++;


    if (count == 1) {
        menu.style.display = 'flex';
    }
    if (count > 1) {
        menu.style.display = 'none';
        count = 0;
    }
});