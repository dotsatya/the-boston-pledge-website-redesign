import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function MediaHero() {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
        <SectionHeader
          overline="NEWS & STORIES"
          title="Insights. Ideas. Impact."
          subtitle="Stay informed with our latest research whitepapers, conference dispatches, and grassroots community updates."
          align="center"
        />
      </div>
    </section>
  );
}
