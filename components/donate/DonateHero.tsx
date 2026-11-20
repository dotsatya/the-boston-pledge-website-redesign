import React from "react";
import Link from "next/link";
import { HeartHandIcon, GlobeIcon } from "../common/Icons";

export default function DonateHero() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb Left */}
        <nav className="flex items-center gap-2 text-xs text-[#7A8475] mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#1E231C] font-medium">Donate</span>
        </nav>

        {/* Balanced 50/50 Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Impact Statement */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                501(C)(3) TAX-DEDUCTIBLE DONATION
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.16] mb-4">
              Donate to The Boston Pledge
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed max-w-2xl font-normal mb-8">
              Every dollar you contribute directly empowers grassroots self-reliance, village sanitation, rural education, and micro-entrepreneurship. All our leaders serve voluntarily without compensation.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD3] text-[#414D3C] shadow-2xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#414D3C]" />
                <span>501(c)(3) Nonprofit Status</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD3] text-[#414D3C] shadow-2xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#5E6D58]" />
                <span>100% Pro Bono Leadership</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE3] border border-[#DDD5C7] text-[#2F382B] shadow-2xs font-medium">
                <span>Instant Tax Receipt</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Organic Curved Image (Enlarged) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Subtle Organic Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#DEE9DC]/60 via-[#EAF2E8]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="w-full relative transition-transform duration-500 hover:scale-[1.02] flex items-center justify-center">
              <img
                src="/images/donate-hero-graphic.png"
                alt="Joyful children supported by The Boston Pledge grassroots initiatives"
                className="w-full h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[460px] object-contain drop-shadow-sm select-none rounded-2xl"
              />
            </div>

            {/* Floating Glassmorphic Pill */}
            <div className="absolute -bottom-2 right-2 sm:bottom-2 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-[#EBE5DB] flex items-center gap-3 z-20">
              <div className="w-8 h-8 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                <HeartHandIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-serif text-[#1E231C]">
                  Direct Grassroots Impact
                </div>
                <div className="text-[10px] text-[#7A8475] font-medium">
                  Uplifting Communities &amp; Tomorrow
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
