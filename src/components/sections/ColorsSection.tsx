"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { PaletteIcon, ChevronDownIcon } from "lucide-react";

interface ResinColor {
  name: string;
  slug: string;
  family: string;
  hex: string;
}

const resinColors: ResinColor[] = [
  // Greys & Charcoals
  { name: "Anthracite", slug: "anthracite", family: "Grey", hex: "#3a3d42" },
  { name: "Arctic Mist", slug: "arctic-mist", family: "Grey", hex: "#c4c9ce" },
  { name: "Blackheath", slug: "blackheath", family: "Grey", hex: "#2d2a27" },
  { name: "Big Sur", slug: "big-sur", family: "Grey", hex: "#7a7d7c" },
  { name: "Beretta", slug: "beretta", family: "Grey", hex: "#5c5e60" },
  { name: "Abisko", slug: "abisko", family: "Grey", hex: "#9ea3a3" },

  // Golds & Ambers
  { name: "Abbey Lodge", slug: "abbey-lodge", family: "Gold", hex: "#c4a265" },
  { name: "Amethyst Gold", slug: "amethyst-gold", family: "Gold", hex: "#d4b87a" },
  { name: "Alaskan Tundra", slug: "alaskan-tundra", family: "Gold", hex: "#c9b892" },
  { name: "Banff Springs", slug: "banff-springs", family: "Gold", hex: "#dcc89b" },
  { name: "Bellagio", slug: "bellagio", family: "Gold", hex: "#e0c992" },
  { name: "Augusta", slug: "augusta", family: "Gold", hex: "#c8a455" },

  // Warm Earth & Browns
  { name: "Atacama Desert", slug: "atacama-desert", family: "Brown", hex: "#b8936e" },
  { name: "Bison Ranch", slug: "bison-ranch", family: "Brown", hex: "#8b7355" },
  { name: "Bilsdon Park", slug: "bilsdon-park", family: "Brown", hex: "#a08060" },
  { name: "Ardennes", slug: "ardennes", family: "Brown", hex: "#967c63" },
  { name: "Benguela Cove", slug: "benguela-cove", family: "Brown", hex: "#7d6b55" },
  { name: "Bordeaux", slug: "bordeaux", family: "Brown", hex: "#8b5e4b" },

  // Terracottas & Reds
  { name: "Alhambra", slug: "alhambra", family: "Red", hex: "#c47a5a" },
  { name: "Arc de Triomphe", slug: "arc-de-triomphe", family: "Red", hex: "#b8725c" },
  { name: "Aphrodite", slug: "aphrodite", family: "Red", hex: "#d4957a" },
  { name: "Albay Island", slug: "albay-island", family: "Red", hex: "#cc8870" },

  // Blues & Greens
  { name: "Blue Lagoon", slug: "blue-lagoon", family: "Blue", hex: "#6b8da8" },
  { name: "Boa Vista", slug: "boa-vista", family: "Green", hex: "#8a9e7a" },
];

const colorFamilies = ["All", "Grey", "Gold", "Brown", "Red", "Blue", "Green"];

export function ColorsSection() {
  const [activeFamily, setActiveFamily] = useState("All");
  const [selectedColor, setSelectedColor] = useState<ResinColor | null>(null);

  const filtered =
    activeFamily === "All"
      ? resinColors
      : resinColors.filter((c) => c.family === activeFamily);

  return (
    <section id="colors" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#c49835] uppercase tracking-[0.2em]">
              <PaletteIcon className="w-4 h-4" />
              Colours
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] mt-2 tracking-tight leading-[1.1]">
              Choose Your Perfect Colour
            </h2>
            <p className="text-base text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
              We stock the full Vuba Surfaces range — over 150 stunning resin bound colour blends.
              Here are some of our most popular choices.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {colorFamilies.map((family) => (
            <motion.button
              key={family}
              onClick={() => setActiveFamily(family)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFamily === family
                  ? "bg-[#c49835] text-white shadow-[0_2px_8px_rgba(196,152,53,0.3)]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {family}
            </motion.button>
          ))}
        </div>

        {/* Colour Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="wait">
            {filtered.map((color) => (
              <StaggerItem key={color.slug}>
                <motion.button
                  onClick={() =>
                    setSelectedColor(selectedColor?.slug === color.slug ? null : color)
                  }
                  className="group w-full text-center focus:outline-none"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Swatch */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm mb-3 ring-1 ring-black/5 group-hover:shadow-lg transition-shadow duration-300">
                    {/* Base colour */}
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    {/* Speckle texture overlay */}
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 60% 70%, rgba(0,0,0,0.3) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 1.5px, transparent 1.5px), radial-gradient(circle at 40% 80%, rgba(0,0,0,0.2) 1px, transparent 1px), radial-gradient(circle at 10% 50%, rgba(255,255,255,0.25) 0.5px, transparent 0.5px)",
                          backgroundSize: "40px 40px, 35px 35px, 50px 50px, 45px 45px, 30px 30px",
                        }}
                      />
                    </div>
                    {/* Shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Selected indicator */}
                    {selectedColor?.slug === color.slug && (
                      <motion.div
                        className="absolute inset-0 ring-4 ring-[#c49835] rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                  </div>
                  {/* Name */}
                  <p className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#c49835] transition-colors">
                    {color.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{color.family}</p>
                </motion.button>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>

        {/* Selected colour detail */}
        <AnimatePresence>
          {selectedColor && (
            <motion.div
              className="mt-10 p-6 bg-[#f9fafb] rounded-2xl flex flex-col sm:flex-row items-center gap-6 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-20 h-20 rounded-xl shadow-md flex-shrink-0 ring-1 ring-black/5"
                style={{ backgroundColor: selectedColor.hex }}
              />
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold text-[#1a1a1a]">{selectedColor.name}</h4>
                <p className="text-sm text-gray-500">
                  {selectedColor.family} tone — part of the Vuba premium resin bound range
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Available in all our resin bound driveway, patio &amp; pathway installations
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom note */}
        <ScrollReveal>
          <p className="text-center text-sm text-gray-400 mt-12">
            This is just a selection — we stock the{" "}
            <span className="font-semibold text-[#c49835]">full Vuba Surfaces range</span> of
            150+ colours. Every colour comes with a
            <span className="font-semibold text-[#1a1a1a]"> 25-year product warranty</span> for
            complete peace of mind.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
