"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";

const PortfolioShowcase = memo(function PortfolioShowcase() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with advanced features",
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      description: "Modern, responsive corporate identity website",
    },
    {
      title: "Mobile App Landing",
      category: "UI/UX Design",
      description: "Stunning landing page for mobile application",
    },
  ];

  const strategies = [
    {
      title: "Content Strategy",
      description: "Engaging content that drives engagement and conversions",
    },
    {
      title: "Social Media Campaigns",
      description: "Targeted campaigns that reach your ideal audience",
    },
    {
      title: "Brand Growth",
      description: "Strategies that build lasting brand recognition",
    },
  ];

  return (
    <>
      {/* Recently Completed Projects */}
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
              Recently Completed Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-primary-red transition-all"
              >
                <div className="h-64 bg-gradient-to-br from-primary-red/20 to-primary-red/5 flex items-center justify-center">
                  <ExternalLink className="w-16 h-16 text-primary-red/50 group-hover:text-primary-red transition-colors" />
                </div>
                <div className="p-6">
                  <div className="text-primary-red text-sm font-bold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies That Drive Sales */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              Strategies That Drive Sales
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-primary-red transition-all group"
              >
                <TrendingUp className="w-12 h-12 text-primary-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{strategy.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {strategy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

PortfolioShowcase.displayName = "PortfolioShowcase";

export default PortfolioShowcase;
