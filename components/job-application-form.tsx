"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Props {
  jobId: string;
  jobTitle: string;
  onClose: () => void;
}

export default function JobApplicationForm({ jobId, jobTitle, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const supabase = createClient();
      const { error } = await supabase.from("job_applications").insert({
        job_id: jobId,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
        linkedin_url: linkedin.trim() || null,
        cover_letter: coverLetter.trim() || null,
      });

      if (error) {
        setErrorMsg("Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 shadow-lg">
          <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-bold text-zinc-900">Application submitted!</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
          Thank you for applying to <span className="font-medium text-zinc-700">{jobTitle}</span>. We&apos;ll review your application and get back to you soon.
        </p>
        <button onClick={onClose} className="mt-6 rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100">
          Back to Careers
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-xl shadow-zinc-100/50">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Apply</p>
          <h3 className="mt-1 text-lg font-bold text-zinc-900">{jobTitle}</h3>
        </div>
        <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-50 hover:text-zinc-600">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="app-name" className="block text-sm font-semibold text-zinc-700">Full name</label>
          <input id="app-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
        </div>

        <div>
          <label htmlFor="app-email" className="block text-sm font-semibold text-zinc-700">Email address</label>
          <input id="app-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="app-phone" className="block text-sm font-semibold text-zinc-700">Phone <span className="font-normal text-zinc-300">(optional)</span></label>
            <input id="app-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210"
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
          </div>
          <div>
            <label htmlFor="app-linkedin" className="block text-sm font-semibold text-zinc-700">LinkedIn <span className="font-normal text-zinc-300">(optional)</span></label>
            <input id="app-linkedin" type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/you"
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
          </div>
        </div>

        <div>
          <label htmlFor="app-cover" className="block text-sm font-semibold text-zinc-700">Why do you want to join Neural AI? <span className="font-normal text-zinc-300">(optional)</span></label>
          <textarea id="app-cover" rows={4} value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} placeholder="Tell us about yourself and why you're excited about this role..."
            className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
        </div>

        {status === "error" && (
          <div className="rounded-xl border border-red-100 bg-red-50/50 px-5 py-3">
            <p className="text-sm text-red-500">{errorMsg}</p>
          </div>
        )}

        <button type="submit" disabled={status === "loading"}
          className="w-full rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-zinc-900/10 transition-all duration-300 hover:bg-zinc-800 hover:shadow-2xl hover:shadow-zinc-900/20 disabled:opacity-60">
          {status === "loading" ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
