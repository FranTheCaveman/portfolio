import { defineCollection} from 'astro:content';
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';

// Projects
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    description: z.string(),
    sources: z.array(
        z.object({
            label: z.string(),
            url: z.string(),
        })
    ).optional(),
    tags: z.array(z.string()).optional(), 
    type: z.string().optional(),
    slug: z.string(),
    videos: z.array(z.string()).optional(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
      })
    ).optional(),
    slides: z.array(z.string()).optional(),
  }),
});

// Export both collections 
export const collections = { projects };
