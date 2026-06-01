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
              Why Canadian Web Designs
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Canada&apos;s Most Trusted Web Design &amp; Digital Marketing Agency
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed text-sm md:text-base">
              <p>
                Since 2014, Canadian Web Designs has been the web design company Canada&apos;s small and medium businesses rely on to build a powerful online presence. From Toronto to Vancouver, Brampton to Calgary, our team of 25+ designers, developers, and marketers delivers websites that don&apos;t just look great — they drive real revenue.
              </p>
              <p>
                We believe every Canadian business deserves a professional website at an affordable price. That&apos;s why we offer transparent, flat-rate pricing with no hidden fees and no long-term contracts. Whether you need a brand-new website, an SEO overhaul, or a complete digital marketing strategy, we have a solution that fits your budget and your market.
              </p>
              <p>
                As a full-service web design agency, Canada-wide, our process starts with understanding your business goals, your industry, and your customers. We then craft a custom website strategy built around converting visitors into leads — not just a pretty design. Every website we build is mobile-first, fast-loading, and optimized for search engines from day one.
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
