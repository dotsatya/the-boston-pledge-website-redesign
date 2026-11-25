"use client";

import React, { useState } from "react";
import { ArrowRight } from "pulsoicon-react";

export default function DonateForm() {
  const [selectedTier, setSelectedTier] = useState<number | "custom">(30);
  const [customAmount, setCustomAmount] = useState<string>("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    additionalNote: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  // Calculate actual donation amount
  const actualAmount =
    selectedTier === "custom"
      ? parseFloat(customAmount) || 0
      : selectedTier;

  const handleTierClick = (val: number) => {
    setSelectedTier(val);
    setCustomAmount("");
  };

  const handleCustomFocus = () => {
    setSelectedTier("custom");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (actualAmount <= 0) {
      alert("Please select or enter a valid donation amount.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="donate-form" className="pt-2 sm:pt-4 pb-6 sm:pb-8 lg:pb-10 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 text-center border border-[#ECE7DF] shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#414D3C] text-white flex items-center justify-center mx-auto mb-5 text-2xl font-bold shadow-md">
              ✓
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mb-2">
              Thank You for Your Generosity, {formData.firstName}!
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6457] max-w-md mx-auto mb-6 leading-relaxed font-normal">
              Your contribution of{" "}
              <strong className="text-[#1E231C] text-base">
                ${actualAmount.toFixed(2)}
              </strong>{" "}
              has been recorded. An official 501(c)(3) tax-deductible receipt has been dispatched to{" "}
              <span className="text-[#414D3C] font-semibold">{formData.email}</span>.
            </p>
            <div className="p-4 rounded-2xl bg-[#F5F1EB] border border-[#E5DFD4] max-w-sm mx-auto mb-8 text-xs text-[#555E50] text-left">
              <div className="font-semibold text-[#1E231C] mb-1">Tax Exemption Notice:</div>
              The Boston Pledge is an exempt 501(c)(3) organization. Your gift is tax-deductible to the fullest extent permitted by U.S. law.
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  address: "",
                  additionalNote: "",
                });
                setSelectedTier(30);
                setCustomAmount("");
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs cursor-pointer"
            >
              Make Another Donation
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-3.5 sm:p-8 lg:p-12 rounded-xl sm:rounded-3xl border border-[#ECE7DF] shadow-xs space-y-4 sm:space-y-8"
          >
            {/* 1. YOUR DONATION SECTION */}
            <div>
              <div className="mb-3 sm:mb-5">
                <h2 className="text-lg sm:text-2xl font-serif text-[#1E231C] tracking-tight">
                  Your Donation
                </h2>
                <p className="text-xs text-[#7A8374] mt-0.5">
                  Select a contribution amount or enter a custom sum.
                </p>
              </div>

              {/* 4 Preset Amount Tiles: $10, $20, $30, $40 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {/* $10.00 */}
                <button
                  type="button"
                  onClick={() => handleTierClick(10)}
                  className={`p-2.5 sm:p-5 rounded-xl sm:rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedTier === 10
                      ? "bg-[#414D3C] text-white border-[#414D3C] shadow-xs scale-[1.02]"
                      : "bg-[#FAF8F5] text-[#1E231C] border-[#DDD7CD] hover:border-[#414D3C] hover:bg-white"
                  }`}
                >
                  <div className="text-base sm:text-2xl font-serif font-bold">$10.00</div>
                </button>

                {/* $20.00 */}
                <button
                  type="button"
                  onClick={() => handleTierClick(20)}
                  className={`p-2.5 sm:p-5 rounded-xl sm:rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedTier === 20
                      ? "bg-[#414D3C] text-white border-[#414D3C] shadow-xs scale-[1.02]"
                      : "bg-[#FAF8F5] text-[#1E231C] border-[#DDD7CD] hover:border-[#414D3C] hover:bg-white"
                  }`}
                >
                  <div className="text-base sm:text-2xl font-serif font-bold">$20.00</div>
                </button>

                {/* $30.00 */}
                <button
                  type="button"
                  onClick={() => handleTierClick(30)}
                  className={`p-2.5 sm:p-5 rounded-xl sm:rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedTier === 30
                      ? "bg-[#414D3C] text-white border-[#414D3C] shadow-xs scale-[1.02]"
                      : "bg-[#FAF8F5] text-[#1E231C] border-[#DDD7CD] hover:border-[#414D3C] hover:bg-white"
                  }`}
                >
                  <div className="text-base sm:text-2xl font-serif font-bold">$30.00</div>
                </button>

                {/* $40.00 */}
                <button
                  type="button"
                  onClick={() => handleTierClick(40)}
                  className={`p-2.5 sm:p-5 rounded-xl sm:rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedTier === 40
                      ? "bg-[#414D3C] text-white border-[#414D3C] shadow-xs scale-[1.02]"
                      : "bg-[#FAF8F5] text-[#1E231C] border-[#DDD7CD] hover:border-[#414D3C] hover:bg-white"
                  }`}
                >
                  <div className="text-base sm:text-2xl font-serif font-bold">$40.00</div>
                </button>
              </div>

              {/* Dedicated Custom Donation Input Below */}
              <div className="mt-2.5 sm:mt-4 pt-1 sm:pt-2">
                <label
                  htmlFor="custom-donation-amount"
                  className="block text-xs font-semibold text-[#374133] mb-1 sm:mb-1.5"
                >
                  Or enter a custom donation amount
                </label>
                <div
                  onClick={handleCustomFocus}
                  className={`flex items-center px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border transition-all cursor-text overflow-hidden ${
                    selectedTier === "custom"
                      ? "bg-white border-[#414D3C] ring-2 ring-[#414D3C]/20 shadow-xs"
                      : "bg-[#FAF8F5] border-[#DDD7CD] hover:border-[#414D3C] focus-within:bg-white focus-within:border-[#414D3C]"
                  }`}
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-[#414D3C] mr-2 shrink-0">
                    $
                  </span>
                  <input
                    id="custom-donation-amount"
                    type="number"
                    min="1"
                    step="any"
                    placeholder="Enter custom amount..."
                    value={customAmount}
                    onFocus={handleCustomFocus}
                    onChange={(e) => {
                      setSelectedTier("custom");
                      setCustomAmount(e.target.value);
                    }}
                    className="w-full min-w-0 flex-1 text-sm sm:text-base font-serif font-semibold text-[#1E231C] bg-transparent focus:outline-none placeholder:text-[#9EA898] placeholder:font-sans placeholder:font-normal placeholder:text-xs sm:placeholder:text-sm"
                  />
                  {selectedTier === "custom" && customAmount && (
                    <span className="text-[10px] sm:text-xs font-medium text-[#414D3C] shrink-0 bg-[#E8EFE5] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full ml-1">
                      Custom Selected
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 2. DETAILS SECTION */}
            <div className="border-t border-[#ECE7DF] pt-4 sm:pt-8">
              <h2 className="text-lg sm:text-2xl font-serif text-[#1E231C] tracking-tight mb-0.5 sm:mb-1">
                Details
              </h2>
              <p className="text-xs text-[#7A8374] mb-3 sm:mb-6">
                Your contact information is required for issuing an official 501(c)(3) tax receipt.
              </p>

              <div className="space-y-2.5 sm:space-y-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                  <div>
                    <label htmlFor="donor-first-name" className="block text-xs font-semibold text-[#374133] mb-1 sm:mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="donor-first-name"
                      type="text"
                      required
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="donor-last-name" className="block text-xs font-semibold text-[#374133] mb-1 sm:mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="donor-last-name"
                      type="text"
                      required
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                    />
                  </div>
                </div>

                {/* Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                  <div>
                    <label htmlFor="donor-email" className="block text-xs font-semibold text-[#374133] mb-1 sm:mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="donor-email"
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="donor-phone" className="block text-xs font-semibold text-[#374133] mb-1 sm:mb-1.5">
                      Phone Number <span className="text-[#8C9587] font-normal">(optional)</span>
                    </label>
                    <input
                      id="donor-phone"
                      type="tel"
                      placeholder="+1 (xxx) xxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="donor-address" className="block text-xs font-semibold text-[#374133] mb-1 sm:mb-1.5">
                    Address <span className="text-[#8C9587] font-normal">(optional)</span>
                  </label>
                  <input
                    id="donor-address"
                    type="text"
                    placeholder="Street, City, State / Country, Postal Code"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all"
                  />
                </div>

                {/* Additional Note */}
                <div>
                  <label htmlFor="donor-note" className="block text-xs font-semibold text-[#374133] mb-1 sm:mb-1.5">
                    Additional Note <span className="text-[#8C9587] font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="donor-note"
                    rows={3}
                    placeholder="Leave a message of encouragement, dedicate your donation in honor of someone, or specify a project preference..."
                    value={formData.additionalNote}
                    onChange={(e) => setFormData({ ...formData, additionalNote: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#D5CEC2] bg-[#FAF8F5]/50 text-xs sm:text-sm text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#414D3C] transition-all resize-y"
                  />
                </div>
              </div>
            </div>

            {/* Submit Donation Button */}
            <div className="pt-1 sm:pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-9 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <span>
                  Donate{actualAmount > 0 ? ` $${actualAmount.toFixed(2)}` : ""}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
