import Link from "next/link";
// Make sure this import matches where your Supabase server client is located!
import { createClient } from "@/utils/supabase/server"; 

export default async function SupportersMarquee() {
  const supabase = await createClient();
  
  // Fetch active logos from Supabase, ordered by display_order
  const { data: supporterLogos, error } = await supabase
    .from("supporters")
    .select("name, image_url")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching supporters:", error);
  }

  const logos = supporterLogos || [];

  // If there are no logos in the database yet, we don't render the section at all
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

      <section className="group relative flex h-24 cursor-pointer items-center justify-center overflow-hidden border-b border-black/5 bg-[#f6fbfb]">
        
        <div className="animate-marquee flex w-[200%] items-center justify-around transition-all duration-500 group-hover:opacity-20 group-hover:blur-sm">
          {/* Mapping over the logos array twice creates the seamless infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex w-48 items-center justify-center">
              <img
                src={logo.image_url} 
                alt={logo.name}
                className="max-h-8 max-w-[120px] object-contain opacity-50 grayscale mix-blend-multiply transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href="/supporters"
            className="flex items-center gap-3 bg-black px-5 py-2.5 font-sans text-[14px] font-medium tracking-tight text-white transition-transform hover:scale-105"
          >
            Meet our supporters
            <svg className="h-3.5 w-3.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
