"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const educationData = portfolioData.education;

  return (
    <section id="education" className="py-20 border-b border-[#E3DED2] scroll-mt-16">
      {/* Section Header */}
      <div className="mb-14">
        <div className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C65D43] mb-2">
          {t(educationData.eyebrow)}
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#203C35] tracking-tight mb-3">
          {t(educationData.heading)}
        </h2>
      </div>

      {/* Editorial Education Chronology */}
      <div className="flex flex-col gap-10">
        {educationData.items.map((item, idx) => (
          <div key={idx} className="pt-6 border-t border-[#D4CEBF] grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
            {/* Dates */}
            <div className="lg:col-span-3">
              {item.when.en && (
                <span className="font-mono text-xs font-bold text-[#C65D43]">
                  {t(item.when)}
                </span>
              )}
            </div>

            {/* Degree & Institution */}
            <div className="lg:col-span-9 flex flex-col">
              <h3 className="font-display font-bold text-2xl text-[#203C35] mb-1">
                {t(item.title)}
              </h3>
              <div className="font-mono text-xs uppercase tracking-wider text-[#343830]/70 font-semibold mb-3">
                {t(item.organization)}
              </div>

              {item.coursework && (
                <p className="text-xs sm:text-sm text-[#343830]/80 leading-relaxed pt-2 border-t border-[#E3DED2]">
                  <span className="font-semibold text-[#203C35]">Core modules: </span>
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
