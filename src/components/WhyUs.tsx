"use client";

import { motion } from "framer-motion";
import { VALUE_PROPS } from "@/constants/data";

export default function WhyUs() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Why RYTINWEB
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Next-Gen Digital Systems Built for Growth
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed text-sm md:text-base font-light">
              <p>
                We engineer high-fidelity, bespoke digital solutions that set your brand apart. By merging pixel-perfect visual design with modern performance-optimized code, we deliver systems that capture attention and drive conversions.
              </p>
              <p>
                Our approach is built on transparent collaboration. With flat-rate models, clear weekly milestones, and direct developer communication, we build digital assets that scale alongside your ambitions.
              </p>
              <p>
                No bloated frameworks. No outdated templates. Just modern, fast, and secure frontend architectures optimized to convert visitors into clients from day one.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Value Proposition Cards */}
          <div className="space-y-5">
            {VALUE_PROPS.map((prop, index) => {
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex gap-4 p-5 md:p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                >
                  {/* Icon / Emoji Badge */}
                  <span className="text-3xl shrink-0 mt-0.5 select-none" role="img" aria-label={prop.title}>
                    {prop.icon}
                  </span>

                  {/* Card Content */}
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-base md:text-lg mb-1.5">
                      {prop.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
