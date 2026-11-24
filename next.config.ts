import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "thebostonpledge.org",
      },
    ],
  },
  experimental: {
    agentFeedback: true,
    cpus: 1,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/vision-mission",
        destination: "/about/vision-mission",
        permanent: true,
      },
      {
        source: "/our-team",
        destination: "/about/our-team",
        permanent: true,
      },
      {
        source: "/media",
        destination: "/about/media",
        permanent: true,
      },
      {
        source: "/constitution",
        destination: "/about/constitution",
        permanent: true,
      },
      {
        source: "/reflections",
        destination: "/about/reflections",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
