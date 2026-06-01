import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Award, Compass, Star } from "lucide-react";

export default function OurStoryPage() {
  const milestones = [
    { year: "2014", title: "Founding", desc: "Started as a small local agency in Toronto focused on local business SEO positioning." },
    { year: "2018", title: "Expansion", desc: "Opened our Brampton office branch and reached a team of 10+ designers and developers." },
    { year: "2022", title: "Accreditation", desc: "Awarded BBB accreditation and reached 150+ five-star reviews on Google." },
    { year: "2024+", title: "Next.js Rebuild", desc: "Migrated our architecture to Next.js App Router and TypeScript, providing local businesses with enterprise-grade tech stacks." },
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
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              How we scaled from a small local consulting desk to one of Canada&apos;s top-rated digital design agencies.
            </p>
          </div>
        </section>

        {/* Content & Timeline */}
        <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                Over a decade of web design excellence
              </h2>
              <p>
                In 2014, our founder recognized a massive gap in the Canadian digital agency market. Small business owners were being forced to choose between overpriced corporate agencies charging five-figure setups, or unverified freelancers with unpredictable support timelines.
              </p>
              <p>
                Canadian Web Designs was established with a clear objective: provide transparent, flat-rate, high-performance web development.
              </p>
              <p>
                Today, our team of 25+ developers, graphic designers, and SEO analysts continues that legacy. We manage web infrastructures for 500+ businesses across Canada, keeping their servers fast, secure, and positioned to drive leads.
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
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
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
