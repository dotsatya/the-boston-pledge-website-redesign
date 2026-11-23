import React from "react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="pt-4 sm:pt-8 pb-2 sm:pb-4 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Left */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#7A8475] mb-2 sm:mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#1E231C] font-medium">About Us</span>
        </nav>

        {/* Overline with accent dash Left */}
        <div className="flex items-center gap-3 mb-1.5 sm:mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
            A 25-YEAR LEGACY OF SERVICE
          </span>
          <div className="w-10 h-px bg-[#C8C2B5]" />
        </div>

        {/* Heading Left */}
        <h1 className="text-xl sm:text-3xl lg:text-[44px] font-serif font-normal text-[#1E231C] tracking-tight leading-[1.18] mb-2 sm:mb-4 max-w-3xl break-words">
          A Legacy of Service. <br />
          A Future of Impact.
        </h1>

        {/* Subtitle Left */}
        <p className="text-xs sm:text-sm lg:text-base text-[#555E50] leading-relaxed max-w-2xl font-normal">
          Founded in 2001, The Boston Pledge is a registered 501(c)(3) global nonprofit fostering sustainable grassroots development, ethical leadership, and one humanity.
        </p>
      </div>
    </section>
  );
}
