import type { Metadata } from "next";
import AnimateOnScroll from "@/components/animate-on-scroll";
import CareersImageAnimation from "@/components/careers-image-animation";
import SupportersMarquee from "@/components/supporters-marquee";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Careers — Neural AI",
  description: "Join us in building the persistent memory layer for frontier AI.",
};

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
  const supabase = await createClient();

  const { data: careersData } = await supabase
    .from("careers")
    .select("*")
    .eq("is_active", true);

  const positions = (careersData as Career[]) || [];
  const mailToLink = `mailto:office@neuralai.in?subject=${encodeURIComponent("Application for Career Opportunity at Neural AI")}`;

  return (
    <main className="bg-[#f6fbfb]">
      {/* ─── SECTION 1: HERO (Centering text in the white space) ─── */}
      <section className="relative z-10 flex h-[80vh] flex-col items-center justify-center px-6">
        <AnimateOnScroll>
          <div className="mb-8 text-center">
            {/* Inter Regular for the label as requested */}
            <span className="font-inter text-[13px] font-normal uppercase tracking-[0.25em] text-black">
              Neural AI Careers
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-100">
          {/* Serif font used here to match screenshot image_052b00.jpg */}
          <h1 className="text-center font-serif text-[clamp(4.5rem,12vw,11rem)] leading-[0.9] tracking-tight text-black">
            <span className="block font-light">Efficiency</span>
            <span className="block font-light italic opacity-90">Wanted</span>
          </h1>
        </AnimateOnScroll>
      </section>

      {/* ─── SECTION 2: ANIMATED IMAGE (Peeking at the bottom) ─── */}
      <CareersImageAnimation />

      {/* ─── SECTION 3: CORE MISSION ─── */}
      <section className="relative z-20 bg-[#f6fbfb] px-6 pb-20 pt-32">
        <AnimateOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-sans text-4xl font-medium leading-tight tracking-tight text-black md:text-5xl">
              Engineer the persistent memory layer for frontier AI.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-sans text-lg leading-relaxed text-zinc-600">
              We are building India&apos;s first memory-native cognitive architecture. Our systems don&apos;t just process data; they remember, reason, and adapt.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ─── SECTION 4: SUPPORTERS MARQUEE ─── */}
      <section className="relative z-20 border-t border-zinc-200 bg-[#f6fbfb] py-16">
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
                    <div className="py-10 text-center text-zinc-500">No open positions at the moment. Check back soon.</div>
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
                                        {pos.location && <span>• {pos.location}</span>}
                                    </div>
                                </div>
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-zinc-50 transition-all group-hover:bg-black group-hover:text-white">
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
                    <p className="font-sans text-base text-zinc-400 md:text-lg">Send us your CV.</p>
                </div>
                
                <a 
                    href={mailToLink}
                    className="flex shrink-0 items-center gap-2 rounded-[4px] bg-white px-8 py-3 font-sans font-medium text-black no-underline transition-transform duration-300 hover:scale-105"
                >
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
