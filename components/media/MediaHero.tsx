import React from "react";
import Link from "next/link";
import { media, videos } from "@/lib/about/media";

export default function MediaHero() {
  const photoCount = media.length;
  const videoCount = videos.length;

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb Left */}
        <nav className="flex items-center gap-2 text-xs text-[#7A8475] mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#1E231C] font-medium">Our Frames</span>
        </nav>

        {/* Overline with accent dash Left */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
            THE VISUAL ARCHIVE
          </span>
          <div className="w-10 h-px bg-[#C8C2B5]" />
        </div>

        {/* Heading Left */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.18] mb-4 max-w-3xl">
          Our Frames: Moments of Hope &amp; Grassroots Impact
        </h1>

        {/* Subtitle Left */}
        <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed max-w-2xl font-normal mb-8">
          A visual chronicle of 25 years of service — capturing grassroots transformations, academic symposiums, and enduring community partnerships across the globe.
        </p>

        {/* Summary Metric Pills */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD3] text-[#414D3C] shadow-2xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#414D3C]" />
            <span>{photoCount} Photographic Frames</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD3] text-[#414D3C] shadow-2xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#5E6D58]" />
            <span>{videoCount} Video Dispatches</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE3] border border-[#DDD5C7] text-[#2F382B] shadow-2xs font-medium">
            <span>25+ Years of Service Archive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
