"use client";

import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { siteContent } from "@/lib/content";

export function LatestProject() {
  const { latestProject } = siteContent;

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#c49835] uppercase tracking-[0.2em]">
              Our Work
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] mt-2 tracking-tight leading-[1.1]">
              {latestProject.title}
            </h2>
            <p className="text-base text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
              {latestProject.description}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {latestProject.images.map((img, i) => (
            <StaggerItem key={i}>
              <div className="group relative overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
