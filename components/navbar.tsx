"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu structure with sub-links for dropdowns
const navLinks = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Research", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "/pricing", hasDropdown: false },
  { label: "Company", href: "#", hasDropdown: true },
];

// Custom Pixelated Arrow Component (Teal Green)
const PixelArrow = ({ color = "#0d9488" }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2H4V4H6V6H4V8H2V10H0V2H2Z" fill={color} />
    <rect x="6" y="4" width="2" height="2" fill={color} />
    <rect x="8" y="2" width="2" height="2" fill={color} />
    <rect x="8" y="6" width="2" height="2" fill={color} />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle body scroll lock when sidebar is open
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

        {/* Hamburger Toggle */}
        <button 
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
        </button>
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* SIDEBAR PANEL */}
      <div 
        className={`fixed right-0 top-0 z-[70] h-full w-[85%] max-w-[400px] bg-[#fdfaf1] transition-transform duration-500 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button 
            onClick={() => setMobileOpen(false)}
            className="flex h-12 w-12 items-center justify-center bg-[#f7f2e5] text-black"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col px-8 pt-4">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-zinc-200/60 py-5">
              <button 
                className="flex w-full items-center justify-between text-[19px] font-normal text-zinc-800"
                onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
              >
                {link.label}
                {link.hasDropdown && (
                  <div className={`transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""}`}>
                    <PixelArrow />
                  </div>
                )}
              </button>
              
              {/* Dropdown Content placeholder */}
              {openDropdown === link.label && link.hasDropdown && (
                <div className="mt-4 flex flex-col gap-3 pl-2 text-zinc-500">
                  <Link href="#" className="text-base hover:text-teal-700">Overview</Link>
                  <Link href="#" className="text-base hover:text-teal-700">Features</Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTAs - Sharp Black Boxes with Teal Arrows */}
        <div className="absolute bottom-12 w-full px-8 space-y-3">
          <Link 
            href="/studio"
            className="flex w-full items-center justify-between bg-black px-6 py-5 text-lg font-medium text-white"
          >
            Try Studio
            <PixelArrow color="#2dd4bf" /> {/* Vibrant Teal Green */}
          </Link>
          
          <Link 
            href="/contact"
            className="flex w-full items-center justify-between bg-black px-6 py-5 text-lg font-medium text-white"
          >
            Talk to sales
            <PixelArrow color="#2dd4bf" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
