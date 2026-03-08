"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Search,
  BarChart3,
  Palette,
  Globe,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites built with cutting-edge technology",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Perfect experience across all devices",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Powerful online stores that drive sales",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher and get found by your customers",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven decisions for your business",
  },
  {
    icon: Globe,
    title: "Brand Identity",
    description: "Stand out with a unique brand presence",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast websites that convert",
  },
];

const ServicesGrid = memo(function ServicesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-primary-red transition-all group"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-primary-red group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

ServicesGrid.displayName = "ServicesGrid";

export default ServicesGrid;
