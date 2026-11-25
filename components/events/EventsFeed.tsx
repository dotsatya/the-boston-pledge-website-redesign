"use client";

import React, { useState, useMemo } from "react";
import {
  getAllEvents,
  getEventStatus,
  formatEventDate,
  EventItem,
} from "@/lib/eventsDetails";
import EventCard from "./EventCard";
import { ChevronDown, Search } from "pulsoicon-react";
import ScrollReveal from "../common/ScrollReveal";

const BATCH_SIZE = 6;

export default function EventsFeed() {
  const allEvents = useMemo(() => getAllEvents(), []);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);

  const filters = [
    { id: "all", label: "All Events", count: allEvents.length },
    {
      id: "upcoming",
      label: "Upcoming",
      count: allEvents.filter((e) => getEventStatus(e) === "upcoming").length,
    },
    {
      id: "conferences",
      label: "Conferences & Summits",
      count: allEvents.filter(
        (e) =>
          e.category.toLowerCase().includes("conference") ||
          e.category.toLowerCase().includes("summit") ||
          e.category.toLowerCase().includes("annual"),
      ).length,
    },
    {
      id: "webinars",
      label: "Webinars & Workshops",
      count: allEvents.filter(
        (e) =>
          e.category.toLowerCase().includes("webinar") ||
          e.category.toLowerCase().includes("workshop"),
      ).length,
    },
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setVisibleCount(BATCH_SIZE);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(BATCH_SIZE);
  };

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event: EventItem) => {
      // Filter by tab
      if (activeFilter === "upcoming" && getEventStatus(event) !== "upcoming") {
        return false;
      }
      if (activeFilter === "conferences") {
        const cat = event.category.toLowerCase();
        if (
          !cat.includes("conference") &&
          !cat.includes("summit") &&
          !cat.includes("annual")
        ) {
          return false;
        }
      }
      if (activeFilter === "webinars") {
        const cat = event.category.toLowerCase();
        if (!cat.includes("webinar") && !cat.includes("workshop")) {
          return false;
        }
      }

      // Filter by search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = event.title.toLowerCase().includes(q);
        const matchesSummary = event.summary.toLowerCase().includes(q);
        const matchesVenue = event.venue?.toLowerCase().includes(q);
        const matchesDate = (formatEventDate(event.date) + " " + event.date)
          .toLowerCase()
          .includes(q);
        if (!matchesTitle && !matchesSummary && !matchesVenue && !matchesDate) {
          return false;
        }
      }

      return true;
    });
  }, [allEvents, activeFilter, searchQuery]);

  const currentEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + BATCH_SIZE);
  };

  return (
    <section
      id="events-feed"
      className="pt-2 sm:pt-3 pb-12 sm:pb-16 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls: Filter Pills & Search bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4 mb-4 sm:mb-8">
          {/* Tablet & Desktop Filter Pills */}
          <div className="hidden sm:flex sm:flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-[#414D3C] text-white shadow-xs"
                    : "bg-white text-[#384234] border border-[#DDD7CD] hover:border-[#414D3C]"
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === filter.id
                      ? "bg-white/20 text-white"
                      : "bg-[#FAF8F5] text-[#7A8374]"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box & Mobile Compact Category Select */}
          <div className="w-full lg:w-auto flex items-center gap-2">
            <div className="relative flex-1 sm:w-72 lg:w-80">
              <input
                type="text"
                placeholder="Search events by topic, year..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-8 sm:pl-9 pr-3.5 py-1.5 sm:py-2 text-xs rounded-full border border-[#D5CEC2] bg-white text-[#1E231C] placeholder:text-[#8FA587] focus:outline-none focus:ring-2 focus:ring-[#414D3C] hidden sm:block"
              />
              <Search className="w-3.5 h-3.5 text-[#8FA587] absolute left-3 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />
            </div>

            {/* Mobile Dropdown: Single clean compact row instead of 3 rows of wrapping pills */}
            <select
              value={activeFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="sm:hidden text-xs py-1.5 px-3 rounded-full border border-[#D5CEC2] bg-white text-[#384234] shrink-0 focus:outline-none focus:ring-2 focus:ring-[#414D3C]"
            >
              {filters.map((filter) => (
                <option key={filter.id} value={filter.id}>
                  {filter.label} ({filter.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Search Indicator if active */}
        {searchQuery && (
          <div className="flex justify-end text-[11px] sm:text-xs mb-3 sm:mb-4">
            <button
              onClick={() => handleSearchChange("")}
              className="text-[#414D3C] underline hover:text-[#262F23] cursor-pointer"
            >
              Clear search &ldquo;{searchQuery}&rdquo;
            </button>
          </div>
        )}

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 items-stretch">
              {currentEvents.map((event, idx) => (
                <ScrollReveal key={event.id} delay={(idx % 3) * 0.08} className="h-full">
                  <EventCard event={event} />
                </ScrollReveal>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#ECE7DF] flex justify-center">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] active:scale-95 transition-all shadow-xs hover:shadow-md cursor-pointer group"
                >
                  <span>Show More Events</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E8E2D8] max-w-lg mx-auto">
            <p className="text-sm font-serif text-[#1E231C] mb-2">
              No matching events found
            </p>
            <p className="text-xs text-[#7A8374] mb-4">
              Try adjusting your search terms or selecting another category
              filter.
            </p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
                setVisibleCount(BATCH_SIZE);
              }}
              className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#414D3C] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
