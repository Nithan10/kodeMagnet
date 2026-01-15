"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarDemo } from "@/app/components-main/Navbar";
import Footer from "@/app/components-main/Footer"; // Imported Footer
import Link from "next/link";
import { 
  IconMessageChatbot, 
  IconBrain, 
  IconApi, 
  IconLanguage,
  IconArrowRight,
  IconDotsVertical 
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function ChatbotSolutionsPage() {
  return (
    // Updated selection color to Orange
    <main className="min-h-screen bg-black text-white selection:bg-[#ff4d00] selection:text-white overflow-hidden">
      {/* Navbar */}
      <div className="relative w-full flex items-center justify-center z-50">
         <NavbarDemo />
      </div>

      {/* --- HERO SECTION WITH LIVE DEMO --- */}
      <section className="relative w-full pt-40 pb-20 px-6">
        {/* Background Gradients - Updated to Red/Orange */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff4d00]/20 blur-[120px] rounded-full pointer-events-none opacity-40" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
           
           {/* Left: Text Content */}
           <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                // Updated Text Color
                className="flex items-center gap-2 text-[#ff4d00] font-mono text-sm uppercase tracking-widest"
              >
                 <IconMessageChatbot className="w-5 h-5" />
                 <span>Next-Gen Conversational AI</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
              >
                Talk to Your <br />
                <span className="text-white">Customers </span>
                {/* Updated Gradient Text */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2600] to-[#ff9100]">
                  24/7.
                </span>
              </motion.h1>

              <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-neutral-400 text-lg max-w-lg leading-relaxed"
              >
                We build intelligent AI agents that don't just follow scripts—they understand context, sentiment, and intent. Automate support, generate leads, and book meetings while you sleep.
              </motion.p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                 {/* Updated Button to Orange with White Text */}
                 <Link href="/contact" className="px-6 py-3 bg-[#ff4d00] text-white font-bold rounded-lg hover:bg-[#ff2600] transition-colors shadow-[0_0_20px_rgba(255,77,0,0.3)]">
                    Build My Agent
                 </Link>
                 <Link href="#features" className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                    How It Works
                 </Link>
              </div>
           </div>

           {/* Right: Live Chat Simulation */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="relative w-full max-w-md mx-auto"
           >
              <ChatSimulation />
              {/* Decorative Elements around chat - Updated Glow */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#ff4d00] to-red-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
           </motion.div>

        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-24 px-6 bg-neutral-950 border-t border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                 Beyond Basic <span className="text-[#ff4d00]">Scripting</span>
               </h2>
               <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                  Old chatbots were frustrating decision trees. Our AI agents are powered by Large Language Models (LLMs) like GPT-4, allowing for human-like fluidity.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <FeatureCard 
                  icon={<IconBrain className="w-10 h-10 text-[#ff4d00]" />}
                  title="Context Awareness"
                  description="The bot remembers previous messages in the conversation, allowing for natural follow-up questions and complex problem solving."
               />
               <FeatureCard 
                  icon={<IconApi className="w-10 h-10 text-[#ff4d00]" />}
                  title="Seamless Integrations"
                  description="Connects directly to your CRM, Calendar, and Database. The bot can check order status, book appointments, or update user records."
               />
               <FeatureCard 
                  icon={<IconLanguage className="w-10 h-10 text-[#ff4d00]" />}
                  title="95+ Languages"
                  description="Instantly scale your support globally. Our agents automatically detect the user's language and respond fluently."
               />
            </div>
         </div>
      </section>

      {/* --- USE CASES --- */}
      <section className="py-24 px-6 relative overflow-hidden">
         {/* Side Glow Line - Updated */}
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[#ff4d00] shadow-[0_0_20px_#ff4d00]" />
         
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-3xl font-bold mb-8">Deploy Anywhere</h2>
               <div className="space-y-6">
                  <UseCaseRow 
                     title="Customer Support" 
                     desc="Resolve 80% of tickets instantly without human intervention." 
                  />
                  <UseCaseRow 
                     title="Lead Generation" 
                     desc="Qualify visitors on your website and book meetings for your sales team." 
                  />
                  <UseCaseRow 
                     title="Internal Knowledge Base" 
                     desc="Help employees find HR policies or technical docs via Slack/Teams." 
                  />
                  <UseCaseRow 
                     title="E-Commerce Assistant" 
                     desc="Recommend products based on user preferences and purchase history." 
                  />
               </div>
            </div>
            
            {/* Right Side Visual: Connection Network */}
            <div className="relative h-[400px] border border-white/10 rounded-2xl bg-neutral-900/50 p-8 flex items-center justify-center">
               <div className="absolute inset-0 bg-grid-white/[0.02]" />
               
               {/* Central Node - Updated Colors */}
               <div className="relative z-10 w-24 h-24 rounded-full bg-[#ff4d00]/10 border border-[#ff4d00] flex items-center justify-center shadow-[0_0_30px_rgba(255,77,0,0.2)]">
                  <IconBrain className="w-12 h-12 text-[#ff4d00]" />
               </div>

               {/* Satellites */}
               <Satellite icon="WhatsApp" angle={0} />
               <Satellite icon="Website" angle={72} />
               <Satellite icon="Slack" angle={144} />
               <Satellite icon="SMS" angle={216} />
               <Satellite icon="Messenger" angle={288} />

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

// 1. CHAT SIMULATION COMPONENT
const ChatSimulation = () => {
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Script for the auto-playing chat
  const script = [
    { role: 'bot', text: "Hi there! 👋 How can I help you scale your business today?", delay: 800 },
    { role: 'user', text: "I need a way to automate my customer support.", delay: 2000 },
    { role: 'bot', text: "Great choice! Our AI agents can handle 24/7 support, answer FAQs, and even process refunds automatically. 🚀", delay: 1500 },
    { role: 'user', text: "That sounds perfect. Does it integrate with Shopify?", delay: 2500 },
    { role: 'bot', text: "Yes! We integrate natively with Shopify, Salesforce, and HubSpot. Want to see a demo?", delay: 1500 },
  ];

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    let cumulativeDelay = 0;

    script.forEach((line, index) => {
      // Show typing indicator before bot speaks (except first message sometimes)
      if (line.role === 'bot' && index !== 0) {
         const typingDelay = cumulativeDelay + (line.delay / 2); // Start typing halfway through the delay
         const typeId = setTimeout(() => setIsTyping(true), typingDelay);
         timeoutIds.push(typeId);
      }

      cumulativeDelay += line.delay;

      const msgId = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { role: line.role as 'bot' | 'user', text: line.text }]);
      }, cumulativeDelay);

      timeoutIds.push(msgId);
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[450px]">
       {/* Header */}
       <div className="h-14 bg-neutral-950 border-b border-white/10 flex items-center px-4 justify-between">
          <div className="flex items-center gap-3">
             {/* Updated Avatar Color */}
             <div className="w-8 h-8 rounded-full bg-[#ff4d00] flex items-center justify-center">
                <IconMessageChatbot className="w-5 h-5 text-white" />
             </div>
             <div>
                <h4 className="text-sm font-bold text-white">AI Assistant</h4>
                <div className="flex items-center gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] text-neutral-400">Online</span>
                </div>
             </div>
          </div>
          <IconDotsVertical className="text-neutral-500 w-4 h-4" />
       </div>

       {/* Messages Area */}
       <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
          <AnimatePresence>
             {messages.map((msg, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ duration: 0.3 }}
                   className={cn(
                      "max-w-[85%] p-3 text-sm rounded-2xl shadow-sm",
                      msg.role === 'bot' 
                        ? "bg-neutral-800 text-white rounded-tl-none self-start border border-white/5" 
                        // Updated User Bubble: Orange background, White text
                        : "bg-[#ff4d00] text-white rounded-tr-none self-end font-medium"
                   )}
                >
                   {msg.text}
                </motion.div>
             ))}
             {isTyping && (
                <motion.div 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="bg-neutral-800 self-start p-3 rounded-2xl rounded-tl-none border border-white/5 w-12 flex items-center justify-center gap-1"
                >
                   <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                   <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                   <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce"></span>
                </motion.div>
             )}
          </AnimatePresence>
       </div>

       {/* Input Area (Static Visual) */}
       <div className="p-4 bg-neutral-950 border-t border-white/10">
          <div className="w-full h-10 bg-neutral-900 rounded-full border border-white/10 flex items-center px-4 justify-between opacity-50">
             <span className="text-xs text-neutral-500">Type a message...</span>
             {/* Updated Arrow Button */}
             <div className="w-6 h-6 rounded-full bg-[#ff4d00]/20 flex items-center justify-center">
                <IconArrowRight className="w-3 h-3 text-[#ff4d00]" />
             </div>
          </div>
       </div>
    </div>
  )
}

// 2. FEATURE CARD
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
   // Updated Hover Border Color
   <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-[#ff4d00]/40 transition-all duration-300 group hover:-translate-y-1">
      <div className="mb-6 p-3 bg-black rounded-xl w-fit border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,77,0,0.15)]">
         {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff4d00] transition-colors">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm">{description}</p>
   </div>
)

// 3. USE CASE ROW
const UseCaseRow = ({ title, desc }: { title: string, desc: string }) => (
   <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
      {/* Updated Dot Color */}
      <div className="mt-1 w-2 h-2 rounded-full bg-[#ff4d00] shadow-[0_0_10px_#ff4d00]" />
      <div>
         <h4 className="text-lg font-bold text-white">{title}</h4>
         <p className="text-neutral-400 text-sm">{desc}</p>
      </div>
   </div>
)

// 4. ORBITING SATELLITE VISUAL
const Satellite = ({ icon, angle }: { icon: string, angle: number }) => {
   return (
      <div 
         className="absolute top-1/2 left-1/2 w-[140px] h-[140px] -ml-[70px] -mt-[70px] pointer-events-none"
         style={{ transform: `rotate(${angle}deg)` }}
      >
         <div 
            className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-[10px] text-white font-mono shadow-xl z-20"
            style={{ transform: `rotate(-${angle}deg)` }}
         >
            {icon}
         </div>
      </div>
   )
}