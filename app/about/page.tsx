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
        <section 
          className="relative flex h-[97vh] min-h-[600px] w-full flex-col justify-center"
          style={{
            backgroundImage: "url('https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/result_0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vcmVzdWx0XzAucG5nIiwiaWF0IjoxNzcxODc3MTc2LCJleHAiOjQ5MjU0NzcxNzZ9.MOmVU8xiCJfogvk23VCtMcBFlf4UWtMg3GHPlF4csKI')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* ALIGNED CONTAINER */}
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
            
            {/* Block-type light badge */}
            <AnimateOnScroll delay="delay-100">
              <div className="mb-6 inline-flex items-center gap-3 bg-[#f6fbfb] px-3.5 py-2 shadow-sm">
                <span className="font-sans text-[14px] font-normal tracking-tight text-black uppercase">
                  About
                </span>
              </div>
            </AnimateOnScroll>

            {/* Main headline */}
            <AnimateOnScroll delay="delay-150">
              <h1 className="font-sans text-[clamp(2.75rem,6vw,5rem)] font-normal leading-[1.05] tracking-tighter text-white">
                The people behind
                <br />
                Neural AI
              </h1>
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll delay="delay-300">
              <p className="mt-6 max-w-lg font-sans text-[17px] font-normal leading-relaxed tracking-tight text-zinc-300">
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
