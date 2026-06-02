"use client";

import { motion } from "framer-motion";
import { PROCESS_ITEMS } from "@/constants/data";

export default function Process() {
  return (
    <section className="py-20 bg-[#0A0A0A] border-b border-[#27272A]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[#A1A1AA] max-w-xl mx-auto"
          >
            A proven, repeatable process that delivers exceptional results every single time.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 relative">
          {/* Connecting Line (Only visible on desktop/tablet) */}
          <div 
            className="hidden md:block absolute top-[64px] left-[15%] right-[15%] h-0.5 bg-[#27272A] pointer-events-none"
            style={{ zIndex: 1 }}
          />

          {PROCESS_ITEMS.map((item, index) => {
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center relative flex flex-col items-center"
                style={{ zIndex: 2 }}
              >
                {/* Outer Circle Container */}
                <div 
                  className="relative inline-flex items-center justify-center w-32 h-32 rounded-full mb-6 bg-[#171717] shadow-sm border border-[#27272A]"
                >
                  {/* Emoji Icon */}
                  <span className="text-5xl select-none" role="img" aria-label={item.title}>
                    {item.icon}
                  </span>

                  {/* Absolute Step Number Badge */}
                  <span 
                    className="absolute -top-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-[#0A0A0A] bg-white shadow-md border-2 border-[#0A0A0A]"
                  >
                    {item.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-black text-white mb-3">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
