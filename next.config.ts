import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  allowedDevOrigins: ["http://10.10.0.70:3000"],
};

export default nextConfig;