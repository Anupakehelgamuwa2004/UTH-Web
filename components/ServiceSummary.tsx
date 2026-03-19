"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, TrendingUp } from "lucide-react";

interface ServiceSummaryProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  iconType: "web" | "marketing";
  reverse?: boolean;
}

const ServiceSummary = memo(function ServiceSummary({
  title,
  description,
  features,
  link,
  iconType,
  reverse = false,
}: ServiceSummaryProps) {
  const renderIcon = () => {
    if (iconType === "web") {
      return <Code2 className="w-16 h-16 text-navy" />;
    }
    return <TrendingUp className="w-16 h-16 text-navy" />;
  };

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 ${reverse ? "bg-navy/5" : ""}`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={reverse ? "lg:col-start-2" : ""}
          >
            <div className="mb-6">{renderIcon()}</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              {title}
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={link}
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-navy/80 transition-colors group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}
          >
            <div className="relative w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-navy/20 to-navy/5 rounded-2xl border border-navy/30 flex items-center justify-center">
              {renderIcon()}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ServiceSummary.displayName = "ServiceSummary";

export default ServiceSummary;
