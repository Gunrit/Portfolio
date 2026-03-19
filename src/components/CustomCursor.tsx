'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Sparkle = { 
  id: number; 
  x: number; 
  y: number; 
  size: number; 
  bg: string; 
  shadow: string;
};

const SPARKLE_COLORS = [
  { bg: 'bg-orange-400', shadow: 'shadow-[0_0_10px_rgba(251,146,60,0.8)]' },
  { bg: 'bg-amber-400', shadow: 'shadow-[0_0_10px_rgba(251,191,36,0.8)]' },
  { bg: 'bg-rose-400', shadow: 'shadow-[0_0_10px_rgba(251,113,133,0.8)]' },
  { bg: 'bg-white', shadow: 'shadow-[0_0_10px_rgba(255,255,255,0.8)]' }
];

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const sparkleId = useRef(0);

  useEffect(() => {
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const now = Date.now();
      // Drop a sparkle every 30ms to maintain rendering performance
      if (now - lastTime > 30) {
        lastTime = now;
        
        const randomColor = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
        const id = sparkleId.current++;
        
        const newSparkle = {
          id,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2, // 2px to 6px
          bg: randomColor.bg,
          shadow: randomColor.shadow,
        };

        setSparkles((prev) => [...prev, newSparkle]);

        // Remove the sparkle strictly after its animation duration (800ms)
        setTimeout(() => {
          setSparkles((prev) => prev.filter(s => s.id !== id));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Main minimal dot following the cursor rigidly */}
      <motion.div
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
        style={{ translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] z-[10000] mix-blend-difference"
      />
      
      {/* Trailing Sparkles */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 1, x: sparkle.x, y: sparkle.y }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              y: sparkle.y + (Math.random() * 80 - 40), // explode slowly outward
              x: sparkle.x + (Math.random() * 80 - 40),
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ 
              translateX: '-50%', 
              translateY: '-50%',
              width: sparkle.size,
              height: sparkle.size,
            }}
            className={`fixed top-0 left-0 rounded-full ${sparkle.bg} ${sparkle.shadow} z-[9999] mix-blend-screen pointer-events-none`}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
