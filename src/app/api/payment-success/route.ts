import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST() {
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
    subject: "Premium Activated",
    html: `<h2>User activated premium access.</h2>`,
  });

  return NextResponse.json({ success: true });
}