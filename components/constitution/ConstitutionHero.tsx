"use client";

import React from "react";
import Link from "next/link";
import { constitutionData } from "@/lib/about/constitution";
import CoverImage from "../latest-updates/CoverImage";
import { Globe } from "pulsoicon-react";

export default function ConstitutionHero() {
  const { organization, heroImage } = constitutionData;

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
          <span className="text-[#1E231C] font-medium">Constitution</span>
        </nav>

        {/* Symmetric 50/50 Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                CHARTER &amp; GOVERNANCE · EST. 2001
              </span>
              <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.18] mb-2.5 sm:mb-4 break-words">
              The Constitution of <br />
              <span className="italic">{organization.name}</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed max-w-2xl font-normal mb-3.5 sm:mb-8">
              The moral compass, ethical bedrock, and operational charter that preserves the sanctity, absolute political independence, and altruistic character of our global volunteer fellowship.
            </p>

            {/* Metric / Feature Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-[#E2DDD3] text-[#414D3C] shadow-2xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#414D3C]" />
                <span>6 Foundational Core Values</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-[#E2DDD3] text-[#414D3C] shadow-2xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#5E6D58]" />
                <span>7 Operational Guidelines</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#F3EDE3] border border-[#DDD5C7] text-[#2F382B] shadow-2xs font-medium">
                <span>501(c)(3) Voluntary Charter</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="w-full h-[180px] sm:h-[340px] lg:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#EAE6DF] group">
              <CoverImage
                src={heroImage.src}
                fallbackSrc="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85"
                alt={heroImage.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Glassmorphic Pill */}
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-md border border-[#EBE5DB] flex items-center gap-2 sm:gap-3 z-20">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-serif text-[#1E231C]">
                  Living Charter
                </div>
                <div className="text-[10px] text-[#7A8475] font-medium">
                  Ever-evolving for greater impact
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
