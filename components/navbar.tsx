"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// RESTORED: Your original navigation tabs
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

        {/* RESTORED: PC Screen Tabs */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
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

        {/* Hamburger - Mobile only */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <span className={`h-[1.5px] w-6 transition-colors ${isDarkTheme ? "bg-white" : "bg-black"}`} />
          <span className={`h-[1.5px] w-6 transition-colors ${isDarkTheme ? "bg-white" : "bg-black"}`} />
        </button>
      </div>

      {/* --- MOBILE SIDEBAR --- */}
      <div className="md:hidden">
        {/* Backdrop overlay */}
        <div 
          className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Sidebar Panel */}
        <div className={`fixed right-0 top-0 z-[70] h-full w-[85%] max-w-[380px] bg-[#f6fbfb] transition-transform duration-500 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* Close Button Area */}
          <div className="flex justify-end p-6">
            <button onClick={() => setMobileOpen(false)} className="p-2 text-black">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Tabs - Mirrored from PC view */}
          <div className="flex flex-col px-8 pt-4">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-zinc-200 py-5">
                <Link 
                  href={link.href} 
                  onClick={() => setMobileOpen(false)}
                  className={`text-[19px] font-normal ${pathname === link.href ? "text-teal-700" : "text-black"}`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Sharp Black CTA Blocks */}
          <div className="absolute bottom-10 w-full px-8 space-y-3">
            <Link 
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-between bg-black px-6 py-5 text-[16px] font-normal text-white"
            >
              Get Early Access
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
