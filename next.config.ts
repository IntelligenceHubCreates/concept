import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
  images: { unoptimized: true },
  basePath: '/concept',
  assetPrefix: '/concept/',
  /* config options here */
};

export default nextConfig;
