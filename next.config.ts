import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/public/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
