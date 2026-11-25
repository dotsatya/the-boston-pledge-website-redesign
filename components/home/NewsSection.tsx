"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "pulsoicon-react";
import { getLatestUpdates } from "@/lib/latestUpdates";
import {
  getUpdateCoverImage,
  getUpdateFallbackImage,
} from "../latest-updates/UpdateBlockRenderer";
import CoverImage from "../latest-updates/CoverImage";
import ScrollReveal from "../common/ScrollReveal";

export default function NewsSection() {
  const news = getLatestUpdates(3);

  return (
    <section className="pt-8 sm:pt-10 lg:pt-14 pb-10 sm:pb-12 lg:pb-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column Text matching demo */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                NEWS &amp; INSIGHTS
              </span>
              <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
            </div>

            <Link href="/latest-updates" className="group">
              <h2 className="text-xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight mb-2 sm:mb-3 group-hover:text-[#414D3C] transition-colors">
                Insights. Ideas. Impact.
              </h2>
            </Link>

            <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed mb-2.5 sm:mb-4 font-normal">
              Stay informed with the latest news, publications and stories from
              our work.
            </p>

            <Link
              href="/latest-updates"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs"
            >
              <span>View All News</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right 3 news cards with home page stepped-tab style and <ArrowUpRight /> */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6 items-stretch">
            {news.map((item, idx) => {
              const coverImg = getUpdateCoverImage(item);
              const fallback = getUpdateFallbackImage(item);

              return (
                <ScrollReveal key={item.id} delay={idx * 0.1} className="h-full">
                  <Link
                    href={`/latest-updates/${item.slug}`}
                    className="group flex flex-row sm:flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DF] shadow-xs hover:shadow-md transition-all duration-300 p-2 sm:p-0 h-full justify-between"
                  >
                  {/* Left (mobile) / Top (desktop) Image */}
                  <div className="p-0 sm:p-2 sm:pb-0 shrink-0">
                    <div className="w-20 sm:w-full h-20 sm:h-36 lg:h-38 overflow-hidden rounded-lg sm:rounded-xl bg-[#EAE6DF] relative">
                      <CoverImage
                        src={coverImg}
                        fallbackSrc={fallback}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Stepped Tab Wave: desktop only */}
                      <div className="hidden sm:block absolute -bottom-px left-0 -right-10 h-6 pointer-events-none">
                        <svg
                          viewBox="0 0 320 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full text-white fill-current block"
                          preserveAspectRatio="none"
                        >
                          <path d="M0 0 H115 C127 0 133 12 145 12 H320 V24 H0 Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Right (mobile) / Bottom (desktop) Details Body */}
                  <div className="pl-2.5 sm:px-3.5 sm:pb-3 sm:pt-0 bg-white flex flex-col justify-center sm:justify-between sm:-mt-3 relative z-10 flex-1 min-w-0">
                    <div className="flex items-center sm:items-stretch justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        {/* Date */}
                        <div className="text-[11px] sm:text-xs text-[#7A8475] font-medium mb-0.5 sm:mb-1.5">
                          {item.dateLabel}
                        </div>

                        {/* Title with uniform 2-line slot height */}
                        <h3 className="text-xs sm:text-base font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2 sm:min-h-[2.5rem] flex items-center">
                          {item.title}
                        </h3>
                      </div>

                      {/* Circular Arrow Button with <ArrowUpRight /> aligned to bottom */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D5CFBF] bg-white flex items-center justify-center text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shadow-2xs shrink-0 self-center sm:self-end">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
