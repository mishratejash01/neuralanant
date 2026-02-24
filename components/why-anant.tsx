"use client";

import AnimateOnScroll from "./animate-on-scroll";

// Scattered across the full height (using top percentages instead of bottom)
// so they scroll past naturally as the user scrolls down.
const blocks = [
  { w: 60, h: 100, t: "5%", l: "10%" },
  { w: 80, h: 50, t: "12%", r: "20%" },
  { w: 50, h: 50, t: "20%", l: "40%" },
  { w: 40, h: 50, t: "35%", l: "5%" },
  { w: 50, h: 100, t: "45%", r: "15%" },
  { w: 60, h: 100, t: "60%", l: "30%" },
  { w: 60, h: 50, t: "75%", l: "20%" },
  { w: 100, h: 100, t: "85%", l: "10%" },
  { w: 60, h: 50, t: "90%", l: "42%" },
  { w: 100, h: 50, t: "95%", l: "50%" },
];

const usps = [
  {
    title: "Frontier intelligence, customized to you.",
    desc: "Make your AI your own. Train, distill, fine-tune, and build with state-of-the-art open source models.",
  },
  {
    title: "Enterprise agents with deep context.",
    desc: "Deploy agents that execute, adapt, and deliver real results—with powerful orchestration, tooling, and safety.",
  },
  {
    title: "Self-contained private deployments.",
    desc: "Build privately anywhere—on-premises, cloud, edge, devices, and more—while retaining full control of your data.",
  },
  {
    title: "Deeply engaged solutioning and value delivery.",
    desc: "Hands-on assistance from the world's foremost applied AI scientists across deployment, solutioning, safety, and beyond.",
  },
];

export default function WhyAnant() {
  return (
    <section className="relative flex min-h-screen flex-col bg-[#f6fbfb] text-[#1a1a1a] lg:flex-row">
      
      {/* Background Blocks Container (Scrolls naturally, NOT sticky) */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-0 hidden w-full overflow-hidden lg:block lg:w-1/2">
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

      {/* --- Left Side (Only Text is Sticky) --- */}
      <div className="relative z-10 w-full p-12 lg:w-1/2 lg:p-16 lg:pl-24">
        {/* The sticky wrapper for the text */}
        <div className="flex h-auto items-center justify-start lg:sticky lg:top-[35vh]">
          <div className="w-full max-w-lg">
            <AnimateOnScroll>
              <h1 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Your AI future<br />
                belongs in<br />
                your hands.
                <span className="ml-3 inline-block align-middle text-4xl font-bold text-[#ff5a1f]">
                  ⚑
                </span>
              </h1>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* --- Right Side (Scrollable USPs) --- */}
      <div className="relative z-10 w-full px-8 pb-32 pt-8 lg:w-1/2 lg:px-16 lg:pr-32">
        {usps.map((usp, index) => (
          <AnimateOnScroll key={index} delay={`delay-${index * 100}`}>
            {/* Darker border (black/15) for visible separation */}
            <div className={`border-b border-black/15 py-16 ${index === 0 ? "border-t lg:mt-32" : ""}`}>
              <h2 className="mb-8 max-w-[500px] text-2xl font-medium leading-tight sm:text-3xl">
                {usp.title}
              </h2>
              <div className="flex items-start gap-6">
                <span className="mt-1 text-2xl font-bold leading-none text-[#ff5a1f]">
                  ⇢
                </span>
                <p className="max-w-[480px] text-[1.1rem] leading-relaxed text-[#444]">
                  {usp.desc}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}

        {/* Extra space to demonstrate smooth scrolling to the footer */}
        <div className="h-[10vh]"></div>
      </div>

    </section>
  );
}
