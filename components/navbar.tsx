"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-zinc-100 bg-white/90 shadow-sm shadow-zinc-100/50 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-bold text-white">
              N
            </span>
            <span className="text-[15px] font-bold tracking-tight text-zinc-900">
              Neural AI
            </span>
          </Link>
          <span className="hidden items-center gap-1.5 rounded-full border border-amber-200/60 bg-amber-50/60 px-3 py-1 lg:inline-flex">
            <span className="text-[10px] font-semibold text-amber-800">Incubated at IIT Madras</span>
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-400 hover:bg-zinc-50 hover:text-zinc-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-3">
            <Link
              href="/contact"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-zinc-800"
            >
              Get Early Access
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-zinc-50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block h-[1.5px] w-5 bg-zinc-700 transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-zinc-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-zinc-700 transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 top-[65px] z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
        mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}>
        <div className="flex flex-col gap-1 px-6 pt-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                pathname === link.href ? "bg-zinc-100 text-zinc-900" : "text-zinc-500 hover:bg-zinc-50"
              }`}>
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-zinc-100 pt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/60 bg-amber-50/60 px-3 py-1.5">
              <span className="text-[11px] font-semibold text-amber-800">Incubated at IIT Madras</span>
            </span>
          </div>
          <div className="mt-4">
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="block rounded-full bg-zinc-900 py-3.5 text-center text-[15px] font-medium text-white">
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
