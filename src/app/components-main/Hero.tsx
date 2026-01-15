"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure you have this utility or replace with standard template literals

// --- Internal Spotlight Component ---
const Spotlight = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn(
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter0_f_2951_32465)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2951_32465"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_2951_32465"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};

// --- Animated Robot Assistant ---
const RobotAssistant = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Responsive positioning: tighter to the box on mobile, shifted out on desktop
    <div className="absolute -top-20 right-0 sm:-top-24 sm:-right-10 z-20 pointer-events-none">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative"
      >
        {/* Robot Body SVG - Scaled down slightly on mobile */}
        <svg
          width="100"
          height="120"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-24 sm:w-[100px] sm:h-[120px] drop-shadow-[0_0_15px_rgba(255,95,56,0.4)]"
        >
          <line x1="50" y1="20" x2="50" y2="0" stroke="#737373" strokeWidth="2" />
          <circle cx="50" cy="0" r="4" fill="#FF5F38" className="animate-pulse" />
          <rect x="20" y="20" width="60" height="50" rx="16" fill="#171717" stroke="#404040" strokeWidth="2" />
          <rect x="28" y="32" width="44" height="26" rx="8" fill="#000" />
          <motion.g animate={{ scaleY: isBlinking ? 0.1 : 1 }} style={{ originY: "50%" }}>
            <rect x="34" y="40" width="10" height="10" rx="2" fill="#FF5F38" className="shadow-[0_0_10px_#FF5F38]" />
            <rect x="56" y="40" width="10" height="10" rx="2" fill="#FF5F38" className="shadow-[0_0_10px_#FF5F38]" />
          </motion.g>
          <path d="M35 70 L30 90 Q50 100 70 90 L65 70 Z" fill="#262626" />
        </svg>

        {/* Scanning Beam Effect */}
        <motion.div
          className="absolute top-[60px] sm:top-[80px] left-1/2 -translate-x-1/2 w-32 sm:w-40 h-48 sm:h-64 bg-gradient-to-b from-[#FF5F38]/20 to-transparent"
          style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
    </div>
  );
};

// --- Holographic IDE ---
const HolographicIDE = () => {
  return (
    // Max width adjustments for mobile to prevent overflow
    <div className="relative w-full max-w-[90vw] sm:max-w-[500px] aspect-[4/3] mx-auto perspective-1000 mt-8 lg:mt-0">
      <motion.div
        initial={{ rotateY: -10, rotateX: 5, opacity: 0, scale: 0.9 }}
        animate={{ rotateY: 0, rotateX: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <RobotAssistant />

        {/* Main Code Window */}
        <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-orange-900/20 z-10">
          {/* Header */}
          <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
            <div className="ml-4 text-[9px] sm:text-[10px] text-neutral-500 font-mono">deploy_production.ts</div>
          </div>

          {/* Code Content */}
          <div className="p-4 sm:p-6 font-mono text-[10px] sm:text-xs space-y-1 sm:space-y-2 opacity-80 overflow-hidden">
            <div className="flex gap-2 flex-wrap">
              <span className="text-[#FF5F38]">import</span>
              <span className="text-white">{`{`} Cloud {`}`}</span>
              <span className="text-[#FF5F38]">from</span>
              <span className="text-orange-300 break-all">'@KodeMagnet/core'</span>;
            </div>
            <div className="h-2 sm:h-4"></div>
            <div className="pl-0 text-neutral-400">// Initializing Cluster...</div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-[#FF5F38]">const</span>
              <span className="text-yellow-300">instance</span>
              <span className="text-white">=</span>
              <span className="text-[#FF5F38]">new</span>
              <span className="text-blue-300">Node</span>
              <span className="text-white">({`{`}</span>
            </div>
            <div className="pl-4 flex gap-2">
              <span className="text-white">mode:</span>
              <span className="text-green-300">"scalable"</span>,
            </div>
            <div className="pl-4 flex gap-2">
              <span className="text-white">security:</span>
              <span className="text-blue-300">Auth.Strict</span>
            </div>
            <div className="text-white">{`});`}</div>
            <div className="h-1 sm:h-2"></div>
            <div className="flex gap-2">
              <span className="text-[#FF5F38]">await</span>
              <span className="text-white">instance.deploy();</span>
            </div>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-1.5 h-3 sm:w-2 sm:h-4 bg-[#FF5F38] mt-1 sm:mt-2"
            />
          </div>
        </div>

        {/* Floating "System Status" Card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          // Repositioned for mobile: inside bounds (right-2) vs outside bounds (-right-4) on desktop
          className="absolute right-2 -bottom-8 sm:-right-4 sm:-bottom-6 w-40 sm:w-48 bg-neutral-800/90 border border-[#FF5F38]/30 backdrop-blur-md rounded-lg p-3 sm:p-4 shadow-xl z-30"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5F38] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5F38]"></span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide">SYSTEM OPERATIONAL</span>
          </div>

          <div className="space-y-2 mt-2 sm:mt-3">
            <div className="flex justify-between text-[9px] sm:text-[10px] text-neutral-400">
              <span>Uptime</span>
              <span className="text-white">99.99%</span>
            </div>
            <div className="w-full bg-neutral-700 h-1 rounded-full overflow-hidden">
              <div className="w-[99%] h-full bg-[#FF5F38]"></div>
            </div>
          </div>
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-[#FF5F38]/20 blur-3xl rounded-full -z-10"></div>
      </motion.div>
    </div>
  );
};

// --- Main Hero Component ---
export default function Hero() {
  return (
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Spotlights - Adjusted sizes for mobile */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <Spotlight className="top-20 left-10 md:left-full h-[50vh] md:h-[80vh] w-[90vw] md:w-[50vw]" fill="#FF5F38" />

      {/* Main Container */}
      {/* Changed pt-20 to pt-36 to clear navbar on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-16 md:pt-44 md:pb-20 min-h-screen flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        {/* Order 1 on mobile (first), Order 1 on Desktop (left) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-4 lg:mt-0"
          >
            Engineering the <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-[#FF5F38] to-[#FF9068] bg-clip-text text-transparent">
              Digital Future.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-300 max-w-lg leading-relaxed px-2 sm:px-0"
          >
            We build scalable software ecosystems, intelligent AI agents, and
            enterprise platforms. Transforming complex challenges into elegant
            code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start w-full sm:w-auto"
          >
            <button className="px-8 py-3 rounded-full bg-[#FF5F38] text-white font-bold text-sm tracking-wide hover:bg-[#E04F2E] transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,95,56,0.3)] w-full sm:w-auto">
              Book a Consultation
            </button>
            <button className="px-8 py-3 rounded-full border border-neutral-700 text-white text-sm font-medium hover:bg-neutral-800 transition-colors w-full sm:w-auto">
              Our Solutions
            </button>
          </motion.div>
        </div>

        {/* Right Column: 3D Graphic */}
        {/* Order 2 on mobile (second), Order 2 on Desktop (right) */}
        <div className="w-full order-2 flex justify-center items-center mt-12 lg:mt-0 mb-12 lg:mb-0">
          <HolographicIDE />
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
    </div>
  );
}