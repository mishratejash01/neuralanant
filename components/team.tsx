import { createClient } from "@/utils/supabase/server";
import AnimateOnScroll from "./animate-on-scroll";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
}

export default async function Team() {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("team_members")
    .select("*")
    .order("display_order", { ascending: true });

  const teamMembers: TeamMember[] = members ?? [];

  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-2 absolute -right-[5%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-100/25 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">Team</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Built by engineers who believe in India&apos;s AI future
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-zinc-500">
              A team of researchers and engineers from leading AI labs, united by a shared mission.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <AnimateOnScroll key={member.id} delay={`delay-${(i % 3 + 1) * 100}`}>
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50">
                <div className="absolute left-0 top-0 h-1 w-full bg-zinc-900 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 text-xl font-bold text-white">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-6 text-base font-semibold text-zinc-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-zinc-500">{member.role}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-zinc-500">{member.bio}</p>

                {(member.linkedin_url || member.twitter_url) && (
                  <div className="mt-5 flex gap-3">
                    {member.linkedin_url && (
                      <a href={member.linkedin_url} className="text-zinc-300 transition-colors hover:text-zinc-600">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
                      </a>
                    )}
                    {member.twitter_url && (
                      <a href={member.twitter_url} className="text-zinc-300 transition-colors hover:text-zinc-600">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
