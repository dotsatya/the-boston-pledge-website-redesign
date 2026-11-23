import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pillars, getPillarById } from "@/lib/Initiatives";
import InitiativeDetail from "@/components/initiatives/InitiativeDetail";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return pillars.map((pillar) => ({
    id: pillar.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pillar = getPillarById(id);

  if (!pillar) {
    return {
      title: "Initiative Not Found | The Boston Pledge",
    };
  }

  return {
    title: `${pillar.title} | Initiatives | The Boston Pledge`,
    description:
      pillar.desc || `Explore ${pillar.title} with The Boston Pledge.`,
  };
}

export default async function SingleInitiativePage({ params }: Props) {
  const { id } = await params;
  const pillar = getPillarById(id);

  if (!pillar) {
    notFound();
  }

  return <InitiativeDetail pillar={pillar} />;
}
