"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export const Stats: React.FC = () => {
  const { t } = useLanguage();
  const stats = portfolioData.stats;

  return (
    <section className="py-12 border-b border-[#E4E7EC]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="font-display font-bold text-4xl sm:text-5xl text-[#16324F] tracking-tight mb-2">
              {stat.value}
            </span>
            <span className="font-semibold text-sm text-[#16324F] mb-1">
              {t(stat.title)}
            </span>
            <p className="text-xs text-[#374151]/80 leading-relaxed">
              {t(stat.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
