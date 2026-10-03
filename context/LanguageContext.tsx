"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, BilingualText } from "@/data/portfolioData";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: BilingualText | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("sajin_portfolio_lang") as Language;
      if (saved === "en" || saved === "de") {
        setLanguageState(saved);
        return;
      }
      if (window.location.hash === "#de") {
        setLanguageState("de");
        return;
      }
      const browserLang = (navigator.language || "").slice(0, 2);
      if (browserLang === "de") {
        setLanguageState("de");
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("sajin_portfolio_lang", lang);
    } catch {
      // ignore
    }
  };

  const t = (text: BilingualText | string): string => {
    if (typeof text === "string") return text;
    if (!text) return "";
    return text[language] || text.en || "";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
