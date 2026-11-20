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
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Symmetric Top Split: 50% Vision Narrative & 50% Vision Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                {title.toUpperCase()}
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-[#1E231C] leading-[1.2] tracking-tight mb-5">
              Nurturing Goodness in Global Citizens
            </h2>

            <p className="text-sm sm:text-base text-[#4E5748] leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Right Column: Vision Image with Floating Badge - Symmetrically Sized */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-[320px] sm:h-[380px] lg:h-[400px] rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#EAE6DF] group">
              <CoverImage
                src={image.src}
                fallbackSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
                alt={image.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Glassmorphic Badge */}
            <div className="absolute -bottom-5 right-6 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-md border border-[#EBE5DB] flex items-center gap-3.5 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                <GlobeIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-[#1E231C] leading-none">
                  Global Equity
                </div>
                <div className="text-[11px] text-[#7A8475] font-medium mt-1">
                  Sustainable Development
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Symmetric Bottom Row: Three Essential Pillars across full 12 columns */}
        <div className="mt-12 lg:mt-16 pt-10 sm:pt-12 border-t border-[#E8E2D7]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#414D3C]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                  CORE VALUES
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight">
                Three Essential Pillars Defining Our Values
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#636C5E] max-w-md">
              The foundational principles upon which our global community and grassroots initiatives are anchored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E3D8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-[#414D3C] rounded-xl bg-[#FAF8F5] border border-[#DDD7CD] group-hover:bg-[#414D3C] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-medium text-[#7A8475] uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#1E231C] mb-2 leading-snug">
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
