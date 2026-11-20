import React from "react";

export default function PastEventsArchive() {
  const pastEvents = [
    {
      title: "18th Annual Boston Pledge Colloquium",
      date: "October 14, 2025",
      location: "Winchester, MA",
      desc: "Convened economists and social innovators to review 5-year grassroots entrepreneurship performance metrics in West Bengal and rural India.",
    },
    {
      title: "Reset India: Book Discussion with Dr. Partha S. Ghosh",
      date: "May 20, 2025",
      location: "Virtual Global Session",
      desc: "Delved into the strategic roadmap for decentralized employment and sustainable rural infrastructure ahead of India's centenary.",
    },
    {
      title: "Global Educators Forum: Post-COVID Pedagogy",
      date: "January 18, 2025",
      location: "Online / Boston-Kolkata Node",
      desc: "Gathered 400+ school teachers to explore adaptive digital curriculum tools in resource-constrained schools.",
    },
  ];

  return (
    <section id="agenda" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h3 className="text-xl sm:text-2xl font-serif text-[#1E231C] mb-8">
          Past Events & Symposium Archives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold text-[#667260]">{event.date}</span>
                <h4 className="text-base font-semibold text-[#1E231C] mt-1 mb-2">
                  {event.title}
                </h4>
                <p className="text-xs text-[#5D6558] leading-relaxed mb-4">{event.desc}</p>
              </div>
              <div className="text-[11px] text-[#7E8879] pt-3 border-t border-[#F0ECE4]">
                📍 {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
