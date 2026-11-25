import React from "react";
import CoverImage from "../latest-updates/CoverImage";
import { volunteerData } from "@/lib/volunteerData";
import { SparkleIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

export default function VolunteerPrinciples() {
  const { principles } = volunteerData;

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Symmetrical Grid: Left Square/Compact Image & Right 2-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Yellow Hand-Bulb Image from Original Site */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[340px] h-[240px] sm:h-[300px] lg:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#FFD100]/15 group">
              <CoverImage
                src={principles.image}
                fallbackSrc="https://thebostonpledge.org/wp-content/uploads/2024/08/inspiration.jpg"
                alt="Creative Idea Lightbulb Hand - The Boston Pledge"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge on Image */}
              <div data-icon-trigger className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-md border border-[#EBE5DB] flex items-center gap-2 sm:gap-2.5 z-20 cursor-pointer">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center text-[#414D3C]">
                  <SparkleIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-[#1E231C] leading-none">
                    Inspired Service
                  </div>
                  <div className="text-[9px] text-[#7A8475] mt-0.5">
                    Never Imposed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact 2-Column Grid for 6 Principles */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="mb-4 sm:mb-5">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                  FOUNDATIONAL DOCTRINES
                </span>
                <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight leading-[1.2] mb-1.5">
                {principles.title}
              </h2>

              <p className="text-xs text-[#5B6356] leading-relaxed font-normal">
                {principles.subtitle}
              </p>
            </div>

            {/* 6 Principles in a 2-Column Sleek Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 items-stretch">
              {principles.items.map((item, idx) => (
                <ScrollReveal key={item.id} delay={(idx % 2) * 0.08} className="h-full">
                  <div
                    className="bg-white rounded-xl p-3 sm:p-3.5 border border-[#E8E2D8] shadow-2xs hover:shadow-xs transition-shadow flex items-start gap-2.5 h-full"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center text-[11px] font-bold text-[#414D3C] shrink-0 mt-0.5">
                      0{item.id}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs font-semibold text-[#1E231C] mb-0.5 leading-snug break-words">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#525B4E] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
