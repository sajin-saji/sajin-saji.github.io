"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = portfolioData.navigation;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#F7F8FA] border-b border-[#E4E7EC] py-3.5"
          : "bg-[#F7F8FA] border-b border-[#E4E7EC]/60 py-5"
      }`}
      aria-label="Site Navigation"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Cursive Subtitle */}
        <a
          href="#top"
          className="group flex flex-col focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <span className="font-display font-bold text-2xl tracking-tight text-[#16324F] group-hover:text-[#2563EB] transition-colors">
            {nav.brandName}
          </span>
          <span className="font-body text-xs text-[#374151] mt-1">
            {t(nav.tagline)}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          <nav className="flex items-center gap-6" aria-label="Primary">
            {nav.links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-[#374151]/80 hover:text-[#2563EB] transition-colors relative py-1"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>

          {/* Minimal Rounded Language Switcher */}
          <div
            className="flex items-center border border-[#D1D5DB] rounded-md p-0.5 bg-[#EEF1F5]/80 text-xs ml-2"
            role="group"
            aria-label="Language Selector"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`px-3 py-1 rounded-md font-semibold transition-all ${
                language === "en"
                  ? "bg-[#16324F] text-[#F7F8FA] shadow-sm"
                  : "text-[#374151]/70 hover:text-[#16324F]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("de")}
              aria-pressed={language === "de"}
              className={`px-3 py-1 rounded-md font-semibold transition-all ${
                language === "de"
                  ? "bg-[#16324F] text-[#F7F8FA] shadow-sm"
                  : "text-[#374151]/70 hover:text-[#16324F]"
              }`}
            >
              DE
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <div
            className="flex items-center border border-[#D1D5DB] rounded-md p-0.5 bg-[#EEF1F5]"
            role="group"
            aria-label="Language Selector"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                language === "en" ? "bg-[#16324F] text-[#F7F8FA]" : "text-[#374151]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("de")}
              className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                language === "de" ? "bg-[#16324F] text-[#F7F8FA]" : "text-[#374151]"
              }`}
            >
              DE
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="p-2 text-[#16324F] hover:text-[#2563EB] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-6 bg-[#EEF1F5] border-b border-[#D1D5DB] transition-all">
          <div className="flex flex-col gap-3">
            {nav.links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base font-medium text-[#16324F] hover:text-[#2563EB]"
              >
                {t(link.label)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
