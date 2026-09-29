import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker uses the minimal server; local and Vercel builds keep their defaults.
  output: process.env.DOCKER_BUILD === "1" ? "standalone" : undefined,
};

export default nextConfig;
