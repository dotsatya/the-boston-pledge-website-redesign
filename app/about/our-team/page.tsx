import React from "react";
import TeamHero from "@/components/our-team/TeamHero";
import ExecutiveLeadership from "@/components/our-team/ExecutiveLeadership";
import AdvisoryCouncil from "@/components/our-team/AdvisoryCouncil";
import JoinTeamCTA from "@/components/our-team/JoinTeamCTA";

export const metadata = {
  title: "Our Team | The Boston Pledge",
  description: "Meet the leadership, board of directors, and advisory council of The Boston Pledge.",
};

export default function OurTeamPage() {
  return (
    <>
      <TeamHero />
      <ExecutiveLeadership />
      <AdvisoryCouncil />
      <JoinTeamCTA />
    </>
  );
}
