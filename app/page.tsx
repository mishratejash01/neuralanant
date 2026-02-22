import Hero from "@/components/hero";
import WhyAnant from "@/components/why-anant";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import CTABanner from "@/components/cta-banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyAnant />
      <HowItWorks />
      <Features />
      <CTABanner />
    </main>
  );
}
