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
    <footer className="py-12 border-t border-[#E3DED2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#343830]/70">
      <div className="flex items-center gap-2">
        <span>{footer.copyright}</span>
        <span>·</span>
        <span>{t(footer.affiliations)}</span>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="inline-flex items-center gap-1.5 text-[#203C35] hover:text-[#C65D43] transition-colors py-1 focus:outline-none"
      >
        <ArrowUp className="w-3.5 h-3.5" />
        <span className="uppercase tracking-wider">Back to top</span>
      </button>
    </footer>
  );
};
