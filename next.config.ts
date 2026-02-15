import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-mediman.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
