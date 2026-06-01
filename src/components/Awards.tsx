"use client";

import { motion } from "framer-motion";

export default function Awards() {
  const badges = [
    { src: "/badges/designrush.png", alt: "RYTINWEB featured on DesignRush", height: 50, className: "h-10 md:h-12" },
    { src: "/badges/reliable.png", alt: "RYTINWEB top-rated reliable business badge", height: 60, className: "h-12 md:h-14" },
    { src: "/badges/clever-canadian.png", alt: "RYTINWEB awarded best web agency", height: 60, className: "h-12 md:h-14" },
    { src: "/badges/clutch.png", alt: "RYTINWEB top agency badge on Clutch", height: 40, className: "h-8 md:h-10" },
    { src: "/badges/bbb.png", alt: "RYTINWEB BBB accredited business badge", height: 55, className: "h-12 md:h-14" },
  ];

  return (
    <section className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Subtitle */}
        <p className="text-center text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8">
          Awards & Recognition
        </p>

        {/* Badges Layout */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge.src}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-center justify-center shrink-0"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                className={`${badge.className} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200 select-none pointer-events-auto`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
