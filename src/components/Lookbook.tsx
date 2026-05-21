import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Look {
  id: string;
  number: string;
  title: string;
  jpTitle: string;
  image: string;
  location: string;
  time: string;
  model: string;
  description: string;
  outfit: string[];
}

const LOOKS: Look[] = [
  {
    id: "look-01",
    number: "LOOK_01",
    title: "Cyber Chrome Shinobi",
    jpTitle: "電脳の忍者",
    image: "/images/lookbook_1.png",
    location: "SHINJUKU SUB-DISTRICT 3",
    time: "23:45 JST",
    model: "SIRIUS // MODEL-98",
    description: "Our take on wet-weather mobility. The micro-reflective shell reacts to harsh light, keeping you visible when you need to be, and completely stealth when you don't.",
    outfit: ["Cyber Reflection Windbreaker", "Stealth Cargo Harness", "Shinobi Cargo Pants", "Stealth Compression Gloves"]
  },
  {
    id: "look-02",
    number: "LOOK_02",
    title: "Ronin Tokyo Overdrive",
    jpTitle: "浪人の夜間疾走",
    image: "/images/lookbook_2.png",
    location: "AKIHABARA NEON GRID",
    time: "02:15 JST",
    model: "TAKA // MODEL-04",
    description: "Layered up for late nights out. Heavy insulation, ridiculous amounts of storage, and cuts that look just as good on a bike as they do in the club.",
    outfit: ["Ronin Tactical Vest", "Stealth Cotton Oversized Hood", "Shinobi Cargo Pants", "KAGE Modular Tech Pack"]
  },
  {
    id: "look-03",
    number: "LOOK_03",
    title: "Urban Ninja Tech",
    jpTitle: "ネオンの雨",
    image: "/images/lookbook_3.png",
    location: "KABUKICHO ALLEYWAY 9",
    time: "01:10 JST",
    model: "YUKI // MODEL-12",
    description: "Built for total anonymity in crowded neon spaces. Matte textures absorb ambient light, while the tactical mask filters out the city's toxic haze.",
    outfit: ["Neon Cyber-Mask", "KAGE Technical Hoodie", "Tactical Utility Harness"]
  },
  {
    id: "look-04",
    number: "LOOK_04",
    title: "Holo-Grid Runner",
    jpTitle: "ホログラム",
    image: "/images/lookbook_4.png",
    location: "SHIBUYA CROSSING AR",
    time: "21:30 JST",
    model: "REI // MODEL-07",
    description: "Metallic surfaces designed to refract holographic projections. When the city becomes a screen, your garments become the canvas.",
    outfit: ["Metallic Cargo Pants", "Heavyweight Kanji Tee", "KAGE Tactical Sneakers"]
  },
  {
    id: "look-05",
    number: "LOOK_05",
    title: "Subway Operative",
    jpTitle: "地下鉄の影",
    image: "/images/lookbook_5.png",
    location: "TOKYO METRO DEEP LEVEL",
    time: "03:40 JST",
    model: "KEN // MODEL-22",
    description: "Thermal regulation systems for the underground. Multi-layered outerwear that adapts instantly from the freezing surface to the sweltering subway platforms.",
    outfit: ["Ronin Tactical Vest", "Shinobi Cargo Pants", "Thermal Core Base Layer"]
  },
  {
    id: "look-06",
    number: "LOOK_06",
    title: "Neo-Tokyo Nomad",
    jpTitle: "夜景の放浪者",
    image: "/images/lookbook_6.png",
    location: "ROPPONGI HIGH-RISE ROOF",
    time: "00:05 JST",
    model: "SORA // MODEL-18",
    description: "High-altitude wind resistance. The aesthetic of the cyber-drifter, featuring modular attachments and integrated communication lines.",
    outfit: ["KAGE Technical Hoodie", "Cyber Reflection Windbreaker", "KAGE Tactical Sneakers"]
  },
  {
    id: "look-07",
    number: "LOOK_07",
    title: "Cybernetic Drift",
    jpTitle: "サイバー暴走",
    image: "/images/lookbook_7.png",
    location: "BAY AREA CONCRETE BRIDGE",
    time: "04:20 JST",
    model: "RYU // MODEL-11",
    description: "Engineered for high-speed friction. Aerodynamic cuts and heavy-duty abrasion-resistant fabrics that withstand the reality of the Tokyo drift.",
    outfit: ["Cyber Reflection Windbreaker", "Modular Crossbody Bag", "Stealth Moto Denim"]
  },
  {
    id: "look-08",
    number: "LOOK_08",
    title: "Static Interference",
    jpTitle: "ノイズの干渉",
    image: "/images/lookbook_8.png",
    location: "AKIHABARA BLACK MARKET",
    time: "19:55 JST",
    model: "LUM // MODEL-33",
    description: "Distressed aesthetics inspired by analog decay. Pre-worn textures meet high-tech modular functionality for a truly dystopian silhouette.",
    outfit: ["Distressed Tactical Jacket", "Heavyweight Kanji Tee", "Shinobi Cargo Pants"]
  },
  {
    id: "look-09",
    number: "LOOK_09",
    title: "Hardware Profile: Respirator",
    jpTitle: "ハードウェア",
    image: "/images/mask.png",
    location: "KAGE R&D LAB",
    time: "CLASSIFIED",
    model: "HARDWARE_ONLY",
    description: "A closer look at our N95-rated cyber mask. Featuring magnetic release clips and subtle LED tracing lines for zero-visibility environments.",
    outfit: ["Neon Cyber-Mask", "Breathable Mesh Structure"]
  },
  {
    id: "look-10",
    number: "LOOK_10",
    title: "Hardware Profile: Ground Tech",
    jpTitle: "足元の技術",
    image: "/images/sneakers.png",
    location: "KAGE R&D LAB",
    time: "CLASSIFIED",
    model: "HARDWARE_ONLY",
    description: "The foundation of the urban operative. Chunky shock-absorbing soles paired with nylon structural straps and glowing neon accents.",
    outfit: ["KAGE Tactical Sneakers", "Water-resistant Mesh Upper"]
  }
];

export const Lookbook: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const activeLook = LOOKS[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % LOOKS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + LOOKS.length) % LOOKS.length);
  };

  return (
    <section id="lookbook" className="relative py-32 bg-brand-darker border-t border-b border-white/5 overflow-hidden">
      {/* Background neon grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,60,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,60,0.005)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="font-mono text-xs text-brand-red tracking-[0.25em] flex items-center gap-2">
              <Camera className="w-4 h-4 animate-pulse" />
              TOKYO_EDITORIAL.RAW
            </span>
            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
              Lookbook 009
            </h2>
          </div>
          
          {/* Custom Slider Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              className="p-4 border border-white/10 hover:border-brand-red hover:bg-brand-red/5 text-brand-silver hover:text-white transition-all duration-300"
              aria-label="Previous look"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-brand-silver">
              {String(currentIdx + 1).padStart(2, "0")} / {String(LOOKS.length).padStart(2, "0")}
            </span>
            <button
              onClick={handleNext}
              className="p-4 border border-white/10 hover:border-brand-red hover:bg-brand-red/5 text-brand-silver hover:text-white transition-all duration-300"
              aria-label="Next look"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lookbook Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Showcase Image Side */}
          <div className="lg:col-span-7 relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            
            <div className="aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] bg-neutral-900 overflow-hidden relative border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeLook.id}
                  src={activeLook.image}
                  alt={activeLook.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Technical floating stamps */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 font-mono text-[9px] text-white/70 border border-white/5 uppercase">
                ISO 400 // shutter: 1/160
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 font-mono text-[9px] text-brand-red border border-white/5 uppercase tracking-widest text-glow-red">
                STABILIZED SYSTEM
              </div>
            </div>
          </div>

          {/* Details Column Side */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLook.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Look Tag */}
                <div className="flex items-center space-x-3 font-mono text-xs">
                  <span className="text-brand-red font-bold tracking-[0.25em]">
                    {activeLook.number}
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/50 tracking-wider">
                    {activeLook.location}
                  </span>
                </div>

                {/* Main Titles */}
                <div className="space-y-2">
                  <h3 className="font-syne text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase leading-none">
                    {activeLook.title}
                  </h3>
                  <p className="font-jp text-lg text-brand-red text-glow-red font-semibold">
                    {activeLook.jpTitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-brand-silver-dim text-sm font-light leading-relaxed">
                  {activeLook.description}
                </p>

                {/* Style Breakdown */}
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block">
                    Style Profile Breakdown:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLook.outfit.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 bg-brand-dark border border-white/5 px-4 py-3"
                      >
                        <span className="font-mono text-[10px] text-brand-red">0{idx + 1}</span>
                        <span className="font-mono text-xs text-brand-silver tracking-wide truncate">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Model Overlay Details */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5 font-mono text-[10px] text-white/30">
                  <p>TIME: {activeLook.time}</p>
                  <p>CODENAME: {activeLook.model}</p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lookbook;
