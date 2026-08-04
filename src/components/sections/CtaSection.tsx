"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";
import { ScrollReveal } from "@/components/animations";

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c49835]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c49835]/10 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold text-[#c49835] uppercase tracking-[0.2em]">
            Ready to Transform Your Property?
          </span>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold text-white mt-3 tracking-tight leading-[1.08]">
            Let&apos;s Create Something
            <br />
            <span className="text-gradient">Beautiful Together</span>
          </h2>
          <p className="text-base text-white/60 mt-5 max-w-md mx-auto leading-relaxed">
            Get in touch today for your free, no-obligation quote. Our friendly team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="tel:07530297072"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c49835] text-white font-semibold rounded-full hover:bg-[#9e7929] transition-all duration-300 shadow-[0_4px_20px_rgba(196,152,53,0.4)] hover:shadow-[0_6px_24px_rgba(196,152,53,0.5)] group"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Now
              <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#quote"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Request A Quote
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Trust indicators */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-white/50 text-xs sm:text-sm">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ color: "#c49835" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#c49835]" />
              Free, No-Obligation Quotes
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ color: "#c49835" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#c49835]" />
              Fully Insured & Guaranteed
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ color: "#c49835" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#c49835]" />
              20+ Years Expected Lifespan
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
