import React from "react";
import { constitutionData } from "@/lib/about/constitution";

export default function ConstitutionQuote() {
  const { quote } = constitutionData;

  // Split lines for graceful poetic display
  const lines = quote.text.split("\n");

  return (
    <section className="py-6 sm:py-10 lg:py-16 bg-[#F3EDE3] border-y border-[#E4DDD2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Green Quotation Mark */}
        <div className="text-3xl sm:text-5xl font-serif text-[#5E6D58] leading-none mb-2 sm:mb-4 select-none opacity-90">
          “
        </div>

        {/* Poetic Quote Body in Editorial Serif */}
        <blockquote className="text-sm sm:text-xl lg:text-2xl font-serif italic text-[#242D21] leading-relaxed mb-3 sm:mb-6 font-normal">
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              <span>{line}</span>
              {i < lines.length - 1 && <br className="hidden sm:inline" />}
            </React.Fragment>
          ))}
        </blockquote>

        {/* Author Overline Attribution */}
        <div className="inline-flex items-center justify-center gap-3">
          <div className="w-8 sm:w-10 h-px bg-[#BEB6A8]" />
          <span className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#414D3C]">
            {quote.author}
          </span>
          <div className="w-8 sm:w-10 h-px bg-[#BEB6A8]" />
        </div>
        <div className="text-[11px] text-[#788273] mt-1 font-medium">
          Nobel Laureate in Literature (1913) · From &ldquo;Gitanjali&rdquo;
        </div>
      </div>
    </section>
  );
}
