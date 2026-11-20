import React from "react";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon, MapPinIcon } from "../common/Icons";

export default function UpcomingEvent() {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Warm Card Container matching demo */}
        <div className="bg-[#EFE9DF] rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs border border-[#E3DC CE]/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                  UPCOMING EVENT
                </span>
                <div className="w-10 h-px bg-[#C8C2B5]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1E231C] tracking-tight mb-2">
                Renaissance 2.0
              </h2>

              <p className="text-xs sm:text-sm text-[#5B6356] font-normal mb-5">
                Reimagining Leadership for a Changing World
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#414B3C] font-medium mb-6">
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
                href="/events"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
              >
                <span>View Event Details</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Middle Auditorium Photo */}
            <div className="lg:col-span-4 h-48 sm:h-56 rounded-xl overflow-hidden shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80"
                alt="Auditorium conference at Renaissance 2.0"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Italic Quote matching demo */}
            <div className="lg:col-span-3 lg:border-l lg:border-[#DDD6CA] lg:pl-8">
              <blockquote className="text-base sm:text-lg font-serif italic text-[#4A5344] leading-relaxed">
                “A premier gathering of global leaders, visionaries, and changemakers.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
