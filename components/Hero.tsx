"use client";

import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export function Hero() {
  const { t } = useLanguage();
  const hero = portfolioData.hero;
  return (
    <section id="about" className="hero-section">
      <div className="hero-copy">
        <p className="hero-status">{t(hero.kicker)}</p>
        <p className="hero-name">{hero.name}</p>
        <h1>{t({ en: "Mechatronics & Automation Engineer", de: "Ingenieur für Mechatronik & Automatisierung" })}</h1>
        <p className="hero-focus">{t({ en: "Automation · Robotics · Simulation · System Testing", de: "Automatisierung · Robotik · Simulation · Systemtest" })}</p>
        <p className="hero-intro">{t({
          en: "I’m a master’s student in Mechatronics and Cyber-Physical Systems at TH Deggendorf. My experience combines industrial automation and system testing with academic projects in simulation and prototyping.",
          de: "Ich studiere Mechatronik und Cyber-Physical Systems im Master an der TH Deggendorf. Meine Erfahrung verbindet industrielle Automatisierung und Systemtests mit Studienprojekten in Simulation und Prototyping."
        })}</p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">{t(hero.ctaPrimary)}<ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="button-secondary" href="/Sajin_Saji_CV.pdf" download>{t({ en: "Download CV", de: "Lebenslauf herunterladen" })}<Download size={17} aria-hidden="true" /></a>
          <a className="text-link" href={portfolioData.contact.info.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <dl className="hero-facts">
          {hero.quickFacts.slice(0, 2).map((fact) => <div key={fact.key.en}><dt>{t(fact.key)}</dt><dd>{t(fact.value)}</dd></div>)}
        </dl>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame"><Image src="/images/portrait.jpeg" alt={hero.portrait.alt} fill priority sizes="(max-width: 1024px) 280px, 310px" className="object-cover object-center" /></div>
        <figcaption>{t({ en: "M.Eng. student · TH Deggendorf", de: "M.Eng.-Student · TH Deggendorf" })}</figcaption>
      </figure>
    </section>
  );
}
