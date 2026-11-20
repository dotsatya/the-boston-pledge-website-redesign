import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = {
  title: "Contact Us | The Boston Pledge",
  description: "Contact The Boston Pledge team in Winchester, MA for events, partnerships, and donations.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </>
  );
}
