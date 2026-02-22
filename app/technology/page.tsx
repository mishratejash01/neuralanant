import type { Metadata } from "next";
import AnimateOnScroll from "@/components/animate-on-scroll";
import Architecture from "@/components/architecture";
import TechnicalDeepDive from "@/components/technical-deepdive";
import DemoPreview from "@/components/demo-preview";
import Specifications from "@/components/specifications";
import CTABanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Technology — Neural AI",
  description:
    "Explore Anant 1.0's architecture: persistent memory layer, custom transformer, and retrieval-augmented memory system.",
};

export default function TechnologyPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-16 pt-36 sm:pb-24 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-2 absolute left-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-100/30 blur-[100px]" />
          <div className="blob-3 absolute right-[15%] top-[30%] h-[300px] w-[300px] rounded-full bg-emerald-100/20 blur-[100px]" />
        </div>
        <div className="grid-dot-pattern pointer-events-none absolute inset-0 opacity-50" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">Technology</p>
            <h1 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              How Anant works
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              A deep dive into the architecture, memory pipeline, and technical
              specifications behind India&apos;s first persistent-memory LLM.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <Architecture />
      <TechnicalDeepDive />
      <DemoPreview />
      <Specifications />
      <CTABanner />
    </main>
  );
}
