"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { 
  Code2, Cpu, Globe, Users, Zap, Rocket, Award, ArrowRight,
  MapPin, Database, Smartphone, Cloud, Terminal, Shield
} from "lucide-react";

// --- IMPORTS ---
import { NavbarDemo } from "../components-main/Navbar";
import Footer from "../components-main/Footer"; 

export default function AboutPage() {
  const containerRef = useRef(null);
  
  // Parallax Hooks
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]); 

  return (
    <main ref={containerRef} className="min-h-screen bg-neutral-950 text-white selection:bg-[#ff4d00] selection:text-white font-sans">
      
      <div className="relative z-50">
        <NavbarDemo />
      </div>

      {/* ======================= HERO SECTION ======================= */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
            <Image 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Deep Space Network"
                fill
                className="object-cover object-center opacity-30"
                priority
            />
            <div className="absolute inset-0 bg-neutral-950/70 bg-blend-overlay"></div>
        </motion.div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

        <div className="text-center z-10 max-w-5xl relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur-md text-sm font-medium text-neutral-300 mb-6">
            EST. 2023 • Global Tech Ecosystem
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            We don't just write code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ff4d00] to-white bg-[length:200%_auto] animate-shimmer">
              We engineer futures.
            </span>
          </h1>
        </div>
      </section>

      {/* ======================= MANIFESTO / STATS ======================= */}
      <section className="py-24 bg-neutral-900/50 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Building the digital backbone of tomorrow.</h2>
               <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                 KodeMagnet started as a small dev shop and evolved into a multi-faceted ecosystem. We bridge the gap between <strong>Education</strong> (training the next gen) and <strong>Enterprise</strong> (building complex systems).
               </p>
               <div className="flex gap-4">
                  <Badge text="ISO Certified" />
                  <Badge text="Meta Business Partner" />
                  <Badge text="AWS Certified" />
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <StatCard number="50+" label="Global Clients" />
               <StatCard number="10k+" label="Students Trained" />
               <StatCard number="4" label="SaaS Products" />
               <StatCard number="1M+" label="Lines of Code" />
            </div>
         </div>
      </section>

      {/* ======================= STICKY SCROLL SECTION ======================= */}
      <StickyScrollSection />

      {/* ======================= TECH STACK ======================= */}
      <section className="py-20 overflow-hidden bg-neutral-950">
         <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-400">Powered by modern architecture</h2>
         </div>
         
         <div className="flex relative w-full overflow-hidden mask-gradient">
             <div className="flex animate-marquee gap-12 min-w-full">
                <TechIcon icon={<Code2 />} label="Next.js" />
                <TechIcon icon={<Database />} label="PostgreSQL" />
                <TechIcon icon={<Cloud />} label="AWS" />
                <TechIcon icon={<Smartphone />} label="React Native" />
                <TechIcon icon={<Terminal />} label="Node.js" />
                <TechIcon icon={<Shield />} label="TypeScript" />
                <TechIcon icon={<Cpu />} label="Python AI" />
                <TechIcon icon={<Globe />} label="GraphQL" />
                {/* Duplicate for seamless loop */}
                <TechIcon icon={<Code2 />} label="Next.js" />
                <TechIcon icon={<Database />} label="PostgreSQL" />
                <TechIcon icon={<Cloud />} label="AWS" />
                <TechIcon icon={<Smartphone />} label="React Native" />
                <TechIcon icon={<Terminal />} label="Node.js" />
             </div>
         </div>
      </section>

      {/* ======================= JOURNEY TIMELINE ======================= */}
      <section className="py-32 px-6 relative">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Journey</h2>
            <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
               
               <TimelineItem 
                 year="2023" 
                 title="The Inception" 
                 desc="KodeMagnet is founded with a single mission: To provide high-quality software solutions while simultaneously training the talent needed to build them."
               />
               <TimelineItem 
                 year="2024" 
                 title="Product Expansion" 
                 desc="We launched CodeLeads (CRM) and Kodegraphy (Event Tech), transitioning from a service-only agency to a product-led company."
               />
               <TimelineItem 
                 year="2025" 
                 title="Going Global" 
                 desc="Opened offices in 3 new regions. Our LMS platform hit 10,000 active users, becoming a standard for coding bootcamps."
               />
               <TimelineItem 
                 year="2026" 
                 title="The AI Era" 
                 desc="Integration of autonomous AI agents (KodeChat) across all our platforms. We are now building the future of automated business logic."
               />

            </div>
         </div>
      </section>

      {/* ======================= GLOBAL IMPACT ======================= */}
      <section className="py-24 px-6 bg-neutral-900/30 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1 relative h-[400px] w-full bg-neutral-950 rounded-3xl border border-white/10 p-4 flex items-center justify-center overflow-hidden">
               {/* Abstract Map Visualization */}
               <div className="absolute inset-0 opacity-40">
                  <Image 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="World Map"
                    fill
                    className="object-cover"
                  />
               </div>
               {/* Pulsing Dots */}
               <div className="relative z-10 w-full h-full">
                  <MapPin className="absolute top-[30%] left-[25%] text-[#ff4d00] w-6 h-6 animate-bounce" />
                  <MapPin className="absolute top-[40%] right-[30%] text-[#ff4d00] w-6 h-6 animate-bounce delay-75" />
                  <MapPin className="absolute bottom-[30%] right-[20%] text-[#ff4d00] w-6 h-6 animate-bounce delay-150" />
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <div className="inline-flex items-center gap-2 text-[#ff4d00] mb-4">
                  <Globe className="w-5 h-5" />
                  <span className="font-bold tracking-widest uppercase text-sm">Global Reach</span>
               </div>
               <h2 className="text-4xl font-bold mb-6">Code knows no borders.</h2>
               <p className="text-neutral-400 mb-8 leading-relaxed">
                  We operate across time zones. From our HQ in India to clients in the US, UK, and Dubai, our systems run 24/7. Our "Follow the Sun" development model ensures that your project is moving forward, even while you sleep.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div>
                      <h4 className="text-2xl font-bold text-white">4+</h4>
                      <p className="text-sm text-neutral-500">Global Offices</p>
                  </div>
                  <div>
                      <h4 className="text-2xl font-bold text-white">12+</h4>
                      <p className="text-sm text-neutral-500">Countries Served</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ======================= OUR DNA ======================= */}
      <section className="py-24 px-6 bg-neutral-950 relative z-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Our DNA</h2>
          <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#ff4d00]/50 transition-colors">
              <Rocket className="absolute top-0 right-0 w-48 h-48 text-white opacity-5 group-hover:opacity-10 transition-opacity rotate-12" />
              <div className="relative z-10 flex flex-col justify-end h-full">
                <h3 className="text-3xl font-bold mb-2 text-white">Innovation First</h3>
                <p className="text-neutral-400">We don't just follow trends; we create products like Kodegraphy and KodeChat to set new standards.</p>
              </div>
            </div>
            <div className="md:col-span-1 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#ff4d00]/50 transition-colors">
              <Zap className="w-12 h-12 text-[#ff4d00] mb-6" />
              <h3 className="text-xl font-bold mb-2">Speed & Agility</h3>
              <p className="text-neutral-400">Rapid prototyping and deployment cycles.</p>
            </div>
            <div className="md:col-span-1 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#ff4d00]/50 transition-colors">
              <Users className="w-12 h-12 text-[#ff4d00] mb-6" />
              <h3 className="text-xl font-bold mb-2">Human Centric</h3>
              <p className="text-neutral-400">Technology designed for people, not robots.</p>
            </div>
             <div className="md:col-span-2 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#ff4d00]/50 transition-colors">
              <Award className="absolute top-0 right-0 w-48 h-48 text-white opacity-5 group-hover:opacity-10 transition-opacity -rotate-12" />
              <div className="relative z-10 flex flex-col justify-end h-full">
                <h3 className="text-3xl font-bold mb-2 text-white">Education at the Core</h3>
                <p className="text-neutral-400">Through KodeMagnet LMS and our Hire-Train-Deploy model, we are fixing the skills gap in the tech industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= TEAM SECTION ======================= */}
      <section className="py-24 px-6 bg-neutral-900/20">
         <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Minds behind the code - Kode…</h2>
            <p className="text-neutral-400">A team of dreamers, architects, and problem solvers.</p>
         </div>
         <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <TeamMember name="Alex Chen" role="Founder & CEO" />
            <TeamMember name="Sarah Jones" role="CTO" />
            <TeamMember name="Mike Ross" role="Product Head" />
            <TeamMember name="Priya Patel" role="Lead Architect" />
         </div>
      </section>

      {/* ======================= CTA / PRE-FOOTER ======================= */}
      {/* This section has z-20. To make the Footer robot visible on top of this, Footer needs > z-20 */}
      <section className="py-40 px-6 text-center z-20 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff4d00]/10 to-transparent"></div>
        <h2 className="text-5xl font-bold mb-8 relative z-10">Let's build the impossible.</h2>
        <Link href="/contact" className="relative z-10 inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-[#ff4d00] hover:text-white transition-all">
           Start Project <ArrowRight className="w-4 h-4"/>
        </Link>
      </section>

      {/* ======================= FOOTER COMPONENT ======================= */}
      {/* FIX: Wrapped Footer in z-30 to sit ABOVE the CTA section so the robot can peek over */}
      <div className="relative z-30">
        <Footer />
      </div>

    </main>
  );
}

// ================= THE STICKY SCROLL COMPONENT =================

const StickyScrollSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const content = [
    {
      title: "Software Solutions",
      description: "We build robust, scalable web and mobile applications. From sleek marketing websites to complex dashboards and AI-powered tools.",
      image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1470&auto=format&fit=crop",
      color: "#ff4d00" 
    },
    {
      title: "Our Product Suite",
      description: "CodeLeads (CRM), Kodegraphy (Event Tech), and KodeChat (Automation) are live examples of our engineering prowess.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
      color: "#ff4d00" 
    },
    {
      title: "Hire, Train, Deploy",
      description: "The KodeMagnet Academy is a pipeline. We identify raw talent, train them on our LMS, and deploy them to top companies.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop",
      color: "#ff2600" 
    },
  ];

  return (
    <div className="bg-neutral-950 relative z-20 py-32">
       <div className="max-w-7xl mx-auto px-6">
         <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The CodeMag Ecosystem</h2>
            <p className="text-neutral-400">Scroll down to explore.</p>
         </div>

         <div className="grid lg:grid-cols-2 gap-10 items-start">
           
           {/* LEFT: SCROLLING TEXT CONTENT */}
           <div className="flex flex-col">
              {content.map((item, index) => (
                 <StickyItem 
                    key={index} 
                    item={item} 
                    index={index} 
                    setActiveIndex={setActiveIndex} 
                 />
              ))}
              <div className="h-[20vh]"></div>
           </div>

           {/* RIGHT: STATIC (STICKY) IMAGE CONTAINER */}
           <div className="hidden lg:block sticky top-20 h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
               <AnimatePresence mode="wait">
                  {content.map((item, index) => (
                      index === activeIndex && (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 1.1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="absolute inset-0 h-full w-full"
                          >
                               <Image 
                                  src={item.image} 
                                  alt={item.title} 
                                  fill
                                  className="object-cover"
                               />
                               <div 
                                  className="absolute inset-0 bg-neutral-950/60 mix-blend-multiply" 
                                  style={{ backgroundColor: `${item.color}40` }}
                               ></div>
                               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-neutral-950 to-transparent">
                                  <h4 className="text-3xl font-bold text-white">{item.title}</h4>
                               </div>
                          </motion.div>
                      )
                  ))}
               </AnimatePresence>
           </div>

         </div>
       </div>
    </div>
  );
};

// --- Helper Components ---

const StickyItem = ({ item, index, setActiveIndex }: { item: any, index: number, setActiveIndex: (index: number) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) setActiveIndex(index);
  }, [isInView, index, setActiveIndex]);

  return (
    <div ref={ref} className="min-h-[80vh] flex flex-col justify-center border-l-2 border-white/10 pl-10 transition-colors duration-500" style={{ borderColor: isInView ? item.color : 'rgba(255,255,255,0.1)' }}>
      <h3 className="text-4xl font-bold mb-6 transition-colors duration-300" style={{ color: isInView ? item.color : 'white' }}>{item.title}</h3>
      <p className="text-xl text-neutral-400 leading-relaxed max-w-lg">{item.description}</p>
    </div>
  );
};

const TimelineItem = ({ year, title, desc }: { year: string, title: string, desc: string }) => (
   <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12"
   >
      <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-[#ff4d00] shadow-[0_0_10px_#ff4d00]"></div>
      <span className="text-sm font-bold text-[#ff4d00] mb-1 block tracking-wider">{year}</span>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-neutral-400 leading-relaxed max-w-lg">{desc}</p>
   </motion.div>
);

const Badge = ({ text }: { text: string }) => (
   <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">
      {text}
   </div>
);

const StatCard = ({ number, label }: { number: string, label: string }) => (
   <div className="bg-neutral-900 border border-white/5 p-6 rounded-2xl text-center">
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-xs text-neutral-500 uppercase tracking-wide">{label}</div>
   </div>
);

const TechIcon = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
   <div className="flex items-center gap-3 px-6 py-3 bg-neutral-900 border border-white/10 rounded-full min-w-fit">
      <span className="text-[#ff4d00]">{icon}</span>
      <span className="font-medium text-sm">{label}</span>
   </div>
);

const TeamMember = ({ name, role }: { name: string, role: string }) => (
   <div className="group">
      <div className="w-full h-64 bg-neutral-800 rounded-2xl mb-4 overflow-hidden relative">
         <Image 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
            alt={name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
         />
      </div>
      <h3 className="text-lg font-bold text-white">{name}</h3>
      <p className="text-sm text-[#ff4d00]">{role}</p>
   </div>
);