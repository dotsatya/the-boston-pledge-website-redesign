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
      className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5] border-t border-[#ECE7DF]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#C8C2B5]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5A6455]">
              CORE PRINCIPLES
            </span>
            <div className="w-8 h-px bg-[#C8C2B5]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1E231C] tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#5B6356] leading-relaxed font-normal">
            {introduction}
          </p>
        </div>

        {/* 10 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {principles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E2D8] shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center text-xs sm:text-sm font-bold text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shrink-0 mt-0.5">
                {String(item.id).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-[#2D362A] leading-relaxed font-normal">
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
