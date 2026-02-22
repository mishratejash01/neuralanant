"use client";

import { useState } from "react";
import AnimateOnScroll from "./animate-on-scroll";

const faqs = [
  { question: "What is Anant 1.0?", answer: "Anant 1.0 is a large language model built from scratch in India by Neural AI. Its defining feature is persistent super-memory \u2014 the ability to retain and recall context across conversations, sessions, and time. Unlike traditional LLMs that reset with each conversation, Anant builds a continuous understanding of your needs." },
  { question: "How does the memory feature work?", answer: "Anant uses a dedicated memory layer integrated into its transformer architecture. When you interact with Anant, relevant context is compressed and stored in a per-user memory store. At inference time, a neural retrieval mechanism scores and surfaces the most relevant past context, allowing Anant to respond with full awareness of your history." },
  { question: "When will Anant be available?", answer: "Anant 1.0 is targeted for launch in May 2027. We'll begin rolling out early access to waitlist members before the public launch. Sign up for early access to be among the first to try it." },
  { question: "What languages does it support?", answer: "At launch, Anant will support English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, and Malayalam. We are actively working to expand language support based on demand and training data availability." },
  { question: "How is my data handled?", answer: "Privacy is foundational to Anant. All memory data is encrypted and isolated per user. We do not train on your private conversations. You have full control over your memory \u2014 you can view, export, or delete your stored context at any time." },
  { question: "How do I get early access?", answer: "Join our waitlist through the Contact page. Early access members will get founding member benefits including priority access and direct input into product development." },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimateOnScroll delay={`delay-${Math.min((index + 1) * 100, 600)}`}>
      <div className={`border-b border-zinc-100 transition-colors ${open ? "bg-zinc-50/30" : ""}`}>
        <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-2 py-7 text-left">
          <span className="pr-6 text-[15px] font-semibold text-zinc-900">{question}</span>
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open ? "border-zinc-300 bg-zinc-100 shadow-sm" : "border-zinc-200 bg-white"
          }`}>
            <svg className={`h-3.5 w-3.5 transition-all duration-300 ${open ? "rotate-180 text-zinc-700" : "text-zinc-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </button>
        <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden px-2">
            <p className="pr-14 text-[14px] leading-[1.8] text-zinc-500">{answer}</p>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function FAQ() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm sm:p-10">
          {faqs.map((faq, i) => <FAQItem key={faq.question} {...faq} index={i} />)}
        </div>
      </div>
    </section>
  );
}
