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
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item: LatestUpdate) => {
            const coverImg = getUpdateCoverImage(item);
            const fallback = getUpdateFallbackImage(item);

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <Link
                    href={`/latest-updates/${item.slug}`}
                    className="block w-full h-40 sm:h-44 overflow-hidden bg-[#EAE6DF]"
                  >
                    <CoverImage
                      src={coverImg}
                      fallbackSrc={fallback}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[11px] mb-2">
                      <span className="font-semibold text-[#414D3C] uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-[#7C8578]">{item.dateLabel}</span>
                    </div>
                    <Link href={`/latest-updates/${item.slug}`}>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#1E231C] mb-2 group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#5D6558] leading-relaxed mb-2 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 flex items-center justify-between border-t border-[#F5F1EA]">
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
