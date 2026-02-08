import { z } from 'astro:content';

export const worksSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  image: z.string().optional(),
  url: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

export type WorksFrontmatter = z.infer<typeof worksSchema>;
