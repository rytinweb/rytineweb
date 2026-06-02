import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_AREAS } from "@/constants/data";
import { ChevronRight, MapPin, ShieldCheck, Zap } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export default function LocationDetailPage({ params }: Props) {
  const area = SERVICE_AREAS.find((a) => a.slug === params.slug);

  if (!area) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-white">
        {/* Banner Section */}
        <section className="bg-slate-50 border-b border-slate-200/80 text-gray-900 py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 text-center">
            {/* Category */}
            <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Digital Positioning & Design
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Web Design {area.name}
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
              We build premium, custom, high-converting React architectures for brands in {area.name}.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Card */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex gap-4 items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  High-Performance Web Design in {area.name}
                </h2>
              </div>

              <div className="prose prose-gray max-w-none text-gray-600 space-y-6 leading-relaxed font-light">
                <p>
                  Dominate search indexes and convert customers in {area.name} with custom React frontends programmed by RYTINWEB. Our engineers partner with high-growth teams to construct responsive, modern applications.
                </p>
                <p>
                  Our process combines localized search engine positioning with UX/UI design patterns. This ensures your site ranks for queries relevant to {area.name} businesses, loading in under a second and driving conversions.
                </p>
                
                {/* Visual grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <Zap className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-extrabold text-gray-900 text-sm mb-2">Ultra-Fast Load Speeds</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Next.js static site generation ensures that visitors in {area.name} get page loads under 1 second, lowering bounce rates.</p>
                  </div>
                  <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-extrabold text-gray-900 text-sm mb-2">Accredited Reliability</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">High client satisfaction rate based on design delivery, frontend speeds, and ranking performance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Promo box */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm flex flex-col justify-between">
                <h3 className="font-extrabold text-gray-900 text-lg mb-3">
                  Free {area.name} Consultation
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                  Ready to scale? Book a call with one of our web developers today to discuss a flat-rate digital strategy.
                </p>
                <Link
                  href="/contact"
                  className="btn-shimmer flex items-center justify-center py-3 text-white font-bold rounded-btn text-sm bg-primary shadow-sm hover:bg-primary-600"
                >
                  Consult an Architect
                </Link>
              </div>

              {/* Sidebar list */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white max-h-[300px] overflow-y-auto shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">
                  Other Service Hubs
                </h3>
                <ul className="space-y-3 text-sm">
                  {SERVICE_AREAS.filter((a) => a.slug !== params.slug).slice(0, 10).map((a) => (
                    <li key={a.slug}>
                      <Link 
                        href={`/locations/${a.slug}`} 
                        className="text-gray-600 hover:text-primary transition-colors flex justify-between items-center py-1 group"
                      >
                        {a.name}
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
