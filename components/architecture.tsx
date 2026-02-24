"use client";

import { useState } from "react";
import AnimateOnScroll from "./animate-on-scroll";

const frames = [
  {
    text: "Anant remembers your past conversations, allowing for fluid and natural chats without ever needing to repeat your background.",
    company: "ANANT",
    model: "CHAT",
    badge: "Conversational AI",
    bgClass: "bg-gradient-to-br from-[#181a1f] via-[#0f1115] to-[#050505]",
    glowColor: "bg-teal-500/20",
  },
  {
    text: "From drafting emails to writing complex code, Anant learns your unique style and adapts to your exact needs over time.",
    company: "ANANT",
    model: "ASSIST",
    badge: "Smart Assistant",
    bgClass: "bg-gradient-to-br from-[#1c1a22] via-[#100f15] to-[#050505]",
    glowColor: "bg-indigo-500/20",
  },
  {
    text: "Builds a secure, private knowledge base from all your interactions. It connects the dots across your data so nothing is ever forgotten.",
    company: "ANANT",
    model: "MEMORY",
    badge: "Infinite Context",
    bgClass: "bg-gradient-to-br from-[#151c1a] via-[#0a110f] to-[#000000]",
    glowColor: "bg-emerald-500/20",
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
        
        {/* Header */}
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
            style={{ transform: `translateX(calc(-${currentIndex} * (80% + 24px)))` }}
          >
            {frames.map((frame, index) => (
              <div 
                key={index} 
                // Added premium borders, rounded corners, and shadow
                className={`relative h-[400px] w-[80%] shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl text-white sm:h-[450px] lg:h-[500px] ${frame.bgClass}`}
              >
                {/* Premium AI Glow Effect */}
                <div className={`absolute -left-[20%] -top-[20%] h-[300px] w-[300px] rounded-full blur-[100px] pointer-events-none ${frame.glowColor}`} />
                <div className={`absolute -right-[10%] -bottom-[10%] h-[250px] w-[250px] rounded-full blur-[80px] pointer-events-none ${frame.glowColor}`} />

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
                
                {/* Technical Accent Corners */}
                <div className="pointer-events-none absolute left-6 top-6 h-4 w-4 border-l-2 border-t-2 border-white/20" />
                <div className="pointer-events-none absolute right-6 top-6 h-4 w-4 border-r-2 border-t-2 border-white/20" />
                <div className="pointer-events-none absolute bottom-6 right-6 h-4 w-4 border-b-2 border-r-2 border-white/20" />

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10">
                  <h3 className="max-w-xl text-xl font-light leading-snug sm:text-2xl lg:text-[1.8rem] text-zinc-100/90">
                    {frame.text}
                  </h3>
                  
                  {/* Footer area - Stacked on mobile (flex-col), row on desktop (sm:flex-row) */}
                  <div className="flex w-full flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                    
                    {/* Logos Area */}
                    <div className="flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] sm:text-sm text-white/80">
                      <span>{frame.company}</span>
                      <div className="h-[1px] w-[15px] bg-white/20 sm:w-[30px]" />
                      <span className="text-[#2dd4bf]">{frame.model}</span>
                    </div>
                    
                    {/* Glassmorphism Badge */}
                    <div className="rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 text-[10px] uppercase tracking-widest text-[#2dd4bf] shadow-inner sm:px-5 sm:py-2.5 sm:text-[11px]">
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
            className={`flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center rounded-full border border-zinc-200 text-xl sm:text-2xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30 ${
              currentIndex === 0 ? "bg-transparent text-zinc-400 border-transparent" : "bg-white hover:bg-zinc-50 hover:shadow-md text-zinc-800"
            }`}
          >
            ←
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentIndex === totalCards - 1}
            className={`flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center rounded-full border border-zinc-200 text-xl sm:text-2xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30 ${
              currentIndex === totalCards - 1 ? "bg-transparent text-zinc-400 border-transparent" : "bg-white hover:bg-zinc-50 hover:shadow-md text-zinc-800"
            }`}
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
