import Link from "next/link";
import AnimateOnScroll from "./animate-on-scroll";

export default function Hero() {
  return (
    <div className="bg-[#f6fbfb]">
      <section 
        className="relative flex h-[97vh] min-h-[600px] w-full flex-col justify-center"
        style={{
          backgroundImage: "url('https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/result_0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vcmVzdWx0XzAucG5nIiwiaWF0IjoxNzcxODc3MTc2LCJleHAiOjQ5MjU0NzcxNzZ9.MOmVU8xiCJfogvk23VCtMcBFlf4UWtMg3GHPlF4csKI')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* ALIGNMENT FIX: 
          Uses exactly "max-w-6xl px-6" just like the navbar. 
          This guarantees the "T" in "The AI" aligns perfectly with the "n" in "neural".
        */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          
          {/* Main headline - Letter spacing increased using tracking-normal */}
          <AnimateOnScroll delay="delay-150">
            <h1 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] tracking-normal text-white">
              The AI That
              <br />
              Never Forgets
            </h1>
          </AnimateOnScroll>

          {/* Description - Letter spacing increased slightly using tracking-wide */}
          <AnimateOnScroll delay="delay-300">
            <p className="mt-8 max-w-xl text-[1.1rem] font-medium leading-relaxed tracking-wide text-zinc-300">
              Anant 1.0 is India&apos;s first large language model with persistent
              memory. Every conversation builds on the last.
            </p>
          </AnimateOnScroll>

          {/* CTA buttons */}
          <AnimateOnScroll delay="delay-400">
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-[15px] font-semibold tracking-wide text-black shadow-xl transition-all duration-500 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-2xl hover:shadow-white/10"
              >
                Get Early Access
              </Link>
              <Link
                href="/technology"
                className="group flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-[15px] font-medium tracking-wide text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40"
              >
                Explore Architecture
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </div>
  );
}
