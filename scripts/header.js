const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-menu');

hamburger.addEventListener('click', () => {
    const isActive = menu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);

    if(isActive) {
        const firstLink = menu.querySelector('a');
        firstLink?.focus();
    }
});

document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
    }
});
