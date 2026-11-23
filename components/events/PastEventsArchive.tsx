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
    <section id="agenda" className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
              ARCHIVES & PROCEEDINGS
            </span>
            <div className="w-10 h-px bg-[#C8C2B5]" />
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight">
            Past Events & Symposium Archives
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#ECE7DF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#5A6455]">{event.date}</span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-[#1E231C] mt-2 mb-2 leading-snug">
                  {event.title}
                </h4>
                <p className="text-xs text-[#5D6558] leading-relaxed mb-4">{event.desc}</p>
              </div>
              <div className="text-[11px] text-[#7E8879] pt-4 border-t border-[#F5F1EA] font-medium">
                📍 {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
