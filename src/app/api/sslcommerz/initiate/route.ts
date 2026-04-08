import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, product, price } = req.body;

  const store_id = process.env.SSLC_STORE_ID!;
  const store_passwd = process.env.SSLC_STORE_PASSWORD!;
  const is_live = false; // false = sandbox

  const post_data = {
    store_id,
    store_passwd,
    total_amount: price,
    currency: "BDT",
    tran_id: `TRAN${Date.now()}`,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?product=${encodeURIComponent(product)}&price=${price}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`,
    fail_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-failed`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-failed`,
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
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to initialize payment" });
  }
}