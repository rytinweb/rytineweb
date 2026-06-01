import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Users, Target, Heart } from "lucide-react";

export default function WhoWeArePage() {
  const values = [
    { title: "Team Collaboration", desc: "Our staff of 25+ designers, developers, and local SEO managers work closely with clients to build digital frontends.", icon: Users },
    { title: "Metric Alignment", desc: "We align website layouts with client conversion rates, ensuring a high-performance ROI for every project.", icon: Target },
    { title: "Canadian Pride", desc: "Operating proudly in Canada since 2014, we understand local market dynamics and small business budgets.", icon: Heart },
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
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Who We Are</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We are a full-service web design and digital marketing agency based in Canada, helping small business owners thrive online.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                Empowering Canadian Businesses with Premium Digital Frontends
              </h2>
              <p>
                Founded in 2014, Canadian Web Designs grew from a small local agency into a robust nationwide agency. We operate office branches in Toronto and Brampton, employing a talented team of 25+ digital architects.
              </p>
              <p>
                We believe that every small business owner deserves access to high-performance Next.js architectures, sleek typography, and robust local search visibility. That is why we provide flat-rate, transparent packages with zero hidden fees and no long-term contracts.
              </p>
              <p>
                Our philosophy is simple: we design websites that work. By aligning our layout design patterns with user experience, we translate passive digital traffic into sales leads.
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
