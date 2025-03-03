import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};

export default nextConfig;
