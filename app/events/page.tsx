import React from "react";
import EventsHero from "@/components/events/EventsHero";
import EventsFeed from "@/components/events/EventsFeed";

export const metadata = {
  title: "Events & Conferences | The Boston Pledge",
  description:
    "Explore upcoming and historical conferences, symposia, and webinars organized by The Boston Pledge from 2002 to 2026.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsFeed />
    </>
  );
}
