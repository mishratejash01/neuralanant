import AnimateOnScroll from "./animate-on-scroll";

const sections = [
  {
    label: "Memory Architecture",
    title: "How the persistent memory layer works",
    content: [
      { term: "Memory Encoding", desc: "After each conversation turn, a dedicated memory encoder network compresses salient information into dense vector representations. Unlike naive approaches that store raw text, Anant learns what to remember through attention-weighted importance scoring." },
      { term: "Hierarchical Compression", desc: "Memories are organized in a multi-tier hierarchy — episodic (individual exchanges), semantic (distilled facts and preferences), and procedural (learned interaction patterns). Older memories are progressively compressed to maintain a bounded memory footprint." },
      { term: "Indexing & Retrieval", desc: "A neural indexing system maintains a continuously updated, approximate nearest-neighbor index over the memory space. At query time, relevant memories are retrieved in O(log n) via learned hash projections, not brute-force search." },
    ],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
      </svg>
    ),
    align: "left" as const,
  },
  {
    label: "Inference Pipeline",
    title: "What happens when a query arrives",
    content: [
      { term: "Tokenization & Embedding", desc: "Input is tokenized using a custom BPE tokenizer trained on multilingual Indian corpora (9+ languages). Token embeddings are enriched with positional and temporal encodings that capture when context was created." },
      { term: "Memory Query & Retrieval", desc: "Before the main transformer forward pass, a lightweight retrieval head generates a memory query from the input. The top-k most relevant memories are fetched from the index and formatted as additional context tokens." },
      { term: "Context Fusion & Generation", desc: "Retrieved memories are fused with the current input via cross-attention layers interleaved within the transformer stack. This allows the model to seamlessly blend stored knowledge with real-time reasoning." },
    ],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
    align: "right" as const,
  },
  {
    label: "Training Approach",
    title: "How Anant learns to remember",
    content: [
      { term: "Phase 1: Pre-training", desc: "Large-scale pre-training on diverse multilingual text data, establishing strong language understanding and generation capabilities. The memory module is initialized but not yet active." },
      { term: "Phase 2: Memory Alignment", desc: "A novel training phase where the model learns to write, read, and reason over its memory. Synthetic multi-session datasets teach the model to encode relevant information and retrieve it accurately across conversation boundaries." },
      { term: "Phase 3: Fine-tuning & RLHF", desc: "Instruction tuning and reinforcement learning from human feedback, specifically optimized for memory-aware conversations. Reward signals include accuracy of memory recall, privacy compliance, and contextual relevance." },
    ],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    align: "left" as const,
  },
];

const ragComparison = [
  { feature: "Memory persistence", rag: "External DB (fragile)", anant: "Neural (learned)" },
  { feature: "What to remember", rag: "Manual chunking", anant: "Attention-weighted" },
  { feature: "Retrieval method", rag: "Cosine similarity", anant: "Learned hash + cross-attention" },
  { feature: "Context integration", rag: "Prepend to prompt", anant: "Fused via cross-attention layers" },
  { feature: "Training signal", rag: "None (bolted on)", anant: "End-to-end memory objectives" },
];

export default function TechnicalDeepDive() {
  return (
    <section className="relative overflow-hidden bg-zinc-50/50 px-6 py-28 sm:py-36">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">Technical Deep Dive</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Under the hood of Anant&apos;s memory
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              A detailed look at the architecture, training methodology, and design decisions that make persistent memory possible.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 space-y-16">
          {sections.map((section, sIdx) => (
            <AnimateOnScroll key={section.label} delay={`delay-${(sIdx % 3 + 1) * 100}`}>
              <div className="grid items-start gap-10 lg:grid-cols-2">
                <div className={section.align === "right" ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">{section.icon}</div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300">{section.label}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">{section.title}</h3>
                </div>
                <div className={`space-y-4 ${section.align === "right" ? "lg:order-1" : ""}`}>
                  {section.content.map((item) => (
                    <div key={item.term} className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-100/50">
                      <p className="text-sm font-semibold text-zinc-900">
                        <code className="mr-2 rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[12px] text-zinc-600">{item.term}</code>
                      </p>
                      <p className="mt-3 text-[13px] leading-relaxed text-zinc-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay="delay-200">
          <div className="mt-20 rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm sm:p-12">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Why not just RAG?</h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
                Retrieval-Augmented Generation (RAG) bolts an external knowledge base onto a frozen model. Anant&apos;s approach is fundamentally different — memory is trained into the model itself.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-100">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-zinc-50/80">
                      <th className="px-5 py-3.5 font-semibold text-zinc-500"></th>
                      <th className="px-5 py-3.5 font-semibold text-zinc-400">Traditional RAG</th>
                      <th className="px-5 py-3.5 font-semibold text-zinc-900">Anant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ragComparison.map((row, i) => (
                      <tr key={row.feature} className={i < ragComparison.length - 1 ? "border-b border-zinc-50" : ""}>
                        <td className="px-5 py-3.5 font-medium text-zinc-700">{row.feature}</td>
                        <td className="px-5 py-3.5 text-zinc-400">{row.rag}</td>
                        <td className="px-5 py-3.5 font-medium text-zinc-700">{row.anant}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
