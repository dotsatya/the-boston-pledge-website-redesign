import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";
import { ourTeamDetails } from "@/lib/ourTeamDetails";
import ScrollReveal from "../common/ScrollReveal";

export default function LeadershipPreview() {
  // Use first 4 key leaders from the official ourTeamDetails dataset
  const leaders = ourTeamDetails.slice(0, 4);

  return (
    <section className="py-6 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column Text matching demo */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                OUR LEADERSHIP
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <Link href="/our-team" className="group">
              <h2 className="text-xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight mb-2 sm:mb-3 group-hover:text-[#414D3C] transition-colors">
                Meet Our Team
              </h2>
            </Link>

            <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed mb-3.5 sm:mb-6 font-normal">
              A diverse team united by a shared commitment to global impact.
            </p>

            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right 4-column team portraits matching demo with real details */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-4 gap-2.5 sm:gap-6">
            {leaders.map((leader, idx) => (
              <ScrollReveal key={leader.id} delay={idx * 0.1}>
                <Link href="/our-team" className="flex flex-row sm:flex-col bg-white rounded-xl sm:rounded-2xl p-2 sm:p-0 border border-[#ECE7DF] sm:border-0 shadow-2xs sm:shadow-none group">
                  <div className="w-20 h-20 sm:w-full sm:h-52 shrink-0 rounded-lg sm:rounded-2xl overflow-hidden bg-[#EAE6DF] mb-0 sm:mb-3 shadow-2xs border border-[#E2DDD4]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pl-2.5 sm:pl-0 flex-1 min-w-0 flex flex-col justify-center sm:block">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#636C5E] mt-0.5 font-normal line-clamp-1">
                      {leader.role}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
