import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ng.jumia.is", // 👈 allow Jumia product images
      },
    ],
  },
};

export default nextConfig;
