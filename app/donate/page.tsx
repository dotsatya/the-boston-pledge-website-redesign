import React from "react";
import type { Metadata } from "next";
import DonateHero from "@/components/donate/DonateHero";
import DonateForm from "@/components/donate/DonateForm";
import DonateImpactCards from "@/components/donate/DonateImpactCards";

export const metadata: Metadata = {
  title: "Donate | The Boston Pledge",
  description:
    "Make a 501(c)(3) tax-deductible donation to The Boston Pledge. Your gift directly empowers grassroots education, microfinance, clean water, and community self-reliance.",
};

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <DonateForm />
      <DonateImpactCards />
    </>
  );
}
