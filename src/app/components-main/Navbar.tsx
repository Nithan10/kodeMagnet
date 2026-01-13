"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { 
  Code2, 
  Target, 
  Layout, 
  Smartphone, 
  Globe, 
  MessageSquare, 
  Bot, 
  Users, 
  Camera, 
  BarChart3, 
  BookOpen, 
  MessageCircle,
  ChevronDown 
} from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();

  // Helper to highlight active links
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return cn(
      "cursor-pointer text-sm font-medium transition-colors duration-200 tracking-wide",
      isActive ? "text-[#FF5F38]" : "text-white/90 hover:text-[#FF5F38]"
    );
  };

  const isSectionActive = (prefix: string) => pathname?.startsWith(prefix);

  return (
    <>
      {/* =======================================================================
        DESKTOP NAVBAR - PRO GLASS DESIGN
        =======================================================================
      */}
      <div
        className={cn(
          "hidden lg:flex fixed inset-x-0 mx-auto max-w-fit rounded-full z-50 transition-all duration-300",
          // Glass Effect & Pro Borders
          "bg-black/40 backdrop-blur-md border border-white/[0.08] shadow-[0_2px_20px_-2px_rgba(0,0,0,0.4)]", 
          "pl-4 pr-6 py-2 items-center", 
          className
        )}
      >
        <Menu setActive={setActive}>
          <div className="flex items-center justify-center w-full gap-5">
            
            {/* LOGO - Reduced size for sleek look */}
            <Link href="/" className="flex items-center justify-center mr-2 transition-opacity hover:opacity-80">
              <div className="relative h-9 w-auto min-w-[80px]"> 
                  <Image 
                    src="/img_31.png" 
                    alt="CodeMagnet" 
                    width={300} 
                    height={150}
                    className="h-full w-auto object-contain object-left" 
                    priority
                  />
              </div>
            </Link>

            {/* 1. Home */}
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>

            {/* 2. What We Do */}
            <div className={isSectionActive("/solutions") ? "text-[#FF5F38]" : "text-white/90"}>
                <MenuItem setActive={setActive} active={active} item="What We Do">
                  {/* Dropdown Container */}
                  <div className="grid grid-cols-2 gap-4 p-4 text-sm w-[400px] bg-black/80 backdrop-blur-xl rounded-xl border border-white/10">
                    <HoveredLink href="/solutions/software">
                        <div className="flex items-center gap-3 group">
                          <Code2 className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">Software Solutions</span>
                        </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/point">
                        <div className="flex items-center gap-3 group">
                          <Target className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">Point Solutions</span>
                        </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/websites">
                        <div className="flex items-center gap-3 group">
                          <Layout className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">Websites</span>
                        </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/mobile-apps">
                        <div className="flex items-center gap-3 group">
                          <Smartphone className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">Mobile Apps</span>
                        </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/web-apps">
                        <div className="flex items-center gap-3 group">
                          <Globe className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">Web Apps</span>
                        </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/chatbot">
                        <div className="flex items-center gap-3 group">
                          <MessageSquare className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">Chatbot</span>
                        </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/ai">
                        <div className="flex items-center gap-3 group">
                          <Bot className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">AI Solutions</span>
                        </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/hire-train-deploy">
                        <div className="flex items-center gap-3 group">
                          <Users className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">Hire, Train & Deploy</span>
                        </div>
                    </HoveredLink>
                  </div>
                </MenuItem>
            </div>

            {/* 3. Our Products */}
            <div className={isSectionActive("/products") ? "text-[#FF5F38]" : "text-white/90"}>
                <MenuItem setActive={setActive} active={active} item="Our Products">
                    <div className="grid grid-cols-2 gap-3 p-3 text-sm w-[520px] bg-black/80 backdrop-blur-xl rounded-xl border border-white/10">
                      <ProductCard 
                          title="Kodegraphy"
                          href="/products/kodegraphy"
                          desc="Event photography with QR."
                          icon={<Camera className="w-5 h-5 text-fuchsia-500" />}
                      />
                      <ProductCard 
                          title="CodeLeads"
                          href="/products/codeleads"
                          desc="Sales CRM lead tracking."
                          icon={<BarChart3 className="w-5 h-5 text-emerald-500" />}
                      />
                      <ProductCard 
                          title="CodeMagnet LMS"
                          href="/products/kodemagnet-lms"
                          desc="Coding education platform."
                          icon={<BookOpen className="w-5 h-5 text-indigo-500" />}
                      />
                      <ProductCard 
                          title="KodeChat"
                          href="/products/kodechat"
                          desc="Automated DM engagement."
                          icon={<MessageCircle className="w-5 h-5 text-rose-500" />}
                      />
                    </div>
                </MenuItem>
            </div>

            {/* 4. About Us */}
            <Link href="/about" className={getLinkClass("/about")}>
              About Us
            </Link>
            
            {/* 5. Contact Us */}
            <Link href="/contact" className={getLinkClass("/contact")}>
              Contact Us
            </Link>

            {/* 6. Learn From Us Button - More compact */}
            <Link 
                href="/learn" 
                className={cn(
                    "px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-all duration-300",
                    pathname === "/learn" 
                        ? "bg-[#FF5F38] border-[#FF5F38] text-white shadow-[0_0_15px_rgba(255,95,56,0.5)]" 
                        : "border-white/20 text-white hover:bg-[#FF5F38] hover:border-[#FF5F38] hover:text-white"
                )}
            >
              Learn From Us
            </Link>

          </div>
        </Menu>
      </div>

      {/* =======================================================================
        MOBILE NAVBAR - PRO GLASS DESIGN
        =======================================================================
      */}
      <div className={cn("lg:hidden fixed inset-x-0 top-4 z-50 mx-4", className?.replace("top-5", ""))}>
        <div className="flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 shadow-lg">
            
            {/* LOGO (Mobile) */}
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-auto"> 
                 <Image 
                    src="/img_31.png" 
                    alt="CodeMagnet" 
                    width={200} 
                    height={100} 
                    className="h-full w-auto object-contain"
                 />
              </div>
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/90 p-1 focus:outline-none hover:text-[#FF5F38] transition-colors"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-3 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl overflow-hidden flex flex-col gap-3"
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={cn("text-base font-medium p-2 rounded-lg hover:bg-white/5", pathname === "/" && "text-[#FF5F38]")}>Home</Link>

              <MobileAccordion title="What We Do">
                  <div className="grid grid-cols-1 gap-3 pl-2 mt-2">
                    <MobileLink href="/solutions/software" icon={<Code2 className="w-4 h-4 text-blue-500"/>}>Software Solutions</MobileLink>
                    <MobileLink href="/solutions/point" icon={<Target className="w-4 h-4 text-red-500"/>}>Point Solutions</MobileLink>
                    <MobileLink href="/solutions/websites" icon={<Layout className="w-4 h-4 text-green-500"/>}>Websites</MobileLink>
                    <MobileLink href="/solutions/mobile-apps" icon={<Smartphone className="w-4 h-4 text-purple-500"/>}>Mobile Apps</MobileLink>
                    <MobileLink href="/solutions/ai" icon={<Bot className="w-4 h-4 text-cyan-500"/>}>AI Solutions</MobileLink>
                  </div>
              </MobileAccordion>

              <MobileAccordion title="Our Products">
                  <div className="grid grid-cols-1 gap-3 pl-2 mt-2">
                      <MobileLink href="/products/kodegraphy" icon={<Camera className="w-4 h-4 text-fuchsia-500"/>}>Kodegraphy</MobileLink>
                      <MobileLink href="/products/codeleads" icon={<BarChart3 className="w-4 h-4 text-emerald-500"/>}>CodeLeads CRM</MobileLink>
                      <MobileLink href="/products/kodemagnet-lms" icon={<BookOpen className="w-4 h-4 text-indigo-500"/>}>CodeMagnet LMS</MobileLink>
                      <MobileLink href="/products/kodechat" icon={<MessageCircle className="w-4 h-4 text-rose-500"/>}>KodeChat</MobileLink>
                  </div>
              </MobileAccordion>

              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={cn("text-base font-medium p-2 rounded-lg hover:bg-white/5", pathname === "/about" && "text-[#FF5F38]")}>About Us</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={cn("text-base font-medium p-2 rounded-lg hover:bg-white/5", pathname === "/contact" && "text-[#FF5F38]")}>Contact Us</Link>
              
              <Link href="/learn" onClick={() => setMobileMenuOpen(false)} className="mt-2 text-center w-full py-2.5 rounded-xl bg-[#FF5F38] text-white text-sm font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-transform">Learn From Us</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// --- Custom Product Card for Menu ---
const ProductCard = ({ title, desc, href, icon }: { title: string, desc: string, href: string, icon: React.ReactNode }) => {
  return (
    <Link href={href} className="flex gap-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group">
      <div className="mt-0.5">{icon}</div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-0.5 group-hover:text-[#FF5F38] transition-colors">{title}</h4>
        <p className="text-neutral-400 text-[11px] leading-tight group-hover:text-neutral-300">{desc}</p>
      </div>
    </Link>
  )
}

// --- Helper Components ---

const MobileAccordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col border-b border-white/5 pb-2">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between text-base font-medium text-white p-2 hover:text-[#FF5F38] rounded-lg transition-colors">
        {title}
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
           <ChevronDown className="w-4 h-4 text-neutral-400" />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
             {children}
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileLink = ({ href, children, icon }: { href: string, children: React.ReactNode, icon?: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={cn("text-sm transition-colors flex items-center gap-3 p-2 rounded-lg", isActive ? "bg-white/5 text-[#FF5F38] font-medium" : "text-neutral-400 hover:text-white hover:bg-white/5")}>
      {icon}
      {children}
    </Link>
  )
}

// --- Icons ---
const MenuIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>)
const CloseIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>)

export default NavbarDemo;