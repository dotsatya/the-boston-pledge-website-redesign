import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ourTeamDetails } from "@/lib/ourTeamDetails";
import { ArrowRightIcon } from "../common/Icons";

export default function LeadershipFull() {
  const team = ourTeamDetails.slice(0, 6);

  return (
    <section id="leadership" className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-3 sm:mb-6">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                GOVERNANCE &amp; STEWARDS
              </span>
              <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight">
              Board of Directors &amp; Officers
            </h3>
          </div>

          <Link
            href="/about/our-team"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all shrink-0 self-start sm:self-auto"
          >
            <span>View All 18 Team Members</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 lg:gap-4 items-stretch">
          {team.map((member) => (
            <Link
              key={member.id}
              href="/about/our-team"
              className="flex flex-row sm:flex-col bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-2.5 lg:p-3 border border-[#ECE7DF] shadow-xs hover:shadow-md transition-all duration-300 group h-full justify-between"
            >
              <div className="relative w-20 xs:w-24 sm:w-full h-20 xs:h-24 sm:h-48 lg:h-44 shrink-0 rounded-lg sm:rounded-xl overflow-hidden bg-[#EAE6DF] border border-[#E8E2D8]/60">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={360}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pl-3 sm:pl-0 pt-0 sm:pt-2.5 pb-0.5 flex-1 min-w-0 flex flex-col justify-start">
                <div className="sm:min-h-[2.5rem] flex items-center">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2">
                    {member.name}
                  </h4>
                </div>
                <p className="text-[10px] sm:text-xs text-[#414D3C] font-medium line-clamp-1 truncate mt-0.5">
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
