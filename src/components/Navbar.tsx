import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Logo3D } from "./Logo3D";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, toggleDrawer } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="KAGE Home">
            <Logo3D />
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex space-x-12 items-center">
            {["COLLECTION", "LOOKBOOK", "PHILOSOPHY", "DROP"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs tracking-[0.2em] text-brand-silver-dim hover:text-white transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute left-0 right-0 bottom-[-4px] h-[1px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex space-x-8 items-center">
            <button className="flex items-center space-x-1 font-mono text-[10px] text-brand-silver-dim hover:text-white transition-colors">
              <Globe className="w-3.5 h-3.5" />
              <span>EN/JP</span>
            </button>
            <button
              onClick={toggleDrawer}
              className="relative p-2 text-brand-silver hover:text-brand-red transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-brand-red text-white text-[9px] font-bold rounded-full ring-2 ring-brand-dark">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleDrawer}
              className="relative p-2 text-brand-silver hover:text-brand-red transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-brand-red text-white text-[9px] font-bold rounded-full ring-2 ring-brand-dark">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-silver hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-24 bg-brand-dark/98 backdrop-blur-2xl flex flex-col md:hidden"
          >
            {/* Grid decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            <div className="flex flex-col space-y-8 items-center justify-center flex-1 px-6">
              {["COLLECTION", "LOOKBOOK", "PHILOSOPHY", "DROP"].map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-syne text-3xl font-extrabold tracking-widest text-brand-silver hover:text-brand-red transition-colors"
                >
                  {link}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8 flex flex-col items-center space-y-4 font-mono text-xs text-brand-silver-dim"
              >
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-brand-red" />
                  <span>TOKYO APPAREL LTD.</span>
                </div>
                <span>[35.6762° N, 139.6503° E]</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
