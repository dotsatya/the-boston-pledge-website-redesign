"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon, ArrowRightIcon } from "./Icons";

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
    <footer className="bg-[#242D21] text-[#E0E5DC] text-xs sm:text-sm pt-4 sm:pt-6 lg:pt-12 pb-3.5 sm:pb-5 lg:pb-8 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 lg:gap-8 pb-3.5 sm:pb-5 lg:pb-9 border-b border-[#364232]">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-4 min-w-0">
            <Link href="/" className="inline-block mb-1 sm:mb-2 lg:mb-4 group">
              <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl inline-flex items-center shadow-xs group-hover:bg-white transition-colors">
                <img
                  src="/logo.png"
                  alt="The Boston Pledge"
                  className="h-6 sm:h-7 lg:h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="hidden sm:block text-[11px] sm:text-xs text-[#A8B3A2] leading-relaxed max-w-sm mb-1 sm:mb-2">
              Together for a more equitable, compassionate and prosperous world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2 min-w-0">
            <h4 className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider mb-1.5 sm:mb-2 lg:mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[10px] sm:text-xs text-[#B5C0AF]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
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
          <div className="col-span-1 lg:col-span-3 min-w-0">
            <h4 className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider mb-1.5 sm:mb-2 lg:mb-3">
              Contact Us
            </h4>
            <div className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[10px] sm:text-xs text-[#B5C0AF]">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <MailIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8FA587] shrink-0" />
                <a href="mailto:contact@thebostonpledge.org" className="hover:text-white transition-colors truncate min-w-0">
                  contact@thebostonpledge.org
                </a>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <PhoneIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8FA587] shrink-0" />
                <a href="tel:+16175123038" className="hover:text-white transition-colors whitespace-nowrap min-w-0">
                  +1 617-512-3038
                </a>
              </div>
              {/* Physical Address: Hidden on smartphone and tablet view to avoid vertical bloat */}
              <div className="hidden lg:flex items-start gap-1.5 sm:gap-2 min-w-0">
                <MapPinIcon className="w-3.5 h-3.5 text-[#8FA587] shrink-0 mt-0.5" />
                <span className="break-words min-w-0">Unit 66, 7 Wainwright Road, Winchester, MA 01890</span>
              </div>
            </div>
          </div>

          {/* Stay Connected (Newsletter) */}
          <div className="col-span-2 lg:col-span-3 pt-1.5 sm:pt-2 lg:pt-0 min-w-0">
            <h4 className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider mb-1 sm:mb-2">
              Stay Connected
            </h4>
            <p className="text-[10px] sm:text-xs text-[#A8B3A2] mb-2 sm:mb-2.5">
              Subscribe to our newsletter for the latest updates.
            </p>
            {subscribed ? (
              <div className="bg-[#313E2E] text-[#D8E6D3] text-[10px] sm:text-xs p-2 sm:p-2.5 rounded-full text-center">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center max-w-sm w-full min-w-0">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-w-0 bg-white text-[#1E231C] placeholder:text-[#8E9789] text-xs rounded-full h-8.5 sm:h-9 pl-3.5 pr-9 focus:outline-none focus:ring-2 focus:ring-[#8FA587]"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#414D3C] hover:bg-[#343F30] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-2.5 sm:pt-4 lg:pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs text-[#8A9885] gap-1.5 sm:gap-4 text-center sm:text-left">
          <div>
            © 2026 The Boston Pledge. All rights reserved.
          </div>
          {/* Privacy Policy & Terms of Use: Hidden on smartphone view, visible on tablet & desktop */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-6">
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
