import React from "react";
import CoverImage from "../latest-updates/CoverImage";
import { volunteerData } from "@/lib/volunteerData";
import { CommunityIcon } from "../common/Icons";

export default function VolunteerWhoCanApply() {
  const { whoCanApply } = volunteerData;

  return (
    <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Symmetrical 50/50 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Who Can Apply & Ethos */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                ELIGIBILITY &amp; ETHOS
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.2] mb-5">
              {whoCanApply.title}
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-[#4E5748] leading-relaxed font-normal mb-5">
              {whoCanApply.intro}
            </p>

            <div className="p-5 rounded-2xl bg-[#F5F1EB] border border-[#E5DFD4] mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#353E31] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#414D3C]" />
                <span>Our Communication Commitment</span>
              </h3>
              <p className="text-xs text-[#525B4E] leading-relaxed">
                {whoCanApply.communicationEthos}
              </p>
            </div>

            {/* Diversity of Domains Pills */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#DDD7CD] text-[#333C2E] shadow-2xs font-medium">
                🎓 Students &amp; Faculty
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#DDD7CD] text-[#333C2E] shadow-2xs font-medium">
                💼 Industry Professionals
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#DDD7CD] text-[#333C2E] shadow-2xs font-medium">
                🤝 Grassroots Leaders
              </span>
            </div>
          </div>

          {/* Right Column: Visual Partnership Image */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#EAE6DF] group">
              <CoverImage
                src={whoCanApply.image}
                fallbackSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                alt="Who Can Apply to The Boston Pledge"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Glassmorphic Badge */}
            <div className="absolute -bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-md border border-[#EBE5DB] flex items-center gap-3.5 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                <CommunityIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold font-serif text-[#1E231C]">
                  One Humanity
                </div>
                <div className="text-[11px] text-[#7A8475] font-medium">
                  Mutual Respect &amp; Reverence
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
