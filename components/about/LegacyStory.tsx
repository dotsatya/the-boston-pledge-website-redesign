import React from "react";
import { GlobeIcon } from "../common/Icons";

export default function LegacyStory() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Photo with Floating Glassmorphic Badge */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#EAE6DF] group">
              <img
                src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=85"
                alt="Boston skyline across Charles River at golden hour"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Glassmorphic Badge matching Vision/Hero design */}
            <div className="absolute -bottom-5 right-6 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-md border border-[#EBE5DB] flex items-center gap-3.5 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                <GlobeIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-[#1E231C] leading-none">
                  Est. 2001
                </div>
                <div className="text-[11px] text-[#7A8475] font-medium mt-1">
                  501(c)(3) Nonprofit
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                OUR ORIGINS
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-[#1E231C] leading-[1.2] tracking-tight mb-5">
              Born from Vision and Deep Academic Stewardship
            </h2>

            <p className="text-sm sm:text-base text-[#4E5748] leading-relaxed mb-4 font-normal">
              Following the 2001 North American Bengali Conference (NABC) in Boston, Massachusetts, renowned strategist and former McKinsey senior partner Dr. Partha S. Ghosh joined forces with distinguished professors and community leaders to answer an urgent question: how can the immense intellectual and financial capability of privileged regions be systematically deployed to empower marginalized people at the base of the socio-economic pyramid?
            </p>

            <p className="text-sm sm:text-base text-[#4E5748] leading-relaxed font-normal">
              Unlike traditional charities that provide one-time relief, The Boston Pledge acts as an incubator of permanent self-reliance. Inspired by Swami Vivekananda&apos;s teaching—<em className="italic font-serif">&quot;Our real awakening takes place when we dedicate our life to an exalted ideal&quot;</em>—TBP mobilizes volunteer expertise across corporate, academic, and civic disciplines.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
