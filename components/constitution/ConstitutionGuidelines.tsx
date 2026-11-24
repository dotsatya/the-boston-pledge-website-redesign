import React from "react";
import { constitutionData } from "@/lib/about/constitution";

export default function ConstitutionGuidelines() {
  const { guidelines } = constitutionData;

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#5A6455] whitespace-nowrap">
              OPERATIONAL INTEGRITY
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#1E231C] tracking-tight mb-2 sm:mb-4">
            {guidelines.heading}
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#5B6356] leading-relaxed font-normal">
            {guidelines.intro}
          </p>
        </div>

        {/* 7 Operational Guidelines in an Editorial Balanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
          {guidelines.items.map((item, idx) => (
            <div
              key={item.id}
              className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-[#E8E2D8] shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group ${
                idx === guidelines.items.length - 1 ? "md:col-span-2 bg-[#FAF8F3] border-[#DFD8CC]" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-[#414D3C] rounded-lg bg-[#FAF8F5] border border-[#DDD7CD] group-hover:bg-[#414D3C] group-hover:text-white transition-colors">
                      0{item.id}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#636C5E]">
                      Article 0{item.id}
                    </span>
                  </div>

                  <span className="text-[10px] font-medium text-[#8C9587] uppercase tracking-wider px-2 py-0.5 rounded bg-white/80 border border-[#E5DFD4]">
                    Charter Clause
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-serif font-semibold text-[#1E231C] mb-1 sm:mb-1.5 leading-snug group-hover:text-[#414D3C] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4E5748] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-2.5 mt-3 border-t border-[#F0EAE0] flex items-center justify-between text-[11px] text-[#7A8374]">
                <span>Governance Rule</span>
                <span className="font-medium text-[#414D3C]">
                  Nonprofit Governance Principle
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
