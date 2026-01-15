"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Terminal, 
  Brain, 
  GraduationCap, 
  LayoutDashboard, 
  Code2, 
  CheckCircle, 
  Users,
  Play
} from "lucide-react";
import { motion } from "framer-motion";

// 1. IMPORT NAVBAR
import { NavbarDemo } from "../../components-main/Navbar";

// Updated to Brand Orange
const accentColor = "#ff4d00";

export default function CodeMagnetLMSPage() {
  return (
    // Updated selection color to Orange
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden selection:bg-[#ff4d00] selection:text-white">
      
      {/* Navbar */}
      <div className="relative z-50">
        <NavbarDemo />
      </div>

      {/* ======================= HERO SECTION ======================= */}
      <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-white/10 mb-8">
            {/* Updated Dot Color & Shadow */}
            <span className="flex h-2 w-2 rounded-full bg-[#ff4d00] shadow-[0_0_10px_#ff4d00]"></span>
            <span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">The OS for Coding Education</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto">
            Teach coding without the <br />
            {/* Updated Gradient: Red to Orange */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2600] to-[#ff9100]">
              infrastructure headaches.
            </span>
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
            KodeMagnet LMS is the all-in-one platform for bootcamps and universities. 
            Integrated IDEs, AI-powered grading, and plagiarism detection built right in.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
             {/* Updated Button: Orange bg, White text, Red/Orange Shadow */}
             <Link 
               href="/contact"
               className="px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,77,0,0.3)]"
               style={{ backgroundColor: accentColor }}
             >
               Request Demo
             </Link>
             <Link 
               href="/features"
               className="px-8 py-4 rounded-full border border-white/20 font-bold text-lg hover:bg-white/5 transition-colors"
             >
               View Features
             </Link>
          </div>

          {/* HERO VISUAL: THE "CODE EDITOR" MOCKUP */}
          
          <div className="relative w-full max-w-5xl mx-auto perspective-[1000px] group">
             {/* Glow Effect - Updated to Orange */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#ff4d00]/20 to-transparent blur-[80px] -z-10 opacity-50"></div>
             
             {/* The Window */}
             <div className="bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden text-left transform transition-transform duration-700 group-hover:rotate-x-2">
                {/* Window Bar */}
                <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-white/5">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="text-xs text-neutral-400 font-mono">assignment_01.py - KodeMagnet IDE</div>
                   <div className="w-16"></div> 
                </div>

                {/* Editor Content */}
                <div className="p-6 font-mono text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x divide-white/10">
                   
                   {/* Left: Code Input */}
                   <div className="text-neutral-300 pr-4">
                      <div className="flex gap-4">
                         <div className="text-neutral-600 select-none text-right">
                            1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8
                         </div>
                         <div>
                            <span className="text-purple-400">def</span> <span className="text-blue-400">calculate_fibonacci</span>(n):<br/>
                            &nbsp;&nbsp;<span className="text-gray-500"># TODO: Implement dynamic programming</span><br/>
                            &nbsp;&nbsp;<span className="text-purple-400">if</span> n &lt;= 1:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> n<br/>
                            &nbsp;&nbsp;dp = [0] * (n + 1)<br/>
                            &nbsp;&nbsp;dp[1] = 1<br/>
                            &nbsp;&nbsp;<span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-blue-400">range</span>(2, n + 1):<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;dp[i] = dp[i-1] + dp[i-2]<br/>
                         </div>
                      </div>
                   </div>

                   {/* Right: Output/Terminal */}
                   <div className="hidden md:flex flex-col pl-4">
                      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                         <span className="text-xs font-bold text-white uppercase">Terminal</span>
                         <span className="text-xs text-green-400 flex items-center gap-1"><CheckCircle className="w-3 h-3"/> All Tests Passed</span>
                      </div>
                      <div className="text-neutral-400 space-y-2">
                         <p><span className="text-green-500">➜</span> python3 test_solution.py</p>
                         <p>Running 5 test cases...</p>
                         <p className="text-green-400">✓ Test Case 1: n=0 (Passed)</p>
                         <p className="text-green-400">✓ Test Case 2: n=1 (Passed)</p>
                         <p className="text-green-400">✓ Test Case 3: n=10 (Passed)</p>
                         <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded text-green-300 text-xs">
                            Great job! Your solution allows for O(n) time complexity.
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </div>
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      </section>

      {/* ======================= FEATURES SECTION ======================= */}
      <section className="py-24 px-6 bg-neutral-900/50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-5xl font-bold mb-6">Built for Code, Not Just Content</h2>
               <p className="text-neutral-400 max-w-2xl mx-auto">
                 Traditional LMS platforms fail when it comes to programming. We built CodeMagnet to handle syntax, compilers, and containers natively.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               <FeatureCard 
                  icon={<Terminal className="w-8 h-8 text-[#ff4d00]" />}
                  title="In-Browser IDE"
                  desc="No environment setup. Students code directly in the browser with support for Python, Java, JS, C++, and 20+ more."
               />
               <FeatureCard 
                  icon={<Brain className="w-8 h-8 text-[#ff4d00]" />}
                  title="AI Auto-Grading"
                  desc="Save hundreds of instructor hours. Our AI analyzes logic, style, and output to grade assignments instantly."
               />
               <FeatureCard 
                  icon={<LayoutDashboard className="w-8 h-8 text-[#ff4d00]" />}
                  title="Instructor Analytics"
                  desc="Track student progress in real-time. Identify who is struggling with specific concepts before they fall behind."
               />
               <FeatureCard 
                  icon={<Users className="w-8 h-8 text-[#ff4d00]" />}
                  title="Team Projects"
                  desc="Real-world collaboration simulation. Students can work on the same repo with git-style version control."
               />
            </div>
         </div>
      </section>

      {/* ======================= INTERACTIVE DEMO CTA ======================= */}
      <section className="py-24 px-6">
         <div className="max-w-7xl mx-auto bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
               <h3 className="text-3xl font-bold mb-6">Experience the AI Grader</h3>
               <p className="text-neutral-400 mb-8 leading-relaxed">
                  See how our engine provides line-by-line feedback on code quality, not just output correctness. It helps students learn *why* their code works.
               </p>
               <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-sm text-neutral-300">
                     <CheckCircle className="w-5 h-5 text-[#ff4d00]" /> Instant feedback loops
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-300">
                     <CheckCircle className="w-5 h-5 text-[#ff4d00]" /> Custom test case creation
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-300">
                     <CheckCircle className="w-5 h-5 text-[#ff4d00]" /> Plagiarism detection included
                  </li>
               </ul>
               <button className="flex items-center gap-3 w-fit text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: accentColor }}>
                  <Play className="w-4 h-4 fill-current" /> Watch Video Tour
               </button>
            </div>
            <div className="relative bg-neutral-950 min-h-[400px]">
               
               <Image 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop"
                  alt="Students coding"
                  fill
                  className="object-cover opacity-60"
               />
               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-900/90"></div>
            </div>
         </div>
      </section>

      {/* ======================= CTA FOOTER ======================= */}
      <section className="py-20 text-center relative">
         {/* Updated Footer Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ff4d00]/10 blur-[100px] -z-10 rounded-full"></div>
         
         <h2 className="text-4xl font-bold mb-6">Ready to upgrade your curriculum?</h2>
         <p className="text-neutral-400 mb-8">Join top universities and coding bootcamps using CodeMagnet.</p>
         
         <div className="flex items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 rounded-full font-bold text-white shadow-[0_0_20px_rgba(255,77,0,0.3)]" style={{ backgroundColor: accentColor }}>
               Get Started
            </Link>
            <Link href="/pricing" className="px-8 py-3 rounded-full font-bold border border-white/20 hover:bg-white/5">
               View Pricing
            </Link>
         </div>
      </section>

    </main>
  );
}

// --- Helper Components ---
const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
   <div className="bg-neutral-950 border border-white/10 p-8 rounded-2xl hover:border-[#ff4d00]/50 transition-all hover:-translate-y-1 group">
      {/* Updated Hover Background */}
      <div className="mb-6 bg-neutral-900 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-[#ff4d00]/10 transition-colors">
         {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
   </div>
)