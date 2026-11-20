import React from "react";

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
    <section className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E9E3D9] shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-48 overflow-hidden bg-[#E9E4DC]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="font-semibold text-[#414D3C] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-[#7C8578]">{item.date}</span>
                  </div>
                  <h3 className="text-base font-serif font-medium text-[#1E231C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5D6558] leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <span className="text-xs font-semibold text-[#414D3C] hover:underline cursor-pointer">
                  Read Full Story →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
