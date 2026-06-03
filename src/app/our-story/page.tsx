import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story & Milestones | RYTINWEB Web Engineering Delhi",
  description: "Read the journey of RYTINWEB from a small design studio to Delhi's leading custom web development and Next.js engineering agency.",
  alternates: {
    canonical: "https://rytinweb.in/our-story",
  },
};

export default function OurStoryPage() {
  const milestones = [
    { year: "Phase 1", title: "Agency Launch", desc: "RYTINWEB was established to offer Custom Website Development, bridging the gap between artistic visual layout and clean front-end code." },
    { year: "Phase 2", title: "First Client Projects", desc: "Successfully partnered with local startups and brands in Noida and Gurugram, building fast business websites that load instantly." },
    { year: "Phase 3", title: "Service Expansion", desc: "Introduced full-service digital strategies, providing comprehensive Website Maintenance Services and results-oriented SEO Services India." },
    { year: "Phase 4", title: "Future Growth", desc: "Continuing to expand our presence in Delhi NCR, integrating new web technologies to support clients on their digital growth journey." },
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
              Our Journey
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Our Story</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
              Providing premium Website Design Delhi NCR and high-performance digital engineering services.
            </p>
          </div>
        </section>

        {/* Content & Timeline */}
        <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-6 text-zinc-400 leading-relaxed text-sm md:text-base font-light">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Connecting Design with Clean Web Engineering
              </h2>
              <p>
                At RYTINWEB, we specialize in Custom Website Development that helps businesses establish a strong online presence. We realized that many companies face a common challenge: a disconnect between creative visual concepts and technical execution.
              </p>
              <p>
                Every project is crafted around Responsive Website Design principles to ensure seamless usability across all devices. We combine search visibility with clean, modern code to build interfaces that perform.
              </p>
              <p>
                We work closely with local startups and businesses in Noida, Gurugram, and the wider Delhi NCR area. By focusing on speed, clear communication, and transparent workflows, we build digital solutions that convert visitors into loyal clients.
              </p>
            </div>

            {/* Right Timeline */}
            <div className="lg:col-span-6 relative border-l border-[#27272A] pl-6 space-y-8">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative">
                  {/* Circle dot marker */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white border-4 border-[#0A0A0A] shadow-sm" />
                  
                  <span className="text-xs font-bold text-white font-mono block mb-1">
                    {m.year}
                  </span>
                  <h3 className="font-extrabold text-white text-base mb-1.5">
                    {m.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
