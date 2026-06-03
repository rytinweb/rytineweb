"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    _hp: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    // Brief loading state
    await new Promise((resolve) => setTimeout(resolve, 600));

    const name = formData.name;
    const email = formData.email;
    const phone = formData.phone || "Not provided";
    const company = formData.company || "Not provided";
    const service = "General Inquiry";
    const message = formData.message;

    const text = `New Website Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nInterested In:\n${service}\n\nProject Details:\n${message}\n\nSent from RYTINWEB Website`;
    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919891321840?text=${encodedMessage}`;

    setIsSubmitting(false);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.form
      key="contact-form"
      onSubmit={handleSubmit}
      className="space-y-4"
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
          <label className="block text-xs font-bold uppercase text-zinc-500 mb-1.5 pl-0.5">Company (Optional)</label>
          <input
            type="text"
            name="company"
            placeholder="Your Company Name"
            value={formData.company}
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
  );
}
