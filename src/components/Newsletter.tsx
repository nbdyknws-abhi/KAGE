import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Decorative vector lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,60,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-brand-red tracking-[0.30em] uppercase">
            // NODE.JOIN_TRANSMISSION
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            Secure Early Access
          </h2>
          <p className="text-brand-silver-dim text-sm font-light leading-relaxed">
            Subscribe to the encrypted KAGE mainframe. Receive notifications on limited clothing fabrication drops, Tokyo warehouse sales, and priority shipping credentials.
          </p>

          <div className="pt-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="ENTER CODENAME@NODE.COM"
                    className="w-full pl-12 pr-4 py-4 bg-brand-darker border border-white/10 hover:border-brand-red/35 focus:border-brand-red focus:outline-none text-white font-mono text-xs tracking-wider placeholder:text-white/20 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-black hover:bg-brand-red hover:text-white hover:shadow-[0_0_20px_rgba(255,0,60,0.4)] transition-all duration-300 font-mono text-xs tracking-widest font-bold uppercase shrink-0"
                >
                  Join Grid
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-red border border-brand-red/20 p-6 flex items-center justify-center space-x-3 max-w-md mx-auto"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-red text-glow-red shrink-0" />
                <div className="text-left font-mono text-xs">
                  <p className="text-white font-bold tracking-widest">TRANSMISSION SECURED.</p>
                  <p className="text-brand-silver-dim text-[10px]">Access code sent to your grid mailbox.</p>
                </div>
              </motion.div>
            )}
          </div>
          
          <p className="font-mono text-[9px] text-white/20 uppercase tracking-wider">
            No spam. Fully encrypted system. Standard protocol applies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
