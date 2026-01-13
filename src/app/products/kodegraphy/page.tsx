"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ScanFace, Camera, Share2, Zap } from "lucide-react";

// 1. IMPORT YOUR NAVBAR HERE
import { NavbarDemo } from "../../../app/components-main/Navbar"; 

// Updated to Brand Orange
const accentColor = "#ff4d00";

export default function Page() {
  return (
    // Updated selection color to Orange with White text
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden selection:bg-[#ff4d00] selection:text-white">
      
      {/* 2. PLACE NAVBAR AT THE TOP */}
      <div className="relative z-50">
        <NavbarDemo />
      </div>

      {/* ======================= HERO SECTION ======================= */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 z-10 relative">
            <div 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-4 shadow-[0_0_15px_rgba(255,77,0,0.4)]"
              style={{ backgroundColor: accentColor }}
            >
              The Future of Event Photography
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Snap. Scan. <br />
              {/* Updated Gradient: Red to Orange */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2600] to-[#ff9100]">
                Instant Share.
              </span>
            </h1>
            <p className="text-lg text-neutral-300 max-w-xl">
              Elevate your events with Kodegraphy. We combine professional photography with instant QR code delivery, giving your guests immediate access to their high-quality branded photos.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                // Updated Button: Orange bg, White text
                className="px-8 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,77,0,0.3)]"
                style={{ backgroundColor: accentColor }}
              >
                Book Your Event
              </Link>
              <button className="px-8 py-4 rounded-full border-2 border-white/20 font-bold text-lg hover:bg-white/10 transition-colors">
                See a Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 lg:ml-auto mt-10 lg:mt-0">
            <div 
              className="absolute -inset-4 blur-3xl opacity-20 rounded-full -z-10"
              style={{ backgroundColor: accentColor }}
            ></div>
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1470&auto=format&fit=crop"
                alt="People enjoying photos at an event"
                width={700}
                height={500}
                className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-neutral-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg flex items-center gap-4 max-w-[280px]">
                <ScanFace className="w-10 h-10" style={{ color: accentColor }} />
                <div>
                  <p className="text-sm font-bold text-white">Instant Scan</p>
                  <p className="text-xs text-neutral-400">Guests get photos in seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      </section>

      {/* ======================= HOW IT WORKS ======================= */}
      <section className="py-24 bg-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">How Kodegraphy Works</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Seamless integration into any event workflow. No app downloads required.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-neutral-800 -z-10"></div>

              <ProcessCard 
                icon={<Camera className="w-10 h-10 text-white" />}
                step="01"
                title="The Professional Snap"
                description="Our photographer captures high-quality moments of your guests throughout the event."
              />
               <ProcessCard 
                icon={<ScanFace className="w-10 h-10 text-white" />}
                step="02"
                title="The Unique Scan"
                description="Guests scan a QR code provided instantly (on a card, screen, or wristband)."
              />
               <ProcessCard 
                icon={<Share2 className="w-10 h-10 text-white" />}
                step="03"
                title="Instant Branded Access"
                description="Their photo lands directly on their phone browser, branded and ready to share socially."
              />
            </div>
        </div>
      </section>

      {/* ======================= FEATURES / VISUALS ======================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Built for high-energy,<br/>memorable events.</h2>
              <p className="text-neutral-400 text-lg mb-8">
                From corporate galas to music festivals and weddings, Kodegraphy enhances guest experience by providing instant gratification.
              </p>
              <ul className="space-y-4">
                <FeatureItem text="Custom branded photo overlays" />
                <FeatureItem text="No app download needed" />
                <FeatureItem text="Analytics on scans and shares" />
                <FeatureItem text="GDPR compliant and secure" />
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                 <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop"
                  alt="Event vibe 1"
                  width={300} height={400}
                  className="rounded-2xl object-cover h-64 w-full border border-white/5"
                 />
                 <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                  alt="Event vibe 2"
                  width={300} height={300}
                  className="rounded-2xl object-cover h-48 w-full border border-white/5"
                 />
              </div>
              <div className="space-y-4 pt-8">
                 <Image
                  src="https://images.unsplash.com/photo-1519671482502-9759101d4561?q=80&w=1470&auto=format&fit=crop"
                  alt="Event vibe 3"
                  width={300} height={300}
                  className="rounded-2xl object-cover h-48 w-full border border-white/5"
                 />
                 <Image
                  src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1470&auto=format&fit=crop"
                  alt="Event vibe 4"
                  width={300} height={400}
                  className="rounded-2xl object-cover h-64 w-full border border-white/5"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CTA ======================= */}
      <section className="py-24 relative">
        <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-20 blur-[120px] -z-10 rounded-full"
            style={{ backgroundColor: accentColor }}
        ></div>
        <div className="max-w-4xl mx-auto text-center px-6 bg-neutral-900/50 border border-white/10 backdrop-blur-lg rounded-3xl p-12 lg:p-20">
          <Zap className="w-16 h-16 mx-auto mb-8" style={{ color: accentColor }} />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to modernize your event photography?</h2>
          <p className="text-xl text-neutral-300 mb-10">
            Stop making guests wait days for photos. Give them the instant gratification they expect.
          </p>
          <Link 
                href="/contact" 
                className="inline-block px-10 py-5 rounded-full text-white font-bold text-xl transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,77,0,0.3)]"
                style={{ backgroundColor: accentColor }}
              >
                Get a Quote Now
          </Link>
        </div>
      </section>
    </main>
  );
}

// ================= HELPER COMPONENTS =================

const ProcessCard = ({ icon, step, title, description }: { icon: React.ReactNode, step: string, title: string, description: string }) => {
    return (
      // Updated Hover Border Color
      <div className="bg-neutral-950 border border-white/10 p-8 rounded-3xl relative flex flex-col items-center text-center z-10 hover:border-[#ff4d00]/50 transition-colors">
        <div 
          // Updated Shadow Color
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,77,0,0.3)]"
          style={{ backgroundColor: "#ff4d00" }}
        >
          {icon}
        </div>
        <span className="text-6xl font-black text-neutral-800 absolute top-4 right-6 opacity-50">{step}</span>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-neutral-400 leading-relaxed">{description}</p>
      </div>
    );
};

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-lg">
    <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: "#ff4d00" }} />
    <span>{text}</span>
  </li>
);