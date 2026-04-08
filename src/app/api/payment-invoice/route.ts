import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const transactionId = formData.get("transactionId") as string;
  const screenshot = formData.get("screenshot") as File;

  const buffer = Buffer.from(await screenshot.arrayBuffer());

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Asad Tech BD" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Payment Invoice - Premium Activation",
    html: `
      <h2>Payment Received Successfully</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Transaction ID:</strong> ${transactionId}</p>
      <p>Your premium membership will be activated after verification.</p>
    `,
    attachments: [
      {
        filename: screenshot.name,
        content: buffer,
      },
    ],
  });

  return NextResponse.json({ success: true });
}