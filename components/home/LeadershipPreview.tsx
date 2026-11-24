import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "../common/Icons";
import { ourTeamDetails } from "@/lib/ourTeamDetails";
import ScrollReveal from "../common/ScrollReveal";

export default function LeadershipPreview() {
  // Use first 4 key leaders from the official ourTeamDetails dataset
  const leaders = ourTeamDetails.slice(0, 4);

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column Text matching demo */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
                OUR LEADERSHIP
              </span>
              <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
            </div>

            <Link href="/about/our-team" className="group">
              <h2 className="text-xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight mb-2 sm:mb-3 group-hover:text-[#414D3C] transition-colors">
                Meet Our Team
              </h2>
            </Link>

            <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed mb-3.5 sm:mb-6 font-normal">
              A diverse team united by a shared commitment to global impact.
            </p>

            <Link
              href="/about/our-team"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs"
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right 4-column team portraits with clean card padding & next/image */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5 items-stretch">
            {leaders.map((leader, idx) => (
              <ScrollReveal key={leader.id} delay={idx * 0.1} className="h-full">
                <Link
                  href="/about/our-team"
                  className="flex flex-row sm:flex-col bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-2.5 lg:p-3 border border-[#ECE7DF] shadow-xs hover:shadow-md transition-all duration-300 group h-full"
                >
                  <div className="relative w-20 h-20 sm:w-full sm:h-48 lg:h-52 shrink-0 rounded-lg sm:rounded-xl overflow-hidden bg-[#EAE6DF] border border-[#E8E2D8]/60">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={400}
                      height={480}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pl-3 sm:pl-0 pt-0 sm:pt-3 pb-0.5 sm:pb-1 flex-1 min-w-0 flex flex-col justify-center sm:justify-start">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#1E231C] group-hover:text-[#414D3C] transition-colors leading-snug truncate">
                      {leader.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#636C5E] mt-0.5 font-normal truncate">
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
