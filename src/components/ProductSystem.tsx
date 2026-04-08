"use client";

import { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { X, MessageCircle } from "lucide-react";

// Define product type
interface Product {
  id: number;
  title: string;
  price: number;
  guarantee: string;
  image: string;
  gradient: string;
}

// Product data
const products: Product[] = [
  {
    id: 1,
    title: "Grok AI Premium Account",
    price: 800,
    guarantee: "1 Month Replacement",
    image: "/images/grok.png",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    title: "ChatGPT Premium Account",
    price: 650,
    guarantee: "1 Month Replacement",
    image: "/images/chatgpt.png",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: 3,
    title: "Veo3 Premium Account",
    price: 1100,
    guarantee: "No Replacement",
    image: "/images/veo3.png",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    id: 4,
    title: "CapCut Premium Account",
    price: 650,
    guarantee: "1 Month Replacement",
    image: "/images/capcut.png",
    gradient: "from-orange-400 to-red-500",
  },
  {
    id: 5,
    title: "Gemini Pro Premium",
    price: 650,
    guarantee: "4 Month Replacement",
    image: "/images/gemini.png",
    gradient: "from-indigo-400 to-blue-600",
  },
  {
    id: 6,
    title: "Canva Premium",
    price: 250,
    guarantee: "1 Year Replacement",
    image: "/images/canva.png",
    gradient: "from-pink-400 to-rose-600",
  },
  {
    id: 7,
    title: "AI Video Editing Course",
    price: 250,
    guarantee: "Lifetime",
    image: "/images/video.png",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 8,
    title: "Facebook Account Create",
    price: 350,
    guarantee: "Lifetime",
    image: "/images/facebook.png",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 9,
    title: "Instagram Account Create",
    price: 350,
    guarantee: "Lifetime",
    image: "/images/instagram.png",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    id: 10,
    title: "Netflix Premium",
    price: 450,
    guarantee: "1 Month",
    image: "/images/netflix.png",
    gradient: "from-red-500 to-rose-600",
  },
  {
    id: 11,
    title: "Adobe Creative Cloud",
    price: 950,
    guarantee: "3 Month",
    image: "/images/adobe.png",
    gradient: "from-red-400 to-orange-600",
  },
  {
    id: 12,
    title: "Hostinger Hosting",
    price: 1200,
    guarantee: "1 Year",
    image: "/images/hostinger.png",
    gradient: "from-green-500 to-teal-600",
  },
];

export default function ProductSystem() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [form, setForm] = useState<any>({});
  const [showInvoice, setShowInvoice] = useState(false);

// 🤖 Chatbot State
const [messages, setMessages] = useState<any[]>([
  {
    role: "bot",
    text: "Hello 👋 Welcome! How can I help you today?",
    time: new Date(),
  },
]);

const [input, setInput] = useState("");

// 🕒 Format Time
const formatTime = (date: Date) => {
  return new Intl.DateTimeFormat("en-BD", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

// 🤖 Smart AI Chat
const handleChat = () => {
  if (!input.trim()) return;

  const lower = input.toLowerCase();

  const userMsg = {
    role: "user",
    text: input,
    time: new Date(),
  };

  let botReply = "⚠️ Sorry, I didn't understand. Please ask about price, payment or product.";

  // 🔥 Smart Responses
  if (lower.includes("price")) {
    botReply = `💰 The price is ৳ ${selected?.price}`;
  } 
  else if (lower.includes("payment")) {
    botReply = "💳 You can pay via bKash / Nagad.\nSend money and submit Transaction ID.";
  } 
  else if (lower.includes("hello") || lower.includes("hi")) {
    botReply = "👋 Hello! How can I assist you today?";
  } 
  else if (lower.includes("guarantee")) {
    botReply = `🛡️ This product has: ${selected?.guarantee}`;
  }
  else if (lower.includes("delivery")) {
    botReply = "⚡ Delivery is instant after payment verification.";
  }
  else if (lower.includes("refund")) {
    botReply = "❌ No refund, only replacement based on guarantee.";
  }
  else if (lower.includes("support")) {
    botReply = "📞 Contact support: 01XXXXXXXXX";
  }
  else if (lower.includes("thanks")) {
    botReply = "😊 You're welcome! Need anything else?";
  }

  const botMsg = {
    role: "bot",
    text: botReply,
    time: new Date(),
  };

  setMessages((prev) => [...prev, userMsg, botMsg]);
  setInput("");
};

  // Submit Payment
const handleSSLPayment = async () => {
  if (!form.name || !form.email) {
    toast.error("Name & Email required!");
    return;
  }

  try {
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        product: selected?.title,
        price: selected?.price,
      }),
    });

    const data = await res.json();

    if (data.GatewayPageURL) {
      window.location.href = data.GatewayPageURL;
    } else {
      console.error(data.details);
      toast.error(data.error || "Gateway URL not received");
    }
  } catch (err) {
    console.error(err);
    toast.error("Payment initialization failed");
  }
};
  return (
    <div className="bg-black text-white min-h-screen p-8 relative">
      <Toaster />

      <h2 className="text-4xl font-bold text-center mb-12 animate-pulse text-cyan-400">
        Premium Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className={`p-[2px] bg-gradient-to-r ${p.gradient} animate-rgb`}
          >
            <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 transition-transform duration-500 shadow-xl shadow-cyan-500/50">
              <Image src={p.image} alt={p.title} width={60} height={60} />
              <h3 className="mt-2 font-bold text-lg">{p.title}</h3>
              <p className="text-sm text-slate-400">{p.guarantee}</p>
              <p className="mt-1 font-semibold">৳ {p.price}</p>
              <button
                onClick={() => {
                  setSelected(p);
                  setShowInvoice(false);
                }}
                className="mt-3 w-full bg-cyan-400 hover:bg-cyan-500 text-black py-2 rounded font-bold animate-pulse"
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 animate-fadeIn">
          <div className="bg-slate-900 w-full max-w-4xl rounded-xl p-6 flex gap-4 relative border-2 border-cyan-400 shadow-lg shadow-cyan-500/50">
            {/* Close */}
            <button
              onClick={() => {
                setSelected(null);
                setShowInvoice(false);
              }}
              className="absolute top-3 right-3 text-cyan-400 hover:text-cyan-200"
            >
              <X size={24} />
            </button>

            {/* LEFT SIDE */}
            <div className="flex-1">
              {!showInvoice ? (
                <>
                  <h2 className="text-xl mb-4 animate-pulse">{`Purchase ${selected.title}`}</h2>
                  {/* Important Notice */}{" "}
                  <div className="p-4 rounded-xl border border-pink-500 shadow-[0_0_20px_pink] mb-4 text-sm">
                    {" "}
                    আসসালামু আলাইকুম, Asad Tech BD এর অফিশিয়াল ওয়েবসাইটে সবাগতম,
                    যে কোনো ধরনের একাউন্ট/কোর্স কিনতে আমাদের bkash/rocket/nagad
                    নাম্বারে পেমেন্ট করে স্ক্রিনশট ও Transaction ID যুক্ত করে
                    দেন আপনারা কেনাবেচা সফল হোক ইনশাআল্লাহ ধন্যবাদ। <br />{" "}
                    <br /> bkash/nagad: 01969887330 rocket: 019698873305{" "}
                  </div>{" "}
                  {/* Payment Logos */}{" "}
                  <div className="flex gap-4 mb-4">
                    {" "}
                    <Image
                      src="/images/bkash.png"
                      alt="bkash"
                      width={60}
                      height={40}
                    />{" "}
                    <Image
                      src="/images/nagad.png"
                      alt="nagad"
                      width={60}
                      height={40}
                    />{" "}
                    <Image
                      src="/images/rocket.png"
                      alt="rocket"
                      width={60}
                      height={40}
                    />{" "}
                  </div>
                  <input
                    placeholder="Name"
                    className="w-full mb-2 p-2 bg-slate-800 rounded"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    placeholder="Email"
                    className="w-full mb-2 p-2 bg-slate-800 rounded"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <input
                    placeholder="Transaction ID"
                    className="w-full mb-2 p-2 bg-slate-800 rounded"
                    onChange={(e) => setForm({ ...form, txId: e.target.value })}
                  />
                  <label className="flex gap-2 text-sm mb-2">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setForm({ ...form, accept: e.target.checked })
                      }
                    />{" "}
                    Accept Terms
                  </label>
                  <button
                    onClick={handleSSLPayment}
                    className="w-full bg-green-500 hover:bg-green-600 py-2 rounded font-bold"
                  >
                    Pay with SSLCommerz
                  </button>
                </>
              ) : (
                <div className="p-4 border-2 border-cyan-400 rounded animate-pulse">
                  <h2 className="text-xl mb-4">Invoice</h2>
                  <p>
                    <strong>Name:</strong> {form.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {form.email}
                  </p>
                  <p>
                    <strong>Product:</strong> {selected.title}
                  </p>
                  <p>
                    <strong>Price:</strong> ৳ {selected.price}
                  </p>
                  <p>
                    <strong>Transaction ID:</strong> {form.txId}
                  </p>
                  <p className="mt-4 text-green-400 font-bold">
                    ✅ Payment Received
                  </p>
                </div>
              )}
            </div>

            {/* RIGHT SIDE CHATBOT */}
            <div className="w-72 bg-slate-800 rounded p-3 flex flex-col">
              <h3 className="font-bold mb-2 text-cyan-400">AI Support</h3>
              <div className="flex-1 overflow-y-auto text-sm mb-2">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`mb-2 ${m.role === "user" ? "text-right" : ""}`}
                  >
                    <span className="bg-slate-700 px-2 py-1 rounded inline-block">
                      {m.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 p-1 bg-slate-700 rounded"
                  placeholder="Ask..."
                />
                <button
                  onClick={handleChat}
                  className="bg-cyan-400 hover:bg-cyan-500 px-2 rounded"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes rgbAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-rgb {
          background-size: 400% 400%;
          animation: rgbAnimation 6s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
