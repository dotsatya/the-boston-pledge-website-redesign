import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function AboutHero() {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
        <SectionHeader
          overline="ABOUT THE BOSTON PLEDGE"
          title="A Legacy of Service. A Future of Impact."
          subtitle="Founded in 2001, The Boston Pledge is a registered 501(c)(3) global nonprofit fostering sustainable grassroots development, ethical leadership, and one humanity."
          align="center"
        />
      </div>
    </section>
  );
}
