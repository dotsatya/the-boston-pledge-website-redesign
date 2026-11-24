"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ourTeamDetails, TeamMember } from "@/lib/ourTeamDetails";
import { LinkedInIcon, CloseIcon, ArrowRightIcon } from "../common/Icons";

export default function ExecutiveLeadership() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const categories = [
    { id: "all", label: "All Members" },
    { id: "leadership", label: "Chairman & Directors" },
    { id: "advisors", label: "Senior Advisors" },
    { id: "specialists", label: "Strategy & Specialists" },
  ];

  const filteredMembers = ourTeamDetails.filter((member) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "leadership") {
      return (
        member.role.toLowerCase().includes("chairman") ||
        member.role.toLowerCase().includes("founding") ||
        member.role.toLowerCase().includes("director") ||
        member.role.toLowerCase().includes("leader")
      );
    }
    if (activeFilter === "advisors") {
      return member.role.toLowerCase().includes("advisor");
    }
    if (activeFilter === "specialists") {
      return (
        member.role.toLowerCase().includes("member") ||
        member.role.toLowerCase().includes("partner") ||
        member.role.toLowerCase().includes("strategy") ||
        member.role.toLowerCase().includes("technology")
      );
    }
    return true;
  });

  // Handle ESC key and scroll lock for the details popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      }
    };

    if (selectedMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <section className="pt-1 sm:pt-2 pb-6 sm:pb-8 lg:pb-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3.5 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-[#414D3C] text-white shadow-2xs"
                  : "bg-white text-[#384234] border border-[#DDD7CD] hover:border-[#414D3C]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Team Members - Slightly smaller compact cards with small padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-5 items-stretch">
          {filteredMembers.map((member: TeamMember) => (
            <div
              key={member.id}
              className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-[#ECE7DF] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div className="flex flex-row sm:flex-col h-full justify-between">
                {/* Photo & LinkedIn button: Left on mobile, Top on desktop */}
                <div className="relative w-20 xs:w-24 sm:w-full h-20 xs:h-24 sm:h-48 shrink-0 rounded-lg sm:rounded-xl overflow-hidden bg-[#EAE6DF] mb-0 sm:mb-3 border border-[#E2DDD4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={480}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 backdrop-blur-sm text-[#0A66C2] flex items-center justify-center shadow-xs hover:bg-[#0A66C2] hover:text-white transition-colors z-10"
                      aria-label={`${member.name} LinkedIn Profile`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LinkedInIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>
                  )}
                </div>

                {/* Name, Role & Details: Right on mobile, Bottom on desktop */}
                <div className="pl-3 sm:pl-0 flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h4 className="text-xs sm:text-base font-serif font-bold text-[#1E231C] leading-snug line-clamp-1 group-hover:text-[#414D3C] transition-colors">
                      {member.name}
                    </h4>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-[#414D3C] mt-0.5 mb-1 sm:mb-2 line-clamp-1">
                      {member.role}
                    </div>

                    {/* Short Bio Snippet */}
                    <p className="text-[10px] sm:text-xs text-[#5D6558] leading-relaxed line-clamp-2 font-normal mb-1.5 sm:mb-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* View Details Action Button */}
                  <div className="pt-1.5 sm:pt-3 border-t border-[#F2ECE3] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-[#414D3C] bg-[#FAF8F5] border border-[#DDD7CD] hover:bg-[#414D3C] hover:text-white hover:border-[#414D3C] transition-all cursor-pointer shadow-2xs"
                    >
                      <span>View Details</span>
                      <ArrowRightIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILS POPUP MODAL */}
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-xl w-full max-h-[88vh] overflow-y-auto border border-[#ECE7DF] shadow-2xl relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#DDD7CD] text-[#414D3C] hover:bg-[#414D3C] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <CloseIcon className="w-4 h-4" />
              </button>

              {/* Member Header in Modal */}
              <div className="flex items-start gap-4 sm:gap-5 mb-6 pr-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#EAE6DF] border border-[#E2DDD4] shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FAF8F5] text-[#414D3C] border border-[#DDD7CD] mb-1.5">
                    {selectedMember.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1E231C] leading-snug">
                    {selectedMember.name}
                  </h3>
                  <div className="text-xs text-[#636C5E] mt-1 font-medium">
                    The Boston Pledge Leadership Fellowship
                  </div>
                </div>
              </div>

              {/* Full Biography */}
              <div className="border-t border-[#ECE7DF] pt-5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#414D3C] mb-2.5">
                  About &amp; Biography
                </h4>
                <p className="text-xs sm:text-sm text-[#4E5748] leading-relaxed font-normal whitespace-pre-line">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Modal Footer with LinkedIn & Close */}
              <div className="pt-4 border-t border-[#F2ECE3] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-center sm:text-left">
                {selectedMember.linkedin ? (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#084e96] transition-colors shadow-2xs"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                ) : (
                  <span className="text-xs text-[#7A8374]">
                    Voluntary Community Steward
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-[#414D3C] bg-[#FAF8F5] border border-[#DDD7CD] hover:bg-[#414D3C] hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
