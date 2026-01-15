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
  ChevronDown,
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

  const getLinkClass = (path: string) =>
    cn(
      "cursor-pointer text-sm font-medium transition-colors tracking-wide",
      pathname === path
        ? "text-[#FF5F38]"
        : "text-white/90 hover:text-[#FF5F38]"
    );

  const isSectionActive = (prefix: string) => pathname?.startsWith(prefix);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div
        className={cn(
          "hidden lg:flex fixed inset-x-0 mx-auto max-w-fit rounded-full z-50",
          "bg-black/40 backdrop-blur-md border border-white/[0.08]",
          "shadow-[0_2px_20px_-2px_rgba(0,0,0,0.4)]",
          "pl-4 pr-6 py-2 items-center",
          className
        )}
      >
        <Menu setActive={setActive}>
          <div className="flex items-center gap-5">

            {/* LOGO */}
            <Link href="/" className="mr-2">
              <div className="relative h-9 min-w-[80px]">
                <Image
                  src="/img_31.png"
                  alt="KodeMagnet"
                  width={300}
                  height={150}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            <Link href="/" className={getLinkClass("/")}>Home</Link>

            {/* WHAT WE DO */}
            <div className={isSectionActive("/solutions") ? "text-[#FF5F38]" : ""}>
              <MenuItem item="What We Do" active={active} setActive={setActive}>
                <div className="grid grid-cols-2 gap-4 p-4 w-[400px] bg-black/80 backdrop-blur-xl rounded-xl border border-white/10">
                  <HoveredLink href="/solutions/software"><Item icon={<Code2 className="text-blue-500"/>}>Software Solutions</Item></HoveredLink>
                  <HoveredLink href="/solutions/point"><Item icon={<Target className="text-red-500"/>}>Point Solutions</Item></HoveredLink>
                  <HoveredLink href="/solutions/websites"><Item icon={<Layout className="text-green-500"/>}>Websites</Item></HoveredLink>
                  <HoveredLink href="/solutions/mobile-apps"><Item icon={<Smartphone className="text-purple-500"/>}>Mobile Apps</Item></HoveredLink>
                  <HoveredLink href="/solutions/web-apps"><Item icon={<Globe className="text-orange-500"/>}>Web Apps</Item></HoveredLink>
                  <HoveredLink href="/solutions/chatbot"><Item icon={<MessageSquare className="text-pink-500"/>}>Chatbot</Item></HoveredLink>
                  <HoveredLink href="/solutions/ai"><Item icon={<Bot className="text-cyan-500"/>}>AI Solutions</Item></HoveredLink>
                  <HoveredLink href="/solutions/hire-train-deploy"><Item icon={<Users className="text-yellow-500"/>}>Hire, Train & Deploy</Item></HoveredLink>
                </div>
              </MenuItem>
            </div>

            {/* OUR PRODUCTS — ONLY KODEGRAPHY */}
            <div className={isSectionActive("/products") ? "text-[#FF5F38]" : ""}>
              <MenuItem item="Our Products" active={active} setActive={setActive}>
                <div className="p-3 w-[260px] bg-black/80 backdrop-blur-xl rounded-xl border border-white/10">
                  <ProductCard
                    title="Kodegraphy"
                    desc="Event photography with QR."
                    href="/products/kodegraphy"
                    icon={<Camera className="w-5 h-5 text-fuchsia-500" />}
                  />
                </div>
              </MenuItem>
            </div>

            <Link href="/about" className={getLinkClass("/about")}>About Us</Link>
            <Link href="/contact" className={getLinkClass("/contact")}>Contact Us</Link>

            <Link
              href="/learn"
              className={cn(
                "px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-wider",
                pathname === "/learn"
                  ? "bg-[#FF5F38] border-[#FF5F38] text-white"
                  : "border-white/20 text-white hover:bg-[#FF5F38]"
              )}
            >
              Learn From Us
            </Link>

          </div>
        </Menu>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="lg:hidden fixed inset-x-0 top-4 z-50 mx-4">
        <div className="flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5">
          <Link href="/">
            <Image src="/img_31.png" alt="KodeMagnet" width={140} height={60} />
          </Link>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-3 bg-black/80 backdrop-blur-2xl rounded-2xl p-5 border border-white/10"
            >
              <MobileLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileLink>

              <MobileAccordion title="Our Products">
                <MobileLink
                  href="/products/kodegraphy"
                  icon={<Camera className="text-fuchsia-500" />}
                >
                  Kodegraphy
                </MobileLink>
              </MobileAccordion>

              <MobileLink href="/about">About Us</MobileLink>
              <MobileLink href="/contact">Contact Us</MobileLink>

              <Link
                href="/learn"
                className="block mt-3 text-center bg-[#FF5F38] rounded-xl py-2 font-bold"
              >
                Learn From Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

/* ================= HELPER COMPONENTS ================= */

const Item = ({ children, icon }: any) => (
  <div className="flex items-center gap-3 group">
    {icon}
    <span className="text-sm">{children}</span>
  </div>
);

const ProductCard = ({ title, desc, href, icon }: any) => (
  <Link href={href} className="flex gap-3 p-3 rounded-xl hover:bg-white/5">
    {icon}
    <div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-xs text-neutral-400">{desc}</p>
    </div>
  </Link>
);

const MobileAccordion = ({ title, children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex justify-between w-full py-2">
        {title}
        <ChevronDown className={cn("transition", open && "rotate-180")} />
      </button>
      {open && <div className="pl-2">{children}</div>}
    </div>
  );
};

const MobileLink = ({ href, children, icon, onClick }: any) => (
  <Link href={href} onClick={onClick} className="flex items-center gap-3 py-2">
    {icon}
    {children}
  </Link>
);

const MenuIcon = () => (<span className="text-white">☰</span>);
const CloseIcon = () => (<span className="text-white">✕</span>);

export default NavbarDemo;
