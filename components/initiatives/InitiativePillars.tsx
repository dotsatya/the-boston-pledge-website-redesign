import React from "react";
import Link from "next/link";
import { GradCapIcon, BookOpenIcon, CommunityIcon, ArrowRightIcon, GlobeIcon } from "../common/Icons";

export default function InitiativePillars() {
  const pillars = [
    {
      id: "youth",
      number: "01",
      badge: "Youth Fellowship",
      title: "Youth Development",
      tagline: "Empowering the Next Generation of Global Changemakers",
      desc: "TBP Youth equips high school and university students with real-world leadership, analytical problem-solving skills, and community service frameworks. Through cross-border mentorship, young individuals design and lead sustainable socio-economic projects.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      icon: <GradCapIcon className="w-5 h-5 text-white" />,
      bullets: [
        "Youth fellowship and civic mentorship labs",
        "International student research expeditions and exchanges",
        "Skill-building workshops in high-demand digital and leadership domains",
      ],
    },
    {
      id: "education",
      number: "02",
      badge: "Educator Network",
      title: "Education & Leadership",
      tagline: "Educator's Springboard Program (EdSP)",
      desc: "EdSP provides free, collaborative 90-minute digital roundtables connecting global educators to rethink curriculum, pedagogy, and character-building education for children in both privileged and underprivileged environments.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
      icon: <BookOpenIcon className="w-5 h-5 text-white" />,
      bullets: [
        "Global teacher conferences connecting Boston scholars with rural classrooms",
        "Modern STEM and ethical curriculum guidelines",
        "Digital teaching resources optimized for low-bandwidth environments",
      ],
    },
    {
      id: "community",
      number: "03",
      badge: "350+ Micro-Enterprises",
      title: "Community Development & Enterprise",
      tagline: "Entrepreneurship Springboard Platform (ESP) & Rural Innovation",
      desc: "Conceived on the principle that resource constraints can trigger innovative breakthroughs, ESP incubates micro-enterprises at the base of the pyramid. Rural Innovation Centers (e.g. Lakhikantapur, West Bengal) provide hands-on skill training, ecological farming, and microfinance pathways.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
      icon: <CommunityIcon className="w-5 h-5 text-white" />,
      bullets: [
        "Over 350 micro-enterprises mentored in crafts, agriculture, and local services",
        "Arsenic water remediation and community filter installations",
        "Smartphone-based micro-commerce and digital bookkeeping training",
      ],
    },
  ];

  return (
    <>
      {/* Program Pillars Section */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {pillars.map((item, idx) => (
            <div
              key={item.id}
              id={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column with Floating Badge */}
              <div className={`lg:col-span-6 relative ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xs border border-[#E5DFD4] relative bg-[#EAE6DF] group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Glassmorphic Badge */}
                <div className="absolute -bottom-5 right-6 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-md border border-[#EBE5DB] flex items-center gap-3 z-20">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#414D3C] shrink-0">
                    <GlobeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold font-serif text-[#1E231C] leading-none">
                      {item.badge}
                    </div>
                    <div className="text-[10px] text-[#7A8475] font-medium mt-1 uppercase tracking-wider">
                      Grassroot Impact
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-[11px] font-bold text-[#414D3C] px-2.5 py-0.5 rounded bg-[#EFE9DF] border border-[#DCD5C9]">
                    PILLAR {item.number}
                  </span>
                  <div className="w-8 h-px bg-[#C8C2B5]" />
                  <span className="text-xs font-semibold text-[#5A6455] uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1E231C] leading-tight mb-4">
                  {item.tagline}
                </h3>

                <p className="text-sm sm:text-base text-[#4E5748] leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3E4639]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#414D3C] shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs hover:shadow"
                >
                  <span>Support This Initiative</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-Width Warm Band: Exalted Ideal Quote */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#F3EDE3] border-y border-[#E4DDD2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-5xl font-serif text-[#5E6D58] leading-none mb-6 select-none opacity-90">
            “
          </div>
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif italic text-[#242D21] leading-relaxed mb-6 font-normal">
            Our real awakening takes place when we dedicate our life to an exalted ideal.
          </blockquote>
          <div className="inline-flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-[#BEB6A8]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#414D3C]">
              Swami Vivekananda
            </span>
            <div className="w-10 h-px bg-[#BEB6A8]" />
          </div>
        </div>
      </section>
    </>
  );
}
