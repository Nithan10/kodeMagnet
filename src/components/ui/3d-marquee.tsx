"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ClientItem {
  name: string;
  logo: string;
}

export const ThreeDMarquee = ({
  items,
  className,
}: {
  items: ClientItem[];
  className?: string;
}) => {
  const chunkSize = Math.ceil(items.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return items.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[800px] overflow-hidden rounded-2xl",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center bg-neutral-950">
        <div className="size-[1400px] shrink-0 scale-75 md:scale-90 lg:scale-100">
          <div
            style={{
              transform: "rotateX(60deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-4 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 300 : -300 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 45 : 55,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-4"
              >
                <GridLineVertical className="-left-2" offset="40px" />
                {subarray.map((item, idx) => (
                  <div className="relative group w-full" key={idx + item.name}>
                    <GridLineHorizontal className="-top-2" offset="10px" />
                    
                    {/* --- LOGO CARD --- */}
                    <motion.div
                      whileHover={{ y: -5, scale: 1.05, zIndex: 10 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="relative flex flex-col items-center justify-center gap-3 bg-neutral-900/80 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg w-full aspect-square group-hover:bg-neutral-800/80 group-hover:border-[#aff0e6]/50 transition-all duration-300"
                    >
                        {/* Logo Circle */}
                        <div className="relative w-16 h-16 rounded-full bg-white/5 p-3 flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-colors">
                          <img
                            src={item.logo}
                            alt={item.name}
                            // REMOVED grayscale and opacity for full color visibility
                            className="w-full h-full object-contain"
                          />
                        </div>
                        
                        <span className="text-neutral-400 font-medium text-sm tracking-wide group-hover:text-white transition-colors duration-300">
                          {item.name}
                        </span>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- GRID LINES (Same as before) ---
const GridLineHorizontal = ({ className, offset }: { className?: string; offset?: string }) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(255, 255, 255, 0.05)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({ className, offset }: { className?: string; offset?: string }) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(255, 255, 255, 0.05)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        className,
      )}
    ></div>
  );
};