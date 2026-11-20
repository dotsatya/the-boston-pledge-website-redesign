import React from "react";
import Link from "next/link";
import { ourTeamDetails } from "@/lib/ourTeamDetails";
import { ArrowRightIcon } from "../common/Icons";

export default function LeadershipFull() {
  const team = ourTeamDetails.slice(0, 6);

  return (
    <section id="leadership" className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                GOVERNANCE & STEWARDS
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight">
              Board of Directors & Officers
            </h3>
          </div>

          <Link
            href="/our-team"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all shrink-0"
          >
            <span>View All 18 Team Members</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
          {team.map((member) => (
            <Link key={member.id} href="/our-team" className="flex flex-col group">
              <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-[#EAE6DF] mb-3 shadow-xs border border-[#E2DDD4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-sm font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors leading-snug">
                {member.name}
              </h4>
              <p className="text-xs text-[#414D3C] font-medium line-clamp-1 mt-0.5">{member.role}</p>
              <p className="text-[11px] text-[#697263] mt-1.5 line-clamp-2 leading-relaxed font-normal">
                {member.bio}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
