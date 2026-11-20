import React from "react";
import InitiativesHero from "@/components/initiatives/InitiativesHero";
import InitiativePillars from "@/components/initiatives/InitiativePillars";

export const metadata = {
  title: "Initiatives | The Boston Pledge",
  description: "Explore the core programs of The Boston Pledge: Youth Development, Education & Leadership, and Community Development.",
};

export default function InitiativesPage() {
  return (
    <>
      <InitiativesHero />
      <InitiativePillars />
    </>
  );
}
