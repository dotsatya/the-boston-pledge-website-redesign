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
    <section className="py-16 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
            GLOBAL COLLABORATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mt-2 mb-3">
            Advisory Council & Field Coordinators
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6356]">
            Drawing wisdom from Tufts University, Bentley University, IIT Kharagpur, and rural ground teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-2xs"
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
