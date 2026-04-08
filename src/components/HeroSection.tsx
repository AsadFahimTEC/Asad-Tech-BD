"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* ===== RGB Animated Mesh Background ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-[rgb(0,255,255)]/25 blur-[200px] rounded-full -top-40 -left-40 animate-floatSlow"></div>
        <div className="absolute w-[700px] h-[700px] bg-[rgb(255,0,255)]/25 blur-[200px] rounded-full -bottom-40 -right-40 animate-floatSlowReverse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050510] to-black"></div>
      </div>

      {/* ===== Content Container ===== */}
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* ===== Badge ===== */}
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg animate-fadeUp">
          <span className="text-sm bg-gradient-to-r from-[rgb(0,255,255)] via-[rgb(255,0,255)] to-[rgb(0,128,255)] bg-clip-text text-transparent font-semibold">
            #1 Trusted Digital Reselling Platform
          </span>
        </div>

        {/* ===== Main Title ===== */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 animate-fadeUp delay-200">
          <span className="bg-gradient-to-r from-[rgb(0,255,255)] via-[rgb(255,0,255)] to-[rgb(0,128,255)] bg-clip-text text-transparent">
            Asad Tech BD
          </span>
          <br />
          <span className="text-white">
            Premium Digital Products Marketplace
          </span>
        </h1>

        {/* ===== Description ===== */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fadeUp delay-400">
          Buy & resell software, AI tools, hosting services, premium subscriptions,
          and digital assets with secure payment gateways and instant automated delivery.
          Build your online income with confidence.
        </p>

        {/* ===== CTA Buttons ===== */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fadeUp delay-600">
          <Link
            href="/products"
            className="px-10 py-4 rounded-full font-semibold bg-gradient-to-r from-[rgb(0,255,255)] to-[rgb(0,128,255)] text-black shadow-[0_0_30px_rgba(0,255,255,0.6)] hover:scale-110 transition-all duration-300"
          >
            Explore Products
          </Link>

          <Link
            href="/dashboard"
            className="px-10 py-4 rounded-full font-semibold bg-gradient-to-r from-[rgb(255,0,255)] to-[rgb(128,0,255)] text-white shadow-[0_0_30px_rgba(255,0,255,0.6)] hover:scale-110 transition-all duration-300"
          >
            Start Reselling
          </Link>
        </div>

        {/* ===== Stats Section ===== */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fadeUp delay-700">
          {[
            { number: "5000+", label: "Happy Customers" },
            { number: "120+", label: "Digital Products" },
            { number: "99.9%", label: "Secure Transactions" },
            { number: "24/7", label: "Support System" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[rgb(0,255,255)] to-[rgb(255,0,255)] bg-clip-text text-transparent">
                {item.number}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Animations ===== */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          opacity: 0;
          animation: fadeUp 1s ease forwards;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }

        @keyframes floatSlow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(40px); }
        }

        @keyframes floatSlowReverse {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }

        .animate-floatSlow {
          animation: floatSlow 10s ease-in-out infinite;
        }

        .animate-floatSlowReverse {
          animation: floatSlowReverse 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;