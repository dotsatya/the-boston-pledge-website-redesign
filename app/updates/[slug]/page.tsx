import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import UpdateDetail from "@/components/latest-updates/UpdateDetail";
import { getAllUpdates, getUpdateBySlug } from "@/lib/latestUpdates";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const updates = getAllUpdates();
  return updates.map((update) => ({
    slug: update.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    return {
      title: "Update Not Found | The Boston Pledge",
    };
  }

  return {
    title: `${update.title} | The Boston Pledge`,
    description: update.summary,
  };
}

export default async function LegacyUpdatesRedirectPage({ params }: Props) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  return <UpdateDetail update={update} />;
}
