"use client";

import { useState } from "react";
import AnimateOnScroll from "./animate-on-scroll";

const frames = [
  {
    text: "State-of-the-art NLU engine optimized for fluid, non-deterministic dialogue trees and multi-step inference.",
    company: "ANANT",
    model: "NLU",
    badge: "Natural Language",
    bgClass: "bg-[#1e1e1e]",
  },
  {
    text: "Deterministic syntax generation model fine-tuned on vast enterprise architectures for automated code completion.",
    company: "ANANT",
    model: "CODE",
    badge: "Code Generation",
    bgClass: "bg-[#2a2a2a]",
  },
  {
    text: "Agentic framework for multi-tool execution enabling robust data pipelines in air-gapped, isolated environments.",
    company: "ANANT",
    model: "AGENT",
    badge: "Autonomous Systems",
    bgClass: "bg-[#333333]",
  },
];

export default function Architecture() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = frames.length;

  const handleNext = () => {
    if (currentIndex < totalCards - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#f6fbfb] py-24 sm:py-32" 
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Zoomed out max-width container, strictly aligned padding */}
      <div className="mx-auto flex w-full max-w-[85rem] flex-col px-6 lg:px-8">
        
        {/* Header - Non-bold and perfectly aligned to the left edge of the cards */}
        <AnimateOnScroll>
          <div className="mb-12">
            <h2 className="text-4xl font-normal tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[3rem]">
              Deployed in production.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Carousel Viewport (overflow-visible allows next cards to peek through) */}
        <div className="relative w-full overflow-visible">
          <div 
            className="flex w-full gap-6 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
            // Card takes 80% of container + gap (24px for gap-6)
            style={{ transform: `translateX(calc(-${currentIndex} * (80% + 24px)))` }}
          >
            {frames.map((frame, index) => (
              <div 
                key={index} 
                className={`relative h-[450px] w-[80%] shrink-0 overflow-hidden rounded-[4px] text-white sm:h-[500px] ${frame.bgClass}`}
              >
                {/* Technical Grid Overlay */}
                <div 
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px"
                  }}
                />
                
                {/* UI Marker Decoration */}
                <div className="pointer-events-none absolute left-[40%] top-[30%] h-[180px] w-[180px] border border-white/10" />

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">
                  <h3 className="max-w-xl text-2xl font-normal leading-snug sm:text-3xl lg:text-[1.8rem]">
                    {frame.text}
                  </h3>
                  
                  <div className="flex w-full items-center justify-between">
                    {/* Logos Area */}
                    <div className="flex items-center gap-4 text-xs font-bold tracking-[0.15em] sm:text-sm">
                      <span>{frame.company}</span>
                      <div className="h-[1px] w-[20px] bg-white/30 sm:w-[30px]" />
                      <span className="text-[#0f766e]">✨</span>
                      <span>{frame.model}</span>
                    </div>
                    
                    {/* Badge */}
                    <div className="rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-wider sm:px-5 sm:text-[11px]">
                      {frame.badge}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-10 flex w-[80%] items-center justify-between">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className={`flex h-14 w-14 cursor-pointer items-center justify-center border-none text-2xl transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-30 ${
              currentIndex === 0 ? "bg-[#f1f0e8]" : "bg-[#f5eed3] hover:bg-[#e8e6d8]"
            }`}
          >
            ←
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentIndex === totalCards - 1}
            className={`flex h-14 w-14 cursor-pointer items-center justify-center border-none text-2xl transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-30 ${
              currentIndex === totalCards - 1 ? "bg-[#f1f0e8]" : "bg-[#f5eed3] hover:bg-[#e8e6d8]"
            }`}
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
