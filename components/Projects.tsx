"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData, ProjectItem } from "@/data/portfolioData";

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-20 border-b border-[#E3DED2] scroll-mt-16">
      {/* Section Header */}
      <div className="mb-14">
        <div className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C65D43] mb-2">
          {t(projects.eyebrow)}
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#203C35] tracking-tight mb-3">
          {t(projects.heading)}
        </h2>
        <p className="text-[#343830]/80 text-base max-w-2xl">
          {t(projects.intro)}
        </p>
      </div>

      {/* Editorial Projects Flow */}
      <div className="flex flex-col gap-20">
        {projects.items.map((project, idx) => (
          <EditorialProjectCase key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

const EditorialProjectCase: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const { t } = useLanguage();

  const isEven = index % 2 === 0;

  return (
    <article className="pt-8 border-t border-[#E3DED2]">
      {/* Top Metadata Line */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#C65D43]">
            [ 0{index + 1} ]
          </span>
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#203C35]">
            {t(project.tagline)}
          </span>
        </div>
        <span className="font-mono text-xs text-[#343830]/70">
          {t(project.when)}
        </span>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Text & Points Column */}
        <div className={`lg:col-span-6 flex flex-col justify-between ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#203C35] mb-5 leading-tight">
              {t(project.title)}
            </h3>

            <ul className="flex flex-col gap-4 text-sm sm:text-base text-[#343830] leading-relaxed mb-8">
              {project.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3">
                  <span className="text-[#C65D43] font-mono text-xs mt-1">―</span>
                  <span>{t(pt)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Evidence Tags */}
          <div className="pt-4 border-t border-[#E3DED2]">
            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[#343830]/60 block mb-2">
              {t(project.evidence.label)}:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.evidence.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-xs font-mono bg-[#ECE7DC] text-[#203C35] border border-[#D4CEBF]"
                >
                  {t(tag)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Media & Chart Column */}
        <div className={`lg:col-span-6 flex flex-col gap-4 ${!isEven ? "lg:order-1" : "lg:order-2"}`}>
          {project.mediaType === "duo" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                <div key={i} className="flex flex-col">
                  <div className="relative aspect-[4/3] w-full border border-[#D4CEBF] bg-[#ECE7DC]/50 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={t(img.alt)}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-[#343830]/70 mt-1.5 line-clamp-1">
                    {t(img.alt)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {project.mediaType === "single-chart" && (
            <div className="flex flex-col gap-6">
              {/* Image */}
              <div className="flex flex-col">
                <div className="relative aspect-[16/9] w-full border border-[#D4CEBF] bg-white p-3 overflow-hidden">
                  <Image
                    src={project.images[0].src}
                    alt={t(project.images[0].alt)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-contain p-2"
                  />
                </div>
                <span className="text-[11px] font-mono text-[#343830]/70 mt-1.5">
                  {t(project.images[0].alt)}
                </span>
              </div>

              {/* Minimal Editorial Temperature Chart */}
              {project.temperatureChart && (
                <div className="p-5 border border-[#D4CEBF] bg-[#ECE7DC]/40 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#203C35] pb-2 border-b border-[#D4CEBF]">
                    <span>Ansys Icepak Test Configurations</span>
                    <span>Max °C</span>
                  </div>

                  <div className="flex flex-col gap-3 pt-1">
                    {project.temperatureChart.map((bar, bIdx) => (
                      <div key={bIdx} className="flex flex-col gap-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-[#203C35]">
                            {t(bar.label)}
                          </span>
                          <span className="font-mono font-bold text-[#203C35]">
                            {bar.displayValue}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-[#D4CEBF] overflow-hidden">
                          <div
                            className="h-full transition-all duration-500"
                            style={{
                              width: `${bar.percentage}%`,
                              backgroundColor: bIdx === 3 ? "#203C35" : "#C65D43",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {project.mediaType === "duo-code" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                <div key={i} className="flex flex-col">
                  <div className="relative aspect-[4/3] w-full border border-[#D4CEBF] bg-[#ECE7DC]/50 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={t(img.alt)}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-[#343830]/70 mt-1.5 line-clamp-1">
                    {t(img.alt)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
