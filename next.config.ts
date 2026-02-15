import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-mediman.s3.amazonaws.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/doctorapp.html',
        destination: '/doctor-app',
      },
      {
        source: '/userapp.html',
        destination: '/user-app',
      },
    ];
  },
};

export default nextConfig;
