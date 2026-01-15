"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// --- Configuration ---
const stats = [
  {
    value: 9,
    suffix: "+",
    label: "Years",
    description: "Delivering Excellence",
  },
  {
    value: 450,
    suffix: "+",
    label: "Engineers",
    description: "Top 1% Talent",
  },
  {
    value: 90,
    suffix: "+",
    label: "Clients",
    description: "Global Partnerships",
  },
  {
    value: 130,
    suffix: "+",
    label: "Products",
    description: "Shipped to Market",
  },
  {
    value: 40,
    suffix: "+",
    label: "Series A",
    description: "Startups Scaled",
  },
];

// --- Counter Animation Component ---
const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

// --- Main Stats Component ---
export default function StatsSection() {
  return (
    <div className="w-full bg-black py-20 relative overflow-hidden">
      
      {/* Background Decor: Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center justify-center py-6 px-4 group"
            >
              {/* Hover Glow Effect - Gradient Start to End */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#Ff3131]/0 via-[#Ff3131]/5 to-[#ff914d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Number with Counter */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-baseline tracking-tighter">
                <Counter value={stat.value} />
                {/* Suffix Color - Gradient Text */}
                <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#Ff3131] to-[#ff914d]">
                  {stat.suffix}
                </span>
              </div>

              {/* Label - Gradient Text */}
              <p className="text-sm font-bold uppercase tracking-widest mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#Ff3131] to-[#ff914d]">
                {stat.label}
              </p>

              {/* Optional Small Description */}
              <p className="text-xs text-neutral-500 font-medium text-center">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}