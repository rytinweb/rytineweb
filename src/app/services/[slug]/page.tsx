import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import * as Icons from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_ITEMS } from "@/constants/data";

interface Props {
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICE_ITEMS.find((s) => s.href === `/services/${params.slug}`);

  // Fallback map for services that exist in navigation but aren't in core lists
  const isAds = params.slug === "google-ads-management";
  
  const title = service 
    ? service.title 
    : isAds 
      ? "Google Ads Management" 
      : null;

  const description = service 
    ? service.description 
    : isAds 
      ? "Maximize your return on investment and drive instant sales leads with laser-focused Google PPC campaigns." 
      : null;

  const iconName = service ? service.iconName : isAds ? "Target" : null;

  if (!title || !description) {
    return notFound();
  }

  const LucideIcon = (Icons as any)[iconName || "HelpCircle"] || Icons.HelpCircle;

  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-white">
        {/* Banner Section */}
        <section className="bg-dark text-white py-16 md:py-24 relative overflow-hidden">
          {/* Subtle orb background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/20 filter blur-[90px] opacity-35" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 text-center">
            {/* Category */}
            <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              What We Do
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              {description}
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
                  <LucideIcon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  Services Overview & Strategy
                </h2>
              </div>

              <div className="prose prose-gray max-w-none text-gray-600 space-y-6 leading-relaxed">
                <p>
                  At Canadian Web Designs, we build tailored digital models that align perfectly with your business metrics. We recognize that a professional web framework is more than just graphics; it is the virtual storefront of your business.
                </p>
                <p>
                  Our multi-disciplinary architects combine modern web technologies (including Next.js, React, Tailwind CSS, and headless architectures) with robust search engine positioning models. This ensures your service details rank on search indexes and convert passive visitors into active leads.
                </p>
                <p className="font-semibold text-gray-900">
                  What is included in this service:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 list-none">
                  {[
                    "100% Mobile-First Responsive layouts",
                    "SEO-ready tags & semantic markup",
                    "Performance-optimized load speeds",
                    "Bespoke designs tailored to your brand",
                    "Interactive Call-to-Actions (CTAs)",
                    "Secure, maintenance-ready codebases",
                  ].map((inc, i) => (
                    <li key={i} className="flex gap-2.5 items-center text-sm font-medium">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] shrink-0 font-bold">
                        ✓
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Promo box */}
              <div className="p-6 rounded-2xl border border-gray-100 bg-[#f8f9fa] shadow-sm flex flex-col justify-between">
                <h3 className="font-extrabold text-gray-900 text-lg mb-3">
                  Have a project in mind?
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Speak to one of our Next.js architects and developers to get a custom roadmap for your business.
                </p>
                <Link
                  href="/contact"
                  className="btn-shimmer flex items-center justify-center py-3 text-white font-bold rounded-btn text-sm bg-primary shadow-sm hover:bg-primary-600"
                >
                  Consult an Architect
                </Link>
              </div>

              {/* Sidebar list */}
              <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">
                  Our Other Services
                </h3>
                <ul className="space-y-3 text-sm">
                  {SERVICE_ITEMS.filter((s) => s.href !== `/services/${params.slug}`).map((s) => (
                    <li key={s.href}>
                      <Link 
                        href={s.href} 
                        className="text-gray-600 hover:text-primary transition-colors flex justify-between items-center py-1 group"
                      >
                        {s.title}
                        <Icons.ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-transform group-hover:translate-x-1" />
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
