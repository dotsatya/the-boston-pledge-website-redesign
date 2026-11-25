import React from "react";
import Link from "next/link";
import { reflectionsData } from "@/components/about/Reflections";
import { ArrowDownIcon } from "../common/Icons";

export default function ReflectionsHero() {
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
          <span className="text-[#1E231C] font-medium">Reflections</span>
        </nav>

        {/* Overline with accent dash Left */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
            THOUGHT LEADERSHIP &amp; PHILOSOPHY
          </span>
          <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
        </div>

        {/* Heading Left */}
        <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.18] mb-2.5 sm:mb-4 max-w-3xl break-words">
          {reflectionsData.title}: Thought Leadership &amp; Global Vision
        </h1>

        {/* Subtitle Left */}
        <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed max-w-2xl font-normal mb-3 sm:mb-6">
          {reflectionsData.subtitle}
        </p>

        {/* Quick Nav Anchor Badges */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 pt-2 border-t border-[#ECE7DF]">
          <span className="text-[11px] font-semibold text-[#7A8475] uppercase tracking-wider mr-1">
            Explore:
          </span>
          <a
            href="#discourse"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#414D3C] bg-white border border-[#E2DDD4] hover:bg-[#F3EDE3] transition-colors shadow-2xs group"
          >
            <span>Featured Discourse</span>
            <ArrowDownIcon className="w-3 h-3 text-[#7A8475]" />
          </a>
          <a
            href="#chairman"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#414D3C] bg-white border border-[#E2DDD4] hover:bg-[#F3EDE3] transition-colors shadow-2xs group"
          >
            <span>Chairman Profile</span>
            <ArrowDownIcon className="w-3 h-3 text-[#7A8475]" />
          </a>
          <a
            href="#speeches"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#414D3C] bg-white border border-[#E2DDD4] hover:bg-[#F3EDE3] transition-colors shadow-2xs group"
          >
            <span>Select Keynotes & Speeches ({reflectionsData.speeches.items.length})</span>
            <ArrowDownIcon className="w-3 h-3 text-[#7A8475]" />
          </a>
        </div>
      </div>
    </section>
  );
}
