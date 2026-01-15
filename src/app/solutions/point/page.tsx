"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus, IconArrowRight } from "@tabler/icons-react";
import { NavbarDemo } from "@/app/components-main/Navbar";
// 1. Import Footer
import Footer from "@/app/components-main/Footer";

export default function PointSolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FF5F38] selection:text-white">
      {/* Navbar Wrapper */}
      <div className="relative w-full flex items-center justify-center">
         <NavbarDemo />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-40 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Point <span className="text-[#FF5F38]">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Specific problems require specific expertise. We deploy targeted squads to solve critical bottlenecks in your software lifecycle.
          </motion.p>
        </div>
      </section>

      {/* --- SPLIT CONTENT SECTION --- */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* LEFT SIDE: FAQ / Accordion Solutions */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col gap-4"
          >
            <div className="mb-8">
               <h2 className="text-2xl font-bold text-white mb-2">Targeted Expertise</h2>
               <p className="text-neutral-500 text-sm">Select a domain to see how we intervene.</p>
            </div>

            <AccordionItem 
              title="DevOps & Infrastructure Audit" 
              number="01"
              isOpen={true}
            >
              <p>We analyze your CI/CD pipelines and cloud architecture. Our team identifies bottlenecks, security gaps, and cost inefficiencies, implementing automated workflows that reduce deployment time by up to 60%.</p>
            </AccordionItem>

            <AccordionItem title="UI/UX & Accessibility Review" number="02">
              <p>A comprehensive audit of your user interface against WCAG standards and modern design principles. We provide a detailed remediation roadmap to ensure your product is usable, accessible, and compliant.</p>
            </AccordionItem>

            <AccordionItem title="Legacy Code Refactoring" number="03">
              <p>Don't rewrite from scratch. We modernize critical modules of your legacy monolith, wrapping them in modern APIs or refactoring them into microservices to improve maintainability without business disruption.</p>
            </AccordionItem>

            <AccordionItem title="Performance Optimization" number="04">
              <p>Slow apps lose users. We deep-dive into database queries, frontend bundle sizes, and server response times to shave off milliseconds that turn into millions in revenue.</p>
            </AccordionItem>

            <AccordionItem title="QA Automation Setup" number="05">
              <p>We build robust end-to-end testing frameworks (Cypress/Playwright) that sit alongside your development, catching bugs before they hit production and ensuring regression safety.</p>
            </AccordionItem>

          </motion.div>

          {/* RIGHT SIDE: Static Image Placeholder */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900/20 to-black border border-white/10 shadow-[0_0_50px_rgba(255,95,56,0.05)] flex items-center justify-center"
          >
             {/* Simple Animated Robot SVG Placeholder */}
             <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-[#FF5F38]/10 rounded-full blur-xl"></div>
                <svg 
                   className="relative w-full h-full"
                   viewBox="0 0 200 200"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                >
                   {/* Robot Head */}
                   <rect x="70" y="50" width="60" height="70" rx="15" fill="url(#gradient1)" stroke="#FF5F38" strokeWidth="2"/>
                   
                   {/* Robot Eyes */}
                   <circle cx="85" cy="75" r="8" fill="#FF5F38" className="animate-pulse"/>
                   <circle cx="115" cy="75" r="8" fill="#FF5F38" className="animate-pulse"/>
                   
                   {/* Robot Antenna */}
                   <rect x="97" y="30" width="6" height="20" fill="#FF5F38" rx="3"/>
                   <circle cx="100" cy="25" r="10" fill="#FF5F38" className="animate-ping" style={{animationDuration: '2s'}}/>
                   
                   {/* Robot Body */}
                   <rect x="60" y="130" width="80" height="40" rx="10" fill="url(#gradient2)" stroke="#FF5F38" strokeWidth="2"/>
                   
                   <defs>
                     <linearGradient id="gradient1" x1="70" y1="50" x2="130" y2="120" gradientUnits="userSpaceOnUse">
                       <stop stopColor="#FF5F38" stopOpacity="0.2"/>
                       <stop offset="1" stopColor="#FF5F38" stopOpacity="0.05"/>
                     </linearGradient>
                     <linearGradient id="gradient2" x1="60" y1="130" x2="140" y2="170" gradientUnits="userSpaceOnUse">
                       <stop stopColor="#FF5F38" stopOpacity="0.2"/>
                       <stop offset="1" stopColor="#FF5F38" stopOpacity="0.05"/>
                     </linearGradient>
                   </defs>
                </svg>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF5F38] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#FF5F38] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute top-1/2 -right-4 w-3 h-3 bg-[#FF5F38] rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
             </div>

             {/* Aesthetic Details around the frame */}
             <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
             </div>
             <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-[#FF5F38]/20 text-[#FF5F38] text-xs font-mono">
                System Status: ONLINE
             </div>
             
             {/* Animated grid background */}
             <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(to right, #FF5F38 1px, transparent 1px),
                                   linear-gradient(to bottom, #FF5F38 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}></div>
             </div>
          </motion.div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <div className="relative z-30">
        <Footer />
      </div>

    </main>
  );
}

// --- ACCORDION COMPONENT ---

const AccordionItem = ({ title, children, number, isOpen: defaultOpen = false }: { title: string, children: React.ReactNode, number: string, isOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 group text-left focus:outline-none"
      >
        <div className="flex items-center gap-6">
          <span className={`font-mono text-sm ${isOpen ? 'text-[#FF5F38]' : 'text-neutral-600'} transition-colors duration-300`}>
            {number}
          </span>
          <span className={`text-xl font-medium ${isOpen ? 'text-white' : 'text-neutral-400'} group-hover:text-white transition-colors duration-300`}>
            {title}
          </span>
        </div>
        <div className={`p-2 rounded-full border ${isOpen ? 'border-[#FF5F38] text-[#FF5F38]' : 'border-white/10 text-white'} transition-all duration-300`}>
           {isOpen ? <IconMinus className="w-4 h-4" /> : <IconPlus className="w-4 h-4" />}
        </div>
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
            <div className="pl-12 pr-4 pb-8 text-neutral-400 leading-relaxed text-sm md:text-base border-l border-[#FF5F38]/20 ml-3">
              {children}
              <div className="mt-4 flex items-center gap-2 text-[#FF5F38] text-xs font-bold uppercase tracking-wider cursor-pointer hover:underline">
                Explore Solution <IconArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};