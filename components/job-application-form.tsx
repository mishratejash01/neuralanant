"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Props {
  jobId: string;
  jobTitle: string;
  onClose?: () => void;
}

export default function JobApplicationForm({ jobId, jobTitle, onClose }: Props) {
  // Section 1: Personal Details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [gender, setGender] = useState("");

  // Section 2: Online Presence
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  // Section 3: Role & Experience
  const [whyThisRole, setWhyThisRole] = useState("");
  const [pastExperience, setPastExperience] = useState("");

  // Section 4: Proof of Work
  const [proofOfWorkLink, setProofOfWorkLink] = useState("");
  const [isPublicConfirmed, setIsPublicConfirmed] = useState(false);
  const [proudestProject, setProudestProject] = useState("");
  const [aiUsage, setAiUsage] = useState("");

  // Section 5: Legal
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Strict Validations
    if (!isPublicConfirmed) {
      setErrorMsg("You must confirm your proof of work link is publicly accessible.");
      setStatus("error");
      return;
    }
    if (!agreedToTerms) {
      setErrorMsg("You must agree to the Terms and Conditions to apply.");
      setStatus("error");
      return;
    }
    try {
      new URL(proofOfWorkLink);
    } catch {
      setErrorMsg("Please enter a valid URL for your Proof of Work.");
      setStatus("error");
      return;
    }

    try {
      const supabase = createClient();

      // Mapping directly to the new dedicated columns in the database
      const { error } = await supabase.from("job_applications").insert({
        job_id: jobId,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
        linkedin_url: linkedin.trim() || null,
        twitter_url: twitter.trim() || null,
        instagram_url: instagram.trim() || null,
        resume_url: proofOfWorkLink.trim(), // Reusing resume_url for proof of work
        college: college.trim(),
        year_of_study: yearOfStudy,
        gender: gender,
        why_this_role: whyThisRole.trim(),
        past_experience: pastExperience.trim(),
        proudest_project: proudestProject.trim(),
        ai_usage: aiUsage.trim(),
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
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#225760] text-white mb-6">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-[#202124]">Application Submitted</h3>
        <p className="mt-3 text-[15px] text-[#5f6368]">
          Thank you for applying to Neural AI. We have received your detailed application and will review it shortly.
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
    <form onSubmit={handleSubmit} className="space-y-10">
      
      {/* ─── SECTION 1: PERSONAL DETAILS ─── */}
      <section>
        <h3 className="text-[18px] font-semibold text-[#202124] mb-4">1. Personal Details</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Full Name <span className="text-red-500">*</span></label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Email ID <span className="text-red-500">*</span></label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]" />
            </div>
            <div>
              <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Phone No <span className="text-red-500">*</span></label>
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]" />
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#202124] mb-1.5">College Name <span className="text-red-500">*</span></label>
            <input type="text" required value={college} onChange={(e) => setCollege(e.target.value)}
              className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Year of Study <span className="text-red-500">*</span></label>
              <select required value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)}
                className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]">
                <option value="">Select Year...</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Graduated">Graduated</option>
              </select>
            </div>
            <div>
              <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Gender <span className="text-red-500">*</span></label>
              <select required value={gender} onChange={(e) => setGender(e.target.value)}
                className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]">
                <option value="">Select Gender...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#e8eaed]" />

      {/* ─── SECTION 2: ONLINE PRESENCE ─── */}
      <section>
        <h3 className="text-[18px] font-semibold text-[#202124] mb-1">2. Online Presence</h3>
        <p className="text-[13px] text-[#5f6368] mb-4">
          At least one profile must be complete and active. Empty or private profiles will negatively impact your application.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-[14px] font-medium text-[#202124] mb-1.5">LinkedIn Profile URL <span className="text-red-500">*</span></label>
            <input type="url" required value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="https://linkedin.com/in/..."
              className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[14px] font-medium text-[#202124] mb-1.5">X (Twitter) URL <span className="font-normal text-[#5f6368]">(optional)</span></label>
              <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="NA if not exists"
                className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]" />
            </div>
            <div>
              <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Instagram URL <span className="font-normal text-[#5f6368]">(optional)</span></label>
              <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="NA if not exists"
                className="w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]" />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#e8eaed]" />

      {/* ─── SECTION 3: ROLE SELECTION ─── */}
      <section>
        <h3 className="text-[18px] font-semibold text-[#202124] mb-4">3. Role & Experience</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Applying For</label>
            <input type="text" disabled value={jobTitle}
              className="w-full rounded border border-[#e8eaed] bg-zinc-50 px-4 py-2.5 text-[15px] text-zinc-500 outline-none cursor-not-allowed" />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Why this role and not others? <span className="text-red-500">*</span></label>
            <textarea required rows={3} value={whyThisRole} onChange={(e) => setWhyThisRole(e.target.value)}
              className="w-full resize-y rounded border border-[#e8eaed] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#225760]" />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Mention all your past experiences of work <span className="text-red-500">*</span></label>
            <textarea required rows={3} value={pastExperience} onChange={(e) => setPastExperience(e.target.value)}
              className="w-full resize-y rounded border border-[#e8eaed] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#225760]" />
          </div>
        </div>
      </section>

      <hr className="border-[#e8eaed]" />

      {/* ─── SECTION 4: PROOF OF WORK ─── */}
      <section>
        <h3 className="text-[18px] font-semibold text-[#202124] mb-4">4. Proof of Work</h3>
        
        <div className="rounded-lg border border-[#e8eaed] bg-[#f8f9fa] p-5 mb-6">
          <label className="block text-[14px] font-medium text-[#202124]">
            Share your best work (Link) <span className="text-red-500">*</span>
          </label>
          <p className="mt-1 text-[13px] text-[#5f6368]">
            For Software: GitHub/Live projects. For Design: Portfolio/Figma. For Non-Tech: Content, Drives, Audio/Video.
          </p>
          <input type="url" required value={proofOfWorkLink} onChange={(e) => setProofOfWorkLink(e.target.value)} placeholder="https://..."
            className="mt-3 w-full rounded border border-[#e8eaed] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#225760]" />
          
          <label className="mt-4 flex items-start gap-3 cursor-pointer">
            <input type="checkbox" required checked={isPublicConfirmed} onChange={(e) => setIsPublicConfirmed(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-[#225760] focus:ring-[#225760]" />
            <span className="text-[13px] leading-[1.5] text-[#444444]">
              I confirm this link is <strong>publicly accessible without requesting access</strong>. I understand my application will be automatically rejected if the hiring team cannot view the file.
            </span>
          </label>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Share one project/work you are most proud of <span className="text-red-500">*</span></label>
            <p className="text-[12px] text-[#5f6368] mb-2">Explain what you built/did, your exact contribution, process, and the outcome.</p>
            <textarea required rows={4} value={proudestProject} onChange={(e) => setProudestProject(e.target.value)}
              className="w-full resize-y rounded border border-[#e8eaed] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#225760]" />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#202124] mb-1.5">Show how you have used AI in your work <span className="text-red-500">*</span></label>
            <p className="text-[12px] text-[#5f6368] mb-2">Be specific about tools, workflow, and output.</p>
            <textarea required rows={3} value={aiUsage} onChange={(e) => setAiUsage(e.target.value)}
              className="w-full resize-y rounded border border-[#e8eaed] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#225760]" />
          </div>
        </div>
      </section>

      <hr className="border-[#e8eaed]" />

      {/* ─── SECTION 5: LEGAL CONFIRMATIONS ─── */}
      <section>
        <h3 className="text-[18px] font-semibold text-[#202124] mb-4">5. Legal Confirmations</h3>
        
        {/* Anti-ChatGPT Warning */}
        <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <h4 className="text-[14px] font-bold text-amber-900 mb-2">IMPORTANT NOTE</h4>
          <p className="text-[13px] text-amber-800 leading-relaxed mb-3">
            Do not submit copied answers or default ChatGPT style responses. It is obvious and it will hurt your chances. We shortlist not just on what you have done, but how you think and how you present it. Your answers show us how you actually use AI and whether you can use it smartly or just generate generic output.
          </p>
          <p className="text-[13px] font-medium text-amber-900">
            Use AI as a tool, not a crutch. Structure your thoughts, add your own context, and make it real.
          </p>
        </div>

        {/* Terms and Conditions Box */}
        <div className="rounded-lg border border-[#e8eaed] bg-white p-5">
          <h4 className="text-[14px] font-bold text-[#202124] mb-3">Terms and Conditions</h4>
          <ul className="space-y-2 text-[13px] text-[#5f6368] list-decimal list-inside mb-5 pl-1">
            <li>You understand that this role involves high ownership, accountability, and performance-driven expectations.</li>
            <li>You acknowledge that this may be an unpaid internship at the initial stage, with a performance-based transition to a paid role.</li>
            <li>You confirm that all information provided is accurate, complete, and truthful to the best of your knowledge.</li>
            <li>You accept that incomplete applications or submissions with low quality or generic responses may be rejected.</li>
            <li>You consent to being contacted via email, phone, or relevant platforms regarding this application.</li>
          </ul>

          <label className="flex items-start gap-3 cursor-pointer border-t border-[#e8eaed] pt-4">
            <input type="checkbox" required checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-[#225760] focus:ring-[#225760]" />
            <span className="text-[14px] font-medium text-[#202124]">
              I have read, understood, and agree to the Terms and Conditions above. <span className="text-red-500">*</span>
            </span>
          </label>
        </div>
      </section>

      {status === "error" && (
        <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600">
          {errorMsg}
        </div>
      )}

      {/* Submit Buttons */}
      <div className="flex gap-4 pt-4 border-t border-[#e8eaed]">
        <button type="submit" disabled={status === "loading"}
          className="rounded bg-[#225760] px-8 py-3 text-[15px] font-medium text-white transition-all hover:bg-[#1a4148] disabled:opacity-70 disabled:cursor-not-allowed">
          {status === "loading" ? "Submitting Application..." : "Submit Application"}
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
