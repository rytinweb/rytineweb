"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    _hp: "", // Honeypot spam protection
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    "Web Design & Development",
    "SEO Positioning",
    "Graphic Design",
    "Social Optimization",
    "System Maintenance",
    "AI Consultation",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.service) newErrors.service = "Please select a service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._hp) return; // Silent discard for honeypot bot submissions

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      _hp: "",
    });
  };

  return (
    <section className="relative overflow-hidden flex items-center min-h-[calc(100vh-70px)] bg-gradient-to-b from-white via-white to-slate-50 border-b border-slate-200/60 pt-24 pb-16">
      {/* Background Image */}
      <Image
        src="/images/hero-leading-web-design.png"
        alt="Web Design Background"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center select-none pointer-events-none opacity-[0.04] z-0"
      />

      {/* Light Gradients Layer */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "linear-gradient(105deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.4) 100%)",
        }}
      />

      {/* Pulsing Blur Orbs */}
      <div className="absolute animate-orb pointer-events-none top-[5%] left-[2%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-primary/10 filter blur-[80px] md:blur-[130px] opacity-20" />
      <div className="absolute animate-orb pointer-events-none bottom-0 right-0 w-[240px] h-[240px] md:w-[480px] md:h-[480px] rounded-full bg-primary/5 filter blur-[70px] md:blur-[110px] opacity-15" style={{ animationDelay: "2.5s" }} />

      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hero Container */}
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-12 md:py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 border border-slate-200/80 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-slate-600 text-xs md:text-sm font-medium tracking-wide">
                Premium Web Design &amp; Frontend Engineering Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="font-black text-gray-900 leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", lineHeight: 1.1 }}
            >
              Engineered to Scale <br />
              <span className="gradient-text-animated">Bespoke Digital Frontends</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg mb-10 font-light">
              High-performance Next.js architectures, custom design systems, and SEO positioning programmed for fast-growing brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-extrabold rounded-btn text-base transition-all duration-300 bg-primary hover:bg-primary-600 shadow-sm"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-gray-900 font-bold rounded-btn text-base transition-all duration-300 shadow-sm"
              >
                View Our Work
              </Link>
            </div>

            {/* Reviews summary */}
            <div className="flex items-center gap-3">
              <div role="img" aria-label="5 out of 5 stars" className="inline-flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-slate-500 text-sm font-medium">
                Highly-rated digital craftsmanship
              </span>
            </div>
          </motion.div>

          {/* Right Column: Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full"
          >
            <div 
              className="rounded-2xl p-6 md:p-8 relative overflow-hidden bg-white border border-slate-200 shadow-xl"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Honeypot field (hidden for users) */}
                    <input
                      type="text"
                      name="_hp"
                      value={formData._hp}
                      onChange={handleInputChange}
                      className="absolute -top-[9999px] -left-[9999px] w-px h-px opacity-0"
                      tabIndex={-1}
                      aria-hidden="true"
                      autoComplete="off"
                    />

                    {/* Form Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-bold tracking-widest uppercase text-primary">
                          Connect
                        </span>
                      </div>
                      <h2 className="text-gray-900 font-extrabold text-xl leading-tight">
                        Get Your Project Started
                      </h2>
                      <p className="text-slate-500 text-xs mt-1">
                        Launch your platform today
                      </p>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-3.5">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name *"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary bg-white border ${
                              errors.firstName ? "border-red-500 focus:ring-red-400" : "border-slate-200"
                            }`}
                          />
                          {errors.firstName && (
                            <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.firstName}</span>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name *"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary bg-white border ${
                              errors.lastName ? "border-red-500 focus:ring-red-400" : "border-slate-200"
                            }`}
                          />
                          {errors.lastName && (
                            <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.lastName}</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary bg-white border ${
                            errors.email ? "border-red-500 focus:ring-red-400" : "border-slate-200"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.email}</span>
                        )}
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number (Optional)"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary bg-white border border-slate-200"
                        />
                      </div>

                      <div>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary bg-white border ${
                            errors.service ? "border-red-500 focus:ring-red-400" : "border-slate-200"
                          } ${formData.service ? "text-gray-900" : "text-slate-400"}`}
                        >
                          <option value="" className="bg-white" disabled>
                            Select a Service *
                          </option>
                          {servicesList.map((srv) => (
                            <option key={srv} value={srv} className="bg-white text-gray-900">
                              {srv}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <span className="text-[10px] text-red-400 mt-1 block pl-1">{errors.service}</span>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-shimmer w-full py-4 rounded-xl text-white font-extrabold text-sm transition-all duration-300 bg-gradient-to-r from-primary-600 to-primary hover:bg-primary-600 shadow-sm cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending Request..." : "Get In Touch 🚀"}
                      </button>
                    </div>

                    <p className="text-slate-400 text-[10px] text-center mt-4">
                      🔒 100% secure. We respect your privacy. No spam.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <CheckCircle2 className="w-16 h-16 text-primary mb-5 stroke-[1.5]" />
                    <h3 className="text-gray-900 font-extrabold text-2xl mb-3">
                      Thank You!
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-6 font-light">
                      Your request has been received. Our team will contact you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-lg border border-slate-200 text-gray-900 hover:bg-slate-50 transition-colors text-xs font-semibold"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 pointer-events-none">
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Scroll</span>
        <svg
          className="w-5 h-5 animate-scroll-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
