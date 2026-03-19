"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Service {
  iconName: string;
  title: string;
  description: string;
}

interface WhatWeOfferProps {
  title: string;
  services: Service[];
  iconMap: Record<string, LucideIcon>;
}

const WhatWeOffer = memo(function WhatWeOffer({ title, services, iconMap }: WhatWeOfferProps) {
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
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName];
            if (!Icon) return null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-navy/10 p-6 rounded-lg border border-navy/30 hover:border-navy transition-all group"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-navy group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
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

WhatWeOffer.displayName = "WhatWeOffer";

export default WhatWeOffer;
