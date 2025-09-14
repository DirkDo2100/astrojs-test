import { a as createComponent, r as renderHead, d as renderComponent, b as addAttribute, e as renderTemplate } from '../chunks/astro/server_BmAgNbLp.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BthXxtzZ.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1BH5gD } from '../chunks/hero_CSzegqYF.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_woY50bfE.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog", (p) => !p.data.draft)).sort(
    (a, b) => +b.data.date - +a.data.date
  );
  return renderTemplate`<html lang="vi"> <head><meta charset="utf-8"><title>Blog</title><meta name="description" content="Danh sách bài viết">${renderHead()}</head> <body> <main class="max-w-3xl mx-auto p-4"> <h1>Blog</h1> ${renderComponent($$result, "Image", $$Image, { "src": __ASTRO_IMAGE_IMPORT_Z1BH5gD, "alt": "\u1EA2nh hero", "widths": [320, 640, 960, 1280], "sizes": "(max-width: 640px) 100vw, 400px", "loading": "lazy", "decoding": "async" })} <p>Tổng số bài: ${posts.length}</p> <ul> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/blog/${post.slug}/`, "href")}>${post.data.title}</a> <small> — ${post.data.date.toDateString()}</small> <p>${post.data.description}</p> </li>`)} </ul> </main> </body></html>`;
}, "/home/dirk/DirkData/Astrojs/day8/src/pages/blog/index.astro", void 0);

const $$file = "/home/dirk/DirkData/Astrojs/day8/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
