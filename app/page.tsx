import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-[#050E15]">
      <Navbar />
      <Hero />
      {/* Placeholder — scroll down to test the Dynamic Island */}
      <div className="h-screen bg-[#050E15] flex items-center justify-center">
        <p className="text-white/20 text-sm tracking-widest uppercase">
          More sections coming soon
        </p>
      </div>
    </main>
  );
}
