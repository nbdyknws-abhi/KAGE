import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "../context/CartContext";

export const CartDrawer: React.FC = () => {
  const { cart, isDrawerOpen, toggleDrawer, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Helper to strip non-numeric chars (except .) to calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const priceVal = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return total + priceVal * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Mock a 2 second API call
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 2000);
  };

  const closeDrawer = () => {
    toggleDrawer();
    // Reset order completion state when closing if it was complete
    setTimeout(() => {
      if (orderComplete) setOrderComplete(false);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-darker/80 backdrop-blur-sm"
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-[#0A0A0A] border-l border-white/10 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5 text-brand-red text-glow-red" />
                <h2 className="font-syne text-xl font-bold text-white uppercase tracking-wider">
                  System Cart
                </h2>
                <span className="bg-white/10 text-brand-silver font-mono text-[10px] px-2 py-0.5 rounded-full">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={closeDrawer}
                className="text-white/50 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col">
              {orderComplete ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">
                  <ShieldCheck className="w-16 h-16 text-brand-red text-glow-red" />
                  <div>
                    <h3 className="font-syne text-2xl text-white font-bold uppercase tracking-widest mb-2">
                      Order Placed
                    </h3>
                    <p className="font-mono text-xs text-brand-silver-dim">
                      AWAITING DEPLOYMENT. <br /> ENCRYPTED RECEIPT SENT.
                    </p>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="mt-8 px-8 py-3 border border-white/20 text-brand-silver hover:text-white hover:bg-white/5 transition-all duration-300 font-mono text-xs tracking-widest uppercase"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-4 opacity-50">
                  <ShoppingBag className="w-12 h-12 text-white/30" />
                  <p className="font-mono text-xs text-white/50 tracking-widest uppercase">
                    Cart is empty
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={item.id}
                      className="flex gap-4 border border-white/5 bg-brand-dark p-3 group relative overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-[#050505] shrink-0 border border-white/5">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-syne text-sm font-bold text-white uppercase tracking-tight line-clamp-1 pr-4">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-white/30 hover:text-brand-red transition-colors -mr-1 -mt-1 p-1"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="font-mono text-[9px] text-brand-red tracking-widest">
                            {item.spec}
                          </span>
                        </div>

                        <div className="flex justify-between items-end">
                          <div className="font-mono text-sm text-brand-silver font-medium">
                            {item.price}
                          </div>
                          {/* Quantity Selector */}
                          <div className="flex items-center space-x-3 border border-white/10 px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-brand-silver-dim hover:text-white transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs text-white min-w-[1ch] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-brand-silver-dim hover:text-white transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {!orderComplete && cart.length > 0 && (
              <div className="p-6 bg-brand-darker border-t border-white/10 space-y-6">
                <div className="flex justify-between items-center font-mono text-sm text-brand-silver">
                  <span className="tracking-widest uppercase">Subtotal</span>
                  <span className="text-white font-medium text-lg">
                    ${calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                
                <p className="font-mono text-[9px] text-white/40 text-center">
                  SHIPPING & TAXES CALCULATED AT DEPLOYMENT STAGE.
                </p>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 bg-brand-red hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(255,0,60,0.4)] text-white transition-all duration-300 font-mono text-xs tracking-widest uppercase flex items-center justify-center space-x-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isCheckingOut ? (
                    <span className="animate-pulse flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing
                    </span>
                  ) : (
                    <>
                      <span>Secure Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
