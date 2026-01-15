"use client";
import React from "react";
import { motion } from "framer-motion";
import { NavbarDemo } from "@/app/components-main/Navbar";
// 1. Import Footer
import Footer from "@/app/components-main/Footer";
import Image from "next/image";
import Link from "next/link";
import { IconRocket, IconDeviceDesktop, IconSearch } from "@tabler/icons-react";

export default function WebsitesSolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FF5F38] selection:text-white">
      {/* Navbar */}
      <div className="relative w-full flex items-center justify-center">
         <NavbarDemo />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-40 pb-20 px-6">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
        
        {/* Warm Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#FF5F38]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#FF5F38]/20 bg-[#FF5F38]/5 backdrop-blur-md"
          >
            <span className="text-[#FF5F38] text-xs font-bold tracking-widest uppercase">Web Development 2.0</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            We Build Websites That <br />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] via-[#FF5F38] to-[#FFA050]">
               Actually Convert.
               {/* Underline decoration */}
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FF5F38]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
               </svg>
            </span>
          </motion.h1>
          
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From lightning-fast landing pages to complex enterprise platforms. We combine aesthetic mastery with engineering rigor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-[#FF5F38] to-[#FF8050] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,95,56,0.4)] hover:scale-105 transition-all duration-300">
               Get a Proposal
             </Link>
             <Link href="#portfolio" className="px-8 py-3 bg-neutral-900 border border-white/10 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors">
               View Our Work
             </Link>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO / SAMPLES SECTION --- */}
      <section id="portfolio" className="py-20 px-6 bg-neutral-950 border-t border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Recent <span className="text-[#FF5F38]">Masterpieces</span></h2>
                  <p className="text-neutral-400 mt-2 max-w-lg">
                    A collection of high-performance websites we've crafted for varied industries.
                  </p>
               </div>
               {/* Divider Line Gradient */}
               <div className="hidden md:block w-32 h-[1px] bg-gradient-to-l from-[#FF5F38] to-transparent"></div>
            </div>

            {/* Grid of Website Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
               
               <PortfolioCard 
                  title="FinTech Dashboard"
                  category="SaaS / Web App"
                  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  tags={["Next.js", "Tailwind", "Finance"]}
               />
               
               <PortfolioCard 
                  title="Luxe E-Commerce"
                  category="Retail Platform"
                  image="https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2095&auto=format&fit=crop"
                  tags={["Shopify Headless", "Framer Motion", "Stripe"]}
               />

               <PortfolioCard 
                  title="Modern Architecture"
                  category="Portfolio"
                  image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                  tags={["Minimalist", "3D Rendering", "GSAP"]}
               />

               <PortfolioCard 
                  title="Health & AI"
                  category="Corporate Landing"
                  image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                  tags={["Healthcare", "Animation", "Trust"]}
               />

            </div>
         </div>
      </section>

      {/* --- WHY US / FEATURES GRID --- */}
      <section className="py-24 px-6 relative overflow-hidden">
         {/* Decorative blob in Orange */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5F38]/5 rounded-full blur-[100px] pointer-events-none" />

         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <FeatureCard 
               icon={<IconRocket className="w-10 h-10 text-[#FF5F38]" />}
               title="Blazing Fast Speed"
               description="We aim for 100/100 Lighthouse scores. Every millisecond counts for user retention."
            />
            <FeatureCard 
               icon={<IconSearch className="w-10 h-10 text-[#FF5F38]" />}
               title="SEO Optimized"
               description="Built with semantic HTML5 and server-side rendering to ensure Google loves your site."
            />
            <FeatureCard 
               icon={<IconDeviceDesktop className="w-10 h-10 text-[#FF5F38]" />}
               title="Pixel Perfect Design"
               description="Responsive across all devices. Your brand looks flawless on mobile, tablet, and 4K desktops."
            />
         </div>
      </section>

      {/* --- TECH STRIP --- */}
      <div className="w-full border-t border-white/10 bg-neutral-950 py-10">
         <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-bold text-white hover:text-[#FF5F38] transition-colors">Next.js</span>
             <span className="text-xl font-bold text-white hover:text-[#FF5F38] transition-colors">React</span>
             <span className="text-xl font-bold text-white hover:text-[#FF5F38] transition-colors">Vercel</span>
             <span className="text-xl font-bold text-white hover:text-[#FF5F38] transition-colors">Tailwind</span>
             <span className="text-xl font-bold text-white hover:text-[#FF5F38] transition-colors">Framer</span>
             <span className="text-xl font-bold text-white hover:text-[#FF5F38] transition-colors">Sanity</span>
         </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="relative z-30">
        <Footer />
      </div>

    </main>
  );
}

// --- SUB COMPONENTS ---

const PortfolioCard = ({ title, category, image, tags }: { title: string, category: string, image: string, tags: string[] }) => {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         whileHover={{ y: -10 }}
         className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10"
      >
         {/* Image Container */}
         <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
            <Image 
               src={image} 
               alt={title} 
               fill 
               className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
         </div>

         {/* Content */}
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            <p className="text-[#FF5F38] text-sm font-mono mb-2 uppercase tracking-wider">{category}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
            
            <div className="flex flex-wrap gap-2">
               {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-white border border-white/10 group-hover:border-[#FF5F38]/50 transition-colors">
                     {tag}
                  </span>
               ))}
            </div>
         </div>
      </motion.div>
   )
}

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => {
   return (
      <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-[#FF5F38]/30 transition-colors text-center flex flex-col items-center group">
         <div className="mb-6 p-4 rounded-full bg-black border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,95,56,0.2)] transition-all">
            {icon}
         </div>
         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5F38] transition-colors">{title}</h3>
         <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
   )
}