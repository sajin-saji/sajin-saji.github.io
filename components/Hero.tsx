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
      className="relative pt-8 sm:pt-12 pb-14 lg:pb-16 overflow-hidden rounded-3xl my-3 px-5 sm:px-10 lg:px-12 bg-gradient-to-br from-[#EFEAE1]/80 via-[#F6F3EB] to-[#ECE5D8]/80"
    >
      {/* Warm ambient lighting accents (pure neutral sand/champagne) */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#E5DFD0]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-28 w-80 h-80 rounded-full bg-[#C65D43]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-72 h-72 rounded-full bg-[#D4CEBF]/30 blur-3xl pointer-events-none" />

      {/* Modern Top Pill: Status */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs text-[11px] font-medium text-[#203C35] shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C65D43]" />
          <span>{t(hero.kicker)}</span>
        </div>
      </div>

      {/* Main Hero Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Expressive Typography & Intro (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Cursive Greeting */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-cursive text-2xl sm:text-3xl text-[#C65D43] font-normal tracking-wide">
              {t(hero.greeting)}
            </span>
            <span className="text-xl">👋</span>
          </div>

          {/* Main Name Heading - Refined, Balanced Proportion */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#203C35] tracking-tight leading-[1.08] mb-3">
            {hero.name}
          </h1>

          {/* Subtitle with soft cursive stamp */}
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-[#203C35]/90 mb-5">
            <span>{t(hero.subtitle)}</span>
            <span className="font-cursive text-lg text-[#C65D43] font-normal">
              (Industry &amp; Research)
            </span>
          </div>

          {/* Lead Paragraph - Refined Scale */}
          <p className="text-[#343830]/90 text-sm sm:text-base leading-relaxed max-w-2xl mb-7 font-normal">
            {t(hero.lead)}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#203C35] text-[#F3F0E8] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#C65D43] shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t(hero.ctaPrimary)}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#203C35] hover:text-[#C65D43] hover:bg-[#FFFFFF] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
            >
              <span>{t(hero.ctaSecondary)}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Facts: Seamless Architectural Stream (Zero cards, zero heavy borders) */}
          <div className="pt-6 border-t border-[#D4CEBF]/60">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#D4CEBF]/50">
              {hero.quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${idx !== 0 ? "pt-3 sm:pt-0 sm:pl-4" : "pr-2"}`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-[#C65D43]">
                    {idx === 0 && <MapPin className="w-3 h-3" />}
                    {idx === 1 && <Clock className="w-3 h-3" />}
                    {idx === 2 && <Mail className="w-3 h-3" />}
                    <span className="text-[10px] font-mono uppercase tracking-widest font-semibold text-[#343830]/70">
                      {t(fact.key)}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#203C35] leading-snug">
                    {fact.isEmail ? (
                      <a
                        href={`mailto:${fact.value.en}`}
                        className="hover:text-[#C65D43] transition-colors underline decoration-[#C65D43]/40 underline-offset-3 hover:decoration-[#C65D43]"
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

        {/* Right Column: Refined Borderless Foggy Image Blend (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
            {/* Ambient warm sand backdrop glow */}
            <div className="absolute inset-0 bg-radial from-[#E2DDD0]/70 via-[#EBE5D8]/40 to-transparent blur-3xl pointer-events-none scale-125" />

            {/* Foggy Seamless Photo Container (Borderless, soft radial blend) */}
            <div
              className="relative aspect-square w-full max-w-[360px] mx-auto overflow-hidden"
              style={{
                maskImage: "radial-gradient(circle at 50% 50%, black 52%, rgba(0, 0, 0, 0.8) 72%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 52%, rgba(0, 0, 0, 0.8) 72%, transparent 100%)",
              }}
            >
              <Image
                src="/images/portrait.jpeg"
                alt={hero.portrait.alt}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Seamless Soft Info Row beneath portrait */}
            <div className="mt-2.5 flex items-center justify-between px-2 text-xs text-[#343830]">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xs sm:text-sm text-[#203C35]">
                  {hero.portrait.badgeTitle}
                </span>
                <span className="text-[#343830]/70 font-medium text-[11px] sm:text-xs">
                  {hero.portrait.badgeSubtitle}
                </span>
              </div>
              <span className="font-cursive text-lg sm:text-xl text-[#C65D43]">
                Deggendorf &amp; Regensburg 🇩🇪
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="relative z-10 mt-10 pt-5 border-t border-[#D4CEBF]/60 flex flex-wrap items-center gap-2 text-xs text-[#203C35]">
        <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[#343830]/80 mr-1.5 text-[11px]">
          <Sparkles className="w-3 h-3 text-[#C65D43]" />
          <span>Core Technologies:</span>
        </div>
        {hero.techPills.map((pill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full bg-[#FAF8F5]/80 backdrop-blur-xs font-medium hover:text-[#C65D43] hover:bg-[#FFFFFF] transition-all hover:-translate-y-0.5 text-xs text-[#203C35]"
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
};
