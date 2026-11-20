import React from "react";
import Link from "next/link";
import { LatestUpdate, getAllUpdates } from "@/lib/latestUpdates";
import UpdateBlockRenderer, { getUpdateCoverImage, getUpdateFallbackImage } from "./UpdateBlockRenderer";
import CoverImage from "./CoverImage";
import { CalendarIcon } from "../common/Icons";

export default function UpdateDetail({ update }: { update: LatestUpdate }) {
  const allUpdates = getAllUpdates();
  const related = allUpdates.filter((u) => u.slug !== update.slug).slice(0, 3);
  const coverImg = getUpdateCoverImage(update);
  const fallback = getUpdateFallbackImage(update);

  return (
    <article className="py-12 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#6B7565] mb-8">
          <Link href="/" className="hover:text-[#1E231C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/latest-updates" className="hover:text-[#1E231C] transition-colors">
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
              <CalendarIcon className="w-3.5 h-3.5 text-[#5A6455]" />
              <span>{update.dateLabel}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1E231C] leading-[1.18] tracking-tight mb-6">
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
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E9E4DC] mb-14">
          <Link
            href="/latest-updates"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-[#293325] bg-[#EFE9DF] hover:bg-[#E5DFD4] transition-colors"
          >
            <span>← Back to All Updates</span>
          </Link>
          <div className="text-xs text-[#6E7868]">
            Published by <strong>The Boston Pledge Communications Committee</strong>
          </div>
        </div>

        {/* Related Updates */}
        {related.length > 0 && (
          <aside className="mt-8">
            <h3 className="text-xl sm:text-2xl font-serif text-[#1E231C] mb-6">
              More Updates & Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/latest-updates/${item.slug}`}
                  className="group flex flex-col bg-white p-5 rounded-2xl border border-[#E8E2D8] hover:shadow-sm transition-all"
                >
                  <div className="text-[11px] font-semibold text-[#414D3C] uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h4 className="text-sm font-serif font-medium text-[#1E231C] group-hover:text-[#414D3C] transition-colors mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="text-[11px] text-[#788273] mt-auto">
                    {item.dateLabel}
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
