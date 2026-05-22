import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
