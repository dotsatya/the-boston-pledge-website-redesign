import React from "react";
import { reflectionsData } from "@/components/about/Reflections";

export default function ChairmanQuote() {
  const { chairman } = reflectionsData;

  return (
    <section className="py-8 sm:py-16 lg:py-20 bg-[#242D21] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative background watermark quote mark */}
      <div
        className="absolute -top-6 sm:-top-10 left-4 sm:left-16 text-[#354332] text-[120px] sm:text-[240px] font-serif select-none pointer-events-none leading-none opacity-30"
        aria-hidden="true"
      >
        “
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center gap-3 mb-3 sm:mb-6">
          <div className="w-8 sm:w-12 h-px bg-[#7A8B74]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A8BCA2]">
            CHAIRMAN’S REFLECTION
          </span>
          <div className="w-8 sm:w-12 h-px bg-[#7A8B74]" />
        </div>

        <blockquote className="text-base sm:text-2xl lg:text-3xl font-serif font-normal italic leading-relaxed sm:leading-relaxed text-white max-w-4xl mx-auto mb-4 sm:mb-8">
          “{chairman.quote}”
        </blockquote>

        <div className="inline-flex flex-col items-center">
          <h3 className="text-base sm:text-lg font-serif font-semibold text-[#FAF8F5]">
            {chairman.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#A8BCA2] mt-0.5 font-medium">
            {chairman.role}, {chairman.organization}
          </p>
        </div>
      </div>
    </section>
  );
}
