"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

// --- Types ---
type Advisor = {
  id: string;
  name: string;
  logo_url: string;
};

type Career = {
  id: string;
  title: string;
  department: string | null;
  location: string | null;
  type: string | null;
  is_active: boolean | null;
  application_link: string | null;
};

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();
  
  // State
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [positions, setPositions] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: advisorsData } = await supabase.from('advisors').select('*');
        const { data: careersData } = await supabase.from('careers').select('*').eq('is_active', true);
        
        if (advisorsData) setAdvisors(advisorsData);
        if (careersData) setPositions(careersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [supabase]);

  // Animation Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.95]);
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.8], ["0px", "8px"]);
  const filter = useTransform(scrollYProgress, [0.4, 0.9], ["blur(0px)", "blur(8px)"]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.6]);

  // Create encoded mailto link
  const mailToLink = `mailto:office@neuralai.in?subject=${encodeURIComponent("Application for Career Opportunity at Neural AI")}`;

  return (
    <main className="bg-[#f6fbfb]">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      {/* --- SECTION 1: HERO --- */}
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.25em] text-black">
              Neural AI Careers
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-center font-sans text-[clamp(4rem,10vw,10rem)] leading-[0.95] tracking-tighter text-black"
          >
            <span className="block font-medium">Efficiency</span>
            <span className="block font-light italic text-zinc-400">Wanted.</span>
          </motion.h1>
      </div>

      {/* --- SECTION 2: IMAGE FRAME --- */}
      <div ref={containerRef} className="relative h-[150vh] bg-[#f6fbfb]">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-0 sm:px-6">
          <motion.div 
            style={{ scale, borderRadius, filter, opacity: imageOpacity }}
            className="z-0 h-full w-full origin-center overflow-hidden bg-black shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
              alt="Neural AI Office" 
              className="h-full w-full object-cover opacity-90 grayscale"
            />
          </motion.div>
        </div>
      </div>

      {/* --- SECTION 3: CORE MISSION CONTENT --- */}
      <div className="relative z-20 bg-[#f6fbfb] px-6 pb-20 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 font-sans text-4xl font-medium leading-tight tracking-tight text-black md:text-5xl">
            Engineer the persistent memory layer for frontier AI.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl font-sans text-lg leading-relaxed text-zinc-600">
            We are building India&apos;s first memory-native cognitive architecture. Our systems don&apos;t just process data; they remember, reason, and adapt. We need researchers and engineers who understand the value of persistent context and boundary-pushing infrastructure.
          </p>
        </div>
      </div>

      {/* --- SECTION 4: ADVISORS / BACKERS MARQUEE --- */}
      <div className="relative z-20 border-t border-zinc-200 bg-[#f6fbfb] py-16">
        <div className="mb-10 text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Backed & Advised By
            </span>
        </div>
        
        {advisors.length > 0 ? (
            <div className="relative w-full overflow-hidden">
                <div className="flex w-[200%] animate-scroll">
                    <div className="flex w-1/2 items-center justify-around gap-8 px-10">
                        {advisors.map((advisor) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img key={advisor.id} src={advisor.logo_url} alt={advisor.name} className="h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-12" />
                        ))}
                    </div>
                    <div className="flex w-1/2 items-center justify-around gap-8 px-10">
                        {advisors.map((advisor) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img key={`dup-${advisor.id}`} src={advisor.logo_url} alt={advisor.name} className="h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-12" />
                        ))}
                    </div>
                </div>
            </div>
        ) : (
          <div className="text-center text-sm text-zinc-400">Loading network...</div>
        )}
      </div>

      {/* --- SECTION 5: OPEN POSITIONS --- */}
      <div className="relative z-20 bg-[#f6fbfb] px-6 py-32">
        <div className="mx-auto max-w-4xl">
            <h3 className="mb-12 text-center font-sans text-3xl font-medium tracking-tight text-black">Open Roles</h3>
            <div className="flex flex-col gap-4">
                {isLoading ? (
                    <div className="py-10 text-center text-zinc-400">Loading positions...</div>
                ) : positions.length === 0 ? (
                    <div className="py-10 text-center text-zinc-500">No open positions at the moment. Check back soon.</div>
                ) : (
                    positions.map((pos) => (
                        <a 
                            key={pos.id} 
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
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        </a>
                    ))
                )}
            </div>
        </div>
      </div>

      {/* --- SECTION 6: CTA CARD --- */}
      <div className="relative z-20 flex justify-center bg-[#f6fbfb] px-6 pb-32">
        <div className="flex w-full max-w-4xl flex-col items-center justify-between gap-6 rounded-[4px] bg-black p-8 shadow-2xl md:flex-row md:p-12">
            <div className="text-center md:text-left">
                <h3 className="mb-2 font-sans text-2xl font-medium tracking-tight text-white md:text-3xl">Can&apos;t find your role?</h3>
                <p className="font-sans text-base text-zinc-400 md:text-lg">We are always looking for exceptional talent. Send us your CV.</p>
            </div>
            
            <a 
                href={mailToLink}
                className="flex shrink-0 items-center gap-2 rounded-[4px] bg-white px-8 py-3 font-sans font-medium text-black no-underline transition-transform duration-300 hover:scale-105"
            >
                <Mail className="h-4 w-4" />
                Send CV
            </a>
        </div>
      </div>

    </main>
  );
}
