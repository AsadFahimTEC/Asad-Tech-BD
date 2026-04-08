import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const tran_id = url.searchParams.get("tran_id");

  return NextResponse.redirect(`/payment-success?tran_id=${tran_id}`);
}