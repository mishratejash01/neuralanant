import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SupportersMarquee from "@/components/supporters-marquee";
import WhyAnant from "@/components/why-anant";
import Architecture from "@/components/architecture";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f6fbfb]">
      <Navbar />
      
      {/* 1. Hero: The main introduction */}
      <Hero />
      
      {/* 2. Marquee: Social proof/Supporters */}
      <SupportersMarquee />
      
      {/* 3. Why Anant: "Other LLMs forget. Anant remembers." */}
      <WhyAnant />

      {/* 4. Architecture: The technical breakdown */}
      <Architecture />

      {/* 5. FAQ: Addressing common questions */}
      <FAQ />
    </main>
  );
}
