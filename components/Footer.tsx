"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const footer = portfolioData.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[#E3DED2] bg-[#ECE7DC]/30 py-10 mt-12" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#343830]/80">
        {/* Left: Copyright & Academic affiliation */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-center sm:text-left">
          <span className="font-semibold text-[#203C35]">{footer.copyright}</span>
          <span className="hidden sm:inline text-[#343830]/40">·</span>
          <span className="text-[#343830]/75">{t(footer.affiliations)}</span>
        </div>

        {/* Right: Aligned Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#203C35] hover:text-[#C65D43] transition-colors py-1 px-2.5 rounded-full hover:bg-[#ECE7DC] focus:outline-none"
        >
          <span className="uppercase tracking-wider">Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
