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
      
      const scrollDistance = rect.height - windowHeight;
      const scrolled = -rect.top;
      
      let currentProgress = scrolled / scrollDistance;
      currentProgress = Math.min(Math.max(currentProgress, 0), 1);
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 - (progress * 0.1); 
  const blur = progress * 12;
  const opacity = 1 - (progress * 0.5);
  const borderRadius = progress * 32;

  return (
    /* Changed to mt-12 to shift the image further down the page */
    <section ref={containerRef} className="relative h-[200vh] bg-[#f6fbfb] mt-12">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div 
          style={{ 
            transform: `scale(${scale})`,
            filter: `blur(${blur}px)`,
            opacity: opacity,
            borderRadius: `${borderRadius}px`,
            width: '100%' 
          }}
          className="z-0 h-full w-full origin-center overflow-hidden bg-black shadow-none transition-all duration-75 ease-out"
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
