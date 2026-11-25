import React from "react";
import { volunteerData } from "@/lib/volunteerData";
import { CommunityIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

export default function VolunteerWhoCanApply() {
  const { whoCanApply } = volunteerData;

  return (
    <section className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Who Can Apply & Domains */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ScrollReveal>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                  ELIGIBILITY &amp; ETHOS
                </span>
                <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.2] mb-3 sm:mb-4">
                {whoCanApply.title}
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-[#4E5748] leading-relaxed font-normal mb-4 sm:mb-6">
                {whoCanApply.intro}
              </p>

              {/* Diversity of Domains Pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs">
                <span className="px-3 py-1.5 rounded-full bg-white border border-[#DDD7CD] text-[#333C2E] shadow-2xs font-medium text-[11px] sm:text-xs">
                  🎓 Students &amp; Faculty
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-[#DDD7CD] text-[#333C2E] shadow-2xs font-medium text-[11px] sm:text-xs">
                  💼 Industry Professionals
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-[#DDD7CD] text-[#333C2E] shadow-2xs font-medium text-[11px] sm:text-xs">
                  🤝 Grassroots Leaders
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Communication Commitment & One Humanity Ethos */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.1}>
              <div className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#F5F1EB] border border-[#E5DFD4] shadow-2xs">
                <div data-icon-trigger className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DDD6CB] text-[#414D3C] text-[11px] sm:text-xs font-semibold mb-3.5 shadow-2xs cursor-pointer">
                  <CommunityIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>One Humanity &bull; Mutual Respect &amp; Reverence</span>
                </div>

                <h3 className="text-sm sm:text-base font-serif font-semibold text-[#1E231C] mb-2 flex items-center gap-2">
                  <span>Our Communication Commitment</span>
                </h3>

                <p className="text-xs sm:text-sm text-[#525B4E] leading-relaxed">
                  {whoCanApply.communicationEthos}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
