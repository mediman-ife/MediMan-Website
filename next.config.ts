import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
