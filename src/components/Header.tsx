"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/constants/data";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 h-header-h transition-all duration-300 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md shadow-lg border-b border-[#27272A]"
            : "bg-dark border-b border-[#27272A] shadow-sm"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/logos/logo.png"
              alt="RYTINWEB Logo"
              width={241}
              height={36}
              priority
              className="h-7 md:h-8 lg:h-9 w-auto transition-transform duration-200 group-hover:scale-105 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children;
              const isActive = pathname === item.href || item.children?.some(child => child.href === pathname);

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative py-3"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                        isActive ? "text-white font-bold" : "text-white hover:text-zinc-300"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-2 z-50 min-w-[260px]"
                        >
                          <div className="bg-[#171717]/95 backdrop-blur-md rounded-2xl py-2 border border-[#27272A] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            {item.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className={`block px-5 py-2.5 text-sm transition-all duration-150 font-medium whitespace-nowrap ${
                                    isChildActive
                                      ? "bg-[#222222] text-white font-semibold"
                                      : "text-zinc-400 hover:bg-[#222222] hover:text-white"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-semibold transition-colors duration-200 py-1 group ${
                    isActive ? "text-white font-bold" : "text-white hover:text-zinc-300"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Get In Touch CTA */}
            <Link
              href="/contact"
              className="btn-shimmer hidden lg:inline-flex items-center justify-center px-5 py-1.5 text-[#0A0A0A] font-bold rounded-btn text-sm transition-all duration-200 min-h-[38px] bg-white shadow-md hover:bg-zinc-200"
            >
              Get In Touch
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-white hover:text-zinc-300 transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-header-h bottom-0 z-30 bg-dark border-t border-[#27272A] lg:hidden overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => {
                const hasChildren = !!item.children;
                const isExpanded = mobileExpanded === item.label;
                const isActive = pathname === item.href || item.children?.some(child => child.href === pathname);

                if (hasChildren) {
                  return (
                    <div key={item.label} className="border-b border-[#27272A] pb-4">
                      <button
                        onClick={() => toggleMobileExpanded(item.label)}
                        className={`flex items-center justify-between w-full text-base font-bold transition-colors ${
                          isActive ? "text-white" : "text-zinc-300"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 flex flex-col gap-3 mt-3"
                          >
                            {item.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className={`block py-1 text-sm font-semibold transition-colors ${
                                    isChildActive ? "text-white" : "text-zinc-400 hover:text-white"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block text-base font-bold border-b border-[#27272A] pb-4 transition-colors ${
                      isActive ? "text-white" : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile Details */}
              <div className="flex flex-col gap-4 pt-4 mt-auto">
                <Link
                  href="/contact"
                  className="btn-shimmer flex items-center justify-center w-full py-4 text-[#0A0A0A] font-extrabold rounded-btn text-base bg-white shadow-md hover:bg-zinc-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
