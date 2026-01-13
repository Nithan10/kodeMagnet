"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // 1. Import Image component
import { motion } from "framer-motion";

// --- ICONS ---
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const MailIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

// --- INTERNAL COMPONENT: Peeking Footer Robot (Themed Orange) ---
const FooterRobot = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  
  // Blinking Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute -top-[55px] right-10 md:right-20 pointer-events-none z-0">
       <motion.div
         initial={{ y: 20 }} // Start slightly hidden
         whileInView={{ y: 0 }} // Peek up when footer comes into view
         transition={{ type: "spring", stiffness: 100, damping: 20 }}
       >
         <svg width="80" height="60" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
             {/* Head */}
             <path d="M20 30 C20 15 35 15 50 15 C65 15 80 15 80 30 V80 H20 V30 Z" fill="#171717" stroke="#404040" strokeWidth="2" />
             
             {/* Antenna */}
             <line x1="50" y1="15" x2="50" y2="0" stroke="#737373" strokeWidth="2" />
             <circle cx="50" cy="0" r="4" fill="#FF5F38" className="animate-pulse" />

             {/* Eyes (Orange) */}
             <motion.g animate={{ scaleY: isBlinking ? 0.1 : 1 }} style={{ originY: "50%" }}>
                <rect x="35" y="35" width="10" height="8" rx="2" fill="#FF5F38" className="shadow-[0_0_10px_#FF5F38]" />
                <rect x="55" y="35" width="10" height="8" rx="2" fill="#FF5F38" className="shadow-[0_0_10px_#FF5F38]" />
             </motion.g>
         </svg>
       </motion.div>
    </div>
  )
}

// --- REUSABLE FOOTER LINK ---
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    {/* Hover Text Color changed to Orange */}
    <Link href={href} className="text-neutral-400 hover:text-[#FF5F38] transition-colors duration-200 text-sm">
      {children}
    </Link>
  </li>
);

// --- MAIN FOOTER COMPONENT ---
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // The footer container. Note the top border that the robot rests on.
    <footer className="relative w-full bg-neutral-950 border-t border-white/10 pt-20 pb-10 overflow-visible">
      
      {/* --- THE PEEKING ROBOT --- */}
      {/* Placed before the main content so it sits 'behind' the links z-index wise */}
      <FooterRobot />

      {/* Background Subtle Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-16">
          
          {/* COLUMN 1: Brand & Bio */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
                {/* 2. REPLACED TEXT WITH IMAGE */}
                <Image
                  src="/img_31.png" // Points to public/img_31.png
                  alt="CodeMagnet Logo"
                  width={150}
                  height={60}
                  className="object-contain" // Keeps aspect ratio correct
                />
            </Link>
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">
              Engineers of the future. We build robust, scalable, and revolutionary software solutions that propel businesses forward into the digital age.
            </p>
             {/* Social Links - Hover Orange */}
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-[#FF5F38] hover:text-white transition-all duration-300 group">
                    <TwitterIcon className="group-hover:scale-110 transition-transform"/>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-[#FF5F38] hover:text-white transition-all duration-300 group">
                    <GithubIcon className="group-hover:scale-110 transition-transform"/>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-[#FF5F38] hover:text-white transition-all duration-300 group">
                    <LinkedinIcon className="group-hover:scale-110 transition-transform"/>
                </a>
             </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog & News</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* COLUMN 3: Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Stay Updated</h3>
            <p className="text-neutral-400 text-sm mb-4">
                Subscribe to our newsletter for the latest tech trends and company updates.
            </p>
            <form className="flex flex-col gap-3">
                <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      // Focus Border Orange
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF5F38]/50 transition-colors"
                    />
                </div>
                {/* Button Orange */}
                <button type="submit" className="w-full bg-[#FF5F38] text-white font-bold text-sm py-3 rounded-lg hover:bg-[#E04F2E] transition-colors shadow-[0_0_15px_rgba(255,95,56,0.3)]">
                    Subscribe
                </button>
            </form>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
            <p>© {currentYear} CodeMagnet Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-[#FF5F38] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-[#FF5F38] transition-colors">Terms of Service</Link>
            </div>
        </div>

      </div>
    </footer>
  );
}