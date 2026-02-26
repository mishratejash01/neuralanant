import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import JobApplicationForm from "@/components/job-application-form";

// Optionally set dynamic metadata for the tab title
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
    <main className="min-h-screen bg-[#f6fbfb] selection:bg-teal-100 font-sans">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        
        <div className="grid gap-12 lg:grid-cols-[1fr_450px]">
          {/* Left Column: Job Overview */}
          <div>
            <a href="/careers" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Careers
            </a>
            
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
                {/* Check if you have a description column in your DB, otherwise show fallback */}
                {job.description || "Join Neural AI and help us engineer the memory layer of the future. We are looking for passionate individuals to build India's first sovereign cognitive architecture. As an early team member, you will have significant ownership and impact over our core products."}
              </p>
              
              {job.requirements && (
                <>
                  <h3 className="text-xl font-medium text-black mt-8 mb-4">Requirements</h3>
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {job.requirements}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Sticky Application Form */}
          <div className="relative">
            <div className="sticky top-12">
              <JobApplicationForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
