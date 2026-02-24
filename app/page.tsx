import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SupportersMarquee from "@/components/supporters-marquee";
import WhyAnant from "@/components/why-anant";
import Architecture from "@/components/architecture";
import ContextWindow from "@/components/context-window";
import CareersCard from "@/components/careers-card"; // <-- Import the new component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f6fbfb]">
      <Navbar />
      <Hero />
      <SupportersMarquee />
      <WhyAnant />
      <Architecture />
      <ContextWindow />
      
      {/* 7. Careers Call-to-action Card */}
      <CareersCard />
    </main>
  );
}
