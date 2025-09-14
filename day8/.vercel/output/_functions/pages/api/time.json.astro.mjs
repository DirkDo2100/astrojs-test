export { renderers } from '../../renderers.mjs';

const prerender = false;
async function GET() {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  console.log("SSR /api/time.json at", now);
  return new Response(JSON.stringify({ now }), {
    headers: {
      "Content-Type": "application/json",
      // tắt cache để thấy thay đổi mỗi lần tải
      "Cache-Control": "no-store"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
