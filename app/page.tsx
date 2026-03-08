import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Footer from "@/components/Footer";
import { Code2 } from "lucide-react";

const defaultProcessSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your business goals and requirements",
  },
  {
    number: "02",
    title: "Planning",
    description: "Strategic planning and roadmap development",
  },
  {
    number: "03",
    title: "Design",
    description: "Creating stunning visual designs and user experiences",
  },
  {
    number: "04",
    title: "Development",
    description: "Building robust, scalable solutions",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality assurance and testing",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deployment and go-live support",
  },
  {
    number: "07",
    title: "Optimization",
    description: "Continuous improvement and performance tuning",
  },
  {
    number: "08",
    title: "Support",
    description: "Ongoing maintenance and support services",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero
        title="Transform Your Digital Presence"
        subtitle="Premium Digital Solutions"
        description="We create stunning websites and powerful marketing strategies that drive results. Experience the difference of premium design and development."
        icon={<Code2 className="w-32 h-32 text-primary-red" />}
      />
      <ServicesGrid />
      <ProcessSection title="Our Process" steps={defaultProcessSteps} />
      <PortfolioShowcase />
      <Footer />
    </main>
  );
}
