import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import { unified } from '@astrojs/markdown-remark';

export default defineConfig({
    site: 'https://franthecaveman.github.io/portfolio/',
    base: '/portfolio/', 
    build: {
        assets: 'assets',
    },
    markdown: {
        processor: unified({
        rehypePlugins: [
            [
            rehypeExternalLinks,
            { 
                target: '_blank', 
                rel: ['noopener', 'noreferrer'] 
            }
            ]
        ]
        })
    }
});