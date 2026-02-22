import type { Metadata } from "next";
import AnimateOnScroll from "@/components/animate-on-scroll";
import EarlyAccessForm from "@/components/early-access-form";

export const metadata: Metadata = {
  title: "Get Early Access — Neural AI",
  description:
    "Join the Anant 1.0 waitlist. Be among the first to experience India's first LLM with persistent memory.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-4 pt-36 sm:pb-8 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-1 absolute left-[25%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-100/30 blur-[100px]" />
          <div className="blob-2 absolute right-[20%] top-[30%] h-[300px] w-[300px] rounded-full bg-orange-100/20 blur-[100px]" />
        </div>
        <div className="grid-dot-pattern pointer-events-none absolute inset-0 opacity-50" />

        <div className="relative z-10 mx-auto max-w-xl text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/80 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[13px] font-medium text-zinc-500">Limited spots available</span>
            </div>
            <h1 className="font-display mt-8 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Get early access to Anant
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              Join the waitlist and be among the first to experience India&apos;s
              first LLM with persistent memory.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="px-6 pb-28 pt-8 sm:pb-36">
        <div className="mx-auto max-w-md">
          <AnimateOnScroll delay="delay-200">
            <EarlyAccessForm />
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
