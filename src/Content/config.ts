import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const worksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  works: worksCollection,
};
