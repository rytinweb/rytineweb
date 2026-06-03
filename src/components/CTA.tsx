"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CTA({ title, description }: { title?: string; description?: string }) {
  const checkmarks = [
    "No long-term contracts",
    "Transparent pricing",
    "Next-gen engineering",
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-dark">
      {/* Background Image Overlay */}
      <Image
        src="/blog/seo-services.png"
        alt="SEO Growth Graph Overlay"
        fill
        sizes="(max-width: 1024px) 100vw, 1280px"
        className="object-cover object-center pointer-events-none opacity-[0.18] select-none z-0"
      />

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[#0A0A0A]/85" 
      />

      {/* Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Core Container */}
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4"
        >
          Get Started Today
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-black text-white mb-6 leading-tight"
          style={{ fontSize: "clamp(2rem, 5.5vw, 3.2rem)", lineHeight: 1.15 }}
        >
          {title ? (
            title
          ) : (
            <>
              Ready to Scale <br />
              <span className="gradient-text-animated">Your Platform?</span>
            </>
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          {description || "Connect with our design engineers to get a custom development roadmap for your application."}
        </motion.p>

        {/* Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-[#0A0A0A] font-black rounded-btn text-lg transition-all duration-300 bg-white hover:bg-zinc-200 shadow-md"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="mailto:info.rytinweb@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white bg-transparent text-white font-bold rounded-btn text-lg hover:bg-white/10 transition-all duration-300"
          >
            Email Us
          </a>
        </motion.div>

        {/* Trust Badges Checkmarks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12 text-sm text-white/50"
        >
          {checkmarks.map((text) => (
            <span key={text} className="flex items-center gap-2 font-medium">
              <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-bold">
                ✓
              </span>
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
