"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const [daysPassed, setDaysPassed] = useState(105);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const copyright = "© 2026 Asad Tech BD. All rights reserved.";

  const bottomLinks = [
    { text: "Terms & Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysPassed((prev) => prev + 1);

      const now = new Date();
      const nextDay = new Date();
      nextDay.setHours(24, 0, 0, 0);
      const diff = nextDay.getTime() - now.getTime();

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={cn(
        "relative py-20 border-t border-slate-700 bg-black overflow-hidden",
        className
      )}
    >
      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse -z-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <footer className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Logo Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
            >
              🚀 Asad Tech BD
            </motion.h1>

            {/* Hashtag */}
            <span className="text-lg font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-pulse">
              #JusticeForHadi
            </span>

            {/* Counter */}
            <div className="text-white">
              <p className="text-lg font-bold text-cyan-400">
                বিচারহীনতার {daysPassed} তম দিন
              </p>
              <p className="text-gray-400">
                {timeLeft.hours.toString().padStart(2, "0")}:
                {timeLeft.minutes.toString().padStart(2, "0")}:
                {timeLeft.seconds.toString().padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
            >
              বাংলাদেশের ডিজিটাল ভবিষ্যৎ গড়ার পথে 🌐
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              আমরা আপনাকে দিচ্ছি সেরা ডিজিটাল প্রোডাক্ট, প্রিমিয়াম সার্ভিস এবং
              অটোমেশন সলিউশন। আপনার অনলাইন বিজনেসকে এক ধাপ এগিয়ে নিতে
              আমাদের সাথে থাকুন। 💡
            </motion.p>
          </div>
        </footer>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-500">{copyright}</p>

          <ul className="flex flex-wrap gap-6">
            {bottomLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.url}
                  className="text-gray-500 hover:text-pink-400 transition"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
