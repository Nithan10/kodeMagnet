"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  IconCode, 
  IconCloudComputing, 
  IconDatabase, 
  IconDeviceMobile, 
  IconRocket, 
  IconServer 
} from "@tabler/icons-react";
import Link from "next/link";

// --- FIX: Updated import to match the folder shown in your screenshot ---
import { NavbarDemo } from "@/app/components-main/Navbar"; 

export default function SoftwareSolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FF5F38] selection:text-white">
      {/* Navbar Wrapper */}
      <div className="relative w-full flex items-center justify-center">
         <NavbarDemo />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Grid - Warm tint added to grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Subtle top glow matching the logo colors */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#FF5F38]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FF5F38]/10 border border-[#FF5F38]/20 text-[#FF5F38] text-sm font-mono font-bold mb-6 tracking-wider">
              ENGINEERING EXCELLENCE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Scalable Software <br />
              {/* Gradient text matching "kode" logo transition */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] via-[#FF5F38] to-[#FFA050]">
                Built for the Future.
              </span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We engineer robust, high-performance software solutions tailored to your unique business challenges. From concept to code, we deliver excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Core Capabilities</h2>
            {/* Divider line in Orange */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#FF5F38] to-[#FFA050] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Custom Development" 
              description="Tailor-made software built from the ground up to fit your exact business workflows and requirements."
              icon={<IconCode className="w-8 h-8 text-[#FF5F38]" />}
            />
            <ServiceCard 
              title="Cloud Native Solutions" 
              description="Scalable, resilient applications built on AWS, Azure, or GCP using microservices and serverless architectures."
              icon={<IconCloudComputing className="w-8 h-8 text-[#FF5F38]" />}
            />
            <ServiceCard 
              title="Legacy Modernization" 
              description="Transform outdated systems into modern, high-performance platforms without losing critical data."
              icon={<IconServer className="w-8 h-8 text-[#FF5F38]" />}
            />
            <ServiceCard 
              title="API Integration" 
              description="Seamlessly connect your disparate systems with secure, high-throughput REST and GraphQL APIs."
              icon={<IconDatabase className="w-8 h-8 text-[#FF5F38]" />}
            />
            <ServiceCard 
              title="SaaS Product Engineering" 
              description="End-to-end development for multi-tenant SaaS platforms, focusing on security and scalability."
              icon={<IconRocket className="w-8 h-8 text-[#FF5F38]" />}
            />
            <ServiceCard 
              title="Enterprise Mobile Apps" 
              description="Cross-platform solutions using React Native and Flutter to extend your enterprise to mobile devices."
              icon={<IconDeviceMobile className="w-8 h-8 text-[#FF5F38]" />}
            />
          </div>
        </div>
      </section>

      {/* --- TECH STACK SECTION --- */}
      <section className="py-20 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-16">
             Our <span className="text-[#FF5F38]">Tech Stack</span>
           </h2>
           
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70">
             <TechBadge name="Next.js" />
             <TechBadge name="React" />
             <TechBadge name="Node.js" />
             <TechBadge name="TypeScript" />
             <TechBadge name="Python" />
             <TechBadge name="Go" />
             <TechBadge name="PostgreSQL" />
             <TechBadge name="MongoDB" />
             <TechBadge name="AWS" />
             <TechBadge name="Docker" />
             <TechBadge name="Kubernetes" />
             <TechBadge name="GraphQL" />
           </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Skewed background in Orange tint */}
        <div className="absolute inset-0 bg-[#FF5F38]/5 skew-y-3 transform origin-bottom-right pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build the Impossible?</h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how our engineering team can bring your vision to life with precision and speed.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5F38] to-[#FF8050] text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(255,95,56,0.4)] transition-all transform hover:-translate-y-1">
              Start Your Project
            </Link>
            <Link href="/learn" className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- SUB-COMPONENTS ---

function ServiceCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-[#FF5F38]/50 hover:bg-neutral-900 transition-all duration-300 group"
    >
      <div className="mb-6 p-3 bg-black rounded-lg w-fit border border-white/10 group-hover:border-[#FF5F38]/30 group-hover:shadow-[0_0_15px_rgba(255,95,56,0.2)] transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5F38] transition-colors">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center p-4 border border-white/5 rounded-xl bg-neutral-950 hover:border-[#FF5F38]/30 hover:text-[#FF5F38] transition-colors cursor-default">
      <span className="font-medium">{name}</span>
    </div>
  )
}