import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/animate-on-scroll";
import Team from "@/components/team";
import SupportersMarquee from "@/components/supporters-marquee";

export const metadata: Metadata = {
  title: "About — Neural AI",
  description: "Building the persistent memory layer for frontier AI.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#f6fbfb]">
      {/* ─── ABOUT HERO SECTION ─── */}
      <section 
        className="relative flex min-h-[90vh] flex-col items-center px-5 py-[100px] text-[#111] antialiased sm:pt-32"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        {/* ─── Header Text ─── */}
        <div className="z-10 mt-20 mb-[60px] max-w-[800px] text-center">
          <AnimateOnScroll>
            <h1 className="mb-6 font-sans text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-tight text-black">
              From India to the World.
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-100">
            <p className="mx-auto max-w-2xl text-[1.15rem] font-normal leading-[1.6] text-[#666]">
              Building the persistent memory layer for frontier AI.
            </p>
          </AnimateOnScroll>
        </div>

        {/* ─── Image Container ─── */}
        <AnimateOnScroll delay="delay-200" className="z-10 w-full max-w-[1100px]">
          <div className="group relative w-full overflow-hidden rounded-[4px] bg-black shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
              alt="Visual representation of the AI memory layer and neural networks"
              className="block h-auto w-full opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </AnimateOnScroll>
      </section>

      {/* ─── HORIZONTAL SCROLLING TEAM SECTION ─── */}
      <Team />
      
      {/* ─── SUPPORTERS / INVESTORS MARQUEE ─── */}
      <div className="relative z-20 -mt-16 pb-8 sm:-mt-24">
        <SupportersMarquee />
      </div>

      {/* ─── CUSTOM CAREERS CTA ─── */}
      <section className="flex flex-col items-center justify-center pt-8 pb-20 px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black mb-8">
            Build the future of AI with us.
          </h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay="delay-100">
          <Link 
            href="/careers" 
            className="inline-flex items-center gap-1 text-[1.1rem] font-medium text-black border-b-2 border-black pb-1 transition-opacity hover:opacity-60"
          >
            Open positions &gt;
          </Link>
        </AnimateOnScroll>
      </section>

      {/* ─── EARLY ACCESS RECTANGULAR FRAME ─── */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-32">
        <AnimateOnScroll delay="delay-200">
          <div 
            className="relative w-full overflow-hidden rounded-2xl bg-black px-8 py-20 text-center sm:px-16 sm:py-24 shadow-2xl"
            style={{
              backgroundImage: "url('https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/ursa-major-ursa-minor-constellations.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vdXJzYS1tYWpvci11cnNhLW1pbm9yLWNvbnN0ZWxsYXRpb25zLmpwZyIsImlhdCI6MTc3MjA0Mzc4OSwiZXhwIjo0OTI1NjQzNzg5fQ.jzOI6YH3y6O_YCTVud9W-ko1c6dvNCg6_HNPM-jqYSA')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* Dark overlay to ensure text is highly readable against the stars */}
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
                Experience the frontier.
              </h2>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-zinc-300">
                Join the waitlist to get early access to Anant 1.0 — India&apos;s first memory-native cognitive architecture.
              </p>
              <Link 
                href="/#early-access" 
                className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
