"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function TechnologyPage() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle Ctrl+K / Cmd+K to focus the search bar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-[#2eaadc]/40 selection:text-white font-sans flex flex-col">
      
      {/* Topbar with Neural Branding and Functional Search */}
      <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md px-6">
        <div className="flex items-center gap-3">
          {/* Logo / Home Link (Matched to navbar.tsx) */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-semibold tracking-tight text-white transition-colors duration-300 hover:text-emerald-400">
              neural
            </span>
          </Link>
          
          <span className="text-white/20 select-none text-xl font-light translate-y-0.5">/</span>
          
          {/* Breadcrumb */}
          <div className="flex items-center text-zinc-400 translate-y-0.5">
            <span className="font-medium text-[15px]">Documentation</span>
          </div>
        </div>

        {/* Functional Long Search Bar */}
        <div className="relative group w-full max-w-md hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-zinc-500 group-focus-within:text-[#2eaadc] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            className="block w-full rounded-md border border-white/10 bg-white/5 py-2 pl-10 pr-16 text-sm text-zinc-200 placeholder-zinc-500 focus:border-[#2eaadc]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#2eaadc]/50 transition-all"
            placeholder="Search documentation..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] font-medium text-zinc-400">
              <span className="text-xs">Ctrl</span>K
            </kbd>
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Left Sidebar - Table of Contents */}
        <aside className="hidden w-64 shrink-0 py-12 lg:block">
          <div className="sticky top-28">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              Contents
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#abstract" className="hover:text-white transition-colors">1. Abstract</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">2. Model Architecture</a></li>
              <li><a href="#data-training" className="hover:text-white transition-colors">3. Data & Pretraining</a></li>
              <li><a href="#alignment" className="hover:text-white transition-colors">4. Safety & Alignment</a></li>
              <li><a href="#infrastructure" className="hover:text-white transition-colors">5. Sovereign Infrastructure</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 py-12 lg:pl-16 lg:py-16">
          <article className="prose prose-invert prose-zinc max-w-3xl prose-headings:text-white prose-a:text-[#2eaadc] hover:prose-a:text-[#2eaadc]/80 prose-code:text-[#2eaadc]/70">
            
            <p className="text-[#2eaadc] font-mono text-sm tracking-tight mb-2 uppercase flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2eaadc] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2eaadc]"></span>
              </span>
              In Active Development
            </p>
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6">
              Technical Foundations of Anant 1.0
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
              A comprehensive overview of the architecture, memory pipelines, and alignment methodology behind Neural AI's upcoming sovereign large language model.
            </p>

            <section id="abstract" className="scroll-mt-28">
              <h2>1. Abstract</h2>
              <p>
                As artificial intelligence capabilities scale, maintaining technological sovereignty has become a fundamental requirement for national security, cultural preservation, and economic independence. Neural AI is currently engineering <strong>Anant 1.0</strong>, a sovereign large language model built from the ground up to deeply understand both global knowledge and localized contexts. 
              </p>
              <p>
                This document outlines our technical approach to building a state-of-the-art foundation model. Our research focuses on optimizing compute efficiency, developing localized tokenization, and scaling a safe, aligned architecture that will serve as the intelligence engine for enterprise and government infrastructure.
              </p>
            </section>

            <hr className="border-white/10 my-12" />

            <section id="architecture" className="scroll-mt-28">
              <h2>2. Model Architecture</h2>
              <p>
                Anant 1.0 utilizes a highly optimized, decoder-only transformer architecture designed to balance raw capability with inference efficiency. We are currently training and validating architectures scaling up to the 70 billion parameter class.
              </p>
              
              <h3>Advanced Tokenization</h3>
              <p>
                Most global frontier models rely on tokenizers optimized primarily for English. For Anant 1.0, we are engineering a custom Byte-Pair Encoding (BPE) tokenizer with an expanded vocabulary (up to 64,000 tokens). This ensures that our target national languages achieve high word-to-token compression, dramatically reducing inference costs and improving the model's native reasoning capabilities in non-English contexts.
              </p>

              <h3>Extended Context & Memory</h3>
              <p>
                To support document-heavy enterprise workflows, Anant 1.0 is engineered with an extended context window capable of processing up to 128,000 tokens natively. To achieve this without catastrophic memory overhead during inference, we utilize:
              </p>
              <ul>
                <li><strong>Grouped-Query Attention (GQA):</strong> Significantly reduces the Key-Value (KV) cache memory footprint by sharing KV heads across multiple query heads, essential for long-context generation.</li>
                <li><strong>Rotary Positional Embeddings (RoPE):</strong> Enables stable extrapolation to longer sequence lengths during deployment.</li>
              </ul>
            </section>

            <hr className="border-white/10 my-12" />

            <section id="data-training" className="scroll-mt-28">
              <h2>3. Data Pipeline & Pretraining</h2>
              <p>
                The intelligence of a foundation model is bound by the quality and diversity of its pretraining data. We are curating a massive, multi-trillion token corpus utilizing a rigorous, multi-stage filtering pipeline.
              </p>

              <h3>Sovereign Data Curation</h3>
              <p>
                Our data mixture carefully balances general global knowledge with deep sovereign context, including high-quality web scrapes, public domain texts, academic papers, and official documentation. We utilize a strict pipeline to ensure data integrity:
              </p>
              <ul>
                <li><strong>Exact & Near-Duplicate Filtering:</strong> Utilizing MinHash and Locality-Sensitive Hashing (LSH) to remove redundant data that causes memorization and wastes compute.</li>
                <li><strong>Quality Scoring:</strong> Classifiers trained to reject SEO spam, gibberish, and low-information-density text.</li>
                <li><strong>Toxicity Filtering:</strong> Strict removal of Personally Identifiable Information (PII), hate speech, and malicious content before it ever reaches the training cluster.</li>
              </ul>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 my-8">
                <h4 className="text-white mt-0 mb-2">Compute Methodology</h4>
                <p className="text-sm text-zinc-400 mb-0">
                  Following modern scaling laws, our training runs utilize highly parallelized architectures (combining Data, Tensor, and Pipeline parallelism) across massive GPU clusters. We employ AdamW optimizers with mixed-precision (BF16) training to maximize hardware utilization while maintaining absolute numerical stability.
                </p>
              </div>
            </section>

            <hr className="border-white/10 my-12" />

            <section id="alignment" className="scroll-mt-28">
              <h2>4. Safety & Alignment</h2>
              <p>
                Raw intelligence must be carefully aligned to human values and national safety guidelines. Anant 1.0 undergoes a rigorous post-training alignment phase to ensure it remains helpful, harmless, and honest in production environments.
              </p>
              
              <h3>Supervised Fine-Tuning (SFT)</h3>
              <p>
                The base model is fine-tuned on tens of thousands of highly curated, human-verified instruction-response pairs. This phase teaches the model to adopt the "Anant" persona—a professional, highly accurate, and culturally aware AI assistant.
              </p>

              <h3>Direct Preference Optimization (DPO)</h3>
              <p>
                Rather than relying solely on legacy Reinforcement Learning from Human Feedback (RLHF) pipelines, we utilize Direct Preference Optimization (DPO). By training directly on human preference pairs, we mathematically penalize hallucinations and harmful outputs, pushing the model toward safer, more reliable generations without the instability of reward-model training.
              </p>

              <h3>Adversarial Red Teaming</h3>
              <p>
                Prior to release, our models undergo continuous adversarial red-teaming. Security experts actively attempt to bypass safety guardrails to identify vulnerabilities, biases, and edge-case failures, which are immediately patched in subsequent alignment cycles.
              </p>
            </section>

            <hr className="border-white/10 my-12" />

            <section id="infrastructure" className="scroll-mt-28">
              <h2>5. Sovereign Infrastructure</h2>
              <p>
                True AI sovereignty requires independence at the hardware layer. Neural AI's long-term strategy involves operating entirely on domestic data center infrastructure, ensuring that sensitive government and enterprise data never leaves national borders and remains under strict local jurisdiction.
              </p>
              <p>
                As we approach the final stages of Anant 1.0's development, we are actively optimizing our serving stack—utilizing state-of-the-art inference engines with continuous batching—to provide ultra-low latency inference for our future enterprise partners.
              </p>
              
              <div className="mt-16 flex items-center justify-center gap-4 opacity-60">
                <div className="h-px bg-white/20 w-16"></div>
                <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">End of Documentation</span>
                <div className="h-px bg-white/20 w-16"></div>
              </div>
            </section>

          </article>
        </main>
      </div>
    </div>
  );
}
