"use client";

import { useRef } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar_url: string | null;
  linkedin_url: string | null;
  location?: string;
  department?: string;
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
      <div className="mx-auto mb-8 flex w-full max-w-[1400px] items-end justify-between px-6">
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
      <div 
        ref={scrollRef} 
        className="flex w-full gap-6 overflow-x-auto px-6 pb-8 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {members.map((member) => (
          <div 
            key={member.id} 
            className="group relative flex h-[580px] w-[320px] shrink-0 cursor-pointer overflow-hidden bg-[#eef5f5] p-10 transition-[width,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:w-[850px] hover:bg-[#e4ecec]"
          >
            {/* The Image Frame & Identity (Always visible) */}
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
                <p className="mt-2.5 text-[0.8rem] font-bold uppercase tracking-[2px] text-zinc-500">
                  {member.role}
                </p>
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
                <div className="mt-8">
                  <a href={member.linkedin_url || "#"} target="_blank" rel="noopener noreferrer" className="w-fit border-b-2 border-teal-500 pb-1 text-[0.9rem] font-bold text-black no-underline transition-colors hover:text-teal-600">
                    Executive Profile
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-5">
                <span className="w-fit bg-black px-4 py-1.5 text-[0.7rem] uppercase tracking-[1px] text-white">
                  {member.department || 'Leadership'}
                </span>
                <p className="text-[0.85rem] leading-[1.5] text-zinc-500">
                  {(member.location || 'HQ / Global').split('/').map((loc: string, i: number) => <span key={i}>{loc}<br/></span>)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
