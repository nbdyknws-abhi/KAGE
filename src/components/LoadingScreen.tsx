import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        
        // Random incremental steps
        const step = Math.floor(Math.random() * 8) + 2;
        const nextProgress = Math.min(prev + step, 100);
        
        // Dynamic loading labels
        if (nextProgress < 30) {
          setStageText("ESTABLISHING TOKYO NODE [35.6762° N, 139.6503° E]...");
        } else if (nextProgress < 65) {
          setStageText("LOADING APPAREL CORE: DROP 009...");
        } else if (nextProgress < 90) {
          setStageText("STABILIZING NEON GRAPHICS GRID...");
        } else {
          setStageText("ENGAGING STEALTH INTERFACE...");
        }

        return nextProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark font-jakarta select-none overflow-hidden">
      {/* Cinematic grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="w-full max-w-xl px-8 flex flex-col items-center">
        {/* Main Logo Reveal */}
        <div className="relative mb-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <span className="font-syne text-5xl md:text-7xl font-extrabold tracking-[0.25em] text-white">
              KAGE
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.2, 1, 0.8, 1] }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="mt-2 text-brand-red font-jp text-3xl font-black tracking-widest text-glow-red"
          >
            影
          </motion.div>
        </div>

        {/* Loading details */}
        <div className="w-full mt-12 space-y-4">
          <div className="flex justify-between items-end font-mono text-[10px] text-brand-silver-dim tracking-wider">
            <span className="animate-pulse">{stageText}</span>
            <span className="text-brand-red font-bold text-xs">{progress}%</span>
          </div>

          {/* Progress bar container */}
          <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-red to-rose-500 relative"
              style={{ width: `${progress}%` }}
              layoutId="progressBar"
            >
              {/* Neon spark */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-red rounded-full filter blur-[4px]" />
            </motion.div>
          </div>

          {/* Futuristic bottom overlay specs */}
          <div className="flex justify-between font-mono text-[9px] text-white/20 pt-2 border-t border-white/5">
            <span>SYS.VER // 009.RONIN</span>
            <span>LOC.SYS // TYO.APRD</span>
          </div>
        </div>
      </div>

      {/* Frame decoration */}
      <div className="absolute top-6 left-6 font-mono text-[9px] text-white/20 tracking-widest hidden md:block">
        KAGE // STEALTH STREETWEAR EST. 2026
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-white/20 tracking-widest hidden md:block">
        [35.6762° N, 139.6503° E]
      </div>
    </div>
  );
};

export default LoadingScreen;
