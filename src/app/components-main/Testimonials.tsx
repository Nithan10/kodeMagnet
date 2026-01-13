"use client";
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonialData = [
  {
    quote:
      "CodeMagnet transformed our legacy infrastructure into a scalable cloud ecosystem. Their AI-driven approach reduced our deployment times by 60% and significantly cut operational costs.",
    name: "Sarah Chen",
    designation: "CTO at NexusFin",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "The engineering team at CodeMagnet is world-class. They didn't just build what we asked for; they anticipated our future needs and architected a solution that has scaled effortlessly with our rapid growth.",
    name: "Michael Rodriguez",
    designation: "VP of Engineering at StreamLine",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Finding a partner who understands both complex algorithms and intuitive UX is rare. CodeMagnet delivered a product that is technically robust and beautifully designed. Truly exceptional work.",
    name: "Emily Watson",
    designation: "Product Director at HealthFlow",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full bg-black py-20 border-t border-white/5 relative z-10">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-12 px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Client <span className="bg-gradient-to-r from-[#FF5F38] to-[#FF9068] bg-clip-text text-transparent">Success Stories</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Don't just take our word for it. Hear from the visionaries we've helped succeed.
        </p>
      </div>

      {/* Component */}
      <AnimatedTestimonials testimonials={testimonialData} autoplay={true} />
    </div>
  );
}