import React from "react";

interface QuoteBannerProps {
  quote: {
    text: string;
    author: string;
  };
}

export default function QuoteBanner({ quote }: QuoteBannerProps) {
  return (
    <section className="py-6 sm:py-10 lg:py-12 bg-[#F3EDE3] border-y border-[#E4DDD2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Green Quotation Mark matching screenshot */}
        <div className="text-3xl sm:text-5xl font-serif text-[#5E6D58] leading-none mb-2 sm:mb-4 select-none opacity-90">
          “
        </div>

        {/* Quote Body in Editorial Italic Serif */}
        <blockquote className="text-sm sm:text-xl lg:text-2xl font-serif italic text-[#242D21] leading-relaxed mb-3 sm:mb-6 font-normal">
          {quote.text}
        </blockquote>

        {/* Author with clean overline dashes */}
        <div className="inline-flex items-center justify-center gap-3">
          <div className="w-8 sm:w-10 h-px bg-[#BEB6A8]" />
          <span className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#414D3C]">
            {quote.author}
          </span>
          <div className="w-8 sm:w-10 h-px bg-[#BEB6A8]" />
        </div>
      </div>
    </section>
  );
}
