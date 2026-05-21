import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export const Countdown: React.FC = () => {
  // Target date is dynamically set to 8 days, 14 hours, and 32 minutes from the current system time
  const [targetDate] = useState(() => {
    return new Date().getTime() + (8 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (32 * 60 * 1000);
  });

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0")
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="drop" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Decorative background grid and neon points */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="glass-red border border-brand-red/30 p-8 md:p-16 relative overflow-hidden">
          
          {/* Cyberpunk corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-[2px] bg-brand-red" />
          <div className="absolute top-0 left-0 w-[2px] h-6 bg-brand-red" />
          <div className="absolute top-0 right-0 w-6 h-[2px] bg-brand-red" />
          <div className="absolute top-0 right-0 w-[2px] h-6 bg-brand-red" />
          <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-brand-red" />
          <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-brand-red" />
          <div className="absolute bottom-0 right-0 w-6 h-[2px] bg-brand-red" />
          <div className="absolute bottom-0 right-0 w-[2px] h-6 bg-brand-red" />

          {/* Alert Header */}
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <span className="font-mono text-xs text-brand-red tracking-[0.3em] flex items-center gap-2 uppercase">
              <AlertTriangle className="w-4 h-4 animate-bounce text-brand-red text-glow-red" />
              CRITICAL ACCESS TIME // SYSTEM LOCKDOWN IN PROGRESS
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              Drop 009: Ronin System
            </h2>
            <p className="font-mono text-xs text-brand-silver-dim tracking-wide max-w-md">
              Limited run of 150 items worldwide. No restocks. Access codes will be dispatched to subscribers first.
            </p>
          </div>

          {/* Countdown Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            
            {/* Days */}
            <div className="bg-brand-dark/50 border border-white/5 p-6 flex flex-col justify-center">
              <span className="font-syne text-5xl md:text-7xl font-extrabold text-white tracking-tighter text-glow-red font-mono">
                {timeLeft.days}
              </span>
              <span className="font-mono text-[9px] text-white/30 tracking-[0.25em] uppercase mt-2">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="bg-brand-dark/50 border border-white/5 p-6 flex flex-col justify-center">
              <span className="font-syne text-5xl md:text-7xl font-extrabold text-white tracking-tighter text-glow-red font-mono">
                {timeLeft.hours}
              </span>
              <span className="font-mono text-[9px] text-white/30 tracking-[0.25em] uppercase mt-2">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-brand-dark/50 border border-white/5 p-6 flex flex-col justify-center">
              <span className="font-syne text-5xl md:text-7xl font-extrabold text-white tracking-tighter text-glow-red font-mono">
                {timeLeft.minutes}
              </span>
              <span className="font-mono text-[9px] text-white/30 tracking-[0.25em] uppercase mt-2">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-brand-dark/50 border border-white/5 p-6 flex flex-col justify-center">
              <span className="font-syne text-5xl md:text-7xl font-extrabold text-brand-red tracking-tighter text-glow-red font-mono">
                {timeLeft.seconds}
              </span>
              <span className="font-mono text-[9px] text-brand-red/50 tracking-[0.25em] uppercase mt-2">
                Seconds
              </span>
            </div>

          </div>

          {/* Interactive drop status panel */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 max-w-3xl mx-auto font-mono text-[10px] text-white/30 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span>SERVER: ONLINE [TOKYO-CORE]</span>
            </div>
            <div className="hidden md:block">|</div>
            <div>FABRICATION STATUS: COMPLETE [150/150]</div>
            <div className="hidden md:block">|</div>
            <div>RESERVE LIMIT: 1 ITEM PER NODE</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Countdown;
