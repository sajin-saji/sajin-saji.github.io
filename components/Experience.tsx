"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const experienceData = portfolioData.experience;

  return (
    <section id="experience" className="py-20 border-b border-[#E3DED2] scroll-mt-16">
      {/* Section Header */}
      <div className="mb-14">
        <div className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C65D43] mb-2">
          {t(experienceData.eyebrow)}
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#203C35] tracking-tight mb-3">
          {t(experienceData.heading)}
        </h2>
      </div>

      {/* Refined Typographic Chronology (No Boxed Cards) */}
      <div className="flex flex-col gap-12">
        {experienceData.items.map((item, idx) => (
          <div key={idx} className="pt-6 border-t border-[#D4CEBF] grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
            {/* Date Column */}
            <div className="lg:col-span-3">
              <span className="font-mono text-xs font-bold text-[#C65D43]">
                {t(item.when)}
              </span>
            </div>

            {/* Role & Company (Cols 4-12) */}
            <div className="lg:col-span-9 flex flex-col">
              <h3 className="font-display font-bold text-2xl text-[#203C35] mb-1">
                {t(item.title)}
              </h3>
              <div className="font-mono text-xs uppercase tracking-wider text-[#343830]/70 font-semibold mb-4">
                {item.organization}
              </div>

              {item.points && (
                <ul className="flex flex-col gap-2.5 text-sm sm:text-base text-[#343830] leading-relaxed">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-[#C65D43] font-mono text-xs mt-1">―</span>
                      <span>{t(pt)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.description && (
                <p className="text-sm sm:text-base text-[#343830] leading-relaxed">
                  {t(item.description)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
