import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_BmAgNbLp.mjs';
import 'kleur/colors';
import { N as Note } from '../chunks/Counter_DA167fn5.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function Loaddata() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/api/posts.json").then((r) => r.json()).then((data) => setPosts(data)).catch(() => setPosts([]));
  }, []);
  return /* @__PURE__ */ jsx("ul", { children: posts.map((post) => /* @__PURE__ */ jsx("li", { children: post.title }, post.slug)) });
}

const $$Astro = createAstro("https://astrojs-test-orpin.vercel.app");
const $$Hello = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hello;
  const res = await fetch(new URL("/api/posts.json", Astro2.url));
  await res.json();
  return renderTemplate`${maybeRenderHead()}<h2>Hello, Astro!</h2> ${renderComponent($$result, "Loaddata", Loaddata, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/dirk/DirkData/Astrojs/day8/src/components/Loaddata", "client:component-export": "default" })} ${renderComponent($$result, "Counter", Note, { "client:media": "(min-width:768px)", "client:component-hydration": "media", "client:component-path": "/home/dirk/DirkData/Astrojs/day8/src/components/Counter", "client:component-export": "default" })}`;
}, "/home/dirk/DirkData/Astrojs/day8/src/pages/hello.astro", void 0);

const $$file = "/home/dirk/DirkData/Astrojs/day8/src/pages/hello.astro";
const $$url = "/hello";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hello,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
