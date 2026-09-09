import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://franthecaveman.github.io/portfolio/',
    base: '/portfolio/', 
    build: {
        assets: 'assets',
    },
});