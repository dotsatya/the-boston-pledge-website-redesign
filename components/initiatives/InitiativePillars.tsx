"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { pillars, PillarIconName } from "@/lib/Initiatives";
import { ArrowRight, BookOpen, Globe, GraduationCap, Rocket, Users } from "pulsoicon-react";
import ScrollReveal from "../common/ScrollReveal";

function PillarBadgeIcon({
  name,
  className = "w-4 h-4",
}: {
  name: PillarIconName;
  className?: string;
}) {
  switch (name) {
    case "globe":
      return <Globe className={className} />;
    case "grad-cap":
      return <GraduationCap className={className} />;
    case "book-open":
      return <BookOpen className={className} />;
    case "rocket":
      return <Rocket className={className} />;
    case "community":
      return <Users className={className} />;
    default:
      return <Globe className={className} />;
  }
}

export default function InitiativePillars() {
  return (
    <>
      {/* Program Pillars Section */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 lg:space-y-28">
          {pillars.map((item, idx) => (
            <ScrollReveal key={item.id}>
              <div
                id={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Column with Floating Badge */}
                <div
                  className={`lg:col-span-6 relative ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="w-full h-[250px] sm:h-[340px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#EAE6DF] group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Glassmorphic Badge with Dynamic Icon */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-md border border-[#EBE5DB] flex items-center gap-2.5 sm:gap-3 z-20">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                      <PillarBadgeIcon name={item.icon} className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold font-serif text-[#1E231C] leading-none">
                        {item.badge}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-[#7A8475] font-medium mt-0.5 sm:mt-1 uppercase tracking-wider">
                        Grassroot Impact
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div
                  className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block text-[10px] sm:text-[11px] font-bold text-[#414D3C] px-2.5 py-0.5 rounded bg-[#EFE9DF] border border-[#DCD5C9]">
                      PILLAR {item.number}
                    </span>
                    <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
                    <span className="text-[11px] sm:text-xs font-semibold text-[#5A6455] uppercase tracking-wider">
                      {item.title}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1E231C] leading-tight mb-4">
                    {item.tagline}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4E5748] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {item.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#3E4639]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#414D3C] shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/initiatives/${item.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs hover:shadow text-center"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Full-Width Warm Band: Exalted Ideal Quote */}
      <section className="py-6 sm:py-8 lg:py-10 bg-[#F3EDE3] border-y border-[#E4DDD2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#5E6D58] leading-none mb-1.5 sm:mb-2 select-none opacity-90">
            “
          </div>
          <blockquote className="text-base sm:text-lg lg:text-xl font-serif italic text-[#242D21] leading-relaxed mb-2.5 sm:mb-3 font-normal max-w-3xl mx-auto">
            Our real awakening takes place when we dedicate our life to an
            exalted ideal.
          </blockquote>
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-6 sm:w-8 h-px bg-[#BEB6A8]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#414D3C]">
              Swami Vivekananda
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#BEB6A8]" />
          </div>
        </div>
      </section>
    </>
  );
}
