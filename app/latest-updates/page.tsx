import React from "react";
import UpdatesHero from "@/components/latest-updates/UpdatesHero";
import UpdatesFeed from "@/components/latest-updates/UpdatesFeed";

export const metadata = {
  title: "Latest Updates & News | The Boston Pledge",
  description: "Stay informed with the latest news, updates, publications, and stories from The Boston Pledge.",
};

export default function LatestUpdatesPage() {
  return (
    <>
      <UpdatesHero />
      <UpdatesFeed />
    </>
  );
}
