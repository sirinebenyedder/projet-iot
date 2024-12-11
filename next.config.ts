import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/data',  // This is the route that will handle CORS
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow requests from any origin (you can specify your ESP32 IP here for more security)
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST,OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
