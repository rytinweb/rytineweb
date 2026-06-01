import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Users, Target, Sparkles } from "lucide-react";

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
      <main className="pt-header-h min-h-screen bg-white">
        
        {/* Banner */}
        <section className="bg-dark text-white py-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/20 filter blur-[90px] opacity-35" />
          <div className="relative z-10">
            <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
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
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base font-light">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
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
                  <div key={v.title} className="p-5 border border-gray-150 rounded-2xl bg-[#f8f9fa] shadow-sm flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-sm mb-1">{v.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
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
