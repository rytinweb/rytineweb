import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Users, Target, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RYTINWEB Delhi | Design & Web Development Agency",
  description: "Learn about RYTINWEB, a premium design-forward web development agency based in Delhi, India. We build scalable digital architectures for fast-growing businesses.",
  alternates: {
    canonical: "https://rytinweb.in/who-we-are",
  },
};

export default function WhoWeArePage() {
  const values = [
    { 
      title: "Design-Driven Engineering", 
      desc: "Our software engineers, UX designers, and search strategists collaborate directly to construct high-fidelity digital platforms.", 
      icon: Users 
    },
    { 
      title: "Metric Alignment", 
      desc: "We prioritize conversion metrics, speed metrics, and responsive usability to drive compounding growth for our partners.", 
      icon: Target 
    },
    { 
      title: "Premium Frameworks", 
      desc: "We program bespoke React and Next.js applications featuring fluid animations and modular, maintainable code architectures.", 
      icon: Sparkles 
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-[#0A0A0A]">
        
        {/* Banner */}
        <section className="bg-[#111111] border-b border-[#27272A] text-white py-16 text-center relative overflow-hidden">
          {/* Pulsing orb removed */}
          <div className="relative z-10">
            <span className="inline-block text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Agency profile
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Who We Are</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
              We are a design-forward digital engineering agency specializing in high-performance frontends and premium brand experiences.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-zinc-400 leading-relaxed text-sm md:text-base font-light">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Sleek Digital Frontends Engineered for High-Growth Brands
              </h2>
              <p>
                RYTINWEB is a modern web development agency built for the next generation of digital products. We bridge the gap between creative visual artistry and strict frontend software engineering.
              </p>
              <p>
                We believe that premium web design should be transparent and accessible. We offer clean, flat-rate engagement structures to deliver custom-coded Next.js architectures that load instantly and capture intent.
              </p>
              <p>
                Our philosophy centers on minimal, high-impact design. Every spacing ratio, typeface weight, and micro-interaction is intentionally crafted to elevate your brand presence.
              </p>
            </div>

            {/* Values Grid */}
            <div className="space-y-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="p-5 border border-[#27272A] rounded-2xl bg-[#171717] shadow-sm flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-white shrink-0">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-sm mb-1">{v.title}</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
