import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import JobDetailsClient from "@/components/job-details-client";

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

  // Pass data to the interactive client component (Perplexity style)
  return <JobDetailsClient job={job} />;
}
