"use client";

import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import ProcessSection from "@/components/ProcessSection";
import { Code2, Palette, Smartphone, Server, Zap, Globe } from "lucide-react";


const webServices = [
  {
    iconName: "Code2",
    title: "Custom Coding",
    description: "Tailored web solutions built from scratch to meet your unique business needs",
  },
  {
    iconName: "Smartphone",
    title: "Responsive Designs",
    description: "Perfect user experience across all devices - desktop, tablet, and mobile",
  },
  {
    iconName: "Server",
    title: "Cloud Hosting",
    description: "Reliable, scalable hosting solutions to keep your website running smoothly",
  },
  {
    iconName: "Palette",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that engage and convert visitors",
  },
  {
    iconName: "Zap",
    title: "Performance Optimization",
    description: "Lightning-fast load times and optimized performance for better SEO",
  },
  {
    iconName: "Globe",
    title: "SEO Integration",
    description: "Built-in SEO best practices to help you rank higher in search results",
  },
];

const webIconMap = {
  Code2,
  Smartphone,
  Server,
  Palette,
  Zap,
  Globe,
};

const webDesignSteps = [
  {
    number: "01",
    title: "Job Card Creation",
    description: "Documenting project requirements and specifications",
  },
  {
    number: "02",
    title: "Sitemap",
    description: "Finalizing site structure and navigation flow",
  },
  {
    number: "03",
    title: "UI Design",
    description: "Creating beautiful, user-friendly interfaces",
  },
  {
    number: "04",
    title: "Development",
    description: "Building responsive, high-performance websites",
  },
  {
    number: "05",
    title: "QA Testing",
    description: "Thorough testing across devices and browsers",
  },
  {
    number: "06",
    title: "Deployment",
    description: "Launching your website to the world",
  },
];

export default function WebDesignPage() {
  return (
    <>
      <Hero
        title="Web Design & Development"
        subtitle="Premium Web Solutions"
        description="We craft exceptional websites that combine stunning design with powerful functionality. From concept to deployment, we deliver digital experiences that captivate and convert."
        iconType="web"
      />
      <WhatWeOffer title="What We Offer" services={webServices} iconMap={webIconMap} />
      <ProcessSection title="Our Web Development Process" steps={webDesignSteps} />
    </>
  );
}
