"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, StarIcon, ShieldCheckIcon } from "lucide-react";
import { siteContent } from "@/lib/content";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative w-full mx-auto max-w-[1200px] px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Column */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Trust badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#c49835]/10 rounded-full px-4 py-1.5 mb-6 text-[#1a1a1a] text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-3.5 h-3.5 text-[#c49835] fill-[#c49835]"
                  />
                ))}
              </div>
              <span>5-star rated local specialists</span>
            </motion.div>

            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold text-[#1a1a1a] leading-[1.08] tracking-tight mb-6">
              {hero.heading.split("&").map((part, i) => (
                <span key={i}>
                  {i > 0 && (
                    <span className="text-[#c49835]">&amp;</span>
                  )}
                  {part}
                </span>
              ))}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-3 max-w-xl">
              {hero.subheading}
            </p>

            {hero.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-base text-gray-500 leading-relaxed mb-3 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link
                href={hero.ctaHref}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#c49835] text-white font-semibold rounded-full hover:bg-[#9e7929] transition-all duration-300 shadow-[0_4px_20px_rgba(196,152,53,0.4)] hover:shadow-[0_6px_24px_rgba(196,152,53,0.5)] hover:scale-[1.03] active:scale-[0.97]"
              >
                {hero.ctaText}
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <ShieldCheckIcon className="w-5 h-5 text-[#c49835]" />
                <span>Fully insured &amp; guaranteed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#c49835]/10 rounded-2xl blur-3xl scale-90" />
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                width={500}
                height={556}
                className="relative max-w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
