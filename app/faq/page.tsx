import type { Metadata } from "next";
import AnimateOnScroll from "@/components/animate-on-scroll";
import FAQ from "@/components/faq";
import CTABanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "FAQ — Neural AI",
  description:
    "Frequently asked questions about Anant 1.0, India's first LLM with persistent memory.",
};

export default function FAQPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-8 pt-36 sm:pb-12 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-4 absolute left-[30%] top-[25%] h-[350px] w-[350px] rounded-full bg-emerald-100/25 blur-[100px]" />
        </div>
        <div className="grid-dot-pattern pointer-events-none absolute inset-0 opacity-50" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">Support</p>
            <h1 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              Everything you need to know about Anant 1.0 and Neural AI.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQ />
      <CTABanner />
    </main>
  );
}
