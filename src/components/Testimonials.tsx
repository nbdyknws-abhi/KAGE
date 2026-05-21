import React, { useState } from "react";
import { Star, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  source: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-01",
    quote: "Nobody is doing techwear quite like this right now. The fabric weight on the new Drop 009 jacket is insane, and the hardware feels virtually indestructible.",
    author: "KENJI SATO",
    title: "Chief Fashion Editor",
    source: "HARAJUKU CHRONICLES",
    rating: 5
  },
  {
    id: "test-02",
    quote: "I've worn these cargos every day for a month. The strap system actually works, it’s not just for show. Definitely my go-to pants right now.",
    author: "ELENA ROSTOVA",
    title: "Techwear Curator & Collector",
    source: "CYBERSTREET ARCHIVE",
    rating: 5
  },
  {
    id: "test-03",
    quote: "KAGE completely nails that dark, underground Tokyo aesthetic. The fits are perfectly oversized but somehow still look tailored. Just a brilliant collection.",
    author: "TAKASHI KIMURA",
    title: "Senior Stylist",
    source: "MODERN TOKYO MAG",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="testimonials" className="relative py-32 bg-brand-darker border-t border-b border-white/5 overflow-hidden">
      {/* Cinematic lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:8rem_8rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-brand-red tracking-[0.25em] uppercase flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-glow-red" />
            CRITICS // FEEDBACK
          </span>
          <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            Editorial Reviews
          </h2>
        </div>

        {/* Carousel Quote */}
        <div className="min-h-[220px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Rating */}
              <div className="flex justify-center space-x-1">
                {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red text-glow-red" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-syne text-xl md:text-2xl font-bold text-white tracking-wide leading-relaxed max-w-3xl mx-auto">
                "{TESTIMONIALS[activeIdx].quote}"
              </p>

              {/* Author info */}
              <div className="space-y-1 pt-4">
                <p className="font-mono text-xs text-brand-red tracking-widest font-bold uppercase">
                  {TESTIMONIALS[activeIdx].author}
                </p>
                <p className="font-mono text-[10px] text-brand-silver-dim tracking-wider">
                  {TESTIMONIALS[activeIdx].title} // <span className="text-white">{TESTIMONIALS[activeIdx].source}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-3 pt-6">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-1.5 transition-all duration-300 ${
                activeIdx === idx ? "w-8 bg-brand-red" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
