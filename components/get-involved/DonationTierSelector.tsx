"use client";

import React, { useState } from "react";
import { ArrowRightIcon } from "../common/Icons";

export default function DonationTierSelector() {
  const [frequency, setFrequency] = useState<"monthly" | "once">("monthly");
  const [amount, setAmount] = useState<number>(30);
  const [custom, setCustom] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const tiers = [
    { value: 15, label: "$15", desc: "Supplies water quality testing kits for 5 village tube wells" },
    { value: 30, label: "$30", desc: "The $1/Day Pledge: Sponsors 1 month of youth enterprise coaching" },
    { value: 60, label: "$60", desc: "Equips a rural classroom with digital learning tablets & books" },
    { value: 120, label: "$120", desc: "Seeds a grassroots women's artisan enterprise with startup tools" },
  ];

  const handleSelect = (val: number) => {
    setAmount(val);
    setCustom("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustom(e.target.value);
    const parsed = parseFloat(e.target.value);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="donate" className="py-16 bg-[#FAF8F5] border-b border-[#ECE7DF]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="bg-[#EFE9DF] rounded-3xl p-8 sm:p-12 border border-[#E3DCCE]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4E5B49]">
              501(c)(3) Tax-Deductible Contribution
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mt-2 mb-3">
              Make a Pledge to One Humanity
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6356]">
              100% of public contributions directly seed grassroots initiatives. All our directors and mentors serve on a voluntary pro bono basis.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-[#E2DDD3]">
              <div className="w-12 h-12 rounded-full bg-[#414D3C] text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                ✓
              </div>
              <h4 className="text-xl font-serif text-[#1E231C] mb-2">Thank You, {name || "Supporter"}!</h4>
              <p className="text-xs text-[#5C6457] max-w-md mx-auto mb-6 leading-relaxed">
                Your pledge of <strong>${amount} ({frequency})</strong> has been recorded. An official tax receipt acknowledgement has been sent to <strong>{email}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#414D3C]"
              >
                Make Another Pledge
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Frequency Toggle */}
              <div className="flex bg-white/70 p-1 rounded-full max-w-sm mx-auto border border-[#DDD6CA]">
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`flex-1 py-2 rounded-full text-xs font-medium transition-all ${
                    frequency === "monthly"
                      ? "bg-[#414D3C] text-white shadow-xs"
                      : "text-[#586153] hover:text-[#1E231C]"
                  }`}
                >
                  Monthly ($1/Day Pledge)
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("once")}
                  className={`flex-1 py-2 rounded-full text-xs font-medium transition-all ${
                    frequency === "once"
                      ? "bg-[#414D3C] text-white shadow-xs"
                      : "text-[#586153] hover:text-[#1E231C]"
                  }`}
                >
                  One-Time Gift
                </button>
              </div>

              {/* Preset buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {tiers.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => handleSelect(t.value)}
                    className={`py-3 px-4 rounded-xl text-center border transition-all ${
                      amount === t.value && !custom
                        ? "bg-[#414D3C] text-white border-[#414D3C]"
                        : "bg-white text-[#2B3527] border-[#DDD7CD] hover:border-[#414D3C]"
                    }`}
                  >
                    <div className="text-lg font-serif font-bold">{t.label}</div>
                  </button>
                ))}
              </div>

              {/* Custom input & Impact text */}
              <div className="bg-white/80 p-4 rounded-2xl border border-[#DDD7CD]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-[#4F594A]">Or Custom Amount ($):</span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={custom}
                    onChange={handleCustomChange}
                    className="px-3 py-1.5 rounded-lg border border-[#D5CEC2] text-xs font-medium focus:outline-none w-32"
                  />
                </div>
                <div className="text-xs text-[#5F685B] italic">
                  <strong>Impact:</strong>{" "}
                  {tiers.find((t) => t.value === amount)?.desc ||
                    `Directly funds grassroots training and localized water supplies for $${amount}.`}
                </div>
              </div>

              {/* Donor fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2.5 rounded-xl border border-[#D5CEC2] text-xs bg-white focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email (For 501(c)(3) Receipt)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl border border-[#D5CEC2] text-xs bg-white focus:outline-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs transition-all"
                >
                  <span>Complete Pledge of ${amount} {frequency === "monthly" ? "/ Month" : ""}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
