import React from "react";
import { volunteerData } from "@/lib/volunteerData";

export default function VolunteerQuote() {
  const { quote } = volunteerData;

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-[#F3EDE3] border-y border-[#E4DDD2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Green Quotation Mark */}
        <div className="text-4xl sm:text-5xl font-serif text-[#5E6D58] leading-none mb-6 select-none opacity-90">
          “
        </div>

        {/* Quote text in editorial serif */}
        <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-serif italic text-[#242D21] leading-relaxed mb-6 font-normal">
          &ldquo;{quote.text}&rdquo;
        </blockquote>

        {/* Author Overline Attribution */}
        <div className="inline-flex items-center justify-center gap-3">
          <div className="w-10 h-px bg-[#BEB6A8]" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#414D3C]">
            {quote.author}
          </span>
          <div className="w-10 h-px bg-[#BEB6A8]" />
        </div>
        <div className="text-[11px] text-[#788273] mt-1 font-medium">
          {quote.role}
        </div>
      </div>
    </section>
  );
}
