import AnimateOnScroll from "./animate-on-scroll";

export default function WhyAnant() {
  return (
    <section className="relative overflow-hidden bg-[#f4faf9] px-6 py-28 sm:py-36">
      {/* Subtle background blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-teal-100/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
          
          {/* LEFT SIDE - Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:pr-8">
            <AnimateOnScroll>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-teal-700">
                The Anant difference
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl leading-tight">
                Other LLMs forget.<br />
                <span className="text-zinc-500">Anant remembers.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600 max-w-md">
                Today&apos;s language models start every conversation from scratch.
                Anant changes that with memory built into its core.
              </p>
              <div className="mt-10">
                <a 
                  href="#early-access" 
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Get early access
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* RIGHT SIDE - Scrolling Cards */}
          <div className="space-y-8">
            
            {/* Card 1: Continuous Knowledge Graph */}
            <AnimateOnScroll delay="delay-100">
              <div className="rounded-[2.5rem] border border-teal-800/30 bg-[#0b2826] p-8 sm:p-10 shadow-xl">
                <h3 className="text-2xl font-medium text-white">Continuous Knowledge Graph</h3>
                <p className="mt-4 text-teal-100/70 text-base leading-relaxed">
                  Unlike traditional models that lose context between sessions, Anant builds a persistent knowledge graph of your interactions and data.
                </p>

                {/* Comparison UI Inside the Card */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  
                  {/* Traditional LLM Box */}
                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                        <div className="h-2 w-2 rounded-full bg-zinc-300" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-400">Traditional LLM</p>
                    </div>
                    <div className="mt-6 space-y-2">
                      {[
                        { label: "Session 1", status: "Context loaded", ok: true },
                        { label: "Session 2", status: "Context lost", ok: false },
                        { label: "Session 3", status: "Starts from zero", ok: false },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3">
                          <span className="text-sm font-medium text-zinc-500">{item.label}</span>
                          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${item.ok ? "bg-zinc-200/50 text-zinc-500" : "bg-red-50 text-red-400"}`}>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Anant 1.0 Box */}
                  <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-400">Anant 1.0</p>
                    </div>
                    <div className="mt-6 space-y-2">
                      {["Context loaded", "Context retained", "Context grows"].map((status, i) => (
                        <div key={i} className="flex items-center justify-between rounded-xl bg-zinc-800/50 px-4 py-3">
                          <span className="text-sm font-medium text-zinc-300">Session {i + 1}</span>
                          <span className="rounded-full bg-zinc-700 px-2.5 py-1 text-[10px] font-semibold text-zinc-200">{status}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </AnimateOnScroll>

            {/* Card 2: Deep Personalization */}
            <AnimateOnScroll delay="delay-200">
              <div className="rounded-[2.5rem] border border-teal-800/30 bg-[#0b2826] p-8 sm:p-10 shadow-xl">
                <h3 className="text-2xl font-medium text-white">Deep Personalization</h3>
                <p className="mt-4 text-teal-100/70 text-base leading-relaxed">
                  Anant learns your coding style, your business domain, and your preferences over time. It tailors its responses to your specific needs instantly, without requiring repetitive background prompts.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Card 3: Enterprise Privacy */}
            <AnimateOnScroll delay="delay-300">
              <div className="rounded-[2.5rem] border border-teal-800/30 bg-[#0b2826] p-8 sm:p-10 shadow-xl">
                <h3 className="text-2xl font-medium text-white">Enterprise Privacy</h3>
                <p className="mt-4 text-teal-100/70 text-base leading-relaxed">
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
