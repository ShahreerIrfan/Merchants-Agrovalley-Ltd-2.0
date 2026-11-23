import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "192.168.2.111",
    "192.168.2.111:3000",
    "192.168.2.111:3001",
    "192.168.2.111:3002",
    "localhost",
    "localhost:3000",
    "localhost:3001",
    "localhost:3002",
  ],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
