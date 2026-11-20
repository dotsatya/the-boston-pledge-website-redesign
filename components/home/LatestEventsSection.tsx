import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";
import { getAllEvents } from "@/lib/eventsDetails";
import { getEventCover, getEventFallback } from "../events/eventHelpers";
import CoverImage from "../latest-updates/CoverImage";

export default function LatestEventsSection() {
  const events = getAllEvents().slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Text matching demo screenshot */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                LATEST EVENTS
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <Link href="/events" className="group">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight mb-3 group-hover:text-[#414D3C] transition-colors">
                Conferences. Dialogues. Impact.
              </h2>
            </Link>

            <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed mb-6 font-normal">
              Join global thinkers, visionaries, and grassroots leaders at our landmark conferences and virtual symposia.
            </p>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
            >
              <span>View All Events</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right 3 event cards pulling directly from lib/eventsDetails.ts */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {events.map((item) => {
              const coverImg = getEventCover(item);
              const fallback = getEventFallback(item);

              return (
                <Link
                  key={item.id}
                  href={`/events/${item.slug}`}
                  className="group flex flex-col bg-[#FAF8F5] rounded-xl overflow-hidden hover:opacity-95 transition-opacity"
                >
                  <div className="w-full h-44 rounded-xl overflow-hidden bg-[#EAE6DF] mb-3 shadow-2xs border border-[#E2DDD4] relative">
                    <CoverImage
                      src={coverImg}
                      fallbackSrc={fallback}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#242D21]/80 text-white backdrop-blur-xs">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-[11px] font-medium text-[#737C6E] mb-1">
                    {item.dateLabel}
                  </div>
                  <h3 className="text-sm font-semibold text-[#1E231C] group-hover:text-[#3B4736] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
