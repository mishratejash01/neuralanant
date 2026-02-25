"use client";

import { useRef } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  location?: string;
  member_type?: string;
}

export default function TeamRow({ categoryName, members }: { categoryName: string, members: TeamMember[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  if (!members || members.length === 0) return null;

  return (
    <div className="mb-24 w-full">
      {/* Category Header & Controls */}
      <div className="mx-auto mb-8 flex w-full max-w-6xl items-end justify-between px-6">
        <h2 className="text-4xl font-light tracking-tight text-black">{categoryName}.</h2>
        <div className="flex gap-3">
          <button 
            onClick={() => scroll(-400)} 
            className="flex h-11 w-11 items-center justify-center bg-black text-xl text-white transition-transform hover:-translate-y-0.5 hover:bg-teal-600"
          >
            &larr;
          </button>
          <button 
            onClick={() => scroll(400)} 
            className="flex h-11 w-11 items-center justify-center bg-black text-xl text-white transition-transform hover:-translate-y-0.5 hover:bg-teal-600"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <div 
          ref={scrollRef} 
          className="flex w-full gap-6 overflow-x-auto pb-8 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {members.map((member) => (
            <div 
              key={member.id} 
              className="group relative flex h-[580px] w-[320px] shrink-0 cursor-pointer overflow-hidden bg-[#eef5f5] p-10 transition-[width,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:w-[850px] hover:bg-[#e4ecec]"
            >
              {/* The Image Frame & Identity (Always visible first view) */}
              <div className="flex h-full min-w-[240px] flex-col justify-between">
                <div className="h-[280px] w-[240px] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={member.avatar_url || "https://images.unsplash.com/photo-1519085185756-615483049154?q=80&w=600&auto=format&fit=crop"} 
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                
                <div className="mt-8">
                  <h3 className="text-[2rem] font-medium leading-[1.1] text-black">
                    {member.name.split(' ').map((part, i) => <span key={i}>{part}<br/></span>)}
                  </h3>
                  {/* Role Text Updated Here */}
                  <p className="mt-2.5 text-[0.9rem] font-normal text-zinc-500">
                    {member.role}
                  </p>
                  
                  {/* Social Icons - Stay in exact position on hover */}
                  {(member.linkedin_url || member.twitter_url) && (
                    <div className="mt-5 flex items-center gap-4">
                      {member.linkedin_url && (
                        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] transition-opacity hover:opacity-75">
                          {/* LinkedIn SVG */}
                          <svg className="h-[22px] w-[22px]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                          </svg>
                        </a>
                      )}
                      {member.twitter_url && (
                        <a href={member.twitter_url} target="_blank" rel="noopener noreferrer" className="text-black transition-opacity hover:opacity-75">
                          {/* X (Twitter) SVG */}
                          <svg className="h-[20px] w-[20px]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Hint Arrow */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-2xl text-black opacity-20 transition-opacity duration-300 group-hover:opacity-0">
                &rarr;
              </div>

              {/* Hidden Content Reveal */}
              <div className="ml-20 flex min-w-[450px] flex-col justify-between opacity-0 translate-x-10 transition-all duration-500 delay-200 group-hover:translate-x-0 group-hover:opacity-100">
                <div>
                  <p className="max-w-[400px] text-[1.1rem] leading-[1.7] text-black">
                    {member.bio}
                  </p>
                </div>
                
                <div className="flex flex-col gap-6">
                  {/* member_type logic mapped from db */}
                  {member.member_type && (
                    <span className="w-fit bg-black px-4 py-1.5 text-[0.7rem] uppercase tracking-[1px] text-white">
                      {member.member_type}
                    </span>
                  )}

                  {/* Location mapped from db */}
                  <p className="text-[0.85rem] leading-[1.5] text-zinc-500">
                    {(member.location || 'HQ / Global').split('/').map((loc: string, i: number) => <span key={i}>{loc}<br/></span>)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
