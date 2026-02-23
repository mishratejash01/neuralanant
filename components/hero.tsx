import Link from "next/link";
import AnimateOnScroll from "./animate-on-scroll";

export default function Hero() {
  return (
    <div className="bg-[#f6fbfb]">
      <section 
        className="relative flex h-[97vh] min-h-[600px] w-full flex-col justify-center"
        style={{
          backgroundImage: "url('https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/result_0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vcmVzdWx0XzAucG5nIiwiaWF0IjoxNzcxODc3MTc2LCJleHAiOjQ5MjU0NzcxNzZ9.MOmVU8xiCJfogvk23VCtMcBFlf4UWtMg3GHPlF4csKI')",
          /* If you meant the IMAGE is too zoomed in, you can change "cover" to "100% 100%" (distorts slightly) or "contain" */
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          
          {/* Main headline - Reduced max size from 6.5rem to 5rem to "zoom out" */}
          <AnimateOnScroll delay="delay-150">
            <h1 className="font-sans text-[clamp(2.75rem,6vw,5rem)] font-normal leading-[1.05] tracking-tighter text-white">
              The AI That
              <br />
              Never Forgets
            </h1>
          </AnimateOnScroll>

          {/* Description - Scaled down from 1.1rem to 1rem (base) to match the new zoom level */}
          <AnimateOnScroll delay="delay-300">
            <p className="mt-6 max-w-lg font-sans text-base font-normal leading-relaxed tracking-tight text-zinc-300">
              Anant 1.0 is India&apos;s first large language model with persistent
              memory. Every conversation builds on the last.
            </p>
          </AnimateOnScroll>

          {/* CTA buttons - slightly smaller padding and text size to match */}
          <AnimateOnScroll delay="delay-400">
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-white px-7 py-3 text-[14px] font-normal tracking-tight text-black shadow-xl transition-all duration-500 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-2xl hover:shadow-white/10"
              >
                Get Early Access
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 py-3 text-[14px] font-normal tracking-tight text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/50"
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
