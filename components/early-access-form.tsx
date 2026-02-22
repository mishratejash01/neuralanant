"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function EarlyAccessForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const supabase = createClient();
      const { error } = await supabase.from("waitlist").insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        role: role.trim() || null,
      });

      if (error) {
        if (error.code === "23505") {
          setErrorMsg("This email is already on the waitlist.");
        } else {
          setErrorMsg("Something went wrong. Please try again.");
        }
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
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 shadow-lg">
          <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-bold text-zinc-900">You&apos;re on the list!</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
          We&apos;ll reach out when early access is ready. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-zinc-100 bg-white p-8 shadow-xl shadow-zinc-100/50 sm:p-10">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-zinc-700">Full name</label>
        <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3.5 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-zinc-700">Email address</label>
        <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3.5 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100" />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-zinc-700">
          What describes you best? <span className="font-normal text-zinc-300">(optional)</span>
        </label>
        <select id="role" value={role} onChange={(e) => setRole(e.target.value)}
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-3.5 text-sm text-zinc-900 outline-none transition-all focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100">
          <option value="">Select...</option>
          <option value="developer">Developer / Engineer</option>
          <option value="researcher">AI Researcher</option>
          <option value="founder">Founder / Startup</option>
          <option value="enterprise">Enterprise / Business</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-red-100 bg-red-50/50 px-5 py-3">
          <p className="text-sm text-red-500">{errorMsg}</p>
        </div>
      )}

      <button type="submit" disabled={status === "loading"}
        className="w-full rounded-xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-zinc-900/10 transition-all duration-300 hover:bg-zinc-800 hover:shadow-2xl hover:shadow-zinc-900/20 disabled:opacity-60">
        {status === "loading" ? "Joining..." : "Join the Waitlist"}
      </button>

      <p className="text-center text-xs text-zinc-300">We&apos;ll never share your information. Unsubscribe anytime.</p>
    </form>
  );
}
