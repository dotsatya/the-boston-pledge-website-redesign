import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import InitiativesHero from "@/components/initiatives/InitiativesHero";
import InitiativePillars from "@/components/initiatives/InitiativePillars";

export const metadata = {
  title: "Initiatives | The Boston Pledge",
  description: "Explore the core programs of The Boston Pledge: Youth Development, Education & Leadership, and Community Development.",
};

export default function InitiativesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <InitiativesHero />
        <InitiativePillars />
      </main>
      <Footer />
    </div>
  );
}
