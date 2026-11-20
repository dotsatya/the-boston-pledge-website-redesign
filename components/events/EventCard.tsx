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
      className={`bg-white rounded-2xl overflow-hidden border border-[#ECE7DF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div>
        {/* Cover Photo */}
        <Link
          href={`/events/${event.slug}`}
          className="block relative w-full h-40 sm:h-44 overflow-hidden bg-[#EAE6DF]"
        >
          <CoverImage
            src={cover}
            fallbackSrc={fallback}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Status Badge */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs ${
                isUpcoming
                  ? "bg-[#2F5E32] text-white"
                  : "bg-white/90 backdrop-blur-xs text-[#5D6558]"
              }`}
            >
              {isUpcoming ? "● Upcoming" : "Completed"}
            </span>
          </div>
        </Link>

        {/* Card Body */}
        <div className="p-5">
          <div className="flex items-center justify-between text-[11px] mb-2">
            <span className="font-semibold text-[#414D3C] uppercase tracking-wider">
              {event.category}
            </span>
            <div className="flex items-center gap-1 text-[#788274]">
              <CalendarIcon className="w-3.5 h-3.5 text-[#5A6455]" />
              <span>{formatEventDate(event.date)}</span>
            </div>
          </div>

          <Link href={`/events/${event.slug}`}>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1E231C] mb-2 group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2">
              {event.title}
            </h3>
          </Link>

          {event.venue && (
            <div className="flex items-center gap-1.5 text-xs text-[#6B7566] mb-2">
              <MapPinIcon className="w-3.5 h-3.5 text-[#414D3C] shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
          )}

          <p className="text-xs text-[#5D6558] leading-relaxed line-clamp-2">
            {event.summary}
          </p>
        </div>
      </div>

      {/* Card Footer Link with Circular Arrow Button */}
      <div className="px-5 py-3.5 border-t border-[#F5F1EA] flex items-center justify-between">
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
