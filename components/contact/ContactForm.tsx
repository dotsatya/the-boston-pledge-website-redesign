"use client";

import React, { useState } from "react";
import { MailIcon, MapPinIcon, PhoneIcon, ArrowRightIcon, ArrowUpRight } from "../common/Icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    honeypot: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bot honeypot check
    if (formData.honeypot) {
      console.warn("Spam bot submission ignored");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Symmetric 50/50 Balanced Grid with matching stretch alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Contact Details (Symmetric 6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6455]">
                  DIRECT CHANNELS
                </span>
                <div className="w-10 h-px bg-[#C8C2B5]" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1E231C] tracking-tight mb-3">
                How Can We Assist You?
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6457] leading-relaxed font-normal">
                We&apos;re here to help! Reach out with any questions, feedback, or inquiries regarding our grassroots programs, academic forums, or partnerships.
              </p>
            </div>

            <div className="space-y-4">
              {/* Mailing Address Card with direct link to live map */}
              <div className="p-5 rounded-2xl bg-white border border-[#ECE7DF] shadow-xs hover:border-[#D5CEC2] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center shrink-0 text-[#414D3C] mt-0.5">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[11px] font-bold text-[#414D3C] uppercase tracking-wider">
                        Mailing Address
                      </span>
                      <a
                        href="#live-location"
                        className="text-[11px] font-semibold text-[#5A6455] hover:text-[#1E231C] flex items-center gap-1 transition-colors"
                      >
                        <span>View on map</span>
                        <span>↓</span>
                      </a>
                    </div>
                    <div className="text-sm text-[#1E231C] font-medium leading-relaxed">
                      Unit 66, 7 Wainwright Road,<br />
                      Winchester, MA 01890, USA
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Inquiries Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#ECE7DF] shadow-xs hover:border-[#D5CEC2] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center shrink-0 text-[#414D3C] mt-0.5">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-[#414D3C] uppercase tracking-wider mb-0.5">
                      Phone Inquiries
                    </div>
                    <div>
                      <a
                        href="tel:+16175123038"
                        className="text-sm text-[#1E231C] font-medium hover:text-[#414D3C] transition-colors"
                      >
                        +1 617-512-3038
                      </a>
                    </div>
                    <div className="text-[11px] text-[#7A8374] mt-0.5">
                      Monday – Friday, 9:00 AM – 5:00 PM EST
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Inquiries Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#ECE7DF] shadow-xs hover:border-[#D5CEC2] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#DDD6CB] flex items-center justify-center shrink-0 text-[#414D3C] mt-0.5">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-[#414D3C] uppercase tracking-wider mb-0.5">
                      Email Inquiries
                    </div>
                    <div>
                      <a
                        href="mailto:contact@thebostonpledge.org"
                        className="text-sm text-[#1E231C] font-medium hover:text-[#414D3C] transition-colors break-all"
                      >
                        contact@thebostonpledge.org
                      </a>
                    </div>
                    <div className="text-[11px] text-[#7A8374] mt-0.5">
                      Prompt response within 24–48 business hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Visitor Policy & Operating Hours Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F1EB] border border-[#E5DFD4] text-xs text-[#525B4E] leading-relaxed">
                <div className="flex items-center gap-2 font-semibold text-[#1E231C] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#414D3C]" />
                  <span>Office Visits & Consultations</span>
                </div>
                In-person meetings and partner consultations at our Winchester facility are scheduled by advance appointment to accommodate our volunteer directors.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Symmetric 6 Cols) */}
          <div className="lg:col-span-6 flex flex-col">
            {submitted ? (
              <div className="bg-white rounded-3xl p-8 sm:p-10 text-center border border-[#ECE7DF] shadow-xs flex-1 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-[#414D3C] text-white flex items-center justify-center mb-4 text-2xl font-bold shadow-md">
                  ✓
                </div>
                <h3 className="text-2xl font-serif text-[#1E231C] mb-2">Message Received!</h3>
                <p className="text-sm text-[#5C6457] max-w-md mx-auto mb-8 leading-relaxed font-normal">
                  Thank you, <strong className="text-[#1E231C]">{formData.name}</strong>. We have received your message regarding &ldquo;{formData.subject}&rdquo; and will get back to you at <span className="text-[#414D3C] font-medium">{formData.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ honeypot: "", name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-7 sm:p-9 rounded-3xl border border-[#ECE7DF] shadow-xs space-y-5 flex-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-serif text-[#1E231C]">Send Us a Message</h3>
                  <p className="text-xs text-[#7A8374] mt-1">
                    Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
                  </p>
                </div>

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

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#374133] mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#374133] mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#374133] mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex-1 flex flex-col">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#374133] mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="How can we help? Please describe your inquiry or feedback..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full flex-1 px-3.5 py-2.5 rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all resize-y min-h-[100px]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all"
                  >
                    <span>Send Message</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
