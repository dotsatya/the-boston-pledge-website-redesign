"use client";


import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "pulsoicon-react";
import ScrollReveal from "../common/ScrollReveal";

export default function UpcomingEvent() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#F4EEE5] rounded-2xl lg:rounded-3xl border border-[#E6E0D5] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-4 sm:gap-6 lg:gap-0 p-4 sm:p-6 lg:p-0">
              {/* Event Information */}
              <div className="lg:col-span-5 relative z-10 min-w-0 flex flex-col justify-center lg:pl-8 lg:pr-5 lg:py-7">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                    UPCOMING EVENT
                  </span>
                  <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-[#1E231C] tracking-tight mb-1 sm:mb-1.5 break-words">
                  Renaissance 2.0
                </h2>

                <p className="text-xs sm:text-sm text-[#5B6356] mb-3 font-normal">
                  Reimagining Leadership for a Changing World
                </p>

                <div className="flex flex-wrap items-center gap-x-3.5 sm:gap-x-4 gap-y-1.5 text-xs text-[#414B3C] font-medium mb-3.5 sm:mb-4">
                  <div data-icon-trigger className="flex items-center gap-1.5 cursor-pointer">
                    <Calendar className="w-3.5 h-3.5 text-[#5A6455]" />
                    <span>March 21, 2026</span>
                  </div>

                  <div data-icon-trigger className="flex items-center gap-1.5 cursor-pointer">
                    <MapPin className="w-3.5 h-3.5 text-[#5A6455]" />
                    <span>Boston, MA</span>
                  </div>
                </div>

                <div>
                  <Link
                    href="/events/renaissance-2-0-a-parliament-of-enlightened-thoughts"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs hover:shadow"
                  >
                    <span>View Event Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Event Image - Left fade blend on laptop/desktop only, clean rounded photo on mobile */}
              <div className="lg:col-span-4 relative min-w-0 w-full h-48 sm:h-56 lg:h-full lg:min-h-[250px] rounded-xl sm:rounded-2xl lg:rounded-none overflow-hidden">
                <div className="w-full h-full upcoming-event-mask overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85"
                    alt="Auditorium conference at Renaissance 2.0"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Left fade blend on laptop/desktop only */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-16 xl:w-20 bg-gradient-to-r from-[#F4EEE5] to-transparent pointer-events-none" />
              </div>

              {/* Event Quote */}
              <div className="lg:col-span-3 min-w-0 flex items-center justify-center lg:border-l lg:border-[#DDD6CA] pt-3.5 sm:pt-4 lg:pt-0 border-t border-[#E6E0D5]/70 lg:border-t-0 px-3 lg:px-7 lg:py-7">
                <p className="text-xs sm:text-sm lg:text-sm xl:text-base font-serif italic text-[#4A5344] leading-relaxed text-center lg:text-left">
                  &ldquo;A premier gathering of global leaders, visionaries, and changemakers.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
