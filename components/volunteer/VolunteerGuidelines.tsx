import React from "react";
import CoverImage from "../latest-updates/CoverImage";
import { volunteerData } from "@/lib/volunteerData";
import { LeafLogoIcon } from "../common/Icons";

export default function VolunteerGuidelines() {
  const { groundRules } = volunteerData;

  return (
    <section className="py-10 sm:py-12 bg-[#FAF8F5] border-t border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Compact Symmetrical Grid: Left 2-Col Grid & Right Compact Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 6 Behavioral Guidelines in a 2-Column Sleek Grid */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                  CODE OF CONDUCT
                </span>
                <div className="w-10 h-px bg-[#C8C2B5]" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight leading-[1.2] mb-1.5">
                {groundRules.title}
              </h2>

              <p className="text-xs text-[#5B6356] leading-relaxed font-normal">
                {groundRules.subtitle}
              </p>
            </div>

            {/* 6 Ground Rules in a 2-Column Compact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {groundRules.items.map((rule) => (
                <div
                  key={rule.id}
                  className="bg-white rounded-xl p-3 sm:p-3.5 border border-[#E8E2D8] shadow-2xs hover:shadow-xs transition-shadow flex items-start gap-2.5"
                >
                  <div className="w-6 h-6 rounded-md bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center text-[11px] font-bold text-[#414D3C] shrink-0 mt-0.5">
                    0{rule.id}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold text-[#1E231C] mb-0.5 leading-snug truncate">
                      {rule.title}
                    </h3>
                    <p className="text-[11px] text-[#525B4E] leading-relaxed font-normal line-clamp-2">
                      {rule.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Foliage / Plant Image in a Compact Container */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[340px] h-[280px] sm:h-[320px] lg:h-[340px] rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#EAE6DF] group">
              <CoverImage
                src={groundRules.image}
                fallbackSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85"
                alt="Behavioral Guidelines at The Boston Pledge"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-[#EBE5DB] flex items-center gap-2.5 z-20">
                <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center text-[#414D3C]">
                  <LeafLogoIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#1E231C] leading-none">
                    Harmony &amp; Timing
                  </div>
                  <div className="text-[9px] text-[#7A8475] mt-0.5">
                    Tasks Above Personal Egos
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
