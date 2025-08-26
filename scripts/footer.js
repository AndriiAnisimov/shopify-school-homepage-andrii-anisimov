if (window.innerWidth < 768) {
    document.querySelectorAll('.footer-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            const targetId = btn.getAttribute('aria-controls');
            const target = document.getElementById(targetId);

            btn.setAttribute('aria-expanded', String(!expanded));

            if (expanded) {
                target.hidden = true;
            } else {
                target.hidden = false;
            }
        });
    });
} else {
    document.querySelectorAll('.footer-links').forEach(list => {
        list.hidden = false;
    });
    document.querySelectorAll('.footer-toggle').forEach(btn => {
        btn.setAttribute('aria-expanded', 'true');
    });
}
