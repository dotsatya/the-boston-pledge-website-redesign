import React from "react";
import ScrollReveal from "../common/ScrollReveal";

interface MissionSectionProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  objectives: readonly string[];
}

export default function MissionSection({ title, image, objectives }: MissionSectionProps) {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Compact Mission Graphic (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[360px] sm:max-w-[400px] relative group flex items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-h-[200px] sm:max-h-[230px] lg:max-h-[250px] object-contain group-hover:scale-[1.02] transition-transform duration-500 select-none drop-shadow-2xs"
              />
            </div>
          </div>

          {/* Right Column: Mission Objectives (Compact 7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="mb-3">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                  {title.toUpperCase()}
                </span>
                <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E231C] leading-[1.2] tracking-tight mb-1.5 sm:mb-2">
                Action with Purpose and Compassion
              </h2>

              <p className="text-[11px] sm:text-xs text-[#5B6356] leading-relaxed font-normal">
                Our mission operationalizes our vision into tangible grassroot impact across education, public health, entrepreneurship, and voluntary service:
              </p>
            </div>

            {/* 3 Streamlined Compact Mission Objectives Cards */}
            <div className="space-y-2">
              {objectives.map((obj, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div
                    className="bg-white rounded-xl px-3.5 py-2.5 sm:py-3 border border-[#E8E2D8] shadow-2xs hover:shadow-xs transition-shadow flex items-start gap-2.5 sm:gap-3"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center text-[11px] font-bold text-[#414D3C] shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-[13px] font-semibold text-[#1E231C] leading-snug mb-0.5">
                        {idx === 0
                          ? "Bridge Privileged and Undernourished Regions"
                          : idx === 1
                          ? "Mobilize Multi-Dimensional Capital"
                          : "Celebrate Unity in Diversity"}
                      </h3>
                      <p className="text-[11px] text-[#4E5748] leading-relaxed font-normal">
                        {obj}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
