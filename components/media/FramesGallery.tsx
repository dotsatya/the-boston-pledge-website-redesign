"use client";

import React, { useState, useMemo, useEffect } from "react";
import { media, videos } from "@/lib/about/media";
import CoverImage from "../latest-updates/CoverImage";
import { PlayIcon, CloseIcon, CaretDownIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

type ViewMode = "photos" | "videos";

interface ProcessedMediaItem {
  id: number;
  url: string;
  caption: string;
  category: "conferences" | "grassroots" | "education" | "enterprise";
  categoryLabel: string;
}

const PHOTOS_PER_PAGE = 12;
const VIDEOS_PER_PAGE = 6;

export default function FramesGallery() {
  const [viewMode, setViewMode] = useState<ViewMode>("photos");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePhotosCount, setVisiblePhotosCount] = useState<number>(PHOTOS_PER_PAGE);
  const [visibleVideosCount, setVisibleVideosCount] = useState<number>(VIDEOS_PER_PAGE);
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

  const handleModeChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisiblePhotosCount(PHOTOS_PER_PAGE);
    setVisibleVideosCount(VIDEOS_PER_PAGE);
  };

  // Filtered photos based on search query
  const filteredPhotos = useMemo(() => {
    if (!searchQuery.trim()) return processedPhotos;
    const q = searchQuery.toLowerCase();
    return processedPhotos.filter((item) => {
      return (
        item.caption.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [processedPhotos, searchQuery]);

  // Filtered video items based on search query
  const filteredVideos = useMemo(() => {
    if (!searchQuery.trim()) return videos;
    const q = searchQuery.toLowerCase();
    return videos.filter((v, i) => {
      const label = v.caption || `The Boston Pledge Video Dispatch #${i + 1}`;
      return (
        label.toLowerCase().includes(q) ||
        v.url.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, visiblePhotosCount);
  }, [filteredPhotos, visiblePhotosCount]);

  const displayedVideos = useMemo(() => {
    return filteredVideos.slice(0, visibleVideosCount);
  }, [filteredVideos, visibleVideosCount]);

  const hasMore =
    viewMode === "photos"
      ? visiblePhotosCount < filteredPhotos.length
      : visibleVideosCount < filteredVideos.length;

  const handleLoadMore = () => {
    if (viewMode === "photos") {
      setVisiblePhotosCount((prev) => prev + PHOTOS_PER_PAGE);
    } else {
      setVisibleVideosCount((prev) => prev + VIDEOS_PER_PAGE);
    }
  };

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
    <section id="frames-gallery" className="pt-1 sm:pt-2 pb-6 sm:pb-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle Bar (Photos vs Videos) & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-4 mb-3.5 sm:mb-8">
          {/* Photos / Videos Segmented Toggle Bar */}
          <div className="inline-flex w-full sm:w-auto bg-[#EFEAE2] p-0.5 sm:p-1.5 rounded-full border border-[#DDD6CA] shadow-2xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => handleModeChange("photos")}
              className={`flex-1 sm:flex-initial justify-center px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                viewMode === "photos"
                  ? "bg-[#414D3C] text-white shadow-xs"
                  : "text-[#556050] hover:text-[#1E231C]"
              }`}
            >
              <span>Photos <span className="hidden sm:inline">Frames</span></span>
              <span
                className={`text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium ${
                  viewMode === "photos"
                    ? "bg-white/20 text-white"
                    : "bg-white text-[#737E6E] border border-[#DDD6CA]"
                }`}
              >
                {processedPhotos.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleModeChange("videos")}
              className={`flex-1 sm:flex-initial justify-center px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                viewMode === "videos"
                  ? "bg-[#414D3C] text-white shadow-xs"
                  : "text-[#556050] hover:text-[#1E231C]"
              }`}
            >
              <PlayIcon className="w-3 h-3" />
              <span>Videos <span className="hidden sm:inline">Dispatches</span></span>
              <span
                className={`text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium ${
                  viewMode === "videos"
                    ? "bg-white/20 text-white"
                    : "bg-white text-[#737E6E] border border-[#DDD6CA]"
                }`}
              >
                {videos.length}
              </span>
            </button>
          </div>

          {/* Quick Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder={`Search ${viewMode === "photos" ? "photos" : "videos"} by keyword...`}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border border-[#D5CEC2] bg-white text-xs text-[#1E231C] placeholder:text-[#8E9789] focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7A8374] hover:text-[#1E231C] cursor-pointer"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Search Clear Row if active */}
        {searchQuery && (
          <div className="flex justify-end text-[11px] sm:text-xs mb-3 sm:mb-4">
            <button
              onClick={() => handleSearchChange("")}
              className="text-[#414D3C] underline hover:text-[#262F23] cursor-pointer"
            >
              Clear search &ldquo;{searchQuery}&rdquo;
            </button>
          </div>
        )}

        {/* 1. PHOTOGRAPHIC FRAMES MODE */}
        {viewMode === "photos" && (
          <div>
            {filteredPhotos.length === 0 ? (
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-[#ECE7DF] max-w-lg mx-auto">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-serif text-[#1E231C] mb-1">
                  No frames found
                </h3>
                <p className="text-xs text-[#636C5E] mb-4">
                  We could not find any photo frames matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => handleSearchChange("")}
                  className="px-5 py-2 rounded-full bg-[#414D3C] text-white text-xs font-medium cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-7">
                {displayedPhotos.map((photo, pIdx) => {
                  return (
                    <ScrollReveal key={photo.id} delay={(pIdx % 3) * 0.08} className="h-full">
                      <div
                        onClick={() => setLightboxIndex(pIdx)}
                        className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer p-1.5 sm:p-0 h-full"
                      >
                        <div className="flex flex-row sm:flex-col h-full">
                          {/* Image Viewport: Left on mobile, Top on desktop */}
                          <div className="w-24 xs:w-28 sm:w-full h-24 xs:h-28 sm:h-60 shrink-0 overflow-hidden rounded-lg sm:rounded-none bg-[#E9E4DC] relative">
                            <CoverImage
                              src={photo.url}
                              alt={photo.caption}
                              fallbackSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Top Category Badge */}
                            <div className="hidden sm:block absolute top-3 left-3 z-10">
                              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#313A2D] backdrop-blur-xs border border-[#ECE7DF] shadow-2xs">
                                {photo.categoryLabel}
                              </span>
                            </div>

                            {/* Hover Overlay Hint */}
                            <div className="absolute inset-0 bg-[#242D21]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-full bg-white/95 text-[#242D21] text-xs font-medium shadow-md">
                                Click to View
                              </span>
                            </div>
                          </div>

                          {/* Caption Bar: Right on mobile, Bottom on desktop */}
                          <div className="pl-2.5 sm:p-5 flex-1 flex flex-col justify-between min-w-0 py-0.5 sm:py-5">
                            <div>
                              {/* Mobile Category Tag */}
                              <div className="sm:hidden mb-1">
                                <span className="text-[9px] font-bold uppercase tracking-wider text-[#414D3C]">
                                  {photo.categoryLabel}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm font-serif text-[#1E231C] leading-snug group-hover:text-[#414D3C] transition-colors line-clamp-2">
                                {photo.caption}
                              </p>
                            </div>
                            <div className="pt-1.5 sm:pt-3 sm:mt-3 sm:border-t sm:border-[#F2ECE3] flex items-center justify-between text-[10px] sm:text-[11px] text-[#7A8374]">
                              <span className="hidden sm:inline">The Boston Pledge Archive</span>
                              <span className="font-medium text-[#414D3C] group-hover:underline">
                                Enlarge →
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 2. VIDEO DISPATCHES MODE */}
        {viewMode === "videos" && (
          <div>
            {filteredVideos.length === 0 ? (
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center border border-[#ECE7DF] max-w-lg mx-auto">
                <p className="text-xs text-[#636C5E] mb-4">
                  No video dispatches match &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => handleSearchChange("")}
                  className="px-5 py-2 rounded-full bg-[#414D3C] text-white text-xs font-medium cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7 items-stretch">
                {displayedVideos.map((vid, idx) => {
                  const isMp4 = vid.url.endsWith(".mp4");
                  const title =
                    vid.caption ||
                    (isMp4
                      ? "Children in Ballavpur Village, Birbhum — Grassroots Outreach"
                      : `The Boston Pledge Video Dispatch #${idx + 1}`);

                  return (
                    <ScrollReveal key={vid.url} delay={(idx % 3) * 0.08} className="h-full">
                      <div
                        className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
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
                        <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#636D5E]">
                                {isMp4 ? "Field Video Footage" : "Video Recording"}
                              </span>
                            </div>
                            <h3 className="text-xs sm:text-sm font-semibold text-[#1E231C] leading-snug line-clamp-2 sm:h-10 overflow-hidden">
                              {title}
                            </h3>
                          </div>
                          <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#F2ECE3] text-[10px] sm:text-[11px] text-[#7A8374] flex items-center justify-between">
                            <span>Archive Source</span>
                            <span className="font-medium text-[#414D3C]">
                              The Boston Pledge
                            </span>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#ECE7DF] flex justify-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] active:scale-95 transition-all shadow-xs hover:shadow-md cursor-pointer group"
            >
              <span>{viewMode === "photos" ? "Show More Frames" : "Show More Videos"}</span>
              <CaretDownIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </button>
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
              className="absolute top-4 right-4 sm:top-7 sm:right-7 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
              aria-label="Close lightbox"
            >
              <CloseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
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
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors z-50 cursor-pointer text-lg sm:text-2xl"
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
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors z-50 cursor-pointer text-lg sm:text-2xl"
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
