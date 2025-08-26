const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const panel = document.getElementById(accordion.getAttribute('aria-controls'));
        const isOpen = accordion.getAttribute('aria-expanded') === 'true';

        accordion.setAttribute('aria-expanded', String(!isOpen));

        if (isOpen) {
            panel.hidden = true;
            panel.style.maxHeight = null;
        } else {
            panel.hidden = false;
            panel.style.maxHeight = `${panel.scrollHeight}px`;
        }

        accordion.classList.toggle('active');
    });
});
