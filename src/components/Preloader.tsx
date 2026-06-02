"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Count up from 0 to 100
    const duration = 1500; // 1.5 seconds loading time
    const intervalTime = 15;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Small delay before hiding the preloader
          setTimeout(() => setIsLoaded(true), 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }}
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none ${
            isLoaded ? "pointer-events-none" : "pointer-events-auto"
          }`}
          style={{
            background: "#0A0A0A",
          }}
        >
          {/* Grid Background Overlay */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: "60px 60px"
            }}
          />

          {/* Radial mask */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_40%,#0A0A0A_100%)] pointer-events-none" />

          {/* Glow circle */}
          <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />

          {/* Decorative Corner lines */}
          <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-zinc-800 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-zinc-800 to-transparent" />
          <div className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-zinc-800 to-transparent" />
          <div className="absolute bottom-0 right-0 w-px h-24 bg-gradient-to-t from-zinc-800 to-transparent" />

          {/* Loader Content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Spinning Disc Structure */}
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              {/* Outer Ring */}
              <div 
                className="absolute inset-[-14px] rounded-full border border-zinc-800"
                style={{ animation: "shimmer 4s linear infinite" }} // reuse shimmer or rotate
              />
              {/* Middle Dashed Ring */}
              <div 
                className="absolute inset-[-6px] rounded-full border-1.5 border-dashed border-zinc-800/40"
                style={{ animation: "shimmer 8s linear infinite reverse" }}
              />
              {/* Core Disc */}
              <div 
                className="w-full h-full rounded-full bg-[#171717] border-1.5 border-[#27272A] shadow-[0_0_40px_rgba(0,0,0,0.6),_inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center"
                style={{ animation: "pulse 3s ease-in-out infinite" }}
              >
                <Image 
                  src="/logos/icon.png" 
                  alt="RYTINWEB Icon" 
                  width={56}
                  height={56}
                  priority
                  className="object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]" 
                />
              </div>
            </div>

            {/* Brand Title */}
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wider mb-2">
                RYTIN<span className="text-white">WEB</span>
              </h1>
              <p className="text-[10px] md:text-xs text-zinc-500 tracking-[0.22em] uppercase font-semibold">
                Digital Architecture
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-56 flex flex-col items-center gap-2">
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="w-full flex justify-end">
                <span className="text-[10px] text-zinc-600 font-mono">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
