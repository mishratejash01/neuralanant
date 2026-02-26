"use client";

import { useState } from "react";
import Link from "next/link";
import JobApplicationForm from "./job-application-form";

interface SupporterLogo {
  name: string;
  image_url: string;
}

// Updated to use salary_range directly
interface Job {
  id: string;
  title: string;
  department: string | null;
  location: string | null;
  type: string | null;
  description: string | null;
  requirements: string | null;
  salary_range?: string | null;
  benefits?: string | null;
}

export default function JobDetailsClient({ 
  job, 
  supporterLogos = [] 
}: { 
  job: Job; 
  supporterLogos?: SupporterLogo[];
}) {
  const [activeTab, setActiveTab] = useState<"overview" | "application">("overview");

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 flex flex-col selection:bg-teal-100">
      
      {/* ─── PERPLEXITY-STYLE HEADER ─── */}
      <header className="sticky top-0 z-50 flex h-20 shrink-0 items-center justify-center bg-white px-6 border-b border-[#e8eaed]">
        {/* Back button correctly pointing to homepage */}
        <Link href="/" className="absolute left-6 md:left-10 text-[#225760] hover:opacity-70 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
        <Link href="/" className="flex items-center text-[28px] font-medium tracking-tight text-[#225760] transition-opacity hover:opacity-80">
          neural
        </Link>

        {/* ─── SUPPORTERS RIGHT STAMP (DESKTOP ONLY) ─── */}
        {supporterLogos.length > 0 && (
          <div className="absolute right-6 md:right-10 hidden md:flex items-center gap-4">
            <span className="text-[11px] font-medium text-[#70757a] tracking-wider uppercase">
              Backed By
            </span>
            <div className="flex items-center gap-4">
              {supporterLogos.map((logo, idx) => (
                <img 
                  key={idx} 
                  src={logo.image_url} 
                  alt={logo.name} 
                  className="h-7 object-contain transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <main className="mx-auto w-full max-w-5xl px-6 py-10 md:py-12">
        
        {/* Title & Tabs */}
        <div className="mb-10">
          
          {/* ─── SUPPORTERS STAMP (MOBILE ONLY) - CENTERED ABOVE TITLE ─── */}
          {supporterLogos.length > 0 && (
            <div className="md:hidden flex flex-col items-center justify-center w-full mb-8 space-y-3">
              <span className="text-[10px] font-medium text-[#70757a] tracking-wider uppercase">
                Backed By
              </span>
              <div className="flex flex-wrap items-center justify-center gap-5">
                {supporterLogos.map((logo, idx) => (
                  <img 
                    key={idx} 
                    src={logo.image_url} 
                    alt={logo.name} 
                    className="h-6 object-contain"
                  />
                ))}
              </div>
            </div>
          )}

          <h1 className="text-[28px] font-medium text-[#202124] mb-8 md:text-left text-center">{job.title}</h1>
          
          <div className="flex gap-10 border-b border-[#e8eaed] md:justify-start justify-center">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-3 text-[16px] transition-colors ${
                activeTab === "overview" 
                  ? "border-b-2 border-[#225760] font-medium text-[#225760]" 
                  : "text-[#5f6368] hover:text-[#202124]"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("application")}
              className={`pb-3 text-[16px] transition-colors ${
                activeTab === "application" 
                  ? "border-b-2 border-[#225760] font-medium text-[#225760]" 
                  : "text-[#5f6368] hover:text-[#202124]"
              }`}
            >
              Application
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Left Sidebar Info */}
          <aside className="w-full md:w-64 shrink-0 space-y-6">
            <div className="border-b border-[#e8eaed] pb-6">
              <span className="block text-[13px] text-[#5f6368] mb-1.5">Location</span>
              <span className="text-[15px] font-normal text-[#202124]">{job.location || "Remote / India"}</span>
            </div>
            <div className="border-b border-[#e8eaed] pb-6">
              <span className="block text-[13px] text-[#5f6368] mb-1.5">Employment Type</span>
              <span className="text-[15px] font-normal text-[#202124]">{job.type || "Full time"}</span>
            </div>
            <div className="border-b border-[#e8eaed] pb-6">
              <span className="block text-[13px] text-[#5f6368] mb-1.5">Department</span>
              <span className="text-[15px] font-normal text-[#202124]">{job.department || "Engineering"}</span>
            </div>
            
            {/* Dynamically Rendered Salary & Benefits */}
            <div className="pb-6">
              <span className="block text-[13px] text-[#5f6368] mb-1.5">Compensation & Benefits</span>
              <span className="text-[15px] font-normal text-[#202124]">
                {job.salary_range || "Competitive • Equity"}
              </span>
              <div className="mt-4 text-[13px] leading-relaxed text-[#70757a]">
                <strong className="block text-[#202124] font-semibold mb-1">Core Benefits</strong>
                <div className="whitespace-pre-wrap">
                  {job.benefits || "Comprehensive health coverage, dynamic workspace stipends, continuous learning allowances, and flexible remote policies."}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content Area */}
          <div className="flex-1 max-w-2xl">
            {activeTab === "overview" && (
              <div className="prose prose-zinc max-w-none text-[15px] leading-[1.6] text-[#444444]">
                <h2 className="text-[18px] font-semibold text-[#202124] mt-0 mb-4">About the Role</h2>
                <p className="whitespace-pre-wrap mb-8">
                  {job.description || "Join Neural AI and help us engineer the memory layer of the future. We are looking for passionate individuals to build India's first sovereign cognitive architecture. As an early team member, you will have significant ownership and impact over our core products."}
                </p>

                {job.requirements && (
                  <>
                    <h2 className="text-[18px] font-semibold text-[#202124] mt-10 mb-4">Requirements</h2>
                    <div className="whitespace-pre-wrap pl-4 border-l-2 border-zinc-100">
                      {job.requirements}
                    </div>
                  </>
                )}

                <button
                  onClick={() => {
                    setActiveTab("application");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="mt-12 rounded bg-[#225760] px-8 py-3 text-sm font-medium text-white transition-all hover:bg-[#1a4148]"
                >
                  Apply for this position
                </button>
              </div>
            )}

            {activeTab === "application" && (
              <div className="animate-in fade-in duration-500">
                <JobApplicationForm 
                  jobId={job.id} 
                  jobTitle={job.title} 
                  salaryRange={job.salary_range}
                  jobType={job.type}
                />
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
