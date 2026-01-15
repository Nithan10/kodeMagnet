"use client";
import React from "react";
import { motion } from "framer-motion";
import { NavbarDemo } from "@/app/components-main/Navbar";
// 1. Import Footer
import Footer from "@/app/components-main/Footer";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { 
  IconBrain, 
  IconCpu, 
  IconRobot, 
  IconEye, 
  IconMessageChatbot, 
  IconCode 
} from "@tabler/icons-react";

export default function AISolutionsPage() {
  return (
    // Updated Selection Color to Start Color (#Ff3131)
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-[#Ff3131] selection:text-white overflow-hidden">
      {/* Navbar */}
      <div className="relative w-full flex items-center justify-center z-50">
         <NavbarDemo />
      </div>

      {/* --- LAMP HERO SECTION --- */}
      {/* A dramatic spotlight effect for AI focus */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full rounded-md z-0">
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
           <LampEffect />
        </div>
        
        <div className="relative z-10 flex flex-col items-center px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            // Badge Colors Updated
            className="mb-8 px-4 py-1 rounded-full border border-[#Ff3131]/40 bg-[#Ff3131]/10 text-[#Ff3131] text-sm font-mono font-bold uppercase tracking-widest backdrop-blur-md"
          >
            Cognitive Computing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="bg-gradient-to-br from-white to-neutral-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            We Engineer <br />
            {/* Gradient Text for Superintelligence */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#Ff3131] to-[#ff914d] glow-text drop-shadow-[0_0_15px_rgba(255,49,49,0.5)]">
              Superintelligence.
            </span>
          </motion.h1>

          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="mt-6 max-w-2xl text-center text-neutral-400 text-lg md:text-xl leading-relaxed"
          >
             Unlock the power of Generative AI, Computer Vision, and Predictive Analytics. We build systems that don't just compute—they understand.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="mt-10 flex gap-4"
          >
             {/* Conic Gradient Button: Start -> End Colors */}
             <Link href="/contact" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#Ff3131] focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff914d_0%,#Ff3131_50%,#ff914d_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
                   Start AI Transformation
                </span>
             </Link>
          </motion.div>
        </div>
      </section>

      {/* --- HOLOGRAPHIC GRID FEATURES --- */}
      <section className="py-20 px-6 relative z-10 -mt-20">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
               <HolographicCard 
                  title="Large Language Models"
                  icon={<IconMessageChatbot className="w-8 h-8 text-[#Ff3131]" />}
                  description="Fine-tuning GPT-4 and Llama 3 on your proprietary data. Build agents that speak your business language fluently."
               />
               
               <HolographicCard 
                  title="Computer Vision"
                  icon={<IconEye className="w-8 h-8 text-[#Ff3131]" />}
                  description="Automated quality control, facial recognition, and object detection using advanced CNN architectures."
               />

               <HolographicCard 
                  title="Predictive Engines"
                  icon={<IconBrain className="w-8 h-8 text-[#Ff3131]" />}
                  description="Forecast sales, churn, and market trends. We turn raw historical data into actionable future insights."
               />

               <HolographicCard 
                  title="Autonomous Agents"
                  icon={<IconRobot className="w-8 h-8 text-[#Ff3131]" />}
                  description="Self-governing bots that can browse the web, execute code, and perform complex multi-step workflows."
               />

               <HolographicCard 
                  title="Edge AI"
                  icon={<IconCpu className="w-8 h-8 text-[#Ff3131]" />}
                  description="Deploy optimized models to IoT devices and mobiles. Ultra-low latency inference without cloud dependency."
               />

               <HolographicCard 
                  title="AI Code Generation"
                  icon={<IconCode className="w-8 h-8 text-[#Ff3131]" />}
                  description="Accelerate development with custom coding assistants trained on your specific codebase and standards."
               />

            </div>
         </div>
      </section>

      {/* --- TECH STACK MARQUEE --- */}
      <section className="py-20 bg-black border-y border-white/10">
         <div className="max-w-7xl mx-auto text-center mb-10">
            <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Powered By Industry Leaders</p>
         </div>
         <div className="flex overflow-hidden space-x-16 group">
            {/* Infinite Scroll Animation - Hover Color Updated */}
            <div className="flex space-x-16 animate-loop-scroll min-w-full justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">OpenAI</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">TensorFlow</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">PyTorch</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">HuggingFace</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">LangChain</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">Pinecone</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">NVIDIA</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex space-x-16 animate-loop-scroll min-w-full justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500" aria-hidden="true">
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">OpenAI</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">TensorFlow</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">PyTorch</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">HuggingFace</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">LangChain</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">Pinecone</span>
               <span className="text-2xl font-bold text-white hover:text-[#Ff3131] transition-colors">NVIDIA</span>
            </div>
         </div>
      </section>

      {/* --- VISUAL SHOWCASE: "THE BRAIN" --- */}
      <section className="py-24 px-6 relative">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Interactive Data Graphic */}
            <div className="relative h-[500px] bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden group">
               <Image 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
                  alt="AI Visualization"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
               />
               
               {/* Scanning Line Animation - Start Color */}
               <div className="absolute top-0 left-0 w-full h-1 bg-[#Ff3131] shadow-[0_0_20px_#Ff3131] animate-scan opacity-50" />
               
               <div className="absolute bottom-6 left-6 p-4 bg-black/60 backdrop-blur border border-white/10 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                     {/* Text Color Updated */}
                     <span className="text-xs font-mono text-[#Ff3131]">Training Complete</span>
                  </div>
                  <div className="text-white font-bold text-lg">99.8% Accuracy</div>
               </div>
            </div>

            {/* Right: Text */}
            <div>
               <h2 className="text-4xl font-bold mb-6">From Black Box to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#Ff3131] to-[#ff914d]">Business Value.</span></h2>
               <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  Many companies experiment with AI; few productionize it. We bridge the gap between research and revenue. Our MLOps pipelines ensure your models are scalable, secure, and constantly improving.
               </p>
               
               <ul className="space-y-4">
                  <ListItem text="Automated Data Pipelines (ETL)" />
                  <ListItem text="Model Monitoring & Retraining" />
                  <ListItem text="Compliance & Bias Detection" />
                  <ListItem text="Cost Optimization (GPU/TPU)" />
               </ul>
            </div>

         </div>
      </section>

      {/* --- FOOTER --- */}
      <div className="relative z-30">
        <Footer />
      </div>

    </main>
  );
}

// --- SUB-COMPONENTS ---

const HolographicCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => {
   return (
      <motion.div 
         whileHover={{ y: -5 }}
         // Hover Border Updated
         className="group relative h-full rounded-3xl border border-white/10 bg-neutral-900/40 px-6 py-8 shadow-2xl overflow-hidden backdrop-blur-sm hover:border-[#Ff3131]/30 transition-colors"
      >
         {/* Holographic Gradient Blob - Start Color */}
         <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#Ff3131]/20 rounded-full blur-[50px] group-hover:bg-[#Ff3131]/30 transition-colors" />
         
         <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#Ff3131] shadow-lg">
               {icon}
            </div>
            {/* Title Hover Color Updated */}
            <h3 className="mb-3 text-xl font-bold text-white group-hover:text-[#Ff3131] transition-colors">{title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
         </div>

         {/* Bottom Line - Start Color */}
         <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#Ff3131] transition-all duration-300 group-hover:w-full" />
      </motion.div>
   )
}

const ListItem = ({ text }: { text: string }) => (
   <div className="flex items-center gap-3">
      {/* List Bullet Updated */}
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#Ff3131]/10 border border-[#Ff3131]/30">
         <div className="w-1.5 h-1.5 rounded-full bg-[#Ff3131]" />
      </div>
      <span className="text-neutral-300">{text}</span>
   </div>
)

// --- LAMP EFFECT COMPONENT (Custom) ---
const LampEffect = () => {
   return (
     <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 bg-neutral-950">
       <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
         <motion.div
           initial={{ opacity: 0.5, width: "15rem" }}
           whileInView={{ opacity: 1, width: "30rem" }}
           transition={{
             delay: 0.3,
             duration: 0.8,
             ease: "easeInOut",
           }}
           style={{
             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
           }}
           // Gradient Conic: Using Start Color
           className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#Ff3131] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
         >
           <div className="absolute  w-[100%] left-0 bg-neutral-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
           <div className="absolute  w-40 h-[100%] left-0 bg-neutral-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
         </motion.div>
         <motion.div
           initial={{ opacity: 0.5, width: "15rem" }}
           whileInView={{ opacity: 1, width: "30rem" }}
           transition={{
             delay: 0.3,
             duration: 0.8,
             ease: "easeInOut",
           }}
           style={{
             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
           }}
           // Gradient Conic: Using Start Color
           className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#Ff3131] text-white [--conic-position:from_290deg_at_center_top]"
         >
           <div className="absolute  w-[100%] right-0 bg-neutral-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
           <div className="absolute  w-40 h-[100%] right-0 bg-neutral-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
         </motion.div>
         <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-neutral-950 blur-2xl"></div>
         <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
         {/* Glow Blob - Start Color */}
         <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#Ff3131] opacity-50 blur-3xl"></div>
         <motion.div
           initial={{ width: "8rem" }}
           whileInView={{ width: "16rem" }}
           transition={{
             delay: 0.3,
             duration: 0.8,
             ease: "easeInOut",
           }}
           // Inner Glow - Start Color
           className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#Ff3131] blur-2xl"
         ></motion.div>
         <motion.div
           initial={{ width: "15rem" }}
           whileInView={{ width: "30rem" }}
           transition={{
             delay: 0.3,
             duration: 0.8,
             ease: "easeInOut",
           }}
           // Top Line - Start Color
           className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#Ff3131] "
         ></motion.div>
 
         <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-neutral-950 "></div>
       </div>
     </div>
   );
 };