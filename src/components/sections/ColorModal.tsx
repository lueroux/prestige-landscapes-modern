"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, SearchIcon, PaletteIcon } from "lucide-react";

interface ResinColor {
  name: string;
  family: string;
}

// Full Vuba colour catalogue — extracted from Shopify API
const allColors: ResinColor[] = [
  { name: "Abbey Lodge", family: "Gold" },
  { name: "Abisko", family: "Grey" },
  { name: "Alaskan Tundra", family: "Gold" },
  { name: "Albay Island", family: "Red" },
  { name: "Alhambra", family: "Red" },
  { name: "Amethyst Gold", family: "Purple" },
  { name: "Anthracite", family: "Grey" },
  { name: "Aphrodite", family: "Neutral" },
  { name: "Arc de Triomphe", family: "Red" },
  { name: "Arctic Mist", family: "Grey" },
  { name: "Ardennes", family: "Brown" },
  { name: "Atacama Desert", family: "Brown" },
  { name: "Augusta", family: "Gold" },
  { name: "Banff Springs", family: "Red" },
  { name: "Bellagio", family: "Grey" },
  { name: "Benguela Cove", family: "Grey" },
  { name: "Beretta", family: "Grey" },
  { name: "Big Sur", family: "Warm" },
  { name: "Bilsdon Park", family: "Brown" },
  { name: "Bison Ranch", family: "Brown" },
  { name: "Blackheath", family: "Grey" },
  { name: "Blue Lagoon", family: "Blue" },
  { name: "Boa Vista", family: "Blue" },
  { name: "Bordeaux", family: "Red" },
  { name: "Boulder", family: "Grey" },
  { name: "Breckenridge", family: "Warm" },
  { name: "Brooklyn Bridge", family: "Brown" },
  { name: "Caldera", family: "Red" },
  { name: "Canary Wharf", family: "Grey" },
  { name: "Canberra", family: "Brown" },
  { name: "Canyon Stone", family: "Red" },
  { name: "Cape Parry", family: "Neutral" },
  { name: "Carnsore Point", family: "Grey" },
  { name: "Carthage", family: "Neutral" },
  { name: "Casablanca", family: "Grey" },
  { name: "Catalina", family: "Red" },
  { name: "Chinatown", family: "Red" },
  { name: "Chrysler", family: "Grey" },
  { name: "Clancy Manor", family: "Brown" },
  { name: "Columbo", family: "Warm" },
  { name: "Conwy Castle", family: "Purple" },
  { name: "Copplestone", family: "Grey" },
  { name: "Cosmo", family: "Grey" },
  { name: "Da Vinci", family: "Red" },
  { name: "Dahra Range", family: "Red" },
  { name: "Dalby Forest", family: "Brown" },
  { name: "Duomo", family: "Neutral" },
  { name: "Ellis Island", family: "Brown" },
  { name: "Empire State", family: "Grey" },
  { name: "Everest", family: "Brown" },
  { name: "Goose Creek", family: "Neutral" },
  { name: "Grand Central", family: "Grey" },
  { name: "Gravette", family: "Neutral" },
  { name: "Havasu Falls", family: "Red" },
  { name: "Hawkes Bay", family: "Grey" },
  { name: "Houston", family: "Red" },
  { name: "Hudson Bay", family: "Grey" },
  { name: "Iggle Farm", family: "Warm" },
  { name: "Ipanema Beach", family: "Neutral" },
  { name: "Key West", family: "Warm" },
  { name: "Kilimanjaro", family: "Brown" },
  { name: "Kingsweir", family: "Purple" },
  { name: "Kinnear Park", family: "Neutral" },
  { name: "Kyoto Fall", family: "Grey" },
  { name: "La Rambla", family: "Brown" },
  { name: "Lake Louise", family: "Grey" },
  { name: "Lake Tahoe", family: "Grey" },
  { name: "Lismore", family: "Warm" },
  { name: "London Stone", family: "Grey" },
  { name: "Luxor Temple", family: "Red" },
  { name: "Machu Picchu", family: "Red" },
  { name: "Marion Peak", family: "Neutral" },
  { name: "Matterhorn", family: "Grey" },
  { name: "Merano", family: "Warm" },
  { name: "Merlot", family: "Red" },
  { name: "Milano Marble", family: "Red" },
  { name: "Monticello", family: "Grey" },
  { name: "Moulin Rouge", family: "Red" },
  { name: "Mount Etna", family: "Red" },
  { name: "Mount Yoshino", family: "Neutral" },
  { name: "Murcia", family: "Neutral" },
  { name: "Nala Park", family: "Neutral" },
  { name: "Nashville", family: "Red" },
  { name: "Necker Island", family: "Neutral" },
  { name: "New Antigua", family: "Neutral" },
  { name: "New Bastille", family: "Brown" },
  { name: "New Bellegarde", family: "Warm" },
  { name: "New Blue Lagoon", family: "Grey" },
  { name: "New Bondi Breeze", family: "Neutral" },
  { name: "New Colorado", family: "Grey" },
  { name: "New Cortina", family: "Neutral" },
  { name: "New Dakar", family: "Warm" },
  { name: "New Dolorosa", family: "Warm" },
  { name: "New Galway Beach", family: "Warm" },
  { name: "New Huka Falls", family: "Warm" },
  { name: "New Jamboree", family: "Red" },
  { name: "New La Rochelle", family: "Neutral" },
  { name: "New Lake Garda", family: "Grey" },
  { name: "New Lerins", family: "Neutral" },
  { name: "New Manhattan", family: "Grey" },
  { name: "New Marietta", family: "Neutral" },
  { name: "New Milano Marble", family: "Red" },
  { name: "New Montecristo", family: "Warm" },
  { name: "New Palazzo", family: "Grey" },
  { name: "New Pantheon", family: "Warm" },
  { name: "New Petra Stone", family: "Neutral" },
  { name: "New Sedona", family: "Red" },
  { name: "New The Cotswolds", family: "Red" },
  { name: "New The Met", family: "Grey" },
  { name: "New Vernazza", family: "Warm" },
  { name: "New Whitby Abbey", family: "Warm" },
  { name: "New Winnipeg", family: "Warm" },
  { name: "New Yampa River", family: "Brown" },
  { name: "Niagara Falls", family: "Neutral" },
  { name: "Notre Dame", family: "Neutral" },
  { name: "Odessa", family: "Grey" },
  { name: "OG Palazzo", family: "Grey" },
  { name: "Original Bastille", family: "Brown" },
  { name: "Original Manhattan", family: "Grey" },
  { name: "Original Milano Marble", family: "Red" },
  { name: "Palermo", family: "Neutral" },
  { name: "Palladium", family: "Grey" },
  { name: "Palmer Lake", family: "Neutral" },
  { name: "Park Lane", family: "Grey" },
  { name: "Patagonia", family: "Brown" },
  { name: "Pearl River", family: "Neutral" },
  { name: "Penrith", family: "Brown" },
  { name: "Pompeii", family: "Purple" },
  { name: "Porta Romana", family: "Red" },
  { name: "Porters Rock", family: "Grey" },
  { name: "Portree", family: "Brown" },
  { name: "Portrush", family: "Neutral" },
  { name: "Poseidon", family: "Grey" },
  { name: "Red Galaxy", family: "Red" },
  { name: "Rio Medina", family: "Neutral" },
  { name: "River Yamuna", family: "Neutral" },
  { name: "Rockefeller", family: "Grey" },
  { name: "Sagrada Familia", family: "Warm" },
  { name: "Saint Antoine", family: "Brown" },
  { name: "Saint Michael", family: "Warm" },
  { name: "Santa Maria", family: "Neutral" },
  { name: "Santiago", family: "Brown" },
  { name: "Sefton Park", family: "Grey" },
  { name: "Seine", family: "Grey" },
  { name: "Sennen Cove", family: "Neutral" },
  { name: "Serravalle Hill", family: "Warm" },
  { name: "Shirebrook", family: "Brown" },
  { name: "Siberian Granite", family: "Grey" },
  { name: "Silverstrand", family: "Grey" },
  { name: "Sintra", family: "Warm" },
  { name: "Sistine Chapel", family: "Neutral" },
  { name: "Sky Pool", family: "Neutral" },
  { name: "Sonoran Desert", family: "Red" },
  { name: "St Ives", family: "Neutral" },
  { name: "St Kitts", family: "Purple" },
  { name: "Stromboli", family: "Grey" },
  { name: "Sunstone Shore", family: "Warm" },
  { name: "SureSet New Aztec Gold", family: "Neutral" },
  { name: "SureSet New Barley Butter", family: "Brown" },
  { name: "SureSet New Butterscotch", family: "Neutral" },
  { name: "Svalbard", family: "Grey" },
  { name: "Sydney Harbour", family: "Grey" },
  { name: "Sylvan Lake", family: "Neutral" },
  { name: "Taj Mahable", family: "Red" },
  { name: "Tallahassee", family: "Red" },
  { name: "Tennessee", family: "Brown" },
  { name: "The Basilica", family: "Neutral" },
  { name: "The Burj", family: "Neutral" },
  { name: "Thornton Dale", family: "Brown" },
  { name: "Tokyo Blossom", family: "Red" },
  { name: "Topaz", family: "Neutral" },
  { name: "Trafalgar", family: "Grey" },
  { name: "Trail Ridge", family: "Grey" },
  { name: "Treasure Beach", family: "Red" },
  { name: "Turtle Bay", family: "Red" },
  { name: "Tuscan", family: "Neutral" },
  { name: "Valentini", family: "Grey" },
  { name: "Vanderbilt", family: "Grey" },
  { name: "Verona", family: "Neutral" },
  { name: "Versailles", family: "Grey" },
  { name: "Vesuvian", family: "Grey" },
  { name: "Villa Fabri", family: "Neutral" },
  { name: "Whitstable", family: "Neutral" },
  { name: "Windsor Park", family: "Warm" },
  { name: "Yorkshire Tweed", family: "Warm" },
];

// Family colour mapping for swatches
const familyColors: Record<string, string> = {
  Grey: "#8a8d91",
  Gold: "#c4a265",
  Brown: "#8b7355",
  Red: "#c47a5a",
  Purple: "#7b5ea7",
  Blue: "#6b8da8",
  Green: "#8a9e7a",
  Neutral: "#c4bfb4",
  Warm: "#d4b87a",
};

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
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full sm:max-w-3xl max-h-[90vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c49835]/10 text-[#c49835] flex items-center justify-center">
                  <PaletteIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">All Vuba Colours</h3>
                  <p className="text-xs text-gray-400">{allColors.length} colours available</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <XIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Search & Filter */}
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

            {/* Colour list */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {filtered.length === 0 ? (
                <p className="text-center text-gray-400 py-12">No colours match your search.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {filtered.map((color, i) => (
                    <motion.div
                      key={color.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.01, duration: 0.2 }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex-shrink-0 ring-1 ring-black/5 shadow-sm"
                        style={{ backgroundColor: familyColors[color.family] || "#ccc" }}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[#1a1a1a] truncate group-hover:text-[#c49835] transition-colors">
                          {color.name}
                        </p>
                        <p className="text-[11px] text-gray-400">{color.family}</p>
                      </div>
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
