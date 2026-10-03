"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const skillsData = portfolioData.skills;

  return (
    <section id="skills" className="py-20 border-b border-[#E3DED2] scroll-mt-16">
      {/* Section Header */}
      <div className="mb-14">
        <div className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C65D43] mb-2">
          {t(skillsData.eyebrow)}
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#203C35] tracking-tight mb-3">
          {t(skillsData.heading)}
        </h2>
        <p className="text-[#343830]/80 text-base max-w-2xl">
          {t(skillsData.intro)}
        </p>
      </div>

      {/* Editorial Typographic Columns (No Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
        {skillsData.categories.map((category) => (
          <div key={category.number} className="flex flex-col pt-4 border-t border-[#D4CEBF]">
            {/* Number & Title */}
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-display font-bold text-xl text-[#203C35]">
                {t(category.title)}
              </h3>
              <span className="font-mono text-xs font-bold text-[#C65D43]">
                {category.number}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#343830]/80 leading-relaxed mb-5">
              {t(category.description)}
            </p>

            {/* Inline Typographic Skill List */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 mt-auto pt-3 border-t border-[#E3DED2]">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="font-mono text-xs text-[#203C35] bg-[#ECE7DC] px-2 py-0.5"
                >
                  {t(skill)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
