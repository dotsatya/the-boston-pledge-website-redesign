import React from "react";
import AboutHero from "@/components/about/AboutHero";
import LegacyStory from "@/components/about/LegacyStory";
import MissionPillars from "@/components/about/MissionPillars";
import LeadershipFull from "@/components/about/LeadershipFull";

export const metadata = {
  title: "About Us | The Boston Pledge",
  description: "Learn about the mission, founding history, and governance of The Boston Pledge.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <LegacyStory />
      <MissionPillars />
      <LeadershipFull />
    </>
  );
}
