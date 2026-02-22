"use client";

import { useState } from "react";
import JobApplicationForm from "./job-application-form";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export default function JobListings({ jobs }: { jobs: JobOpening[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [applyingTo, setApplyingTo] = useState<{ id: string; title: string } | null>(null);

  if (applyingTo) {
    return (
      <div className="mx-auto max-w-lg">
        <JobApplicationForm jobId={applyingTo.id} jobTitle={applyingTo.title} onClose={() => setApplyingTo(null)} />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => {
        const isExpanded = expandedId === job.id;
        return (
          <div key={job.id} className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-zinc-100/50">
            <button onClick={() => setExpandedId(isExpanded ? null : job.id)} className="flex w-full items-center justify-between p-6 text-left sm:p-8">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold text-zinc-700">{job.department}</span>
                  <span className="rounded-full bg-zinc-50 px-3 py-1 text-[11px] font-medium text-zinc-400">{job.type}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">{job.title}</h3>
                <p className="mt-1 text-[13px] text-zinc-400">{job.location}</p>
              </div>
              <svg className={`ml-4 h-5 w-5 shrink-0 text-zinc-300 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="border-t border-zinc-50 px-6 pb-8 pt-6 sm:px-8">
                <p className="text-[14px] leading-relaxed text-zinc-500">{job.description}</p>
                {job.requirements.length > 0 && (
                  <div className="mt-6">
                    <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-zinc-300">Requirements</p>
                    <ul className="mt-3 space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-zinc-500">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button onClick={() => setApplyingTo({ id: job.id, title: job.title })}
                  className="mt-8 rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/15">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {jobs.length === 0 && (
        <div className="rounded-3xl border border-zinc-100 bg-zinc-50/50 p-12 text-center">
          <p className="text-[15px] text-zinc-400">No open positions at the moment. Check back soon or follow us for updates.</p>
        </div>
      )}
    </div>
  );
}
