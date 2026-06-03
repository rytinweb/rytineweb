import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import * as Icons from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_ITEMS } from "@/constants/data";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICE_ITEMS.map((item) => ({
    slug: item.href.replace("/services/", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICE_ITEMS.find((s) => s.href === `/services/${params.slug}`);

  if (!service) {
    return {
      title: "Services | RYTINWEB Web Engineering Delhi NCR",
      description: "Professional custom web development and digital marketing services based in Delhi, India.",
    };
  }

  const title = service.metaTitle;
  const description = service.metaDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `https://rytinweb.in/services/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://rytinweb.in/services/${params.slug}`,
    }
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICE_ITEMS.find((s) => s.href === `/services/${params.slug}`);

  if (!service) {
    return notFound();
  }

  const title = service.h1;
  const description = service.introParagraph;
  const iconName = service.iconName;
  const LucideIcon = (Icons as any)[iconName || "HelpCircle"] || Icons.HelpCircle;

  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-[#0A0A0A]">
        {/* Banner Section */}
        <section className="bg-[#111111] border-b border-[#27272A] text-white py-16 md:py-24 relative overflow-hidden">
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 text-center">
            {/* Category */}
            <span className="inline-block text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              What We Do
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
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
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white shrink-0">
                  <LucideIcon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                  Services Overview & Strategy
                </h2>
              </div>

              <div className="prose prose-gray max-w-none text-zinc-400 space-y-6 leading-relaxed">
                <p>
                  {service.longDescription}
                </p>
                <p className="font-semibold text-white">
                  What is included in this service:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 list-none">
                  {service.benefits.map((inc, i) => (
                    <li key={i} className="flex gap-2.5 items-center text-sm font-medium">
                      <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-white text-[10px] shrink-0 font-bold">
                        ✓
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="pt-8 border-t border-[#27272A] mt-10">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-6">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-white font-bold text-sm md:text-base">
                          {faq.question}
                        </h4>
                        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Promo box */}
              <div className="p-6 rounded-2xl border border-[#27272A] bg-[#171717] shadow-sm flex flex-col justify-between">
                <h3 className="font-extrabold text-white text-lg mb-3">
                  Have a project in mind?
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Speak to one of our Next.js architects and developers to get a custom roadmap for your business.
                </p>
                <Link
                  href="/contact"
                  className="btn-shimmer flex items-center justify-center py-3 text-[#0A0A0A] font-bold rounded-btn text-sm bg-white shadow-sm hover:bg-zinc-200"
                >
                  Consult an Architect
                </Link>
              </div>

              {/* Sidebar list */}
              <div className="p-6 rounded-2xl border border-[#27272A] bg-[#171717]">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                  Our Other Services
                </h3>
                <ul className="space-y-3 text-sm">
                  {SERVICE_ITEMS.filter((s) => s.href !== `/services/${params.slug}`).map((s) => (
                    <li key={s.href}>
                      <Link 
                        href={s.href} 
                        className="text-zinc-400 hover:text-white transition-colors flex justify-between items-center py-1 group"
                      >
                        {s.title}
                        <Icons.ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </section>

        <CTA title={service.ctaTitle} description={service.ctaDesc} />
      </main>
      <Footer />
    </>
  );
}
