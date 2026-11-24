import React from "react";
import Link from "next/link";

export default function TeamHero() {
  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-3 sm:pb-4 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Left */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#7A8475] mb-2.5 sm:mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/about" className="hover:text-[#414D3C] transition-colors">
            About Us
          </Link>
          <span>/</span>
          <span className="text-[#1E231C] font-medium">Our Team</span>
        </nav>

        {/* Overline with accent dash Left */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
            OUR LEADERSHIP
          </span>
          <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
        </div>

        {/* Heading Left */}
        <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.18] mb-2.5 sm:mb-4 max-w-3xl break-words">
          The Minds Driving The Boston Pledge
        </h1>

        {/* Subtitle Left */}
        <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed max-w-2xl font-normal">
          A voluntary team contributing pro bono expertise to empower grassroots self-reliance.
        </p>
      </div>
    </section>
  );
}
