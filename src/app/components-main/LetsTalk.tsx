"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- BACKGROUND SHOOTING STARS ANIMATION ---
const ShootingStar = ({
  delay,
  x,
  y,
}: {
  delay: number;
  x: string;
  y: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        x: x, // Starting X position (random)
        y: y, // Starting Y position (random)
        rotate: 215, // Angle of the streak
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: `calc(${x} - 300px)`, // Move Left/Down
        y: `calc(${y} + 300px)`, // Move Left/Down
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
        repeatDelay: Math.random() * 5 + 2, // Randomize re-appearance
      }}
      // Updated Gradient to Orange/Red
      className="absolute w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[#FF5F38] to-transparent z-0"
    />
  );
};

// --- MAIN COMPONENT ---
export default function LetsTalk() {
  // Generate random stars on client side to avoid hydration mismatch
  const [stars, setStars] = useState<{ delay: number; x: string; y: string }[]>(
    []
  );

  useEffect(() => {
    const newStars = Array.from({ length: 15 }).map(() => ({
      delay: Math.random() * 5,
      x: `${Math.floor(Math.random() * 100)}%`,
      y: `${Math.floor(Math.random() * 50)}%`, // Keep mostly in top half
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative w-full bg-black py-32 overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Central Glow Spot - Warm Orange */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5F38]/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Shooting Stars Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <ShootingStar key={i} delay={star.delay} x={star.x} y={star.y} />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           {/* Badge - Orange Theme */}
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5F38]/20 bg-[#FF5F38]/10 text-[#FF5F38] text-xs font-bold uppercase tracking-wider mb-6">
             <span className="w-2 h-2 rounded-full bg-[#FF5F38] animate-pulse"></span>
             Available for New Projects
           </div>

           {/* Heading */}
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
             Have a project in mind? <br />
             {/* Gradient Text to match Logo */}
             <span className="bg-gradient-to-r from-[#FF5F38] to-[#FF9068] bg-clip-text text-transparent">
               Let's build it together.
             </span>
           </h2>

           {/* Subtext */}
           <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
             From MVP to Enterprise Scale. We provide the engineering power you need to transform your vision into reality.
           </p>

           {/* Buttons */}
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             
             {/* Primary Button with Magma Conic Gradient */}
             <Link href="/contact" className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-50">
               <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF9068_0%,#FF5F38_50%,#FF9068_100%)]" />
               <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
                 Book a Strategy Call
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </span>
             </Link>

             {/* Secondary Button */}
             <Link href="mailto:hello@codemagnet.com" className="px-8 py-3 rounded-full border border-neutral-700 text-white font-medium hover:bg-neutral-800 transition-all hover:scale-105">
                 hello@codemagnet.com
             </Link>

           </div>
        </motion.div>

      </div>
    </div>
  );
}