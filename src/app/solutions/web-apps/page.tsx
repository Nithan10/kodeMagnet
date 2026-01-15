"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarDemo } from "@/app/components-main/Navbar";
// 1. Import Footer
import Footer from "@/app/components-main/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  IconPlayerPlay, 
  IconChartBar, 
  IconLayoutKanban, 
  IconSearch, 
  IconBell,
  IconDotsVertical 
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// --- CAROUSEL DATA ---
const carouselImages = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1974&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1626379953822-baec57c6232b?q=80&w=2070&auto=format&fit=crop" 
];

export default function WebAppsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FF5F38] selection:text-white overflow-hidden">
      {/* Navbar */}
      <div className="relative w-full flex items-center justify-center">
         <NavbarDemo />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-40 pb-20 px-6">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 mb-6 rounded-full border border-[#FF5F38]/30 bg-[#FF5F38]/10 text-[#FF5F38] text-xs font-mono font-bold tracking-widest"
          >
            WEB APPLICATION DEVELOPMENT
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            More Than Just Websites. <br />
            <span className="text-white">We Build </span>
            <span className="text-[#FF5F38] underline decoration-wavy decoration-[#FF5F38]/30 underline-offset-8">
              Platforms.
            </span>
          </motion.h1>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
            From high-bandwidth content hubs to data-heavy enterprise dashboards. Experience the power of modern web technologies.
          </p>
        </div>
      </section>

      {/* --- INTERACTIVE SHOWCASE TABS --- */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
         <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Explore App Archetypes</h2>
            <p className="text-neutral-500">Click the tabs below to see different application styles.</p>
         </div>

         <AppShowcaseTabs />
      </section>

      {/* --- FEATURE HIGHLIGHTS --- */}
      <section className="py-24 px-6 border-t border-white/10 bg-neutral-950">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureColumn 
              title="Content Platforms"
              description="High-performance image and media delivery systems with automated optimization and global CDN caching."
            />
            <FeatureColumn 
              title="SaaS Dashboards"
              description="Complex data visualization using D3.js and Recharts. We handle millions of data points without UI lag."
            />
            <FeatureColumn 
              title="Real-Time Collaboration"
              description="Live cursors, comment threads, and instant state synchronization using WebSockets and CRDTs."
            />
         </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 relative">
         <div className="absolute inset-0 bg-[#FF5F38]/5 skew-y-1" />
         <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
            <h2 className="text-4xl font-bold mb-8">Ready to scale?</h2>
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-[#FF5F38] to-[#FF8050] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,95,56,0.4)] transition-all">
               Discuss Your Architecture
            </Link>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <div className="relative z-30">
        <Footer />
      </div>

    </main>
  );
}

// --- TAB COMPONENT ---

const AppShowcaseTabs = () => {
  const [activeTab, setActiveTab] = useState<"content" | "dashboard" | "kanban">("content");
  
  // CAROUSEL STATE
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // AUTOMATIC CAROUSEL TIMER
  useEffect(() => {
    if (activeTab !== "content") return; // Only run timer if on content tab

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3500); // Change image every 3.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount or tab change
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* Tab Triggers */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <TabButton 
           isActive={activeTab === "content"} 
           onClick={() => { setActiveTab("content"); setCurrentImageIndex(0); }} 
           icon={<IconPlayerPlay className="w-4 h-4" />}
           label="Content Platform" 
        />
        <TabButton 
           isActive={activeTab === "dashboard"} 
           onClick={() => setActiveTab("dashboard")} 
           icon={<IconChartBar className="w-4 h-4" />}
           label="Analytics Dashboard" 
        />
        <TabButton 
           isActive={activeTab === "kanban"} 
           onClick={() => setActiveTab("kanban")} 
           icon={<IconLayoutKanban className="w-4 h-4" />}
           label="Project Management" 
        />
      </div>

      {/* Tab Content Area */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
         {/* Browser Chrome (Fake Header) */}
         <div className="absolute top-0 left-0 right-0 h-10 bg-black border-b border-white/10 flex items-center px-4 gap-2 z-20">
            <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/80" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
               <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto w-1/2 h-6 bg-neutral-800 rounded flex items-center justify-center text-[10px] text-neutral-500 font-mono">
               {activeTab === "content" && "media.codemagnet.com/explore"}
               {activeTab === "dashboard" && "analytics.codemagnet.com/overview"}
               {activeTab === "kanban" && "tasks.codemagnet.com/board"}
            </div>
         </div>

         {/* Content Switcher */}
         <div className="pt-10 h-full w-full relative">
            <AnimatePresence mode="wait">
               
               {/* 1. CONTENT PLATFORM (AUTOMATIC CAROUSEL) */}
               {activeTab === "content" && (
                  <motion.div 
                     key="content"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className="w-full h-full flex"
                  >
                     {/* Left: Carousel Area */}
                     <div className="flex-1 bg-black relative group h-full overflow-hidden">
                        
                        {/* AnimatePresence for smooth image transitions */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImageIndex} // Key trigger animation on change
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                          >
                             <Image 
                                  src={carouselImages[currentImageIndex]}
                                  alt="Content Carousel"
                                  fill
                                  className="object-cover opacity-80"
                                  priority={true}
                             />
                          </motion.div>
                        </AnimatePresence>

                          {/* Carousel Indicators (Dots) */}
                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                             {carouselImages.map((_, index) => (
                               <div 
                                 key={index}
                                 className={cn(
                                   "w-2 h-2 rounded-full transition-all duration-300",
                                   index === currentImageIndex ? "bg-[#FF5F38] w-4" : "bg-white/30"
                                 )}
                               />
                             ))}
                          </div>
                        
                        {/* Fake UI Overlay for aesthetic */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
                     </div>

                     {/* Right: Playlist/Sidebar */}
                     <div className="w-80 bg-neutral-900 border-l border-white/10 p-4 hidden md:flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white border-b border-white/10 pb-2">Featured Content</h4>
                        {[1,2,3,4].map((i) => (
                           <div key={i} className="flex gap-3 items-center group cursor-pointer hover:bg-white/5 p-2 rounded transition-colors">
                              <div className="w-20 h-12 bg-neutral-800 rounded overflow-hidden relative">
                                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="flex-1">
                                 <div className="h-2 w-3/4 bg-neutral-700 rounded mb-2" />
                                 <div className="h-2 w-1/2 bg-neutral-800 rounded" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               )}

               {/* 2. ANALYTICS DASHBOARD MOCKUP */}
               {activeTab === "dashboard" && (
                  <motion.div 
                     key="dashboard"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className="w-full h-full bg-neutral-950 p-6 overflow-hidden"
                  >
                     {/* Header */}
                     <div className="flex justify-between items-center mb-8">
                        <div>
                           <h2 className="text-2xl font-bold text-white">Overview</h2>
                           <p className="text-neutral-500 text-sm">Last updated: Just now</p>
                        </div>
                        <div className="flex gap-2">
                           <button className="p-2 bg-neutral-900 rounded-lg border border-white/10 text-neutral-400 hover:text-[#FF5F38] transition-colors"><IconSearch className="w-4 h-4" /></button>
                           <button className="p-2 bg-neutral-900 rounded-lg border border-white/10 text-neutral-400 hover:text-[#FF5F38] transition-colors"><IconBell className="w-4 h-4" /></button>
                           <div className="w-8 h-8 rounded-full bg-[#FF5F38] flex items-center justify-center text-white font-bold">JD</div>
                        </div>
                     </div>
                     
                     {/* Stats Grid */}
                     <div className="grid grid-cols-4 gap-4 mb-6">
                        {["Total Revenue", "Active Users", "Bounce Rate", "Server Load"].map((item, i) => (
                           <div key={i} className="bg-neutral-900 p-4 rounded-xl border border-white/5">
                              <p className="text-neutral-500 text-xs mb-1">{item}</p>
                              <h4 className="text-xl font-bold text-white">
                                 {i === 0 ? "$45,231" : i === 1 ? "12,304" : i === 2 ? "24%" : "98ms"}
                              </h4>
                              <span className="text-[#FF5F38] text-xs">+12% vs last week</span>
                           </div>
                        ))}
                     </div>

                     {/* Big Chart Area */}
                     <div className="flex gap-4 h-full">
                        <div className="flex-1 bg-neutral-900 rounded-xl border border-white/5 p-4 relative overflow-hidden">
                           <h4 className="text-sm font-bold text-white mb-4">Traffic Analysis</h4>
                           {/* Decorative CSS Chart */}
                           <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-4 gap-1 opacity-80">
                              {[40, 60, 45, 70, 50, 80, 65, 85, 90, 60, 75, 50, 40, 60, 80].map((h, i) => (
                                 <motion.div 
                                    key={i} 
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="w-full bg-gradient-to-t from-[#FF5F38]/50 to-[#FF5F38] rounded-t-sm" 
                                 />
                              ))}
                           </div>
                        </div>
                        <div className="w-1/3 bg-neutral-900 rounded-xl border border-white/5 p-4">
                           <h4 className="text-sm font-bold text-white mb-4">Live Activity</h4>
                           <div className="space-y-3">
                              {[1,2,3].map((i) => (
                                 <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#FF5F38]" />
                                    <div className="h-2 w-20 bg-neutral-800 rounded" />
                                    <div className="ml-auto h-2 w-8 bg-neutral-800 rounded" />
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </motion.div>
               )}

               {/* 3. KANBAN MOCKUP */}
               {activeTab === "kanban" && (
                  <motion.div 
                     key="kanban"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className="w-full h-full bg-neutral-950 p-6 flex gap-6 overflow-hidden"
                  >
                     {/* Column 1 */}
                     <div className="w-1/3 bg-neutral-900/50 rounded-xl p-3 border border-white/5 flex flex-col gap-3">
                        <div className="flex justify-between items-center px-2">
                           <span className="text-xs font-bold text-neutral-400 uppercase">To Do</span>
                           <IconDotsVertical className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="p-3 bg-neutral-800 rounded border border-white/5 shadow-lg">
                           <div className="w-10 h-1 bg-red-500 rounded-full mb-2" />
                           <p className="text-sm text-white mb-2">Design System V2</p>
                           <div className="flex justify-between items-center">
                              <div className="w-6 h-6 rounded-full bg-neutral-700" />
                           </div>
                        </div>
                        <div className="p-3 bg-neutral-800 rounded border border-white/5 shadow-lg">
                           <div className="w-10 h-1 bg-blue-500 rounded-full mb-2" />
                           <p className="text-sm text-white">API Integration</p>
                        </div>
                     </div>

                     {/* Column 2 */}
                     <div className="w-1/3 bg-neutral-900/50 rounded-xl p-3 border border-white/5 flex flex-col gap-3">
                        <div className="flex justify-between items-center px-2">
                           <span className="text-xs font-bold text-[#FF5F38] uppercase">In Progress</span>
                           <IconDotsVertical className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="p-3 bg-neutral-800 rounded border border-[#FF5F38]/30 shadow-lg relative">
                           <div className="absolute top-3 right-3 w-2 h-2 bg-[#FF5F38] rounded-full animate-pulse" />
                           <div className="w-10 h-1 bg-green-500 rounded-full mb-2" />
                           <p className="text-sm text-white mb-2">Image Optimization Pipeline</p>
                           <p className="text-xs text-neutral-500">Processing...</p>
                        </div>
                     </div>

                     {/* Column 3 */}
                     <div className="w-1/3 bg-neutral-900/50 rounded-xl p-3 border border-white/5 flex flex-col gap-3 opacity-50">
                        <div className="flex justify-between items-center px-2">
                           <span className="text-xs font-bold text-neutral-400 uppercase">Done</span>
                           <IconDotsVertical className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="p-3 bg-neutral-800 rounded border border-white/5">
                           <p className="text-sm text-white line-through text-neutral-500">User Auth</p>
                        </div>
                        <div className="p-3 bg-neutral-800 rounded border border-white/5">
                           <p className="text-sm text-white line-through text-neutral-500">DB Schema</p>
                        </div>
                     </div>
                  </motion.div>
               )}

            </AnimatePresence>
         </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const TabButton = ({ isActive, onClick, label, icon }: { isActive: boolean, onClick: () => void, label: string, icon: React.ReactNode }) => (
   <button 
      onClick={onClick}
      className={cn(
         "flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-bold transition-all duration-300",
         isActive 
            ? "bg-gradient-to-r from-[#FF5F38] to-[#FF8050] border-transparent text-white shadow-[0_0_15px_rgba(255,95,56,0.3)]" 
            : "bg-transparent border-white/10 text-neutral-400 hover:text-white hover:border-white/30"
      )}
   >
      {icon}
      {label}
   </button>
);

const FeatureColumn = ({ title, description }: { title: string, description: string }) => (
   <div className="flex flex-col gap-4">
      <div className="w-10 h-1 bg-gradient-to-r from-[#FF5F38] to-[#FFA050] rounded-full" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm">{description}</p>
   </div>
);