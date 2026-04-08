import { NextResponse } from "next/server";
import { orders } from "@/lib/orders";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tran_id = searchParams.get("tran_id");

  if (!tran_id || !orders[tran_id]) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  return NextResponse.json(orders[tran_id]);
}