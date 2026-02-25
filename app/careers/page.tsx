import type { Metadata } from "next";
import AnimateOnScroll from "@/components/animate-on-scroll";
import SupportersMarquee from "@/components/supporters-marquee";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Careers — Neural AI",
  description: "Join us in building the persistent memory layer for frontier AI.",
};

// Strict TypeScript interfaces matching your Supabase DB
interface Career {
  id: string;
  title: string;
  department: string | null;
  location: string | null;
  type: string | null;
  is_active: boolean | null;
  application_link: string | null;
}

export default async function CareersPage() {
  // Safe Server-Side Fetching using YOUR existing utility
  const supabase = await createClient();

  const { data: careersData } = await supabase
    .from("careers")
    .select("*")
    .eq("is_active", true);

  const positions = (careersData as Career[]) || [];

  const mailToLink = `mailto:office@neuralai.in?subject=${encodeURIComponent("Application for Career Opportunity at Neural AI")}`;

  return (
    <main className="bg-[#f6fbfb]">
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6">
        <AnimateOnScroll>
          <div className="mb-8 text-center">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.25em] text-black">
              Neural AI Careers
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-100">
          <h1 className="text-center font-sans text-[clamp(4rem,10vw,10rem)] leading-[0.95] tracking-tighter text-black">
            <span className="block font-medium">Efficiency</span>
            <span className="block font-light italic text-zinc-400">Wanted.</span>
          </h1>
        </AnimateOnScroll>
      </section>

      {/* ─── SECTION 2: STICKY IMAGE FRAME ─── */}
      <section className="relative h-[150vh] bg-[#f6fbfb]">
        {/* Uses native CSS sticky positioning instead of heavy framer-motion JS */}
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-0 pb-12 pt-24 sm:px-6">
          <div className="z-0 h-full w-full overflow-hidden bg-black shadow-2xl sm:rounded-[4px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
              alt="Neural AI Office" 
              className="h-full w-full object-cover opacity-90 grayscale transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: CORE MISSION CONTENT ─── */}
      <section className="relative z-20 bg-[#f6fbfb] px-6 pb-20 pt-32">
        <AnimateOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-sans text-4xl font-medium leading-tight tracking-tight text-black md:text-5xl">
              Engineer the persistent memory layer for frontier AI.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-sans text-lg leading-relaxed text-zinc-600">
              We are building India&apos;s first memory-native cognitive architecture. Our systems don&apos;t just process data; they remember, reason, and adapt. We need researchers and engineers who understand the value of persistent context and boundary-pushing infrastructure.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ─── SECTION 4: SUPPORTERS MARQUEE ─── */}
      <section className="relative z-20 border-t border-zinc-200 bg-[#f6fbfb] py-16">
        <div className="mb-10 text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Backed & Advised By
            </span>
        </div>
        {/* Reusing your existing component directly */}
        <SupportersMarquee />
      </section>

      {/* ─── SECTION 5: OPEN POSITIONS ─── */}
      <section className="relative z-20 bg-[#f6fbfb] px-6 py-32">
        <div className="mx-auto max-w-4xl">
            <AnimateOnScroll>
                <h3 className="mb-12 text-center font-sans text-3xl font-medium tracking-tight text-black">Open Roles</h3>
            </AnimateOnScroll>
            
            <div className="flex flex-col gap-4">
                {positions.length === 0 ? (
                    <AnimateOnScroll delay="delay-100">
                        <div className="py-10 text-center text-zinc-500">No open positions at the moment. Check back soon.</div>
                    </AnimateOnScroll>
                ) : (
                    positions.map((pos, index) => (
                        <AnimateOnScroll key={pos.id} delay={`delay-${(index % 3 + 1) * 100}`}>
                            <a 
                                href={pos.application_link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex cursor-pointer items-center justify-between rounded-[4px] border border-zinc-200 bg-white p-6 shadow-sm no-underline transition-all duration-300 hover:border-zinc-400 hover:shadow-md"
                            >
                                <div>
                                    <h4 className="font-sans text-lg font-medium text-black transition-colors group-hover:text-teal-700">{pos.title}</h4>
                                    <div className="mt-2 flex flex-wrap gap-3 font-sans text-sm text-zinc-500">
                                        {pos.department && <span>{pos.department}</span>}
                                        {pos.department && <span>•</span>}
                                        {pos.type && <span>{pos.type}</span>}
                                        {pos.type && pos.location && <span>•</span>}
                                        {pos.location && <span>{pos.location}</span>}
                                    </div>
                                </div>
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-zinc-50 transition-all group-hover:bg-black group-hover:text-white">
                                    {/* Native SVG Arrow Right */}
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        </AnimateOnScroll>
                    ))
                )}
            </div>
        </div>
      </section>

      {/* ─── SECTION 6: CTA CARD ─── */}
      <section className="relative z-20 flex justify-center bg-[#f6fbfb] px-6 pb-32">
        <AnimateOnScroll className="w-full max-w-4xl">
            <div className="flex w-full flex-col items-center justify-between gap-6 rounded-[4px] bg-black p-8 shadow-2xl md:flex-row md:p-12">
                <div className="text-center md:text-left">
                    <h3 className="mb-2 font-sans text-2xl font-medium tracking-tight text-white md:text-3xl">Can&apos;t find your role?</h3>
                    <p className="font-sans text-base text-zinc-400 md:text-lg">We are always looking for exceptional talent. Send us your CV.</p>
                </div>
                
                <a 
                    href={mailToLink}
                    className="flex shrink-0 items-center gap-2 rounded-[4px] bg-white px-8 py-3 font-sans font-medium text-black no-underline transition-transform duration-300 hover:scale-105"
                >
                    {/* Native SVG Mail Icon */}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send CV
                </a>
            </div>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
