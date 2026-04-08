export async function POST(req: Request) {
  const body = await req.json();

  console.log("Email sent with:", body);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}