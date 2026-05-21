import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const [tokyoTime, setTokyoTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTokyoTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-darker border-t border-white/5 py-20 overflow-hidden">
      {/* Editorial layout container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="font-syne text-3xl font-extrabold tracking-[0.25em] text-white">
                KAGE
              </span>
              <span className="font-jp text-xl text-brand-red font-black text-glow-red">
                影
              </span>
            </div>
            <p className="text-brand-silver-dim text-xs font-light max-w-xs leading-relaxed">
              Stealth fashion aesthetics engineered for urban survival. Designed in Tokyo, distributed globally.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 border border-white/10 hover:border-brand-red text-brand-silver-dim hover:text-white transition-colors duration-300" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="p-2 border border-white/10 hover:border-brand-red text-brand-silver-dim hover:text-white transition-colors duration-300" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="p-2 border border-white/10 hover:border-brand-red text-brand-silver-dim hover:text-white transition-colors duration-300" aria-label="Github">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <a href="#collection" className="text-brand-silver-dim hover:text-brand-red transition-colors">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#lookbook" className="text-brand-silver-dim hover:text-brand-red transition-colors">
                    Lookbook
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="text-brand-silver-dim hover:text-brand-red transition-colors">
                    Philosophy
                  </a>
                </li>
                <li>
                  <a href="#drop" className="text-brand-silver-dim hover:text-brand-red transition-colors">
                    Active Drop
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                System Support
              </h4>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <a href="#" className="text-brand-silver-dim hover:text-brand-red transition-colors">
                    Access Protocols
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-silver-dim hover:text-brand-red transition-colors">
                    Size Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-silver-dim hover:text-brand-red transition-colors">
                    Shipping Nodes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brand-silver-dim hover:text-brand-red transition-colors">
                    Decrypt Key
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Tokyo Clock & Location */}
          <div className="md:col-span-3 space-y-4 md:text-right flex flex-col md:items-end justify-between">
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                Tokyo Night Cycle
              </h4>
              <div className="font-mono text-xl text-brand-red font-bold text-glow-red tracking-wider">
                {tokyoTime || "00:00:00"} <span className="text-[10px] text-brand-silver-dim ml-1">JST</span>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-3 border border-white/10 hover:border-brand-red text-brand-silver hover:text-white transition-all duration-300 flex items-center space-x-2 font-mono text-[9px] tracking-widest uppercase self-start md:self-end"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-red" />
            </button>
          </div>

        </div>

        {/* Footer Base */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] text-white/20 gap-4">
          <p>© {new Date().getFullYear()} KAGE APPAREL DIVISION. ALL SHADOWS SECURED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY MATRIX</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF TRANSMISSION</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
