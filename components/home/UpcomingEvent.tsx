
import React from "react";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon, MapPinIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

export default function UpcomingEvent() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#F4EEE5] rounded-2xl lg:rounded-3xl
            border border-[#E6E0D5] overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12
            items-center gap-4 sm:gap-6 lg:gap-0 p-4 sm:p-7 lg:p-0">

            {/* Event Information */}
            <div className="lg:col-span-4 relative z-10
              min-w-0 lg:pl-9 lg:pr-3 lg:py-7">

              <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                  UPCOMING EVENT
                </span>
                <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif
                font-normal text-[#1E231C] tracking-tight mb-2 break-words">
                Renaissance 2.0
              </h2>

              <p className="text-xs sm:text-sm text-[#5B6356] mb-4">
                Reimagining Leadership for a Changing World
              </p>

              <div className="flex flex-wrap items-center gap-x-4
                gap-y-2 text-xs text-[#414B3C] font-medium mb-5">

                <div className="flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-[#5A6455]" />
                  <span>March 21, 2026</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <MapPinIcon className="w-4 h-4 text-[#5A6455]" />
                  <span>Boston, MA</span>
                </div>
              </div>

              <Link
                href="/events/renaissance-2-0-a-parliament-of-enlightened-thoughts"
                className="inline-flex items-center gap-2 px-5 py-2.5
                  rounded-full text-xs font-semibold text-white
                  bg-[#414D3C] hover:bg-[#323D2E]
                  transition-all shadow-xs hover:shadow"
              >
                <span>View Event Details</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Event Image - LEFT SIDE FADE ONLY */}
            <div className="lg:col-span-5 relative min-w-0
              h-52 sm:h-60 lg:h-56 w-full">

              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85"
                  alt="Auditorium conference at Renaissance 2.0"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Left fade blend only */}
              <div className="absolute inset-y-0 left-0 w-16 sm:w-24
                bg-gradient-to-r from-[#F4EEE5] to-transparent
                pointer-events-none" />

            </div>

            {/* Event Quote */}
            <div className="lg:col-span-3 min-w-0 flex items-center
              lg:border-l lg:border-[#DDD6CA]
              lg:ml-1 lg:pl-7 lg:pr-7 lg:py-7">

              <p className="text-sm sm:text-base font-serif italic
                text-[#4A5344] leading-relaxed max-w-[230px]">
                A premier gathering of global leaders, visionaries,
                and changemakers.
              </p>
            </div>

          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
