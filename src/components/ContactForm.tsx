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
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [lastSubmittedData, setLastSubmittedData] = useState<string>("");
  const [submitMessage, setSubmitMessage] = useState<string>("");

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
    const fakeNames = ["test", "testing", "demo", "admin", "user", "abc", "xyz", "sample"];
    const fakePhones = ["0000000000", "1111111111", "1234567890", "9999999999", "9876543210"];
    const disposableDomains = ["mailinator.com", "yopmail.com", "tempmail.com", "guerrillamail.com", "sharklasers.com", "dispostable.com", "getairmail.com"];

    // Name Validation
    const nameTrim = formData.name.trim();
    if (!nameTrim) {
      nextErrors.name = "Name is required";
    } else if (nameTrim.length < 2) {
      nextErrors.name = "Name must be at least 2 characters";
    } else if (nameTrim.length > 50) {
      nextErrors.name = "Name cannot exceed 50 characters";
    } else if (!/^[A-Za-z\s]+$/.test(nameTrim)) {
      nextErrors.name = "Name can only contain letters and spaces";
    } else if (fakeNames.includes(nameTrim.toLowerCase())) {
      nextErrors.name = "Please enter a valid name";
    }

    // Email Validation
    const emailTrim = formData.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailDomain = emailTrim.split("@")[1]?.toLowerCase();
    if (!emailTrim) {
      nextErrors.email = "Email is required";
    } else if (!emailRegex.test(emailTrim)) {
      nextErrors.email = "Please enter a valid email address";
    } else if (/^(test|demo|example|admin|info)@/.test(emailTrim.toLowerCase()) || emailTrim.endsWith(".temp") || emailTrim.endsWith(".test")) {
      nextErrors.email = "Please enter a valid business or personal email address";
    } else if (emailDomain && disposableDomains.includes(emailDomain)) {
      nextErrors.email = "Disposable email addresses are not allowed";
    }

    // Phone Validation
    const phoneTrim = formData.phone.trim();
    const cleanPhone = phoneTrim.replace(/\D/g, "");
    if (!phoneTrim) {
      nextErrors.phone = "Phone number is required";
    } else if (cleanPhone.length !== 10 || /[a-zA-Z]/.test(phoneTrim) || /[^0-9\s+\-()]/.test(phoneTrim)) {
      nextErrors.phone = "Phone number must be exactly 10 digits";
    } else if (fakePhones.includes(cleanPhone)) {
      nextErrors.phone = "Please enter a valid phone number";
    }

    // Message Validation
    const messageTrim = formData.message.trim();
    if (!messageTrim) {
      nextErrors.message = "Message is required";
    } else if (messageTrim.length < 20) {
      nextErrors.message = "Message must be at least 20 characters";
    } else if (messageTrim.length > 1000) {
      nextErrors.message = "Message cannot exceed 1000 characters";
    } else if (/^[0-9\s+\-()]+$/.test(messageTrim)) {
      nextErrors.message = "Message cannot contain only numbers";
    } else if (/^[^a-zA-Z0-9]+$/.test(messageTrim)) {
      nextErrors.message = "Message cannot contain only symbols";
    }

    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._hp) return;

    setSubmitMessage("");

    // Validate and auto-focus first invalid element
    const nextErrors = validate();
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
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim().replace(/\D/g, ""),
      message: formData.message.trim(),
    });
    if (currentDataStr === lastSubmittedData) {
      setSubmitMessage("This inquiry has already been submitted.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("Processing your request...");

    // Brief loading state
    await new Promise((resolve) => setTimeout(resolve, 600));

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const company = formData.company.trim() || "Not provided";
    const service = "General Inquiry";
    const message = formData.message.trim();

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
          <label className="block text-xs font-bold uppercase text-zinc-500 mb-1.5 pl-0.5">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl text-sm border focus:ring-2 focus:ring-primary bg-[#111111]/50 text-white outline-none transition-all ${
              errors.phone ? "border-red-500 focus:ring-red-400" : "border-[#27272A]"
            }`}
          />
          {errors.phone && <span className="text-[10px] text-red-500 mt-1 block pl-1">{errors.phone}</span>}
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

      {submitMessage && (
        <span className={`text-xs block text-center mt-2 ${
          submitMessage.includes("success") || submitMessage.includes("Redirecting") || submitMessage.includes("Processing")
            ? "text-green-400"
            : "text-amber-400"
        }`}>
          {submitMessage}
        </span>
      )}
    </motion.form>
  );
}
