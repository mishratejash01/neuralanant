"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Props {
  jobId: string;
  jobTitle: string;
  onClose?: () => void; // <-- Made optional to fix the Vercel build error
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

    // Strict Resume Link Validation
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
        resume_url: resumeLink.trim(),
        cover_letter: coverLetter.trim() || null,
      });

      if (error) {
        setErrorMsg("Something went wrong saving your application. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg("A network error occurred. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#225760] text-white mb-6">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-[#202124]">Application Submitted</h3>
        <p className="mt-3 text-[15px] text-[#5f6368]">
          Thank you for applying to Neural AI. We have received your application and will review it shortly.
        </p>
        
        {onClose && (
          <button onClick={onClose} className="mt-6 rounded border border-[#e8eaed] bg-white px-6 py-2 text-sm font-medium text-[#202124] transition-colors hover:bg-zinc-50">
            Close Form
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Basic Info Group */}
      <div className="space-y-4">
        <div>
          <label htmlFor="app-name" className="block text-[14px] font-medium text-[#202124] mb-1.5">Full name <span className="text-red-500">*</span></label>
          <input id="app-name" type="text" required value={name} onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] text-[#202124] outline-none transition-colors focus:border-[#225760]" />
        </div>

        <div>
          <label htmlFor="app-email" className="block text-[14px] font-medium text-[#202124] mb-1.5">Email address <span className="text-red-500">*</span></label>
          <input id="app-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] text-[#202124] outline-none transition-colors focus:border-[#225760]" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="app-phone" className="block text-[14px] font-medium text-[#202124] mb-1.5">Phone <span className="font-normal text-[#5f6368]">(optional)</span></label>
            <input id="app-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] text-[#202124] outline-none transition-colors focus:border-[#225760]" />
          </div>
          <div>
            <label htmlFor="app-linkedin" className="block text-[14px] font-medium text-[#202124] mb-1.5">LinkedIn <span className="font-normal text-[#5f6368]">(optional)</span></label>
            <input id="app-linkedin" type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="https://"
              className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] text-[#202124] outline-none transition-colors focus:border-[#225760]" />
          </div>
        </div>
      </div>

      <hr className="border-[#e8eaed]" />

      {/* Strict Resume Section */}
      <div className="rounded-lg border border-[#e8eaed] bg-[#f8f9fa] p-5">
        <label htmlFor="app-resume" className="block text-[14px] font-medium text-[#202124]">
          Resume Link <span className="text-red-500">*</span>
        </label>
        <p className="mt-1 text-[13px] text-[#5f6368]">Provide a Google Drive, Notion, or Dropbox link to your resume.</p>
        <input id="app-resume" type="url" required value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} placeholder="https://..."
          className="mt-3 w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] text-[#202124] outline-none transition-colors focus:border-[#225760]" />
        
        <label className="mt-4 flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required checked={isPublicConfirmed} onChange={(e) => setIsPublicConfirmed(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-[#225760] focus:ring-[#225760]" />
          <span className="text-[13px] leading-[1.5] text-[#444444]">
            I confirm this link is <strong>publicly accessible without requesting access</strong>. I understand my application will be automatically rejected if the hiring team cannot view the file.
          </span>
        </label>
      </div>

      {/* Cover Letter */}
      <div>
        <label htmlFor="app-cover" className="block text-[14px] font-medium text-[#202124] mb-1.5">Additional Context <span className="font-normal text-[#5f6368]">(optional)</span></label>
        <textarea id="app-cover" rows={4} value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} placeholder="Tell us why you're a good fit for Neural AI..."
          className="w-full resize-y rounded border border-[#e8eaed] bg-white px-4 py-3 text-[15px] text-[#202124] outline-none transition-colors focus:border-[#225760]" />
      </div>

      {status === "error" && (
        <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600">
          {errorMsg}
        </div>
      )}

      <div className="flex gap-4">
        <button type="submit" disabled={status === "loading"}
          className="rounded bg-[#225760] px-8 py-3 text-[15px] font-medium text-white transition-all hover:bg-[#1a4148] disabled:opacity-70 disabled:cursor-not-allowed">
          {status === "loading" ? "Submitting..." : "Submit Application"}
        </button>
        {onClose && (
          <button type="button" onClick={onClose}
            className="rounded border border-[#e8eaed] bg-white px-6 py-3 text-[15px] font-medium text-[#5f6368] transition-all hover:bg-zinc-50 hover:text-[#202124]">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
