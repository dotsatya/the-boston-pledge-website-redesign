import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
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
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <LegacyStory />
        <MissionPillars />
        <LeadershipFull />
      </main>
      <Footer />
    </div>
  );
}
