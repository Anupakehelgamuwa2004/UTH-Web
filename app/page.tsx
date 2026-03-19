"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedGrowthIllustration from "@/components/AnimatedGrowthIllustration";
import AnimatedWebIllustration from "@/components/AnimatedWebIllustration";
import AnimatedSocialIllustration from "@/components/AnimatedSocialIllustration";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col justify-center bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-white"
              >
                Elevating Brands through Expert Web Design & Social Media Marketing.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl"
              >
                We transform your digital presence with cutting-edge websites and powerful social media strategies that drive real results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="#services"
                  className="inline-block bg-[#10104a] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#10104a]/80 transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  href="#contact"
                  className="inline-block bg-white text-[#10104a] px-8 py-4 rounded-md font-bold text-lg hover:bg-white/90 transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] lg:h-[600px]">
                <AnimatedGrowthIllustration />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 1: Web Design & Development */}
      <section
        id="services"
        className="min-h-screen w-full flex flex-col justify-center bg-[#10104a] px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full h-[500px] lg:h-[600px]">
                <AnimatedWebIllustration />
              </div>
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
                Web Design & Development
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                We craft exceptional websites that combine stunning design with powerful functionality. From custom coding to responsive designs, we deliver digital experiences that captivate and convert.
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>Custom website development tailored to your brand</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>Responsive designs that work on all devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>Fast-loading, SEO-optimized pages</span>
                </li>
              </ul>
              <Link
                href="/web-design"
                className="inline-flex items-center gap-2 bg-white text-[#10104a] px-8 py-4 rounded-md font-bold text-lg hover:bg-white/90 transition-colors group mt-6"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 2: Social Media Marketing */}
      <section className="min-h-screen w-full flex flex-col justify-center bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
                Social Media Marketing
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                We help businesses build powerful social media presence that drives engagement, builds communities, and generates real results. Let&apos;s make your brand unforgettable.
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#10104a] mt-2 flex-shrink-0"></div>
                  <span>Strategic content creation and planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#10104a] mt-2 flex-shrink-0"></div>
                  <span>Multi-platform campaign management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#10104a] mt-2 flex-shrink-0"></div>
                  <span>Data-driven analytics and reporting</span>
                </li>
              </ul>
              <Link
                href="/social-media-marketing"
                className="inline-flex items-center gap-2 bg-[#10104a] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#10104a]/80 transition-colors group mt-6"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right Side - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] lg:h-[600px]">
                <AnimatedSocialIllustration />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="min-h-screen w-full flex flex-col justify-center bg-[#10104a] px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="max-w-7xl mx-auto w-full">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
