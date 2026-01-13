"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// --- CONTENT DATA ---
const content = [
  {
    title: "1. Discovery & Strategy",
    description:
      "Every great product starts with a deep understanding. We collaborate with you to define requirements, analyze market gaps, and architect a strategic roadmap that aligns with your business goals.",
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    alt: "Strategic planning and blueprinting",
    tag: "PHASE 01: BLUEPRINT",
  },
  {
    title: "2. UI/UX Design & Prototyping",
    description:
      "We turn concepts into interactive prototypes. Our design team focuses on user-centric flows, high-fidelity visuals, and accessible interfaces to validate ideas before writing a single line of code.",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    alt: "UI/UX Design and Prototyping",
    tag: "PHASE 02: INTERFACE",
  },
  {
    title: "3. Agile Engineering",
    description:
      "Our engineers build robust, scalable architectures using modern tech stacks. We follow agile methodologies, ensuring rapid iterations, clean code, and continuous integration for seamless delivery.",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    alt: "Software Engineering and Coding",
    tag: "PHASE 03: DEVELOPMENT",
  },
  {
    title: "4. QA & Deployment",
    description:
      "Perfection is in the details. Rigorous automated testing ensures zero bugs. Once validated, we deploy to production environments with CI/CD pipelines designed for zero-downtime scalability.",
    src: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1000&auto=format&fit=crop",
    alt: "Server Deployment and Cloud Infrastructure",
    tag: "PHASE 04: PRODUCTION",
  },
];

export default function EndToEndProductDevelopment() {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of the WHOLE component relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closest = cardsBreakpoints.reduce((prev, curr) => {
      return Math.abs(curr - latest) < Math.abs(prev - latest) ? curr : prev;
    });
    const index = cardsBreakpoints.indexOf(closest);
    setActiveCard(index);
  });

  return (
    <div className="w-full bg-black relative" ref={ref}>
       
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none fixed"></div>

       {/* Main Container */}
       <div className="max-w-7xl mx-auto px-6 pt-20 pb-40 relative z-10">
         
         {/* Header */}
         <div className="mb-20">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
               End-to-End <span className="bg-gradient-to-r from-[#FF5F38] to-[#FF9068] bg-clip-text text-transparent">Product Development</span>
             </h2>
             <p className="text-neutral-400 max-w-2xl text-lg">
               Our product engineering team turns revolutionary ideas into world-class products and platforms. We handle the complexity, so you can focus on the vision.
             </p>
         </div>

         {/* Flex Container: Text (Left) - Image (Right) */}
         <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
           
           {/* --- LEFT COLUMN: Scrolling Text --- */}
           <div className="w-full lg:w-1/2 relative">
             {content.map((item, index) => (
               <div 
                 key={item.title + index} 
                 // Use min-h-screen or large height to force scrolling
                 className="min-h-[70vh] flex flex-col justify-center mb-10 group"
               >
                 {/* REMOVED: The circular numbered badge div was here */}

                 <motion.h2
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5 }}
                   className={cn(
                       "text-3xl md:text-4xl font-bold transition-colors duration-500",
                       activeCard === index ? "text-white" : "text-neutral-600"
                   )}
                 >
                   {item.title}
                 </motion.h2>

                 <motion.p
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 0.5, delay: 0.2 }}
                   className={cn(
                       "text-lg max-w-md mt-6 leading-relaxed border-l-2 pl-6 transition-all duration-500",
                         activeCard === index 
                           ? "text-neutral-300 border-[#FF5F38]" // Orange Border
                           : "text-neutral-700 border-neutral-800"
                   )}
                 >
                   {item.description}
                 </motion.p>
                 
                 {/* Mobile-Only Image */}
                 <div className="lg:hidden mt-10 rounded-xl overflow-hidden border border-white/10 shadow-lg relative h-64 w-full">
                     <Image 
                       src={item.src} 
                       alt={item.alt} 
                       fill
                       className="object-cover" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                     <div className="absolute bottom-4 left-4 text-xs font-mono text-[#FF5F38]">
                        {item.tag}
                     </div>
                 </div>

               </div>
             ))}
           </div>
           
           {/* --- RIGHT COLUMN: Sticky Image --- */}
           <div 
             className={cn(
               "hidden lg:block w-[500px] h-[500px] rounded-2xl overflow-hidden",
               "sticky top-32", 
               "bg-neutral-950 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
             )}
           >
             {/* Decorative UI Elements - ORANGE CORNERS */}
             <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#FF5F38] z-20 rounded-tl-lg"></div>
             <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#FF5F38] z-20 rounded-br-lg"></div>

             <AnimatePresence mode="popLayout">
               {content.map((item, index) => (
                 activeCard === index && (
                   <motion.div
                     key={item.title}
                     initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                     animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                     exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                     transition={{ duration: 0.7, ease: "easeInOut" }}
                     className="absolute inset-0 w-full h-full"
                   >
                     <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                     />
                     
                     {/* Scanning Line Animation - ORANGE */}
                     <motion.div 
                       initial={{ top: "-10%" }}
                       animate={{ top: "110%" }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                       className="absolute left-0 right-0 h-1 bg-[#FF5F38] shadow-[0_0_20px_#FF5F38] z-10 opacity-50"
                     />

                     {/* Dark Gradient Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0" />
                     
                     {/* Status Badge */}
                     <motion.div 
                       initial={{ y: 20, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ delay: 0.3 }}
                       className="absolute bottom-8 left-8 z-10 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3"
                     >
                       <div className="relative flex h-3 w-3">
                          {/* Ping - ORANGE */}
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5F38] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5F38]"></span>
                        </div>
                       <span className="text-[#FF5F38] font-mono text-xs font-bold tracking-wider">
                         {item.tag}
                       </span>
                     </motion.div>
                   </motion.div>
                 )
               ))}
             </AnimatePresence>
           </div>

         </div>
       </div>
    </div>
  );
}