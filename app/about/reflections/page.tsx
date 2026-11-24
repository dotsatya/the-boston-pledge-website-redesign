import React from "react";
import type { Metadata } from "next";
import ReflectionsHero from "@/components/reflections/ReflectionsHero";
import ReflectionsVideo from "@/components/reflections/ReflectionsVideo";
import ChairmanBio from "@/components/reflections/ChairmanBio";
import ChairmanQuote from "@/components/reflections/ChairmanQuote";
import SpeechesArchive from "@/components/reflections/SpeechesArchive";

export const metadata: Metadata = {
  title: "Reflections & Thought Leadership | The Boston Pledge",
  description:
    "Explore leadership reflections, macroeconomic philosophies, and keynote symposium dispatches by Dr. Partha S. Ghosh, Chairman of The Boston Pledge.",
};

export default function ReflectionsPage() {
  return (
    <>
      <ReflectionsHero />
      <ReflectionsVideo />
      <ChairmanBio />
      <ChairmanQuote />
      <SpeechesArchive />
    </>
  );
}
