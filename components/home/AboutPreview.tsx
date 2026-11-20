import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";

export default function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Boston Skyline Photo */}
          <div className="lg:col-span-5">
            <div className="w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80"
                alt="Boston skyline across Charles River with sailboats"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Middle: Content */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                ABOUT THE BOSTON PLEDGE
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E231C] leading-[1.2] tracking-tight mb-4">
              A Legacy of Service. <br />
              A Future of Impact.
            </h2>

            <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed mb-6 font-normal">
              For over 25 years, The Boston Pledge has been working across the globe to create lasting change through education, leadership and community development.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right: Key Stats with vertical divider matching demo */}
          <div className="lg:col-span-3 lg:border-l lg:border-[#DDD7CC] lg:pl-10 flex lg:flex-col justify-around sm:justify-start gap-8 lg:gap-10">
            <div>
              <div className="text-4xl sm:text-5xl font-serif font-normal text-[#1E231C] tracking-tight">
                25+
              </div>
              <div className="text-xs text-[#636C5E] mt-1 font-medium">Years of Service</div>
            </div>

            <div className="lg:w-16 lg:h-px lg:bg-[#E2DCD1]" />

            <div>
              <div className="text-4xl sm:text-5xl font-serif font-normal text-[#1E231C] tracking-tight">
                30+
              </div>
              <div className="text-xs text-[#636C5E] mt-1 font-medium">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
