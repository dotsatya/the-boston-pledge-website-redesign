import React from "react";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRight } from "../common/Icons";
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
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Text matching demo */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                NEWS & INSIGHTS
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <Link href="/latest-updates" className="group">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight mb-3 group-hover:text-[#414D3C] transition-colors">
                Insights. Ideas. Impact.
              </h2>
            </Link>

            <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed mb-6 font-normal">
              Stay informed with the latest news, publications and stories from
              our work.
            </p>

            <Link
              href="/latest-updates"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs"
            >
              <span>View All News</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right 3 news cards with home page stepped-tab style and <ArrowUpRight /> */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {news.map((item, idx) => {
              const coverImg = getUpdateCoverImage(item);
              const fallback = getUpdateFallbackImage(item);

              return (
                <ScrollReveal key={item.id} delay={idx * 0.1}>
                  <Link
                    href={`/latest-updates/${item.slug}`}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#ECE7DF] shadow-xs hover:shadow-md transition-all duration-300 h-full"
                  >
                  {/* Top Image with padding and Stepped Tab Divider */}
                  <div className="p-1.5 sm:p-2 pb-0">
                    <div className="w-full h-44 sm:h-48 overflow-hidden rounded-xl bg-[#EAE6DF] relative">
                      <CoverImage
                        src={coverImg}
                        fallbackSrc={fallback}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Stepped Tab Wave: White SVG cutting into image bottom */}
                      <div className="absolute -bottom-px left-0 -right-10 h-6 pointer-events-none">
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

                  {/* Card Bottom Body */}
                  <div className="px-4 pb-3.5 pt-0 bg-white flex flex-col justify-between -mt-3 relative z-10">
                    <div>
                      {/* Date sitting inside the stepped tab on the left */}
                      <div className="text-xs text-[#7A8475] font-medium mb-2.5">
                        {item.dateLabel}
                      </div>

                      {/* Title on the left & Circular Button with <ArrowUpRight /> on the right */}
                      <div className="flex items-end justify-between gap-3">
                        <h3 className="text-sm sm:text-base font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2 flex-1">
                          {item.title}
                        </h3>
                        {/* Circular Arrow Button with <ArrowUpRight /> */}
                        <div className="w-9 h-9 rounded-full border border-[#D5CFBF] bg-white flex items-center justify-center text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shadow-2xs shrink-0 self-end">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
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
