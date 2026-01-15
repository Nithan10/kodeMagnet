"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonialData = [
  {
    quote:
      "KodeMagnet transformed our legacy infrastructure into a scalable cloud ecosystem. Their AI-driven approach reduced our deployment times by 60% and significantly cut operational costs.",
    name: "Sarah Chen",
    designation: "CTO at NexusFin",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "The engineering team at KodeMagnet is world-class. They didn't just build what we asked for; they anticipated our future needs and architected a solution that has scaled effortlessly with our rapid growth.",
    name: "Michael Rodriguez",
    designation: "VP of Engineering at StreamLine",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Finding a partner who understands both complex algorithms and intuitive UX is rare. KodeMagnet delivered a product that is technically robust and beautifully designed. Truly exceptional work.",
    name: "Emily Watson",
    designation: "Product Director at HealthFlow",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="w-full bg-black py-20 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-[#FF5F38] to-[#FF9068] bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the visionaries we've helped succeed.
          </p>
        </div>

        {/* Slider Section */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          
          {/* Left: Image Card */}
          <div className="relative h-[300px] md:h-[400px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img 
                        src={testimonialData[active].src} 
                        alt={testimonialData[active].name}
                        className="w-full h-full object-cover"
                    />
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Background offset card for style */}
            <div className="absolute top-4 left-4 w-full h-full rounded-3xl border border-white/5 bg-[#FF5F38]/10 -z-10 rotate-3"></div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="text-[#FF5F38] mb-6 w-10 h-10 rotate-180" />
                
                <h3 className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
                  "{testimonialData[active].quote}"
                </h3>
                
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonialData[active].name}</h4>
                    <p className="text-[#FF5F38]">{testimonialData[active].designation}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-10">
              <button 
                onClick={handlePrev}
                className="group p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-[#FF5F38] hover:border-[#FF5F38] transition-all duration-300"
              >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleNext}
                className="group p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-[#FF5F38] hover:border-[#FF5F38] transition-all duration-300"
              >
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}