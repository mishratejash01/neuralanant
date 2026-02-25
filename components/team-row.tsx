"use client";

import { useRef, useState, useEffect } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  location?: string | null;
  member_type?: string | null;
}

export default function TeamRow({ categoryName, members }: { categoryName: string, members: TeamMember[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileId, setActiveMobileId] = useState<string | null>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  if (!members || members.length === 0) return null;

  return (
    <div className="mb-24 w-full">
      {/* Category Header & Desktop Controls */}
      <div className="mx-auto mb-8 flex w-full max-w-6xl items-end justify-between px-6">
        <h2 className="text-4xl font-light tracking-tight text-black">{categoryName}.</h2>
        <div className="hidden gap-3 lg:flex">
          <button 
            onClick={() => scroll(-400)} 
            className="flex h-11 w-11 items-center justify-center bg-black text-xl text-white transition-transform hover:-translate-y-0.5 hover:bg-teal-700"
          >
            &larr;
          </button>
          <button 
            onClick={() => scroll(400)} 
            className="flex h-11 w-11 items-center justify-center bg-black text-xl text-white transition-transform hover:-translate-y-0.5 hover:bg-teal-700"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Track: Vertical Stack on Mobile, Horizontal Scroll on Desktop */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <div 
          ref={scrollRef} 
          className="flex flex-col gap-6 lg:flex-row lg:overflow-x-auto lg:pb-8 lg:snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {members.map((member) => {
            const isActive = activeMobileId === member.id;

            return (
              <div 
                key={member.id} 
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setActiveMobileId(isActive ? null : member.id);
                  }
                }}
                className={`
                  group relative flex shrink-0 cursor-pointer overflow-hidden bg-[#eef5f5] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  /* Mobile Stack Layout */
                  flex-col p-6 sm:p-8
                  ${isActive ? 'max-h-[1200px] bg-[#e4ecec]' : 'max-h-[420px]'}
                  /* Desktop Row Layout */
                  lg:flex-row lg:h-[580px] lg:w-[320px] lg:max-h-none lg:p-10 lg:hover:w-[850px] lg:hover:bg-[#e4ecec]
                `}
              >
                
                {/* 1. Frame Container (Top on Mobile, Left on Desktop) */}
                <div className="w-full shrink-0 transition-transform duration-700 lg:w-[240px] lg:group-hover:scale-105">
                  <div className="mx-auto flex h-[280px] w-[240px] items-center justify-center bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={member.avatar_url || "https://images.unsplash.com/photo-1519085185756-615483049154?q=80&w=600&auto=format&fit=crop"} 
                      alt={member.name}
                      className={`
                        h-full w-full object-cover transition-all duration-500
                        ${isActive ? 'grayscale-0' : 'grayscale'}
                        lg:grayscale lg:group-hover:grayscale-0
                      `}
                    />
                  </div>
                </div>

                {/* 2. Content Section (Below Image on Mobile, Right of Image on Desktop) */}
                <div className="flex h-full flex-col justify-between pt-8 lg:min-w-[450px] lg:pl-20 lg:pt-0">
                  
                  {/* Identity (Always Visible) */}
                  <div className="flex items-center justify-between lg:block">
                    <div>
                      <h3 className="text-[2rem] font-medium leading-[1.1] text-black">
                        {member.name.split(' ').map((part, i) => (
                          <span key={i}>
                            {part}
                            {/* Line break only on desktop so names don't take up too much vertical space on mobile */}
                            <br className="hidden lg:block"/> 
                          </span>
                        ))}
                      </h3>
                      <p className="mt-2 text-[0.9rem] font-normal text-zinc-500">
                        {member.role}
                      </p>
                    </div>

                    {/* Mobile Hint Arrow (Disappears when expanded) */}
                    <div className={`text-2xl text-black transition-opacity duration-300 lg:hidden ${isActive ? 'opacity-0 hidden' : 'opacity-30'}`}>
                      &darr;
                    </div>
                  </div>

                  {/* Bio Reveal (Expands Down on Mobile, Slides In on Desktop) */}
                  <div className={`
                    mt-6 flex h-full flex-col justify-between transition-all duration-500
                    /* Mobile Reveal */
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
                    /* Desktop Reveal */
                    lg:translate-y-0 lg:translate-x-10 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100
                  `}>
                    
                    <div className="mb-8 lg:mb-0">
                      <p className="max-w-[400px] text-[1.05rem] leading-[1.6] text-black">
                        {member.bio}
                      </p>
                    </div>
                    
                    {/* Meta & Social Footer */}
                    <div className="flex flex-col gap-6 lg:mt-auto">
                      {member.member_type && (
                        <span className="w-fit bg-teal-900 px-4 py-1.5 text-[0.7rem] uppercase tracking-[1px] text-white">
                          {member.member_type}
                        </span>
                      )}

                      <div className="flex items-end justify-between border-t border-black/5 pt-5 lg:border-none lg:pt-0">
                        <div className="flex flex-col gap-4">
                          <p className="text-[0.85rem] leading-[1.5] text-zinc-500">
                            {(member.location || 'HQ / Global').split('/').map((loc: string, i: number) => <span key={i}>{loc}<br/></span>)}
                          </p>

                          {/* Social Icons */}
                          {(member.linkedin_url || member.twitter_url) && (
                            <div className="flex items-center gap-4">
                              {member.linkedin_url && (
                                <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] transition-opacity hover:opacity-75">
                                  <svg className="h-[22px] w-[22px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                                  </svg>
                                </a>
                              )}
                              {member.twitter_url && (
                                <a href={member.twitter_url} target="_blank" rel="noopener noreferrer" className="text-black transition-opacity hover:opacity-75">
                                  <svg className="h-[20px] w-[20px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                        
                        {/* Desktop Hint Arrow */}
                        <div className="hidden text-2xl text-black opacity-20 transition-opacity duration-300 group-hover:opacity-0 lg:block">
                          &rarr;
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
