import React from "react";

interface QuoteBannerProps {
  quote: {
    text: string;
    author: string;
  };
}

export default function QuoteBanner({ quote }: QuoteBannerProps) {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#F3EDE3] border-y border-[#E4DDD2]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Decorative Green Quotation Mark matching screenshot */}
        <div className="text-4xl sm:text-5xl font-serif text-[#5E6D58] leading-none mb-6 select-none opacity-90">
          “
        </div>

        {/* Quote Body in Editorial Italic Serif */}
        <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif italic text-[#242D21] leading-relaxed mb-6 font-normal">
          {quote.text}
        </blockquote>

        {/* Author with clean overline dashes */}
        <div className="inline-flex items-center justify-center gap-3">
          <div className="w-10 h-px bg-[#BEB6A8]" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#414D3C]">
            {quote.author}
          </span>
          <div className="w-10 h-px bg-[#BEB6A8]" />
        </div>
      </div>
    </section>
  );
}
