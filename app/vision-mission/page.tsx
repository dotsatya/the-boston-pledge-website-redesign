import React from "react";
import type { Metadata } from "next";
import VisionMissionHero from "@/components/vision-mission/VisionMissionHero";
import VisionSection from "@/components/vision-mission/VisionSection";
import QuoteBanner from "@/components/vision-mission/QuoteBanner";
import MissionSection from "@/components/vision-mission/MissionSection";
import DoctrinesSection from "@/components/vision-mission/DoctrinesSection";
import VisionMissionCTA from "@/components/vision-mission/VisionMissionCTA";
import { visionMissionData } from "@/lib/about/vision-mission";

export const metadata: Metadata = {
  title: "Vision & Mission | The Boston Pledge",
  description:
    "The Boston Pledge’s vision is to continually bring together goodness in global citizens who will humbly serve to catalyze sustainable development of Global Equity.",
};

export default function VisionMissionPage() {
  const { pageTitle, vision, quote, mission, overarchingDoctrines } =
    visionMissionData;

  return (
    <>
      {/* Hero Banner */}
      <VisionMissionHero pageTitle={pageTitle} />

      {/* Vision Statement & 3 Pillars */}
      <VisionSection
        title={vision.title}
        description={vision.description}
        image={vision.image}
      />

      {/* Einstein Quote Card */}
      <QuoteBanner quote={quote} />

      {/* Mission Objectives */}
      <MissionSection
        title={mission.title}
        image={mission.image}
        objectives={mission.objectives}
      />

      {/* The 10 Overarching Doctrines */}
      <DoctrinesSection
        title={overarchingDoctrines.title}
        introduction={overarchingDoctrines.introduction}
        principles={overarchingDoctrines.principles}
      />

      {/* Call to Action */}
      <VisionMissionCTA />
    </>
  );
}
