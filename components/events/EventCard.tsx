"use client";

import React from "react";
import Link from "next/link";
import { EventItem, formatEventDate } from "@/lib/eventsDetails";
import { getEventCover, getEventFallback } from "./eventHelpers";
import CoverImage from "../latest-updates/CoverImage";
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from "../common/Icons";

interface EventCardProps {
  event: EventItem;
  featured?: boolean;
}

export default function EventCard({ event, featured = false }: EventCardProps) {
  const cover = getEventCover(event);
  const fallback = getEventFallback(event);
  const isUpcoming = event.type === "upcoming";

  return (
    <article
      className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DF] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group p-1.5 sm:p-0 ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className="flex flex-row sm:flex-col h-full">
        {/* Cover Photo: Left on mobile, Top on desktop */}
        <Link
          href={`/events/${event.slug}`}
          className="block relative w-24 sm:w-full h-24 sm:h-44 shrink-0 overflow-hidden rounded-lg sm:rounded-none bg-[#EAE6DF]"
        >
          <CoverImage
            src={cover}
            fallbackSrc={fallback}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Status Badge */}
          <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:right-2.5 sm:left-auto flex items-center gap-1">
            <span
              className={`px-1.5 py-0.2 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider shadow-xs ${
                isUpcoming
                  ? "bg-[#2F5E32] text-white"
                  : "bg-white/90 backdrop-blur-xs text-[#5D6558]"
              }`}
            >
              {isUpcoming ? "● Upcoming" : "Completed"}
            </span>
          </div>
        </Link>

        {/* Card Body: Right on mobile, Bottom on desktop */}
        <div className="pl-2.5 sm:p-5 flex-1 flex flex-col justify-between min-w-0 py-0.5 sm:py-5">
          <div>
            <div className="flex items-center justify-between text-[9px] sm:text-[11px] mb-0.5 sm:mb-2">
              <span className="font-semibold text-[#414D3C] uppercase tracking-wider truncate mr-1">
                {event.category}
              </span>
              <div className="flex items-center gap-1 text-[#788274] shrink-0">
                <CalendarIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#5A6455]" />
                <span className="hidden sm:inline">{formatEventDate(event.date)}</span>
              </div>
            </div>

            <Link href={`/events/${event.slug}`}>
              <h3 className="text-xs sm:text-base lg:text-lg font-serif font-bold text-[#1E231C] mb-1 sm:mb-2 group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2">
                {event.title}
              </h3>
            </Link>

            {event.venue && (
              <div className="hidden sm:flex items-center gap-1 text-[11px] sm:text-xs text-[#6B7566] mb-1 sm:mb-2">
                <MapPinIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#414D3C] shrink-0" />
                <span className="truncate">{event.venue}</span>
              </div>
            )}

            <p className="hidden sm:block text-xs text-[#5D6558] leading-relaxed line-clamp-2">
              {event.summary}
            </p>
          </div>

          {/* Mobile bottom details link */}
          <div className="pt-1.5 sm:hidden flex items-center justify-between border-t border-[#F5F1EA]/60">
            <span className="text-[9px] text-[#7A8374]">
              {formatEventDate(event.date)}
            </span>
            <Link
              href={`/events/${event.slug}`}
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#414D3C]"
            >
              <span>Details</span>
              <ArrowRightIcon className="w-2 h-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Card Footer */}
      <div className="hidden sm:flex px-5 py-3.5 border-t border-[#F5F1EA] items-center justify-between">
        <span className="text-[11px] text-[#7A8374] font-medium">
          {event.type === "upcoming" ? "Upcoming Event" : "Past Dialogue"}
        </span>
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#414D3C] group-hover:text-[#252F21]"
        >
          <span>View Details</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D5CFBF] bg-white flex items-center justify-center text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shadow-2xs">
            <ArrowRightIcon className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </article>
  );
}
