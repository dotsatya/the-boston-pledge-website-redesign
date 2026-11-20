import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | The Boston Pledge",
  description: "Contact The Boston Pledge team in Winchester, MA for events, partnerships, and donations.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E231C] antialiased">
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
