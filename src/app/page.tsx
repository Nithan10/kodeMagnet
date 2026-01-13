import React from "react";
import NavbarDemo from "./components-main/Navbar"; 
import Hero from "./components-main/Hero";
// 1. Import the new Stats component
import StatsSection from "./components-main/StatsSection"; 
import EndToEndProductDevelopment from "./components-main/EndToEndProductDevelopment";
import OurClients from "./components-main/OurClients";
import Testimonials from "./components-main/Testimonials";
import PointSolutions from "./components-main/PointSolutions";
import LetsTalk from "./components-main/LetsTalk";
import Footer from "./components-main/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased selection:bg-[#aff0e6] selection:text-black">
      
      {/* NAVBAR */}
      <div className="relative w-full flex items-center justify-center">
        <NavbarDemo />
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col">
        <Hero />
      </div>

      {/* STATS SECTION */}
      {/* Placed right after Hero to build immediate trust */}
      <div className="w-full">
         <StatsSection />
      </div>

           <div className="w-full">
         <EndToEndProductDevelopment />
      </div>

                 <div className="w-full">
         <OurClients />
      </div>

          <div className="w-full">
       <Testimonials />
      </div>

      <div>
        <PointSolutions />
      </div>

<div>
  <LetsTalk />
</div>

<Footer />
      
    </main>
  );
}