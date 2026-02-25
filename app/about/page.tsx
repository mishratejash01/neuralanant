import AnimateOnScroll from "./animate-on-scroll";

export default function Hero() {
  return (
    <section 
      className="relative flex min-h-screen flex-col items-center px-5 py-[100px] text-[#111] antialiased sm:pt-32"
      style={{
        backgroundColor: "#fffdf0",
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* ─── Header Section ─── */}
      <div className="mb-[60px] max-w-[800px] text-center z-10">
        <AnimateOnScroll>
          <h1 className="mb-6 font-sans text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-[-0.04em] text-black">
            Frontier AI. For all of us.
          </h1>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay="delay-100">
          <p className="text-[1.15rem] font-normal leading-[1.6] tracking-[-0.01em] text-[#666]">
            We exist to make the frontier memory layer accessible to everyone.
          </p>
        </AnimateOnScroll>
      </div>

      {/* ─── Image Container ─── */}
      <AnimateOnScroll delay="delay-200" className="w-full max-w-[1100px] z-10">
        <div className="group relative w-full overflow-hidden rounded-[4px] bg-black shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
            alt="Visual representation of the AI memory layer and neural networks"
            className="block h-auto w-full opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
