import React from "react";
import Link from "next/link";
import { ArrowRightIcon, CommunityIcon, HeartHandIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

export default function AboutPreview() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF8F5] relative z-10 border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Boston Skyline Photo with Bottom-Left Mission Pill */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.05}>
              <div className="w-full h-[260px] sm:h-[300px] lg:h-[320px] rounded-3xl overflow-hidden shadow-xs relative border border-[#E5DFD4] group">
                <img
                  src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1000&q=85"
                  alt="Boston skyline across Charles River with sailboats at golden hour"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom-Left Floating Mission Badge linking to /vision-mission */}
                <div className="absolute bottom-4 left-4 z-10">
                  <Link
                    href="/vision-mission"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-medium text-white bg-black/65 backdrop-blur-md hover:bg-black/85 transition-colors shadow-xs"
                  >
                    <span className="text-xs">✛</span>
                    <span>Our Mission →</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Middle: Content */}
          <div className="lg:col-span-4">
            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                  ABOUT THE BOSTON PLEDGE
                </span>
                <div className="w-10 h-px bg-[#C8C2B5]" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1E231C] leading-[1.2] tracking-tight mb-4">
                A Legacy of Service. <br />
                A Future of Impact.
              </h2>

              <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed mb-6 font-normal">
                For over 25 years, The Boston Pledge has been working across the globe to create lasting change through education, leadership and community development.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E231C] hover:text-[#414D3C] group transition-colors"
              >
                <span className="underline decoration-[#A3AEA0] underline-offset-4 group-hover:decoration-[#414D3C]">
                  Learn More
                </span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-[#414D3C] group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: Key Stats with Icons matching demo */}
          <div className="lg:col-span-3 lg:border-l lg:border-[#DDD7CC] lg:pl-10 flex lg:flex-col justify-around sm:justify-start gap-8 lg:gap-10">
            <ScrollReveal delay={0.25}>
              {/* Stat 1: 30+ Active Volunteers */}
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] mb-2 shadow-2xs">
                  <CommunityIcon className="w-5 h-5" />
                </div>
                <div className="text-4xl sm:text-5xl font-serif font-normal text-[#1E231C] tracking-tight">
                  30+
                </div>
                <div className="text-xs text-[#636C5E] mt-1 font-medium">Active Volunteers</div>
              </div>

              <div className="hidden lg:block w-16 h-px bg-[#E2DCD1] my-6" />

              {/* Stat 2: 100+ Global Initiatives */}
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] mb-2 shadow-2xs">
                  <HeartHandIcon className="w-5 h-5" />
                </div>
                <div className="text-4xl sm:text-5xl font-serif font-normal text-[#1E231C] tracking-tight">
                  100+
                </div>
                <div className="text-xs text-[#636C5E] mt-1 font-medium">Global Initiatives</div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
