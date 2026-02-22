import Link from "next/link";
import AnimateOnScroll from "./animate-on-scroll";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="section-divider absolute left-0 right-0 top-0" />

      {/* Colorful background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-1 absolute -bottom-[20%] left-[20%] h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="blob-2 absolute -top-[15%] right-[10%] h-[400px] w-[400px] rounded-full bg-orange-200/25 blur-[100px]" />
        <div className="blob-3 absolute bottom-[20%] right-[30%] h-[350px] w-[350px] rounded-full bg-rose-200/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Be among the first to
            <br />
            experience Anant
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-zinc-500">
            Join the waitlist for early access. Founding members get priority
            access and a direct line to our team.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-zinc-900 px-10 py-4 text-[15px] font-semibold text-white shadow-xl shadow-zinc-900/10 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-zinc-900/20"
            >
              Get Early Access
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
