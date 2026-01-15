"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// --- DATA: Point Solutions ---
const solutions = [
  {
    title: "MVP Development",
    description: "Rapidly validate your market with a Minimum Viable Product. We focus on core features, speed-to-market, and scalable architecture so you can launch in weeks, not months.",
  },
  {
    title: "Legacy Modernization",
    description: "Don't let technical debt hold you back. We refactor, re-architect, and migrate outdated systems to modern cloud-native stacks without disrupting your business operations.",
  },
  {
    title: "API Integration & Middleware",
    description: "Seamlessly connect disparate systems. We build robust REST and GraphQL APIs, custom middleware, and microservices to ensure your data flows smoothly across your entire ecosystem.",
  },
  {
    title: "Cloud & DevOps Strategy",
    description: "Optimize for scale and security. From AWS/Azure setup to CI/CD pipelines and containerization (Docker/Kubernetes), we build infrastructure that handles growth effortlessly.",
  },
];

// --- COMPONENT: Typing Robot Animation ---
const TypingRobot = () => {
  // FIX: Generate random values only on the client to avoid Hydration Mismatch
  const [codeLines, setCodeLines] = useState<{ width1: number; width2: number; isHighlight: boolean }[]>([]);

  useEffect(() => {
    // Generate static data once on mount
    const lines = Array.from({ length: 10 }).map(() => ({
      width1: Math.random() * 40 + 20,
      width2: Math.random() * 60 + 20,
      isHighlight: Math.random() > 0.7,
    }));
    setCodeLines(lines);
  }, []);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Glow behind monitor - Start Color */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#Ff3131]/10 blur-[60px] rounded-full"></div>

      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-md drop-shadow-2xl"
      >
        {/* --- DESK --- */}
        <rect x="20" y="240" width="360" height="10" rx="2" fill="#262626" />
        <rect x="40" y="250" width="20" height="50" fill="#262626" />
        <rect x="340" y="250" width="20" height="50" fill="#262626" />

        {/* --- COMPUTER MONITOR --- */}
        <g>
          {/* Stand */}
          <rect x="185" y="220" width="30" height="20" fill="#404040" />
          <path d="M170 240 H230 L220 220 H180 Z" fill="#404040" />
          
          {/* Bezel */}
          <rect x="100" y="80" width="200" height="140" rx="8" fill="#171717" stroke="#404040" strokeWidth="2" />
          
          {/* Screen Area (Mask for code) */}
          <mask id="screenMask">
             <rect x="108" y="88" width="184" height="124" fill="white" />
          </mask>
          
          {/* Screen Background */}
          <rect x="108" y="88" width="184" height="124" fill="#0a0a0a" />
          
          {/* Scrolling Code Animation */}
          <g mask="url(#screenMask)">
             <motion.g
               animate={{ y: [-20, -100] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             >
                {/* Render the client-generated lines */}
                {codeLines.map((line, i) => (
                  <g key={i} transform={`translate(115, ${100 + i * 15})`}>
                      <rect width={line.width1} height="4" rx="2" fill="#333" />
                      {/* Code Highlight - Start Color */}
                      <rect x="50" width={line.width2} height="4" rx="2" fill={line.isHighlight ? "#Ff3131" : "#333"} />
                  </g>
                ))}
             </motion.g>
          </g>

          {/* Screen Glare */}
          <path d="M108 88 L160 88 L130 212 L108 212 Z" fill="white" fillOpacity="0.03" />
        </g>

        {/* --- ROBOT CHARACTER --- */}
        <g>
           <rect x="160" y="190" width="80" height="60" rx="10" fill="#262626" />
           <rect x="190" y="180" width="20" height="10" fill="#404040" />
           
           <motion.g
             animate={{ y: [0, 2, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           >
              <rect x="150" y="120" width="100" height="60" rx="12" fill="#e5e5e5" />
              <rect x="155" y="125" width="90" height="50" rx="8" fill="#171717" />
              
              {/* Eyes - Start Color */}
              <motion.g 
                 animate={{ scaleY: [1, 0.1, 1] }} 
                 transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                 style={{ originY: "50%" }}
              >
                 <circle cx="180" cy="150" r="6" fill="#Ff3131" className="shadow-[0_0_10px_#Ff3131]" />
                 <circle cx="220" cy="150" r="6" fill="#Ff3131" className="shadow-[0_0_10px_#Ff3131]" />
              </motion.g>

              <line x1="200" y1="120" x2="200" y2="100" stroke="#737373" strokeWidth="2" />
              <circle cx="200" cy="100" r="3" fill="#ef4444" className="animate-pulse" />
           </motion.g>

           <motion.g
             animate={{ y: [0, 3, 0], rotate: [0, 1, 0] }}
             transition={{ duration: 0.2, repeat: Infinity }}
           >
              <path d="M150 210 Q 130 230 160 245" stroke="#737373" strokeWidth="8" strokeLinecap="round" fill="none" />
           </motion.g>
           
           <motion.g
             animate={{ y: [0, 3, 0], rotate: [0, -1, 0] }}
             transition={{ duration: 0.25, repeat: Infinity, delay: 0.1 }}
           >
               <path d="M250 210 Q 270 230 240 245" stroke="#737373" strokeWidth="8" strokeLinecap="round" fill="none" />
           </motion.g>
        </g>

        {/* --- FLOATING BUBBLES --- */}
        {[0, 1, 2].map((i) => (
           <motion.text
             key={i}
             x={150 + i * 40}
             y={100}
             fill="#Ff3131" // Start Color
             fontSize="10"
             fontFamily="monospace"
             opacity="0"
             animate={{ y: [100, 50], opacity: [0, 1, 0] }}
             transition={{ duration: 2, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
           >
             {i % 2 === 0 ? "1" : "0"}
           </motion.text>
        ))}

      </svg>
    </div>
  );
};

// --- COMPONENT: Accordion Item ---
const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: typeof solutions[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        suppressHydrationWarning={true}
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
      >
        <span 
          className={cn(
            "text-xl font-medium transition-colors duration-300",
            // Active Color: Start Color (#Ff3131)
            isOpen ? "text-[#Ff3131]" : "text-white group-hover:text-[#Ff3131]"
          )}
        >
          {item.title}
        </span>
        <span className="relative ml-4 flex-shrink-0">
           <motion.div
             animate={{ rotate: isOpen ? 45 : 0 }}
             transition={{ duration: 0.3 }}
           >
             {/* Icon Color: Start Color if open */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? "text-[#Ff3131]" : "text-neutral-500"}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
           </motion.div>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-400 leading-relaxed text-base max-w-lg">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN EXPORT ---
export default function PointSolutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-black py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Point <span className="bg-gradient-to-r from-[#Ff3131] to-[#ff914d] bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Our specialized expertise covers the entire software lifecycle. Whether you need to launch fast or scale big, we have the module for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="w-full">
            {solutions.map((solution, index) => (
              <AccordionItem
                key={index}
                item={solution}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              />
            ))}
            <div className="mt-8">
               {/* Button Text Gradient */}
               <button 
                 suppressHydrationWarning={true}
                 className="flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
               >
                 <span className="bg-gradient-to-r from-[#Ff3131] to-[#ff914d] bg-clip-text text-transparent">
                   EXPLORE ALL SERVICES
                 </span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#Ff3131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </button>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
             <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8 w-full max-w-md backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <TypingRobot />
                <div className="text-center mt-6">
                   <p className="text-neutral-500 font-mono text-xs animate-pulse">
                     &gt; AI_ENGINEER_BOT executing task: <span className="text-[#Ff3131]">{solutions[openIndex || 0].title}...</span>
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}