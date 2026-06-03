import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServicesSection from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Development & Graphic Design Services Delhi | RYTINWEB",
  description: "RYTINWEB offers custom website development, website maintenance, digital marketing, graphic design, and SEO services in Delhi, Noida, and Gurugram.",
  alternates: {
    canonical: "https://rytinweb.in/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-[#0A0A0A]">
        
        {/* Banner */}
        <section className="bg-[#111111] border-b border-[#27272A] text-white py-16 text-center relative overflow-hidden">
          {/* Pulsing orb removed */}
          <div className="relative z-10">
            <span className="inline-block text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Our Capabilities
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">What We Do</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
              We provide high-performance design, frontend engineering, and search positioning systems built for digital growth.
            </p>
          </div>
        </section>

        {/* Reuse the animated Services section component */}
        <ServicesSection />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
