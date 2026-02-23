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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Transitions the navbar right as the 97vh Hero section ends
      setIsPastHero(window.scrollY > window.innerHeight * 0.95);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Run immediately on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine if we are in the dark hero section (and menu is not open)
  const isDarkTheme = !isPastHero && !mobileOpen;

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        mobileOpen 
          ? "bg-[#f6fbfb] backdrop-blur-md" 
          : isPastHero
            ? "bg-[#f6fbfb]/90 backdrop-blur-md" 
            : isScrolled
              ? "bg-black/20 backdrop-blur-md" 
              : "bg-transparent"
      }`}
    >
      {/* Increased padding from py-4 to py-6 to make the navbar taller */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className={`text-3xl font-semibold tracking-tight transition-colors duration-300 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}>
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
              className={`rounded-lg px-3.5 py-2.5 text-[14px] font-normal transition-all duration-300 ${
                pathname === link.href 
                  ? (isDarkTheme ? "bg-white/15 text-white" : "bg-teal-100/50 text-black") 
                  : (isDarkTheme ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-black hover:bg-teal-100/40")
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-3">
            <Link
              href="/contact"
              className={`flex items-center gap-1.5 px-6 py-3 text-[14px] font-normal transition-all duration-300 rounded-lg ${
                isDarkTheme
                  ? "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md" 
                  : "bg-teal-100 text-black hover:bg-teal-200"
              }`}
            >
              Get Early Access <span className="font-normal">&gt;</span>
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-xl transition-colors md:hidden ${
            isDarkTheme ? "hover:bg-white/10" : "hover:bg-teal-100/50"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block h-[1.5px] w-5 transition-all duration-300 ${isDarkTheme ? "bg-white" : "bg-black"} ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 transition-all duration-300 ${isDarkTheme ? "bg-white" : "bg-black"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 transition-all duration-300 ${isDarkTheme ? "bg-white" : "bg-black"} ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu (Adjusted top position from 76px to 88px to fit the taller navbar) */}
      <div className={`fixed inset-0 top-[88px] z-40 backdrop-blur-xl transition-all duration-300 md:hidden ${
        mobileOpen ? "pointer-events-auto opacity-100 bg-[#f6fbfb]/95" : "pointer-events-none opacity-0 bg-transparent"
      }`}>
        <div className="flex flex-col gap-1 px-6 pt-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`rounded-xl px-4 py-3.5 text-[15px] font-normal transition-colors text-black ${
                pathname === link.href ? "bg-teal-100/50" : ""
              }`}>
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-teal-100/30 pt-6">
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-teal-100 py-3.5 text-[15px] font-normal text-black transition-colors rounded-lg hover:bg-teal-200">
              Get Early Access <span className="font-normal">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
