(function(){
    const STORAGE_KEY = 'promoBannerDismissed:v1';
    const backdrop = document.getElementById('promo-backdrop');
    const modal = document.getElementById('promo-modal');
    const closeBtn = document.getElementById('promo-close');
    const form = document.getElementById('promo-form');
    const emailInput = document.getElementById('promo-email');
    const errorEl = document.getElementById('promo-error');

    let lastFocusedEl = null;

    function openModal(){
        if(localStorage.getItem(STORAGE_KEY)) return;

        lastFocusedEl = document.activeElement;

        document.body.classList.add('modal-open');
        backdrop.classList.add('show');
        backdrop.setAttribute('aria-hidden', 'false');

        emailInput.focus();

        document.addEventListener('keydown', trapFocus);
    }

    function hideModal(persist=false){
        backdrop.classList.remove('show');
        document.body.classList.remove('modal-open');
        backdrop.setAttribute('aria-hidden', 'true');

        if(persist){ localStorage.setItem(STORAGE_KEY, '1'); }

        document.removeEventListener('keydown', trapFocus);

        if(lastFocusedEl) lastFocusedEl.focus();
    }

    function trapFocus(e){
        if(e.key !== 'Tab') return;

        const focusableSelectors = [
            'a[href]',
            'button:not([disabled])',
            'textarea:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
        ];
        const focusableEls = modal.querySelectorAll(focusableSelectors.join(','));
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if(e.shiftKey){
            if(document.activeElement === firstEl){
                e.preventDefault();
                lastEl.focus();
            }
        } else {
            if(document.activeElement === lastEl){
                e.preventDefault();
                firstEl.focus();
            }
        }
    }

    window.addEventListener('load', ()=> setTimeout(openModal,1000));

    closeBtn.addEventListener('click', ()=> hideModal(true));

    window.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape') hideModal(true);
    });

    backdrop.addEventListener('click', (e)=>{
        if(e.target === backdrop){
            hideModal(true);
        }
    });

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        errorEl.style.display = 'none';
        if(!emailInput.checkValidity()){
            errorEl.style.display = 'block';
            return;
        }
        hideModal(true);
        alert('Thank you!');
    });
})();
