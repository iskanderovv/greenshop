import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["3.125.43.204"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3.125.43.204",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
