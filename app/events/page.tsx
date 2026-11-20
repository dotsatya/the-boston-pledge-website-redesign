import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import EventsHero from "@/components/events/EventsHero";
import EventsFeed from "@/components/events/EventsFeed";

export const metadata = {
  title: "Events & Conferences | The Boston Pledge",
  description:
    "Explore upcoming and historical conferences, symposia, and webinars organized by The Boston Pledge from 2002 to 2026.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <EventsHero />
        <EventsFeed />
      </main>
      <Footer />
    </div>
  );
}
