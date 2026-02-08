import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogSchema } from './blog.config';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/contents' }),
  schema: blogSchema,
});

export const collections = { blog };
