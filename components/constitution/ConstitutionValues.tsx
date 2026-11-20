import React from "react";
import { constitutionData } from "@/lib/about/constitution";

export default function ConstitutionValues() {
  const { constitution } = constitutionData;

  // Curated title & insight to give each core value high editorial finish
  const valueMeta: Record<string, { title: string; subtitle: string }> = {
    "honesty-integrity": {
      title: "Discipline of Harmony",
      subtitle: "Upholding absolute honesty, transparency, and timely rigor in every collaborative commitment.",
    },
    "cheer-leading": {
      title: "Power of Cheerleading",
      subtitle: "Uplifting peers and grassroots artisans with sincere encouragement, mutual faith, and enthusiasm.",
    },
    "positive-energy": {
      title: "Constructive Discourse",
      subtitle: "Channeling speech with positive adjectives and adverbs to inspire constructive solutions.",
    },
    "power-of-silence": {
      title: "Power of Silence",
      subtitle: "Embracing quiet reflection, active listening, and calm discernment before reaching consensus.",
    },
    "multiple-perspectives": {
      title: "Pluralistic Perspective",
      subtitle: "Cherishing cognitive, cultural, and disciplinary diversity as our greatest source of wisdom.",
    },
    "tasks-above-egos": {
      title: "Mission Above Ego",
      subtitle: "Subordinating personal recognition and ego to the noble cause of serving marginalized communities.",
    },
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#C8C2B5]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5A6455]">
              FOUNDATIONAL TENETS
            </span>
            <div className="w-8 h-px bg-[#C8C2B5]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1E231C] tracking-tight mb-4">
            {constitution.heading}
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#5B6356] leading-relaxed font-normal">
            {constitution.intro}
          </p>
        </div>

        {/* 6 Core Values Grid (Symmetric 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {constitution.coreValues.map((value, idx) => {
            const meta = valueMeta[value.id] || {
              title: value.label,
              subtitle: "Core ethical principle of The Boston Pledge volunteer community.",
            };

            return (
              <div
                key={value.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-[#414D3C] rounded-xl bg-[#FAF8F5] border border-[#DDD7CD] group-hover:bg-[#414D3C] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-semibold text-[#8C9587] uppercase tracking-wider">
                      Tenet 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1E231C] mb-2 leading-snug group-hover:text-[#414D3C] transition-colors">
                    {meta.title}
                  </h3>

                  <blockquote className="text-xs sm:text-sm font-medium text-[#2F382B] leading-relaxed mb-3 italic">
                    &ldquo;{value.label}&rdquo;
                  </blockquote>

                  <p className="text-xs text-[#636C5E] leading-relaxed font-normal">
                    {meta.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F2ECE3] flex items-center justify-between text-[11px] text-[#7A8374]">
                  <span>Article Tenet</span>
                  <span className="font-semibold text-[#414D3C]">
                    The Boston Pledge Charter
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
