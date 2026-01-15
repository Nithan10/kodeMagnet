"use client";
import React from "react";
import { motion } from "framer-motion";
import { NavbarDemo } from "@/app/components-main/Navbar";
import Footer from "@/app/components-main/Footer"; // Imported Footer
import Link from "next/link";
import { 
  IconSearch, 
  IconClipboardList, 
  IconSchool, 
  IconRocket, 
  IconCheck,
  IconUsersGroup,
  IconRefresh
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function HireTrainDeployPage() {
  return (
    // Updated selection color to Start Color (#Ff3131)
    <main className="min-h-screen bg-black text-white selection:bg-[#Ff3131] selection:text-white overflow-hidden">
      {/* Navbar */}
      <div className="relative w-full flex items-center justify-center z-50">
         <NavbarDemo />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-40 pb-20 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              // Updated Badge Colors to Start Color
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#Ff3131]/30 bg-[#Ff3131]/10 text-[#Ff3131] text-sm font-bold tracking-wide"
          >
             <IconUsersGroup className="w-4 h-4" />
             TALENT PIPELINE AS A SERVICE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Zero-Friction <br />
            <span className="text-white">Tech </span>
            {/* Updated Gradient Text & Underline */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#Ff3131] to-[#ff914d] underline decoration-wavy decoration-[#Ff3131]/30 underline-offset-8">
               Deployment.
            </span>
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-neutral-400 text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Stop wasting months on recruitment. We identify top talent, train them on <strong>your specific tech stack</strong>, and deploy them ready to code on Day 1.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             {/* Updated Primary Button with Gradient */}
             <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-[#Ff3131] to-[#ff914d] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,49,49,0.3)] transition-all transform hover:-translate-y-1">
               Start Your Pipeline
             </Link>
             <div className="flex items-center gap-4 text-sm text-neutral-400">
                <span className="flex items-center gap-1"><IconCheck className="w-4 h-4 text-[#Ff3131]" /> 2-Week Trial</span>
                <span className="flex items-center gap-1"><IconCheck className="w-4 h-4 text-[#Ff3131]" /> Zero Hiring Fees</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- THE PROCESS FLOW (TIMELINE) --- */}
      <section className="py-24 px-6 bg-neutral-950 relative">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">
                 The Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#Ff3131] to-[#ff914d]">Engine</span>
               </h2>
               <p className="text-neutral-400">How we transform raw potential into your ideal employee.</p>
            </div>
            
            <div className="relative">
               {/* Central Line - Gradient Start to Black */}
               <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#Ff3131] via-neutral-800 to-neutral-900 md:-translate-x-1/2 rounded-full" />

               <TimelineStep 
                  number="01"
                  title="Requirement Analysis"
                  icon={<IconClipboardList className="w-6 h-6" />}
                  description="We sit down with your CTO/Tech Leads to understand your exact stack, culture, and project needs. We don't just ask 'Java or Python'—we ask about your microservices architecture, deployment pipelines, and coding standards."
                  side="left"
               />

               <TimelineStep 
                  number="02"
                  title="Sourcing & Filtering"
                  icon={<IconSearch className="w-6 h-6" />}
                  description="We scour our pool of 10,000+ pre-vetted graduates. We run rigorous aptitude tests, coding challenges, and psychometric evaluations to filter the top 1% who have the raw logic and hunger to learn."
                  side="right"
               />

               <TimelineStep 
                  number="03"
                  title="Customized Training"
                  icon={<IconSchool className="w-6 h-6" />}
                  description="This is where the magic happens. We build a 8-12 week custom curriculum based ONLY on your requirements. If you use Next.js 14 and GraphQL, we train them on exactly that. No generic tutorials."
                  side="left"
                  highlight
               />

               <TimelineStep 
                  number="04"
                  title="Shadow Projects"
                  icon={<IconRefresh className="w-6 h-6" />}
                  description="Trainees build a clone of your actual product or a relevant module. They learn your git workflow, your Jira process, and your code quality standards before they even enter your office."
                  side="right"
               />

               <TimelineStep 
                  number="05"
                  title="Final Deployment"
                  icon={<IconRocket className="w-6 h-6" />}
                  description="Candidates are deployed to your team. They hit the ground running with zero onboarding time needed. You get a productivity-ready developer from Hour 1."
                  side="left"
               />
            </div>
         </div>
      </section>

      {/* --- WHY THIS MODEL WORKS --- */}
      <section className="py-24 px-6 relative overflow-hidden">
         {/* Updated Background Skew Color to Start Color Tint */}
         <div className="absolute inset-0 bg-[#Ff3131]/5 skew-y-1 transform origin-top-left" />
         
         <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#Ff3131] to-[#ff914d]">HTD</span> Beats Traditional Hiring
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <BenefitCard 
                  title="Cost Efficiency"
                  stat="40%"
                  desc="Lower cost compared to hiring senior devs or using recruitment agencies with high commissions."
               />
               <BenefitCard 
                  title="Retention Rate"
                  stat="92%"
                  desc="Candidates trained specifically for your company feel invested and stay significantly longer."
               />
               <BenefitCard 
                  title="Time to Productivity"
                  stat="Immediate"
                  desc="Since they learned on your stack, there is no 3-month ramp-up period."
               />
            </div>
         </div>
      </section>

      {/* --- CURRICULUM PREVIEW --- */}
      <section className="py-24 px-6 bg-neutral-900 border-t border-white/10">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
               <h2 className="text-3xl font-bold mb-6">
                 We Custom-Build <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#Ff3131] to-[#ff914d]">Your Curriculum.</span>
               </h2>
               <p className="text-neutral-400 mb-8 leading-relaxed">
                  We don't believe in "one size fits all." Our education team works with your engineering managers to design a syllabus that covers your specific tools.
               </p>
               <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "Node.js", "Python", "Java Spring", "AWS", "Docker", "Kubernetes", "PostgreSQL", "GraphQL"].map((tech) => (
                     <span key={tech} className="px-3 py-1 bg-black border border-white/10 rounded-full text-xs font-mono text-neutral-300">
                        {tech}
                     </span>
                  ))}
               </div>
            </div>
            
            <div className="flex-1 w-full relative">
               {/* Visual representation of a syllabus */}
               <div className="relative bg-neutral-950 border border-white/10 rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                     <div className="w-3 h-3 rounded-full bg-red-500" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500" />
                     <div className="w-3 h-3 rounded-full bg-green-500" />
                     <span className="ml-auto text-xs text-neutral-500 font-mono">CONFIDENTIAL_SYLLABUS.pdf</span>
                  </div>
                  <div className="space-y-4">
                     <SyllabusItem week="Week 1-2" topic="Core Fundamentals & Logic Building" />
                     <SyllabusItem week="Week 3-4" topic="Your Tech Stack Deep Dive" active />
                     <SyllabusItem week="Week 5-6" topic="Database & API Architecture" />
                     <SyllabusItem week="Week 7-8" topic="Capstone Project (Clone of Your App)" />
                  </div>
               </div>
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

const TimelineStep = ({ number, title, description, icon, side, highlight }: { number: string, title: string, description: string, icon: React.ReactNode, side: 'left' | 'right', highlight?: boolean }) => {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.6 }}
         className={cn(
            "flex items-center justify-between w-full mb-12 md:mb-24 relative",
            side === 'left' ? "flex-row" : "md:flex-row-reverse flex-row"
         )}
      >
         {/* Spacer for desktop alignment */}
         <div className="hidden md:block w-5/12" />

         {/* Center Node - Start Color */}
         <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-[#Ff3131] z-10 flex items-center justify-center shadow-[0_0_15px_#Ff3131]">
            {highlight ? (
               <div className="w-4 h-4 bg-[#Ff3131] rounded-full animate-ping" />
            ) : (
               <div className="w-3 h-3 bg-[#Ff3131] rounded-full" />
            )}
         </div>

         {/* Content Card */}
         <div className={cn(
            "w-full md:w-5/12 pl-20 md:pl-0",
            side === 'left' ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
         )}>
            <div className={cn(
               "p-6 rounded-2xl border bg-neutral-900/50 hover:bg-neutral-900 transition-colors",
               // Highlight uses Start Color
               highlight ? "border-[#Ff3131]/50 shadow-[0_0_30px_rgba(255,49,49,0.15)]" : "border-white/10"
            )}>
               <div className={cn(
                  "flex items-center gap-3 mb-4",
                  side === 'left' ? "md:flex-row-reverse" : "flex-row"
               )}>
                  <span className="text-4xl font-bold text-neutral-800">{number}</span>
                  {/* Icon Background - Start Color */}
                  <div className="p-2 bg-[#Ff3131]/10 rounded-lg text-[#Ff3131]">
                     {icon}
                  </div>
               </div>
               <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
               <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
            </div>
         </div>
      </motion.div>
   )
}

const BenefitCard = ({ title, stat, desc }: { title: string, stat: string, desc: string }) => (
   // Hover Border using Gradient/Start Color
   <div className="p-8 rounded-2xl bg-black border border-white/10 text-center hover:border-[#Ff3131]/50 transition-colors group">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat}</div>
      {/* Title Gradient Text */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#Ff3131] to-[#ff914d] font-bold uppercase tracking-wider text-sm mb-4">
        {title}
      </div>
      <p className="text-neutral-500 text-sm">{desc}</p>
   </div>
)

const SyllabusItem = ({ week, topic, active }: { week: string, topic: string, active?: boolean }) => (
   <div className={cn(
      "flex items-center gap-4 p-3 rounded-lg border",
      // Active State using Start Color
      active ? "bg-[#Ff3131]/10 border-[#Ff3131]/30" : "bg-transparent border-white/5"
   )}>
      <div className={cn(
         "text-xs font-bold uppercase tracking-wider",
         active ? "text-[#Ff3131]" : "text-neutral-500"
      )}>{week}</div>
      <div className={cn(
         "h-4 w-[1px]",
         active ? "bg-[#Ff3131]" : "bg-neutral-700"
      )}></div>
      <div className={cn(
         "text-sm font-medium",
         active ? "text-white" : "text-neutral-400"
      )}>{topic}</div>
   </div>
)