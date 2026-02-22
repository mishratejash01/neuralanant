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
      <section className="relative overflow-hidden px-6 pb-16 pt-36 sm:pb-24 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-1 absolute right-[20%] top-[25%] h-[400px] w-[400px] rounded-full bg-orange-100/25 blur-[100px]" />
          <div className="blob-4 absolute left-[15%] top-[30%] h-[300px] w-[300px] rounded-full bg-blue-100/20 blur-[100px]" />
        </div>
        <div className="grid-dot-pattern pointer-events-none absolute inset-0 opacity-50" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">About</p>
            <h1 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              The people behind Neural AI
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              A world-class team of researchers and engineers from Google, Microsoft,
              Amazon, and DeepMind, united by a shared mission to build India&apos;s AI future.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <Team />
      <AdvisoryBoard />
      <CTABanner />
    </main>
  );
}
