"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, CheckCircle2, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
    _hp: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._hp) return;

    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessName: "",
      message: "",
      _hp: "",
    });
  };

  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-[#0A0A0A]">
        
        {/* Banner */}
        <section className="bg-[#111111] border-b border-[#27272A] text-white py-16 text-center relative overflow-hidden">
          {/* Pulsing orb removed */}
          <div className="relative z-10">
            <span className="inline-block text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Contact Our Team</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
              Have questions about pricing, timelines, or frontend architecture? Send us a message and we will respond shortly.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-white mb-3">Our Digital Hubs</h2>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  We operate as a modern, design-forward agency with key collaboration hubs in major technology centers.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start p-5 rounded-2xl bg-[#171717] border border-[#27272A] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-sm mb-1">Bengaluru Headquarters</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light">
                      Indiranagar, Bengaluru, Karnataka 560038
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 rounded-2xl bg-[#171717] border border-[#27272A] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-sm mb-1">Mumbai Hub</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light">
                      Bandra Kurla Complex, Mumbai, Maharashtra 400051
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#27272A] space-y-4 text-sm text-zinc-300">
                <a href="mailto:info.rytinweb@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                  info.rytinweb@gmail.com
                </a>
                <a href="tel:+919891321840" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                  +91 9891321840
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#171717] rounded-2xl p-6 md:p-8 border border-[#27272A] shadow-md relative">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      exit={{ opacity: 0, y: -10 }}
                    >
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-zinc-500 mb-1.5 pl-0.5">Name *</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Rahul Sharma"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl text-sm border focus:ring-2 focus:ring-primary bg-[#111111]/50 text-white outline-none transition-all ${
                              errors.name ? "border-red-500 focus:ring-red-400" : "border-[#27272A]"
                            }`}
                          />
                          {errors.name && <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.name}</span>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-zinc-500 mb-1.5 pl-0.5">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="rahul@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl text-sm border focus:ring-2 focus:ring-primary bg-[#111111]/50 text-white outline-none transition-all ${
                              errors.email ? "border-red-500 focus:ring-red-400" : "border-[#27272A]"
                            }`}
                          />
                          {errors.email && <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.email}</span>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-zinc-500 mb-1.5 pl-0.5">Phone (Optional)</label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl text-sm border border-[#27272A] bg-[#111111]/50 text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-zinc-500 mb-1.5 pl-0.5">Business Name</label>
                          <input
                            type="text"
                            name="businessName"
                            placeholder="Your Business Name"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl text-sm border border-[#27272A] bg-[#111111]/50 text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-zinc-500 mb-1.5 pl-0.5">Your Message *</label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project or business requirements..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:ring-2 focus:ring-primary bg-[#111111]/50 text-white outline-none transition-all resize-none ${
                            errors.message ? "border-red-500 focus:ring-red-400" : "border-[#27272A]"
                          }`}
                        />
                        {errors.message && <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.message}</span>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-shimmer w-full py-4 text-[#0A0A0A] font-extrabold rounded-xl text-sm bg-white shadow-md hover:bg-zinc-200 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                      >
                        {isSubmitting ? "Sending message..." : "Send Message"}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <CheckCircle2 className="w-16 h-16 text-white mb-5 stroke-[1.5]" />
                      <h2 className="text-white font-extrabold text-2xl mb-3">Message Sent!</h2>
                      <p className="text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
                        Thank you for reaching out. A RYTINWEB representative will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-6 py-2 rounded-lg border border-zinc-700 text-white hover:bg-white/10 transition-colors text-xs font-semibold"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
