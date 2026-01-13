"use client";
import React from "react";
import { motion, Transition } from "framer-motion"; // 1. Added Transition import
import Link from "next/link";
import { cn } from "@/lib/utils"; 

// 2. Explicitly typed this constant so TypeScript knows "spring" is a valid animation type
const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative h-full flex items-center">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm font-medium text-white/90 hover:text-[#FF5F38] transition-colors tracking-wide"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1rem)] -translate-x-1/2 transform pt-2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth morphing between dropdowns
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl"
              >
                <motion.div
                  layout // layout ensures smooth content resizing
                  className="w-max h-full p-2"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // Resets the state when leaving the menu bar
      className="relative flex justify-center space-x-6 px-4 py-2"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src?: string; // Optional image source if you want to add images later
}) => {
  return (
    <Link href={href} className="flex space-x-4 group p-3 rounded-xl hover:bg-white/5 transition-colors duration-200">
      <div className="flex-1">
        <h4 className="mb-1 text-sm font-bold text-white group-hover:text-[#FF5F38] transition-colors">
          {title}
        </h4>
        <p className="text-[11px] text-neutral-400 leading-tight max-w-[10rem] group-hover:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-300 text-sm hover:text-[#FF5F38] transition-colors block py-1.5 px-2 rounded-lg hover:bg-white/5"
    >
      {children}
    </Link>
  );
};