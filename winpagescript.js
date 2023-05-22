//Menu

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuOverlay = document.querySelector('menuOverlay');

    if (navbar.classList.contains("active")) {
        navbar.classList.remove('active');
        menuOverlay.classList.remove('active')
    } else {
        navbar.classList.add('active');
        menuOverlay.classList.add('active');
    }
    

}