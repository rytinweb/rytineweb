import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function OurStoryPage() {
  const milestones = [
    { year: "2020", title: "Founding", desc: "Established RYTINWEB to bridge the gap between creative visual design and frontend software engineering." },
    { year: "2022", title: "Design Systems", desc: "Expanded our focus to premium design systems, helping startups build clean, reusable digital brand libraries." },
    { year: "2024", title: "Architecture Shift", desc: "Adopted Next.js App Router and headless setups as our default stack, prioritizing load times and conversion metrics." },
    { year: "2026+", title: "Next Gen", desc: "Developing custom web environments and AI-assisted workflows to accelerate developer velocity and search visibility." },
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
              Our Journey
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Our Story</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
              How we scaled from a minimal design workshop to a premium, high-performance digital engineering agency.
            </p>
          </div>
        </section>

        {/* Content & Timeline */}
        <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-6 text-gray-600 leading-relaxed text-sm md:text-base font-light">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                Bespoke engineering, designed to perform
              </h2>
              <p>
                RYTINWEB was founded to address a critical challenge in the digital space: the disconnect between visual design and technical execution. Too often, beautiful designs are bottlenecked by slow, legacy code, or high-performance code suffers from poor visual layouts.
              </p>
              <p>
                We established RYTINWEB to bring both disciplines under one unified workflow. We write clean, semantic code, optimize performance, and design interfaces that capture brand identity.
              </p>
              <p>
                Today, we partner with high-growth teams and companies globally to launch, iterate, and maintain high-fidelity digital platforms. By emphasizing speed, usability, and clean typography, we build digital interfaces that convert.
              </p>
            </div>

            {/* Right Timeline */}
            <div className="lg:col-span-6 relative border-l border-gray-200 pl-6 space-y-8">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative">
                  {/* Circle dot marker */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-primary border-4 border-white shadow-sm" />
                  
                  <span className="text-xs font-bold text-primary font-mono block mb-1">
                    {m.year}
                  </span>
                  <h3 className="font-extrabold text-gray-900 text-base mb-1.5">
                    {m.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
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
