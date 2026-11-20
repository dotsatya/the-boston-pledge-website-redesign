import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import MediaHero from "@/components/media/MediaHero";
import ArticlesGrid from "@/components/media/ArticlesGrid";

export const metadata = {
  title: "Media & News | The Boston Pledge",
  description: "Read the latest news, updates, publications, and impact stories from The Boston Pledge.",
};

export default function MediaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <MediaHero />
        <ArticlesGrid />
      </main>
      <Footer />
    </div>
  );
}
