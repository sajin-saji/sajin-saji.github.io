"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, MapPin, Clock, Mail, Sparkles, GraduationCap, Cpu } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const hero = portfolioData.hero;

  return (
    <section
      id="about"
      className="relative pt-10 sm:pt-16 pb-16 lg:pb-20 border-b border-[#E3DED2] overflow-hidden rounded-3xl my-4 px-5 sm:px-10 lg:px-14 bg-gradient-to-br from-[#ECE7DC] via-[#F5F2EA] to-[#E5ECE2] shadow-sm"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#A8B5A0]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-28 w-80 h-80 rounded-full bg-[#C65D43]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-72 h-72 rounded-full bg-[#203C35]/10 blur-3xl pointer-events-none" />

      {/* Modern Top Pill: Status */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-[#D4CEBF] text-xs font-semibold text-[#203C35] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C65D43] pulse-persimmon" />
          <span>{t(hero.kicker)}</span>
        </div>
      </div>

      {/* Main Hero Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Expressive Typography & Intro (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Cursive Greeting */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-cursive text-3xl sm:text-4xl text-[#C65D43] font-normal tracking-wide">
              {t(hero.greeting)}
            </span>
            <span className="text-2xl">👋</span>
          </div>

          {/* Main Name Heading with fluid display */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-[#203C35] tracking-tight leading-[1.02] mb-4">
            {hero.name}
          </h1>

          {/* Subtitle with soft cursive stamp */}
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-[#203C35]/90 mb-6">
            <span>{t(hero.subtitle)}</span>
            <span className="font-cursive text-xl text-[#C65D43] font-normal">
              — Industry &amp; Research
            </span>
          </div>

          {/* Lead Paragraph */}
          <p className="text-[#343830] text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
            {t(hero.lead)}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 bg-[#203C35] text-[#F3F0E8] px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#C65D43] shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t(hero.ctaPrimary)}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FAF8F5]/90 backdrop-blur-md text-[#203C35] hover:text-[#C65D43] hover:bg-[#FFFFFF] border border-[#D4CEBF] px-7 py-3.5 rounded-full text-sm font-semibold shadow-sm hover:shadow transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t(hero.ctaSecondary)}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Facts Row with Soft Rounded Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-[#D4CEBF]/60">
            {hero.quickFacts.map((fact, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5]/80 backdrop-blur-sm border border-[#D4CEBF]/80 rounded-2xl p-3.5 flex flex-col justify-center transition-all hover:bg-[#FAF8F5] hover:border-[#A8B5A0] shadow-sm"
              >
                <div className="flex items-center gap-1.5 mb-1 text-[#343830]/70">
                  {idx === 0 && <MapPin className="w-3.5 h-3.5 text-[#C65D43]" />}
                  {idx === 1 && <Clock className="w-3.5 h-3.5 text-[#203C35]" />}
                  {idx === 2 && <Mail className="w-3.5 h-3.5 text-[#C65D43]" />}
                  <span className="text-[11px] uppercase tracking-wider font-semibold">
                    {t(fact.key)}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#203C35] break-words">
                  {fact.isEmail ? (
                    <a
                      href={`mailto:${fact.value.en}`}
                      className="hover:text-[#C65D43] transition-colors underline decoration-[#C65D43]/30 underline-offset-2"
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

        {/* Right Column: Image with Rich Color Frame & UI Badges (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            {/* Ambient Background Aura behind portrait */}
            <div className="absolute inset-0 -inset-x-4 -inset-y-4 bg-gradient-to-tr from-[#203C35] via-[#A8B5A0] to-[#C65D43] rounded-[2.5rem] opacity-25 blur-xl -z-10" />

            {/* Main Portrait Frame with Rich Color Background */}
            <div className="relative rounded-[2.2rem] overflow-hidden p-2.5 bg-gradient-to-b from-[#203C35] via-[#264941] to-[#18302A] border-2 border-[#D4CEBF]/80 shadow-2xl">
              {/* Internal Image Container */}
              <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-[1.6rem] overflow-hidden bg-[#203C35]">
                <Image
                  src="/images/portrait.jpeg"
                  alt={hero.portrait.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle soft gradient overlay at base of photo for seamless text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#203C35]/85 via-transparent to-transparent pointer-events-none" />

                {/* Inner Overlay Capsule at bottom of photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FAF8F5]/95 backdrop-blur-md border border-[#D4CEBF] text-xs shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      <p className="font-display font-bold text-xs sm:text-sm text-[#203C35] leading-none">
                        {hero.portrait.badgeTitle}
                      </p>
                      <p className="text-[10px] text-[#343830]/80 font-medium mt-0.5">
                        {hero.portrait.badgeSubtitle}
                      </p>
                    </div>
                  </div>
                  <span className="font-cursive text-base text-[#C65D43] font-semibold">
                    Regensburg 🇩🇪
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Top-Right Badge */}
            <div className="absolute -top-3.5 -right-3.5 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D4CEBF] text-xs font-semibold text-[#203C35] shadow-lg">
              <GraduationCap className="w-3.5 h-3.5 text-[#C65D43]" />
              <span>Mechatronics &amp; CPS</span>
            </div>

            {/* Floating Bottom-Left Badge */}
            <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D4CEBF] text-xs font-semibold text-[#203C35] shadow-lg">
              <Cpu className="w-3.5 h-3.5 text-[#203C35]" />
              <span>Testing &amp; Robotics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="relative z-10 mt-12 pt-6 border-t border-[#D4CEBF]/60 flex flex-wrap items-center gap-2 text-xs text-[#203C35]">
        <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[#343830]/80 mr-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C65D43]" />
          <span>Core Technologies:</span>
        </div>
        {hero.techPills.map((pill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#D4CEBF] font-medium hover:border-[#C65D43] hover:text-[#C65D43] hover:bg-[#FFFFFF] shadow-sm transition-all hover:-translate-y-0.5"
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
};
