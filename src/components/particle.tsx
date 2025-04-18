"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Particles() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR compatibility)
    if (typeof window !== "undefined") {
      // Set initial dimensions
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Update dimensions on window resize
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();
      setInit(true);

      window.addEventListener("resize", handleResize);

      // Clean up event listener
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Return null if not initialized
  if (!init) return null;

  return (
    <div className="z-10 fixed inset-0 pointer-events-none">
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.span
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 6}px`,
            height: `${Math.random() * 6}px`,
            left: `${Math.random() * dimensions.width + 1}px`,
            top: `${Math.random() * dimensions.height + 1}px`,
            backgroundColor: "orange",
            mixBlendMode: "darken",
          }}
          animate={{
            y: [0, dimensions.height],
            x: [0, dimensions.width / 4],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 40 + 1,
            ease: "linear",
            repeatType: "loop",
          }}
          key={i}
        ></motion.span>
      ))}
    </div>
  );
}
