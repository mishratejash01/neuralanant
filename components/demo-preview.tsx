import AnimateOnScroll from "./animate-on-scroll";

const pastConversation = [
  { role: "user" as const, message: "Can you give me a good recipe for paneer butter masala?", time: "2 days ago" },
  { role: "assistant" as const, message: "Here's a classic paneer butter masala for 2 servings:\n\n\u2022 200g paneer, cubed\n\u2022 2 tomatoes, pureed\n\u2022 1 tbsp butter + 1 tbsp oil\n\u2022 1 tsp ginger-garlic paste\n\u2022 \u00bd cup cream\n\u2022 Spices: cumin, turmeric, red chili, garam masala\n\nSaut\u00e9 cumin in butter, add ginger-garlic paste, then tomato puree. Cook 8 min. Add spices, cream, and paneer. Simmer 5 min.", time: "2 days ago" },
];

const currentConversation = [
  { role: "user" as const, message: "Can you adjust that recipe for 6 people?", time: "Just now" },
  { role: "assistant" as const, message: "Sure! Here's your paneer butter masala scaled to 6 servings:\n\n\u2022 600g paneer, cubed\n\u2022 6 tomatoes, pureed\n\u2022 3 tbsp butter + 3 tbsp oil\n\u2022 1 tbsp ginger-garlic paste\n\u2022 1.5 cups cream\n\u2022 Spices scaled up proportionally\n\nSame method \u2014 just use a larger pan and cook the tomato puree a couple minutes longer.", time: "Just now", memoryRecall: true },
];

function MessageBubble({ role, message, time, memoryRecall }: { role: "user" | "assistant"; message: string; time: string; memoryRecall?: boolean }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[85%]">
        {memoryRecall && (
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1">
            <svg className="h-3 w-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
            </svg>
            <span className="text-[10px] font-semibold text-blue-600">Recalled from memory</span>
          </div>
        )}
        <div className={`rounded-2xl px-5 py-3.5 ${
          isUser
            ? "bg-zinc-900 text-white shadow-lg shadow-zinc-200/30"
            : "border border-zinc-100 bg-white text-zinc-700 shadow-sm"
        }`}>
          <p className="whitespace-pre-line text-[13px] leading-[1.7]">{message}</p>
        </div>
        <p className="mt-2 px-1 text-[10px] font-medium text-zinc-300">{time}</p>
      </div>
    </div>
  );
}

export default function DemoPreview() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-4 absolute left-[10%] top-[15%] h-[400px] w-[400px] rounded-full bg-violet-100/25 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">See It in Action</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Memory that works across sessions
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              Anant recalls your previous conversations and uses that context to give better, more relevant responses.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-200">
          <div className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-2xl shadow-zinc-200/40">
            <div className="flex items-center gap-2 border-b border-zinc-100 px-6 py-4">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-zinc-200" />
                <div className="h-3 w-3 rounded-full bg-zinc-200" />
                <div className="h-3 w-3 rounded-full bg-zinc-200" />
              </div>
              <div className="ml-4 flex items-center gap-2.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-900">
                  <span className="text-[9px] font-bold text-white">A</span>
                </div>
                <span className="text-[13px] font-semibold text-zinc-500">Anant 1.0</span>
              </div>
            </div>

            <div className="space-y-8 p-7 sm:p-8">
              <div>
                <div className="mb-5 flex items-center justify-center">
                  <span className="rounded-full bg-zinc-50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-300">Previous Session</span>
                </div>
                <div className="space-y-4">
                  {pastConversation.map((msg, i) => <MessageBubble key={i} {...msg} />)}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-300">New session</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
              </div>

              <div>
                <div className="mb-5 flex items-center justify-center">
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Current Session</span>
                </div>
                <div className="space-y-4">
                  {currentConversation.map((msg, i) => <MessageBubble key={i} {...msg} />)}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
