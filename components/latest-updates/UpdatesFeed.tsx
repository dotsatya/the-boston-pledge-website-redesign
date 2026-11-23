"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getAllUpdates, LatestUpdate } from "@/lib/latestUpdates";
import {
  getUpdateCoverImage,
  getUpdateFallbackImage,
} from "./UpdateBlockRenderer";
import CoverImage from "./CoverImage";
import { ArrowRightIcon } from "../common/Icons";

export default function UpdatesFeed() {
  const allUpdates = getAllUpdates();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Dynamically extract unique categories from the dataset
  const uniqueCategories = Array.from(
    new Set(allUpdates.map((u) => u.category)),
  );
  const categories = [
    { id: "all", label: "All Updates" },
    ...uniqueCategories.map((c) => ({ id: c, label: c })),
  ];

  const filtered = allUpdates.filter((art) => {
    if (activeCategory === "all") return true;
    return art.category === activeCategory;
  });

  return (
    <section className="pt-2 sm:pt-3 pb-12 sm:pb-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Category Filter Pills */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#414D3C] text-white shadow-xs"
                  : "bg-white text-[#384234] border border-[#DDD7CD] hover:border-[#414D3C]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile Category Dropdown Select: Single clean row */}
        <div className="sm:hidden mb-3 flex justify-center">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full text-xs py-1.5 px-3 rounded-full border border-[#DDD7CD] bg-white text-[#384234] focus:outline-none focus:ring-2 focus:ring-[#414D3C]"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {filtered.map((item: LatestUpdate) => {
            const coverImg = getUpdateCoverImage(item);
            const fallback = getUpdateFallbackImage(item);

            return (
              <article
                key={item.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group p-1.5 sm:p-0"
              >
                <div className="flex flex-row sm:flex-col h-full">
                  {/* Left on mobile, Top on desktop */}
                  <Link
                    href={`/latest-updates/${item.slug}`}
                    className="block relative w-24 sm:w-full h-24 sm:h-44 shrink-0 overflow-hidden rounded-lg sm:rounded-none bg-[#EAE6DF]"
                  >
                    <CoverImage
                      src={coverImg}
                      fallbackSrc={fallback}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Right on mobile, Bottom on desktop */}
                  <div className="pl-2.5 sm:p-5 flex-1 flex flex-col justify-between min-w-0 py-0.5 sm:py-5">
                    <div>
                      <div className="flex items-center justify-between text-[9px] sm:text-[11px] mb-0.5 sm:mb-2">
                        <span className="font-semibold text-[#414D3C] uppercase tracking-wider truncate mr-1">
                          {item.category}
                        </span>
                        <span className="text-[#7C8578] shrink-0 text-[9px] sm:text-[11px]">{item.dateLabel}</span>
                      </div>
                      <Link href={`/latest-updates/${item.slug}`}>
                        <h3 className="text-xs sm:text-base lg:text-lg font-serif font-bold text-[#1E231C] mb-1 sm:mb-2 group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="hidden sm:block text-xs text-[#5D6558] leading-relaxed mb-2 line-clamp-2">
                        {item.summary}
                      </p>
                    </div>

                    {/* Mobile inline link */}
                    <div className="pt-1.5 sm:hidden flex items-center justify-between border-t border-[#F5F1EA]/60">
                      <span className="text-[9px] text-[#7A8374]">
                        {item.dateLabel}
                      </span>
                      <Link
                        href={`/latest-updates/${item.slug}`}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#414D3C]"
                      >
                        <span>Read</span>
                        <ArrowRightIcon className="w-2 h-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Desktop Card Footer */}
                <div className="hidden sm:flex px-5 py-3.5 items-center justify-between border-t border-[#F5F1EA]">
                  <span className="text-[11px] text-[#7C8578] font-medium">
                    Event & Update
                  </span>
                  <Link
                    href={`/latest-updates/${item.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#414D3C] group-hover:text-[#252F21]"
                  >
                    <span>Read Full Update</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D5CFBF] bg-white flex items-center justify-center text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shadow-2xs">
                      <ArrowRightIcon className="w-3 h-3" />
                    </div>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
