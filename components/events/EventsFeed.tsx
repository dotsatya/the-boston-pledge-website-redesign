"use client";

import React, { useState, useMemo } from "react";
import { getAllEvents, getEventStatus, formatEventDate, EventItem } from "@/lib/eventsDetails";
import EventCard from "./EventCard";

const ITEMS_PER_PAGE = 6;

export default function EventsFeed() {
  const allEvents = useMemo(() => getAllEvents(), []);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

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
      count: allEvents.filter((e) =>
        e.category.toLowerCase().includes("conference") ||
        e.category.toLowerCase().includes("summit") ||
        e.category.toLowerCase().includes("annual")
      ).length,
    },
    {
      id: "webinars",
      label: "Webinars & Workshops",
      count: allEvents.filter((e) =>
        e.category.toLowerCase().includes("webinar") ||
        e.category.toLowerCase().includes("workshop")
      ).length,
    },
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event: EventItem) => {
      // Filter by tab
      if (activeFilter === "upcoming" && getEventStatus(event) !== "upcoming") {
        return false;
      }
      if (activeFilter === "conferences") {
        const cat = event.category.toLowerCase();
        if (!cat.includes("conference") && !cat.includes("summit") && !cat.includes("annual")) {
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
        const matchesDate = (formatEventDate(event.date) + " " + event.date).toLowerCase().includes(q);
        if (!matchesTitle && !matchesSummary && !matchesVenue && !matchesDate) {
          return false;
        }
      }

      return true;
    });
  }, [allEvents, activeFilter, searchQuery]);

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const safePage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));

  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredEvents.length);
  const currentEvents = filteredEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      const el = document.getElementById("events-feed");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (safePage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    if (safePage >= totalPages - 3) {
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", safePage - 1, safePage, safePage + 1, "...", totalPages];
  };

  return (
    <section id="events-feed" className="pt-2 sm:pt-3 pb-12 sm:pb-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls: Filter Pills & Search bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-8">
          {/* Desktop Filter Pills */}
          <div className="hidden sm:flex sm:flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-[#414D3C] text-white shadow-xs"
                    : "bg-white text-[#384234] border border-[#DDD7CD] hover:border-[#414D3C]"
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === filter.id ? "bg-white/20 text-white" : "bg-[#FAF8F5] text-[#7A8374]"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box & Mobile Compact Category Select */}
          <div className="w-full sm:w-auto flex items-center gap-2">
            <input
              type="text"
              placeholder="Search events by topic, year..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="flex-1 sm:w-72 px-3.5 py-1.5 sm:py-2 text-xs rounded-full border border-[#D5CEC2] bg-white text-[#1E231C] placeholder:text-[#8FA587] focus:outline-none focus:ring-2 focus:ring-[#414D3C] hidden sm:block"
            />

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

        {/* Counter */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#6F7869] mb-3 sm:mb-6">
          <span>
            {filteredEvents.length > 0 ? (
              <>
                Showing <strong className="text-[#1E231C] font-semibold">{startIndex + 1}–{endIndex}</strong> of{" "}
                <strong className="text-[#1E231C] font-semibold">{filteredEvents.length}</strong> events
                {filteredEvents.length < allEvents.length && ` (filtered from ${allEvents.length})`}
              </>
            ) : (
              "No events to display"
            )}
          </span>
          {searchQuery && (
            <button
              onClick={() => handleSearchChange("")}
              className="text-[#414D3C] underline hover:text-[#262F23] cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
              {currentEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 pt-8 border-t border-[#ECE7DF] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#7A8475]">
                  Page <strong className="text-[#1E231C] font-semibold">{safePage}</strong> of{" "}
                  <strong className="text-[#1E231C] font-semibold">{totalPages}</strong>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(safePage - 1)}
                    disabled={safePage === 1}
                    aria-label="Previous page"
                    className="px-3 sm:px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed bg-white text-[#384234] border border-[#DDD7CD] hover:border-[#414D3C] hover:bg-[#FAF8F5] cursor-pointer shadow-2xs"
                  >
                    <span>←</span>
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-[190px] min-[400px]:max-w-[240px] sm:max-w-none py-1">
                    {getPageNumbers().map((item, idx) =>
                      typeof item === "number" ? (
                        <button
                          key={item}
                          onClick={() => handlePageChange(item)}
                          aria-label={`Go to page ${item}`}
                          aria-current={safePage === item ? "page" : undefined}
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full text-xs font-semibold transition-all flex items-center justify-center cursor-pointer ${
                            safePage === item
                              ? "bg-[#414D3C] text-white shadow-xs scale-105"
                              : "bg-white text-[#384234] border border-[#DDD7CD] hover:border-[#414D3C] hover:bg-[#FAF8F5]"
                          }`}
                        >
                          {item}
                        </button>
                      ) : (
                        <span key={`ellipsis-${idx}`} className="px-1 text-xs text-[#8A9585]">
                          …
                        </span>
                      )
                    )}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(safePage + 1)}
                    disabled={safePage === totalPages}
                    aria-label="Next page"
                    className="px-3 sm:px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed bg-white text-[#384234] border border-[#DDD7CD] hover:border-[#414D3C] hover:bg-[#FAF8F5] cursor-pointer shadow-2xs"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E8E2D8] max-w-lg mx-auto">
            <p className="text-sm font-serif text-[#1E231C] mb-2">No matching events found</p>
            <p className="text-xs text-[#7A8374] mb-4">
              Try adjusting your search terms or selecting another category filter.
            </p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
                setCurrentPage(1);
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
