import { z } from 'astro:content';

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
});

export type BlogFrontmatter = z.infer<typeof blogSchema>;
