import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import AnimateOnScroll from "@/components/animate-on-scroll";
import JobListings from "@/components/job-listings";
import CTABanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Careers — Neural AI",
  description:
    "Join the team building India's first LLM with persistent memory. Explore open roles at Neural AI.",
};

export default async function CareersPage() {
  const supabase = await createClient();
  const { data: jobs } = await supabase
    .from("job_openings")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-16 pt-36 sm:pb-24 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-1 absolute left-[15%] top-[25%] h-[400px] w-[400px] rounded-full bg-rose-100/25 blur-[100px]" />
          <div className="blob-3 absolute right-[20%] top-[30%] h-[300px] w-[300px] rounded-full bg-blue-100/20 blur-[100px]" />
        </div>
        <div className="grid-dot-pattern pointer-events-none absolute inset-0 opacity-50" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">Careers</p>
            <h1 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Build the future of AI memory
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              We&apos;re looking for exceptional people who believe AI should remember, learn, and
              grow. Join us in Chennai and help build something that&apos;s never been done before.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                  ),
                  title: "Frontier Research",
                  desc: "Work on problems no one has solved yet. Persistent memory in LLMs is uncharted territory.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  ),
                  title: "World-Class Team",
                  desc: "Collaborate with alumni from Google, Microsoft, DeepMind, and top Indian institutions.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                  ),
                  title: "IIT Madras Backed",
                  desc: "Incubated at IIT Madras Research Park with access to top-tier academic resources.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  ),
                  title: "Early Stage Impact",
                  desc: "Shape the product, culture, and direction of a company from day one.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-100/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="px-6 pb-28 sm:pb-36">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <div className="mb-10 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">Open Positions</p>
              <h2 className="font-display mt-3 text-3xl tracking-tight text-zinc-900 sm:text-4xl">Find your role</h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-200">
            <JobListings jobs={jobs ?? []} />
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
