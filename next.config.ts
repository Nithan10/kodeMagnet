import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/demos/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },{
        protocol: "https",
        hostname: "cdn.brandfetch.io",
      },
    ],
  },
};

module.exports = nextConfig;
