import AnimateOnScroll from "./animate-on-scroll";

const steps = [
  {
    number: "01",
    title: "You talk to Anant",
    description: "Have a conversation like you normally would — ask questions, share context, work through problems.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Anant remembers",
    description: "Key context is automatically encoded and stored in your personal memory vault — securely and privately.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Next time, it knows you",
    description: "Every future conversation is smarter because Anant remembers your preferences, context, and history.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-zinc-50/50 px-6 py-28 sm:py-36">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-1 absolute -left-[5%] top-[20%] h-[400px] w-[400px] rounded-full bg-emerald-100/30 blur-[100px]" />
        <div className="blob-4 absolute bottom-[10%] right-[5%] h-[350px] w-[350px] rounded-full bg-blue-100/30 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">How It Works</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Simple for you. <span className="text-zinc-400">Powerful underneath.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              Anant works like any AI assistant — except it actually remembers.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={`delay-${(i + 1) * 150}`}>
              <div className="group relative rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                  Step {step.number}
                </span>
                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white transition-all duration-500 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-zinc-500">{step.description}</p>

                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-zinc-200 to-transparent md:block" />
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay="delay-500">
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-zinc-100 bg-white p-8 text-center shadow-sm sm:p-10">
            <p className="text-[15px] leading-[1.8] text-zinc-500">
              Think of it like having a personal assistant who takes notes after every meeting —
              except the notes are{" "}
              <span className="font-semibold text-zinc-900">automatic</span>,{" "}
              <span className="font-semibold text-zinc-900">secure</span>, and{" "}
              <span className="font-semibold text-zinc-900">always available</span>.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
