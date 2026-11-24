import React from "react";

interface SectionHeaderProps {
  overline: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  overline,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} ${className}`}>
      {/* Overline with clean horizontal line accent matching demo */}
      <div className={`flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5 ${align === "center" ? "justify-center" : ""}`}>
        {align === "center" && <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />}
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#5A6455] whitespace-nowrap">
          {overline}
        </span>
        <div className="w-8 sm:w-10 h-px bg-[#C8C2B5]" />
      </div>

      {/* Main serif title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#1E231C] leading-[1.2] tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2.5 text-xs sm:text-sm text-[#5B6356] leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
