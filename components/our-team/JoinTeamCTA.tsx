import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";

export default function JoinTeamCTA() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3EDE3] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E4DDD2] text-center">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#5A6455] whitespace-nowrap">
              GET INVOLVED
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
          </div>
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight mb-2 sm:mb-3">
            Want to Join Our Volunteer & Mentorship Team?
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6356] max-w-xl mx-auto mb-4 sm:mb-8 leading-relaxed font-normal">
            We are always looking for passionate thinkers, educators, developers, doctors, and students who wish to pledge their skills to uplift communities at the base of the pyramid.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            <Link
              href="/be-a-volunteer"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all"
            >
              <span>Apply to Join the Team</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-semibold text-[#2C3427] bg-white hover:bg-[#FAF8F5] border border-[#D0C9BD] shadow-2xs transition-all"
            >
              Contact Our Board
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
