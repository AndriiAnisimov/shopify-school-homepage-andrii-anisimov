import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';
import fs from 'fs';

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
            inject: {
                data: {
                    header: fs.readFileSync(path.resolve(__dirname, 'partials/header.html'), 'utf-8'),
                    hero_banner: fs.readFileSync(path.resolve(__dirname, 'partials/hero_banner.html'), 'utf-8'),
                    featured_collection: fs.readFileSync(path.resolve(__dirname, 'partials/featured_collection.html'), 'utf-8'),
                    faq: fs.readFileSync(path.resolve(__dirname, 'partials/faq.html'), 'utf-8'),
                    product_spotlight: fs.readFileSync(path.resolve(__dirname, 'partials/product_spotlight.html'), 'utf-8'),
                    need_help: fs.readFileSync(path.resolve(__dirname, 'partials/need_help.html'), 'utf-8'),
                    footer: fs.readFileSync(path.resolve(__dirname, 'partials/footer.html'), 'utf-8'),
                    modal: fs.readFileSync(path.resolve(__dirname, 'partials/modal.html'), 'utf-8'),
                },
            },
        }),
    ],
});
