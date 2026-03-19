"use client";

import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import ProcessSection from "@/components/ProcessSection";
import { TrendingUp, BarChart3, Users, FileText, Target, Megaphone } from "lucide-react";


const marketingServices = [
  {
    iconName: "FileText",
    title: "Content Creation",
    description: "Engaging, high-quality content that resonates with your audience and drives action",
  },
  {
    iconName: "Target",
    title: "Paid Ad Campaigns",
    description: "Strategic paid advertising across platforms to reach your target audience effectively",
  },
  {
    iconName: "BarChart3",
    title: "Analytics",
    description: "Comprehensive data analysis and reporting to measure ROI and optimize performance",
  },
  {
    iconName: "Users",
    title: "Community Management",
    description: "Active engagement and relationship building with your audience across all platforms",
  },
  {
    iconName: "TrendingUp",
    title: "Growth Strategy",
    description: "Data-driven strategies to expand your reach and grow your online presence",
  },
  {
    iconName: "Megaphone",
    title: "Brand Awareness",
    description: "Multi-channel campaigns that increase visibility and strengthen brand recognition",
  },
];

const marketingIconMap = {
  FileText,
  Target,
  BarChart3,
  Users,
  TrendingUp,
  Megaphone,
};

const marketingSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your brand and defining success metrics",
  },
  {
    number: "02",
    title: "Competitor Analysis",
    description: "Analyzing market landscape and opportunities",
  },
  {
    number: "03",
    title: "Strategy",
    description: "Creating comprehensive marketing strategies",
  },
  {
    number: "04",
    title: "Execution",
    description: "Launching and managing multi-channel campaigns",
  },
  {
    number: "05",
    title: "Reporting",
    description: "Delivering insights and optimization recommendations",
  },
];

export default function SocialMediaMarketingPage() {
  return (
    <>
      <Hero
        title="Social Media Marketing"
        subtitle="Grow Your Brand"
        description="We help businesses build powerful social media presence that drives engagement, builds communities, and generates real results. Let's make your brand unforgettable."
        iconType="marketing"
      />
      <WhatWeOffer title="What We Offer" services={marketingServices} iconMap={marketingIconMap} />
      <ProcessSection title="Our Marketing Process" steps={marketingSteps} />
    </>
  );
}
