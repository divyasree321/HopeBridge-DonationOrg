/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion", "recharts", "sonner"],
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "www.transparenttextures.com",
      },
    ],
  },
};

export default nextConfig;
