"use client";

import React, { useState } from "react";
import { ArrowRightIcon } from "../common/Icons";

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Youth & Education Mentor",
    background: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
            VOLUNTEER & MENTORSHIP
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mt-2 mb-2">
            Contribute Your Intellectual Capital
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6356]">
            Whether you are an educator, entrepreneur, doctor, engineer, or student, your guidance can unlock opportunity.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-[#E2DDD3]">
            <div className="w-12 h-12 rounded-full bg-[#414D3C] text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              ✓
            </div>
            <h4 className="text-xl font-serif text-[#1E231C] mb-2">Thank You, {formData.name}!</h4>
            <p className="text-xs text-[#5C6457] max-w-md mx-auto mb-6">
              Our volunteer coordinator will review your application for <strong>{formData.role}</strong> and reach out to <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#414D3C]"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-[#E8E2D8] space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#485342] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="First & Last Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] text-xs focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#485342] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] text-xs focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#485342] mb-1">Area of Contribution</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] text-xs focus:outline-none bg-white"
              >
                <option value="Youth & Education Mentor">Youth & Education Mentor (EdSP / Youth)</option>
                <option value="Grassroots Entrepreneurship Advisor">Grassroots Entrepreneurship Advisor (ESP)</option>
                <option value="Rural Field Volunteer">Rural Field & Innovation Volunteer</option>
                <option value="Water & Environmental Specialist">Water & Ecological Health Specialist</option>
                <option value="Academic & Research Contributor">Academic & Research Contributor</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#485342] mb-1">
                Tell Us Briefly About Your Background & Skills
              </label>
              <textarea
                rows={3}
                required
                placeholder="Your university, organization, or domain of expertise..."
                value={formData.background}
                onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEC2] text-xs focus:outline-none"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
              >
                <span>Submit Volunteer Application</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
