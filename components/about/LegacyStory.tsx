import React from "react";

export default function LegacyStory() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-sm h-[320px] sm:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=900&q=80"
              alt="Boston skyline across Charles River"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mb-4">
              Born from Vision and Deep Academic Stewardship
            </h3>
            <p className="text-sm text-[#5B6356] leading-relaxed mb-4">
              Following the 2001 North American Bengali Conference (NABC) in Boston, Massachusetts, renowned strategist and former McKinsey senior partner Dr. Partha S. Ghosh joined forces with distinguished professors and community leaders to answer an urgent question: how can the immense intellectual and financial capability of privileged regions be systematically deployed to empower marginalized people at the base of the socio-economic pyramid?
            </p>
            <p className="text-sm text-[#5B6356] leading-relaxed mb-6">
              Unlike traditional charities that provide one-time relief, The Boston Pledge acts as an incubator of permanent self-reliance. Inspired by Swami Vivekananda&apos;s teaching—<em>&quot;Our real awakening takes place when we dedicate our life to an exalted ideal&quot;</em>—TBP mobilizes volunteer expertise across corporate, academic, and civic disciplines.
            </p>

            <blockquote className="p-4 rounded-xl bg-[#EFE9DF] border-l-4 border-[#414D3C] text-xs sm:text-sm italic text-[#394234] leading-relaxed">
              &quot;With our egos outside and the divine within, the possibilities are limitless... By serving society, we essentially serve ourselves to uncover the better person within us.&quot;
              <span className="block mt-1 font-semibold not-italic text-[#1E231C]">
                — Dr. Partha S. Ghosh, Founder
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
