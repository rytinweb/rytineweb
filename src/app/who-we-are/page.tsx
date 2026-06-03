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
      title: "Our Mission", 
      desc: "To empower startups and growing companies with Business Website Development and top-tier SEO Services India, converting visitors into clients.", 
      icon: Users 
    },
    { 
      title: "Our Vision", 
      desc: "To become the leading hub for Website Design Delhi NCR trusts, establishing high digital standards for local and national businesses.", 
      icon: Target 
    },
    { 
      title: "Responsive Website Design", 
      desc: "We build layouts that adjust seamlessly to any mobile, tablet, or desktop screen, guaranteeing user satisfaction and search engine readiness.", 
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
              A dedicated Web Development Agency Delhi businesses trust to build high-performance web experiences.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-zinc-400 leading-relaxed text-sm md:text-base font-light">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Custom Website Development for Growing Brands
              </h2>
              <p>
                RYTINWEB is a fast-growing digital agency focusing on end-to-end Website Development India solutions. We bridge the gap between stunning aesthetic interfaces and robust web engineering to build fast, modern web platforms.
              </p>
              <p>
                As a results-oriented Digital Marketing Agency, we understand that a website is more than just code. We deliver custom business websites designed to build trust, capture high-quality leads, and rank on search engines.
              </p>
              <p>
                Whether you need specialized Graphic Design Services to define your brand or high-performance React architectures, we align our engineering with your business goals to ensure digital growth.
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
