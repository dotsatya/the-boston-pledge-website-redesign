"use client";

import React from "react";
import { ArrowRightIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

export default function ArticlesGrid() {
  const articles = [
    {
      id: 1,
      title: "Self-Sustaining Rural Innovation in Bengal: 20-Year Retrospective",
      date: "November 12, 2025",
      category: "Grassroots",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80",
      excerpt: "Tracing the tangible transformation of 200+ rural entrepreneurs nurtured through grassroots micro-enterprises.",
    },
    {
      id: 2,
      title: "The Pedagogy of Hope: Inside the Educator's Springboard Program",
      date: "August 28, 2025",
      category: "Education",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
      excerpt: "How innovative pedagogical workshops are arming rural school headmasters with world-class collaborative learning techniques.",
    },
    {
      id: 3,
      title: "Generative AI and Ethical Equilibrium: Reflections from the Summit",
      date: "May 19, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80",
      excerpt: "Key takeaways from our multi-continent webinar on channeling modern computational power for equitable community uplift.",
    },
    {
      id: 4,
      title: "Community Ecology: Rebuilding Mangrove Ecosystems in the Sundarbans",
      date: "March 15, 2025",
      category: "Ecology",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
      excerpt: "Local community volunteers join hands with marine botanists to restore tidal forest barriers protecting delta settlements.",
    },
    {
      id: 5,
      title: "Health Equity at the Grassroots: Mobile Diagnostics in Birbhum",
      date: "January 22, 2025",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
      excerpt: "A look at our community health dispatch model delivering primary diagnostic screenings to marginalized tribal hamlets.",
    },
    {
      id: 6,
      title: "Youth Leadership Conclave: Voices of Tomorrow",
      date: "October 30, 2024",
      category: "Youth",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
      excerpt: "45 high school and university fellows present their community action solutions after six months of cross-border mentorship.",
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 items-stretch">
          {articles.map((item, idx) => (
            <ScrollReveal key={item.id} delay={(idx % 3) * 0.08} className="h-full">
              <div
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DF] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group p-1.5 sm:p-0 h-full"
              >
                <div className="flex flex-row sm:flex-col flex-1 min-w-0">
                  {/* Left on mobile, Top on tablet/desktop */}
                  <div className="w-24 sm:w-full h-24 sm:h-40 lg:h-42 shrink-0 overflow-hidden rounded-lg sm:rounded-none bg-[#E9E4DC] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2">
                      <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9.5px] font-bold uppercase tracking-wider bg-[#242D21]/80 text-white backdrop-blur-xs shadow-xs">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Right on mobile, Bottom on tablet/desktop */}
                  <div className="pl-2.5 sm:px-4 sm:pt-3.5 sm:pb-3 flex-1 flex flex-col justify-between min-w-0 py-0.5">
                    <div>
                      <div className="text-[9px] sm:text-[11px] text-[#7A8475] font-medium mb-0.5 sm:mb-1.5">
                        {item.date}
                      </div>
                      <h3
                        className="text-xs sm:text-[15px] font-serif font-bold text-[#1E231C] mb-1 sm:mb-1.5 group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2 sm:h-10.5 overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="max-sm:hidden text-xs text-[#5D6558] leading-normal line-clamp-2 sm:h-9 overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Mobile inline link */}
                    <div className="pt-1.5 sm:hidden flex items-center justify-between border-t border-[#F5F1EA]/60">
                      <span className="text-[9px] text-[#7A8374]">
                        {item.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#414D3C]">
                        <span>Read Story</span>
                        <ArrowRightIcon className="w-2 h-2" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop & Tablet Card Footer */}
                <div className="hidden sm:flex px-4 py-2.5 sm:py-3 border-t border-[#F5F1EA] items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-[#414D3C] group-hover:underline cursor-pointer">
                    Read Full Story
                  </span>
                  <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border border-[#D5CFBF] bg-white flex items-center justify-center text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shadow-2xs shrink-0">
                    <ArrowRightIcon className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
