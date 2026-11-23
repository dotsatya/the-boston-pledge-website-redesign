import React from "react";
import { ArrowRightIcon } from "../common/Icons";

export default function ArticlesGrid() {
  const articles = [
    {
      id: "renaissance",
      date: "Nov 5, 2025",
      title: "The Boston Pledge at Renaissance 2.0",
      category: "Conferences",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=700&q=80",
      excerpt: "Highlights from the opening panel discussing how decentralized technology and ethical stewardship can reshape emerging economies.",
    },
    {
      id: "education",
      date: "Oct 18, 2025",
      title: "Advancing Education Across Communities",
      category: "Field Stories",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
      excerpt: "How our Educator's Springboard Program is equipping rural teachers with innovative toolkits for classroom engagement.",
    },
    {
      id: "future",
      date: "Sep 12, 2025",
      title: "Building a More Inclusive Future",
      category: "Thought Leadership",
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=700&q=80",
      excerpt: "Reflections from Dr. Partha S. Ghosh on bridging privileged capital with grassroots micro-entrepreneurs.",
    },
    {
      id: "water",
      date: "Jun 24, 2025",
      title: "Safe Drinking Water in the Delta: Arsenic Remediation Milestones",
      category: "Public Health",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80",
      excerpt: "Over 25,000 villagers in West Bengal now have continuous access to safe groundwater thanks to community-managed filtration nodes.",
    },
    {
      id: "book",
      date: "Apr 10, 2025",
      title: "'India Towards 100: A Call for Reset' Book Release",
      category: "Publications",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=700&q=80",
      excerpt: "Dr. Partha Ghosh presents a strategic paradigm for sustainable growth, human-centric governance, and mass entrepreneurship.",
    },
    {
      id: "youth",
      date: "Feb 15, 2025",
      title: "Youth Fellowship Cohort Celebrates Graduation",
      category: "Youth",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
      excerpt: "45 high school and university fellows present their community action solutions after six months of cross-border mentorship.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DF] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group p-1.5 sm:p-0"
            >
              <div className="flex flex-row sm:flex-col h-full">
                {/* Left on mobile, Top on desktop */}
                <div className="w-24 sm:w-full h-24 sm:h-44 shrink-0 overflow-hidden rounded-lg sm:rounded-none bg-[#E9E4DC] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:right-2.5 sm:left-auto">
                    <span className="px-1.5 py-0.2 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#242D21]/80 text-white backdrop-blur-xs shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Right on mobile, Bottom on desktop */}
                <div className="pl-2.5 sm:p-5 flex-1 flex flex-col justify-between min-w-0 py-0.5 sm:py-5">
                  <div>
                    <div className="text-[9px] sm:text-xs text-[#7A8475] font-medium mb-0.5 sm:mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xs sm:text-base lg:text-lg font-serif font-bold text-[#1E231C] mb-1 sm:mb-2 group-hover:text-[#414D3C] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="hidden sm:block text-xs text-[#5D6558] leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Mobile inline link */}
                  <div className="pt-1.5 sm:hidden flex items-center justify-between border-t border-[#F5F1EA]/60">
                    <span className="text-[9px] text-[#7A8374]">
                      {item.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#414D3C]">
                      <span>Read Story</span>
                      <ArrowRightIcon className="w-2 h-2" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Footer */}
              <div className="hidden sm:flex px-5 py-3.5 border-t border-[#F5F1EA] items-center justify-between">
                <span className="text-xs font-semibold text-[#414D3C] group-hover:underline cursor-pointer">
                  Read Full Story
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D5CFBF] bg-white flex items-center justify-center text-[#414D3C] group-hover:bg-[#414D3C] group-hover:text-white group-hover:border-[#414D3C] transition-all shadow-2xs shrink-0">
                  <ArrowRightIcon className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
