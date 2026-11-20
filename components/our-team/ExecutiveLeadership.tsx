"use client";

import React, { useState } from "react";
import { ourTeamDetails, TeamMember } from "@/lib/ourTeamDetails";
import { LinkedInIcon } from "../common/Icons";

export default function ExecutiveLeadership() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

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

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
            EXECUTIVE STEWARDS & ADVISORS
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mt-2 mb-3">
            The Minds Driving The Boston Pledge
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed">
            Every leader at The Boston Pledge serves on a completely voluntary, uncompensated basis, bridging world-class academic and corporate expertise with grassroots self-reliance.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-[#414D3C] text-white shadow-xs"
                  : "bg-white text-[#384234] border border-[#DDD7CD] hover:border-[#414D3C]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member: TeamMember) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-6 border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo & LinkedIn bar */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-[#EAE6DF] mb-4 border border-[#E2DDD4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#0A66C2] flex items-center justify-center shadow-xs hover:bg-[#0A66C2] hover:text-white transition-colors"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Name & Role */}
                <h4 className="text-lg font-serif font-bold text-[#1E231C]">
                  {member.name}
                </h4>
                <div className="text-xs font-semibold text-[#414D3C] mt-0.5 mb-3">
                  {member.role}
                </div>

                {/* Biography */}
                <p className="text-xs text-[#5D6558] leading-relaxed line-clamp-4">
                  {member.bio}
                </p>
              </div>

              {/* View Profile or LinkedIn footer */}
              {member.linkedin && (
                <div className="pt-4 mt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#414D3C] hover:underline flex items-center gap-1.5"
                  >
                    <span>Connect on LinkedIn</span>
                    <span>→</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
