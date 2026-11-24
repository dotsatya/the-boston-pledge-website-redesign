import React from "react";

interface QuoteBannerProps {
  quote: {
    text: string;
    author: string;
  };
}

export default function QuoteBanner({ quote }: QuoteBannerProps) {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#F3EDE3] border-y border-[#E4DDD2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Green Quotation Mark matching screenshot */}
        <div className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#5E6D58] leading-none mb-1.5 sm:mb-2 select-none opacity-90">
          “
        </div>

        {/* Quote Body in Editorial Italic Serif */}
        <blockquote className="text-base sm:text-lg lg:text-xl font-serif italic text-[#242D21] leading-relaxed mb-2.5 sm:mb-3 font-normal max-w-3xl mx-auto">
          {quote.text}
        </blockquote>

        {/* Author with clean overline dashes */}
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3">
          <div className="w-6 sm:w-8 h-px bg-[#BEB6A8]" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#414D3C]">
            {quote.author}
          </span>
          <div className="w-6 sm:w-8 h-px bg-[#BEB6A8]" />
        </div>
      </div>
    </section>
  );
}
