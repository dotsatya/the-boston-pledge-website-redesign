import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function TeamHero() {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
        <SectionHeader
          overline="OUR LEADERSHIP"
          title="Meet Our Team"
          subtitle="A diverse team united by a shared commitment to global impact. Our leaders and mentors contribute pro bono strategic, academic, and field expertise to empower grassroots self-reliance."
          align="center"
        />
      </div>
    </section>
  );
}
