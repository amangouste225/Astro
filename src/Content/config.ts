import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      publishDate: z.coerce.date().optional(),
      tools: z.array(z.string().optional()),
      img: z.string(),
      img_alt: z.string(),
    }),
  }),
};
