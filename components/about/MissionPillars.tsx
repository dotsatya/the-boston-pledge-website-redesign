import React from "react";
import { GradCapIcon, BookOpenIcon, CommunityIcon } from "../common/Icons";

export default function MissionPillars() {
  const pillars = [
    {
      number: "01",
      title: "One Humanity & Inclusiveness",
      desc: "Transcending ethnic and geographic divides, operating with universal respect and mutual empathy for all communities.",
      icon: <CommunityIcon className="w-5 h-5 text-white" />,
    },
    {
      number: "02",
      title: "Two-Way Mutual Learning",
      desc: "Fostering collaboration where academic experts and grassroots artisans learn from each other's wisdom and resilience.",
      icon: <BookOpenIcon className="w-5 h-5 text-white" />,
    },
    {
      number: "03",
      title: "Self-Sustaining Enterprise",
      desc: "Championing bottom-up micro-entrepreneurship over patronizing aid, unlocking generational economic dignity.",
      icon: <GradCapIcon className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <>
      {/* Guiding Principles Cards Section */}
      <section className="py-6 sm:py-10 lg:py-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-3 mb-2 sm:mb-2.5">
              <div className="w-8 h-px bg-[#C8C2B5]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5A6455]">
                OUR COMPASS
              </span>
              <div className="w-8 h-px bg-[#C8C2B5]" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-serif font-normal text-[#1E231C] tracking-tight">
              Our Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="inline-block text-[10px] sm:text-[11px] font-bold text-[#414D3C] px-2 py-0.5 rounded-lg bg-[#FAF8F5] border border-[#DDD7CD]">
                      {pillar.number}
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#414D3C] flex items-center justify-center">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-[#1E231C] mb-1.5 sm:mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555E50] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Warm Band: Founding Quote matching Vision & Mission style */}
      <section id="reflections" className="py-6 sm:py-10 lg:py-12 bg-[#F3EDE3] border-y border-[#E4DDD2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl sm:text-5xl font-serif text-[#5E6D58] leading-none mb-3 sm:mb-4 select-none opacity-90">
            “
          </div>
          <blockquote className="text-sm sm:text-xl lg:text-2xl font-serif italic text-[#242D21] leading-relaxed mb-4 sm:mb-6 font-normal">
            With our egos outside and the divine within, the possibilities are limitless... By serving society, we essentially serve ourselves to uncover the better person within us.
          </blockquote>
          <div className="inline-flex items-center justify-center gap-3">
            <div className="w-8 sm:w-10 h-px bg-[#BEB6A8]" />
            <span className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#414D3C]">
              Dr. Partha S. Ghosh, Founder
            </span>
            <div className="w-8 sm:w-10 h-px bg-[#BEB6A8]" />
          </div>
        </div>
      </section>
    </>
  );
}
