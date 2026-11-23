import React from "react";
import Link from "next/link";
import CoverImage from "../latest-updates/CoverImage";
import { volunteerData } from "@/lib/volunteerData";
import { HeartHandIcon } from "../common/Icons";

export default function VolunteerHero() {
  const { hero } = volunteerData;

  return (
    <section className="pt-8 sm:pt-10 pb-4 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Left */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#7A8475] mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="hover:text-[#414D3C] transition-colors">
            Ways To Help
          </span>
          <span>/</span>
          <span className="text-[#1E231C] font-medium">Be A Volunteer</span>
        </nav>

        {/* Symmetric 50/50 Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Title & Subtitle */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                JOIN OUR FELLOWSHIP · VOLUNTARY SERVICE
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.18] mb-4 break-words">
              {hero.title}
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed max-w-2xl font-normal mb-8">
              {hero.subtitle}
            </p>

            {/* Quick Action & Value Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <a
                href="#application-form"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs"
              >
                <span>Apply as a Volunteer</span>
                <span>↓</span>
              </a>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#E2DDD3] text-[#414D3C] shadow-2xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#414D3C]" />
                <span>100% Volunteer Powered</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F3EDE3] border border-[#DDD5C7] text-[#2F382B] shadow-2xs font-medium">
                <span>Zero Monetary Compensation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Badge (Reduced Height) */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-[200px] sm:h-[240px] lg:h-[260px] rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#EAE6DF] group">
              <CoverImage
                src={hero.image}
                fallbackSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                alt="The Boston Pledge Volunteers"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Glassmorphic Pill */}
            <div className="absolute -bottom-3 right-3 sm:bottom-3 sm:right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-[#EBE5DB] flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                <HeartHandIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-serif text-[#1E231C]">
                  Altruistic Service
                </div>
                <div className="text-[10px] text-[#7A8475] font-medium">
                  Catalyzing Global Equity
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
