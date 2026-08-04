"use client";

import { ClipboardListIcon, ShovelIcon, PaintBucketIcon, CheckCircleIcon } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { siteContent } from "@/lib/content";

const stepIcons: Record<string, React.ReactNode> = {
  quote: <ClipboardListIcon className="w-6 h-6" />,
  shield: <ShovelIcon className="w-6 h-6" />,
  check: <PaintBucketIcon className="w-6 h-6" />,
  star: <CheckCircleIcon className="w-6 h-6" />,
};

export function ProcessSection() {
  const { processSteps } = siteContent;

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#f9fafb]">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#c49835] uppercase tracking-[0.2em]">
              How We Work
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] mt-2 tracking-tight leading-[1.1]">
              Our Installation Process
            </h2>
            <p className="text-base text-gray-500 mt-4 max-w-lg mx-auto">
              A seamless journey from quote to completion
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="relative group">
                {/* Connector line (desktop) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px]">
                    <div className="h-full bg-gradient-to-r from-[#c49835] to-[#e5e7eb]" />
                  </div>
                )}

                <div className="text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[#c49835] mb-5 group-hover:bg-[#c49835] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(196,152,53,0.3)] transition-all duration-500 relative z-10">
                    <span className="text-xl font-bold">{step.step}</span>
                  </div>

                  <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[220px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
