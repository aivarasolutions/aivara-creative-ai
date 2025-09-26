/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow all hosts for Replit proxy environment
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  // Disable strict mode for development to avoid double-mounting issues
  reactStrictMode: false,
  // Allow external images and domains
  images: {
    domains: ['*'],
    unoptimized: true,
  },
  // Output standalone for better deployment
  output: 'standalone',
  // Configure for development server
  env: {
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;