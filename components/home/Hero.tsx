"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, GlobeIcon, PlayIcon, SparkleIcon, CloseIcon } from "../common/Icons";

export default function Hero() {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-6 pb-6 sm:pb-8 lg:pt-8 lg:pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Text & CTAs matching demo */}
          <div className="lg:col-span-6 z-10 py-4 lg:pr-4">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5CEC2] text-xs font-medium text-[#485342] mb-6 bg-white/60 shadow-2xs">
              <span className="w-3.5 h-2 rounded-full border border-[#8C9585] inline-block bg-white/80" />
              <span>Together for a Better Tomorrow</span>
            </div>

            {/* Headline with italic Thrive. */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-serif font-normal text-[#1E231C] leading-[1.12] tracking-tight mb-6">
              Building a World <br />
              Where Everyone Has <br />
              the Opportunity to <em className="italic font-serif">Thrive.</em>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#555E50] leading-relaxed max-w-lg mb-8 font-normal">
              The Boston Pledge is a global nonprofit organization committed to advancing education, leadership, and social impact.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all"
              >
                <span>Explore Our Work</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium text-[#293225] hover:text-[#181E16] group transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-[#CDC5B7] flex items-center justify-center text-[#414D3C] bg-white/60 group-hover:bg-white shadow-2xs group-hover:border-[#414D3C] transition-all">
                  <PlayIcon className="w-2.5 h-2.5 ml-0.5 text-[#414D3C]" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Right Column: Organic Curved Mask with Photo + 25+ Years Floating Badge */}
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-[580px] flex items-center justify-center">
            {/* SVG Mask Definition */}
            <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
              <defs>
                <clipPath id="hero-organic-curve" clipPathUnits="objectBoundingBox">
                  {/* Organic S-curve bulging gracefully to the left */}
                  <path d="M 0.38,0 C 0.65,0 1,0 1,0 L 1,1 L 0.55,1 C 0.38,0.92 0.22,0.85 0.12,0.72 C -0.02,0.54 -0.01,0.36 0.08,0.22 C 0.16,0.08 0.26,0 0.38,0 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Container for Curved Image */}
            <div className="relative w-full h-full overflow-visible">
              {/* Outer Decorative Curved Stroke with Sparkle Star */}
              <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
                <svg
                  viewBox="0 0 600 580"
                  fill="none"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  {/* Decorative golden/olive curved stroke tracing the boundary */}
                  <path
                    d="M 60,380 C 15,280 25,180 85,95 C 130,35 185,12 245,6"
                    stroke="#8E9987"
                    strokeWidth="1.5"
                    strokeDasharray="none"
                    opacity="0.85"
                  />
                  {/* 4-point sparkle star at the peak of the stroke */}
                  <g transform="translate(245, 6)">
                    <path
                      d="M 0,-8 C 0,-2 2,0 8,0 C 2,0 0,2 0,8 C 0,2 -2,0 -8,0 C -2,0 0,-2 0,-8 Z"
                      fill="#8E9987"
                    />
                  </g>
                </svg>
              </div>

              {/* The Photo with Organic Clip Path */}
              <div
                className="relative w-full h-full"
                style={{
                  clipPath: "url(#hero-organic-curve)",
                  WebkitClipPath: "url(#hero-organic-curve)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85"
                  alt="Children smiling warmly in school uniform"
                  className="w-full h-full object-cover object-[center_35%] scale-105"
                />
              </div>

              {/* Bottom Layered Silk Waves flowing into background SVG-- */}
              <div className="absolute -bottom-1 left-0 right-0 h-32 pointer-events-none z-10 overflow-hidden">
                <svg
                  viewBox="0 0 600 140"
                  fill="none"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0,140 L 600,140 L 600,80 C 480,95 380,60 280,30 C 180,0 80,40 0,80 Z"
                    fill="#FAF8F5"
                    fillOpacity="0.95"
                  />
                  <path
                    d="M 50,140 L 600,140 L 600,100 C 460,115 360,75 250,55 C 160,38 90,70 50,90 Z"
                    fill="#F3EFE7"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M 120,140 L 600,140 L 600,115 C 440,125 330,85 220,70 C 150,60 120,85 100,105 Z"
                    fill="#EAE4D7"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>

              {/* Floating "25+ Years of Service" Badge matching demo */}
              <div className="absolute top-8 right-4 sm:top-12 sm:right-8 lg:top-14 lg:right-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-sm border border-[#EBE5DB] flex items-center gap-3.5 z-20 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                  <GlobeIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-serif text-[#1E231C] leading-none">
                    25+
                  </div>
                  <div className="text-[11px] text-[#7A8475] font-medium mt-1 whitespace-nowrap">
                    Years of Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Video / Introduction Modal */}
      {showStoryModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setShowStoryModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-[#E8E2D8]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#ECE7DF] mb-5">
              <div>
                <span className="text-[11px] font-bold text-[#414D3C] uppercase tracking-[0.16em] block">
                  VISION
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#1E231C] mt-0.5">
                  Our Vision for the Future
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowStoryModal(false)}
                className="w-8 h-8 rounded-full border border-[#D5CEC2] flex items-center justify-center text-[#556050] hover:text-[#1E231C] hover:bg-[#FAF8F5] transition-colors"
                aria-label="Close modal"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/90 mb-5 relative shadow-xs">
              <iframe
                src="https://www.youtube.com/embed/-dPmSPXLuqs?autoplay=1"
                title="The Boston Pledge - Our Vision for the Future"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#4A5345] leading-relaxed mb-6 font-normal">
              <p>
                The Boston Pledge’s vision is to continually bring together goodness in global citizens who will humbly serve to catalyze sustainable development of Global Equity. And be a fertile incubator of voluntary public service.
              </p>
              <p>
                The foundation of TBP constitutes Respect, Trust and Faith the members have in the cause and in each other, on which rest the three essential pillars defining our values – <strong className="font-semibold text-[#1E231C]">Discipline & Accountability</strong>, <strong className="font-semibold text-[#1E231C]">Inclusiveness</strong>, and <strong className="font-semibold text-[#1E231C]">Two way learning</strong> (with those we aspire to serve).
              </p>
            </div>

            <div className="flex justify-end pt-3 border-t border-[#F0EBE3]">
              <Link
                href="/about"
                onClick={() => setShowStoryModal(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-colors shadow-xs"
              >
                <span>Read Full Legacy</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
