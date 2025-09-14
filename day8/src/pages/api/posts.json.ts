// src/pages/api/posts.json.ts
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");
  const data = posts.map((p) => ({
    slug: p.slug,
    title: p.data.title,
    description: p.data.description,
  }));

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
