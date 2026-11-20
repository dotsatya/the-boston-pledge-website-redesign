import React from "react";
import { GradCapIcon, BookOpenIcon, CommunityIcon } from "../common/Icons";

export default function MissionPillars() {
  const pillars = [
    {
      title: "One Humanity & Inclusiveness",
      desc: "Transcending ethnic and geographic divides, operating with universal respect and mutual empathy for all communities.",
      icon: <CommunityIcon className="w-5 h-5 text-white" />,
    },
    {
      title: "Two-Way Mutual Learning",
      desc: "Fostering collaboration where academic experts and grassroots artisans learn from each other's wisdom and resilience.",
      icon: <BookOpenIcon className="w-5 h-5 text-white" />,
    },
    {
      title: "Self-Sustaining Enterprise",
      desc: "Championing bottom-up micro-entrepreneurship over patronizing aid, unlocking generational economic dignity.",
      icon: <GradCapIcon className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] text-center mb-10">
          Our Guiding Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#E8E2D8] shadow-2xs"
            >
              <div className="w-10 h-10 rounded-full bg-[#414D3C] flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-serif text-[#1E231C] mb-2">{pillar.title}</h4>
              <p className="text-xs text-[#5D6558] leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
