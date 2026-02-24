"use client";

import AnimateOnScroll from "./animate-on-scroll";

// Background blocks scattered across the full height
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
    <section className="relative bg-[#f6fbfb] text-[#1a1a1a]">
      
      {/* Background Blocks Container (Scrolls naturally) */}
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

      {/* Main Content Wrapper - Added max-w-7xl to "zoom out" horizontally */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-start lg:flex-row">
        
        {/* --- Left Side (Sticky Text) --- */}
        <div className="relative z-10 w-full p-8 lg:w-[45%] lg:p-12 lg:pl-16">
          {/* Sticky wrapper aligns nicely with the first separator row */}
          <div className="lg:sticky lg:top-40 lg:pt-8">
            <div className="w-full max-w-md">
              <AnimateOnScroll>
                {/* Font size slightly reduced for zoom-out effect */}
                <h1 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-5xl">
                  Your AI future<br />
                  belongs in<br />
                  your hands.
                  <span className="ml-3 inline-block align-middle text-3xl font-bold text-[#ff5a1f]">
                    ⚑
                  </span>
                </h1>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        {/* --- Right Side (Scrollable USPs) --- */}
        <div className="relative z-10 w-full px-8 pb-32 pt-8 lg:w-[55%] lg:px-12 lg:pr-16">
          {usps.map((usp, index) => (
            <AnimateOnScroll key={index} delay={`delay-${index * 100}`}>
              {/* Reduced py-16 to py-10 to bring rows closer */}
              <div className={`border-b border-black/15 py-10 ${index === 0 ? "border-t lg:mt-40" : ""}`}>
                {/* Font sizes adjusted down slightly */}
                <h2 className="mb-4 max-w-[450px] text-xl font-medium leading-tight sm:text-2xl">
                  {usp.title}
                </h2>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-xl font-bold leading-none text-[#ff5a1f]">
                    ⇢
                  </span>
                  <p className="max-w-[450px] text-[1rem] leading-relaxed text-[#444]">
                    {usp.desc}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}

          {/* Extra space to demonstrate smooth scrolling to the footer */}
          <div className="h-[15vh]"></div>
        </div>

      </div>
    </section>
  );
}
