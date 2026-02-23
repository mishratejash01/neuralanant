import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function SupportersMarquee() {
  const supabase = await createClient();
  
  const { data: supporterLogos, error } = await supabase
    .from("supporters")
    .select("name, image_url")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching supporters:", error);
  }

  const logos = supporterLogos || [];

  if (logos.length === 0) return null;

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. INCREASED HEIGHT: Changed h-24 to h-48 to give the section massive vertical breathing room */}
      <section className="group relative flex h-48 cursor-pointer items-center justify-center bg-[#f6fbfb]">
        
        {/* ALIGNED CONTAINER + CSS MASK */}
        <div 
          className="relative mx-auto flex w-full max-w-6xl items-center overflow-hidden px-6"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          {/* Track: Retained the 60% opacity and subtle blur on hover */}
          <div className="animate-marquee flex w-[200%] items-center justify-around transition-all duration-500 group-hover:opacity-60 group-hover:blur-[2px]">
            {[...logos, ...logos].map((logo, index) => (
              {/* 2. INCREASED SPACING: Changed w-48 to w-72 to give the larger logos more horizontal gap */}
              <div key={index} className="flex w-72 items-center justify-center px-4">
                <img
                  src={logo.image_url} 
                  alt={logo.name}
                  {/* 3. BIGGER LOGOS: Changed max-h-8 to max-h-14 and max-w to 180px */}
                  className="max-h-14 max-w-[180px] object-contain opacity-50 grayscale mix-blend-multiply transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hover Button: Dark teal, no rounded corners, no arrow */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href="/supporters"
            className="bg-teal-900 px-7 py-3 font-sans text-[14px] font-medium tracking-tight text-white transition-transform hover:scale-105"
          >
            Meet our customers
          </Link>
        </div>
      </section>
    </>
  );
}
