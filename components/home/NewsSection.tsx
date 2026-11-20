import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";
import { getLatestUpdates } from "@/lib/latestUpdates";
import { getUpdateCoverImage, getUpdateFallbackImage } from "../latest-updates/UpdateBlockRenderer";
import CoverImage from "../latest-updates/CoverImage";

export default function NewsSection() {
  const news = getLatestUpdates(3);

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5]">
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
              Stay informed with the latest news, publications and stories from our work.
            </p>

            <Link
              href="/latest-updates"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
            >
              <span>View All News</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right 3 news cards pulling directly from lib/latestUpdates.ts */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {news.map((item) => {
              const coverImg = getUpdateCoverImage(item);
              const fallback = getUpdateFallbackImage(item);

              return (
                <Link
                  key={item.id}
                  href={`/latest-updates/${item.slug}`}
                  className="group flex flex-col bg-[#FAF8F5] rounded-xl overflow-hidden hover:opacity-95 transition-opacity"
                >
                  <div className="w-full h-44 rounded-xl overflow-hidden bg-[#EAE6DF] mb-3 shadow-2xs border border-[#E2DDD4]">
                    <CoverImage
                      src={coverImg}
                      fallbackSrc={fallback}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-[11px] font-medium text-[#737C6E] mb-1">
                    {item.dateLabel}
                  </div>
                  <h3 className="text-sm font-semibold text-[#1E231C] group-hover:text-[#3B4736] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
