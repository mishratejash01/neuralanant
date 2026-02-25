"use client";

import { useEffect, useState, useRef } from "react";

export default function CareersImageAnimation() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the container has scrolled up the screen
      const scrollDistance = rect.height - windowHeight;
      const scrolled = -rect.top;
      
      // Calculate progress from 0 to 1
      let currentProgress = scrolled / scrollDistance;
      currentProgress = Math.min(Math.max(currentProgress, 0), 1);
      
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map progress (0 to 1) to CSS values
  const scale = 1 - (progress * 0.05); // Scales from 1 down to 0.95
  const blur = progress * 8; // Blurs from 0px to 8px
  const opacity = 1 - (progress * 0.4); // Fades from 1 down to 0.6
  const borderRadius = progress * 8; // Sharp to slightly rounded

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#f6fbfb]">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-0 pb-12 pt-24 sm:px-6">
        <div 
          style={{ 
            transform: `scale(${scale})`,
            filter: `blur(${blur}px)`,
            opacity: opacity,
            borderRadius: `${borderRadius}px`
          }}
          className="z-0 h-full w-full origin-center overflow-hidden bg-black shadow-2xl transition-all duration-75 ease-out"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
            alt="Neural AI Office" 
            className="h-full w-full object-cover opacity-90 grayscale"
          />
        </div>
      </div>
    </section>
  );
}
