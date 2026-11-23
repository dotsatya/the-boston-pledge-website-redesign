import React from "react";
import Link from "next/link";
import { ourTeamDetails } from "@/lib/ourTeamDetails";
import { ArrowRightIcon } from "../common/Icons";

export default function LeadershipFull() {
  const team = ourTeamDetails.slice(0, 6);

  return (
    <section id="leadership" className="py-6 sm:py-10 lg:py-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                GOVERNANCE & STEWARDS
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight">
              Board of Directors & Officers
            </h3>
          </div>

          <Link
            href="/our-team"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all shrink-0 self-start sm:self-auto"
          >
            <span>View All 18 Team Members</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-6">
          {team.map((member) => (
            <Link key={member.id} href="/our-team" className="flex flex-row sm:flex-col bg-white rounded-xl sm:rounded-2xl p-2 sm:p-0 border border-[#ECE7DF] sm:border-0 shadow-2xs sm:shadow-none group">
              <div className="w-20 xs:w-24 sm:w-full h-20 xs:h-24 sm:h-48 shrink-0 rounded-lg sm:rounded-2xl overflow-hidden bg-[#EAE6DF] mb-0 sm:mb-3 shadow-xs border border-[#E2DDD4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pl-3 sm:pl-0 flex-1 min-w-0 flex flex-col justify-center sm:block">
                <h4 className="text-xs sm:text-sm font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors leading-snug">
                  {member.name}
                </h4>
                <p className="text-[10px] sm:text-xs text-[#414D3C] font-medium line-clamp-1 mt-0.5">{member.role}</p>
                <p className="text-[10px] sm:text-[11px] text-[#697263] mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
