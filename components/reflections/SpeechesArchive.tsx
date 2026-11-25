"use client";

import React, { useState, useMemo } from "react";
import { reflectionsData, SpeechItem } from "@/components/about/Reflections";
import { Calendar, MapPin, Search } from "pulsoicon-react";
import ScrollReveal from "../common/ScrollReveal";

export default function SpeechesArchive() {
  const { speeches } = reflectionsData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    speeches.items.forEach((item) => {
      if (item.category) set.add(item.category);
    });
    return ["All", ...Array.from(set)];
  }, [speeches.items]);

  // Filtered speech items
  const filteredSpeeches = useMemo(() => {
    return speeches.items.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.forum.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.date.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [speeches.items, selectedCategory, searchQuery]);

  return (
    <section id="speeches" className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-3 sm:mb-6">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
              GLOBAL ADDRESSES &amp; SYMPOSIUMS
            </span>
            <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight mb-2 sm:mb-3">
            {speeches.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed font-normal">
            {speeches.sectionDescription}
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-4 mb-4 sm:mb-8 pb-3.5 sm:pb-6 border-b border-[#ECE7DF]">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all ${
                    active
                      ? "bg-[#414D3C] text-white shadow-xs"
                      : "bg-white text-[#555E50] border border-[#E2DDD4] hover:bg-[#F3EDE3]"
                  }`}
                >
                  {cat}
                  {cat === "All" && ` (${speeches.items.length})`}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, forum, city..."
              className="w-full px-3 py-1.5 sm:px-3.5 sm:py-2 pl-8 sm:pl-9 rounded-xl text-xs bg-white border border-[#E2DDD4] focus:outline-hidden focus:border-[#414D3C] focus:ring-1 focus:ring-[#414D3C] text-[#1E231C] placeholder-[#8F988A]"
            />
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8F988A] absolute left-2.5 sm:left-3 top-2 sm:top-2.5 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1.5 sm:top-2.5 text-xs text-[#8F988A] hover:text-[#1E231C]"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Speeches Grid */}
        {filteredSpeeches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-6 items-stretch">
            {filteredSpeeches.map((speech: SpeechItem, index) => (
              <ScrollReveal key={speech.id} delay={(index % 2) * 0.08} className="h-full">
                <div
                  className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-7 border border-[#ECE7DF] hover:border-[#414D3C]/40 hover:shadow-xs transition-all flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Top metadata row */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-[11px] font-mono font-semibold text-[#8F988A]">
                        #{String(speech.id).padStart(2, "0")}
                      </span>
                      {speech.category && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-[#FAF8F5] text-[#5A6455] border border-[#E8E2D7]">
                          {speech.category}
                        </span>
                      )}
                    </div>

                    {/* Speech Title */}
                    <h3 className="text-sm sm:text-base font-serif font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors leading-snug mb-3">
                      {speech.title}
                    </h3>

                    {/* Forum / Host Institution */}
                    <p className="text-xs text-[#555E50] font-medium mb-4 flex items-start gap-1.5">
                      <span className="text-[#8F988A] shrink-0 font-normal">at</span>
                      <span className="leading-snug">{speech.forum}</span>
                    </p>
                  </div>

                  {/* Footer Badges: Location & Date */}
                  <div className="pt-4 border-t border-[#F2ECE3] flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A8475]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#414D3C] shrink-0" />
                      <span>{speech.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium text-[#414D3C]">
                      <Calendar className="w-3.5 h-3.5 text-[#7A8475] shrink-0" />
                      <span>{speech.date}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#ECE7DF]">
            <p className="text-sm text-[#555E50]">
              No presentations found matching your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-[#414D3C] bg-[#FAF8F5] border border-[#E2DDD4] hover:bg-[#F3EDE3]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
