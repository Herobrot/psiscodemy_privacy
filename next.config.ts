import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx"],
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  distDir: "build",
};

export default nextConfig;
