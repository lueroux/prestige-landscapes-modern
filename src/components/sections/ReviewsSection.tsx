"use client";

import { motion } from "framer-motion";
import { StarIcon, QuoteIcon } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { siteContent } from "@/lib/content";

export function ReviewsSection() {
  const { testimonials } = siteContent;

  return (
    <section
      id="reviews"
      className="relative py-24 lg:py-32"
      style={{
        backgroundImage: "url(/images/parallax-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
      <div className="absolute inset-0 bg-[#c49835]/5" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#c49835] uppercase tracking-[0.2em]">
              Testimonials
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white mt-2 tracking-tight leading-[1.1]">
              What Our Customers Say
            </h2>
            <p className="text-base text-white/60 mt-4 max-w-lg mx-auto">
              Don&apos;t just take our word for it — hear from our happy clients
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <motion.div
                className="relative glass rounded-2xl p-8 h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Quote icon */}
                <QuoteIcon className="w-8 h-8 text-[#c49835]/40 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-4 h-4 text-[#c49835] fill-[#c49835]"
                    />
                  ))}
                </div>

                <p className="text-[15px] text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c49835]/10 text-[#c49835] flex items-center justify-center font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a1a]">{t.author}</p>
                    <p className="text-xs text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
