import AnimateOnScroll from "./animate-on-scroll";

export default function WhyAnant() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36 bg-[#f4faf9]">
      {/* Applied off-teal white background to the section above */}
      <div className="section-divider absolute left-0 right-0 top-0" />

      {/* Subtle teal background blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-3 absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-teal-100/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center mb-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
              Why Anant
            </p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Other LLMs forget.{" "}
              <span className="text-teal-600">Anant remembers.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              Today&apos;s language models start every conversation from scratch.
              Anant changes that with memory built into its core.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Grid with items-start to allow the sticky element to work */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start relative">
          
          {/* Left Side (Sticky Content) */}
          <div className="lg:sticky lg:top-32 h-auto rounded-3xl border border-teal-100 bg-white p-10 shadow-sm">
            <AnimateOnScroll>
              <h3 className="text-2xl font-semibold text-zinc-900">The memory gap in AI</h3>
              <div className="mt-6 space-y-5">
                <p className="text-[15px] leading-[1.8] text-zinc-600">
                  Ask a question on Monday, and by Tuesday it&apos;s gone. There&apos;s no continuity, no context, no memory of who you are or what you&apos;ve discussed.
                </p>
                <p className="text-[15px] leading-[1.8] text-zinc-600">
                  Anant is built with a <span className="font-semibold text-teal-700">persistent memory layer</span> at its core — retaining context across sessions, learning your preferences, and building deeper understanding over time.
                </p>
                <p className="text-[15px] leading-[1.8] text-zinc-600">
                  This isn&apos;t retrieval bolted on as an afterthought. Memory is woven into Anant&apos;s architecture from the ground up to give you an AI that truly knows you.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Side (Scrolling USPs & Offerings) */}
          <div className="space-y-8">
            {/* USP 1 */}
            <AnimateOnScroll delay="delay-100">
              <div className="rounded-3xl border border-teal-800 bg-teal-900 p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800">
                    <div className="h-3 w-3 rounded-full bg-teal-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Persistent Context</h4>
                </div>
                <p className="text-teal-100 mb-6 text-sm leading-relaxed">
                  Unlike traditional models that lose context between sessions, Anant builds a continuous knowledge graph of your interactions and data.
                </p>
                <div className="space-y-3">
                  {["Context loaded", "Context retained", "Context grows"].map((status, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl bg-teal-800/50 px-5 py-3 border border-teal-700/50">
                      <span className="text-sm font-medium text-teal-50">Session {i + 1}</span>
                      <span className="rounded-full bg-teal-700 px-3 py-1 text-[11px] font-semibold text-teal-100">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* USP 2 */}
            <AnimateOnScroll delay="delay-200">
              <div className="rounded-3xl border border-teal-800 bg-teal-900 p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800">
                    <div className="h-3 w-3 rounded-full bg-teal-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Deep Personalization</h4>
                </div>
                <p className="text-teal-100 text-sm leading-relaxed">
                  Anant learns your coding style, your business domain, and your preferences over time. It tailors its responses to your specific needs instantly, without requiring repetitive background prompts.
                </p>
              </div>
            </AnimateOnScroll>

            {/* USP 3 */}
            <AnimateOnScroll delay="delay-300">
              <div className="rounded-3xl border border-teal-800 bg-teal-900 p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800">
                    <div className="h-3 w-3 rounded-full bg-teal-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Enterprise Privacy</h4>
                </div>
                <p className="text-teal-100 text-sm leading-relaxed">
                  Your memory graph is securely isolated. Anant ensures that your private data and contextual history never leak across tenants, giving you complete peace of mind while maintaining powerful historical recall.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
