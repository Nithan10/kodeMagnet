"use client";
import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const clients = [
  { name: "Google", logo: "https://cdn.simpleicons.org/google" },
  { name: "Microsoft", logo: "https://cdn.simpleicons.org/microsoft" },
  { name: "Amazon", logo: "https://cdn.simpleicons.org/amazon/white" },
  { name: "Netflix", logo: "https://cdn.simpleicons.org/netflix" },
  { name: "Spotify", logo: "https://cdn.simpleicons.org/spotify" },
  { name: "Tesla", logo: "https://cdn.simpleicons.org/tesla/white" },
  { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/white" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
  { name: "Airbnb", logo: "https://cdn.simpleicons.org/airbnb" },
  { name: "Uber", logo: "https://cdn.simpleicons.org/uber/white" },
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/white" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify" },
  { name: "Zoom", logo: "https://cdn.simpleicons.org/zoom" },
  { name: "Dropbox", logo: "https://cdn.simpleicons.org/dropbox" },
  { name: "Discord", logo: "https://cdn.simpleicons.org/discord" },
  { name: "Twitch", logo: "https://cdn.simpleicons.org/twitch" },
  { name: "Reddit", logo: "https://cdn.simpleicons.org/reddit" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/white" },
  { name: "GitLab", logo: "https://cdn.simpleicons.org/gitlab" },
  { name: "Atlassian", logo: "https://cdn.simpleicons.org/atlassian" },
  { name: "Intel", logo: "https://cdn.simpleicons.org/intel/white" },
  { name: "Nvidia", logo: "https://cdn.simpleicons.org/nvidia" },
  { name: "Samsung", logo: "https://cdn.simpleicons.org/samsung/white" },
  { name: "IBM", logo: "https://cdn.simpleicons.org/ibm/white" },
  { name: "Oracle", logo: "https://cdn.simpleicons.org/oracle" },
  { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce" },
  { name: "Adobe", logo: "https://cdn.simpleicons.org/adobe" },
  { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow" },
  { name: "Framer", logo: "https://cdn.simpleicons.org/framer/white" },
];

export default function OurClients() {
  return (
    <div className="relative w-full bg-black pt-16 md:pt-24 pb-20 overflow-hidden flex flex-col items-center justify-center z-20">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative z-50 text-center px-6 max-w-5xl mx-auto mb-12 md:mb-16">
        {/* Adjusted Header Size: 
            Mobile: text-4xl
            Tablet: text-6xl
            Desktop: text-7xl
        */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Trusted by <span className="bg-gradient-to-r from-[#FF5F38] to-[#FF9068] bg-clip-text text-transparent inline-block">Global Innovators</span>
        </h2>
        
        {/* Adjusted Subtext:
            Slightly smaller on mobile (text-sm) to keep the layout tight, 
            scaling up to text-xl for desktop readability.
        */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed opacity-80">
          Powering the next generation of tech giants, startups, and enterprise leaders worldwide.
        </p>
      </div>

      {/* --- 3D MARQUEE IMPLEMENTATION --- */}
      <div className="w-full relative z-10 mt-6 md:mt-10">
         <ThreeDMarquee items={clients} />
         
         {/* Bottom Fade Overlay */}
         <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20"></div>
      </div>

    </div>
  );
}