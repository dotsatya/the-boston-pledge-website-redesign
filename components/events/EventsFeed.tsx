"use client";

import React, { useState, useMemo } from "react";
import { getAllEvents, getEventStatus, formatEventDate, EventItem } from "@/lib/eventsDetails";
import EventCard from "./EventCard";

export default function EventsFeed() {
  const allEvents = useMemo(() => getAllEvents(), []);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Controls: Filter Pills & Search bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10 pb-6 border-b border-[#ECE7DF]">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
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

          {/* Search Box */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search events by topic, year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-xs rounded-full border border-[#D5CEC2] bg-white text-[#1E231C] placeholder:text-[#8FA587] focus:outline-none focus:ring-2 focus:ring-[#414D3C]"
            />
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs text-[#6F7869] mb-6">
          <span>Showing {filteredEvents.length} of {allEvents.length} total events</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#414D3C] underline hover:text-[#262F23]"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
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
              }}
              className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#414D3C]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
