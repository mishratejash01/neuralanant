"use client";

import AnimateOnScroll from "./animate-on-scroll";

const blocks = [
  { w: 60, h: 100, t: "15%", l: "10%" },
  { w: 80, h: 50, t: "5%", r: "20%" },
  { w: 50, h: 50, t: "20%", l: "40%" },
  { w: 40, h: 50, b: "45%", l: "5%" },
  { w: 50, h: 100, b: "35%", r: "15%" },
  { w: 60, h: 100, b: "10%", l: "30%" },
  { w: 60, h: 50, b: "15%", l: "20%" },
  { w: 100, h: 100, b: "5%", l: "10%" },
  { w: 60, h: 50, b: "20%", l: "42%" },
  { w: 100, h: 50, b: "5%", l: "50%" },
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
    <section className="flex min-h-screen flex-col bg-[#f6fbfb] text-[#1a1a1a] lg:flex-row">
      {/* --- Left Side (Sticky on Desktop) --- */}
      <div className="relative flex h-auto w-full items-center justify-center overflow-hidden p-12 py-24 lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:p-16">
        
        {/* Background Blocks */}
        <div className="absolute inset-0 z-0">
          {blocks.map((block, i) => (
            <div
              key={i}
              className="absolute bg-[#d1e8e8]"
              style={{
                width: `${block.w}px`,
                height: `${block.h}px`,
                top: block.t,
                bottom: block.b,
                left: block.l,
                right: block.r,
              }}
            />
          ))}
        </div>

        {/* Left Content */}
        <div className="relative z-10 w-full max-w-lg">
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

      {/* --- Right Side (Scrollable) --- */}
      <div className="w-full px-8 pb-32 pt-8 lg:w-1/2 lg:px-16 lg:pr-32">
        {usps.map((usp, index) => (
          <AnimateOnScroll key={index} delay={`delay-${index * 100}`}>
            <div className={`border-b border-black/10 py-16 ${index === 0 ? "lg:pt-32" : ""}`}>
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
        <div className="h-[20vh]"></div>
      </div>
    </section>
  );
}
