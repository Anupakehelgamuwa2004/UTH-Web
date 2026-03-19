"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", service: "", message: "" });
    alert("Thank you! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white">
          Get In Touch
        </h2>
        <p className="text-xl text-white/80">
          Ready to elevate your brand? Let&apos;s start a conversation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-white mb-2 font-medium">
            <User className="inline w-4 h-4 mr-2" />
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
            placeholder="Your name"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-white mb-2 font-medium">
            <Mail className="inline w-4 h-4 mr-2" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
            placeholder="your.email@example.com"
          />
        </motion.div>

        {/* Service Dropdown */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label htmlFor="service" className="block text-white mb-2 font-medium">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
          >
            <option value="" className="bg-black text-white">
              Select a service
            </option>
            <option value="web-design" className="bg-black text-white">
              Web Design & Development
            </option>
            <option value="social-media" className="bg-black text-white">
              Social Media Marketing
            </option>
          </select>
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <label htmlFor="message" className="block text-white mb-2 font-medium">
            <MessageSquare className="inline w-4 h-4 mr-2" />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            type="submit"
            className="w-full bg-white text-[#10104a] px-8 py-4 rounded-md font-bold text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
          >
            Send Message
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}
