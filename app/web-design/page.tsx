import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import { Code2, Palette, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description: "We craft exceptional websites that combine stunning design with powerful functionality. From concept to deployment, we deliver digital experiences that captivate and convert.",
};

const webDesignSteps = [
  {
    number: "01",
    title: "Job Card Creation",
    description: "Documenting project requirements and specifications",
  },
  {
    number: "02",
    title: "Information Gathering",
    description: "Collecting all necessary content and assets",
  },
  {
    number: "03",
    title: "Sitemap Approval",
    description: "Finalizing site structure and navigation flow",
  },
  {
    number: "04",
    title: "UI Design",
    description: "Creating beautiful, user-friendly interfaces",
  },
  {
    number: "05",
    title: "Content Write-Up",
    description: "Crafting compelling copy and messaging",
  },
  {
    number: "06",
    title: "Development",
    description: "Building responsive, high-performance websites",
  },
  {
    number: "07",
    title: "QA Testing",
    description: "Thorough testing across devices and browsers",
  },
  {
    number: "08",
    title: "Final Deployment",
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
        icon={
          <div className="flex flex-col items-center gap-4">
            <Code2 className="w-24 h-24 text-primary-red" />
            <Palette className="w-20 h-20 text-primary-red" />
            <Smartphone className="w-16 h-16 text-primary-red" />
          </div>
        }
      />
      <ProcessSection title="Our Web Design Process" steps={webDesignSteps} />
      <PortfolioShowcase />
    </>
  );
}
