import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";
import { ourTeamDetails } from "@/lib/ourTeamDetails";

export default function LeadershipPreview() {
  // Use first 4 key leaders from the official ourTeamDetails dataset
  const leaders = ourTeamDetails.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Text matching demo */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                OUR LEADERSHIP
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>

            <Link href="/our-team" className="group">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight mb-3 group-hover:text-[#414D3C] transition-colors">
                Meet Our Team
              </h2>
            </Link>

            <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed mb-6 font-normal">
              A diverse team united by a shared commitment to global impact.
            </p>

            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right 4-column team portraits matching demo with real details */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {leaders.map((leader) => (
              <Link key={leader.id} href="/our-team" className="flex flex-col group">
                <div className="w-full h-44 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden bg-[#EAE6DF] mb-3 shadow-2xs border border-[#E2DDD4]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs text-[#636C5E] mt-0.5 font-normal line-clamp-1">
                  {leader.role}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
