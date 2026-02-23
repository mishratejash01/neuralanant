import Link from "next/link";
import AnimateOnScroll from "./animate-on-scroll";

export default function Hero() {
  return (
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
          
          {/* Announcement Badge - Sharp edges, off-teal white background, non-bold text */}
          <AnimateOnScroll delay="delay-100">
            <div className="mb-6 inline-flex items-center gap-3 bg-[#f6fbfb] px-3.5 py-2 shadow-sm">
              {/* Subtle spark icon to match the Mistral layout */}
              <svg className="h-4 w-4 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <span className="font-sans text-[14px] font-normal tracking-tight text-black">
                Update: India&apos;s first memory-native LLM.
              </span>
            </div>
          </AnimateOnScroll>

          {/* Main headline */}
          <AnimateOnScroll delay="delay-150">
            <h1 className="font-sans text-[clamp(2.75rem,6vw,5rem)] font-normal leading-[1.05] tracking-tighter text-white">
              The AI That
              <br />
              Never Forgets
            </h1>
          </AnimateOnScroll>

          {/* Description */}
          <AnimateOnScroll delay="delay-300">
            <p className="mt-6 max-w-lg font-sans text-[17px] font-normal leading-relaxed tracking-tight text-zinc-300">
              Anant 1.0 is India&apos;s first large language model with persistent
              memory. Every conversation builds on the last.
            </p>
          </AnimateOnScroll>

          {/* CTA Links - Underlined text + arrow */}
          <AnimateOnScroll delay="delay-400">
            <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-12">
              
              <Link
                href="/contact"
                className="group flex items-center gap-6 border-b border-white pb-2.5 transition-all duration-300 hover:border-white/50"
              >
                <span className="font-sans text-[16px] font-normal tracking-tight text-white">
                  Get in touch
                </span>
                <svg className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-6 border-b border-white pb-2.5 transition-all duration-300 hover:border-white/50"
              >
                <span className="font-sans text-[16px] font-normal tracking-tight text-white">
                  Get Early Access
                </span>
                <svg className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </div>
  );
}
