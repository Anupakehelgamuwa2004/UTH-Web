"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, TrendingUp, Palette, Smartphone, BarChart3, Users } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  iconType?: "home" | "web" | "marketing";
}

const Hero = memo(function Hero({ title, subtitle, description, iconType = "home" }: HeroProps) {
  const renderIcon = () => {
    switch (iconType) {
      case "web":
        return (
          <div className="flex flex-col items-center gap-4">
            <Code2 className="w-24 h-24 text-navy" />
            <Palette className="w-20 h-20 text-navy" />
            <Smartphone className="w-16 h-16 text-navy" />
          </div>
        );
      case "marketing":
        return (
          <div className="flex flex-col items-center gap-4">
            <TrendingUp className="w-24 h-24 text-navy" />
            <BarChart3 className="w-20 h-20 text-navy" />
            <Users className="w-16 h-16 text-navy" />
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center gap-8">
            <Code2 className="w-32 h-32 text-navy" />
            <TrendingUp className="w-32 h-32 text-navy" />
          </div>
        );
    }
  };
  return (
    <section className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-navy font-bold text-sm uppercase tracking-wider"
            >
              {subtitle}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                className="inline-block bg-navy text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-navy/80 transition-colors"
              >
                GET STARTED
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-navy/20 to-navy/5 rounded-2xl border border-navy/30 flex items-center justify-center">
              {renderIcon()}
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-navy/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
