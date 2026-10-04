"use client";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { Award } from "lucide-react";

export function Certifications() {
  const { t } = useLanguage();
  return <section id="certifications" className="py-20 border-b border-[#E4E7EC]">
    <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-2">{t({ en: "Training", de: "Weiterbildung" })}</p>
    <h2 className="text-3xl sm:text-4xl font-bold text-[#16324F] tracking-tight mb-10">{t({ en: "Certifications", de: "Zertifikate" })}</h2>
    <div className="grid sm:grid-cols-2 gap-6">
      {portfolioData.education.items.filter(item => item.isCertification).flatMap(item => t(item.organization).split(' · ')).map(label => <article key={label} className="border border-[#E4E7EC] bg-white p-6 rounded-md flex gap-4 items-start"><Award size={24} className="text-[#2563EB] shrink-0" aria-hidden="true"/><p className="font-medium text-[#16324F]">{label}</p></article>)}
    </div>
  </section>;
}
