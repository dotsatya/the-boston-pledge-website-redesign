"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ArrowRightIcon, MenuIcon, CloseIcon } from "./Icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Our Team", href: "/our-team" },
    { label: "Initiatives", href: "/initiatives" },
    { label: "Events", href: "/events" },
    { label: "Latest Updates", href: "/latest-updates" },
    { label: "Contact Us", href: "/contact" },
    { label: "Get Involved", href: "/get-involved" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E9E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Center Nav Links matching demo aesthetic with Contact Us included */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs xl:text-sm font-medium text-[#2F372C] hover:text-[#181E16] transition-colors relative py-1 hover:border-b-2 hover:border-[#414D3C]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Donate button matching demo */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/get-involved#donate"
            className="inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all"
          >
            <span>Donate</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tablet / Mobile actions */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full text-xs font-medium text-[#414D3C] border border-[#414D3C] hover:bg-[#414D3C] hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/get-involved#donate"
            className="px-4 py-2 rounded-full text-xs font-medium text-white bg-[#414D3C]"
          >
            Donate
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#2F372C] hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-t border-[#E9E4DC] px-6 py-5 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-base font-medium text-[#2F372C] hover:text-[#181E16] border-b border-[#EFECE6] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#8FA587] text-xs">→</span>
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/get-involved#donate"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium text-white bg-[#414D3C]"
              >
                <span>Donate</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
