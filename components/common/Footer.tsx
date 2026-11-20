"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon, ArrowRightIcon, LinkedInIcon, XIcon, YouTubeIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#242D21] text-[#E0E5DC] text-sm pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#364232]">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5 group">
              <div className="bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl inline-flex items-center shadow-sm group-hover:bg-white transition-colors">
                <img
                  src="/logo.png"
                  alt="The Boston Pledge"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-xs text-[#A8B3A2] leading-relaxed max-w-xs mb-6">
              Together for a more equitable, compassionate and prosperous world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5C0AF]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="hover:text-white transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/be-a-volunteer" className="hover:text-white transition-colors">
                  Be A Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-[#B5C0AF]">
              <div className="flex items-start gap-2.5">
                <MailIcon className="w-3.5 h-3.5 text-[#8FA587] shrink-0 mt-0.5" />
                <a href="mailto:contact@thebostonpledge.org" className="hover:text-white transition-colors">
                  contact@thebostonpledge.org
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <PhoneIcon className="w-3.5 h-3.5 text-[#8FA587] shrink-0 mt-0.5" />
                <a href="tel:+16175123038" className="hover:text-white transition-colors">
                  +1 617-512-3038
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-3.5 h-3.5 text-[#8FA587] shrink-0 mt-0.5" />
                <span>Unit 66, 7 Wainwright Road, Winchester, MA 01890</span>
              </div>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Stay Connected
            </h4>
            <p className="text-xs text-[#A8B3A2] mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            {subscribed ? (
              <div className="bg-[#313E2E] text-[#D8E6D3] text-xs p-3 rounded-full text-center">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white text-[#1E231C] placeholder:text-[#8E9789] text-xs rounded-full py-2.5 pl-4 pr-11 focus:outline-none focus:ring-2 focus:ring-[#8FA587]"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="absolute right-1 top-1 bottom-1 w-8 h-8 rounded-full bg-[#414D3C] hover:bg-[#343F30] text-white flex items-center justify-center transition-colors"
                >
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-[#313D2D] hover:bg-[#414D3C] flex items-center justify-center text-[#C2CDC0] hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-7 h-7 rounded-full bg-[#313D2D] hover:bg-[#414D3C] flex items-center justify-center text-[#C2CDC0] hover:text-white transition-colors"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-[#313D2D] hover:bg-[#414D3C] flex items-center justify-center text-[#C2CDC0] hover:text-white transition-colors"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-[#313D2D] hover:bg-[#414D3C] flex items-center justify-center text-[#C2CDC0] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A9885] gap-4">
          <div>
            © 2026 The Boston Pledge. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
