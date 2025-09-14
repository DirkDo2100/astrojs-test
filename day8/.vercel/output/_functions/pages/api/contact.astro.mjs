export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");
  console.log("Có liên hệ mới:", { name, email, message });
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
