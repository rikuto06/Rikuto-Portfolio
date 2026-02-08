import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogSchema } from './blog.config';
import { worksSchema } from './works.config';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/contents' }),
  schema: blogSchema,
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/works-contents' }),
  schema: worksSchema,
});

export const collections = { blog, works };
