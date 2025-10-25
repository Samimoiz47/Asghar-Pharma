import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    server: {
        host: true,
        allowedHosts: true,
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx', 'resources/js/medicine.jsx', 'resources/js/about.jsx', 'resources/js/contact.jsx', 'resources/css/TextType.css', 'resources/css/GooeyNav.css', 'resources/css/MagicBento.css', 'resources/css/Loader.css'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
});
