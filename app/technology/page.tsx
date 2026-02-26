import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology | Neural AI",
  description: "Technical foundations of Anant 1.0: India's sovereign large language model.",
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#191919] text-[#D4D4D4] selection:bg-[#2eaadc] selection:bg-opacity-40 selection:text-white font-sans flex flex-col">
      
      {/* Topbar (Notion-style) */}
      <header className="sticky top-0 z-50 flex h-12 shrink-0 items-center justify-between border-b border-white/5 bg-[#191919] px-4 text-[14px]">
        <div className="flex items-center gap-1.5 text-[#9B9B9B]">
          {/* Logo / Home Link */}
          <Link 
            href="/" 
            className="flex items-center gap-2 rounded hover:bg-white/5 px-2 py-1 transition-colors"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-white text-[#191919] text-[11px] font-bold">
              N
            </div>
            <span className="font-medium text-[#D4D4D4] tracking-tight">neural</span>
          </Link>
          
          <span className="text-white/20 select-none">/</span>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 rounded hover:bg-white/5 px-2 py-1 transition-colors cursor-default text-[#D4D4D4]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span className="font-medium">Technology</span>
          </div>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2.5 rounded hover:bg-white/5 px-2.5 py-1.5 text-xs text-[#9B9B9B] transition-colors focus:outline-none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
            <div className="flex items-center gap-1">
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] leading-tight text-[#9B9B9B]">Ctrl</kbd>
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] leading-tight text-[#9B9B9B]">K</kbd>
            </div>
          </button>
        </div>
      </header>

      {/* Main Content (Notion-style Document) */}
      <main className="flex-1 overflow-y-auto w-full pb-32">
        <div className="mx-auto max-w-[900px] px-8 py-16 sm:px-12 lg:px-24">
          
          {/* Document Header */}
          <div className="mb-10 group">
            <div className="mb-4 text-[76px] leading-none select-none">
              🔬
            </div>
            <h1 className="text-[40px] font-bold leading-[1.2] text-white mb-4 outline-none">
              Technical Foundations of Anant 1.0
            </h1>
            <div className="flex items-center gap-3 text-sm text-[#9B9B9B] mt-6">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-[9px] text-white font-bold">NA</span>
                </div>
                <span>Neural AI Research</span>
              </div>
              <span className="text-white/20">|</span>
              <span className="bg-white/5 text-white/70 px-2 py-0.5 rounded text-xs border border-white/10">In Active Development</span>
            </div>
          </div>

          {/* Prose Content */}
          <article className="prose prose-invert max-w-none
            prose-headings:font-semibold prose-headings:text-white prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[#D4D4D4] prose-p:leading-[1.7] prose-p:my-4 prose-p:text-[16px]
            prose-a:text-blue-400 prose-a:no-underline prose-a:border-b prose-a:border-blue-400/30 hover:prose-a:border-blue-400
            prose-strong:text-[#EBEBEB] prose-strong:font-semibold
            prose-ul:my-4 prose-li:my-1 prose-li:text-[16px]
            prose-hr:border-white/10 prose-hr:my-8
          ">
            <p>
              As artificial intelligence capabilities scale, maintaining technological sovereignty has become a fundamental requirement for national security, cultural preservation, and economic independence. Neural AI is currently engineering <strong>Anant 1.0</strong>, a sovereign large language model built from the ground up to deeply understand both global knowledge and localized contexts.
            </p>
            <p>
              This document outlines our technical approach to building a state-of-the-art foundation model. Our research focuses on optimizing compute efficiency, developing localized tokenization, and scaling a safe, aligned architecture that will serve as the intelligence engine for enterprise and government infrastructure.
            </p>

            <h2>Model Architecture</h2>
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

            <h2>Data Pipeline & Pretraining</h2>
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

            <div className="bg-[#2F2F2F]/40 border border-[#3F3F3F]/60 rounded-[4px] p-5 my-8">
              <h4 className="text-[#EBEBEB] mt-0 mb-2 font-medium flex items-center gap-2 text-[16px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Compute Methodology
              </h4>
              <p className="text-[15px] text-[#D4D4D4] mb-0 leading-relaxed">
                Following modern scaling laws, our training runs utilize highly parallelized architectures (combining Data, Tensor, and Pipeline parallelism) across massive GPU clusters. We employ AdamW optimizers with mixed-precision (BF16) training to maximize hardware utilization while maintaining absolute numerical stability.
              </p>
            </div>

            <h2>Safety & Alignment</h2>
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

            <h2>Sovereign Infrastructure</h2>
            <p>
              True AI sovereignty requires independence at the hardware layer. Neural AI's long-term strategy involves operating entirely on domestic data center infrastructure, ensuring that sensitive government and enterprise data never leaves national borders and remains under strict local jurisdiction.
            </p>
            <p>
              As we approach the final stages of Anant 1.0's development, we are actively optimizing our serving stack—utilizing state-of-the-art inference engines with continuous batching—to provide ultra-low latency inference for our future enterprise partners.
            </p>
            
          </article>
        </div>
      </main>
    </div>
  );
}
