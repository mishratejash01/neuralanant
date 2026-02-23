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
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* ALIGNED CONTAINER: 
          Uses `max-w-6xl px-6 mx-auto` to perfectly match the navbar's horizontal alignment. 
        */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          
          {/* Main headline - Inter Regular with added letter spacing */}
          <AnimateOnScroll delay="delay-150">
            <h1 className="font-sans text-[clamp(3.5rem,8vw,6.5rem)] font-normal leading-[1.05] tracking-[0.02em] text-white">
              The AI That
              <br />
              Never Forgets
            </h1>
          </AnimateOnScroll>

          {/* Description - Inter Regular */}
          <AnimateOnScroll delay="delay-300">
            <p className="mt-8 max-w-xl font-sans text-[1.1rem] font-normal leading-relaxed tracking-wide text-zinc-300">
              Anant 1.0 is India&apos;s first large language model with persistent
              memory. Every conversation builds on the last.
            </p>
          </AnimateOnScroll>

          {/* CTA buttons - Updated text and set to Inter Regular */}
          <AnimateOnScroll delay="delay-400">
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-[15px] font-normal tracking-wide text-black shadow-xl transition-all duration-500 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-2xl hover:shadow-white/10"
              >
                Get Early Access
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-[15px] font-normal tracking-wide text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                Get in touch
              </Link>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </div>
  );
}
