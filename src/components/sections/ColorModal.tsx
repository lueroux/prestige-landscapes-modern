"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, SearchIcon, PaletteIcon } from "lucide-react";
import { allColors } from "@/lib/colors";

interface ColorModalProps {
  open: boolean;
  onClose: () => void;
}

export function ColorModal({ open, onClose }: ColorModalProps) {
  const [search, setSearch] = useState("");
  const [activeFamily, setActiveFamily] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const families = ["All", ...Array.from(new Set(allColors.map((c) => c.family))).sort()];

  const filtered = allColors.filter((c) => {
    const matchesSearch =
      !search || c.name.toLowerCase().includes(search.toLowerCase());
    const matchesFamily = !activeFamily || activeFamily === "All" || c.family === activeFamily;
    return matchesSearch && matchesFamily;
  });

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative w-full sm:max-w-3xl max-h-[90vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c49835]/10 text-[#c49835] flex items-center justify-center">
                  <PaletteIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">All Colours</h3>
                  <p className="text-xs text-gray-400">{allColors.length} resin bound blends</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <XIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="px-6 py-3 border-b border-gray-50 flex-shrink-0 space-y-3">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search colours..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c49835]/20"
                />
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {families.map((family) => (
                  <button
                    key={family}
                    onClick={() =>
                      setActiveFamily(activeFamily === family ? null : family === "All" ? null : family)
                    }
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      (activeFamily === family || (!activeFamily && family === "All"))
                        ? "bg-[#c49835] text-white"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {family}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {filtered.length === 0 ? (
                <p className="text-center text-gray-400 py-12">No colours match your search.</p>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {filtered.map((color, i) => (
                    <motion.div
                      key={color.slug}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.008, duration: 0.15 }}
                      className="group cursor-pointer text-center"
                    >
                      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 group-hover:shadow-md transition-shadow duration-300 bg-gray-100 mb-2">
                        <Image
                          src={`${color.image}&width=400`}
                          alt={color.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, 200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <p className="text-xs font-semibold text-[#1a1a1a] truncate px-0.5 group-hover:text-[#c49835] transition-colors">
                        {color.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
              <p className="text-center text-xs text-gray-400 mt-6 pb-2">
                Showing {filtered.length} of {allColors.length} colours
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
