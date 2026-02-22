import AnimateOnScroll from "./animate-on-scroll";

export default function WhyAnant() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="section-divider absolute left-0 right-0 top-0" />

      {/* Subtle background blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-3 absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Why Anant
            </p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Other LLMs forget.{" "}
              <span className="text-zinc-400">Anant remembers.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              Today&apos;s language models start every conversation from scratch.
              Anant changes that with memory built into its core.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimateOnScroll delay="delay-100">
            <div className="h-full rounded-3xl border border-zinc-100 bg-gradient-to-br from-zinc-50/80 to-white p-10">
              <h3 className="text-xl font-semibold text-zinc-900">The memory gap in AI</h3>
              <div className="mt-6 space-y-5">
                <p className="text-[15px] leading-[1.8] text-zinc-500">
                  Ask a question on Monday, and by Tuesday it&apos;s gone. There&apos;s no continuity, no context, no memory of who you are or what you&apos;ve discussed.
                </p>
                <p className="text-[15px] leading-[1.8] text-zinc-500">
                  Anant is built with a <span className="font-semibold text-zinc-900">persistent memory layer</span> at its core — retaining context across sessions, learning your preferences, and building deeper understanding over time.
                </p>
                <p className="text-[15px] leading-[1.8] text-zinc-500">
                  This isn&apos;t retrieval bolted on as an afterthought. Memory is woven into Anant&apos;s architecture from the ground up.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-200">
            <div className="space-y-5">
              {/* Traditional */}
              <div className="rounded-3xl border border-zinc-100 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100">
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">Traditional LLM</p>
                </div>
                <div className="mt-5 space-y-2.5">
                  {[
                    { label: "Session 1", status: "Context loaded", ok: true },
                    { label: "Session 2", status: "Context lost", ok: false },
                    { label: "Session 3", status: "Starts from zero", ok: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl bg-zinc-50 px-5 py-3">
                      <span className="text-sm font-medium text-zinc-500">{item.label}</span>
                      <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${item.ok ? "bg-zinc-100 text-zinc-500" : "bg-red-50 text-red-400"}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anant */}
              <div className="rounded-3xl border border-zinc-900 bg-zinc-900 p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-800">
                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">Anant 1.0</p>
                </div>
                <div className="mt-5 space-y-2.5">
                  {["Context loaded", "Context retained", "Context grows"].map((status, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl bg-zinc-800 px-5 py-3">
                      <span className="text-sm font-medium text-zinc-300">Session {i + 1}</span>
                      <span className="rounded-full bg-zinc-700 px-3 py-1 text-[11px] font-semibold text-zinc-200">{status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-zinc-800 px-5 py-2.5 text-center text-xs font-semibold text-zinc-300">
                  Persistent memory across all sessions
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
