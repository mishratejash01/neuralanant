"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const productLinks = [
  { label: "Documentation", href: "/technology", target: "_blank", rel: "noopener noreferrer" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Early Access", href: "/contact" },
];

const companyLinks = [
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
  { label: "Privacy", href: "/app/privacy/page" },
];

const connectLinks = [
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();

  // Hide the footer completely on the technology page AND individual job application pages
  if (pathname === "/technology" || pathname?.startsWith("/careers/")) return null;

  return (
    <footer 
      className="border-t border-teal-200 bg-teal-100 font-['Inter',sans-serif]" 
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="block -ml-1 text-[4rem] sm:text-[5.5rem] font-bold tracking-tighter leading-none text-teal-950">
                neural
              </span>
            </Link>
            <p className="mt-4 text-[14px] font-normal leading-relaxed text-black sm:pr-8">
              Building India&apos;s first LLM with persistent memory. The AI that never forgets.
            </p>
            <div className="mt-6 space-y-1 text-[13px] font-normal text-black">
              <p>Sudha & Shankar Innovation Hub</p>
              <p>Indian Institute of Technology Madras</p>
              <p>Chennai - 600036, India</p>
            </div>
          </div>

          <div className="lg:col-start-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-teal-900">Product</p>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  {link.href !== "#" ? (
                    <Link 
                      href={link.href} 
                      target={link.target}
                      rel={link.rel}
                      className="text-[14px] font-normal text-black transition-colors hover:text-teal-700"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span className="text-[14px] font-normal text-black/50 cursor-default">
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-teal-900">Company</p>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.href !== "#" ? (
                    <Link href={link.href} className="text-[14px] font-normal text-black transition-colors hover:text-teal-700">
                      {link.label}
                    </Link>
                  ) : (
                    <span className="text-[14px] font-normal text-black/50 cursor-default">
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-teal-900">Connect</p>
            <div className="mt-5 flex gap-4">
              {connectLinks.map((link) => (
                link.href !== "#" ? (
                  <a 
                    key={link.label}
                    href={link.href} 
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-all hover:-translate-y-1 hover:text-teal-700"
                  >
                    {link.icon}
                  </a>
                ) : (
                  <span 
                    key={link.label}
                    aria-label={link.label}
                    className="text-black/50 cursor-default"
                  >
                    {link.icon}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-teal-200/60 pt-8 sm:flex-row">
          <p className="text-[13px] font-normal text-black/70">&copy; 2026 Neural AI. All rights reserved.</p>
          <p className="text-[13px] font-normal text-black/70">Made with care in India</p>
        </div>
      </div>
    </footer>
  );
}
