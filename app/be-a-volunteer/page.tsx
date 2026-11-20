import React from "react";
import type { Metadata } from "next";
import VolunteerHero from "@/components/volunteer/VolunteerHero";
import VolunteerWhoCanApply from "@/components/volunteer/VolunteerWhoCanApply";
import VolunteerPrinciples from "@/components/volunteer/VolunteerPrinciples";
import VolunteerGuidelines from "@/components/volunteer/VolunteerGuidelines";
import VolunteerQuote from "@/components/volunteer/VolunteerQuote";
import VolunteerApplicationForm from "@/components/volunteer/VolunteerApplicationForm";

export const metadata: Metadata = {
  title: "Be A Volunteer | The Boston Pledge",
  description:
    "Join The Boston Pledge fellowship as a volunteer. Offer your time, intellect, and spirit of public service to solve complex grassroots issues.",
};

export default function BeAVolunteerPage() {
  return (
    <>
      <VolunteerHero />
      <VolunteerWhoCanApply />
      <VolunteerPrinciples />
      <VolunteerGuidelines />
      <VolunteerQuote />
      <VolunteerApplicationForm />
    </>
  );
}
