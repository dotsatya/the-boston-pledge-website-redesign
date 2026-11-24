import React from "react";
import CoverImage from "../latest-updates/CoverImage";
import { GlobeIcon } from "../common/Icons";

interface VisionSectionProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export default function VisionSection({ title, description, image }: VisionSectionProps) {
  const pillars = [
    {
      title: "Discipline & Accountability",
      desc: "Upholding rigor, transparency, and personal ownership in every grassroot endeavor.",
    },
    {
      title: "Inclusiveness",
      desc: "Engaging every background, geography, and discipline with open minds and mutual respect.",
    },
    {
      title: "Two-Way Learning",
      desc: "Learning with and from those we aspire to serve, embracing genuine humility.",
    },
  ];

  return (
    <section className="pt-2 sm:pt-4 pb-6 sm:pb-8 lg:pb-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Symmetric Top Split: 50% Vision Narrative & 50% Vision Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                {title.toUpperCase()}
              </span>
              <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#1E231C] leading-[1.2] tracking-tight mb-2.5 sm:mb-4">
              Nurturing Goodness in Global Citizens
            </h2>

            <p className="text-xs sm:text-base text-[#4E5748] leading-relaxed font-normal mb-3 sm:mb-0">
              {description}
            </p>
          </div>

          {/* Right Column: Vision Image with Floating Badge - Symmetrically Sized */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-[180px] sm:h-[380px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#EAE6DF] group">
              <CoverImage
                src={image.src}
                fallbackSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
                alt={image.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Glassmorphic Badge */}
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-md border border-[#EBE5DB] flex items-center gap-2.5 sm:gap-3.5 z-20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                <GlobeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-bold font-serif text-[#1E231C] leading-none">
                  Global Equity
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#7A8475] font-medium mt-0.5 sm:mt-1">
                  Sustainable Development
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Symmetric Bottom Row: Three Essential Pillars across full 12 columns */}
        <div className="mt-6 sm:mt-12 lg:mt-16 pt-5 sm:pt-12 border-t border-[#E8E2D7]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 mb-4 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <div className="w-2 h-2 rounded-full bg-[#414D3C]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                  CORE VALUES
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight">
                Three Essential Pillars Defining Our Values
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#636C5E] max-w-md">
              The foundational principles upon which our global community and grassroots initiatives are anchored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-3.5 sm:p-7 rounded-xl sm:rounded-2xl bg-white border border-[#E8E3D8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 text-[11px] sm:text-xs font-bold text-[#414D3C] rounded-lg sm:rounded-xl bg-[#FAF8F5] border border-[#DDD7CD] group-hover:bg-[#414D3C] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-[#7A8475] uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-lg font-semibold text-[#1E231C] mb-1 sm:mb-2 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555E50] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
