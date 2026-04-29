import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_ENABLE_MEGA_MENU: process.env.NEXT_PUBLIC_ENABLE_MEGA_MENU ?? 'false',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
