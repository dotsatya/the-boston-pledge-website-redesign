import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, GradCapIcon, BookOpenIcon, CommunityIcon } from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

export default function InitiativesGrid() {
  const initiatives = [
    {
      number: "01",
      title: "Youth Development",
      subtitle: "Empowering the next generation of global changemakers.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
      icon: <GradCapIcon className="w-4 h-4 text-white" />,
      href: "/initiatives#youth",
    },
    {
      number: "02",
      title: "Education & Leadership",
      subtitle: "Educator's Springboard Program for visionary teaching.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80",
      icon: <BookOpenIcon className="w-4 h-4 text-white" />,
      href: "/initiatives#education",
    },
    {
      number: "03",
      title: "Community Development",
      subtitle: "Incubating rural enterprises and ecological resilience.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80",
      icon: <CommunityIcon className="w-4 h-4 text-white" />,
      href: "/initiatives#community",
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                OUR INITIATIVES
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#1E231C] tracking-tight">
              Creating Opportunities <br className="hidden sm:inline" />
              for a Better Tomorrow.
            </h2>
          </div>

          <Link
            href="/initiatives"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs hover:shadow self-start sm:self-auto"
          >
            <span>Explore All Initiatives</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Column Modern Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5 lg:gap-8 items-stretch">
          {initiatives.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.12} className="h-full">
              <Link
                href={item.href}
                className="group relative rounded-2xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-row sm:flex-col justify-between p-2.5 sm:p-4 md:p-5 lg:p-7 border border-[#E8E2D8] bg-white sm:bg-transparent h-auto sm:h-[300px] md:h-[340px] lg:h-[400px]"
              >
                {/* Mobile: Left side thumbnail with badge / Tablet & Desktop: Full background */}
                <div className="w-28 xs:w-32 sm:w-full h-28 xs:h-32 sm:h-full shrink-0 rounded-xl sm:rounded-none overflow-hidden relative sm:absolute sm:inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 130px, (max-width: 1024px) 33vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent sm:from-black/90 sm:via-black/50 sm:to-black/25 group-hover:from-black/95 transition-colors" />
                  <div className="absolute top-2 left-2 z-10 flex items-center sm:hidden">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[10px] font-semibold tracking-wider">
                      {item.icon}
                      <span>{item.number}</span>
                    </div>
                  </div>
                </div>

                {/* Tablet & Desktop Top Tag: Numbered Badge */}
                <div className="relative z-10 hidden sm:flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-[11px] font-semibold tracking-wider">
                    {item.icon}
                    <span>{item.number}</span>
                  </div>
                </div>

                {/* Right (mobile) / Bottom (tablet & desktop) Content */}
                <div className="pl-3 sm:pl-0 relative z-10 flex-1 flex items-center sm:items-end justify-between gap-2 sm:gap-3 min-w-0">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-serif font-bold sm:font-normal text-[#1E231C] sm:text-white mb-0.5 sm:mb-1.5 leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[11px] md:text-xs lg:text-sm text-[#5D6558] sm:text-white/80 font-normal line-clamp-2 leading-relaxed sm:leading-snug">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Circular Arrow Button (→) */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border border-[#DDD7CD] sm:border-white/30 bg-[#FAF8F5] sm:bg-white/20 sm:backdrop-blur-md flex items-center justify-center text-[#414D3C] sm:text-white group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shrink-0 shadow-2xs">
                    <ArrowRightIcon className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
