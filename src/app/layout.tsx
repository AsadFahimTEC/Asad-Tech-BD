import type { Metadata } from "next";
import "./styles/globals.css";

import { Toaster } from "sonner";
import Navbar1 from "@/components/navbar1";
import HeroSection from "@/components/HeroSection";
import EventCategories from "@/app/components/sections/EventCategories";
import UpcomingEventsSlider from "@/components/ProductSystem";
import CallToActionSection from "./components/call/CallToActionSection";
import Footer from "@/components/footer2";
import ClientWrapper from "./components/ClientWrapper";
import QuizSection from "@/components/quiz/QuizSection";


const geistSans = {
  variable: "--font-geist-sans",
  className: "font-sans",
};
const geistMono = {
  variable: "--font-geist-mono",
  className: "font-mono",
};

export const metadata: Metadata = {
  title: "Asad Tech BD 📅",
  description: "Digital Product Reselling Platform for Tech Events in Bangladesh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar1 />
        <ClientWrapper>
          {children}
          <HeroSection />
          <section id="products" className="scroll-mt-28">
            <UpcomingEventsSlider />
          </section>
          <section id="games" className="scroll-mt-28">
            <CallToActionSection />
          </section>
          <section id="quiz" className="scroll-mt-28">
            <QuizSection />
          </section>
        </ClientWrapper>

        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}