"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { GlobeIcon, CaretDownIcon, CloseIcon, SearchIcon } from "./Icons";
import { GLOBAL_LANGUAGES, LanguageOption } from "@/lib/languages";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: unknown;
            autoDisplay?: boolean;
          },
          elementId: string,
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslate({
  className = "",
}: {
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [searchFilter, setSearchFilter] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize Google Translate Script
  useEffect(() => {
    // Check existing cookie for active language
    const readActiveCookie = () => {
      const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]+)/);
      if (match) {
        const parts = decodeURIComponent(match[1]).split("/");
        const code = parts[parts.length - 1];
        if (code) {
          setCurrentLang(code);
        }
      }
    };
    readActiveCookie();

    // Define global callback for Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              autoDisplay: false,
            },
            "google_translate_element",
          );
        } catch (e) {
          console.warn("Google Translate init error:", e);
        }
      }
    };

    // Load external Google Translate script if not present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.warn("Google Translate script failed to load");
      };
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      const el = document.getElementById("google_translate_element");
      if (el && !el.hasChildNodes() && window.googleTranslateElementInit) {
        window.googleTranslateElementInit();
      }
    }
  }, []);

  // Close on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Trigger language change
  const handleSelectLanguage = (langCode: string) => {
    const hostname = window.location.hostname;
    const cookieValue = `/en/${langCode}`;

    // Set cookie on domain and path
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    document.cookie = `googtrans=${cookieValue}; domain=${hostname}; path=/;`;
    if (hostname.includes(".")) {
      document.cookie = `googtrans=${cookieValue}; domain=.${hostname}; path=/;`;
    }

    // Try finding the Google combo select element
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = langCode;
      combo.dispatchEvent(new Event("change"));
    } else {
      // Reload page to let Google Translate initialize with the new cookie
      window.location.reload();
    }

    setCurrentLang(langCode);
    setIsOpen(false);
  };

  // Reset back to English
  const handleResetToEnglish = () => {
    const hostname = window.location.hostname;
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${hostname}; path=/;`;
    if (hostname.includes(".")) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${hostname}; path=/;`;
    }

    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = "en";
      combo.dispatchEvent(new Event("change"));
    }
    setCurrentLang("en");
    setIsOpen(false);
    window.location.reload();
  };

  const activeLanguageObj = GLOBAL_LANGUAGES.find(
    (l) => l.code === currentLang,
  );

  const filteredLanguages = useMemo(() => {
    if (!searchFilter.trim()) return GLOBAL_LANGUAGES;
    const q = searchFilter.toLowerCase().trim();
    return GLOBAL_LANGUAGES.filter(
      (lang) =>
        lang.name.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q),
    );
  }, [searchFilter]);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Change language via Google Translate"
        className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
          currentLang !== "en"
            ? "bg-[#414D3C] text-white shadow-xs hover:bg-[#323D2E]"
            : "bg-white text-[#2F372C] border border-[#DDD7CD] hover:border-[#414D3C] hover:bg-[#FAF8F5] shadow-2xs"
        }`}
      >
        <span className="flex items-center gap-1.5">
          <GlobeIcon
            className={`w-3.5 h-3.5 ${
              currentLang !== "en" ? "text-white" : "text-[#414D3C]"
            }`}
          />
          <span className="hidden xs:inline-block truncate max-w-[75px] sm:max-w-[110px]">
            {activeLanguageObj ? activeLanguageObj.nativeName : "Language"}
          </span>
          <span className="xs:hidden text-[11px] font-bold">
            {currentLang.toUpperCase()}
          </span>
        </span>
        <CaretDownIcon
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          } ${currentLang !== "en" ? "text-white/80" : "text-[#7A8475]"}`}
        />
      </button>

      {/* MOBILE BACKDROP OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* DROPDOWN / MODAL CARD */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 w-auto sm:w-[340px] z-50 bg-white rounded-2xl p-4 shadow-2xl border border-[#ECE7DF] animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE1] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#DDD7CD] flex items-center justify-center text-[#414D3C]">
                <GlobeIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1E231C]">
                  Select Language
                </h4>
                <p className="text-[10px] text-[#7A8475]">
                  Translate The Boston Pledge
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full text-[#7A8475] hover:text-[#1E231C] hover:bg-[#FAF8F5] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close language selector"
            >
              <CloseIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Global Search Input */}
          <div className="relative mb-2.5">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#7A8475]">
              <SearchIcon className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              placeholder="Search all global languages..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-8 pr-7 py-2 text-xs rounded-xl border border-[#D5CEC2] bg-[#FAF8F5] text-[#1E231C] placeholder:text-[#9EA898] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#414D3C]"
            />
            {searchFilter && (
              <button
                type="button"
                onClick={() => setSearchFilter("")}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-xs text-[#7A8475] hover:text-[#1E231C]"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Languages Status Counter */}
          <div className="flex items-center justify-between text-[10px] text-[#7A8475] mb-2 px-1">
            <span>
              {searchFilter
                ? `${filteredLanguages.length} ${
                    filteredLanguages.length === 1 ? "language" : "languages"
                  } found`
                : "All Global Languages"}
            </span>
            <span className="text-[#8F9A8A]">
              {GLOBAL_LANGUAGES.length} supported
            </span>
          </div>

          {/* Scrollable Global Languages List */}
          <div className="max-h-[250px] sm:max-h-[280px] overflow-y-auto pr-1 space-y-1 mb-2 scrollbar-thin">
            {filteredLanguages.length === 0 ? (
              <div className="py-6 text-center text-xs text-[#7A8475]">
                No language found matching &ldquo;{searchFilter}&rdquo;
              </div>
            ) : (
              filteredLanguages.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#414D3C] text-white font-semibold"
                        : "text-[#2F372C] hover:bg-[#FAF8F5] hover:text-[#181E16]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-medium">{lang.nativeName}</span>
                      <span
                        className={`text-[10px] ${
                          isActive ? "text-white/70" : "text-[#7A8374]"
                        }`}
                      >
                        ({lang.name})
                      </span>
                    </span>
                    {isActive && (
                      <span className="text-xs font-bold text-white">✓</span>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Hidden Google Translate Mount (Kept in DOM for script initialization) */}
          <div
            id="google_translate_element"
            className="opacity-0 pointer-events-none absolute -z-10 h-0 w-0 overflow-hidden"
            aria-hidden="true"
          />

          {/* Reset button if translated */}
          {currentLang !== "en" && (
            <div className="mt-2.5 pt-2 border-t border-[#F0EBE1] flex items-center justify-between text-[11px]">
              <span className="text-[#7A8475]">
                Active:{" "}
                <strong className="text-[#1E231C]">
                  {activeLanguageObj?.name || currentLang}
                </strong>
              </span>
              <button
                type="button"
                onClick={handleResetToEnglish}
                className="font-semibold text-[#414D3C] hover:underline cursor-pointer"
              >
                Reset to English
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
