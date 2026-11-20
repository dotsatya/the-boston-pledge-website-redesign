import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

  return <EventDetail event={event} />;
}
