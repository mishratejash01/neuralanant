"use client";

import Link from "next/link";
import AnimateOnScroll from "./animate-on-scroll";

export default function CareersCard() {
  return (
    <section 
      className="relative w-full bg-[#f6fbfb] py-16 sm:py-24" 
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Container perfectly aligned with the Navbar (max-w-6xl px-6) */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <AnimateOnScroll>
          <div className="relative flex h-[350px] w-full flex-col overflow-hidden rounded-none shadow-xl sm:h-[400px]">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/1920x0.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vMTkyMHgwLmpwZyIsImlhdCI6MTc3MTk2OTk1MCwiZXhwIjo0OTI1NTY5OTUwfQ.CppDDhwSNvo8D9vWj3MWUHcFsGR_D5IdULIA-y_xgYQ" 
                alt="Efficiency Wanted" 
                className="h-full w-full object-cover"
              />
              
              {/* Transparent Light Teal Overlay */}
              <div className="absolute inset-0 bg-teal-400/20" />
              
              {/* Bottom gradient to ensure the white text remains readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Card Content Layer - Pushed to the bottom */}
            <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-12">
              
              <div className="flex w-full flex-col justify-between gap-6 sm:flex-row sm:items-end">
                
                {/* Bottom Left Text */}
                <div className="max-w-lg text-white">
                  <h2 className="text-3xl font-medium tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight text-white">
                    Efficiency Wanted
                  </h2>
                  <p className="mt-4 text-[16px] font-normal tracking-wide text-white/90 sm:text-lg">
                    Engineer the future of intelligence.
                  </p>
                </div>
                
                {/* Bottom Right Link */}
                <div className="flex shrink-0 sm:pb-2">
                  <Link 
                    href="/careers" 
                    className="text-[15px] font-normal text-white underline underline-offset-4 transition-colors hover:text-teal-200"
                  >
                    view open roles &gt;
                  </Link>
                </div>

              </div>

            </div>
            
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
