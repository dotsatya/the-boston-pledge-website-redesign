import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import EventDetail from "@/components/events/EventDetail";
import { getAllEvents, getEventBySlug } from "@/lib/eventsDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | The Boston Pledge",
    };
  }

  return {
    title: `${event.title} | The Boston Pledge`,
    description: event.summary || `Event details for ${event.title}`,
  };
}

export default async function SingleEventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <EventDetail event={event} />
      </main>
      <Footer />
    </div>
  );
}
