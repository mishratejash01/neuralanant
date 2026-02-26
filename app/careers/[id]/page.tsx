import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import JobApplicationForm from "@/components/job-application-form";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("careers").select("title").eq("id", resolvedParams.id).single();
  
  return {
    title: data ? `${data.title} — Neural AI Careers` : "Job Application",
  };
}

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();
  
  // Fetch the specific job opening
  const { data: job } = await supabase
    .from("careers")
    .select("*")
    .eq("id", resolvedParams.id)
    .single();

  if (!job || !job.is_active) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#f6fbfb] selection:bg-teal-100 font-sans flex flex-col">
      
      {/* ─── CUSTOM TOP BAR FOR APPLICATION PAGE ─── */}
      <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 bg-white/80 px-6 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-black transition-colors hover:text-teal-700">
            neural
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="text-sm font-medium text-zinc-500">Careers</span>
        </div>
        <Link href="/careers" className="text-sm font-medium text-zinc-500 transition-colors hover:text-black flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all roles
        </Link>
      </header>

      {/* ─── MAIN CONTENT AREA ─── */}
      <main className="flex-1 mx-auto max-w-6xl w-full px-6 py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_450px]">
          
          {/* Left Column: Job Overview */}
          <div>
            <h1 className="text-4xl font-medium tracking-tight text-black md:text-5xl mb-6">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {job.department && (
                <span className="rounded bg-white border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-600">
                  {job.department}
                </span>
              )}
              {job.type && (
                <span className="rounded bg-white border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-600">
                  {job.type}
                </span>
              )}
              {job.location && (
                <span className="rounded bg-white border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-600">
                  {job.location}
                </span>
              )}
            </div>

            <div className="prose prose-zinc max-w-none text-zinc-600">
              <h3 className="text-xl font-medium text-black mb-4">About the Role</h3>
              <p className="whitespace-pre-wrap leading-relaxed">
                {job.description || "Join Neural AI and help us engineer the memory layer of the future. We are looking for passionate individuals to build India's first sovereign cognitive architecture. As an early team member, you will have significant ownership and impact over our core products."}
              </p>
              
              {job.requirements && (
                <>
                  <h3 className="text-xl font-medium text-black mt-10 mb-4">Requirements</h3>
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {job.requirements}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Sticky Application Form */}
          <div className="relative">
            <div className="sticky top-24">
              <JobApplicationForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
