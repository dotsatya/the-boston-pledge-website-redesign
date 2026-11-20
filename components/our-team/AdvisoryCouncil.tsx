import React from "react";

export default function AdvisoryCouncil() {
  const advisors = [
    {
      name: "John Gonsalves",
      focus: "Branding & Community Goodwill",
      desc: "Civic communications leader guiding public awareness and grassroots outreach.",
    },
    {
      name: "Prof. Dipak Jain",
      focus: "Academic & Pedagogical Strategy",
      desc: "Former Dean of Kellogg School of Management and global business education scholar.",
    },
    {
      name: "Dr. Bikramjit Basu",
      focus: "Science, Health & Materials",
      desc: "Distinguished researcher advising on arsenic filtration technology and village water testing.",
    },
    {
      name: "Anuradha Roy",
      focus: "Rural Women's Enterprise (ESP)",
      desc: "Community organizer mentoring women-led artisan collectives and micro-enterprises in Bengal.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header Left-Aligned */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
              GLOBAL COLLABORATION
            </span>
            <div className="w-10 h-px bg-[#C8C2B5]" />
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight mb-3">
            Advisory Council &amp; Field Coordinators
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed max-w-2xl font-normal">
            Drawing wisdom from Tufts University, Bentley University, IIT Kharagpur, and rural ground teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {advisors.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-[#ECE7DF] shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-base font-semibold text-[#1E231C] mb-1">{adv.name}</h4>
              <div className="text-xs font-medium text-[#414D3C] mb-2">{adv.focus}</div>
              <p className="text-xs text-[#5D6558] leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
