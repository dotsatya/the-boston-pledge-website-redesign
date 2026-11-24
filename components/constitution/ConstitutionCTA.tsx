import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";

export default function ConstitutionCTA() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contained Floating Card with Compatible Compass SVGs */}
        <div className="bg-[#242D21] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 text-center text-white relative overflow-hidden shadow-md border border-[#3A4635]">
          
          {/* Decorative Compass & Geometric Watermark SVGs */}
          <div className="absolute -right-16 -top-16 w-80 h-80 sm:w-96 sm:h-96 opacity-10 pointer-events-none text-white">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
              <path
                d="M100 10 L106 80 L190 100 L106 120 L100 190 L94 120 L10 100 L94 80 Z"
                fill="currentColor"
                fillOpacity="0.2"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M100 35 L104 88 L165 100 L104 112 L100 165 L96 112 L35 100 L96 88 Z"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <circle cx="100" cy="100" r="6" fill="currentColor" />
            </svg>
          </div>
          
          <div className="absolute -left-16 -bottom-16 w-80 h-80 sm:w-96 sm:h-96 opacity-10 pointer-events-none text-white">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
              <path
                d="M100 20 L105 85 L180 100 L105 115 L100 180 L95 115 L20 100 L95 85 Z"
                fill="currentColor"
                fillOpacity="0.18"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Compass / Navigation Emblem SVG Badge */}
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#A8B8A0] mx-auto mb-3 sm:mb-5 backdrop-blur-xs shadow-inner">
              <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <polygon
                  points="12 3 14.5 9.5 21 12 14.5 14.5 12 21 9.5 14.5 3 12 9.5 9.5 12 3"
                  fill="currentColor"
                  fillOpacity="0.25"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-white/10 text-white/90 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider mb-2.5 sm:mb-4 border border-white/15">
              <span>Stewardship &amp; Trust</span>
            </div>

            <h2 className="text-xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight mb-2.5 sm:mb-4 leading-tight">
              Dedicated to Grassroots Awakening &amp; Global Equity
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-[#D0D9CC] leading-relaxed max-w-2xl mx-auto font-normal mb-4 sm:mb-8">
              The Boston Pledge remains an independent, volunteer-powered incubator of public service. Discover our full mission doctrines or step forward to serve alongside our international fellowship.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
              <Link
                href="/about/vision-mission"
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs font-semibold text-[#1E231C] bg-[#FAF8F5] hover:bg-white transition-all shadow-sm"
              >
                <span>Our Vision &amp; Mission</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/be-a-volunteer"
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-all shadow-sm"
              >
                <span>Join as a Volunteer</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
