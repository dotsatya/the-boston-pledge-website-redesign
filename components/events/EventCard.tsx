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
      className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DF] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group p-1.5 sm:p-0 h-full ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className="flex flex-row sm:flex-col flex-1 min-w-0">
        {/* Cover Photo: Left on mobile, Top on tablet/desktop */}
        <Link
          href={`/events/${event.slug}`}
          className="block relative w-24 sm:w-full h-24 sm:h-40 lg:h-42 shrink-0 overflow-hidden rounded-lg sm:rounded-none bg-[#EAE6DF]"
        >
          <CoverImage
            src={cover}
            fallbackSrc={fallback}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Status Badge */}
          <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 flex items-center gap-1 z-10">
            <span
              className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9.5px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-md ${
                isUpcoming
                  ? "bg-[#2F5E32] text-white"
                  : "bg-white/95 text-[#414D3C] border border-[#E0D9CE]"
              }`}
            >
              {isUpcoming ? "● Upcoming" : "Completed"}
            </span>
          </div>
        </Link>

        {/* Card Body: Right on mobile, Bottom on tablet/desktop */}
        <div className="pl-2.5 sm:px-4 sm:pt-3.5 sm:pb-3 flex-1 flex flex-col justify-between min-w-0 py-0.5">
          <div>
            <div className="flex items-center justify-between text-[9px] sm:text-[11px] mb-0.5 sm:mb-1.5">
              <span className="font-semibold text-[#414D3C] uppercase tracking-wider truncate mr-1">
                {event.category}
              </span>
              <div className="flex items-center gap-1 text-[#788274] shrink-0">
                <CalendarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#5A6455]" />
                <span className="hidden sm:inline">{formatEventDate(event.date)}</span>
              </div>
            </div>

            <Link href={`/events/${event.slug}`}>
              <h3
                className="text-xs sm:text-[15px] font-serif font-bold text-[#1E231C] mb-1 sm:mb-1.5 group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2 sm:h-10.5 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {event.title}
              </h3>
            </Link>

            {event.venue && (
              <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#6B7566] mb-1.5">
                <MapPinIcon className="w-3 h-3 text-[#414D3C] shrink-0" />
                <span className="truncate">{event.venue}</span>
              </div>
            )}

            <p
              className="max-sm:hidden text-xs text-[#5D6558] leading-normal line-clamp-2 sm:h-9 overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
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

      {/* Desktop & Tablet Card Footer */}
      <div className="hidden sm:flex px-4 py-2.5 sm:py-3 border-t border-[#F5F1EA] items-center justify-between mt-auto">
        <span className="text-[11px] text-[#7A8374] font-medium">
          {event.type === "upcoming" ? "Upcoming Event" : "Past Dialogue"}
        </span>
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#414D3C] group-hover:text-[#252F21]"
        >
          <span>View Details</span>
          <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border border-[#D5CFBF] bg-white flex items-center justify-center text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shadow-2xs">
            <ArrowRightIcon className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </article>
  );
}
