import { c as createAstro, a as createComponent, r as renderHead, e as renderTemplate } from '../chunks/astro/server_BmAgNbLp.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrojs-test-orpin.vercel.app");
const prerender = false;
const $$Ssg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ssg;
  const res = await fetch(new URL("/api/time.json", Astro2.url), {
    cache: "no-store"
  });
  const { now } = await res.json();
  return renderTemplate`<html lang="vi"> <head><meta charset="utf-8"><title>SSR Demo</title>${renderHead()}</head> <body class="max-w-prose mx-auto p-6"> <h1>SSR Page</h1> <p>Thời gian server trả về: <strong>${now}</strong></p> <p>Reload trang sẽ thấy giá trị thay đổi (đang SSR).</p> <a href="/api/time.json">Xem JSON trực tiếp</a> </body></html>`;
}, "/home/dirk/DirkData/Astrojs/day8/src/pages/ssg.astro", void 0);

const $$file = "/home/dirk/DirkData/Astrojs/day8/src/pages/ssg.astro";
const $$url = "/ssg";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ssg,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
