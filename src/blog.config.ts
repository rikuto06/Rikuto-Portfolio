import { z } from 'astro:content';

export const blogSchema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

export type BlogFrontmatter = z.infer<typeof blogSchema>;
