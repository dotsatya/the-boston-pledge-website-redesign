import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
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
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <TeamHero />
        <ExecutiveLeadership />
        <AdvisoryCouncil />
        <JoinTeamCTA />
      </main>
      <Footer />
    </div>
  );
}
