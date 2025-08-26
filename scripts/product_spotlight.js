const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');
const colors = document.querySelectorAll('.color-thumb');
const sizes = document.querySelectorAll('.size');
const priceEl = document.getElementById('price');

let currentColor = 'pink';
let currentAngle = 0;

const productPrices = {
    white: '$260',
    black: '$270',
    pink: '$280'
};

function updateMainImage() {
    const angleAlt = thumbnails[currentAngle].querySelector('img').alt.replace('View shoe from ', '');
    mainImage.src = `/src/assets/images/colors/${currentColor}/${angleAlt.split(' ')[0]}.jpg`;
    mainImage.alt = `${capitalize(currentColor)} Nike Air Max Plus, viewed from ${angleAlt}`;
    priceEl.textContent = productPrices[currentColor];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

thumbnails.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
        thumbnails.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-pressed', 'false');
        });
        thumb.classList.add('active');
        thumb.setAttribute('aria-pressed', 'true');
        currentAngle = idx;
        updateMainImage();
    });
});

colors.forEach(colorThumb => {
    colorThumb.addEventListener('click', () => {
        colors.forEach(c => {
            c.classList.remove('active');
            c.setAttribute('aria-pressed', 'false');
        });
        colorThumb.classList.add('active');
        colorThumb.setAttribute('aria-pressed', 'true');
        currentColor = colorThumb.getAttribute('aria-label').replace('Select color: ', '').toLowerCase();
        updateMainImage();
    });
});

sizes.forEach(size => {
    size.addEventListener('click', () => {
        sizes.forEach(s => {
            s.classList.remove('active');
            s.setAttribute('aria-pressed', 'false');
        });
        size.classList.add('active');
        size.setAttribute('aria-pressed', 'true');
    });
});

updateMainImage();
