import React from "react";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import InitiativesGrid from "@/components/home/InitiativesGrid";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import LatestEventsSection from "@/components/home/LatestEventsSection";
import NewsSection from "@/components/home/NewsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <InitiativesGrid />
      <UpcomingEvent />
      <LeadershipPreview />
      <LatestEventsSection />
      <NewsSection />
    </>
  );
}
