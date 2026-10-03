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
      className="relative pt-10 sm:pt-14 pb-16 lg:pb-20 border-b border-[#E3DED2] overflow-hidden rounded-3xl my-3 px-5 sm:px-10 lg:px-14 bg-gradient-to-br from-[#ECE7DC] via-[#F4F1E8] to-[#E3ECE0]"
    >
      {/* Ambient background subtle lighting */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#A8B5A0]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-24 w-80 h-80 rounded-full bg-[#C65D43]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -ml-20 w-72 h-72 rounded-full bg-[#203C35]/10 blur-3xl pointer-events-none" />

      {/* Modern Top Pill: Status (Clean, no online blinking) */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#D4CEBF] text-xs font-semibold text-[#203C35] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#C65D43]" />
          <span>{t(hero.kicker)}</span>
        </div>
      </div>

      {/* Main Hero Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Expressive Typography & Intro (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Cursive Greeting */}
          <div className="flex items-center gap-2 mb-1">
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
              (Industry &amp; Research)
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
              className="inline-flex items-center gap-2.5 bg-[#203C35] text-[#F3F0E8] px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#C65D43] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t(hero.ctaPrimary)}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#203C35] hover:text-[#C65D43] hover:bg-[#FFFFFF] border border-[#D4CEBF] px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
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
                className="bg-[#FAF8F5]/80 backdrop-blur-xs border border-[#D4CEBF]/80 rounded-2xl p-3.5 flex flex-col justify-center transition-all hover:bg-[#FAF8F5] hover:border-[#A8B5A0]"
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

        {/* Right Column: Borderless Foggy Image Blend (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            {/* Ambient subtle fog backdrop glow */}
            <div className="absolute inset-0 bg-radial from-[#A8B5A0]/35 via-[#D4CEBF]/20 to-transparent blur-3xl pointer-events-none scale-125" />

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
            <div className="mt-3 flex items-center justify-between px-3 text-xs text-[#343830]">
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
      <div className="relative z-10 mt-12 pt-6 border-t border-[#D4CEBF]/60 flex flex-wrap items-center gap-2 text-xs text-[#203C35]">
        <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[#343830]/80 mr-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C65D43]" />
          <span>Core Technologies:</span>
        </div>
        {hero.techPills.map((pill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs border border-[#D4CEBF] font-medium hover:border-[#C65D43] hover:text-[#C65D43] hover:bg-[#FFFFFF] transition-all hover:-translate-y-0.5"
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
};
