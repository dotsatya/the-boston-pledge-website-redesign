import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function ContactHero() {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <SectionHeader
          overline="CONNECT WITH THE BOSTON PLEDGE"
          title="Get in Touch with Us!"
          subtitle="We're here to help! Reach out with any questions, feedback, or inquiries."
          align="center"
        />
      </div>
    </section>
  );
}
