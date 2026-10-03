"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, MapPin, Clock, Mail, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const hero = portfolioData.hero;

  return (
    <section
      id="about"
      className="relative pt-10 sm:pt-16 pb-16 lg:pb-24 border-b border-[#E3DED2] overflow-hidden rounded-3xl my-4 px-6 sm:px-12 lg:px-16 bg-gradient-to-br from-[#EFEAE1] via-[#F6F3EB] to-[#ECE5D8]"
    >
      {/* Warm ambient lighting accents (No green tints) */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[480px] h-[480px] rounded-full bg-[#E5DFD0]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-28 w-96 h-96 rounded-full bg-[#C65D43]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-[#D4CEBF]/35 blur-3xl pointer-events-none" />

      {/* Modern Top Pill: Status */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs border border-[#D4CEBF] text-xs font-semibold text-[#203C35] shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#C65D43]" />
          <span>{t(hero.kicker)}</span>
        </div>
      </div>

      {/* Main Hero Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Expressive Typography & Intro (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Cursive Greeting */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-cursive text-3xl sm:text-4xl lg:text-5xl text-[#C65D43] font-normal tracking-wide">
              {t(hero.greeting)}
            </span>
            <span className="text-2xl sm:text-3xl">👋</span>
          </div>

          {/* Main Name Heading with fluid display */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#203C35] tracking-tight leading-[1.02] mb-4">
            {hero.name}
          </h1>

          {/* Subtitle with soft cursive stamp */}
          <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-semibold text-[#203C35]/90 mb-6">
            <span>{t(hero.subtitle)}</span>
            <span className="font-cursive text-xl sm:text-2xl text-[#C65D43] font-normal">
              (Industry &amp; Research)
            </span>
          </div>

          {/* Lead Paragraph */}
          <p className="text-[#343830] text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mb-9 font-normal">
            {t(hero.lead)}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 bg-[#203C35] text-[#F3F0E8] px-8 py-4 rounded-full text-sm sm:text-base font-semibold tracking-wide hover:bg-[#C65D43] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t(hero.ctaPrimary)}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#203C35] hover:text-[#C65D43] hover:bg-[#FFFFFF] border border-[#D4CEBF] px-8 py-4 rounded-full text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t(hero.ctaSecondary)}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Facts: Clean Editorial Key-Value Stream (NO CARDS / NO BOXES) */}
          <div className="pt-8 border-t border-[#D4CEBF]/70">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D4CEBF]/60">
              {hero.quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-5" : "pr-3"}`}
                >
                  <div className="flex items-center gap-1.5 mb-1.5 text-[#C65D43]">
                    {idx === 0 && <MapPin className="w-3.5 h-3.5" />}
                    {idx === 1 && <Clock className="w-3.5 h-3.5" />}
                    {idx === 2 && <Mail className="w-3.5 h-3.5" />}
                    <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-[#343830]/70">
                      {t(fact.key)}
                    </span>
                  </div>
                  <div className="text-sm sm:text-[15px] font-medium text-[#203C35] leading-snug">
                    {fact.isEmail ? (
                      <a
                        href={`mailto:${fact.value.en}`}
                        className="hover:text-[#C65D43] transition-colors underline decoration-[#C65D43]/40 underline-offset-4 hover:decoration-[#C65D43]"
                      >
                        {fact.value.en}
                      </a>
                    ) : (
                      <span>{t(fact.value)}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Expansive Borderless Foggy Image Blend (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px]">
            {/* Ambient warm sand/champagne backdrop aura */}
            <div className="absolute inset-0 bg-radial from-[#E2DDD0]/70 via-[#EBE5D8]/40 to-transparent blur-3xl pointer-events-none scale-125" />

            {/* Foggy Seamless Photo Container (Borderless, soft radial blend) */}
            <div
              className="relative aspect-square w-full max-w-[420px] mx-auto overflow-hidden"
              style={{
                maskImage: "radial-gradient(circle at 50% 50%, black 52%, rgba(0, 0, 0, 0.8) 72%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 52%, rgba(0, 0, 0, 0.8) 72%, transparent 100%)",
              }}
            >
              <Image
                src="/images/portrait.jpeg"
                alt={hero.portrait.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 420px, 450px"
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Seamless Soft Info Row beneath portrait */}
            <div className="mt-3 flex items-center justify-between px-3 text-xs sm:text-sm text-[#343830]">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm sm:text-base text-[#203C35]">
                  {hero.portrait.badgeTitle}
                </span>
                <span className="text-[#343830]/70 font-medium">
                  {hero.portrait.badgeSubtitle}
                </span>
              </div>
              <span className="font-cursive text-xl sm:text-2xl text-[#C65D43]">
                Deggendorf &amp; Regensburg 🇩🇪
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="relative z-10 mt-12 pt-6 border-t border-[#D4CEBF]/60 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-[#203C35]">
        <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[#343830]/80 mr-2 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C65D43]" />
          <span>Core Technologies:</span>
        </div>
        {hero.techPills.map((pill, idx) => (
          <span
            key={idx}
            className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs border border-[#D4CEBF] font-medium hover:border-[#C65D43] hover:text-[#C65D43] hover:bg-[#FFFFFF] transition-all hover:-translate-y-0.5"
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
};
