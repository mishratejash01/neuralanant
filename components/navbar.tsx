"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Dynamic Navigation Data
const navLinks = [
  { 
    label: "Products", 
    href: "#", 
    subLinks: [{ label: "Anant 1.0", href: "/products/anant" }, { label: "Studio", href: "/studio" }] 
  },
  { 
    label: "Solutions", 
    href: "#", 
    subLinks: [{ label: "Enterprise", href: "/enterprise" }, { label: "Startups", href: "/startups" }] 
  },
  { label: "Research", href: "/research" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-3xl font-semibold tracking-tight text-white">
          neural
        </Link>

        {/* Hamburger - Only visible on mobile */}
        <button 
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
        </button>
      </div>

      {/* --- MOBILE SIDEBAR ONLY --- */}
      <div className="md:hidden">
        {/* Overlay */}
        <div 
          className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Sidebar Panel */}
        <div 
          className={`fixed right-0 top-0 z-[70] h-full w-[85%] max-w-[380px] bg-[#f6fbfb] transition-transform duration-500 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setMobileOpen(false)}
              className="p-2 text-black"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Dynamic Menu Links */}
          <div className="flex flex-col px-8">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-zinc-200 py-5">
                <div className="flex items-center justify-between">
                  <Link 
                    href={link.href} 
                    onClick={() => !link.subLinks && setMobileOpen(false)}
                    className="text-[18px] font-normal text-black"
                  >
                    {link.label}
                  </Link>
                  
                  {link.subLinks && (
                    <button 
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className={`p-2 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""}`}
                    >
                      {/* Normal Down Arrow (Teal Green) */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Sub-links Dropdown */}
                {link.subLinks && openDropdown === link.label && (
                  <div className="mt-4 flex flex-col gap-4 pl-2">
                    {link.subLinks.map((sub) => (
                      <Link 
                        key={sub.label} 
                        href={sub.href} 
                        onClick={() => setMobileOpen(false)}
                        className="text-[16px] text-zinc-500 hover:text-teal-700"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTAs - Sharp Black Blocks */}
          <div className="absolute bottom-10 w-full px-8 space-y-3">
            <Link 
              href="/studio"
              className="flex w-full items-center justify-between bg-black px-6 py-5 text-[16px] font-normal text-white"
            >
              Try Studio
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="3">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
            
            <Link 
              href="/contact"
              className="flex w-full items-center justify-between bg-black px-6 py-5 text-[16px] font-normal text-white"
            >
              Talk to sales
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="3">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
