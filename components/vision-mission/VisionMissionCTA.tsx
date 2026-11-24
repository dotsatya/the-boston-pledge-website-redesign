import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

export default function VisionMissionCTA() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#242D21] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 text-center text-white relative overflow-hidden shadow-md border border-[#3A4635]">
            {/* Subtle decorative background circle */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 rounded-full bg-[#414D3C]/30 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8B8A0] block mb-2 sm:mb-3">
                BE A PART OF THE PLEDGE
              </span>
              <h2 className="text-xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight mb-2.5 sm:mb-4 leading-tight">
                Turn Shared Values Into Sustainable Action
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[#D0D9CB] leading-relaxed mb-4 sm:mb-8 font-normal">
                Join thinkers, grassroots champions, and voluntary leaders from around the world to build an equitable tomorrow.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
                <Link
                  href="/initiatives"
                  className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#242D21] bg-[#FAF8F5] hover:bg-white transition-all shadow-xs"
                >
                  <span>Explore Our Initiatives</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/be-a-volunteer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white border border-[#6B7965] hover:bg-white/10 transition-all"
                >
                  <span>Be A Volunteer</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
