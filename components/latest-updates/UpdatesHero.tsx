import React from "react";
import Link from "next/link";

export default function UpdatesHero() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb Left */}
        <nav className="flex items-center gap-2 text-xs text-[#7A8475] mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#1E231C] font-medium">Latest Updates</span>
        </nav>

        {/* Overline with accent dash Left */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
            NEWS & INSIGHTS
          </span>
          <div className="w-10 h-px bg-[#C8C2B5]" />
        </div>

        {/* Heading Left */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.18] mb-4 max-w-3xl">
          Latest Updates & Dispatches
        </h1>

        {/* Subtitle Left */}
        <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed max-w-2xl font-normal">
          Stay informed with real-time field reports, conference proceedings, grassroots entrepreneurship milestones, and strategic publications from The Boston Pledge.
        </p>
      </div>
    </section>
  );
}
