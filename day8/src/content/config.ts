import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(), // chấp nhận "YYYY-MM-DD"
      draft: z.boolean().default(false),
      heroImage: image().optional(), // ảnh minh họa
      tags: z.array(z.string()).optional(), // thẻ
      category: z.string().optional(), // danh mục
    }),
});

export const collections = { blog };
