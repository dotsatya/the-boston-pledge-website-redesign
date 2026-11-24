import React from "react";
import { reflectionsData } from "@/components/about/Reflections";
import { ArrowUpRight, PlayIcon, YouTubeIcon } from "../common/Icons";

export default function ReflectionsVideo() {
  const { featuredVideo } = reflectionsData;

  return (
    <section id="discourse" className="pt-2 sm:pt-4 pb-6 sm:pb-8 lg:pb-10 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2.5 sm:gap-4 mb-4 sm:mb-8">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                FEATURED DISCOURSE
              </span>
              <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight">
              {featuredVideo.title}
            </h2>
            <p className="text-xs sm:text-base text-[#414D3C] font-medium mt-0.5 sm:mt-1">
              {featuredVideo.subtitle}
            </p>
          </div>

          <a
            href={featuredVideo.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all shrink-0 self-start md:self-auto"
          >
            <YouTubeIcon className="w-4 h-4 text-[#FF0000]" />
            <span>Watch on YouTube</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video & Info Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center">
          {/* 16:9 Video Embed Card */}
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-[#1E231C] shadow-sm border border-[#E2DDD4]">
              <iframe
                src={featuredVideo.embedUrl}
                title={`${featuredVideo.title} — ${featuredVideo.subtitle}`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Context & Key Highlights Card */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-[#ECE7DF] shadow-xs">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-[#414D3C] bg-[#F4F0E8] border border-[#E5DFD4] mb-2.5 sm:mb-4">
                <PlayIcon className="w-3 h-3 text-[#414D3C]" />
                <span>Executive Dialogue</span>
              </div>

              <h3 className="text-base sm:text-xl font-serif text-[#1E231C] leading-snug mb-2 sm:mb-3">
                Philosophical Foundations & Modern Governance
              </h3>

              <p className="text-xs sm:text-sm text-[#555E50] leading-relaxed mb-3 sm:mb-6 font-normal">
                {featuredVideo.description}
              </p>

              {/* Thematic Pillars */}
              <div className="space-y-2 pt-3 sm:pt-4 border-t border-[#ECE7DF]">
                <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#5A6455]">
                  Central Themes
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {[
                    "Leadership in the 21st Century",
                    "Global Renaissance",
                    "Reinventing Capitalism",
                    "Grassroots Empowerment",
                    "Conscience & Ethics",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium text-[#414D3C] bg-[#FAF8F5] border border-[#ECE7DF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 sm:pt-6 mt-3 sm:mt-6 border-t border-[#ECE7DF] flex items-center justify-between text-[11px] sm:text-xs text-[#7A8475]">
              <span>Speaker: Dr. Partha S. Ghosh</span>
              <a
                href="#chairman"
                className="text-[#414D3C] font-semibold hover:underline inline-flex items-center gap-1"
              >
                Read Biography ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
