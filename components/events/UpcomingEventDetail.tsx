import React from "react";
import Link from "next/link";
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from "../common/Icons";

export default function UpcomingEventDetail() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE9DF] rounded-3xl p-8 sm:p-12 border border-[#E3DCCE]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold text-[#556050] uppercase tracking-wider mb-2">
                <span>Featured Upcoming Event</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E231C] mb-3">
                Renaissance 2.0: Reimagining Leadership for a Changing World
              </h2>
              <p className="text-sm text-[#576052] leading-relaxed mb-6">
                A landmark international assembly exploring the convergence of ethical leadership, artificial intelligence, bottom-up entrepreneurship, and public health at the base of the socio-economic pyramid.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-[#3A4535] mb-8">
                <div className="flex items-center gap-2 p-3 bg-white/70 rounded-xl">
                  <CalendarIcon className="w-4 h-4 text-[#414D3C]" />
                  <span>Saturday, March 21, 2026</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/70 rounded-xl">
                  <MapPinIcon className="w-4 h-4 text-[#414D3C]" />
                  <span>Boston, MA & Global Virtual Broadcast</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
                >
                  <span>Register for the Event</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#agenda"
                  className="inline-flex items-center px-6 py-3 rounded-full text-xs font-medium text-[#2C3427] bg-white/80 hover:bg-white border border-[#D0C9BD] transition-all"
                >
                  View Full Agenda
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-sm h-72 sm:h-80">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
                alt="Renaissance 2.0 keynote stage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
