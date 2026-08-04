"use client";

import { motion } from "framer-motion";
import { CarIcon, FootprintsIcon, HomeIcon, LayersIcon, ShieldIcon, CheckIcon, MedalIcon, PoundSterlingIcon } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { siteContent } from "@/lib/content";

const serviceIcons: Record<string, React.ReactNode> = {
  driveway: <CarIcon className="w-7 h-7" />,
  pathway: <FootprintsIcon className="w-7 h-7" />,
  patio: <HomeIcon className="w-7 h-7" />,
  steps: <LayersIcon className="w-7 h-7" />,
};

const badgeIcons: Record<string, React.ReactNode> = {
  shield: <ShieldIcon className="w-7 h-7" />,
  check: <CheckIcon className="w-7 h-7" />,
  medal: <MedalIcon className="w-7 h-7" />,
  pound: <PoundSterlingIcon className="w-7 h-7" />,
};

export function ServicesSection() {
  const { services, trustBadges } = siteContent;

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32"
      style={{
        backgroundImage: "url(/images/services-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        {/* Services */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#c49835] uppercase tracking-[0.2em]">
              What We Offer
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] mt-2 tracking-tight leading-[1.1]">
              Our Services
            </h2>
            <p className="text-base text-gray-500 mt-4 max-w-lg mx-auto">
              Premium resin bound surfacing solutions tailored to your property
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="group relative bg-white rounded-2xl p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 cursor-default"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#c49835]/10 text-[#c49835] mb-5 group-hover:bg-[#c49835] group-hover:text-white transition-all duration-500">
                  {serviceIcons[service.icon] || <HomeIcon className="w-7 h-7" />}
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badges */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-3 bg-[#f9fafb] rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#c49835]/10 text-[#c49835] flex items-center justify-center">
                  {badgeIcons[badge.icon] || <CheckIcon className="w-5 h-5" />}
                </div>
                <span className="text-sm font-semibold text-[#1a1a1a]">
                  {badge.title}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
