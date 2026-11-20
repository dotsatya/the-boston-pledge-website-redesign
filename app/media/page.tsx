import React from "react";
import MediaHero from "@/components/media/MediaHero";
import FramesGallery from "@/components/media/FramesGallery";

export const metadata = {
  title: "Our Frames: The Visual Archive | The Boston Pledge",
  description:
    "Explore our collection of photographs and video chronicles documenting 25 years of grassroots service, conferences, and community development.",
};

export default function MediaPage() {
  return (
    <>
      <MediaHero />
      <FramesGallery />
    </>
  );
}
