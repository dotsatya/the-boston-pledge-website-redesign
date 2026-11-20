import React from "react";

export default function DonateImpactCards() {
  const impactAreas = [
    {
      tag: "EDUCATION & LITERACY",
      title: "Rural Classrooms & Village Libraries",
      desc: "Supplies educational workbooks, art materials, learning kits, and foundational reading resources for children in rural Ballavpur, Shantiniketan, and regional village centers.",
    },
    {
      tag: "CLEAN WATER & HEALTH",
      title: "Water Quality & Arsenic Testing",
      desc: "Supports community water testing kits to inspect rural tube wells across West Bengal delta regions for toxic arsenic and microbiological contamination, protecting families.",
    },
    {
      tag: "LIVELIHOODS & SELF-RELIANCE",
      title: "Youth & Women Micro-Enterprise",
      desc: "Enables village-level mentorship, micro-entrepreneurship incubation, digital literacy, and sustainable handicraft skills to foster generational economic dignity.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5] border-t border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-2.5">
            <div className="w-8 h-px bg-[#C8C2B5]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5A6455]">
              TRANSPARENT IMPACT
            </span>
            <div className="w-8 h-px bg-[#C8C2B5]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight mb-3">
            Where Your Contribution Goes
          </h2>

          <p className="text-xs sm:text-sm text-[#5C6457] leading-relaxed font-normal">
            Because The Boston Pledge directors and advisors serve 100% on a voluntary pro bono basis, your gifts directly seed tangible community self-reliance and grassroots dignity.
          </p>
        </div>

        {/* 3 Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {impactAreas.map((item) => (
            <div
              key={item.tag}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E2D8] shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F3EDE3] text-[#414D3C] border border-[#DDD5C7]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#414D3C]" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1E231C] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555E50] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#F2ECE3] text-[11px] text-[#7A8374] flex items-center justify-between">
                <span>Direct Grassroots Reach</span>
                <span className="font-semibold text-[#414D3C]">100% Pro Bono Directed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
