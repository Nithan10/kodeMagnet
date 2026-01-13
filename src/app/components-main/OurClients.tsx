"use client";
import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

// ... [Keep your 'clients' array exactly as it is] ...
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
    // CHANGED: bg-black (was bg-neutral-950), pt-0 (was py-24), removed border-t
    <div className="relative w-full bg-black pt-0 pb-24 overflow-hidden flex flex-col items-center justify-center z-20">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-10 px-6 mt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Trusted by <span className="bg-gradient-to-r from-[#FF5F38] to-[#FF9068] bg-clip-text text-transparent">Global Innovators</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Powering the next generation of tech giants, startups, and enterprise leaders.
        </p>
      </div>

      {/* --- 3D MARQUEE IMPLEMENTATION --- */}
      <div className="w-full relative z-10 -mt-32 md:-mt-40">
         <ThreeDMarquee items={clients} />
         
         {/* Fade Overlay at Bottom */}
         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
      </div>

    </div>
  );
}