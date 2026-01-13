"use client";
import React from "react";
import Link from "next/link";
import { 
  MessageCircle, 
  Zap, 
  TrendingUp, 
  Bot, 
  Instagram, 
  Send,
  MessageSquare,
  Check
} from "lucide-react";
import { motion } from "framer-motion";

// 1. IMPORT NAVBAR
import { NavbarDemo } from "../../components-main/Navbar";

// Updated to Brand Orange
const accentColor = "#ff4d00";

export default function KodeChatPage() {
  return (
    // Updated selection color to Orange
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden selection:bg-[#ff4d00] selection:text-white">
      
      {/* Navbar */}
      <div className="relative z-50">
        <NavbarDemo />
      </div>

      {/* ======================= HERO SECTION ======================= */}
      <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="space-y-8 z-10 relative">
            {/* Updated Badge Colors */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#ff4d00]/10 border border-[#ff4d00]/20 text-[#ff4d00]">
              <Bot className="w-3 h-3" />
              <span>AI-Powered Social Automation</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Turn comments into <br />
              {/* Updated Gradient: Red to Orange */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2600] to-[#ff9100]">
                conversions 24/7.
              </span>
            </h1>
            
            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
              KodeChat automatically replies to Instagram comments and DMs, instantly sending links, capturing leads, and driving sales while you sleep.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/contact" 
                // Updated Button: Orange bg, White text
                className="px-8 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,77,0,0.3)]"
                style={{ backgroundColor: accentColor }}
              >
                Start Automating
              </Link>
              <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 font-bold text-lg hover:bg-white/5 transition-colors">
                View Examples
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-neutral-500 pt-4">
               <span className="flex items-center gap-1"><Check className="w-4 h-4 text-[#ff4d00]" /> Meta Approved</span>
               <span className="flex items-center gap-1"><Check className="w-4 h-4 text-[#ff4d00]" /> 100% Safe</span>
            </div>
          </div>

          {/* Right: Chat Simulation Visual */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            {/* Background Glow - Updated to Orange */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 blur-[90px] -z-10 rounded-full bg-[#ff4d00]"></div>
            
            {/* Phone Container */}
            <div className="relative w-[320px] h-[600px] bg-neutral-900 border-[8px] border-neutral-800 rounded-[3rem] shadow-2xl overflow-hidden">
               {/* Phone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl z-20"></div>
               
               {/* Chat Interface Header */}
               <div className="bg-neutral-800 p-6 pb-4 pt-10 flex items-center gap-3 border-b border-white/5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-orange-500"></div>
                  <div>
                     <p className="text-xs font-bold text-white">YourBrand_Official</p>
                     <p className="text--[10px] text-neutral-400">Active now</p>
                  </div>
               </div>

               {/* Messages Area */}
               <div className="p-4 space-y-4 flex flex-col justify-end h-[440px]">
                  
                  {/* User Message */}
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="self-end bg-neutral-800 text-white text-sm px-4 py-3 rounded-2xl rounded-tr-none max-w-[80%]"
                  >
                     I want the discount code! 🔥
                  </motion.div>

                  {/* Bot Typing Indicator */}
                  <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1, duration: 0.5 }}
                     className="self-start text-neutral-500 text-xs ml-2"
                  >
                     Typing...
                  </motion.div>

                  {/* Bot Reply - Updated to Orange Bubble */}
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.5 }}
                     className="self-start bg-[#ff4d00] text-white text-sm px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%]"
                  >
                     <p className="font-bold mb-1">Hey there! 👋</p>
                     <p>Here is your 20% OFF coupon link as requested.</p>
                  </motion.div>

                  {/* Link Card */}
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 2 }}
                     className="self-start bg-neutral-800 border border-white/10 rounded-xl overflow-hidden max-w-[85%]"
                  >
                     <div className="h-20 bg-neutral-700 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-bold opacity-30">IMAGE</div>
                     </div>
                     <div className="p-3">
                        <p className="text-xs font-bold text-white">Summer Sale 2026</p>
                        <p className="text-[10px] text-neutral-400 mb-2">codemagnet.com</p>
                        <button className="w-full bg-white text-black text-xs font-bold py-2 rounded">Shop Now</button>
                     </div>
                  </motion.div>

               </div>
               
               {/* Input Area */}
               <div className="absolute bottom-0 w-full p-4 bg-neutral-800 border-t border-white/5">
                  <div className="h-8 bg-neutral-900 rounded-full w-full"></div>
               </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      </section>

      {/* ======================= HOW IT WORKS (FLOW) ======================= */}
      <section className="py-24 bg-neutral-900/50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Automation Made Simple</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto mb-8">No coding required. Just set your trigger keywords and watch your engagement fly.</p>
              
              {/* Strategic Diagram Tag for Flow Visualization */}
              
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center relative">
               {/* Connecting Arrow (Desktop) - Updated Gradient */}
               <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-[#ff4d00]/50 to-transparent border-t border-dashed border-white/20"></div>

               {/* Step 1 */}
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                     <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. User Comments</h3>
                  <p className="text-sm text-neutral-400">Someone comments &quot;PRICE&quot; or &quot;LINK&quot; on your post.</p>
               </div>

               {/* Step 2 - Updated Colors */}
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl bg-neutral-950 border border-[#ff4d00] shadow-[0_0_20px_rgba(255,77,0,0.2)] flex items-center justify-center mb-6">
                     <Zap className="w-10 h-10 text-[#ff4d00]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. KodeChat Activates</h3>
                  <p className="text-sm text-neutral-400">Our system detects the keyword instantly.</p>
               </div>

               {/* Step 3 */}
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                     <Send className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. DM Sent</h3>
                  <p className="text-sm text-neutral-400">Bot replies to the comment & sends a DM with the link.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ======================= FEATURES GRID ======================= */}
      <section className="py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Supercharge your DMs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               
               <FeatureBox 
                  icon={<Instagram className="w-6 h-6" />}
                  title="Story Mentions"
                  desc="Automatically thank users who mention you in their stories to boost loyalty."
               />
               <FeatureBox 
                  icon={<MessageCircle className="w-6 h-6" />}
                  title="Comment Auto-Reply"
                  desc="Reply to comments publicly AND privately at the same time."
               />
               <FeatureBox 
                  icon={<TrendingUp className="w-6 h-6" />}
                  title="Lead Qualification"
                  desc="Ask questions in DMs to qualify leads before a human steps in."
               />
               <FeatureBox 
                  icon={<Bot className="w-6 h-6" />}
                  title="AI FAQ Bot"
                  desc="Train the bot on your business data to answer common questions 24/7."
               />
               <FeatureBox 
                  icon={<Zap className="w-6 h-6" />}
                  title="Broadcasts"
                  desc="Send newsletters or updates to your subscriber list (within 24h window)."
               />
               <FeatureBox 
                  icon={<Check className="w-6 h-6" />}
                  title="CRM Integration"
                  desc="Push collected emails and phone numbers directly to CodeLeads or Mailchimp."
               />

            </div>
         </div>
      </section>

      {/* ======================= CTA SECTION ======================= */}
      <section className="py-20 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-neutral-900/50"></div>
         <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stop leaving money on the table.</h2>
            <p className="text-xl text-neutral-400 mb-8">
               Every unanswered comment is a lost customer. Let KodeChat handle the conversation.
            </p>
            <Link 
               href="/contact" 
               // Updated Button: Orange bg, White text
               className="inline-block px-10 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,77,0,0.4)]"
               style={{ backgroundColor: accentColor }}
            >
               Get Started for Free
            </Link>
         </div>
      </section>

    </main>
  );
}

// --- Helper Component ---
const FeatureBox = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
   // Updated Hover Colors
   <div className="p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-[#ff4d00]/30 hover:bg-neutral-800 transition-all group">
      <div className="w-12 h-12 rounded-lg bg-neutral-950 flex items-center justify-center mb-4 text-[#ff4d00] group-hover:scale-110 transition-transform">
         {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
   </div>
);