// src/pages/api/contact.ts
export async function POST({ request }: { request: Request }) {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  // Ở đây bạn có thể lưu DB hoặc gửi email
  console.log("Có liên hệ mới:", { name, email, message });

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
