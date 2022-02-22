/*
    Menu Toggle and color change
 */


let menuToggle = document.querySelector('#toggle');
let navbar = document.querySelector('#navbar');
let mobilenav = document.querySelector('#mobilenav');
let mobilelinks = document.querySelectorAll('#mobilelinks a');
let mobilesocials = document.querySelectorAll('#mobilesocials a');
let burgermenu = document.querySelector('#toggle');
let menuactive = false;

menuToggle.addEventListener('click', toggleMenu);
mobilelinks[0].addEventListener('click', toggleMenu);
mobilelinks[1].addEventListener('click', toggleMenu);
mobilelinks[2].addEventListener('click', toggleMenu);
mobilelinks[3].addEventListener('click', toggleMenu);

mobilesocials[0].addEventListener('click', toggleMenu);

function toggleMenu() {
    navbar.classList.toggle('navbarToggle');
    mobilenav.classList.toggle('hidden');
    burgermenu.classList.toggle('burgermenuToggle')
    menuactive = !menuactive;
    console.log(mobilelinks)
}

window.onscroll = () => {
    if (window.scrollY > 100) {
        console.log("asd")
        navbar.classList.add('nav-filled')
    } else {
        navbar.classList.remove('nav-filled')
    }
};

/*
    Automatically closes the nav when switched from mobile to pc
 */
window.onresize = () => {
    if(window.innerWidth > 768 && menuactive) {
        toggleMenu();
    }
}
