export const prerender = false; // bắt buộc để KHÔNG build tĩnh

export async function GET() {
  const now = new Date().toISOString();
  // Log để bạn thấy request tới function (xem trong Vercel Logs)
  console.log("SSR /api/time.json at", now);

  return new Response(JSON.stringify({ now }), {
    headers: {
      "Content-Type": "application/json",
      // tắt cache để thấy thay đổi mỗi lần tải
      "Cache-Control": "no-store",
    },
  });
}
