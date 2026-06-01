"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-section-y-sm pb-8 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">RYTINWEB</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed font-light">
              Engineering premium web applications, bespoke design systems, and high-performance digital frontends.
            </p>
            <div className="flex gap-2 flex-wrap">
              <a
                href="https://facebook.com/rytinweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/rytinweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div>
            <h3 className="text-lg font-bold mb-4">What We Do</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link href="/services/web-design-development" className="text-gray-300 hover:text-primary transition-colors py-1 block">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design" className="text-gray-300 hover:text-primary transition-colors py-1 block">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-gray-300 hover:text-primary transition-colors py-1 block">
                  SEO Positioning
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-optimization" className="text-gray-300 hover:text-primary transition-colors py-1 block">
                  Social Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/website-maintenance" className="text-gray-300 hover:text-primary transition-colors py-1 block">
                  System Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/ai-consultation" className="text-gray-300 hover:text-primary transition-colors py-1 block">
                  AI Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact & Info</h3>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="mailto:hello@rytinweb.com" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  hello@rytinweb.com
                </a>
              </li>
              <li className="flex gap-2 items-start text-gray-300">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-0.5 text-xs">Global Presence</p>
                  <p className="leading-relaxed text-gray-400">San Francisco • Toronto • London</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Hub Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Locations</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-sm font-light">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug} className={area.highlight ? "col-span-2 mb-1" : ""}>
                  <Link
                    href={`/locations/${area.slug}`}
                    className={`block py-1 hover:text-white transition-colors ${
                      area.highlight 
                        ? "text-primary hover:text-primary-400 font-bold flex items-center" 
                        : "text-gray-300"
                    }`}
                  >
                    {area.highlight ? `${area.name} Hub ↗` : area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} RYTINWEB. All rights reserved.</p>
            <div className="flex gap-1 flex-wrap justify-center font-light">
              <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200 px-3 py-2 min-h-[40px] flex items-center">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-200 px-3 py-2 min-h-[40px] flex items-center">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
