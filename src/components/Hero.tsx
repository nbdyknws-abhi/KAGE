import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Kage Streetwear Tokyo Campaign"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_8s_infinite] transition-transform duration-1000"
          style={{ transform: "scale(1.02)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark/40" />
      </div>

      {/* Cyberpunk Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-end pb-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Main Titles */}
          <div className="lg:col-span-8 space-y-4">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center space-x-4 font-mono text-xs md:text-sm tracking-[0.3em] text-brand-red text-glow-red"
              >
                <span>[ TOKYO OVERDRIVE DROP 009 ]</span>
              </motion.div>
            </div>

            <div className="relative">
              {/* Giant background Japanese Kanji */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.15, x: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute -top-12 -left-6 font-jp text-9xl md:text-[14rem] font-black text-brand-red select-none pointer-events-none"
              >
                影
              </motion.div>

              <div className="overflow-hidden relative z-10">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-syne text-6xl sm:text-8xl md:text-[10rem] font-extrabold tracking-tighter leading-none text-white flex flex-col"
                >
                  <span>KAGE</span>
                </motion.h1>
              </div>
            </div>

            <div className="overflow-hidden max-w-xl">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-brand-silver-dim text-sm md:text-base font-light tracking-wide leading-relaxed"
              >
                Forged in the underground. KAGE blends avant-garde silhouettes with military-grade utility for the modern dystopian landscape.
              </motion.p>
            </div>
          </div>

          {/* CTA Buttons & Info */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-6 lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#collection"
                className="px-6 py-3.5 bg-brand-red text-white hover:bg-brand-neon hover:shadow-[0_0_25px_rgba(255,0,60,0.5)] transition-all duration-300 font-mono text-xs tracking-widest flex items-center space-x-3 group uppercase"
              >
                <span>Explore Drop</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#lookbook"
                className="px-6 py-3.5 border border-white/20 text-brand-silver hover:text-white hover:bg-white/5 transition-all duration-300 font-mono text-xs tracking-widest uppercase"
              >
                Lookbook
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-mono text-[10px] text-white/40 space-y-1"
            >
              <p>DESIGNED IN HARAJUKU // MFG. DIVISION 09</p>
              <p>LATENCY RATIO: ACTIVE // CODE SECURED</p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating coordinates indicator */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center space-y-6">
        <span className="font-mono text-[9px] text-white/30 tracking-[0.3em] rotate-90 origin-center whitespace-nowrap">
          SHIBUYA JUNCTION // 35.6580° N
        </span>
        <div className="w-[1px] h-16 bg-white/10" />
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 0.6 }, y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => {
          document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-white/30 mb-2 uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-brand-red" />
      </motion.div>
    </section>
  );
};

export default Hero;
