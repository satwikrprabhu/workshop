/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "**",
      },
    ],

    domains: ["avatars.githubusercontent.com", "github.com"],
  },
};

export default nextConfig;
