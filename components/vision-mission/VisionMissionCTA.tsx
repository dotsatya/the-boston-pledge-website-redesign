import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";

export default function VisionMissionCTA() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#242D21] rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-md">
          {/* Subtle decorative background circle */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 rounded-full bg-[#414D3C]/30 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8B8A0] block mb-3">
              BE A PART OF THE PLEDGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight mb-4 leading-tight">
              Turn Shared Values Into Sustainable Action
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#D0D9CB] leading-relaxed mb-8 font-normal">
              Join thinkers, grassroots champions, and voluntary leaders from around the world to build an equitable tomorrow.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#242D21] bg-[#FAF8F5] hover:bg-white transition-all shadow-xs"
              >
                <span>Explore Our Initiatives</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/be-a-volunteer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white border border-[#6B7965] hover:bg-white/10 transition-all"
              >
                <span>Be A Volunteer</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
