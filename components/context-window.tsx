"use client";

import AnimateOnScroll from "./animate-on-scroll";

export default function ContextWindow() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#f6fbfb] py-24 sm:py-32" 
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Aligned exactly with the Navbar boundaries */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        
        {/* --- Left Side: Technical Content --- */}
        <div className="flex flex-col justify-center">
          <AnimateOnScroll>
            {/* Title (Tagline removed as requested) */}
            <h2 className="text-4xl font-normal tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[3.25rem] leading-[1.1]">
              Beyond the finite<br />
              <span className="text-zinc-500">context window.</span>
            </h2>

            {/* Technical Body Text (Inter Regular) */}
            <div className="mt-8 space-y-6">
              <p className="text-[16px] font-normal leading-relaxed text-[#444]">
                Traditional large language models are constrained by finite token limits, suffering from "lost in the middle" phenomena, latency spikes, and hard memory resets. Anant completely dismantles this architectural bottleneck.
              </p>
              <p className="text-[16px] font-normal leading-relaxed text-[#444]">
                By leveraging high-dimensional vector retrieval and a persistent memory graph, Anant synthesizes unbounded conversational histories in real-time. Your enterprise context isn't just temporarily loaded into a window—it is deeply embedded, perpetually retained, and dynamically accessed.
              </p>
            </div>

            {/* Technical Specifications List */}
            <ul className="mt-10 flex flex-col gap-5">
              {[
                "O(1) semantic retrieval latency",
                "Zero context degradation over time",
                "Cryptographically isolated state management"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-[#0d9488]/10">
                    {/* Small sharp square icon */}
                    <div className="h-2 w-2 bg-[#0d9488]" />
                  </div>
                  <span className="text-[15px] font-normal tracking-wide text-zinc-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>

        {/* --- Right Side: Image Frame --- */}
        <div className="relative w-full">
          <AnimateOnScroll delay="delay-200">
            {/* The outer frame container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/20 shadow-2xl sm:aspect-square lg:aspect-[4/5]">
              
              {/* Image - Updated to the Constellation image */}
              <img 
                src="https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/ursa-major-ursa-minor-constellations.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vdXJzYS1tYWpvci11cnNhLW1pbm9yLWNvbnN0ZWxsYXRpb25zLmpwZyIsImlhdCI6MTc3MTk2OTI0MiwiZXhwIjo0OTI1NTY5MjQyfQ.2aw3S2GVYdZ0FYKod8RU6kllPKPIeoWwre11IKvL4d0" 
                alt="Infinite landscape representing boundless context" 
                className="h-full w-full object-cover grayscale transition-transform duration-1000 hover:scale-105"
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Technical Grid Overlay */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px"
                }}
              />

              {/* UI Overlay Elements inside the frame */}
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse bg-[#2dd4bf]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">System Active</span>
                  </div>
                  <div className="text-xl font-light tracking-tight text-white/90">
                    Infinite Memory Base
                  </div>
                </div>
              </div>

              {/* Technical Corner Accents */}
              <div className="pointer-events-none absolute left-6 top-6 h-4 w-4 border-l-2 border-t-2 border-white/40" />
              <div className="pointer-events-none absolute right-6 top-6 h-4 w-4 border-r-2 border-t-2 border-white/40" />
              <div className="pointer-events-none absolute bottom-6 right-6 h-4 w-4 border-b-2 border-r-2 border-white/40" />

            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
}
