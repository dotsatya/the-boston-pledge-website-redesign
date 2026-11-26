"use client";

import React from "react";
import Link from "next/link";
import { LatestUpdate, getAllUpdates } from "@/lib/latestUpdates";
import UpdateBlockRenderer, { getUpdateCoverImage, getUpdateFallbackImage } from "./UpdateBlockRenderer";
import CoverImage from "./CoverImage";
import { ArrowLeft, Calendar } from "pulsoicon-react";
import ScrollReveal from "../common/ScrollReveal";

export default function UpdateDetail({ update }: { update: LatestUpdate }) {
  const allUpdates = getAllUpdates();
  const related = allUpdates.filter((u) => u.slug !== update.slug).slice(0, 3);
  const coverImg = getUpdateCoverImage(update);
  const fallback = getUpdateFallbackImage(update);

  return (
    <article className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#7A8475] mb-2.5 sm:mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/latest-updates" className="hover:text-[#414D3C] transition-colors">
            Latest Updates
          </Link>
          <span>/</span>
          <span className="text-[#1E231C] font-medium truncate max-w-xs">{update.title}</span>
        </nav>

        {/* Header Metadata */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#414D3C] text-white">
              {update.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#646E5E]">
              <Calendar className="w-3.5 h-3.5 text-[#5A6455]" />
              <span>{update.dateLabel}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-serif font-normal text-[#1E231C] leading-[1.18] tracking-tight mb-4 break-words">
            {update.title}
          </h1>

          <p className="text-sm sm:text-base text-[#565E50] leading-relaxed italic border-l-2 border-[#C8C2B5] pl-4">
            {update.summary}
          </p>
        </header>

        {/* Cover Photo */}
        <div className="w-full h-[280px] sm:h-[420px] rounded-3xl overflow-hidden bg-[#EAE6DF] mb-10 border border-[#E2DDD4] shadow-xs">
          <CoverImage
            src={coverImg}
            fallbackSrc={fallback}
            alt={update.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Blocks */}
        <div className="prose prose-stone max-w-none pb-12 border-b border-[#E9E4DC]">
          {update.content.map((block, idx) => (
            <UpdateBlockRenderer key={idx} block={block} />
          ))}
        </div>

        {/* Back Link & Share bar */}
        <div className="py-3.5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 border-b border-[#E9E4DC] mb-5 sm:mb-8 text-left">
          <Link
            href="/latest-updates"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-[#293325] bg-[#EFE9DF] hover:bg-[#E5DFD4] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Updates</span>
          </Link>
          <div className="text-xs text-[#6E7868]">
            Published by <strong>The Boston Pledge Communications Committee</strong>
          </div>
        </div>

        {/* Related Updates */}
        {related.length > 0 && (
          <ScrollReveal>
            <aside className="mt-5 sm:mt-8">
              <h3 className="text-lg sm:text-2xl font-serif text-[#1E231C] mb-3.5 sm:mb-6">
                More Updates & Insights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/latest-updates/${item.slug}`}
                    className="group flex flex-row sm:flex-col bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#E8E2D8] hover:shadow-sm transition-all gap-3 sm:gap-3"
                  >
                    <div className="w-20 sm:w-full h-20 sm:h-34 shrink-0 rounded-lg sm:rounded-xl overflow-hidden bg-[#EAE6DF] relative">
                      <CoverImage
                        src={getUpdateCoverImage(item)}
                        fallbackSrc={getUpdateFallbackImage(item)}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-[#414D3C] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                          {item.category}
                        </div>
                        <h4 className="text-xs sm:text-sm font-serif font-medium text-[#1E231C] group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h4>
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#788273] mt-1.5 sm:mt-2">
                        {item.dateLabel}
                      </div>
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
