import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: here,
  turbopack: {
    root: here,
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
