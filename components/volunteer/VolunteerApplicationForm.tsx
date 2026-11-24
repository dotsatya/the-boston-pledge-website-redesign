"use client";

import React, { useState } from "react";
import { volunteerData } from "@/lib/volunteerData";
import { ArrowRightIcon } from "../common/Icons";

export default function VolunteerApplicationForm() {
  const { industries, timeCommitments } = volunteerData;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    honeypot: "",
    name: "",
    company: "",
    industry: "",
    address: "",
    phone: "",
    email: "",
    reason: "",
    dreamProject: "",
    timeCommitment: "5 hrs",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      console.warn("Bot submission detected.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="application-form" className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#5A6455] whitespace-nowrap">
              APPLICATION FORM
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#C8C2B5]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#1E231C] tracking-tight mb-1.5 sm:mb-2">
            Apply to Join The Boston Pledge
          </h2>

          <p className="text-xs sm:text-sm text-[#5C6457] leading-relaxed font-normal">
            Fields marked with an asterisk (<span className="text-red-500">*</span>) are required. Our leadership team will review your application and reach out directly.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-[#ECE7DF] shadow-xs">
            <div className="w-14 h-14 rounded-full bg-[#414D3C] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md">
              ✓
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mb-2">
              Application Received!
            </h3>
            <p className="text-sm text-[#5C6457] max-w-md mx-auto mb-6 leading-relaxed font-normal">
              Thank you, <strong className="text-[#1E231C]">{formData.name}</strong>. We have received your volunteer application with a commitment of{" "}
              <strong className="text-[#414D3C]">{formData.timeCommitment}/week</strong>. Our volunteer coordinator will reach out to you at{" "}
              <span className="text-[#414D3C] font-medium">{formData.email}</span>.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  honeypot: "",
                  name: "",
                  company: "",
                  industry: "",
                  address: "",
                  phone: "",
                  email: "",
                  reason: "",
                  dreamProject: "",
                  timeCommitment: "5 hrs",
                });
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-[#ECE7DF] shadow-xs space-y-4 sm:space-y-6"
          >
            {/* Honeypot field (hidden from view for human visitors) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="leave-this-field-blank">Leave this field blank</label>
              <input
                id="leave-this-field-blank"
                type="text"
                name="leave-this-field-blank"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Row 1: Name, Company, Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Your Name */}
              <div>
                <label htmlFor="applicant-name" className="block text-xs font-semibold text-[#374133] mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="applicant-name"
                  type="text"
                  required
                  placeholder="First &amp; Last Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                />
              </div>

              {/* Present Company (optional) */}
              <div>
                <label htmlFor="applicant-company" className="block text-xs font-semibold text-[#374133] mb-1.5">
                  Present Company <span className="text-[#8C9587] font-normal">(optional)</span>
                </label>
                <input
                  id="applicant-company"
                  type="text"
                  placeholder="Organization or University"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                />
              </div>

              {/* Industry (optional) */}
              <div>
                <label htmlFor="applicant-industry" className="block text-xs font-semibold text-[#374133] mb-1.5">
                  Industry <span className="text-[#8C9587] font-normal">(optional)</span>
                </label>
                <select
                  id="applicant-industry"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                >
                  <option value="">-Select Industry-</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: Address, Phone, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Address */}
              <div>
                <label htmlFor="applicant-address" className="block text-xs font-semibold text-[#374133] mb-1.5">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="applicant-address"
                  type="text"
                  required
                  placeholder="City, State / Country"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="applicant-phone" className="block text-xs font-semibold text-[#374133] mb-1.5">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="applicant-phone"
                  type="tel"
                  required
                  placeholder="+1 (xxx) xxx-xxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                />
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="applicant-email" className="block text-xs font-semibold text-[#374133] mb-1.5">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="applicant-email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                />
              </div>
            </div>

            {/* Row 3: Reason for joining TBP */}
            <div>
              <label htmlFor="applicant-reason" className="block text-xs font-semibold text-[#374133] mb-1.5">
                Please tell us briefly your reason for joining TBP <span className="text-red-500">*</span>
              </label>
              <textarea
                id="applicant-reason"
                required
                rows={3}
                placeholder="What inspires you to pledge your time and intellect with The Boston Pledge?"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all resize-y"
              />
            </div>

            {/* Row 4: Describe your dream project */}
            <div>
              <label htmlFor="applicant-dream-project" className="block text-xs font-semibold text-[#374133] mb-1.5">
                Describe your dream project <span className="text-red-500">*</span>
              </label>
              <textarea
                id="applicant-dream-project"
                required
                rows={3}
                placeholder="What grassroots impact, education model, or community enterprise would you love to champion?"
                value={formData.dreamProject}
                onChange={(e) => setFormData({ ...formData, dreamProject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all resize-y"
              />
            </div>

            {/* Row 5: Time commitment / week (Radio selection) */}
            <div>
              <label className="block text-xs font-semibold text-[#374133] mb-2 sm:mb-2.5">
                How much time / week can you commit? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {timeCommitments.map((time) => (
                  <label
                    key={time}
                    className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                      formData.timeCommitment === time
                        ? "bg-[#414D3C] text-white border-[#414D3C] shadow-2xs"
                        : "bg-[#FAF8F5] text-[#333C2E] border-[#D5CEC2] hover:border-[#414D3C]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeCommitment"
                      value={time}
                      checked={formData.timeCommitment === time}
                      onChange={(e) => setFormData({ ...formData, timeCommitment: e.target.value })}
                      className="accent-[#414D3C] sr-only"
                    />
                    <span>{time}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-2 sm:pt-3">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <span>Submit Volunteer Application</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
