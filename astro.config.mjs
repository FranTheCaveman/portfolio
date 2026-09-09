import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['nofollow'] }]
    ],
  },
});