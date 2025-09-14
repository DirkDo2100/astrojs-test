import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, d as renderComponent, e as renderTemplate } from '../../chunks/astro/server_BmAgNbLp.mjs';
import 'kleur/colors';
import { a as getEntryBySlug, g as getCollection } from '../../chunks/_astro_content_BthXxtzZ.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_woY50bfE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astrojs-test-orpin.vercel.app");
async function getStaticPaths() {
  const posts = await getCollection("blog", (p) => !p.data.draft);
  return posts.map((p) => ({ params: { slug: p.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getEntryBySlug("blog", slug);
  if (!post) throw new Error("Post not found");
  const { Content } = await post.render();
  const title = post.data.title;
  const description = post.data.description;
  const canonical = new URL(Astro2.url.pathname, Astro2.site).toString();
  const absoluteImageUrl = new URL("/favicon.svg", Astro2.site).toString();
  const hero = post.data.heroImage;
  return renderTemplate`<html lang="vi"> <head><meta charset="utf-8"><link rel="canonical"${addAttribute(canonical, "href")}><!-- OG --><meta property="og:type" content="article"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(absoluteImageUrl, "content")}><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(absoluteImageUrl, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body> <article class="prose mx-auto p-4"> <h1>${title}</h1> <p><em>${post.data.date.toDateString()}</em></p> ${hero && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": hero, "alt": post.data.title, "widths": [400, 800, 1200], "sizes": "(max-width: 800px) 100vw, 800px", "loading": "lazy" })}`} ${renderComponent($$result, "Content", Content, {})} </article> </body></html>`;
}, "/home/dirk/DirkData/Astrojs/day8/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/dirk/DirkData/Astrojs/day8/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
