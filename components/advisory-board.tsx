import { createClient } from "@/utils/supabase/server";
import AnimateOnScroll from "./animate-on-scroll";

interface Advisor {
  id: string;
  name: string;
  role: string;
  affiliation: string | null;
  bio: string;
  avatar_url: string | null;
  linkedin_url: string | null;
}

export default async function AdvisoryBoard() {
  const supabase = await createClient();
  const { data: advisors } = await supabase
    .from("advisory_board")
    .select("*")
    .order("display_order", { ascending: true });

  const members: Advisor[] = advisors ?? [];

  return (
    <section className="relative overflow-hidden bg-zinc-50/50 px-6 py-28 sm:py-36">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-700">Advisory Board</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Guided by the best minds
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              World-class advisors from academia, industry, and venture capital shaping our direction.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {members.map((advisor, i) => (
            <AnimateOnScroll key={advisor.id} delay={`delay-${(i % 3 + 1) * 100}`}>
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-100/50">
                <div className="absolute left-0 top-0 h-1 w-full bg-amber-600 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-sm font-bold text-white">
                  {advisor.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-zinc-900">{advisor.name}</h3>
                <p className="mt-1 text-[12px] font-medium text-zinc-500">{advisor.role}</p>
                {advisor.affiliation && <p className="mt-1 text-[11px] font-medium text-zinc-400">{advisor.affiliation}</p>}
                <p className="mt-3 text-[12px] leading-relaxed text-zinc-500">{advisor.bio}</p>
                {advisor.linkedin_url && (
                  <a href={advisor.linkedin_url} className="mt-3 inline-block text-zinc-300 transition-colors hover:text-zinc-600">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
                  </a>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
