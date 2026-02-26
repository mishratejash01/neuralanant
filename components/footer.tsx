"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const productLinks = [
  { label: "Technology", href: "/technology", target: "_blank", rel: "noopener noreferrer" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Early Access", href: "/contact" },
];

const companyLinks = [
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
  { label: "Privacy", href: "#" },
];

const connectLinks = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Discord", href: "#" },
];

export default function Footer() {
  const pathname = usePathname();

  // Hide the footer completely on the technology page AND individual job application pages
  if (pathname === "/technology" || pathname?.startsWith("/careers/")) return null;

  return (
    <footer className="border-t border-zinc-100 bg-zinc-50/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-xs font-bold text-white">N</span>
              <span className="text-[15px] font-bold tracking-tight text-zinc-900">Neural AI</span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-zinc-400">
              Building India&apos;s first LLM with persistent memory. The AI that never forgets.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-amber-200/60 bg-amber-50/60 px-3 py-1.5">
              <svg className="h-3.5 w-3.5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              <span className="text-[10px] font-semibold text-amber-800">Incubated at IIT Madras Research Park</span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Product</p>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    target={link.target}
                    rel={link.rel}
                    className="text-[13px] text-zinc-400 transition-colors hover:text-zinc-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Company</p>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-zinc-400 transition-colors hover:text-zinc-900">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Connect</p>
            <ul className="mt-5 space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-zinc-400 transition-colors hover:text-zinc-900">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/50 pt-8 sm:flex-row">
          <p className="text-[11px] text-zinc-300">&copy; 2026 Neural AI. All rights reserved.</p>
          <p className="text-[11px] text-zinc-300">Made with care in India</p>
        </div>
      </div>
    </footer>
  );
}
