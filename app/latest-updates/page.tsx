import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import UpdatesHero from "@/components/latest-updates/UpdatesHero";
import UpdatesFeed from "@/components/latest-updates/UpdatesFeed";

export const metadata = {
  title: "Latest Updates & News | The Boston Pledge",
  description: "Stay informed with the latest news, updates, publications, and stories from The Boston Pledge.",
};

export default function LatestUpdatesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <UpdatesHero />
        <UpdatesFeed />
      </main>
      <Footer />
    </div>
  );
}
