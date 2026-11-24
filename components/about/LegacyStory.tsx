import React from "react";

export default function LegacyStory() {
  return (
    <section className="pt-2 sm:pt-4 pb-6 sm:pb-8 lg:pb-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Direct Inline Video Player */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1E231C] shadow-sm border border-[#E2DDD4]">
              <iframe
                src="https://www.youtube.com/embed/meRNbxOWxmw?rel=0&playsinline=1"
                title="The Boston Pledge — Organization Overview & Impact"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                OUR ORIGINS
              </span>
              <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#1E231C] leading-[1.2] tracking-tight mb-2.5 sm:mb-4">
              Born from Vision and Deep Academic Stewardship
            </h2>

            <p className="text-xs sm:text-base text-[#4E5748] leading-relaxed mb-2.5 sm:mb-4 font-normal">
              Following the 2001 North American Bengali Conference (NABC) in
              Boston, Massachusetts, renowned strategist and former McKinsey
              senior partner Dr. Partha S. Ghosh joined forces with
              distinguished professors and community leaders to answer an urgent
              question: how can the immense intellectual and financial
              capability of privileged regions be systematically deployed to
              empower marginalized people at the base of the socio-economic
              pyramid?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
