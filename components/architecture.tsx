import AnimateOnScroll from "./animate-on-scroll";

const pipelineSteps = [
  { label: "Input", desc: "User query", icon: "I" },
  { label: "Transformer", desc: "Processing", icon: "T" },
  { label: "Memory", desc: "Context retrieval", icon: "M" },
  { label: "Fusion", desc: "Memory + query", icon: "F" },
  { label: "Response", desc: "Output", icon: "R" },
];

const cards = [
  {
    title: "Persistent Memory Layer",
    description: "A dedicated neural memory module that stores and indexes conversation context across sessions. Information is compressed, prioritized, and made retrievable through learned attention patterns.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
      </svg>
    ),
  },
  {
    title: "Custom Transformer",
    description: "Built from scratch — not a fine-tuned fork. Optimized for long-range dependency tracking with memory-augmented attention heads and efficient parameter utilization.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
  },
  {
    title: "Retrieval-Augmented Memory",
    description: "At inference time, a neural retrieval mechanism scores and ranks memories by relevance to the current query, surfacing exactly the right past context when you need it.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
];

export default function Architecture() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-1 absolute left-[10%] top-[5%] h-[400px] w-[400px] rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="blob-3 absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-emerald-100/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">Architecture</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Built different, from the ground up
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              A purpose-built architecture where memory isn&apos;t an add-on — it&apos;s foundational.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-200">
          <div className="mt-20 rounded-3xl border border-zinc-100 bg-gradient-to-br from-zinc-50/80 to-white p-10 shadow-sm sm:p-12">
            <p className="mb-10 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300">Memory Pipeline</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {pipelineSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-zinc-200/80 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-6">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white">{step.icon}</span>
                    <span className="text-[13px] font-semibold text-zinc-800">{step.label}</span>
                    <span className="text-[10px] text-zinc-400">{step.desc}</span>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <div className="flex items-center">
                      <div className="h-px w-4 bg-zinc-200 sm:w-6" />
                      <svg className="h-3 w-3 shrink-0 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={`delay-${(i + 1) * 100}`}>
              <div className="group relative overflow-hidden rounded-3xl border border-zinc-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white transition-all duration-500 group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="mt-6 text-base font-semibold text-zinc-900">{card.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-500">{card.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
