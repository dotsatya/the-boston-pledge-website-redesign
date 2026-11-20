import React from "react";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <img
        src="/logo.png"
        alt="The Boston Pledge Logo"
        className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
      />
    </Link>
  );
}
