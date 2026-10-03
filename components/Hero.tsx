"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const hero = portfolioData.hero;

  return (
    <section id="about" className="pt-8 sm:pt-14 pb-16 border-b border-[#E3DED2]">
      {/* Modern Top Pill: Status */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE7DC] border border-[#D4CEBF] text-xs font-semibold text-[#203C35] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C65D43] pulse-persimmon" />
          <span>{t(hero.kicker)}</span>
        </div>
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

          {/* Action CTAs */}
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

        {/* Right Column: Seamless Foggy Portrait Blend (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Ambient subtle fog backdrop glow */}
            <div className="absolute inset-0 bg-radial from-[#A8B5A0]/25 via-[#D4CEBF]/20 to-transparent blur-3xl pointer-events-none scale-110" />

            {/* Foggy Seamless Photo Container */}
            <div
              className="relative aspect-square sm:aspect-[4/4.2] w-full overflow-hidden"
              style={{
                maskImage: "radial-gradient(ellipse 75% 75% at 50% 48%, black 35%, rgba(0, 0, 0, 0.8) 60%, transparent 95%)",
                WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 48%, black 35%, rgba(0, 0, 0, 0.8) 60%, transparent 95%)",
              }}
            >
              <Image
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
              />
            </div>

            {/* Floating Soft Info Capsule */}
            <div className="mt-2 flex items-center justify-between px-2 text-xs text-[#343830]">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm text-[#203C35]">
                  {hero.portrait.badgeTitle}
                </span>
                <span className="text-[#343830]/70 font-medium">
                  {hero.portrait.badgeSubtitle}
                </span>
              </div>
              <span className="font-cursive text-xl text-[#C65D43]">
                Deggendorf &amp; Regensburg 🇩🇪
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills */}
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
