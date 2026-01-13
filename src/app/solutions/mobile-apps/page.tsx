"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NavbarDemo } from "@/app/components-main/Navbar";
import Image from "next/image";
import Link from "next/link";
import { IconBrandApple, IconBrandAndroid, IconDeviceMobile, IconBolt, IconWifiOff, IconFingerprint } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function MobileAppsPage() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    // Updated selection color to Orange
    <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-[#ff4d00] selection:text-white overflow-hidden">
      {/* Navbar */}
      <div className="relative w-full flex items-center justify-center">
         <NavbarDemo />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-40 pb-20 px-6">
        {/* Updated Background Gradient (Red/Orange hue) */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#ff4d00]/20 to-transparent opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
           <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                // Updated text color
                className="flex items-center gap-2 text-[#ff4d00] font-mono text-sm uppercase tracking-widest"
              >
                 <IconDeviceMobile className="w-5 h-5" />
                 <span>Mobile First Engineering</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
              >
                Apps That <br />
                {/* Updated Gradient Text to match Logo (Red to Orange) */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2600] to-[#ff9100]">
                  Define Brands.
                </span>
              </motion.h1>

              <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-neutral-400 text-lg max-w-lg leading-relaxed"
              >
                We build native and cross-platform mobile experiences that are intuitive, engaging, and performance-driven. iOS, Android, or both—we ship excellence.
              </motion.p>

              <div className="flex flex-wrap gap-4 pt-4">
                 <TechPill icon={<IconBrandApple />} text="iOS (Swift)" />
                 <TechPill icon={<IconBrandAndroid />} text="Android (Kotlin)" />
                 <TechPill icon={<IconBolt />} text="React Native" />
                 <TechPill icon={<IconDeviceMobile />} text="Flutter" />
              </div>
           </div>

           {/* RIGHT SIDE: 3D PHONE MOCKUP VISUAL */}
           <motion.div 
             initial={{ opacity: 0, rotate: 10, y: 100 }}
             animate={{ opacity: 1, rotate: 0, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative h-[600px] flex items-center justify-center"
           >
              {/* Decorative Glow - Updated to Orange */}
              <div className="absolute inset-0 bg-[#ff4d00] blur-[100px] opacity-20 rounded-full" />
              
              {/* Phone Frame 1 */}
              <PhoneFrame 
                 className="absolute z-20 shadow-2xl"
                 imageSrc="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
              />
              
              {/* Phone Frame 2 (Behind) */}
              <PhoneFrame 
                 className="absolute z-10 -right-4 top-20 scale-90 opacity-60 grayscale blur-[1px]"
                 imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop"
              />
           </motion.div>
        </div>
      </section>

      {/* --- DEVELOPMENT APPROACH --- */}
      <section className="py-24 px-6 bg-neutral-950 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                 Choose Your <span className="text-[#ff4d00]">Architecture</span>
               </h2>
               <p className="text-neutral-400 max-w-2xl mx-auto">
                  We don't believe in one-size-fits-all. We recommend the right tech stack based on your budget, timeline, and performance needs.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <ApproachCard 
                  title="Native Development"
                  subtitle="Swift & Kotlin"
                  description="Maximum performance and full access to device hardware. Best for complex, animation-heavy consumer apps."
                  isRecommended={false}
               />
               <ApproachCard 
                  title="Cross-Platform"
                  subtitle="React Native / Flutter"
                  description="One codebase, two platforms. Reduce development time and cost by 40% while maintaining near-native performance."
                  isRecommended={true}
               />
               <ApproachCard 
                  title="PWA Solutions"
                  subtitle="Progressive Web Apps"
                  description="Installable web apps that run in the browser. Zero store fees, instant updates, and broad reach."
                  isRecommended={false}
               />
            </div>
         </div>
      </section>

      {/* --- FEATURE HIGHLIGHTS --- */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Interactive Grid */}
            <div className="grid grid-cols-2 gap-4">
               <FeatureBox icon={<IconWifiOff />} title="Offline First" desc="Apps work without signal." />
               <FeatureBox icon={<IconFingerprint />} title="Biometric Auth" desc="Secure FaceID/TouchID." />
               <FeatureBox icon={<IconBolt />} title="60 FPS" desc="Butter smooth animations." />
               <FeatureBox icon={<IconDeviceMobile />} title="Haptic Feedback" desc="Tactile interactions." />
            </div>

            {/* Right: Text */}
            <div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">
                 Built for the <br />
                 <span className="text-[#ff4d00]">Modern User.</span>
               </h2>
               <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  Users abandon apps that are slow, confusing, or ugly. We obsess over the details—smooth transitions, intuitive gestures, and instant load times—to ensure high retention rates.
               </p>
               <Link href="/contact" className="inline-flex items-center gap-2 border-b border-[#ff4d00] text-[#ff4d00] pb-1 hover:text-white hover:border-white transition-all">
                  Start your mobile project
                  <IconBolt className="w-4 h-4" />
               </Link>
            </div>
         </div>
      </section>

    </main>
  );
}

// --- SUB-COMPONENTS ---

const PhoneFrame = ({ className, imageSrc }: { className?: string, imageSrc: string }) => {
   return (
      <div className={cn("w-[300px] h-[600px] rounded-[3rem] border-8 border-neutral-800 bg-black overflow-hidden relative shadow-2xl", className)}>
         {/* Notch */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl z-20"></div>
         
         {/* Screen Content */}
         <div className="relative w-full h-full bg-neutral-900">
            <Image 
               src={imageSrc}
               alt="App Screen"
               fill
               className="object-cover"
            />
            {/* Shine/Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
         </div>
      </div>
   )
}

const TechPill = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
   // Updated Hover Border color
   <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-300 text-sm hover:border-[#ff4d00] hover:text-white transition-colors cursor-default">
      {icon}
      <span>{text}</span>
   </div>
)

const ApproachCard = ({ title, subtitle, description, isRecommended }: { title: string, subtitle: string, description: string, isRecommended: boolean }) => (
   <div className={cn(
      "p-8 rounded-2xl border transition-all duration-300 relative group overflow-hidden",
      // Updated Border and Shadow colors for recommended card
      isRecommended 
        ? "bg-neutral-900/80 border-[#ff4d00]/50 shadow-[0_0_30px_rgba(255,77,0,0.15)]" 
        : "bg-neutral-950 border-white/10 hover:border-white/20"
   )}>
      {isRecommended && (
         // Updated Badge to Gradient Orange
         <div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-[#ff4d00] to-[#ff9100] text-white text-[10px] font-bold uppercase tracking-wide rounded">
            Popular
         </div>
      )}
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-[#ff4d00] text-sm font-mono mb-4">{subtitle}</p>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
   </div>
)

const FeatureBox = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
   // Updated Hover Border color
   <div className="p-6 rounded-xl bg-neutral-900 border border-white/5 hover:border-[#ff4d00]/40 transition-colors">
      <div className="mb-3 text-[#ff4d00]">{icon}</div>
      <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
      <p className="text-neutral-500 text-xs">{desc}</p>
   </div>
)