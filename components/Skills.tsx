"use client";
import { useLanguage } from "@/context/LanguageContext";

const groups = [
  {
    title: { en: "Automation & Systems", de: "Automatisierung & Systeme" },
    skills: { en: "Control systems · Sensor integration · System integration · Commissioning", de: "Steuerungstechnik · Sensorintegration · Systemintegration · Inbetriebnahme" },
    evidence: { en: "Experience: Logix Space Technologies", de: "Erfahrung: Logix Space Technologies" }, href: "#experience"
  },
  {
    title: { en: "Programming", de: "Programmierung" },
    skills: { en: "Python · C++ · C# · Lua · MATLAB", de: "Python · C++ · C# · Lua · MATLAB" },
    evidence: { en: "Project: Parametric Gear Demonstrator (Lua)", de: "Projekt: Parametrischer Zahnrad-Demonstrator (Lua)" }, href: "#gear-demonstrator"
  },
  {
    title: { en: "Simulation & Design", de: "Simulation & Konstruktion" },
    skills: { en: "MATLAB/Simulink · Unity · ANSYS Icepak · SolidWorks · AutoCAD · IceSL", de: "MATLAB/Simulink · Unity · ANSYS Icepak · SolidWorks · AutoCAD · IceSL" },
    evidence: { en: "Project: Thermal Optimisation (ANSYS Icepak)", de: "Projekt: Thermische Optimierung (ANSYS Icepak)" }, href: "#thermal-optimization"
  },
  {
    title: { en: "Testing & Prototyping", de: "Test & Prototyping" },
    skills: { en: "System testing · Verification & validation · Troubleshooting · Additive manufacturing", de: "Systemtests · Verifikation & Validierung · Fehlersuche · Additive Fertigung" },
    evidence: { en: "Project: Parametric Gear Demonstrator (3D printing)", de: "Projekt: Parametrischer Zahnrad-Demonstrator (3D-Druck)" }, href: "#gear-demonstrator"
  }
];

export function Skills() {
  const { t } = useLanguage();
  return <section id="skills" className="py-20 border-b border-[#E4E7EC]">
    <p className="text-xs font-semibold tracking-widest uppercase text-[#2563EB] mb-2">{t({ en: "Technical skills", de: "Technische Kompetenzen" })}</p>
    <h2 className="font-bold text-3xl sm:text-4xl text-[#16324F] tracking-tight mb-10">{t({ en: "Technical Expertise", de: "Technische Kompetenzen" })}</h2>
    <div className="expertise-grid">
      {groups.map(group => <article key={group.title.en} className="expertise-block">
        <h3 className="text-xl font-semibold mb-4">{t(group.title)}</h3>
        <p className="text-base leading-relaxed text-[#374151] mb-5">{t(group.skills)}</p>
        <a href={group.href} className="text-sm text-[#2563EB] hover:underline underline-offset-4">{t(group.evidence)} <span aria-hidden="true">→</span></a>
      </article>)}
    </div>
    <p className="mt-8 pt-6 border-t border-[#E4E7EC] text-sm text-[#475569]"><span className="font-semibold text-[#16324F]">{t({ en: "Development tools", de: "Entwicklungswerkzeuge" })}: </span>Git/GitHub · Ubuntu/Linux · Windows</p>
    <p className="mt-3 text-sm text-[#475569]"><span className="font-semibold text-[#16324F]">{t({ en: "Currently learning", de: "Aktuell im Lernen" })}: </span>{t({ en: "ROS / ROS 2 — learning through tutorials", de: "ROS / ROS 2 — Lernen mit Tutorials" })}</p>
  </section>;
}
