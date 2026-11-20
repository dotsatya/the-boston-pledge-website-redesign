import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function UpdatesHero() {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
        <SectionHeader
          overline="NEWS & INSIGHTS"
          title="Latest Updates & Dispatches"
          subtitle="Stay informed with real-time field reports, conference proceedings, grassroots entrepreneurship milestones, and strategic publications from The Boston Pledge."
          align="center"
        />
      </div>
    </section>
  );
}
