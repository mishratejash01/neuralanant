import Hero from "@/components/hero";
import SupportersMarquee from "@/components/supporters-marquee";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    // The main wrapper sets the default off-teal background for the whole page
    <main className="flex min-h-screen flex-col bg-[#f6fbfb]">
      <Navbar />
      
      {/* 97vh Hero Section */}
      <Hero />
      
      {/* Scrolling Marquee sits immediately below the Hero */}
      <SupportersMarquee />
      
      {/* Future sections (like the 'Other LLMs forget' section) will go right here! */}
    </main>
  );
}
