import { g as getCollection } from '../../chunks/_astro_content_OoMGA-6V.mjs';
export { renderers } from '../../renderers.mjs';

async function GET() {
  const posts = await getCollection("blog");
  const data = posts.map((p) => ({
    slug: p.slug,
    title: p.data.title,
    description: p.data.description
  }));
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
