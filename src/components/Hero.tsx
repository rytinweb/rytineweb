"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    _hp: "", // Honeypot spam protection
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [lastSubmittedData, setLastSubmittedData] = useState<string>("");
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const servicesList = [
    "Web Design & Development",
    "SEO Positioning",
    "Graphic Design",
    "Social Optimization",
    "System Maintenance",
    "Custom Web Development",
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
    const fakeNames = ["test", "testing", "demo", "admin", "user", "abc", "xyz", "sample"];
    const fakePhones = ["0000000000", "1111111111", "1234567890", "9999999999", "9876543210"];
    const disposableDomains = ["mailinator.com", "yopmail.com", "tempmail.com", "guerrillamail.com", "sharklasers.com", "dispostable.com", "getairmail.com"];

    // First Name
    const firstNameTrim = formData.firstName.trim();
    if (!firstNameTrim) {
      newErrors.firstName = "First name is required";
    } else if (firstNameTrim.length < 2) {
      newErrors.firstName = "Must be at least 2 characters";
    } else if (firstNameTrim.length > 50) {
      newErrors.firstName = "Cannot exceed 50 characters";
    } else if (!/^[A-Za-z\s]+$/.test(firstNameTrim)) {
      newErrors.firstName = "Only letters and spaces";
    } else if (fakeNames.includes(firstNameTrim.toLowerCase())) {
      newErrors.firstName = "Enter a valid name";
    }

    // Last Name
    const lastNameTrim = formData.lastName.trim();
    if (!lastNameTrim) {
      newErrors.lastName = "Last name is required";
    } else if (lastNameTrim.length < 2) {
      newErrors.lastName = "Must be at least 2 characters";
    } else if (lastNameTrim.length > 50) {
      newErrors.lastName = "Cannot exceed 50 characters";
    } else if (!/^[A-Za-z\s]+$/.test(lastNameTrim)) {
      newErrors.lastName = "Only letters and spaces";
    } else if (fakeNames.includes(lastNameTrim.toLowerCase())) {
      newErrors.lastName = "Enter a valid name";
    }

    // Email
    const emailTrim = formData.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailDomain = emailTrim.split("@")[1]?.toLowerCase();
    if (!emailTrim) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(emailTrim)) {
      newErrors.email = "Please enter a valid email address";
    } else if (/^(test|demo|example|admin|info)@/.test(emailTrim.toLowerCase()) || emailTrim.endsWith(".temp") || emailTrim.endsWith(".test")) {
      newErrors.email = "Please enter a valid email address";
    } else if (emailDomain && disposableDomains.includes(emailDomain)) {
      newErrors.email = "Disposable emails not allowed";
    }

    // Phone
    const phoneTrim = formData.phone.trim();
    const cleanPhone = phoneTrim.replace(/\D/g, "");
    if (!phoneTrim) {
      newErrors.phone = "Phone number is required";
    } else if (cleanPhone.length !== 10 || /[a-zA-Z]/.test(phoneTrim) || /[^0-9\s+\-()]/.test(phoneTrim)) {
      newErrors.phone = "Must be exactly 10 digits";
    } else if (fakePhones.includes(cleanPhone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Service
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._hp) return;

    setSubmitMessage("");

    // Validate and auto-focus first invalid element
    const nextErrors = validateForm();
    const errorKeys = Object.keys(nextErrors);
    if (errorKeys.length > 0) {
      const firstErrorField = errorKeys[0];
      const formElement = e.currentTarget as HTMLFormElement;
      const input = formElement.elements.namedItem(firstErrorField) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      if (input) {
        input.focus();
      }
      return;
    }

    // Submission Cooldown (10 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setSubmitMessage("Please wait 10 seconds before submitting again.");
      return;
    }

    // Duplicate Submission Prevention
    const currentDataStr = JSON.stringify({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim().replace(/\D/g, ""),
      service: formData.service,
    });
    if (currentDataStr === lastSubmittedData) {
      setSubmitMessage("This inquiry has already been submitted.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("Processing your request...");

    // Brief loading state
    await new Promise((resolve) => setTimeout(resolve, 600));

    const name = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const company = formData.company.trim() || "Not provided";
    const service = formData.service;
    const message = "Inquiry submitted via Hero quick form.";

    const text = `New Website Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nInterested In:\n${service}\n\nProject Details:\n${message}\n\nSent from RYTINWEB Website`;
    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919891321840?text=${encodedMessage}`;

    setLastSubmitTime(now);
    setLastSubmittedData(currentDataStr);
    setIsSubmitting(false);
    setSubmitMessage("Redirecting to WhatsApp...");

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden flex items-center min-h-[calc(100vh-56px)] bg-dark pt-6 pb-6 md:pt-8 md:pb-8 lg:pt-8 lg:pb-8">
      {/* Background Image */}
      <Image
        src="/images/hero-leading-web-design.png"
        alt="Web Design Background"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center select-none pointer-events-none opacity-45 z-0"
      />

      {/* Dark Overlay Layer */}
      <div 
        className="absolute inset-0 pointer-events-none bg-dark/85" 
      />

      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hero Container */}
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-4 md:py-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-3 lg:mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
                Premium Web Design &amp; Frontend Engineering Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="font-black text-white leading-tight mb-2 lg:mb-3"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", lineHeight: 1.1 }}
            >
              Engineered to Scale <br />
              <span className="gradient-text-animated">Bespoke Digital Frontends</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg mb-4 lg:mb-5 font-light">
              High-performance Next.js architectures, custom design systems, and SEO positioning programmed for fast-growing brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4 lg:mb-6">
              <Link
                href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-[#0A0A0A] font-extrabold rounded-btn text-base transition-all duration-300 bg-white hover:bg-zinc-200 shadow-md"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border border-white bg-transparent text-white font-bold rounded-btn text-base hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Reviews summary */}
            <div className="flex items-center gap-3">
              <div role="img" aria-label="5 out of 5 stars" className="inline-flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zinc-400 fill-current" />
                ))}
              </div>
              <span className="text-white/60 text-sm font-medium">
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
              className="rounded-2xl p-4 sm:p-5 lg:p-4 xl:p-6 relative overflow-hidden"
              style={{
                background: "rgba(23, 23, 23, 0.85)",
                backdropFilter: "blur(24px)",
                border: "1px solid #27272A",
                boxShadow: "0 32px 80px rgba(0, 0, 0, 0.6)",
              }}
            >
              <motion.form 
                key="form"
                onSubmit={handleSubmit} 
                className="space-y-2.5 lg:space-y-3"
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
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-xs font-bold tracking-widest uppercase text-white">
                      Connect
                    </span>
                  </div>
                  <h2 className="text-white font-extrabold text-xl leading-tight">
                    Get Your Project Started
                  </h2>
                  <p className="text-white/50 text-xs mt-1">
                    Launch your platform today
                  </p>
                </div>

                {/* Inputs */}
                <div className="space-y-2 lg:space-y-2.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Rahul"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 xl:py-3 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary bg-[#111111]/50 border ${
                          errors.firstName ? "border-red-500 focus:ring-red-400" : "border-[#27272A]"
                        }`}
                      />
                      {errors.firstName && (
                        <span className="text-[10px] text-red-400 mt-1 block pl-1">{errors.firstName}</span>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Sharma"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 xl:py-3 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary bg-[#111111]/50 border ${
                          errors.lastName ? "border-red-500 focus:ring-red-400" : "border-[#27272A]"
                        }`}
                      />
                      {errors.lastName && (
                        <span className="text-[10px] text-red-400 mt-1 block pl-1">{errors.lastName}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 xl:py-3 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-2 focus:ring-white bg-[#111111]/50 border ${
                        errors.email ? "border-red-500 focus:ring-red-400" : "border-[#27272A]"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 mt-1 block pl-1">{errors.email}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 xl:py-3 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-2 focus:ring-white bg-[#111111]/50 border ${
                          errors.phone ? "border-red-500 focus:ring-red-400" : "border-[#27272A]"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-400 mt-1 block pl-1">{errors.phone}</span>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 xl:py-3 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-2 focus:ring-white bg-[#111111]/50 border border-[#27272A]"
                      />
                    </div>
                  </div>

                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 xl:py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-white bg-[#111111]/50 border ${
                        errors.service ? "border-red-500 focus:ring-red-400" : "border-[#27272A]"
                      } ${formData.service ? "text-white" : "text-white/40"}`}
                    >
                      <option value="" className="bg-[#171717]" disabled>
                        Select a Service *
                      </option>
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv} className="bg-[#171717]">
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
                    className="btn-shimmer w-full py-3 lg:py-3.5 xl:py-4 rounded-xl text-[#0A0A0A] font-extrabold text-sm transition-all duration-300 bg-white hover:bg-zinc-200 shadow-md cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending Request..." : "Get In Touch 🚀"}
                  </button>
                </div>

                {submitMessage && (
                  <p className={`text-xs text-center mt-2 ${
                    submitMessage.includes("success") || submitMessage.includes("Redirecting") || submitMessage.includes("Processing")
                      ? "text-green-400"
                      : "text-amber-400"
                  }`}>
                    {submitMessage}
                  </p>
                )}

                <p className="text-white/30 text-[10px] text-center mt-2 lg:mt-3">
                  🔒 100% secure. We respect your privacy. No spam.
                </p>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 pointer-events-none">
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
