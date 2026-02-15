import { z } from 'astro:content';
import type { SchemaContext } from 'astro:content';

export const worksSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: image().optional(),
    url: z.string().optional(),
    tags: z.array(z.string()).default([]),
    kind: z.string(),
  });
