import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function InitiativesHero() {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
        <SectionHeader
          overline="OUR INITIATIVES"
          title="Creating Opportunities for a Better Tomorrow."
          subtitle="Empowering communities through grassroots entrepreneurship, youth education, digital inclusion, and environmental health."
          align="center"
        />
      </div>
    </section>
  );
}
