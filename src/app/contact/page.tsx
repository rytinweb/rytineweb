"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle2, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      message: "",
      _hp: "",
    });
  };

  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-[#f8f9fa]">
        
        {/* Banner */}
        <section className="bg-dark text-white py-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/20 filter blur-[90px] opacity-35" />
          <div className="relative z-10">
            <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Contact Our Team</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Have questions about pricing, timeline, or SEO? Send us a message and we&apos;ll reply within 24 hours.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-3">Office Locations</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We are proudly Canadian-owned, operating from our main hubs in Ontario to serve clients nationwide.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-gray-150 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-sm mb-1">Toronto Headquarters</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      2967 Dundas St W #718, Toronto, ON M6P 1Z2
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-gray-150 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-sm mb-1">Brampton Branch</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      5 Cherrycrest Drive #202, Brampton, ON L6P 3W4
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200/80 space-y-4 text-sm text-gray-700">
                <a href="tel:647-689-6069" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  647-689-6069
                </a>
                <a href="mailto:support@canadianwebdesigns.ca" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  support@canadianwebdesigns.ca
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-150 shadow-sm relative">
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
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5 pl-0.5">Name *</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl text-sm border focus:ring-2 focus:ring-primary outline-none transition-all ${
                              errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-200"
                            }`}
                          />
                          {errors.name && <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.name}</span>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5 pl-0.5">Phone (Optional)</label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5 pl-0.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your.name@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:ring-2 focus:ring-primary outline-none transition-all ${
                            errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-200"
                          }`}
                        />
                        {errors.email && <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.email}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5 pl-0.5">Your Message *</label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="How can we help you? Please describe your web project."
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:ring-2 focus:ring-primary outline-none transition-all resize-none ${
                            errors.message ? "border-red-500 focus:ring-red-400" : "border-gray-200"
                          }`}
                        />
                        {errors.message && <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.message}</span>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-shimmer w-full py-4 text-white font-extrabold rounded-xl text-sm bg-primary shadow-md hover:bg-primary-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
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
                      <CheckCircle2 className="w-16 h-16 text-primary mb-5 stroke-[1.5]" />
                      <h2 className="text-gray-900 font-extrabold text-2xl mb-3">Message Sent!</h2>
                      <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
                        Thank you for reaching out. A representative from our Canadian Web Designs team will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors text-xs font-semibold"
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
