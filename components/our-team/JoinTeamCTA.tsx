import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";

export default function JoinTeamCTA() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#EFE9DF] rounded-3xl p-8 sm:p-12 border border-[#E3DCCE] text-center">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mb-3">
            Want to Join Our Volunteer & Mentorship Team?
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6356] max-w-xl mx-auto mb-8 leading-relaxed">
            We are always looking for passionate thinkers, educators, developers, doctors, and students who wish to pledge their skills to uplift communities at the base of the pyramid.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs transition-all"
            >
              <span>Apply to Join the Team</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full text-xs font-medium text-[#2C3427] bg-white/80 hover:bg-white border border-[#D0C9BD] transition-all"
            >
              Contact Our Board
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
