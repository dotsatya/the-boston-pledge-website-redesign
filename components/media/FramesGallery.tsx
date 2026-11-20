"use client";

import React, { useState, useMemo, useEffect } from "react";
import { media, videos } from "@/lib/about/media";
import CoverImage from "../latest-updates/CoverImage";
import { PlayIcon, CloseIcon } from "../common/Icons";

type CategoryFilter =
  | "all"
  | "conferences"
  | "grassroots"
  | "education"
  | "enterprise"
  | "videos";

interface ProcessedMediaItem {
  id: number;
  url: string;
  caption: string;
  category: "conferences" | "grassroots" | "education" | "enterprise";
  categoryLabel: string;
}

export default function FramesGallery() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Categorize and supplement empty captions cleanly
  const processedPhotos = useMemo<ProcessedMediaItem[]>(() => {
    return media.map((item, index) => {
      let caption = item.caption.trim();
      const url = item.url;

      // Provide clear fallback caption if original was empty
      if (!caption) {
        if (url.includes("DSC_0235")) {
          caption = "Sixteenth Annual Conference 2017: Opening Address";
        } else if (url.includes("IMG_50992")) {
          caption = "Community Fellowship & Grassroots Consultation";
        } else if (url.includes("IMG_5075")) {
          caption = "Field Delegate Assembly & Community Outreach";
        } else if (url.includes("IMG_5070")) {
          caption = "Grassroots Collaboration & Field Partner Meeting";
        } else if (url.includes("ESP1")) {
          caption = "Educator's Springboard Programme (ESP) Workshop";
        } else {
          caption = `Grassroots Archive Frame #${index + 1}`;
        }
      }

      // Determine category based on keywords
      const text = (caption + " " + url).toLowerCase();
      let category: "conferences" | "grassroots" | "education" | "enterprise" =
        "grassroots";
      let categoryLabel = "Grassroots & Village Life";

      if (
        text.includes("conference") ||
        text.includes("bncci") ||
        text.includes("addressing") ||
        text.includes("technopreneurship") ||
        text.includes("tsinghua") ||
        text.includes("adharshila") ||
        text.includes("fletcher") ||
        text.includes("symposium") ||
        text.includes("principles") ||
        url.includes("rst_4177") ||
        url.includes("g105350") ||
        url.includes("gallery11") ||
        url.includes("gallery12") ||
        url.includes("gallery13") ||
        url.includes("gallery14") ||
        url.includes("gallery15") ||
        url.includes("gallery16") ||
        url.includes("dsc_02")
      ) {
        category = "conferences";
        categoryLabel = "Conferences & Forums";
      } else if (
        text.includes("children") ||
        text.includes("drawing") ||
        text.includes("creche") ||
        text.includes("navodaya") ||
        text.includes("library") ||
        text.includes("outdoor") ||
        text.includes("class") ||
        text.includes("garuda sopan") ||
        text.includes("inner wheel") ||
        text.includes("lakhikantapur") ||
        text.includes("picture-evaluation") ||
        text.includes("esp")
      ) {
        category = "education";
        categoryLabel = "Education & Children";
      } else if (
        text.includes("microfinance") ||
        text.includes("carpet") ||
        text.includes("self-help") ||
        text.includes("vssu") ||
        text.includes("kapil mandal") ||
        text.includes("entrepreneurship") ||
        text.includes("rug") ||
        url.includes("gal4") ||
        url.includes("gal23") ||
        url.includes("gal1-") ||
        url.includes("gal2-") ||
        url.includes("gal3")
      ) {
        category = "enterprise";
        categoryLabel = "Enterprise & Livelihood";
      }

      return {
        id: index,
        url,
        caption,
        category,
        categoryLabel,
      };
    });
  }, []);

  // Filtered photos based on active category tab & search query
  const filteredPhotos = useMemo(() => {
    return processedPhotos.filter((item) => {
      const matchesCategory =
        activeTab === "all" || item.category === activeTab;
      const matchesSearch =
        !searchQuery ||
        item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [processedPhotos, activeTab, searchQuery]);

  // Video items filtering
  const filteredVideos = useMemo(() => {
    if (activeTab !== "videos" && activeTab !== "all") return [];
    if (!searchQuery) return videos;
    return videos.filter((v, i) => {
      const label = v.caption || `The Boston Pledge Video Dispatch #${i + 1}`;
      return (
        label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.url.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [activeTab, searchQuery]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Filter Navigation Bar & Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-[#ECE7DF]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-2xs ${
                activeTab === "all"
                  ? "bg-[#414D3C] text-white"
                  : "bg-white text-[#4E5748] border border-[#DDD7CD] hover:border-[#414D3C]"
              }`}
            >
              All Frames ({processedPhotos.length})
            </button>
            <button
              onClick={() => setActiveTab("conferences")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-2xs ${
                activeTab === "conferences"
                  ? "bg-[#414D3C] text-white"
                  : "bg-white text-[#4E5748] border border-[#DDD7CD] hover:border-[#414D3C]"
              }`}
            >
              Conferences &amp; Forums
            </button>
            <button
              onClick={() => setActiveTab("grassroots")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-2xs ${
                activeTab === "grassroots"
                  ? "bg-[#414D3C] text-white"
                  : "bg-white text-[#4E5748] border border-[#DDD7CD] hover:border-[#414D3C]"
              }`}
            >
              Grassroots &amp; Villages
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-2xs ${
                activeTab === "education"
                  ? "bg-[#414D3C] text-white"
                  : "bg-white text-[#4E5748] border border-[#DDD7CD] hover:border-[#414D3C]"
              }`}
            >
              Education &amp; Children
            </button>
            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-2xs ${
                activeTab === "enterprise"
                  ? "bg-[#414D3C] text-white"
                  : "bg-white text-[#4E5748] border border-[#DDD7CD] hover:border-[#414D3C]"
              }`}
            >
              Enterprise &amp; Livelihood
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-2xs flex items-center gap-1.5 ${
                activeTab === "videos"
                  ? "bg-[#414D3C] text-white"
                  : "bg-white text-[#4E5748] border border-[#DDD7CD] hover:border-[#414D3C]"
              }`}
            >
              <PlayIcon className="w-3 h-3" />
              <span>Video Archive ({videos.length})</span>
            </button>
          </div>

          {/* Quick Search Box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <input
              type="text"
              placeholder="Filter by keyword or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-[#D5CEC2] bg-white text-xs text-[#1E231C] placeholder:text-[#8E9789] focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7A8374] hover:text-[#1E231C]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* PHOTO FRAMES GRID (Shown when not exclusively on video tab) */}
        {activeTab !== "videos" && (
          <div className="mb-14">
            {filteredPhotos.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-[#ECE7DF] max-w-lg mx-auto">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-serif text-[#1E231C] mb-1">
                  No frames found
                </h3>
                <p className="text-xs text-[#636C5E] mb-4">
                  We could not find any photo frames matching &ldquo;
                  {searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveTab("all");
                  }}
                  className="px-4 py-2 rounded-full bg-[#414D3C] text-white text-xs font-medium"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredPhotos.map((photo, idx) => (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxIndex(idx)}
                    className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  >
                    {/* Image Viewport */}
                    <div className="w-full h-56 sm:h-60 overflow-hidden bg-[#E9E4DC] relative">
                      <CoverImage
                        src={photo.url}
                        alt={photo.caption}
                        fallbackSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#313A2D] backdrop-blur-xs border border-[#ECE7DF] shadow-2xs">
                          {photo.categoryLabel}
                        </span>
                      </div>

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-[#242D21]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-white/95 text-[#242D21] text-xs font-medium shadow-md">
                          Click to View Full Frame
                        </span>
                      </div>
                    </div>

                    {/* Caption Bar */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <p className="text-xs sm:text-sm font-serif text-[#1E231C] leading-snug group-hover:text-[#414D3C] transition-colors line-clamp-2">
                        {photo.caption}
                      </p>
                      <div className="pt-3 mt-3 border-t border-[#F2ECE3] flex items-center justify-between text-[11px] text-[#7A8374]">
                        <span>The Boston Pledge Archive</span>
                        <span className="font-medium text-[#414D3C] group-hover:underline">
                          Enlarge →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIDEO DISPATCHES SECTION (Shown when activeTab === 'videos' or activeTab === 'all') */}
        {(activeTab === "videos" || activeTab === "all") && (
          <div className="pt-8 border-t border-[#ECE7DF]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#414D3C]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                    VIDEO DISPATCHES
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1E231C] tracking-tight">
                  Visual Dispatches &amp; Field Documentaries
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5C6457] max-w-md">
                Recorded symposiums, grassroots webinars, and field recordings from our community initiatives across rural India and international forums.
              </p>
            </div>

            {filteredVideos.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-[#ECE7DF] max-w-lg mx-auto">
                <p className="text-xs text-[#636C5E]">
                  No video dispatches match your search.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredVideos.map((vid, idx) => {
                  const isMp4 = vid.url.endsWith(".mp4");
                  const title =
                    vid.caption ||
                    (isMp4
                      ? "Children in Ballavpur Village, Birbhum — Grassroots Outreach"
                      : `The Boston Pledge Video Dispatch #${idx + 1}`);

                  return (
                    <div
                      key={vid.url}
                      className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      {/* Video Player Box (16:9 ratio) */}
                      <div className="w-full aspect-video bg-black relative">
                        {isMp4 ? (
                          <video
                            controls
                            preload="metadata"
                            poster={
                              "poster" in vid && vid.poster
                                ? vid.poster
                                : undefined
                            }
                            className="w-full h-full object-cover"
                          >
                            <source src={vid.url} type="video/mp4" />
                            Your browser does not support HTML5 video.
                          </video>
                        ) : (
                          <iframe
                            src={vid.url}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full border-0"
                          />
                        )}
                      </div>

                      {/* Video Info */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#636D5E]">
                              {isMp4 ? "Field Video Footage" : "Video Recording"}
                            </span>
                          </div>
                          <h3 className="text-xs sm:text-sm font-semibold text-[#1E231C] leading-snug line-clamp-2">
                            {title}
                          </h3>
                        </div>
                        <div className="pt-3 mt-3 border-t border-[#F2ECE3] text-[11px] text-[#7A8374] flex items-center justify-between">
                          <span>Archive Source</span>
                          <span className="font-medium text-[#414D3C]">
                            The Boston Pledge
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* LIGHTBOX OVERLAY */}
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
              aria-label="Close lightbox"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0
                    ? prev - 1
                    : filteredPhotos.length - 1
                );
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
              aria-label="Previous frame"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null && prev < filteredPhotos.length - 1
                    ? prev + 1
                    : 0
                );
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
              aria-label="Next frame"
            >
              ›
            </button>

            {/* Image Modal Card */}
            <div
              className="max-w-4xl w-full bg-[#1A1F18] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col z-40 max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={filteredPhotos[lightboxIndex].url}
                  alt={filteredPhotos[lightboxIndex].caption}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Lightbox Footer */}
              <div className="p-5 sm:p-6 bg-[#21281E] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#9BB193] mb-1">
                    {filteredPhotos[lightboxIndex].categoryLabel}
                  </span>
                  <h4 className="text-sm sm:text-base font-serif font-normal text-white leading-snug">
                    {filteredPhotos[lightboxIndex].caption}
                  </h4>
                </div>
                <div className="text-xs text-[#8A9C82] shrink-0 font-medium">
                  Frame {lightboxIndex + 1} of {filteredPhotos.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
