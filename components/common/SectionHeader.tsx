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
      <div className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
          {overline}
        </span>
        <div className="w-10 h-px bg-[#C8C2B5]" />
      </div>

      {/* Main serif title */}
      <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1E231C] leading-[1.2] tracking-tight">
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
