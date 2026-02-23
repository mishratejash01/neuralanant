import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SupportersMarquee from "@/components/supporters-marquee";

// Keep all your other imports here!
// import WhyAnant from "@/components/why-anant";
// import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f6fbfb]">
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Marquee Section */}
      <SupportersMarquee />
      
      {/* 👇 DO NOT REMOVE YOUR REMAINING COMPONENTS 👇 */}
      {/* All your other sections like "Other LLMs forget. Anant remembers." stay safely right here! */}
      
      {/* <WhyAnant />
      <Architecture />
      <Footer /> 
      */}
      
    </main>
  );
}
