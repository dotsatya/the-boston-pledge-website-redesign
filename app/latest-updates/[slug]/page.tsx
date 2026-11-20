import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
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

export default async function SingleUpdatePage({ params }: Props) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <UpdateDetail update={update} />
      </main>
      <Footer />
    </div>
  );
}
