"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const educationData = portfolioData.education;

  return (
    <section id="education" className="py-20 border-b border-[#E4E7EC] scroll-mt-16">
      {/* Section Header */}
      <div className="mb-14">
        <div className="font-body text-xs font-semibold tracking-widest uppercase text-[#2563EB] mb-2">
          {t(educationData.eyebrow)}
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-4xl text-[#16324F] tracking-tight mb-3">
          {t(educationData.heading)}
        </h2>
      </div>

      {/* Editorial Education Chronology */}
      <div className="flex flex-col gap-10">
        {educationData.items.filter((item) => !item.isCertification).map((item, idx) => (
          <div key={idx} className="pt-6 border-t border-[#D1D5DB] grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
            {/* Dates */}
            <div className="lg:col-span-3">
              {item.when.en && (
                <span className="font-body text-xs font-bold text-[#2563EB]">
                  {t(item.when)}
                </span>
              )}
            </div>

            {/* Degree & Institution */}
            <div className="lg:col-span-9 flex flex-col">
              <h3 className="font-display font-bold text-2xl text-[#16324F] mb-1">
                {t(item.title)}
              </h3>
              <div className="font-body text-xs uppercase tracking-wider text-[#374151]/70 font-semibold mb-3">
                {t(item.organization)}
              </div>

              {item.coursework && (
                <p className="text-xs sm:text-sm text-[#374151]/80 leading-relaxed pt-2 border-t border-[#E4E7EC]">
                  <span className="font-semibold text-[#16324F]">{t({ en: "Core modules: ", de: "Kernmodule: " })}</span>
                  {t(item.coursework)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
