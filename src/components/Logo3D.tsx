import React from "react";
import { motion } from "framer-motion";

export const Logo3D: React.FC = () => {
  return (
    <div className="w-10 h-10 relative flex items-center justify-center group" style={{ perspective: '800px' }}>
      <motion.div
        animate={{ 
          rotateZ: [0, 360],
          rotateY: [0, 360],
          rotateX: [60, 60] // Tilted forward to see the 3D depth
        }}
        transition={{ 
          rotateZ: { duration: 15, repeat: Infinity, ease: "linear" },
          rotateY: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
        className="relative w-8 h-8 group-hover:scale-125 transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Plate: Shuriken Blades */}
        {[0, 90, 180, 270].map((deg, i) => (
          <div 
            key={`front-${i}`}
            className="absolute inset-x-0 mx-auto w-2 h-5 bg-brand-dark border-x border-t border-brand-red origin-bottom"
            style={{ 
              transform: `rotateZ(${deg}deg) translateY(-50%) translateZ(4px)`,
              clipPath: 'polygon(50% 0%, 100% 100%, 50% 85%, 0% 100%)',
              boxShadow: 'inset 0 0 8px rgba(255,0,60,0.5)'
            }}
          />
        ))}

        {/* Back Plate: Shuriken Blades (Shadow/Depth) */}
        {[0, 90, 180, 270].map((deg, i) => (
          <div 
            key={`back-${i}`}
            className="absolute inset-x-0 mx-auto w-2 h-5 bg-brand-red origin-bottom"
            style={{ 
              transform: `rotateZ(${deg}deg) translateY(-50%) translateZ(-4px)`,
              clipPath: 'polygon(50% 0%, 100% 100%, 50% 85%, 0% 100%)',
              boxShadow: '0 0 15px rgba(255,0,60,0.8)'
            }}
          />
        ))}

        {/* Side Connecting Faces (Simulated by a central core that spans the depth) */}
        <div 
          className="absolute inset-0 m-auto w-3 h-3 bg-brand-dark border border-brand-red shadow-[0_0_20px_#FF003C]" 
          style={{ transform: 'translateZ(5px)', borderRadius: '1px' }} 
        />
        <div 
          className="absolute inset-0 m-auto w-3 h-3 bg-brand-red/50 backdrop-blur-md" 
          style={{ transform: 'translateZ(-5px)', borderRadius: '1px' }} 
        />
        
      </motion.div>
    </div>
  );
};

export default Logo3D;
