import React from "react";
import Link from "next/link";
import { EventItem, getAllEvents, getEventStatus, formatEventDate } from "@/lib/eventsDetails";
import { getEventCover, getEventFallback } from "./eventHelpers";
import CoverImage from "../latest-updates/CoverImage";
import UpdateBlockRenderer from "../latest-updates/UpdateBlockRenderer";
import { CalendarIcon, MapPinIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

export default function EventDetail({ event }: { event: EventItem }) {
  const allEvents = getAllEvents();
  const related = allEvents.filter((e) => e.slug !== event.slug).slice(0, 3);
  const coverImg = getEventCover(event);
  const fallback = getEventFallback(event);
  const status = getEventStatus(event);
  const isUpcoming = status === "upcoming";

  return (
    <article className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#7A8475] mb-2.5 sm:mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/events" className="hover:text-[#414D3C] transition-colors">
            Events
          </Link>
          <span>/</span>
          <span className="text-[#1E231C] font-medium truncate max-w-xs">{event.title}</span>
        </nav>

        {/* Header Metadata */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#414D3C] text-white">
              {event.category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                isUpcoming ? "bg-[#2F5E32] text-white" : "bg-[#EAE4D9] text-[#556050]"
              }`}
            >
              {isUpcoming ? "● Upcoming Event" : "Completed Event"}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#646E5E]">
              <CalendarIcon className="w-3.5 h-3.5 text-[#5A6455]" />
              <span>{formatEventDate(event.date)}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-serif font-normal text-[#1E231C] leading-[1.18] tracking-tight mb-4 break-words">
            {event.title}
          </h1>

          {event.venue && (
            <div className="flex items-center gap-2 text-sm text-[#4A5445] mb-6 p-3.5 bg-white rounded-xl border border-[#E5DFD4] inline-flex">
              <MapPinIcon className="w-4 h-4 text-[#414D3C] shrink-0" />
              <span>{event.venue}</span>
            </div>
          )}

          {event.summary && (
            <p className="text-sm sm:text-base text-[#565E50] leading-relaxed italic border-l-2 border-[#C8C2B5] pl-4">
              {event.summary}
            </p>
          )}
        </header>

        {/* Cover Photo */}
        <div className="w-full max-h-[480px] rounded-3xl overflow-hidden bg-[#EAE6DF] mb-10 border border-[#E2DDD4] shadow-xs">
          <CoverImage
            src={coverImg}
            fallbackSrc={fallback}
            alt={event.title}
            className="w-full h-full max-h-[480px] object-cover object-center"
          />
        </div>

        {/* Content Blocks */}
        <div className="prose prose-stone max-w-none pb-12 border-b border-[#E9E4DC]">
          {event.content && event.content.length > 0 ? (
            event.content.map((block, idx) => {
              // Hide registration button if it is marked onlyWhenUpcoming and event is completed
              if (block.type === "button" && block.onlyWhenUpcoming && !isUpcoming) {
                return null;
              }
              return <UpdateBlockRenderer key={idx} block={block} />;
            })
          ) : (
            <p className="text-sm text-[#5D6558] italic">
              Additional proceedings and archives for this event are maintained in The Boston Pledge library.
            </p>
          )}
        </div>

        {/* Back Link & Info */}
        <div className="py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E9E4DC] mb-6 sm:mb-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-[#293325] bg-[#EFE9DF] hover:bg-[#E5DFD4] transition-colors"
          >
            <span>← Back to All Events</span>
          </Link>
          <div className="text-xs text-[#6E7868]">
            Organized by <strong>The Boston Pledge Organizing Committee</strong>
          </div>
        </div>

        {/* Related Events */}
        {related.length > 0 && (
          <ScrollReveal>
            <aside className="mt-8">
              <h3 className="text-xl sm:text-2xl font-serif text-[#1E231C] mb-6">
                More Conferences & Symposia
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/events/${item.slug}`}
                    className="group flex flex-col bg-white p-5 rounded-2xl border border-[#E8E2D8] hover:shadow-sm transition-all"
                  >
                    <div className="text-[11px] font-semibold text-[#414D3C] uppercase tracking-wider mb-1">
                      {item.category}
                    </div>
                    <h4 className="text-sm font-serif font-medium text-[#1E231C] group-hover:text-[#414D3C] transition-colors mb-2 line-clamp-2">
                      {item.title}
                    </h4>
                    <div className="text-[11px] text-[#788273] mt-auto">
                      {formatEventDate(item.date)}
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </ScrollReveal>
        )}
      </div>
    </article>
  );
}
