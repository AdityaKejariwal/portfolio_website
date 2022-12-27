//Selecting DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
// const Switch = document.querySelector('.switch');
// const modeSwitcher = document.querySelector('#mode-switcher');

//Setting Initial state of menu

let showMenu = false, darkMode = false;

menuBtn.addEventListener('click',toggleMenu);

// Switch.addEventListener('click',switchMode);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Resetting menu state
        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Resetting menu state
        showMenu = false;
    }
}

// function switchMode() {
//     if(darkMode){
//         Switch.classList.remove('fa-sun');
//         Switch.classList.add('fa-moon');
//         modeSwitcher.classList.remove('toggle-mode-white');
//         modeSwitcher.classList.add('toggle-mode-dark');
//         darkMode = false;
//         console.log("DARK MODE IS ON.");
//     }
//     else{
//         Switch.classList.add('fa-sun');
//         Switch.classList.remove('fa-moon');
//         modeSwitcher.classList.remove('toggle-mode-dark');
//         modeSwitcher.classList.add('toggle-mode-white');
//         darkMode = true;
//         console.log("DARK MODE IS OFF.");    
//     }
// }