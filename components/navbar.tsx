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

  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setIsPastHero(window.scrollY > window.innerHeight * 0.95);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when full-screen mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  const isDarkTheme = isHomePage && !isPastHero && !mobileOpen;

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        mobileOpen 
          ? "bg-[#f6fbfb]" 
          : isHomePage 
            ? (isPastHero ? "bg-[#f6fbfb]/90 backdrop-blur-md" : isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent")
            : (isScrolled ? "bg-[#f6fbfb]/90 backdrop-blur-md" : "bg-transparent") 
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className={`text-3xl font-semibold tracking-tight transition-colors duration-300 ${
            isDarkTheme ? "text-white" : "text-black"
          }`}>
            neural
          </span>
        </Link>

        {/* DESKTOP TABS: Pure text, non-bold, no glow/blocks */}
        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-[14px] font-normal transition-opacity duration-300 ${
                pathname === link.href 
                  ? (isDarkTheme ? "text-white opacity-100" : "text-black opacity-100") 
                  : (isDarkTheme ? "text-white/70 hover:opacity-100" : "text-black/70 hover:opacity-100")
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4">
            <Link
              href="/contact"
              className={`flex items-center gap-1.5 px-6 py-3 text-[14px] font-normal transition-colors duration-300 ${
                isDarkTheme ? "bg-white/10 text-white backdrop-blur-md" : "bg-teal-100 text-black"
              }`}
            >
              Get Early Access <span className="font-normal">&gt;</span>
            </Link>
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <span className={`h-[1.5px] w-6 transition-colors ${isDarkTheme ? "bg-white" : "bg-black"}`} />
          <span className={`h-[1.5px] w-6 transition-colors ${isDarkTheme ? "bg-white" : "bg-black"}`} />
        </button>
      </div>

      {/* --- FULL SCREEN MOBILE SIDEBAR --- */}
      <div 
        className={`fixed inset-0 z-[70] h-full w-full bg-[#f6fbfb] transition-transform duration-500 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header inside Sidebar */}
        <div className="flex items-center justify-between px-6 py-6">
          <span className="text-3xl font-semibold tracking-tight text-black">neural</span>
          <button onClick={() => setMobileOpen(false)} className="p-2 text-black">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation: Non-bold */}
        <div className="mt-8 flex flex-col px-8">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-zinc-200 py-6">
              <Link 
                href={link.href} 
                onClick={() => setMobileOpen(false)}
                className={`text-[22px] font-normal ${pathname === link.href ? "text-teal-700" : "text-black"}`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <div className="absolute bottom-12 w-full px-8 space-y-4">
          <Link 
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-between bg-black px-6 py-6 text-[18px] font-normal text-white"
          >
            Get Early Access
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
