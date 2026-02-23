import Link from "next/link";
import AnimateOnScroll from "./animate-on-scroll";

export default function Hero() {
  return (
    // Outer wrapper provides the whitish-teal background for that small 1cm strip at the bottom
    <div className="bg-[#f6fbfb]">
      
      {/* h-[97vh] makes the hero take up 97% of the screen height, leaving a tiny sliver at the bottom. 
        No rounded corners, pure straight edges.
      */}
      <section 
        className="relative flex h-[97vh] min-h-[600px] w-full flex-col items-center justify-center px-6 pt-16"
        style={{
          backgroundImage: "url('https://npletjmaefkrjhlcgsbc.supabase.co/storage/v1/object/sign/design/result_0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EzYjE1MC1mZDRlLTRiZjktYjc0OC1lZGI4YTk0MmM0ZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vcmVzdWx0XzAucG5nIiwiaWF0IjoxNzcxODc3MTc2LCJleHAiOjQ5MjU0NzcxNzZ9.MOmVU8xiCJfogvk23VCtMcBFlf4UWtMg3GHPlF4csKI')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay to ensure white text is perfectly legible over the background image */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Badges */}
          <AnimateOnScroll>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                </span>
                <span className="text-[13px] font-medium text-zinc-200">
                  Launching <span className="font-semibold text-white">May 2027</span>
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/20 px-4 py-2 backdrop-blur-md">
                <svg className="h-3.5 w-3.5 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <span className="text-[11px] font-semibold text-teal-100">
                  IIT Madras Research Park
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Main headline */}
          <AnimateOnScroll delay="delay-150">
            <h1 className="font-display mt-10 text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em] text-white sm:mt-12">
              The AI That
              <br />
              Never Forgets
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-300">
            <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-zinc-300">
              Anant 1.0 is India&apos;s first large language model with persistent
              memory. Every conversation builds on the last.
            </p>
          </AnimateOnScroll>

          {/* CTA buttons */}
          <AnimateOnScroll delay="delay-400">
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-black shadow-xl transition-all duration-500 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-2xl hover:shadow-white/10"
              >
                Get Early Access
              </Link>
              <Link
                href="/technology"
                className="group flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-[15px] font-medium text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40"
              >
                Explore Architecture
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Stats row */}
          <AnimateOnScroll delay="delay-500">
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-3 gap-8">
              {[
                { value: "100%", label: "Built in India" },
                { value: "\u221E", label: "Memory retention" },
                { value: "9+", label: "Languages" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-[13px] font-medium text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
