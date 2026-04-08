"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const params = useSearchParams();
  const product = params.get("product");
  const price = params.get("price");
  const name = params.get("name");
  const email = params.get("email");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">✅ Payment Successful</h1>
      <p className="mb-2">Name: {name}</p>
      <p className="mb-2">Email: {email}</p>
      <p className="mb-2">Product: {product}</p>
      <p className="mb-2">Price: ৳ {price}</p>
      <p className="mt-4">Check your email for the invoice.</p>
    </div>
  );
}