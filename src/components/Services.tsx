"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SERVICE_ITEMS } from "@/constants/data";
import Image from "next/image";

export default function Services() {
  return (
    <section className="relative overflow-hidden py-20 bg-dark-gray border-b border-white/5">
      {/* Background Image overlay */}
      <Image
        src="/blog/web-design-company.png"
        alt="Web Design Background Overlay"
        fill
        sizes="(max-width: 1024px) 100vw, 1280px"
        className="object-cover object-center pointer-events-none opacity-[0.15] select-none z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark-gray/80 pointer-events-none" />

      {/* Glowing background highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 filter blur-[130px] pointer-events-none" />

      {/* Core Container */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Modern Product Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto font-light"
          >
            We engineer clean codebases, scalable design systems, and conversion-optimized frontends.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_ITEMS.map((item, index) => {
            // Dynamically resolve lucide icon component
            const LucideIcon = (Icons as any)[item.iconName] || Icons.HelpCircle;

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group glass card-dark-hover rounded-2xl p-8 block h-full flex flex-col justify-between"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    borderColor: "rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div>
                    {/* Icon container */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: "linear-gradient(135deg, rgba(0, 170, 223, 0.35) 0%, rgba(0, 170, 223, 0.15) 100%)",
                        boxShadow: "0 4px 12px rgba(0, 170, 223, 0.1)",
                      }}
                    >
                      <LucideIcon className="w-7 h-7 stroke-[1.5]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3.5 transition-all duration-200">
                    Learn More
                    <Icons.ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
