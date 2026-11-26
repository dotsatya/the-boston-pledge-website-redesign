import React from "react";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`self-start relative z-50 inline-flex items-center justify-center bg-[#FAF8F5]/95 backdrop-blur-md px-3 sm:px-4.5 lg:px-5 pt-2 sm:pt-2.5 pb-2.5 sm:pb-3 rounded-b-xl sm:rounded-b-2xl border-x border-b border-[#E9E4DC] shadow-[0_6px_20px_-4px_rgba(30,35,28,0.1)] group transition-shadow hover:shadow-[0_8px_24px_-4px_rgba(30,35,28,0.14)] ${className}`}
    >
      <img
        src="/logo.png"
        alt="The Boston Pledge Logo"
        className="h-11 sm:h-14 lg:h-16 xl:h-[72px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
