import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Footer from "@/components/Footer";
import { TrendingUp, BarChart3, Users } from "lucide-react";

const marketingSteps = [
  {
    number: "01",
    title: "Discovery & Goal Setting",
    description: "Understanding your brand and defining success metrics",
  },
  {
    number: "02",
    title: "Competitor Analysis",
    description: "Analyzing market landscape and opportunities",
  },
  {
    number: "03",
    title: "Strategy Development",
    description: "Creating comprehensive marketing strategies",
  },
  {
    number: "04",
    title: "Content Creation",
    description: "Producing engaging, high-quality content",
  },
  {
    number: "05",
    title: "Campaign Execution",
    description: "Launching and managing multi-channel campaigns",
  },
  {
    number: "06",
    title: "Performance Tracking",
    description: "Monitoring metrics and analyzing results",
  },
  {
    number: "07",
    title: "Community Management",
    description: "Engaging with your audience and building relationships",
  },
  {
    number: "08",
    title: "Reporting",
    description: "Delivering insights and optimization recommendations",
  },
];

export default function SocialMediaMarketingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero
        title="Social Media Marketing"
        subtitle="Grow Your Brand"
        description="We help businesses build powerful social media presence that drives engagement, builds communities, and generates real results. Let's make your brand unforgettable."
        icon={
          <div className="flex flex-col items-center gap-4">
            <TrendingUp className="w-24 h-24 text-primary-red" />
            <BarChart3 className="w-20 h-20 text-primary-red" />
            <Users className="w-16 h-16 text-primary-red" />
          </div>
        }
      />
      <ProcessSection title="Our Marketing Process" steps={marketingSteps} />
      <PortfolioShowcase />
      <Footer />
    </main>
  );
}
