import React from "react";
import Link from "next/link";
import { GradCapIcon, BookOpenIcon, CommunityIcon, ArrowRightIcon } from "../common/Icons";

export default function InitiativePillars() {
  const pillars = [
    {
      id: "youth",
      title: "Youth Development",
      tagline: "Empowering the Next Generation of Global Changemakers",
      desc: "TBP Youth equips high school and university students with real-world leadership, analytical problem-solving skills, and community service frameworks. Through cross-border mentorship, young individuals design and lead sustainable socio-economic projects.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      icon: <GradCapIcon className="w-5 h-5 text-white" />,
      bullets: [
        "Youth fellowship and civic mentorship labs",
        "International student research expeditions and exchanges",
        "Skill-building workshops in high-demand digital and leadership domains",
      ],
    },
    {
      id: "education",
      title: "Education & Leadership",
      tagline: "Educator's Springboard Program (EdSP)",
      desc: "EdSP provides free, collaborative 90-minute digital roundtables connecting global educators to rethink curriculum, pedagogy, and character-building education for children in both privileged and underprivileged environments.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      icon: <BookOpenIcon className="w-5 h-5 text-white" />,
      bullets: [
        "Global teacher conferences connecting Boston scholars with rural classrooms",
        "Modern STEM and ethical curriculum guidelines",
        "Digital teaching resources optimized for low-bandwidth environments",
      ],
    },
    {
      id: "community",
      title: "Community Development & Enterprise",
      tagline: "Entrepreneurship Springboard Platform (ESP) & Rural Innovation",
      desc: "Conceived on the principle that resource constraints can trigger innovative breakthroughs, ESP incubates micro-enterprises at the base of the pyramid. Rural Innovation Centers (e.g. Lakhikantapur, West Bengal) provide hands-on skill training, ecological farming, and microfinance pathways.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      icon: <CommunityIcon className="w-5 h-5 text-white" />,
      bullets: [
        "Over 350 micro-enterprises mentored in crafts, agriculture, and local services",
        "Arsenic water remediation and community filter installations",
        "Smartphone-based micro-commerce and digital bookkeeping training",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {pillars.map((item, idx) => (
          <div
            key={item.id}
            id={item.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xs">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-full bg-[#414D3C] text-white text-xs mb-3">
                {item.icon}
                <span className="font-medium">{item.title}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mb-2">
                {item.tagline}
              </h3>
              <p className="text-sm text-[#575F52] leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="space-y-2.5 mb-8">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E4639]">
                    <span className="text-[#414D3C] font-bold mt-0.5">•</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
              >
                <span>Support This Initiative</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
