"use client";

import AnimateOnScroll from "./animate-on-scroll";
import Image from "next/image";

const useCases = [
  {
    title: "Multi-Turn Contextual Reasoning",
    tag: "Natural Language",
    desc: "State-of-the-art NLU engine optimized for fluid, non-deterministic dialogue trees. Leverages persistent memory graphs to execute semantic retrieval and dynamic multi-step inference without context window degradation.",
    imageBg: "bg-gradient-to-br from-[#e6f4f1] to-[#cce8e4]", // Light off-teal gradient
    icon: "/window.svg",
    darkIcon: false, // Keeps SVG black for the light background
  },
  {
    title: "Algorithmic Logic Synthesis",
    tag: "Code Generation",
    desc: "Deterministic syntax generation model fine-tuned on vast enterprise architectures. Capabilities include zero-shot automated code completion, AST-level anomaly detection, and cross-framework semantic translation.",
    imageBg: "bg-gradient-to-br from-teal-900 to-teal-950", // Dark teal gradient
    icon: "/file.svg",
    darkIcon: true, // Inverts SVG to white for the dark background
  },
  {
    title: "Enterprise Agentic Orchestration",
    tag: "Autonomous Systems",
    desc: "Agentic framework for multi-tool execution. Seamlessly integrates with internal vector stores via high-dimensional RAG, enabling robust, self-correcting data pipelines in isolated, air-gapped environments.",
    imageBg: "bg-gradient-to-br from-zinc-900 to-black", // Dark zinc gradient
    icon: "/globe.svg",
    darkIcon: true, // Inverts SVG to white for the dark background
  },
];

export default function Architecture() {
  return (
    <section 
      className="relative bg-white py-28 sm:py-36" 
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Zoomed out max-width to match previous sections */}
      <div className="mx-auto max-w-[85rem] px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="max-w-3xl">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-teal-700">
              Architecture
            </h2>
            <h3 className="mt-5 text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem] leading-[1.1]">
              Deployed in Production.
            </h3>
            <p className="mt-6 text-[16px] font-normal leading-relaxed text-zinc-600 max-w-2xl">
              Built for high-performance enterprise environments. Anant&apos;s architecture delivers uncompromised scale, low-latency inferencing, and cryptographically secure isolation across diverse operational workloads.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 3 Image Cards Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <AnimateOnScroll key={index} delay={`delay-${index * 100}`}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50">
                
                {/* Image Frame (Acts as the image area of the card) */}
                <div className={`relative flex h-60 w-full items-center justify-center ${useCase.imageBg} overflow-hidden`}>
                  
                  {/* Category Tag overlay on the image */}
                  <div className={`absolute left-6 top-6 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md border ${
                    useCase.darkIcon 
                      ? "bg-white/10 text-white border-white/10" 
                      : "bg-black/5 text-teal-900 border-teal-900/10"
                  }`}>
                    {useCase.tag}
                  </div>

                  {/* Center Icon representing the use case */}
                  <div className="relative z-10 transition-transform duration-700 group-hover:scale-110">
                    <Image 
                      src={useCase.icon} 
                      alt={useCase.tag} 
                      width={56} 
                      height={56} 
                      className={`opacity-80 transition-opacity duration-300 group-hover:opacity-100 ${
                        useCase.darkIcon ? "invert" : ""
                      }`} 
                    />
                  </div>
                </div>

                {/* Content Frame */}
                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <h4 className="text-xl font-medium text-zinc-900">
                    {useCase.title}
                  </h4>
                  <p className="mt-4 text-[15px] font-normal leading-relaxed text-zinc-600">
                    {useCase.desc}
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
