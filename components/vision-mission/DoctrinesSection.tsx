import React from "react";
import { Doctrine } from "@/lib/about/vision-mission";

interface DoctrinesSectionProps {
  title: string;
  introduction: string;
  principles: readonly Doctrine[];
}

export default function DoctrinesSection({
  title,
  introduction,
  principles,
}: DoctrinesSectionProps) {
  return (
    <section
      id="constitution"
      className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#5A6455] whitespace-nowrap">
              CORE PRINCIPLES
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#1E231C] tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed font-normal">
            {introduction}
          </p>
        </div>

        {/* 10 Principles Grid - Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
          {principles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 border border-[#E8E2D8] shadow-2xs hover:shadow-xs hover:border-[#D0C8B8] transition-all duration-200 flex items-center gap-3.5 sm:gap-4 group"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center text-[11px] sm:text-xs font-bold text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shrink-0">
                {String(item.id).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-[#2D362A] leading-snug sm:leading-relaxed font-normal">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
