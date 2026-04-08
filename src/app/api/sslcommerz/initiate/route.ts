import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, product, price } = body as {
    name: string;
    email: string;
    product: string;
    price: number;
  };

  if (!name || !email || !product || !price) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const store_id = process.env.SSLC_STORE_ID;
  const store_passwd = process.env.SSLC_STORE_PASSWORD;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const is_live = false; // false = sandbox

  if (!store_id || !store_passwd || !baseUrl) {
    return NextResponse.json({ message: "Payment config is not set" }, { status: 500 });
  }

  const post_data = {
    store_id,
    store_passwd,
    total_amount: price,
    currency: "BDT",
    tran_id: `TRAN${Date.now()}`,
    success_url: `${baseUrl}/payment-success?product=${encodeURIComponent(product)}&price=${price}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`,
    fail_url: `${baseUrl}/payment-failed`,
    cancel_url: `${baseUrl}/payment-failed`,
    cus_name: name,
    cus_email: email,
    cus_add1: "Dhaka",
    cus_city: "Dhaka",
    cus_country: "Bangladesh",
    shipping_method: "NO",
    product_name: product,
  };

  try {
    const response = await fetch(
      is_live
        ? "https://securepay.sslcommerz.com/service/v1/process.php"
        : "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post_data),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to initialize payment" }, { status: 500 });
  }
}