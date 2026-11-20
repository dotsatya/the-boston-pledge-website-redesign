import React from "react";
import { MapPinIcon, ArrowUpRight } from "../common/Icons";

export default function ContactMap() {
  const mapAddress = "7 Wainwright Rd Unit 66, Winchester, MA 01890";
  const encodedAddress = encodeURIComponent(mapAddress);
  const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="live-location" className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5] border-t border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                LIVE LOCATION
              </span>
              <div className="w-10 h-px bg-[#C8C2B5]" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight mb-2">
              Our Headquarters Location
            </h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5C6457]">
              <MapPinIcon className="w-4 h-4 text-[#414D3C] shrink-0" />
              <span>7 Wainwright Rd Unit 66, Winchester, MA 01890, USA</span>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <p className="text-xs sm:text-sm text-[#5C6457] max-w-md font-normal leading-relaxed sm:text-right">
              Conveniently situated in Winchester, MA — approximately 20 minutes north of downtown Boston and Cambridge. Visitors welcomed by appointment.
            </p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Live Interactive Map Card - Unobstructed view of Google Maps with native controls */}
        <div className="w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden border border-[#ECE7DF] shadow-xs bg-[#EAE6DF]">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Boston Pledge Headquarters Live Location"
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
