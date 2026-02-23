import Link from "next/link";
import AnimateOnScroll from "./animate-on-scroll";

export default function Hero() {
  return (
    <section className="grain relative min-h-screen overflow-hidden bg-gradient-to-b from-teal-50/60 via-[#f6fbfb] to-white px-6 pb-32 pt-32 sm:pb-40 sm:pt-40">
      {/* ── Colorful animated gradient blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue blob — top left */}
        <div className="blob-1 absolute -left-[10%] -top-[15%] h-[700px] w-[700px] rounded-full bg-blue-400/25 blur-[140px]" />
        {/* Orange/amber blob — top right */}
        <div className="blob-2 absolute -right-[5%] -top-[10%] h-[600px] w-[600px] rounded-full bg-orange-300/25 blur-[130px]" />
        {/* Green/teal blob — bottom left */}
        <div className="blob-3 absolute -bottom-[15%] left-[5%] h-[550px] w-[550px] rounded-full bg-emerald-300/20 blur-[120px]" />
        {/* Rose/pink blob — center right */}
        <div className="blob-4 absolute right-[15%] top-[40%] h-[500px] w-[500px] rounded-full bg-rose-300/20 blur-[130px]" />
        {/* Subtle violet accent — center */}
        <div className="blob-2 absolute left-[35%] top-[20%] h-[400px] w-[400px] rounded-full bg-violet-300/15 blur-[120px]" />
      </div>

      {/* Grid dot pattern */}
      <div className="grid-dot-pattern pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badges */}
        <AnimateOnScroll>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/80 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[13px] font-medium text-zinc-600">
                Launching <span className="font-semibold text-zinc-900">May 2027</span>
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/80 px-4 py-2 backdrop-blur-sm">
              <svg className="h-3.5 w-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              <span className="text-[11px] font-semibold text-amber-800">
                IIT Madras Research Park
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main headline */}
        <AnimateOnScroll delay="delay-150">
          <h1 className="font-display mt-12 text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em] text-zinc-900 sm:mt-14">
            The AI That
            <br />
            Never Forgets
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-300">
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-500">
            Anant 1.0 is India&apos;s first large language model with persistent
            memory. Every conversation builds on the last.
          </p>
        </AnimateOnScroll>

        {/* CTA buttons */}
        <AnimateOnScroll delay="delay-400">
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-zinc-900 px-8 py-4 text-[15px] font-semibold text-white shadow-xl shadow-zinc-900/10 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-zinc-900/20"
            >
              Get Early Access
            </Link>
            <Link
              href="/technology"
              className="group flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/80 px-8 py-4 text-[15px] font-medium text-zinc-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md"
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
          <div className="mx-auto mt-24 grid max-w-lg grid-cols-3 gap-8">
            {[
              { value: "100%", label: "Built in India" },
              { value: "\u221E", label: "Memory retention" },
              { value: "9+", label: "Languages" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-zinc-900">{stat.value}</p>
                <p className="mt-2 text-[13px] text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
