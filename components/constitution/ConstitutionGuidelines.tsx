import React from "react";
import { constitutionData } from "@/lib/about/constitution";

export default function ConstitutionGuidelines() {
  const { guidelines } = constitutionData;

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#C8C2B5]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5A6455]">
              OPERATIONAL INTEGRITY
            </span>
            <div className="w-8 h-px bg-[#C8C2B5]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1E231C] tracking-tight mb-4">
            {guidelines.heading}
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#5B6356] leading-relaxed font-normal">
            {guidelines.intro}
          </p>
        </div>

        {/* 7 Operational Guidelines in an Editorial Balanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {guidelines.items.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${
                idx === guidelines.items.length - 1 ? "md:col-span-2 bg-[#FAF8F3] border-[#DFD8CC]" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-[#414D3C] rounded-xl bg-[#FAF8F5] border border-[#DDD7CD] group-hover:bg-[#414D3C] group-hover:text-white transition-colors">
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

                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1E231C] mb-2.5 leading-snug group-hover:text-[#414D3C] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4E5748] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#F0EAE0] flex items-center justify-between text-[11px] text-[#7A8374]">
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
