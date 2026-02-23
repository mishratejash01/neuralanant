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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        mobileOpen 
          ? "bg-gradient-to-b from-teal-50 to-[#f6fbfb]" 
          : scrolled 
            ? "bg-teal-50/60 backdrop-blur-md border-b border-teal-100/30 shadow-sm"
            : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-3xl font-semibold tracking-tight text-black">
              neural
            </span>
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3.5 py-2 text-[14px] font-normal transition-all duration-300 text-black ${
                pathname === link.href ? "bg-teal-100/50" : "hover:bg-teal-100/40"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-3">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 bg-teal-100 px-5 py-2.5 text-[14px] font-normal text-black transition-all duration-300 hover:bg-teal-200"
            >
              Get Early Access <span className="font-normal">&gt;</span>
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-teal-100/50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block h-[1.5px] w-5 bg-black transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-black transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-black transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 top-[76px] z-40 bg-[#f6fbfb]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
        mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}>
        <div className="flex flex-col gap-1 px-6 pt-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`rounded-xl px-4 py-3.5 text-[15px] font-normal transition-colors text-black ${
                pathname === link.href ? "bg-teal-100/50" : "hover:bg-teal-100/40"
              }`}>
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-teal-100/30 pt-6">
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-teal-100 py-3.5 text-[15px] font-normal text-black transition-colors hover:bg-teal-200">
              Get Early Access <span className="font-normal">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
