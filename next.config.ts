import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/ghostwriting",
        destination: "https://stratum-content.vercel.app",
        permanent: false,
      },
      {
        source: "/ghostwriting/:path*",
        destination: "https://stratum-content.vercel.app/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
