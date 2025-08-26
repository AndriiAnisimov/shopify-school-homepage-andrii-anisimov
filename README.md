# 🚀 My Landing Site (Vite + Vanilla JS + SCSS + Partials)

A modular **landing page** built with [Vite](https://vitejs.dev/), using **HTML partials**, **modular JS**, **SCSS per section**, and **optimized images**.  

---

## 📂 Project Structure

```
shopify-school-homepage-andrii-anisimov/
├─ index.html
├─ package.json
├─ README.md
├─ vite.config.js
├─ partials/
│    ├─ faq.html
│    ├─ featured_collection.html
│    ├─ footer.html
│    ├─ header.html
│    ├─ hero_banner.html
│    ├─ modal.html
│    ├─ need_help.html
│    └─ product_spotlight.html
├─ scripts/
│    ├─ faq.js
│    ├─ footer.js
│    ├─ header.js
│    ├─ modal.js
│    ├─ need_help.js
│    └─ product_spotlight.js
├─ styles/
│    ├─ faq.scss
│    ├─ featured_collection.scss
│    ├─ footer.scss
│    ├─ global.scss
│    ├─ header.scss
│    ├─ hero_banner.scss
│    ├─ main.scss
│    ├─ mixins.scss
│    ├─ modal.scss
│    ├─ need_help.scss
│    ├─ product_spotlight.scss
│    ├─ reset.css
│    └─ variables.scss
├─ src/
│    └─ assets/
│         └─ images/
│              ├─ hero.jpg
│              ├─ modal.jpg
│              ├─ colors/ ...
│              ├─ featured_collection/ ...
│              ├─ icons/ ...
│              ├─ thumbnails/ ...
│              └─ title_icons/ ...
└─ dist/            ← generated after build
```

---

## ⚙️ Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
- Hot reload for HTML, JS, SCSS  
- Partial injection with `vite-plugin-html`

### 3. Build for production
```bash
npm run build
```
- Optimized HTML, CSS, JS, and images  
- All SCSS compiled into **one CSS file**  
- Images hashed for cache-busting  

### 4. Preview production build
```bash
npm run preview
```

---

## 🧩 How it Works

### Partials
- `partials/faq.html`, `partials/featured_collection.html`, ...  
- Each partial can include its **own JS and styles**.  
- Injected into `index.html` at build/dev time via **vite-plugin-html**.

Example:

**partials/faq.html**
```html
<section class="faq">
    <h2 class="faq-title">
        Frequently asked questions
    </h2>
    ...
    <script type="module" src="/scripts/faq.js"></script>
</section>
```

---

### Scripts
Each section has its own JS file:  

**scripts/faq.js**
```js
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
        const panel = accordion.nextElementSibling;

        panel.style.maxHeight = panel.style.maxHeight
            ? null
            : `${panel.scrollHeight}px`;
    });
});
```

---

### Styles
Each section has its own SCSS file.  
During build, Vite bundles **all SCSS → one minified CSS file**.

**styles/main.scss**
```scss
@use "./reset";
@use "./variables";
@use "./mixins";
@use "./global";
@use "./header";
@use "./hero_banner";
@use "./featured_collection";
@use "./faq";
@use "./product_spotlight";
@use "./need_help";
@use "./footer";
@use "./modal";
```

---

### Images
- Place images in `src/assets/images/` if you want them optimized & hashed.  


---

## ✅ Features
- Modular **HTML partials** with `vite-plugin-html`
- Separate **JS and SCSS per section**
- SCSS compiled into **one optimized CSS**
- Image optimization & hashing
- Fast dev server with hot reload
- SEO-friendly static output

---

## 📦 Scripts

- `npm run dev` → start dev server  
- `npm run build` → build for production  
- `npm run preview` → preview production build  

---

🔗 Built with ❤️ using **Vite + Vanilla JS + SCSS**  
