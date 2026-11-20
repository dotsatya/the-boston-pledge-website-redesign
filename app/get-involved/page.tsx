import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import InvolvedHero from "@/components/get-involved/InvolvedHero";
import DonationTierSelector from "@/components/get-involved/DonationTierSelector";
import VolunteerForm from "@/components/get-involved/VolunteerForm";

export const metadata = {
  title: "Get Involved & Donate | The Boston Pledge",
  description: "Join The Boston Pledge by pledging $1 a day, donating, or applying as a volunteer mentor.",
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <InvolvedHero />
        <DonationTierSelector />
        <VolunteerForm />
      </main>
      <Footer />
    </div>
  );
}
