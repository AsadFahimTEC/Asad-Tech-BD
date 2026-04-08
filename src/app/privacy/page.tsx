"use client";

import { useState, useEffect } from "react";

export default function PrivacyPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center space-y-6 px-6">
        <div className="w-full max-w-3xl animate-pulse">
          <div className="h-12 bg-gray-800 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-800 rounded mb-2"></div>
          <div className="h-6 bg-gray-800 rounded mb-2"></div>
          <div className="h-6 bg-gray-800 rounded w-3/4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
          {[1, 2, 3, 4].map((_, idx) => (
            <div
              key={idx}
              className="h-40 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">

      {/* 🔥 Animated LED Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,0,255,0.2),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(0,255,120,0.2),transparent_40%)] animate-pulse blur-2xl"></div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-glow">
          🔒 Privacy Policy
        </h1>

        <p className="text-lg md:text-xl max-w-3xl text-gray-300 leading-relaxed">
          We value your privacy and are committed to protecting your personal
          data. This policy explains how we collect, use, and safeguard your
          information with full transparency.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 font-semibold shadow-lg hover:scale-105 transition animate-gradient"
        >
          🚀 Important Notice
        </button>
      </section>

      {/* Content */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-6">

        {[
          {
            title: "📊 Information Collection",
            text: "We collect necessary user data such as name, email, and usage activity to provide better services and improve user experience.",
          },
          {
            title: "⚙️ Data Usage",
            text: "Your data is used for account management, personalization, and improving our platform. আমরা কখনোই আপনার ডাটা বিক্রি করি না।",
          },
          {
            title: "🍪 Cookies",
            text: "Cookies help us enhance performance, analyze traffic, and provide a smoother browsing experience.",
          },
          {
            title: "🔗 Third-Party Services",
            text: "We use trusted third-party tools for analytics and services. All integrations follow strict privacy compliance.",
          },
          {
            title: "🔐 Data Security",
            text: "We use encryption and secure systems to protect your personal data from unauthorized access.",
          },
          {
            title: "📅 Data Retention",
            text: "We only store your data as long as necessary for service purposes and legal requirements.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition"
          >
            <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              {item.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
          <div className="relative w-11/12 max-w-lg p-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient">
            <div className="bg-black rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                ⚠️ Important Notice
              </h3>

              <p className="text-gray-300 mb-6">
                By using our platform, you agree to our privacy policies and
                data practices. Please review all details carefully before
                continuing.
              </p>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 font-semibold hover:scale-105 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-glow {
          text-shadow: 0 0 10px cyan, 0 0 20px magenta, 0 0 30px purple;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 5s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
