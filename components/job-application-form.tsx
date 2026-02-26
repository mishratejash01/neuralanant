"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Props {
  jobId: string;
  jobTitle: string;
  onClose?: () => void;
}

export default function JobApplicationForm({ jobId, jobTitle, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [isPublicConfirmed, setIsPublicConfirmed] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Pre-flight validation for the resume link
    if (!isPublicConfirmed) {
      setErrorMsg("You must confirm your resume link is publicly accessible.");
      setStatus("error");
      return;
    }

    try {
      new URL(resumeLink);
    } catch {
      setErrorMsg("Please enter a valid URL for your resume.");
      setStatus("error");
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase.from("job_applications").insert({
        job_id: jobId,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
        linkedin_url: linkedin.trim() || null,
        resume_url: resumeLink.trim(), // Added resume URL field
        cover_letter: coverLetter.trim() || null,
      });

      if (error) {
        console.error("Supabase Error:", error);
        setErrorMsg("Something went wrong saving your application. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMsg("A network error occurred. Please try again.");
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
        
        {onClose ? (
          <button onClick={onClose} className="mt-6 rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100">
            Close
          </button>
        ) : (
          <a href="/careers" className="mt-6 inline-block rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100">
            Back to Careers
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-100 bg-white p-6 sm:p-8 shadow-xl shadow-zinc-100/50">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Apply Now</p>
          <h3 className="mt-1 text-lg font-bold text-zinc-900">{jobTitle}</h3>
        </div>
        {onClose && (
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-50 hover:text-zinc-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="app-name" className="block text-sm font-semibold text-zinc-700">Full name <span className="text-red-500">*</span></label>
          <input id="app-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
            className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
        </div>

        <div>
          <label htmlFor="app-email" className="block text-sm font-semibold text-zinc-700">Email address <span className="text-red-500">*</span></label>
          <input id="app-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
            className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="app-phone" className="block text-sm font-semibold text-zinc-700">Phone <span className="font-normal text-zinc-400">(optional)</span></label>
            <input id="app-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210"
              className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
          </div>
          <div>
            <label htmlFor="app-linkedin" className="block text-sm font-semibold text-zinc-700">LinkedIn <span className="font-normal text-zinc-400">(optional)</span></label>
            <input id="app-linkedin" type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/you"
              className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
          </div>
        </div>

        {/* ─── NEW RESUME LINK SECTION ─── */}
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <label htmlFor="app-resume" className="block text-sm font-semibold text-zinc-700">
            Resume Link <span className="text-red-500">*</span>
          </label>
          <p className="mt-1 text-[12px] text-zinc-500">Provide a link to your resume (Google Drive, Notion, etc.).</p>
          <input id="app-resume" type="url" required value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} placeholder="https://..."
            className="mt-3 w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100" />
          
          <label className="mt-4 flex items-start gap-3 cursor-pointer">
            <input type="checkbox" required checked={isPublicConfirmed} onChange={(e) => setIsPublicConfirmed(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900" />
            <span className="text-[13px] leading-snug text-zinc-700">
              I confirm this link is <strong>publicly accessible</strong>. I understand my application will be automatically rejected if the file requires access permission.
            </span>
          </label>
        </div>

        <div>
          <label htmlFor="app-cover" className="block text-sm font-semibold text-zinc-700">Why Neural AI? <span className="font-normal text-zinc-400">(optional)</span></label>
          <textarea id="app-cover" rows={3} value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} placeholder="Tell us why you're excited about this role..."
            className="mt-1.5 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
        </div>

        {status === "error" && (
          <div className="rounded-xl border border-red-100 bg-red-50/50 px-5 py-3">
            <p className="text-sm text-red-600">{errorMsg}</p>
          </div>
        )}

        <button type="submit" disabled={status === "loading"}
          className="w-full mt-2 rounded-xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-zinc-900/10 transition-all duration-300 hover:bg-zinc-800 hover:shadow-2xl hover:shadow-zinc-900/20 disabled:opacity-60">
          {status === "loading" ? "Submitting Application..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
