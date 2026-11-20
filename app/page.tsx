import React from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import InitiativesGrid from "@/components/home/InitiativesGrid";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import LatestEventsSection from "@/components/home/LatestEventsSection";
import NewsSection from "@/components/home/NewsSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutPreview />
        <InitiativesGrid />
        <UpcomingEvent />
        <LeadershipPreview />
        <LatestEventsSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
