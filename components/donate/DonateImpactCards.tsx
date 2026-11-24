import React from "react";
import ScrollReveal from "../common/ScrollReveal";

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
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#5A6455] whitespace-nowrap">
              TRANSPARENT IMPACT
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight mb-2 sm:mb-3">
            Where Your Contribution Goes
          </h2>

          <p className="text-xs sm:text-sm text-[#5C6457] leading-relaxed font-normal">
            Because The Boston Pledge directors and advisors serve 100% on a voluntary pro bono basis, your gifts directly seed tangible community self-reliance and grassroots dignity.
          </p>
        </div>

        {/* 3 Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-7 items-stretch">
          {impactAreas.map((item, idx) => (
            <ScrollReveal key={item.tag} delay={idx * 0.1} className="h-full">
              <div
                className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-7 border border-[#E8E2D8] shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="mb-2 sm:mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F3EDE3] text-[#414D3C] border border-[#DDD5C7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#414D3C]" />
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-lg font-serif font-semibold text-[#1E231C] mb-1 sm:mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555E50] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-4 mt-3 sm:mt-6 border-t border-[#F2ECE3] text-[10px] sm:text-[11px] text-[#7A8374] flex items-center justify-between">
                  <span>Direct Grassroots Reach</span>
                  <span className="font-semibold text-[#414D3C]">100% Pro Bono Directed</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
