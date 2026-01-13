"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BarChart3, 
  Users, 
  Zap, 
  ArrowRight, 
  Mail, 
  PieChart, 
  Target, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";

// 1. IMPORT YOUR NAVBAR
import { NavbarDemo } from "../../components-main/Navbar";

// Updated to Brand Orange
const accentColor = "#ff4d00";

export default function CodeLeadsPage() {
  return (
    // Updated selection color to Orange
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden selection:bg-[#ff4d00] selection:text-white">
      
      {/* Navbar Positioned on top */}
      <div className="relative z-50">
        <NavbarDemo />
      </div>

      {/* ======================= HERO SECTION ======================= */}
      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-visible">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="space-y-8 z-10">
            <div 
              // Updated Badge Colors
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 border border-white/10 text-[#ff4d00]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
              </span>
              v2.0 Now Live
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Close deals <br />
              {/* Updated Gradient: Red to Orange */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2600] to-[#ff9100]">
                faster than ever.
              </span>
            </h1>
            
            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
              CodeLeads is the intelligent CRM that automates busywork. Manage pipelines, track interactions, and forecast revenue—all from one beautiful command center.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/contact" 
                // Updated Button: Orange bg, White text, Red/Orange Shadow
                className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,77,0,0.3)]"
                style={{ backgroundColor: accentColor }}
              >
                Start Free Trial
              </Link>
              <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 font-bold text-lg hover:bg-white/5 transition-colors group">
                Watch Demo 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-8 flex items-center gap-4 text-sm text-neutral-500">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-neutral-950 bg-neutral-800 flex items-center justify-center text-xs text-white">
                      <Users className="w-3 h-3 opacity-50" />
                    </div>
                  ))}
               </div>
               <p>Trusted by 500+ Sales Teams</p>
            </div>
          </div>

          {/* Right: Abstract UI Mockup */}
          <div className="relative z-10 lg:perspective-[2000px]">
             {/* Background Glow - Updated to Orange */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 blur-[100px] -z-10 rounded-full pointer-events-none"
              style={{ backgroundColor: accentColor }}
            ></div>

            {/* The Dashboard Card */}
            <div className="relative bg-neutral-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] transition-all duration-500 hover:rotate-0">
                {/* Window Header */}
                <div className="h-8 bg-neutral-950 border-b border-white/5 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                
                {/* UI Body */}
                <div className="p-6 grid grid-cols-4 gap-6 h-[400px]">
                   {/* Sidebar */}
                   <div className="col-span-1 border-r border-white/5 pr-4 flex flex-col gap-4">
                      <div className="h-8 w-full bg-white/5 rounded-md animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-white/5 rounded-md"></div>
                      <div className="h-4 w-1/2 bg-white/5 rounded-md"></div>
                      <div className="h-4 w-5/6 bg-white/5 rounded-md"></div>
                      {/* Updated Sidebar Highlight */}
                      <div className="mt-auto h-12 w-full bg-[#ff4d00]/10 border border-[#ff4d00]/20 rounded-lg"></div>
                   </div>
                   
                   {/* Main Content */}
                   <div className="col-span-3 flex flex-col gap-6">
                      {/* Top Stats Row */}
                      <div className="grid grid-cols-3 gap-4">
                         <div className="bg-neutral-950 p-3 rounded-lg border border-white/5">
                            <p className="text-xs text-neutral-500">Revenue</p>
                            <p className="text-lg font-bold text-white">$124,500</p>
                         </div>
                         <div className="bg-neutral-950 p-3 rounded-lg border border-white/5">
                            <p className="text-xs text-neutral-500">Pipeline</p>
                            {/* Updated Stat Color */}
                            <p className="text-lg font-bold text-[#ff4d00]">45 Deals</p>
                         </div>
                         <div className="bg-neutral-950 p-3 rounded-lg border border-white/5">
                            <p className="text-xs text-neutral-500">Win Rate</p>
                            <p className="text-lg font-bold text-white">22%</p>
                         </div>
                      </div>

                      {/* Chart Area */}
                      <div className="flex-1 bg-neutral-950 rounded-lg border border-white/5 p-4 flex items-end gap-2 relative overflow-hidden">
                         {/* Fake Bars */}
                         <div className="w-1/6 h-[40%] bg-neutral-800 rounded-t-sm"></div>
                         <div className="w-1/6 h-[60%] bg-neutral-800 rounded-t-sm"></div>
                         <div className="w-1/6 h-[50%] bg-neutral-800 rounded-t-sm"></div>
                         {/* Updated Chart Bar Color */}
                         <div className="w-1/6 h-[80%] bg-[#ff4d00] shadow-[0_0_15px_#ff4d00] rounded-t-sm"></div>
                         <div className="w-1/6 h-[70%] bg-neutral-800 rounded-t-sm"></div>
                         <div className="w-1/6 h-[90%] bg-neutral-800 rounded-t-sm"></div>
                         
                         {/* Floating Tooltip */}
                         <div className="absolute top-10 right-10 bg-neutral-800 px-3 py-1 rounded text-xs border border-white/10 shadow-xl">
                            +12% Growth
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      </section>

      {/* ======================= FEATURES BENTO GRID ======================= */}
      <section className="py-24 px-6 bg-neutral-900/50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-5xl font-bold mb-4">Everything you need to grow</h2>
               <p className="text-neutral-400 max-w-2xl mx-auto">Stop using spreadsheets. Upgrade to a system that works for you.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {/* Card 1: Pipeline */}
               <div className="md:col-span-2 bg-neutral-950 border border-white/10 rounded-3xl p-8 hover:border-[#ff4d00]/30 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     <BarChart3 className="w-40 h-40" />
                  </div>
                  <div className="relative z-10">
                     {/* Updated Icon Box */}
                     <div className="w-12 h-12 rounded-lg bg-[#ff4d00]/10 flex items-center justify-center mb-6 text-[#ff4d00]">
                        <BarChart3 className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-bold mb-3">Visual Pipeline Management</h3>
                     <p className="text-neutral-400 max-w-md">Drag and drop deals through stages. Customize your pipeline to match your sales process perfectly. Never lose track of a prospect again.</p>
                  </div>
               </div>

               {/* Card 2: Automation */}
               <div className="md:col-span-1 bg-neutral-950 border border-white/10 rounded-3xl p-8 hover:border-[#ff4d00]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                     <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
                  <p className="text-neutral-400 text-sm">Automate follow-up emails, task creation, and lead scoring. Let the robots do the busy work.</p>
               </div>

               {/* Card 3: Contact */}
               <div className="md:col-span-1 bg-neutral-950 border border-white/10 rounded-3xl p-8 hover:border-[#ff4d00]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                     <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">360° Contact View</h3>
                  <p className="text-neutral-400 text-sm">See every email, call, and note in one timeline. Know exactly who you're talking to.</p>
               </div>

               {/* Card 4: Reports */}
               <div className="md:col-span-2 bg-neutral-950 border border-white/10 rounded-3xl p-8 hover:border-[#ff4d00]/30 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     <PieChart className="w-40 h-40" />
                  </div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400">
                        <Target className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-bold mb-3">Forecasting & Analytics</h3>
                     <p className="text-neutral-400 max-w-md">Predict revenue with confidence. Our AI-driven reports show you conversion rates, team performance, and future growth.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ======================= COMPARISON SECTION ======================= */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-12">Why Sales Teams Switch to CodeLeads</h2>
           <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-neutral-950 font-bold">
                 <div className="col-span-1">Feature</div>
                 <div className="col-span-1 text-center text-neutral-500">Traditional CRM</div>
                 {/* Updated Header Color */}
                 <div className="col-span-1 text-center text-[#ff4d00]">CodeLeads</div>
              </div>
              {/* Rows */}
              <ComparisonRow feature="Setup Time" old="Weeks" nev="Minutes" />
              <ComparisonRow feature="Email Automation" old="Paid Add-on" nev="Included" />
              <ComparisonRow feature="Lead Scoring" old="Manual" nev="AI Powered" />
              <ComparisonRow feature="Mobile App" old="Clunky" nev="Native & Fast" />
           </div>
        </div>
      </section>

      {/* ======================= CTA SECTION ======================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">Stop losing leads.</h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Join the high-performing sales teams that have switched to CodeLeads and increased revenue by an average of 30%.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link 
                href="/contact"
                // Updated Button: Orange bg, White text
                className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,77,0,0.3)]"
                style={{ backgroundColor: accentColor }}
             >
                Start Your Free Trial
             </Link>
             <p className="text-sm text-neutral-500 mt-4 sm:mt-0 sm:ml-4">No credit card required.</p>
          </div>
        </div>
        
        {/* Background Beams - Updated to Orange */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff4d00]/5 blur-[100px] rounded-full -z-10"></div>
      </section>

    </main>
  );
}

// --- Helper Component for Comparison Table ---
const ComparisonRow = ({ feature, old, nev }: { feature: string, old: string, nev: string }) => (
   <div className="grid grid-cols-3 p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
      <div className="col-span-1 font-medium">{feature}</div>
      <div className="col-span-1 text-center text-neutral-500">{old}</div>
      <div className="col-span-1 text-center font-bold text-white flex items-center justify-center gap-2">
          {/* Updated Icon Color */}
         {nev} <CheckCircle2 className="w-4 h-4 text-[#ff4d00]" />
      </div>
   </div>
);