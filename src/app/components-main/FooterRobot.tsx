"use client";
import React from "react";
import { motion } from "framer-motion";

export const FooterRobot = () => {
  // Updated to the CodeMagnet Orange Theme
  const accentColor = "#FF5F38"; 

  return (
    // The container is absolutely positioned to sit on top of the footer border
    // pointer-events-none ensures it doesn't block clicks on footer links if they overlap
    <div className="absolute left-1/2 -translate-x-1/2 -top-[110px] w-[300px] h-[120px] z-0 pointer-events-none">
      <svg
        viewBox="0 0 300 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        {/* --- THE HEAD --- */}
        <motion.g
           // Subtle floating motion
           animate={{ y: [0, -3, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Neck connection */}
            <rect x="135" y="90" width="30" height="30" fill="#333" />

            {/* Head chassis */}
            <path d="M100 30 C 100 10, 200 10, 200 30 L 210 90 Q 210 100, 190 100 L 110 100 Q 90 100, 90 90 Z" fill="#262626" stroke="#404040" strokeWidth="2"/>
            
            {/* Faceplate inset */}
            <rect x="110" y="40" width="80" height="45" rx="4" fill="#171717" stroke="#333" />

            {/* Eyes Container */}
            <motion.g
                // Blinking animation
                animate={{ scaleY: [1, 1, 0.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
                style={{ originY: "60px" }} // Pivot from center of eyes
            >
                {/* Left Eye - Orange Glow */}
                <circle cx="135" cy="62" r="8" fill={accentColor} className="shadow-[0_0_15px_#FF5F38]" />
                <circle cx="135" cy="62" r="4" fill="white" />
                
                {/* Right Eye - Orange Glow */}
                <circle cx="165" cy="62" r="8" fill={accentColor} className="shadow-[0_0_15px_#FF5F38]" />
                <circle cx="165" cy="62" r="4" fill="white" />
            </motion.g>

            {/* Antenna */}
            <line x1="150" y1="10" x2="150" y2="-10" stroke="#737373" strokeWidth="3" />
            {/* Antenna Light - Orange */}
            <motion.circle 
                cx="150" cy="-15" r="5" fill={accentColor}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
             {/* Antenna rings */}
            <circle cx="150" cy="-15" r="8" stroke={accentColor} strokeWidth="1" opacity="0.5" />
        </motion.g>


        {/* --- THE HANDS (Resting on the footer line) --- */}
        {/* These are positioned y=110 to align with the bottom of this SVG viewBox, 
            which will be the top border of the footer */}
        <g transform="translate(0, 110)">
             {/* Left Hand */}
            <g transform="translate(70, 0) rotate(-10)">
                {/* Fingers */}
                <rect x="0" y="0" width="12" height="14" rx="2" fill="#404040" stroke="#262626" />
                <rect x="14" y="-2" width="14" height="16" rx="2" fill="#404040" stroke="#262626" />
                <rect x="30" y="0" width="12" height="14" rx="2" fill="#404040" stroke="#262626" />
                {/* Knuckles/Top of hand */}
                <path d="M-5 -10 C 10 -15, 35 -15, 50 -10 L 45 5 L 0 5 Z" fill="#262626" />
            </g>

             {/* Right Hand */}
             <g transform="translate(185, -5) rotate(10)">
                {/* Fingers */}
                <rect x="0" y="0" width="12" height="14" rx="2" fill="#404040" stroke="#262626" />
                <rect x="14" y="-2" width="14" height="16" rx="2" fill="#404040" stroke="#262626" />
                <rect x="30" y="0" width="12" height="14" rx="2" fill="#404040" stroke="#262626" />
                {/* Knuckles/Top of hand */}
                <path d="M-5 -10 C 10 -15, 35 -15, 50 -10 L 45 5 L 0 5 Z" fill="#262626" />
            </g>
        </g>
      </svg>
    </div>
  );
};