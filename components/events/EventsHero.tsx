import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function EventsHero() {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <SectionHeader
          overline="EVENTS & CONFERENCES"
          title="Gathering Minds to Shape Tomorrow."
          subtitle="Explore our landmark assemblies, silver jubilee gatherings, and international webinars from 2002 to 2026."
          align="center"
        />
      </div>
    </section>
  );
}
