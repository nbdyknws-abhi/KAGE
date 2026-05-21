import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap } from "lucide-react";

interface Principle {
  number: string;
  title: string;
  jpTitle: string;
  description: string;
  icon: React.ComponentType<any>;
}

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Stealth Stealth (影武者)",
    jpTitle: "完全なる秘匿",
    description: "We don't do loud. It's about dark palettes, matte fabrics, and details only you know are there. Blend in, until you decide not to.",
    icon: Shield
  },
  {
    number: "02",
    title: "Urban Shield (都市防護)",
    jpTitle: "極限の機能性",
    description: "Form follows function, always. Heavy-duty ripstop, weatherproof shells, and hardware built to outlast whatever the city throws at you.",
    icon: Cpu
  },
  {
    number: "03",
    title: "Neon Horizon (未来への適応)",
    jpTitle: "電脳との融和",
    description: "Pushing the limits of what clothes can do. We're taking traditional Japanese tailoring and injecting it with raw, industrial utility.",
    icon: Zap
  }
];

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-[20%] w-[1px] bg-white/3 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 left-[50%] w-[1px] bg-white/3 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 left-[80%] w-[1px] bg-white/3 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs text-brand-red tracking-[0.25em] uppercase">
              // LOG.09_BRAND_MISSION
            </span>
            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Born in Tokyo.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-silver via-white to-brand-red">Built for the Grid.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pt-4 lg:pt-12">
            <p className="font-mono text-xs text-white/40 border-l border-brand-red pl-4">
              KAGE [影] exists in the grey area between high fashion, underground techwear, and pure survival gear.
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRINCIPLES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-brand-dark border border-white/5 p-8 hover:border-brand-red/35 transition-all duration-500 overflow-hidden flex flex-col justify-between h-[320px]"
              >
                {/* Background corner Kanji */}
                <span className="absolute -bottom-4 -right-4 font-jp text-[8rem] font-bold text-white/2 select-none pointer-events-none transition-all duration-500 group-hover:text-brand-red/4 group-hover:scale-105">
                  {item.jpTitle.slice(0, 1)}
                </span>

                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-brand-red font-bold">
                      {item.number}
                    </span>
                    <h3 className="font-syne text-xl font-bold text-white tracking-tight uppercase group-hover:text-brand-red transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-jp text-[10px] text-brand-silver-dim tracking-widest uppercase">
                      {item.jpTitle}
                    </p>
                  </div>
                  <Icon className="w-5 h-5 text-white/30 group-hover:text-brand-red group-hover:animate-pulse transition-colors duration-300" />
                </div>

                <p className="text-brand-silver-dim text-sm font-light leading-relaxed relative z-10 pt-8">
                  {item.description}
                </p>

                {/* Bottom line neon hover */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* Big Background Banner Typography */}
        <div className="mt-28 overflow-hidden select-none pointer-events-none opacity-3 hidden md:block">
          <span className="font-syne text-[8vw] font-black tracking-[0.2em] text-white/3 text-center uppercase block leading-none">
            TOKYO NEON TECH
          </span>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
