"use client";

import { useState } from "react";

export default function CareersCTA() {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  
  const email = "office@neuralai.in"; // Grounded in company records
  const subject = encodeURIComponent("Application for Neural AI");

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailOptions = [
    { name: "Gmail", url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}` },
    { name: "Outlook", url: `https://outlook.office.com/mail/deeplink/compose?to=${email}&subject=${subject}` },
    { name: "Default App", url: `mailto:${email}?subject=${subject}` },
  ];

  return (
    <section className="relative z-20 flex justify-center bg-[#f6fbfb] px-6 pb-32">
      <div className="w-full max-w-4xl rounded-[4px] bg-black p-8 shadow-2xl md:p-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 font-sans text-2xl font-medium tracking-tight text-white md:text-3xl">
              Can&apos;t find your role?
            </h3>
            <p className="font-sans text-base text-zinc-400 md:text-lg">
              Send your CV directly to <span className="text-white font-medium">{email}</span>
            </p>
          </div>

          <div className="relative flex flex-col gap-3 sm:flex-row">
            {/* Primary Action: Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="flex h-12 items-center gap-2 rounded-[4px] bg-white px-8 font-sans font-medium text-black transition-transform hover:scale-105"
              >
                Send CV 
                <svg className={`h-4 w-4 transition-transform ${showOptions ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Options Menu */}
              {showOptions && (
                <div className="absolute bottom-full left-0 mb-2 w-full overflow-hidden rounded-[4px] bg-zinc-900 border border-white/10 shadow-xl sm:bottom-auto sm:top-full sm:mt-2">
                  {mailOptions.map((opt) => (
                    <a
                      key={opt.name}
                      href={opt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm text-zinc-300 hover:bg-white hover:text-black transition-colors"
                      onClick={() => setShowOptions(false)}
                    >
                      Open in {opt.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Secondary Action: Copy (The ultimate fallback) */}
            <button
              onClick={copyEmail}
              className="flex h-12 items-center justify-center rounded-[4px] border border-white/20 px-6 font-sans text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
