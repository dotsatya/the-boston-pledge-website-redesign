"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import GoogleTranslate from "./GoogleTranslate";
import { ArrowRightIcon, CaretDownIcon, MenuIcon, CloseIcon } from "./Icons";

type SubItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  dropdown?: SubItem[];
};

export default function Navbar() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    "About Us": false,
    "Ways To Help": false,
  });

  // Smart Hide-on-Scroll-Down, Show-on-Scroll-Up State
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    // Initialize to current scroll position
    lastScrollY.current =
      typeof window !== "undefined"
        ? window.pageYOffset || document.documentElement.scrollTop || 0
        : 0;

    const updateHeader = () => {
      const currentScrollY = Math.max(
        0,
        window.pageYOffset || document.documentElement.scrollTop || 0
      );

      // Subtle shadow when scrolled past top
      setIsScrolled(currentScrollY > 15);

      // Keep header visible if mobile drawer is currently open
      if (mobileOpen) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        ticking = false;
        return;
      }

      // Always keep header visible near the top of the page (within 80px)
      if (currentScrollY <= 80) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        ticking = false;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;

      // Require accumulated delta of at least 8px before switching
      if (Math.abs(diff) < 8) {
        ticking = false;
        return; // Keep accumulating
      }

      if (diff > 0) {
        // Scrolling DOWN -> smoothly hide header
        setVisible(false);
        setActiveDropdown(null);
      } else {
        // Scrolling UP -> reveal header immediately
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  // Reset header visibility and close menus on route changes
  useEffect(() => {
    setVisible(true);
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const navRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track browser window hash for hash-based anchor navigation
  useEffect(() => {
    const updateHash = () => {
      if (typeof window !== "undefined") {
        setCurrentHash(window.location.hash || "");
      }
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Navigation Links definition
  const navLinks: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      dropdown: [
        { label: "Overview", href: "/about" },
        { label: "Vision & Mission", href: "/about/vision-mission" },
        { label: "Our Team", href: "/about/our-team" },
        { label: "Our Frames", href: "/about/media" },
        { label: "Constitution", href: "/about/constitution" },
        { label: "Reflections", href: "/about/reflections" },
      ],
    },
    { label: "Initiatives", href: "/initiatives" },
    { label: "Events", href: "/events" },
    {
      label: "Ways To Help",
      dropdown: [
        { label: "Be A Volunteer", href: "/be-a-volunteer" },
        { label: "Donate", href: "/donate" },
      ],
    },
    { label: "Contact Us", href: "/contact" },
  ];

  // Helper to determine if a top-level link or dropdown parent is active
  const isItemActive = (item: NavItem): boolean => {
    if (item.label === "Home") {
      return pathname === "/";
    }
    if (item.href) {
      if (item.href === "/") return pathname === "/";
      return pathname === item.href || pathname.startsWith(item.href + "/");
    }
    if (item.dropdown) {
      return item.dropdown.some((sub) => {
        const subPath = sub.href.split("#")[0];
        if (subPath === "/") return pathname === "/";
        return pathname === subPath || pathname.startsWith(subPath + "/");
      });
    }
    return false;
  };

  // Helper to determine if a sub-item in a dropdown is currently active
  const isSubItemActive = (subHref: string): boolean => {
    const [subPath, subHash] = subHref.split("#");
    const isPathMatch =
      subPath === "/" || subPath === "/about"
        ? pathname === subPath
        : pathname === subPath || pathname.startsWith(subPath + "/");

    if (!isPathMatch) return false;

    if (subHash) {
      return currentHash === `#${subHash}`;
    }
    // If subHref has no hash, it's active when the pathname matches and no hash is selected
    return !currentHash;
  };

  // Auto-expand active mobile accordion dropdown when navigating
  useEffect(() => {
    navLinks.forEach((item) => {
      if (item.dropdown && isItemActive(item)) {
        setMobileExpanded((prev) => ({
          ...prev,
          [item.label]: true,
        }));
      }
    });
  }, [pathname]);

  // Close desktop dropdown on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E9E4DC] transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "shadow-sm" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" ref={navRef}>
        {/* Logo */}
        <Logo />

        {/* Center Nav Links with Desktop Dropdowns */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((item) => {
            const active = isItemActive(item);

            if (item.dropdown) {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    className={`inline-flex items-center gap-1.5 text-xs xl:text-sm font-medium py-1 transition-colors relative ${
                      active || isOpen
                        ? "text-[#181E16] font-semibold"
                        : "text-[#2F372C] hover:text-[#181E16]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <CaretDownIcon
                      className={`w-3 h-3 transition-transform duration-200 ${
                        active ? "text-[#414D3C]" : "text-[#556050]"
                      } ${isOpen ? "rotate-180" : ""}`}
                    />

                    {/* Active Underline Indicator Bar */}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#414D3C] rounded-full transition-all duration-300 ${
                        active
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                      }`}
                    />
                  </button>

                  {/* Smooth Desktop Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 origin-top-left ${
                      isOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 -translate-y-1 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white/98 backdrop-blur-md rounded-2xl p-2 min-w-[220px] shadow-xl border border-[#ECE7DF]">
                      {item.dropdown.map((sub) => {
                        const isSubActive = isSubItemActive(sub.href);
                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => {
                              setActiveDropdown(null);
                              if (sub.href.includes("#")) {
                                setCurrentHash(sub.href.slice(sub.href.indexOf("#")));
                              } else {
                                setCurrentHash("");
                              }
                            }}
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs xl:text-sm transition-all group ${
                              isSubActive
                                ? "bg-[#414D3C]/10 text-[#414D3C] font-semibold"
                                : "text-[#2F372C] hover:text-[#181E16] hover:bg-[#FAF8F5] font-medium"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {isSubActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#414D3C] shrink-0" />
                              )}
                              <span>{sub.label}</span>
                            </span>
                            <span
                              className={`text-xs transition-all ${
                                isSubActive
                                  ? "text-[#414D3C] opacity-100 translate-x-0 font-bold"
                                  : "text-[#7A8475] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                              }`}
                            >
                              →
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || "/"}
                className={`text-xs xl:text-sm font-medium transition-colors py-2 relative group ${
                  active
                    ? "text-[#181E16] font-semibold"
                    : "text-[#2F372C] hover:text-[#181E16]"
                }`}
              >
                <span>{item.label}</span>

                {/* Active Underline Indicator Bar */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#414D3C] rounded-full transition-all duration-300 ${
                    active
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions: Google Translate + Donate + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <GoogleTranslate />

          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 xl:px-6 py-2 sm:py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs hover:shadow transition-all"
          >
            <span>Donate</span>
            <ArrowRightIcon className="w-3.5 h-3.5 hidden sm:inline-block" />
          </Link>

          {/* Tablet / Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-[#2F372C] hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Accordion Submenus */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-t border-[#E9E4DC] px-6 py-5 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const active = isItemActive(item);

              if (item.dropdown) {
                const isExpanded = mobileExpanded[item.label];
                return (
                  <div key={item.label} className="border-b border-[#EFECE6] py-1">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.label)}
                      className={`w-full py-2.5 px-3 rounded-xl text-base flex items-center justify-between transition-all ${
                        active
                          ? "bg-[#414D3C]/10 text-[#181E16] font-semibold border-l-4 border-[#414D3C]"
                          : "text-[#2F372C] hover:text-[#181E16] font-medium"
                      }`}
                    >
                      <span>{item.label}</span>
                      <CaretDownIcon
                        className={`w-4 h-4 text-[#687363] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-4 border-l-2 border-[#D5CEC2] my-1.5 space-y-1">
                        {item.dropdown.map((sub) => {
                          const isSubActive = isSubItemActive(sub.href);
                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => {
                                setMobileOpen(false);
                                if (sub.href.includes("#")) {
                                  setCurrentHash(sub.href.slice(sub.href.indexOf("#")));
                                } else {
                                  setCurrentHash("");
                                }
                              }}
                              className={`flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-all ${
                                isSubActive
                                  ? "bg-[#414D3C]/15 text-[#181E16] font-semibold border-l-2 border-[#414D3C]"
                                  : "text-[#4E584A] hover:text-[#1E231C]"
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {isSubActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#414D3C] shrink-0" />
                                )}
                                <span>{sub.label}</span>
                              </span>
                              {isSubActive && (
                                <span className="text-xs text-[#414D3C] font-bold">✓</span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  onClick={() => {
                    setMobileOpen(false);
                    setCurrentHash("");
                  }}
                  className={`py-2.5 px-3 rounded-xl text-base flex items-center justify-between transition-all ${
                    active
                      ? "bg-[#414D3C]/10 text-[#181E16] font-semibold border-l-4 border-[#414D3C]"
                      : "text-[#2F372C] hover:text-[#181E16] border-b border-[#EFECE6] font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`text-xs ${
                      active ? "text-[#414D3C] font-bold" : "text-[#8FA587]"
                    }`}
                  >
                    →
                  </span>
                </Link>
              );
            })}

            <div className="pt-4">
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] shadow-xs"
              >
                <span>Donate</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
