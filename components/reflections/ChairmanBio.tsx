import React from "react";
import { reflectionsData } from "@/components/about/Reflections";
import { ArrowUpRight, LinkedInIcon, ArrowDownIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

export default function ChairmanBio() {
  const { chairman } = reflectionsData;

  return (
    <section id="chairman" className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Overline */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
            THE BOSTON PLEDGE CHAIRMAN
          </span>
          <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
        </div>

        {/* Section Title */}
        <div className="mb-3 sm:mb-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight">
            {chairman.name}
          </h2>
          <p className="text-xs sm:text-base text-[#414D3C] font-medium mt-0.5 sm:mt-1">
            {chairman.role}, {chairman.organization} &bull; Policy Advisor, Global Strategist & Educator
          </p>
        </div>

        {/* Main Content: Left Column (Profile & Credentials), Right Column (Biography Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-10 items-start">
          {/* Left Column - Portrait & Key Credentials Card */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <ScrollReveal>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#ECE7DF] shadow-xs">
                {/* Portrait */}
                <div className="w-full aspect-square max-w-[180px] sm:max-w-[280px] mx-auto rounded-xl overflow-hidden bg-[#EAE6DF] border border-[#E2DDD4] mb-3 sm:mb-5 shadow-2xs">
                  <img
                    src={chairman.image}
                    alt={chairman.name}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Identity & Org */}
                <div className="text-center mb-3 sm:mb-5">
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1E231C]">
                    {chairman.name}
                  </h3>
                  <p className="text-xs text-[#414D3C] font-medium mt-0.5">
                    {chairman.role}, {chairman.organization}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#697263] mt-0.5 sm:mt-1">
                    Founder & Managing Director, Partha S. Ghosh & Associates
                  </p>
                </div>

                {/* LinkedIn Button */}
                <a
                  href={chairman.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-1.5 sm:py-2 px-3 sm:px-4 rounded-xl text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#084e96] transition-colors shadow-2xs"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                {/* Distinguished Roles & Education */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-[#ECE7DF]">
                  <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#5A6455] mb-2 sm:mb-3">
                    Distinctions & Academic Affiliations
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-[#555E50]">
                    {chairman.credentials.map((cred, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#414D3C] shrink-0 mt-1 sm:mt-1.5" />
                        <span className="leading-snug">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Comprehensive Biography */}
          <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 lg:p-10 border border-[#ECE7DF] shadow-xs space-y-3 sm:space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#414D3C] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#414D3C]" />
                  <span>Biography & Strategic Perspectives</span>
                </div>

                {chairman.biography.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm lg:text-base text-[#444D3F] leading-relaxed font-normal"
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Highlights callout */}
                <div className="p-3.5 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D7] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mt-4 sm:mt-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#414D3C]">
                      “Modern Day Renaissance Man”
                    </h4>
                    <p className="text-xs text-[#697263] mt-0.5">
                      Bridging philosophy, technology, macro-economics, nation building, and compassionate grassroots service.
                    </p>
                  </div>
                  <a
                    href="#speeches"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#414D3C] hover:text-[#242D21] transition-colors shrink-0 group"
                  >
                    <span>View Keynote Presentations</span>
                    <ArrowDownIcon className="w-3.5 h-3.5 text-[#414D3C]" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
