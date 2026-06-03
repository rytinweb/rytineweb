"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-section-y-sm pb-8 border-t border-[#27272A]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logos/logo.png"
                alt="RYTINWEB Logo"
                width={160}
                height={24}
                className="h-7 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed font-light">
              Engineering premium web applications, bespoke design systems, and high-performance digital frontends.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div>
            <h3 className="text-lg font-bold mb-4">What We Do</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link href="/services/web-design-development" className="text-zinc-400 hover:text-white transition-colors py-1 block">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design" className="text-zinc-400 hover:text-white transition-colors py-1 block">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-zinc-400 hover:text-white transition-colors py-1 block">
                  SEO Positioning
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-optimization" className="text-zinc-400 hover:text-white transition-colors py-1 block">
                  Social Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/website-maintenance" className="text-zinc-400 hover:text-white transition-colors py-1 block">
                  System Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/custom-web-development" className="text-zinc-400 hover:text-white transition-colors py-1 block">
                  Custom Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact & Info</h3>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="mailto:info.rytinweb@gmail.com" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  info.rytinweb@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919891321840" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  +91 9891321840
                </a>
              </li>
              <li className="flex gap-2 items-start text-zinc-400">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-0.5 text-xs">Location</p>
                  <p className="leading-relaxed text-zinc-500">Delhi, India</p>
                </div>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-[#27272A] pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} RYTINWEB. All rights reserved.</p>
            <div className="flex gap-1 flex-wrap justify-center font-light">
              <Link href="/privacy-policy" className="text-zinc-500 hover:text-white transition-colors duration-200 px-3 py-2 min-h-[40px] flex items-center">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-zinc-500 hover:text-white transition-colors duration-200 px-3 py-2 min-h-[40px] flex items-center">
                Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="text-zinc-500 hover:text-white transition-colors duration-200 px-3 py-2 min-h-[40px] flex items-center">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
