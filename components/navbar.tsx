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

  // 1. Check if we are currently on the home page
  const isHomePage = pathname === "/";

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

  // 2. ONLY apply the dark theme (white text) if we are on the Home Page, 
  // haven't scrolled past the hero, and the mobile menu is closed.
  const isDarkTheme = isHomePage && !isPastHero && !mobileOpen;

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        mobileOpen 
          ? "bg-[#f6fbfb] backdrop-blur-md" 
          : isHomePage 
            ? (isPastHero ? "bg-[#f6fbfb]/90 backdrop-blur-md" : isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent")
            : (isScrolled ? "bg-[#f6fbfb]/90 backdrop-blur-md" : "bg-transparent") 
      }`}
    >
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
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // Removed all bg blocks! Now it's just pure text with a gentle opacity fade on hover.
              className={`px-3.5 py-2.5 text-[14px] transition-opacity duration-300 ${
                pathname === link.href 
                  ? (isDarkTheme ? "text-white font-medium" : "text-black font-medium") 
                  : (isDarkTheme ? "text-white hover:opacity-60" : "text-black hover:opacity-60")
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4">
            {/* Square button, no hover effect */}
            <Link
              href="/contact"
              className={`flex items-center gap-1.5 px-6 py-3 text-[14px] font-normal transition-colors duration-300 ${
                isDarkTheme
                  ? "bg-white/10 text-white backdrop-blur-md" 
                  : "bg-teal-100 text-black"
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

      {/* Mobile menu */}
      <div className={`fixed inset-0 top-[88px] z-40 backdrop-blur-xl transition-all duration-300 md:hidden ${
        mobileOpen ? "pointer-events-auto opacity-100 bg-[#f6fbfb]/95" : "pointer-events-none opacity-0 bg-transparent"
      }`}>
        <div className="flex flex-col gap-1 px-6 pt-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`px-4 py-3.5 text-[15px] font-normal transition-opacity duration-300 text-black ${
                pathname === link.href ? "font-medium" : "hover:opacity-60"
              }`}>
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-teal-100/30 pt-6">
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-teal-100 py-3.5 text-[15px] font-normal text-black transition-colors">
              Get Early Access <span className="font-normal">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
