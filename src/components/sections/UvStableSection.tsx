"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SunIcon, DropletsIcon, FlowerIcon } from "lucide-react";
import { ScrollReveal } from "@/components/animations";

const features = [
  {
    icon: <SunIcon className="w-5 h-5" />,
    title: "UV Stable",
    description: "Your driveway won't fade or discolour in sunlight — colours stay vibrant for decades.",
  },
  {
    icon: <DropletsIcon className="w-5 h-5" />,
    title: "Permeable",
    description: "SUDS-compliant surface that lets water drain through naturally, reducing puddles.",
  },
  {
    icon: <FlowerIcon className="w-5 h-5" />,
    title: "Weed Resistant",
    description: "No more weeding — resin bound surfaces prevent weed growth through the driveway.",
  },
];

export function UvStableSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Column */}
          <ScrollReveal className="flex-1 text-center lg:text-left">
            <span className="text-sm font-semibold text-[#c49835] uppercase tracking-[0.2em]">
              Built to Last
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] mt-2 tracking-tight leading-[1.1]">
              UV stable, Permeable &amp;
              <br />
              Weed resistant.
            </h2>
            <p className="text-base text-gray-500 mt-6 leading-relaxed max-w-lg">
              Whether you&apos;re replacing an old driveway or completely
              transforming your property&apos;s exterior, our team delivers
              professional results with outstanding attention to detail from
              start to finish.
            </p>

            {/* Feature Icons */}
            <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-[#c49835]/10 text-[#c49835] flex items-center justify-center">
                    {f.icon}
                  </div>
                  <span className="font-medium">{f.title}</span>
                </div>
              ))}
            </div>

            <Link
              href="tel:07530297072"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#c49835] text-white font-semibold rounded-full hover:bg-[#9e7929] transition-all duration-300 shadow-[0_4px_20px_rgba(196,152,53,0.3)] hover:shadow-[0_6px_24px_rgba(196,152,53,0.4)] group"
            >
              Call For A Free Quote
              <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          {/* Gallery Column */}
          <ScrollReveal direction="right" className="flex-1 flex gap-4">
            <div className="flex-1 space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/gallery-uv-1.jpg"
                  alt="Stunning resin driveway example"
                  width={400}
                  height={516}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 mt-8">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/gallery-uv-2.jpeg"
                  alt="Professional resin surfacing"
                  width={400}
                  height={516}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
