"use client";

import { useState } from "react";
import AnimateOnScroll from "./animate-on-scroll";

const frames = [
  {
    text: "Anant remembers your past conversations, allowing for fluid and natural chats without ever needing to repeat your background.",
    company: "ANANT",
    model: "CHAT",
    badge: "Conversational AI",
    imageUrl: "https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/black-white-view-wild-fox-its-natural-habitat.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vYmxhY2std2hpdGUtdmlldy13aWxkLWZveC1pdHMtbmF0dXJhbC1oYWJpdGF0LmpwZyIsImlhdCI6MTc3MTk2NjI0NywiZXhwIjo0OTI1NTY2MjQ3fQ._q9SiFIWq1-tSwNRK9YIz_fk5I21nkDe9lQ7mov1_ys",
  },
  {
    text: "From drafting emails to writing complex code, Anant learns your unique style and adapts to your exact needs over time.",
    company: "ANANT",
    model: "ASSIST",
    badge: "Smart Assistant",
    imageUrl: "https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/download%20(4).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vZG93bmxvYWQgKDQpLmpwZyIsImlhdCI6MTc3MTk2NjI3MCwiZXhwIjo0OTI1NTY2MjcwfQ.LEwuNyPejSlv8nUpE_cVx8r-sLBQoGJImBtokVx5Log",
  },
  {
    text: "Builds a secure, private knowledge base from all your interactions. It connects the dots across your data so nothing is ever forgotten.",
    company: "ANANT",
    model: "MEMORY",
    badge: "Infinite Context",
    imageUrl: "https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/black-white-landscape-with-fog.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vYmxhY2std2hpdGUtbGFuZHNjYXBlLXdpdGgtZm9nLmpwZyIsImlhdCI6MTc3MTk2NjI5MSwiZXhwIjo0OTI1NTY2MjkxfQ.c7viOejXHRGkV9zfewfNBmApPC0-XMCCrO6gi7nQKt8",
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
                className="relative h-[400px] w-[80%] shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-xl text-white sm:h-[450px] lg:h-[500px]"
              >
                {/* Background Image Frame */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={frame.imageUrl} 
                    alt={`Frame ${index + 1}`} 
                    className="h-full w-full object-cover"
                  />
                  {/* Gradient overlay to ensure text is perfectly readable above the image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
                </div>

                {/* Card Content - Text kept perfectly above the image visual area */}
                <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 text-center sm:text-left">
                  {/* Top Text */}
                  <h3 className="max-w-xl text-lg font-light leading-relaxed sm:text-2xl lg:text-[1.8rem] text-zinc-100 drop-shadow-md">
                    {frame.text}
                  </h3>
                  
                  {/* Footer Area - Middle aligned on mobile (flex-col items-center), Row on desktop */}
                  <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-between">
                    
                    {/* Logos Area - Changed to all white */}
                    <div className="flex items-center justify-center gap-4 text-[11px] font-bold tracking-[0.2em] sm:text-sm text-white">
                      <span>{frame.company}</span>
                      <div className="h-[1px] w-[20px] bg-white/40 sm:w-[30px]" />
                      <span>{frame.model}</span>
                    </div>
                    
                    {/* Glassmorphism Badge - Changed to White, Rectangular Block (rounded-none) */}
                    <div className="rounded-none bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 text-[10px] uppercase tracking-widest text-white sm:px-5 sm:py-2.5 sm:text-[11px]">
                      {frame.badge}
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Grouped at Right Bottom, White Rectangular Blocks */}
        <div className="mt-8 flex w-full items-center justify-end gap-3 sm:mt-10">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className={`flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center rounded-none border text-xl sm:text-2xl transition-all duration-300 ${
              currentIndex === 0 
                ? "bg-zinc-100 border-zinc-200 text-zinc-400 cursor-not-allowed" 
                : "bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-900 shadow-sm"
            }`}
          >
            ←
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentIndex === totalCards - 1}
            className={`flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center rounded-none border text-xl sm:text-2xl transition-all duration-300 ${
              currentIndex === totalCards - 1 
                ? "bg-zinc-100 border-zinc-200 text-zinc-400 cursor-not-allowed" 
                : "bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-900 shadow-sm"
            }`}
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
