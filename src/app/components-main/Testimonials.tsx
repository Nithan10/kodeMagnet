"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonialData = [
  {
    quote:
      "KodeMagnet transformed our legacy infrastructure into a scalable cloud ecosystem. Their AI-driven approach reduced our deployment times by 60% and significantly cut operational costs.",
    name: "Sarah Chen",
    designation: "CTO at NexusFin",
  },
  {
    quote:
      "The engineering team at KodeMagnet is world-class. They didn't just build what we asked for; they anticipated our future needs and architected a solution that has scaled effortlessly with our rapid growth.",
    name: "Michael Rodriguez",
    designation: "VP of Engineering at StreamLine",
  },
  {
    quote:
      "Finding a partner who understands both complex algorithms and intuitive UX is rare. KodeMagnet delivered a product that is technically robust and beautifully designed. Truly exceptional work.",
    name: "Emily Watson",
    designation: "Product Director at HealthFlow",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  // Auto-play logic (slides every 5 seconds)
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-20 flex flex-col items-center justify-center min-h-[400px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Client{" "}
            {/* Gradient Text: Start Color -> End Color */}
            <span className="bg-gradient-to-r from-[#Ff3131] to-[#ff914d] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Hear from the visionaries we've helped succeed.
          </p>
        </div>

        {/* Text-Only Carousel */}
        <div className="w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center text-center space-y-6 p-4 md:p-8"
            >
              {/* Quote Icon using Start Color */}
              <Quote className="w-10 h-10 text-[#Ff3131]/50 rotate-180 mb-2" />
              
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed max-w-3xl">
                "{testimonialData[active].quote}"
              </p>

              <div className="flex flex-col items-center mt-6">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {testimonialData[active].name}
                </h3>
                {/* Designation using Gradient Text */}
                <p className="font-medium text-sm md:text-base bg-gradient-to-r from-[#Ff3131] to-[#ff914d] bg-clip-text text-transparent">
                  {testimonialData[active].designation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={handlePrev}
              suppressHydrationWarning={true} 
              // Hover uses gradient background
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gradient-to-r hover:from-[#Ff3131] hover:to-[#ff914d] hover:border-transparent transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              suppressHydrationWarning={true}
              // Hover uses gradient background
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gradient-to-r hover:from-[#Ff3131] hover:to-[#ff914d] hover:border-transparent transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}