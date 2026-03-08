"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold">
            UTH WEB
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-primary-red transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/web-design"
              className="text-white hover:text-primary-red transition-colors font-medium"
            >
              Web Design & Development
            </Link>
            <Link
              href="/social-media-marketing"
              className="text-white hover:text-primary-red transition-colors font-medium"
            >
              Social Media Marketing
            </Link>
            <Link
              href="#contact"
              className="bg-primary-red text-white px-6 py-2.5 rounded-md font-bold hover:bg-red-600 transition-colors"
            >
              TALK TO US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-4"
          >
            <Link
              href="/"
              className="block text-white hover:text-primary-red transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/web-design"
              className="block text-white hover:text-primary-red transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Web Design & Development
            </Link>
            <Link
              href="/social-media-marketing"
              className="block text-white hover:text-primary-red transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Social Media Marketing
            </Link>
            <Link
              href="#contact"
              className="block bg-primary-red text-white px-6 py-2.5 rounded-md font-bold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TALK TO US
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
