import type { Metadata } from "next";
import AnimateOnScroll from "@/components/animate-on-scroll";
import Team from "@/components/team";
import AdvisoryBoard from "@/components/advisory-board";
import CTABanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "About — Neural AI",
  description:
    "Meet the team behind Anant 1.0 — researchers and engineers from leading AI labs building India's AI future.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[#f6fbfb]">
        <section className="relative flex min-h-[60vh] w-full flex-col justify-center py-32">
          {/* Subtle grid texture to give it depth while remaining light and clean */}
          <div className="grid-dot-pattern pointer-events-none absolute inset-0 opacity-40" />

          {/* ALIGNED CONTAINER */}
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
            
            {/* Block-type light badge */}
            <AnimateOnScroll delay="delay-100">
              <div className="mb-6 inline-flex items-center gap-3 bg-white px-3.5 py-2 shadow-sm border border-zinc-100">
                <span className="font-sans text-[14px] font-normal tracking-tight text-zinc-600 uppercase">
                  About
                </span>
              </div>
            </AnimateOnScroll>

            {/* Main headline */}
            <AnimateOnScroll delay="delay-150">
              <h1 className="font-sans text-[clamp(2.75rem,6vw,5rem)] font-normal leading-[1.05] tracking-tighter text-black">
                The people behind
                <br />
                Neural AI
              </h1>
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll delay="delay-300">
              <p className="mt-6 max-w-2xl font-sans text-[17px] font-normal leading-relaxed tracking-tight text-zinc-600">
                A world-class team of researchers and engineers from Google, Microsoft,
                Amazon, and DeepMind, united by a shared mission to build India&apos;s AI future.
              </p>
            </AnimateOnScroll>

          </div>
        </section>
      </div>

      <Team />
      <AdvisoryBoard />
      <CTABanner />
    </main>
  );
}
