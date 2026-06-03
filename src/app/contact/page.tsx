import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact Web Development Agency Delhi | RYTINWEB",
  description: "Get in touch with RYTINWEB, Delhi's leading remote-first web design & development agency. Consult our Next.js architects for a custom roadmap.",
  alternates: {
    canonical: "https://rytinweb.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <SchemaMarkup type="ContactPage" />
      <main className="pt-header-h min-h-screen bg-[#0A0A0A]">
        
        {/* Banner */}
        <section className="bg-[#111111] border-b border-[#27272A] text-white py-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Contact Our Team</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
              Have questions about pricing, timelines, or frontend architecture? Send us a message and we will respond shortly.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-white mb-3">Delhi Headquarters</h2>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  RYTINWEB is a remote-first web development agency based in Delhi, India. We design and engineer premium web architectures for fast-growing brands.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start p-5 rounded-2xl bg-[#171717] border border-[#27272A] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-sm mb-1">Delhi Headquarters</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light">
                      Delhi, India (Remote-First)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#27272A] space-y-4 text-sm text-zinc-300">
                <a href="mailto:info.rytinweb@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                  info.rytinweb@gmail.com
                </a>
                <a href="tel:+919891321840" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                  +91 9891321840
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#171717] rounded-2xl p-6 md:p-8 border border-[#27272A] shadow-md relative">
                <ContactForm />
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
