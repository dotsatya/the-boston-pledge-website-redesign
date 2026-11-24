import React from "react";
import type { Metadata } from "next";
import ConstitutionHero from "@/components/constitution/ConstitutionHero";
import ConstitutionValues from "@/components/constitution/ConstitutionValues";
import ConstitutionQuote from "@/components/constitution/ConstitutionQuote";
import ConstitutionGuidelines from "@/components/constitution/ConstitutionGuidelines";
import ConstitutionCTA from "@/components/constitution/ConstitutionCTA";

export const metadata: Metadata = {
  title: "Constitution & Guidelines | The Boston Pledge",
  description:
    "The Constitution of The Boston Pledge — establishing political independence, cultural inclusivity, volunteer stewardship, and operational integrity.",
};

export default function ConstitutionPage() {
  return (
    <>
      <ConstitutionHero />
      <ConstitutionValues />
      <ConstitutionQuote />
      <ConstitutionGuidelines />
      <ConstitutionCTA />
    </>
  );
}
