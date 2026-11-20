import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function InvolvedHero() {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
        <SectionHeader
          overline="GET INVOLVED"
          title="Join The Movement for Grassroots Equity."
          subtitle="Pledge your intellectual, emotional, or financial capital to nurture sustainable self-reliance in underserved communities."
          align="center"
        />
      </div>
    </section>
  );
}
