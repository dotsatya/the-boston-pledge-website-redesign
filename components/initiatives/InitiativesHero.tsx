import React from "react";
import Link from "next/link";

export default function InitiativesHero() {
  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-3 sm:pb-4 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Left */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#7A8475] mb-2.5 sm:mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#1E231C] font-medium">Initiatives</span>
        </nav>

        {/* Overline with accent dash Left */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
            CATALYZING GRASSROOT SURGE
          </span>
          <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
        </div>

        {/* Heading Left */}
        <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.18] mb-2.5 sm:mb-4 max-w-3xl break-words">
          Creating Opportunities <br />
          for a Better Tomorrow.
        </h1>

        {/* Subtitle Left */}
        <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed max-w-2xl font-normal">
          Empowering communities through grassroots entrepreneurship, youth education, digital inclusion, and environmental health.
        </p>
      </div>
    </section>
  );
}
