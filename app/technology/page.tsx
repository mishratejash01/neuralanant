"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Updated Search index for developer-focused documentation
const searchIndex = [
  { id: "architecture", title: "Architecture Overview", desc: "Decoder-only transformer, 70B class, GQA, and RoPE." },
  { id: "tokenization", title: "Tokenization & Vocabulary", desc: "Custom 64k BPE tokenizer for enhanced Indic script compression." },
  { id: "context-window", title: "Context Management", desc: "128k native context handling and KV cache optimization." },
  { id: "data-pipeline", title: "Data Ingestion Pipeline", desc: "MinHash/LSH deduplication and heuristic filtering." },
  { id: "alignment", title: "Alignment (SFT & DPO)", desc: "Direct Preference Optimization and identity anchoring." },
  { id: "infrastructure", title: "Serving Infrastructure", desc: "Continuous batching, vLLM, and domestic hardware deployment." },
];

interface SearchIndexItem {
  id: string;
  heading: string;
  text: string;
  isHeading: boolean;
}

export default function TechnologyPage() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIndexData, setSearchIndexData] = useState<SearchIndexItem[]>([]);
  const [searchResults, setSearchResults] = useState<SearchIndexItem[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Build Search Index from the actual page DOM on mount
  useEffect(() => {
    if (!articleRef.current) return;
    
    const elements = articleRef.current.querySelectorAll("h1, h2, h3, h4, p, li");
    const index: SearchIndexItem[] = [];
    let currentHeading = "Anant 1.0 Specifications";

    elements.forEach((el, i) => {
      const tagName = el.tagName.toUpperCase();
      const text = el.textContent?.trim();
      
      if (["H1", "H2", "H3", "H4"].includes(tagName)) {
        currentHeading = text || currentHeading;
      }

      if (text && text.length > 5) {
        const id = el.id || `content-section-${i}`;
        if (!el.id) el.id = id;

        index.push({
          id,
          heading: currentHeading,
          text,
          isHeading: ["H1", "H2", "H3", "H4"].includes(tagName),
        });
      }
    });

    setSearchIndexData(index);
  }, []);

  // Handle Ctrl+K / Cmd+K
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

  // Filter search results live
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = searchIndexData.filter((item) =>
      item.text.toLowerCase().includes(query)
    );
    setSearchResults(filtered);
  }, [searchQuery, searchIndexData]);

  // Handle clicking a search result
  const handleResultClick = (id: string) => {
    setSearchQuery("");
    setIsSearchFocused(false);
    
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });

      const originalTransition = element.style.transition;
      const originalBg = element.style.backgroundColor;
      const originalPadding = element.style.padding;
      const originalRadius = element.style.borderRadius;
      
      element.style.transition = "all 0.4s ease-in-out";
      element.style.backgroundColor = "rgba(16, 185, 129, 0.15)";
      element.style.padding = "4px 8px";
      element.style.borderRadius = "6px";
      element.style.marginLeft = "-8px";

      setTimeout(() => {
        element.style.backgroundColor = originalBg;
        setTimeout(() => {
          element.style.transition = originalTransition;
          element.style.padding = originalPadding;
          element.style.borderRadius = originalRadius;
          element.style.marginLeft = "0";
        }, 400);
      }, 1500);
    }
  };

  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight.trim()) return <span className="line-clamp-2">{text}</span>;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span className="line-clamp-2">
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="bg-emerald-500/30 text-emerald-200 font-semibold rounded-[2px]">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-emerald-500/40 selection:text-white font-sans flex flex-col">
      
      {/* Topbar */}
      <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-semibold tracking-tight text-white transition-colors duration-300 hover:text-emerald-400">
              neural
            </span>
          </Link>
          <span className="text-white/20 select-none text-xl font-light translate-y-0.5">/</span>
          <div className="flex items-center text-zinc-400 translate-y-0.5">
            <span className="font-medium text-[15px]">Documentation</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group w-full max-w-lg hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            className="block w-full rounded-md border border-white/10 bg-white/5 py-2 pl-10 pr-16 text-sm text-white placeholder-zinc-500 focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all"
            placeholder="Search documentation..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {searchQuery ? (
              <button onClick={() => setSearchQuery("")} className="p-1 text-zinc-400 hover:text-white mr-1 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            ) : (
              <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] font-medium text-zinc-400 pointer-events-none">
                <span className="text-xs">Ctrl</span>K
              </kbd>
            )}
          </div>

          {/* Search Dropdown */}
          {isSearchFocused && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#121212] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
              {searchResults.length > 0 ? (
                <ul className="max-h-[400px] overflow-y-auto py-2">
                  {searchResults.map((result, idx) => (
                    <li key={idx}>
                      <button 
                        onClick={() => handleResultClick(result.id)}
                        className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 flex flex-col gap-1.5"
                      >
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                          {result.heading}
                        </span>
                        <span className="text-sm text-zinc-300">
                          {getHighlightedText(result.text, searchQuery)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-8 text-center text-sm text-zinc-500">
                  No matches found in codebase for <span className="text-zinc-300 font-medium">"{searchQuery}"</span>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Layout */}
      <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Left Sidebar */}
        <aside className="hidden w-64 shrink-0 py-12 lg:block">
          <div className="sticky top-28">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              On this page
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture Overview</a></li>
              <li><a href="#tokenization" className="hover:text-white transition-colors">Tokenization</a></li>
              <li><a href="#data-pipeline" className="hover:text-white transition-colors">Data Pipeline</a></li>
              <li><a href="#alignment" className="hover:text-white transition-colors">Alignment & SFT</a></li>
              <li><a href="#infrastructure" className="hover:text-white transition-colors">Serving Infrastructure</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 py-12 lg:pl-16 lg:py-16">
          <article ref={articleRef} className="prose prose-invert prose-zinc max-w-3xl prose-headings:text-white prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-code:text-emerald-200">
            
            <div id="badge-status" className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-mono text-xs tracking-tight uppercase">Early Access / Pre-Training Phase</span>
            </div>

            <h1 id="main-title" className="text-4xl sm:text-5xl font-medium tracking-tight mb-6">
              Anant 1.0 Specifications
            </h1>
            <p id="main-subtitle" className="text-xl text-zinc-400 leading-relaxed mb-12">
              Engineering documentation detailing the model architecture, tokenization strategies, and deployment infrastructure for Neural AI's sovereign language model.
            </p>

            <section id="architecture" className="scroll-mt-28">
              <h2 id="heading-architecture">Architecture Overview</h2>
              <p>
                Anant 1.0 utilizes a standard, highly optimized decoder-only transformer architecture. Currently scaling up to the 70B parameter class, the network is designed to balance raw representational capacity with inference throughput for enterprise environments.
              </p>
              <p>
                To support high-concurrency batching and long-context reasoning without catastrophic memory bottlenecks, the attention layers implement <strong>Grouped-Query Attention (GQA)</strong>. This significantly reduces the size of the Key-Value (KV) cache compared to Multi-Head Attention (MHA). Positional encodings rely on <strong>Rotary Positional Embeddings (RoPE)</strong>, ensuring mathematically stable extrapolation when processing sequences that exceed the typical pre-training distribution length.
              </p>
            </section>

            <hr className="border-white/10 my-12" />

            <section id="tokenization" className="scroll-mt-28">
              <h2 id="heading-tokenization">Tokenization & Vocabulary</h2>
              <p>
                Off-the-shelf global tokenizers exhibit poor compression ratios for Indic scripts, frequently splitting standard words into single-character or byte-level tokens. This inflates inference costs and severely degrades the model's Time To First Token (TTFT).
              </p>
              <p>
                Anant 1.0 implements a custom Byte-Pair Encoding (BPE) tokenizer initialized with a 64,000-token vocabulary. This configuration achieves superior token-to-word compression across localized languages, directly boosting decoding throughput and enhancing the network's capacity to represent multi-lingual semantic spaces natively.
              </p>
            </section>

            <hr className="border-white/10 my-12" />

            <section id="context-window" className="scroll-mt-28">
              <h2 id="heading-context">Context Management</h2>
              <p>
                The model is engineered to natively process a 128,000-token context window. To facilitate this in production without out-of-memory (OOM) errors during the prefill phase, the architecture relies heavily on the aforementioned GQA implementation alongside efficient KV cache memory paging techniques managed by the serving layer.
              </p>
            </section>

            <hr className="border-white/10 my-12" />

            <section id="data-pipeline" className="scroll-mt-28">
              <h2 id="heading-data">Data Ingestion Pipeline</h2>
              <p>
                The intelligence of the foundation model is entirely dependent on the pre-training mixture. The Anant pipeline ingests a multi-trillion token corpus consisting of high-quality web scrapes, code repositories, public domain literature, and strict sovereign data sources.
              </p>
              <ul>
                <li><strong>Deduplication:</strong> The pipeline utilizes MinHash and Locality-Sensitive Hashing (LSH) to identify and remove exact and near-duplicate text blocks, preventing overfitting and rote memorization.</li>
                <li><strong>Quality Filtering:</strong> Text streams pass through lightweight heuristic classifiers designed to reject SEO spam, boilerplate markup, and low-information-density strings.</li>
                <li><strong>Sanitization:</strong> Strict regex and classifier-based removal of Personally Identifiable Information (PII) before the data reaches the training cluster.</li>
              </ul>
            </section>

            <hr className="border-white/10 my-12" />

            <section id="alignment" className="scroll-mt-28">
              <h2 id="heading-safety">Alignment (SFT & DPO)</h2>
              <p>
                Post-training alignment shifts the base model from a next-token predictor to an instruction-following assistant. This occurs in two primary phases: Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO).
              </p>
              <h3 id="heading-sft">Identity & Instruction Tuning</h3>
              <p>
                During the SFT phase, the model is trained on a highly curated dataset of instruction-response pairs. This includes explicit identity mapping to anchor the persona (e.g., system prompts injecting <em>"You are Anant 1.0, created by Neural AI"</em>), which mitigates identity hallucination inherited from base weights.
              </p>
              <h3 id="heading-dpo">Direct Preference Optimization</h3>
              <p>
                Rather than utilizing traditional, unstable RLHF (Reinforcement Learning from Human Feedback) architectures involving separate reward models, Anant 1.0 relies on DPO. By training directly on human-ranked preference pairs, the loss function mathematically penalizes toxic outputs, hallucinated facts, and license non-compliance, pushing the distribution strictly toward safe, aligned generation.
              </p>
            </section>

            <hr className="border-white/10 my-12" />

            <section id="infrastructure" className="scroll-mt-28">
              <h2 id="heading-infra">Serving Infrastructure</h2>
              <p>
                As a sovereign AI initiative incubated at the IIT Madras Research Park, Anant 1.0 prioritizes data residency. All model weights and enterprise inference pipelines are strictly constrained to domestic hardware clusters.
              </p>
              <p>
                For deployment, the inference stack is optimized around <strong>vLLM</strong> and continuous batching paradigms. This utilizes PageAttention to dynamically partition the KV cache, virtually eliminating memory fragmentation and allowing the endpoint to sustain high throughput and low-latency generation for heavy enterprise workloads.
              </p>
              
              <div className="mt-16 flex items-center justify-center gap-4 opacity-60">
                <div className="h-px bg-white/20 w-16"></div>
                <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">End of Specification</span>
                <div className="h-px bg-white/20 w-16"></div>
              </div>
            </section>

          </article>
        </main>
      </div>
    </div>
  );
}
