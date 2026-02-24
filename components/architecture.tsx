"use client";

import { useState } from "react";
import AnimateOnScroll from "./animate-on-scroll";

const frames = [
  {
    text: "Anant remembers your past conversations, allowing for fluid and natural chats without ever needing to repeat your background.",
    company: "ANANT",
    model: "CHAT",
    badge: "Conversational AI",
    bgClass: "bg-[#1e1e1e]",
  },
  {
    text: "From drafting emails to writing complex code, Anant learns your unique style and adapts to your exact needs over time.",
    company: "ANANT",
    model: "ASSIST",
    badge: "Smart Assistant",
    bgClass: "bg-[#2a2a2a]",
  },
  {
    text: "Builds a secure, private knowledge base from all your interactions. It connects the dots across your data so nothing is ever forgotten.",
    company: "ANANT",
    model: "MEMORY",
    badge: "Infinite Context",
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
      className="relative w-full overflow-hidden bg-[#f6fbfb] py-20 sm:py-32" 
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6">
        
        {/* Header - Forced into one line on mobile with a center underline */}
        <AnimateOnScroll>
          <div className="mb-12 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="whitespace-nowrap text-[1.4rem] min-[400px]:text-[1.6rem] font-normal tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-[3rem]">
              Deployed in production.
            </h2>
            {/* Small underline mark in the middle only for mobile */}
            <div className="mt-4 h-[3px] w-12 bg-[#0f766e] mx-auto sm:hidden" />
          </div>
        </AnimateOnScroll>

        {/* Carousel Viewport */}
        <div className="relative w-full overflow-visible">
          <div 
            className="flex w-full gap-6 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
            // Card takes 80% of container + gap (24px for gap-6)
            style={{ transform: `translateX(calc(-${currentIndex} * (80% + 24px)))` }}
          >
            {frames.map((frame, index) => (
              <div 
                key={index} 
                className={`relative h-[400px] w-[80%] shrink-0 overflow-hidden rounded-[4px] text-white sm:h-[450px] lg:h-[500px] ${frame.bgClass}`}
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
                <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10">
                  <h3 className="max-w-xl text-xl font-normal leading-snug sm:text-2xl lg:text-[1.8rem]">
                    {frame.text}
                  </h3>
                  
                  <div className="flex w-full items-center justify-between">
                    {/* Logos Area (Emoji Removed) */}
                    <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.15em] sm:text-sm">
                      <span>{frame.company}</span>
                      <div className="h-[1px] w-[15px] bg-white/30 sm:w-[30px]" />
                      <span>{frame.model}</span>
                    </div>
                    
                    {/* Badge */}
                    <div className="rounded-full border border-white/20 px-3 py-1.5 text-[9px] uppercase tracking-wider sm:px-5 sm:py-2 sm:text-[11px]">
                      {frame.badge}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-8 flex w-full items-center justify-between sm:mt-10">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className={`flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center border-none text-xl sm:text-2xl transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-30 ${
              currentIndex === 0 ? "bg-[#f1f0e8]" : "bg-[#f5eed3] hover:bg-[#e8e6d8]"
            }`}
          >
            ←
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentIndex === totalCards - 1}
            className={`flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center border-none text-xl sm:text-2xl transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-30 ${
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
