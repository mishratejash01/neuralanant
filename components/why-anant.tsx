"use client";

import AnimateOnScroll from "./animate-on-scroll";

// Background blocks scaled down slightly to enhance the "zoomed out" feel
const blocks = [
  { w: 45, h: 80, t: "0%", l: "10%" },
  { w: 60, h: 40, t: "10%", r: "20%" },
  { w: 40, h: 40, t: "20%", l: "40%" },
  { w: 30, h: 40, t: "35%", l: "5%" },
  { w: 40, h: 80, t: "45%", r: "15%" },
  { w: 45, h: 80, t: "55%", l: "30%" },
  { w: 45, h: 40, t: "70%", l: "20%" },
  { w: 75, h: 75, t: "80%", l: "10%" },
  { w: 45, h: 40, t: "90%", l: "42%" },
  { w: 75, h: 40, t: "98%", l: "50%" },
];

const usps = [
  {
    title: "India's First Sovereign AI",
    desc: "Built from the ground up for Bharat. Anant ensures that our nation's data, cultural nuance, and intelligence remain fiercely protected within our borders. True digital independence, zero foreign dependency.",
  },
  {
    title: "Persistent Memory Layer",
    desc: "Ask a question on Monday, and by Tuesday traditional models forget. Anant retains your context across sessions, building a continuous thread of understanding without you repeating yourself.",
  },
  {
    title: "Continuous Knowledge Graph",
    desc: "This isn't retrieval bolted on as an afterthought. Memory is woven deeply into Anant's core architecture from the ground up to truly comprehend your evolving data.",
  },
  {
    title: "Enterprise-Grade Privacy",
    desc: "Your memory graph is securely isolated. Anant ensures your private data and contextual history never leak across tenants, giving you complete peace of mind while maintaining powerful recall.",
  },
];

export default function WhyAnant() {
  return (
    // Applied explicit Inter font family and adjusted base text properties
    <section 
      className="relative bg-[#f6fbfb] text-[#1a1a1a]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Main Content Wrapper - Widened max-w to create a zoomed-out effect */}
      <div className="mx-auto flex max-w-[85rem] flex-col lg:flex-row relative z-10">
        
        {/* --- Left Side (Sticky Text + Bounded Blocks) --- */}
        <div className="relative w-full p-8 pt-16 lg:w-1/2 lg:p-16 lg:pl-20">
          
          {/* Background Blocks Container */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-0 hidden w-full lg:block lg:pb-32 lg:pt-32">
            <div className="relative h-full w-full">
              {blocks.map((block, i) => (
                <div
                  key={i}
                  className="absolute bg-[#d1e8e8]/70"
                  style={{
                    width: `${block.w}px`,
                    height: `${block.h}px`,
                    top: block.t,
                    left: block.l,
                    right: block.r,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Sticky Text Layer */}
          <div className="relative z-10 lg:sticky lg:top-40 lg:pt-12">
            <div className="w-full max-w-md">
              <AnimateOnScroll>
                {/* Font size reduced slightly for the zoomed-out proportion */}
                <h1 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem] text-zinc-900">
                  India&apos;s mind.<br />
                  Unshackled.<br />
                  <span className="text-[#0f766e]">Unstoppable.</span>
                </h1>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        {/* --- Right Side (Scrollable USPs) --- */}
        <div className="w-full px-8 pb-32 pt-8 lg:w-1/2 lg:px-16 lg:pr-24 lg:pt-32">
          {usps.map((usp, index) => (
            <AnimateOnScroll key={index} delay={`delay-${index * 100}`}>
              {/* Separator lines */}
              <div className={`border-b border-black/15 py-10 ${index === 0 ? "border-t" : ""}`}>
                {/* Title size scaled down */}
                <h2 className="mb-3 max-w-[450px] text-lg font-medium leading-tight sm:text-xl">
                  {usp.title}
                </h2>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-lg font-bold leading-none text-[#0f766e]">
                    ⇢
                  </span>
                  {/* Applied font-normal for Inter Regular text, reduced size slightly */}
                  <p className="max-w-[450px] text-[15px] font-normal leading-relaxed text-[#444]">
                    {usp.desc}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
