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
          ? "bg-[#F3F0E8]/95 backdrop-blur-md border-b border-[#E3DED2] py-3.5 shadow-[0_4px_20px_rgba(32,60,53,0.03)]"
          : "bg-transparent border-b border-[#E3DED2]/60 py-5"
      }`}
      aria-label="Site Navigation"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Cursive Subtitle */}
        <a
          href="#top"
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-display font-bold text-2xl tracking-tight text-[#203C35] group-hover:text-[#C65D43] transition-colors">
            {nav.brandName}
          </span>
          <span className="font-cursive text-base text-[#C65D43] -mt-1">
            {t(nav.tagline)}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-6" aria-label="Primary">
            {nav.links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-[#343830]/80 hover:text-[#C65D43] transition-colors relative py-1"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>

          {/* Minimal Rounded Language Switcher */}
          <div
            className="flex items-center border border-[#D4CEBF] rounded-full p-0.5 bg-[#ECE7DC]/80 text-xs ml-2"
            role="group"
            aria-label="Language Selector"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                language === "en"
                  ? "bg-[#203C35] text-[#F3F0E8] shadow-sm"
                  : "text-[#343830]/70 hover:text-[#203C35]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("de")}
              aria-pressed={language === "de"}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                language === "de"
                  ? "bg-[#203C35] text-[#F3F0E8] shadow-sm"
                  : "text-[#343830]/70 hover:text-[#203C35]"
              }`}
            >
              DE
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <div
            className="flex items-center border border-[#D4CEBF] rounded-full p-0.5 bg-[#ECE7DC]"
            role="group"
            aria-label="Language Selector"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                language === "en" ? "bg-[#203C35] text-[#F3F0E8]" : "text-[#343830]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("de")}
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                language === "de" ? "bg-[#203C35] text-[#F3F0E8]" : "text-[#343830]"
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
            className="p-2 text-[#203C35] hover:text-[#C65D43] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#ECE7DC] border-b border-[#D4CEBF] transition-all">
          <div className="flex flex-col gap-3">
            {nav.links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base font-medium text-[#203C35] hover:text-[#C65D43]"
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
