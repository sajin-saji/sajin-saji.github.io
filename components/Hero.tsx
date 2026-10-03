"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Sparkles, MapPin, Calendar, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const hero = portfolioData.hero;

  return (
    <section id="about" className="pt-8 sm:pt-14 pb-16 border-b border-[#E3DED2]">
      {/* Modern Top Pill: Status + Cursive Highlight */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE7DC] border border-[#D4CEBF] text-xs font-semibold text-[#203C35] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C65D43] pulse-persimmon" />
          <span>{t(hero.kicker)}</span>
        </div>
        <span className="font-cursive text-xl text-[#C65D43] hidden sm:inline-block">
          ✨ Available 2025/2026
        </span>
      </div>

      {/* Main Hero Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Expressive Typography & Intro (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Cursive Greeting */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-cursive text-3xl sm:text-4xl text-[#C65D43]">
              {t(hero.greeting)}
            </span>
            <span className="text-xl">👋</span>
          </div>

          {/* Main Name Heading with fluid display */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-[#203C35] tracking-tight leading-[1.02] mb-4">
            {hero.name}
          </h1>

          {/* Subtitle with soft cursive stamp */}
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-[#203C35]/90 mb-6">
            <span>{t(hero.subtitle)}</span>
            <span className="font-cursive text-lg text-[#C65D43] font-normal">
              (Industry &amp; Research)
            </span>
          </div>

          {/* Lead Paragraph */}
          <p className="text-[#343830] text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            {t(hero.lead)}
          </p>

          {/* Modern Soft Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 bg-[#203C35] text-[#F3F0E8] px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#C65D43] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span>{t(hero.ctaPrimary)}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#ECE7DC] text-[#203C35] hover:text-[#C65D43] hover:bg-[#E3DED2] border border-[#D4CEBF] px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              <span>{t(hero.ctaSecondary)}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Facts Row with Soft Rounded Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E3DED2]">
            {hero.quickFacts.map((fact, idx) => (
              <div
                key={idx}
                className="bg-[#ECE7DC]/70 border border-[#D4CEBF] rounded-2xl p-3.5 flex flex-col justify-center"
              >
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#343830]/60 mb-0.5">
                  {t(fact.key)}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#203C35] break-words">
                  {fact.isEmail ? (
                    <a
                      href={`mailto:${fact.value.en}`}
                      className="hover:text-[#C65D43] transition-colors"
                    >
                      {fact.value.en}
                    </a>
                  ) : (
                    t(fact.value)
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Modern Organic Portrait Showcase (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-sm">
            {/* Background decorative soft blob/frame */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#A8B5A0]/40 to-[#D4CEBF]/60 blur-md transform -rotate-2" />

            <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#D4CEBF] bg-[#ECE7DC] p-3 shadow-xl">
              <div className="relative aspect-square w-full rounded-[1.5rem] overflow-hidden bg-[#D4CEBF]/40">
                <Image
                  src={hero.portrait.src}
                  alt={hero.portrait.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge with Cursive Touch */}
              <div className="mt-3.5 pt-2.5 border-t border-[#D4CEBF] flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-[#203C35]">
                    {hero.portrait.badgeTitle}
                  </span>
                  <span className="text-xs text-[#343830]/70 font-medium">
                    {hero.portrait.badgeSubtitle}
                  </span>
                </div>
                <span className="font-cursive text-xl text-[#C65D43]">
                  Mechatronics
                </span>
              </div>
            </div>

            {/* Handwritten note sticker */}
            <div className="mt-3 flex items-center justify-end gap-1 text-right">
              <span className="font-cursive text-lg text-[#C65D43]">
                Deggendorf &amp; Regensburg 🇩🇪
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills (Soft Rounded Pills) */}
      <div className="mt-12 pt-6 border-t border-[#E3DED2] flex flex-wrap items-center gap-2 text-xs text-[#203C35]">
        <span className="font-semibold uppercase tracking-wider text-[#343830]/70 mr-2">
          Core Technologies:
        </span>
        {hero.techPills.map((pill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full bg-[#ECE7DC] border border-[#D4CEBF] font-medium hover:border-[#C65D43] hover:text-[#C65D43] transition-colors"
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
};
