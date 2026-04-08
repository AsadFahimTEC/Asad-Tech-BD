import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, product, price, invoiceId } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML with LED style animation using inline CSS
    const htmlContent = `
      <div style="
        font-family: 'Segoe UI', sans-serif; 
        padding: 30px; 
        background: #0f0f0f; 
        color: #ffffff; 
        border-radius: 20px;
        text-align: center;
      ">
        <h1 style="
          font-size: 28px; 
          background: linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ff00ff);
          -webkit-background-clip: text;
          color: transparent;
          animation: ledAnimation 3s linear infinite;
          margin-bottom: 20px;
        ">Payment Successful ✅</h1>

        <p style="font-size:16px;">Dear <strong>${name}</strong>,</p>
        <p style="font-size:16px;">Thank you for purchasing from <strong>Asad Tech BD</strong>.</p>

        <div style="
          margin: 20px auto; 
          padding: 20px; 
          border: 2px solid #00ffff; 
          border-radius: 15px;
          box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff;
          max-width: 400px;
          background: #111;
        ">
          <p style="font-size:16px;"><strong>Invoice ID:</strong> ${invoiceId}</p>
          <p style="font-size:16px;"><strong>Product:</strong> ${product}</p>
          <p style="font-size:16px;"><strong>Amount:</strong> ৳ ${price}</p>
        </div>

        <p style="
          font-size:14px; 
          color:#00ffff; 
          margin-top: 30px; 
          border: 1px dashed #00ffff;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 0 10px #00ffff;
        ">
          🌟 Keep this invoice for your records. Your support helps us grow! 🌟
        </p>

        <p style="font-size:16px; margin-top: 20px;">💙 We appreciate your trust!</p>

        <!-- Animation keyframes (works in some modern email clients) -->
        <style>
          @keyframes ledAnimation {
            0% {background-position:0% 50%;}
            50% {background-position:100% 50%;}
            100% {background-position:0% 50%;}
          }
        </style>
      </div>
    `;

    await transporter.sendMail({
      from: `"Asad Tech BD" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Purchase Invoice - Asad Tech BD",
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};