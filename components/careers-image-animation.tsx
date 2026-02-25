"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CareersImageAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion Scroll Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
  });

  // Animation values mapped to scroll position
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.95]);
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.8], ["0px", "8px"]);
  const filter = useTransform(scrollYProgress, [0.4, 0.9], ["blur(0px)", "blur(8px)"]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.6]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#f6fbfb]">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-0 pb-12 pt-24 sm:px-6">
        <motion.div 
          style={{ scale, borderRadius, filter, opacity: imageOpacity }}
          className="z-0 h-full w-full origin-center overflow-hidden bg-black shadow-2xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
            alt="Neural AI Office" 
            className="h-full w-full object-cover opacity-90 grayscale"
          />
        </motion.div>
      </div>
    </section>
  );
}
