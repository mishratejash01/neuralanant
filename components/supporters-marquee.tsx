import Link from "next/link";

// Logo Table: Add your supporter logo URLs here!
const supporterLogos = [
  { name: "Supporter 1", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Supporter 2", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Supporter 3", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Supporter 4", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Supporter 5", url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" },
  { name: "Supporter 6", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/BNP_Paribas_logo.svg" },
];

export default function SupportersMarquee() {
  return (
    <>
      {/* INLINE CSS FOR MARQUEE ANIMATION */}
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

      {/* ── Supporter Logo Marquee Section ── */}
      <section className="group relative flex h-24 cursor-pointer items-center justify-center overflow-hidden border-b border-black/5 bg-[#f6fbfb]">
        
        {/* Scrolling Track */}
        <div className="animate-marquee flex w-[200%] items-center justify-around transition-all duration-500 group-hover:opacity-20 group-hover:blur-sm">
          {/* We map over the array twice to create a seamless infinite loop */}
          {[...supporterLogos, ...supporterLogos].map((logo, index) => (
            <div key={index} className="flex w-48 items-center justify-center">
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-8 max-w-[120px] object-contain opacity-50 grayscale mix-blend-multiply transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Hover Button (Appears only on group hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href="/supporters"
            className="flex items-center gap-3 bg-black px-5 py-2.5 font-sans text-[14px] font-medium tracking-tight text-white transition-transform hover:scale-105"
          >
            Meet our supporters
            {/* Orange Mistral-style arrow */}
            <svg className="h-3.5 w-3.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </section>
    </>
  );
}
