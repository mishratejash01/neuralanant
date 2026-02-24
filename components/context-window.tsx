"use client";

import AnimateOnScroll from "./animate-on-scroll";

export default function ContextWindow() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#f6fbfb] py-24 sm:py-32" 
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        
        {/* --- Left Side: Technical Content --- */}
        <div className="flex flex-col justify-center">
          <AnimateOnScroll>
            {/* Tagline */}
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#0d9488]">
              Contextual Architecture
            </p>
            
            {/* Title */}
            <h2 className="mt-5 text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem] leading-[1.1]">
              Beyond the finite<br />
              <span className="text-zinc-500">context window.</span>
            </h2>

            {/* Technical Body Text (Inter Regular) */}
            <div className="mt-8 space-y-6">
              <p className="text-[16px] font-normal leading-relaxed text-zinc-600">
                Traditional large language models are constrained by finite token limits, suffering from "lost in the middle" phenomena, latency spikes, and hard memory resets. Anant completely dismantles this architectural bottleneck.
              </p>
              <p className="text-[16px] font-normal leading-relaxed text-zinc-600">
                By leveraging high-dimensional vector retrieval and a persistent memory graph, Anant synthesizes unbounded conversational histories in real-time. Your enterprise context isn't just temporarily loaded into a window—it is deeply embedded, perpetually retained, and dynamically accessed.
              </p>
            </div>

            {/* Technical Specifications List */}
            <ul className="mt-10 flex flex-col gap-4">
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
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-200 shadow-2xl sm:aspect-square lg:aspect-[4/5]">
              
              {/* Image */}
              <img 
                src="https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/black-white-landscape-with-fog.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vYmxhY2std2hpdGUtbGFuZHNjYXBlLXdpdGgtZm9nLmpwZyIsImlhdCI6MTc3MTk2NjI5MSwiZXhwIjo0OTI1NTY2MjkxfQ.c7viOejXHRGkV9zfewfNBmApPC0-XMCCrO6gi7nQKt8" 
                alt="Infinite landscape representing boundless context" 
                className="h-full w-full object-cover grayscale transition-transform duration-1000 hover:scale-105"
              />
              
              {/* Gradient Overlay for aesthetic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Technical Grid Overlay */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-[0.2]"
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
                
                {/* Visual data blocks */}
                <div className="flex gap-1">
                  {[40, 70, 45, 90, 60, 100].map((height, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-[#2dd4bf]/70" 
                      style={{ height: `${height}px`, opacity: height / 100 }}
                    />
                  ))}
                </div>
              </div>

              {/* Corner accents */}
              <div className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-white/40" />
              <div className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-white/40" />

            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
}
