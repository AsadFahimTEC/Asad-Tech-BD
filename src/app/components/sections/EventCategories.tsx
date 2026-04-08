"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  guarantee: string;
  image: string;
  category: string;
  gradient: string;
}

   const products: Product[] = [
  { id: 1, title: "Grok AI Premium Account", price: 800, guarantee: "1 Month Replacement", image: "/images/grok.png", category: "Premium", gradient: "from-cyan-400 to-blue-500" },
  { id: 2, title: "ChatGPT Premium Account", price: 650, guarantee: "1 Month Replacement", image: "/images/chatgpt.png", category: "Premium", gradient: "from-green-400 to-emerald-600" },
  { id: 3, title: "Veo3 Premium Account", price: 1100, guarantee: "No Replacement", image: "/images/veo3.png", category: "Premium", gradient: "from-purple-400 to-pink-500" },
  { id: 4, title: "CapCut Premium Account", price: 650, guarantee: "1 Month Replacement", image: "/images/capcut.png", category: "Premium", gradient: "from-orange-400 to-red-500" },
  { id: 5, title: "Gemini Pro Premium", price: 650, guarantee: "4 Month Replacement", image: "/images/gemini.png", category: "Premium", gradient: "from-indigo-400 to-blue-600" },
  { id: 6, title: "Canva Premium", price: 250, guarantee: "1 Year Replacement", image: "/images/canva.png", category: "Lifetime", gradient: "from-pink-400 to-rose-600" },
  { id: 7, title: "AI Video Editing Course", price: 250, guarantee: "Lifetime", image: "/images/video.png", category: "Lifetime", gradient: "from-yellow-400 to-orange-500" },
  { id: 8, title: "Facebook Account Create", price: 350, guarantee: "Lifetime", image: "/images/facebook.png", category: "Free", gradient: "from-blue-500 to-indigo-600" },
  { id: 9, title: "Instagram Account Create", price: 350, guarantee: "Lifetime", image: "/images/instagram.png", category: "Free", gradient: "from-pink-500 to-purple-600" },
  { id: 10, title: "Netflix Premium", price: 450, guarantee: "1 Month", image: "/images/netflix.png", category: "Premium", gradient: "from-red-500 to-rose-600" },
];

export default function ProductDashboard() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 
   const filters = ["All", "Premium", "Free", "Lifetime"]; 
   const filteredProducts = activeFilter === "All" ? products : products.filter(p => p.category === activeFilter);

  return (
    <section className="relative py-24 min-h-screen bg-black text-white overflow-hidden">
      {/* Top-level gradient animation */} <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 animate-gradient-x opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6"> {/* Heading */} <div className="text-center mb-14 relative z-10"> <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg animate-fadeUp"><p className="text-sm bg-gradient-to-r from-[rgb(0,255,255)] via-[rgb(255,0,255)] to-[rgb(0,128,255)] bg-clip-text text-transparent font-semibold animate-fadeInDown delay-200"> Browse and purchase premium digital products </p></div> <h2 className="text-5xl font-extrabold mb-4 animate-fadeInDown bg-gradient-to-r from-[rgb(0,255,255)] via-[rgb(255,0,255)] to-[rgb(0,128,255)] bg-clip-text text-transparent">Digital Products</h2> </div>
      </div>



      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-slate-900 p-5 rounded-xl shadow-lg">

            <Image src={p.image} alt={p.title} width={70} height={70} />
            <h3 className="mt-3 font-bold">{p.title}</h3>
            <p>{p.guarantee}</p>
            <p className="mt-2">৳ {p.price}</p>

            {/* ✅ Purchase always clickable */}
            <button
              onClick={() => setSelectedProduct(p)}
              className="mt-4 w-full bg-cyan-500 py-2 rounded font-bold hover:bg-cyan-600"
            >
              Purchase
            </button>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-slate-900 w-full max-w-md p-6 rounded-xl relative border border-cyan-400">

            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <h2 className="text-xl font-bold mb-3">
              {selectedProduct.title}
            </h2>

            <p>Price: ৳ {selectedProduct.price}</p>
            <p className="mb-4">Guarantee: {selectedProduct.guarantee}</p>

            {/* ❗ CONDITION */}
            {selectedProduct.category !== "Premium" && (
              <div className="relative mb-4 p-3 rounded-lg border border-red-500 overflow-hidden">

                {/* LED Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 blur-xl opacity-30 animate-pulse"></div>

                <p className="relative z-10 text-center text-red-400 font-semibold">
                  ⚠️ Please Buy From Premium Products Section
                </p>
              </div>
            )}

            {/* ✅ BUTTON CONDITION */}
            <button
              disabled={selectedProduct.category !== "Premium"}
              className={`w-full py-2 rounded font-bold transition ${
                selectedProduct.category === "Premium"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-500 cursor-not-allowed opacity-70"
              }`}
            >
              Pay with SSLCommerz
            </button>

          </div>
        </div>
      )}


   {/* Animations */}
       <style jsx>{`
        @keyframes gradientX {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 10s infinite;
        }
      `}</style>
    </section>
  );
}