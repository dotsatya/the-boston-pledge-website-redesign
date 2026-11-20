import React from "react";
import Link from "next/link";
import { ArrowRightIcon, GradCapIcon, BookOpenIcon, CommunityIcon } from "../common/Icons";

export default function InitiativesGrid() {
  const initiatives = [
    {
      title: "Youth Development",
      subtitle: "Empowering the next generation.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
      icon: <GradCapIcon className="w-5 h-5 text-white" />,
      href: "/initiatives#youth",
    },
    {
      title: "Education & Leadership",
      subtitle: "Building leaders for tomorrow.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80",
      icon: <BookOpenIcon className="w-5 h-5 text-white" />,
      href: "/initiatives#education",
    },
    {
      title: "Community Development",
      subtitle: "Strengthening communities globally.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80",
      icon: <CommunityIcon className="w-5 h-5 text-white" />,
      href: "/initiatives#community",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header Row with 'Explore All Initiatives ->' on the right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                OUR INITIATIVES
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E231C] tracking-tight">
              Creating Opportunities <br className="hidden sm:inline" />
              for a Better Tomorrow.
            </h2>
          </div>

          <Link
            href="/initiatives"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#414D3C] hover:text-[#181E16] transition-colors self-start sm:self-auto"
          >
            <span>Explore All Initiatives</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Column Image Cards Grid matching demo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {initiatives.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative h-[360px] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-end p-6"
            >
              {/* Background Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark vignette gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* Content at bottom of card */}
              <div className="relative z-10">
                {/* Circle icon badge */}
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-medium text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 font-normal">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
