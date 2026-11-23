import React from "react";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRight } from "../common/Icons";
import { getAllEvents, formatEventDate } from "@/lib/eventsDetails";
import { getEventCover, getEventFallback } from "../events/eventHelpers";
import CoverImage from "../latest-updates/CoverImage";
import ScrollReveal from "../common/ScrollReveal";

export default function LatestEventsSection() {
  const events = getAllEvents().slice(0, 3);

  return (
    <section className="py-6 sm:py-12 lg:py-14 bg-[#F3EDE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column Text matching demo screenshot */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                LATEST EVENTS
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <Link href="/events" className="group">
              <h2 className="text-xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight mb-2 sm:mb-3 group-hover:text-[#414D3C] transition-colors">
                Conferences. Dialogues. Impact.
              </h2>
            </Link>

            <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed mb-3.5 sm:mb-6 font-normal">
              Join global thinkers, visionaries, and grassroots leaders at our
              landmark conferences and virtual symposia.
            </p>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs hover:shadow"
            >
              <span>View All Events</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right 3 event cards matching home page stepped-tab style and <ArrowUpRight /> */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6">
            {events.map((item, idx) => {
              const coverImg = getEventCover(item);
              const fallback = getEventFallback(item);

              return (
                <ScrollReveal key={item.id} delay={idx * 0.1}>
                  <Link
                    href={`/events/${item.slug}`}
                    className="group flex flex-row sm:flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DF] shadow-xs hover:shadow-md transition-all duration-300 p-2 sm:p-0"
                  >
                  {/* Left (mobile) / Top (desktop) Image */}
                  <div className="p-0 sm:p-2 sm:pb-0 shrink-0">
                    <div className="w-24 sm:w-full h-24 sm:h-48 overflow-hidden rounded-lg sm:rounded-xl bg-[#EAE6DF] relative">
                      <CoverImage
                        src={coverImg}
                        fallbackSrc={fallback}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Stepped Tab Wave: desktop only */}
                      <div className="hidden sm:block absolute -bottom-px left-0 -right-10 h-6 pointer-events-none">
                        <svg
                          viewBox="0 0 320 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full text-white fill-current block"
                          preserveAspectRatio="none"
                        >
                          <path d="M0 0 H115 C127 0 133 12 145 12 H320 V24 H0 Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Right (mobile) / Bottom (desktop) Details Body */}
                  <div className="pl-3 sm:px-4 sm:pb-3.5 sm:pt-0 bg-white flex flex-col justify-center sm:justify-between sm:-mt-3 relative z-10 flex-1 min-w-0">
                    <div className="flex items-center sm:items-stretch justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        {/* Date */}
                        <div className="text-[11px] sm:text-xs text-[#7A8475] font-medium mb-1 sm:mb-2.5">
                          {formatEventDate(item.date)}
                        </div>

                        {/* Title */}
                        <h3 className="text-xs sm:text-base font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                      </div>

                      {/* Circular Arrow Button with <ArrowUpRight /> */}
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-[#D5CFBF] bg-white flex items-center justify-center text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shadow-2xs shrink-0 self-center sm:self-end">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
