"use client";

import React from "react";
import Link from "next/link";
import { EventItem, getEventStatus } from "@/lib/eventsDetails";
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
  const status = getEventStatus(event);
  const isUpcoming = status === "upcoming";

  return (
    <article
      className={`bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div>
        {/* Cover Photo */}
        <Link href={`/events/${event.slug}`} className="block relative w-full h-52 overflow-hidden bg-[#EAE6DF]">
          <CoverImage
            src={cover}
            fallbackSrc={fallback}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Status Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs ${
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
        <div className="p-6">
          <div className="flex items-center justify-between text-[11px] mb-2.5">
            <span className="font-semibold text-[#414D3C] uppercase tracking-wider">
              {event.category}
            </span>
            <div className="flex items-center gap-1 text-[#788274]">
              <CalendarIcon className="w-3.5 h-3.5 text-[#5A6455]" />
              <span>{event.dateLabel}</span>
            </div>
          </div>

          <Link href={`/events/${event.slug}`}>
            <h3 className="text-lg font-serif font-bold text-[#1E231C] mb-2.5 group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2">
              {event.title}
            </h3>
          </Link>

          {event.venue && (
            <div className="flex items-center gap-1.5 text-xs text-[#6B7566] mb-3">
              <MapPinIcon className="w-3.5 h-3.5 text-[#414D3C] shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
          )}

          <p className="text-xs text-[#5D6558] leading-relaxed line-clamp-2">
            {event.summary}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-6 pb-6 pt-4 border-t border-[#F5F1EA] flex items-center justify-between">
        <span className="text-[11px] text-[#7A8374] font-medium">
          {event.dateIsApproximate ? "Annual Series" : "Symposium & Dialogue"}
        </span>
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#414D3C] group-hover:underline"
        >
          <span>View Event Details</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
