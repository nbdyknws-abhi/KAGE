import React, { useState } from "react";
import { Plus, Eye, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

interface Product {
  id: string;
  name: string;
  jpName: string;
  price: string;
  tag: string;
  spec: string;
  image: string;
  details: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    name: "KAGE Technical Hoodie",
    jpName: "アウターフーディー",
    price: "$185.00",
    tag: "RESTOCK",
    spec: "SPEC-001 // NYLON CORE",
    image: "/images/hoodie.png",
    details: ["350GSM Cotton/Poly Blend", "Water-resistant coating", "Stealth black hardware", "Signature neon piping"]
  },
  {
    id: "prod-02",
    name: "Shinobi Cargo Pants",
    jpName: "シノビカーゴパンツ",
    price: "$160.00",
    tag: "LIMITED",
    spec: "SPEC-002 // ERGONOMIC STRAP",
    image: "/images/pants.png",
    details: ["Ripstop reinforcement", "Ajustable ankle buckles", "Integrated utility webbing", "6-pocket modular grid"]
  },
  {
    id: "prod-03",
    name: "Ronin Tactical Vest",
    jpName: "タクティカルベスト",
    price: "$145.00",
    tag: "NEW DROP",
    spec: "SPEC-003 // MODULAR PLATE",
    image: "/images/vest.png",
    details: ["Military-grade webbing", "Quick-release buckles", "Multi-tier zip compartments", "Neon stitching outlines"]
  },
  {
    id: "prod-04",
    name: "Cyber Reflection Windbreaker",
    jpName: "リフレクティブジャケット",
    price: "$210.00",
    tag: "HOT",
    spec: "SPEC-004 // CHROME TEXTURE",
    image: "/images/jacket.png",
    details: ["Reflective glass-microbe fabric", "100% windproof shell", "Concealed chest zippers", "Adjustable magnetic cuffs"]
  },
  {
    id: "prod-05",
    name: "KAGE Tactical Sneakers",
    jpName: "タクティカルスニーカー",
    price: "$280.00",
    tag: "NEW",
    spec: "SPEC-005 // CHUNKY SOLE",
    image: "/images/sneakers.png",
    details: ["Shock-absorbing midsole", "High-grip rugged tread", "Neon-lined support straps", "Water-resistant mesh"]
  },
  {
    id: "prod-06",
    name: "Neon Cyber-Mask",
    jpName: "サイバーマスク",
    price: "$95.00",
    tag: "ESSENTIAL",
    spec: "SPEC-006 // RESPIRATOR",
    image: "/images/mask.png",
    details: ["N95 rated filtration", "Breathable mesh structure", "Glowing LED tracing lines", "Adjustable magnetic clips"]
  },
  {
    id: "prod-07",
    name: "Modular Crossbody Bag",
    jpName: "モジュラーバッグ",
    price: "$120.00",
    tag: "RESTOCK",
    spec: "SPEC-007 // SLING SYSTEM",
    image: "/images/bag.png",
    details: ["15L capacity storage", "Matte silver release buckle", "Ripstop nylon fabric", "Molle strap integration"]
  },
  {
    id: "prod-08",
    name: "Heavyweight Kanji Tee",
    jpName: "ヘビーウェイトTシャツ",
    price: "$65.00",
    tag: "BASIC",
    spec: "SPEC-008 // 400GSM",
    image: "/images/tshirt.png",
    details: ["Oversized dropped shoulder", "Premium 400GSM cotton", "Reflective kanji graphic", "Double-stitched seams"]
  }
];

export const FeaturedCollection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  return (
    <section id="collection" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Editorial side accent */}
      <div className="absolute top-1/3 left-6 font-mono text-[9px] text-white/5 tracking-[0.4em] rotate-90 origin-left hidden lg:block">
        KAGE APPAREL COLLECTION // SHADOW WEAR SYSTEM
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="font-mono text-xs text-brand-red tracking-[0.25em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-ping" />
              SYSTEM.DROP_009
            </span>
            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
              Featured Items
            </h2>
          </div>
          <p className="max-w-xs text-brand-silver-dim text-xs md:text-sm font-light tracking-wide leading-relaxed">
            Heavyweight fabrics, modular hardware, and zero compromises. Here's what's currently in rotation.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((prod) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col bg-brand-darker border border-white/5 hover:border-brand-red/30 transition-all duration-500 overflow-hidden"
            >
              {/* Product Tag */}
              <span className="absolute top-4 left-4 z-10 bg-brand-red text-white font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 text-glow-red">
                {prod.tag}
              </span>

              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden bg-[#0A0A0A] flex items-center justify-center border-b border-white/5">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Quick View Button overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex space-x-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => setActiveProduct(prod)}
                    className="flex-1 py-2.5 bg-white text-black hover:bg-brand-red hover:text-white transition-colors duration-300 font-mono text-[10px] tracking-wider uppercase flex items-center justify-center space-x-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Spec</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] text-white/40 tracking-wider">
                      {prod.spec}
                    </span>
                    <span className="font-jp text-[10px] text-brand-red text-glow-red">
                      {prod.jpName}
                    </span>
                  </div>
                  <h3 className="font-syne text-lg font-bold text-white tracking-tight uppercase group-hover:text-brand-red transition-colors duration-300">
                    {prod.name}
                  </h3>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                  <span className="font-mono text-sm text-brand-silver font-medium">
                    {prod.price}
                  </span>
                  <button className="p-2 border border-white/10 hover:border-brand-red hover:bg-brand-red/10 text-brand-silver hover:text-white transition-all duration-300">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Quick View */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-md"
            onClick={() => setActiveProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl glass border border-white/10 rounded-none overflow-hidden text-left grid grid-cols-1 md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Side */}
              <div className="relative aspect-square md:aspect-auto bg-[#0a0a0a] flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-brand-red text-white font-mono text-[9px] font-bold tracking-widest px-2.5 py-1">
                  {activeProduct.tag}
                </span>
              </div>

              {/* Info Side */}
              <div className="p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] text-brand-red tracking-[0.25em]">
                      {activeProduct.spec}
                    </span>
                    <button
                      onClick={() => setActiveProduct(null)}
                      className="font-mono text-xs text-white/40 hover:text-white transition-colors"
                    >
                      [CLOSE]
                    </button>
                  </div>

                  <h3 className="font-syne text-3xl font-extrabold text-white tracking-tight uppercase mb-1">
                    {activeProduct.name}
                  </h3>
                  <p className="font-jp text-sm text-brand-silver-dim mb-4">
                    {activeProduct.jpName}
                  </p>
                  
                  <span className="font-mono text-2xl text-white block mb-6">
                    {activeProduct.price}
                  </span>

                  {/* Specifications details */}
                  <div className="space-y-3 pt-6 border-t border-white/5">
                    <h4 className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                      TECHNICAL SPECIFICATIONS
                    </h4>
                    <ul className="space-y-2">
                      {activeProduct.details.map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 font-mono text-xs text-brand-silver-dim"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-6">
                  <button 
                    onClick={() => {
                      addToCart(activeProduct);
                      setActiveProduct(null);
                    }}
                    className="w-full py-4 bg-brand-red hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(255,0,60,0.4)] text-white transition-all duration-300 font-mono text-xs tracking-widest uppercase flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Purchase System Core</span>
                  </button>
                  <p className="text-center font-mono text-[9px] text-white/30">
                    SECURE CYBERPUNK ENCRYPTED TRANSACTION // 256-BIT SSL
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedCollection;
