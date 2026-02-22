import AnimateOnScroll from "./animate-on-scroll";

const specs = [
  { label: "Model Parameters", value: "TBD", icon: "P" },
  { label: "Context Window", value: "TBD", icon: "C" },
  { label: "Memory Retention", value: "Unlimited cross-session", icon: "M" },
  { label: "Supported Languages", value: "English, Hindi, Tamil, Telugu, Bengali + more", icon: "L" },
  { label: "Training Data Focus", value: "Multilingual Indian + global datasets", icon: "D" },
  { label: "Inference Speed Target", value: "< 200ms first token", icon: "S" },
];

export default function Specifications() {
  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">Specifications</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">Technical specifications</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-200">
          <div className="mx-auto mt-20 max-w-3xl overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm">
            {specs.map((spec, i) => (
              <div key={spec.label} className={`flex items-center gap-4 px-8 py-6 transition-colors hover:bg-zinc-50/50 ${i < specs.length - 1 ? "border-b border-zinc-50" : ""}`}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-xs font-bold text-zinc-600">{spec.icon}</span>
                <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm font-semibold text-zinc-900">{spec.label}</span>
                  <span className="text-sm text-zinc-400">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-300">
          <p className="mt-8 text-center text-sm text-zinc-300">Final specifications will be published at launch.</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
