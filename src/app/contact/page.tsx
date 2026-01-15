"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Calendar, 
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { NavbarDemo } from "../components-main/Navbar";
// 1. Import Footer
import Footer from "../components-main/Footer";

// Updated Accent Color Variable
const accentColor = "#FF5F38";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Software Development",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent! (Demo mode)");
  };

  return (
    // Updated Selection Color to Orange
    // Removed 'overflow-hidden' to allow scrolling to the Footer
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-[#FF5F38] selection:text-white font-sans relative">
      
      <div className="relative z-50">
        <NavbarDemo />
      </div>

      {/* ======================= BACKGROUND FX ======================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Updated Blob to Orange */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF5F38]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* HEADER */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
             Let's build something <br />
             {/* Gradient Text Updated to Orange */}
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF5F38] to-white animate-shimmer bg-[length:200%_auto]">
               extraordinary.
             </span>
           </h1>
           <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
             Whether you have a groundbreaking idea, need a custom enterprise solution, or want to modernize your stack—we are ready.
           </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
           
           {/* LEFT COLUMN: CONTACT INFO & WHATSAPP */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="lg:col-span-5 space-y-8"
           >
             
             {/* 1. Quick Connect Cards */}
             <div className="grid gap-4">
                 <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-2">Instant Connect</h3>
                 
                 {/* WhatsApp Card (Kept Green for Brand Identity) */}
                 <Link 
                   href="https://wa.me/1234567890" 
                   target="_blank"
                   className="group flex items-center justify-between p-6 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl hover:bg-[#25D366]/20 transition-all cursor-pointer"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-black">
                          <MessageCircle className="w-6 h-6 fill-current" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp Us</h4>
                          <p className="text-sm text-neutral-400">Instant reply (24/7)</p>
                       </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-1 transition-transform" />
                 </Link>

                 {/* Calendar Card (Kept Blue for Distinction) */}
                 <Link 
                   href="#" 
                   className="group flex items-center justify-between p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl hover:bg-blue-500/20 transition-all cursor-pointer"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                          <Calendar className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Book a Call</h4>
                          <p className="text-sm text-neutral-400">15-min discovery chat</p>
                       </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                 </Link>
             </div>

             {/* 2. Traditional Contact Info - Updated Icons to Orange */}
             <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl space-y-6">
                 <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#FF5F38] mt-1" />
                    <div>
                       <p className="text-sm text-neutral-500 mb-1">Email us</p>
                       <a href="mailto:hello@KodeMagnet.com" className="text-lg font-bold hover:text-[#FF5F38] transition-colors">hello@KodeMagnet.com</a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#FF5F38] mt-1" />
                    <div>
                       <p className="text-sm text-neutral-500 mb-1">Call us</p>
                       <p className="text-lg font-bold">+91 98765 43210</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#FF5F38] mt-1" />
                    <div>
                       <p className="text-sm text-neutral-500 mb-1">Global HQ</p>
                       <p className="text-lg font-bold">123 Tech Park, Cyber City<br />Bangalore, India</p>
                    </div>
                 </div>
             </div>

             {/* 3. Socials */}
             <div className="flex gap-4 pt-4">
                 <SocialBtn icon={<Linkedin />} />
                 <SocialBtn icon={<Twitter />} />
                 <SocialBtn icon={<Github />} />
                 <SocialBtn icon={<Instagram />} />
             </div>

           </motion.div>

           {/* RIGHT COLUMN: CONTACT FORM */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
             className="lg:col-span-7"
           >
             <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                 {/* Decorative Glow inside form - Orange */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5F38]/5 rounded-full blur-[80px] pointer-events-none"></div>

                 <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
                 
                 <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                       <InputGroup label="Your Name" placeholder="John Doe" type="text" />
                       <InputGroup label="Email Address" placeholder="john@company.com" type="email" />
                    </div>
                    
                    {/* Service Selection */}
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-neutral-400">I'm interested in</label>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {["Web Development", "Mobile Apps", "SaaS Product", "AI Solutions", "Corporate Training", "Other"].map((item) => (
                             <button 
                               type="button"
                               key={item}
                               onClick={() => setFormState({...formState, service: item})}
                               className={`px-4 py-3 rounded-xl text-sm border transition-all ${
                                 formState.service === item 
                                 // Active: Orange BG, White Text
                                 ? "bg-[#FF5F38] border-[#FF5F38] text-white font-bold" 
                                 : "bg-neutral-950 border-white/10 text-neutral-400 hover:border-white/30"
                               }`}
                             >
                                {item}
                             </button>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-medium text-neutral-400">Tell us about your project</label>
                       <textarea 
                          rows={5}
                          className="w-full bg-neutral-950 border border-white/10 rounded-xl p-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5F38] focus:ring-1 focus:ring-[#FF5F38] transition-all resize-none"
                          placeholder="What are you building? What is your timeline?"
                       ></textarea>
                    </div>

                    <button 
                       type="submit"
                       // Hover: Orange BG, White Text
                       className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-[#FF5F38] hover:text-white transition-colors flex items-center justify-center gap-2 group"
                    >
                       Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-center text-xs text-neutral-500 mt-4">
                       By sending this form, you agree to our Privacy Policy. We reply within 24 hours.
                    </p>
                 </form>
             </div>
           </motion.div>

        </div>
      </div>

      {/* ======================= FOOTER ======================= */}
      {/* Wrapped in high z-index to ensure it sits above background FX */}
      <div className="relative z-30">
        <Footer />
      </div>

    </main>
  );
}

// --- Helper Components ---

const InputGroup = ({ label, placeholder, type }: { label: string, placeholder: string, type: string }) => (
   <div className="space-y-2">
      <label className="text-sm font-medium text-neutral-400">{label}</label>
      <input 
         type={type} 
         placeholder={placeholder}
         // Focus: Orange Border & Ring
         className="w-full bg-neutral-950 border border-white/10 rounded-xl p-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5F38] focus:ring-1 focus:ring-[#FF5F38] transition-all"
      />
   </div>
);

const SocialBtn = ({ icon }: { icon: React.ReactNode }) => (
   <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:scale-110 transition-all">
      {icon}
   </a>
);