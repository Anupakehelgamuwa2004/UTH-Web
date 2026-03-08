"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[15rem] sm:text-[20rem] lg:text-[25rem] font-black text-gray-900 select-none">
          LET&apos;S TALK
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Let&apos;s Talk
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Sri Lanka Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-2xl font-bold mb-6 text-primary-red">Sri Lanka</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary-red" />
                <span className="text-gray-300">Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-primary-red" />
                <span className="text-gray-300">+94 XX XXX XXXX</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-primary-red" />
                <span className="text-gray-300">info@uthweb.com</span>
              </div>
            </div>
          </motion.div>

          {/* Maldives Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-2xl font-bold mb-6 text-primary-red">Maldives</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary-red" />
                <span className="text-gray-300">Malé, Maldives</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-primary-red" />
                <span className="text-gray-300">+960 XXX XXXX</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-primary-red" />
                <span className="text-gray-300">info@uthweb.com</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h4 className="text-2xl font-bold mb-6 text-primary-red">Follow Us</h4>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary-red hover:border-primary-red transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary-red hover:border-primary-red transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary-red hover:border-primary-red transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary-red hover:border-primary-red transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} UTH Web. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
