import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BUILD_DATE: new Date().toISOString(),
  },
  images: {
    remotePatterns: [
      new URL("https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
