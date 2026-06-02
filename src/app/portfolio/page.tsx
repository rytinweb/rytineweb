import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ExternalLink, Monitor } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    { title: "Apex SaaS Platform", category: "Productivity & SaaS", tags: ["Next.js App", "UI/UX Design"], year: "2025" },
    { title: "Zenith Wellness", category: "Healthtech & Mobile", tags: ["Tailwind CSS", "App Design"], year: "2025" },
    { title: "Lumina Headless Commerce", category: "E-Commerce & Retail", tags: ["Shopify Engine", "SEO Positioning"], year: "2024" },
    { title: "Velo Digital Exchange", category: "Fintech & Trading", tags: ["Web Application", "Custom APIs"], year: "2024" },
    { title: "Nova B2B Architecture", category: "B2B & Enterprise", tags: ["Corporate Site", "SEO Positioning"], year: "2024" },
    { title: "Sphere Consulting", category: "Tech & Corporate", tags: ["Branding", "UI/UX Design"], year: "2023" },
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
              Our Works
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Recent Projects</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
              Explore how we have helped high-growth teams engineer modern, high-performance digital platforms.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={proj.title}
                className="group border border-gray-150 rounded-2xl overflow-hidden bg-[#f8f9fa] hover:bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Thumbnail Image placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-tr from-dark-blue to-[#0A2040] relative flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/10 filter blur-[40px] group-hover:bg-primary/20 transition-colors" />
                  
                  <div className="relative z-10 flex flex-col items-center gap-3 text-white/40 group-hover:text-primary transition-colors">
                    <Monitor className="w-12 h-12 stroke-[1.2]" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em]">RYTINWEB Project</span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">
                      {proj.year}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-gray-900 text-lg mb-4 flex items-center justify-between group-hover:text-primary transition-colors">
                    {proj.title}
                    <ExternalLink className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 font-light">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-100 rounded-md text-[10px] text-gray-600 font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
