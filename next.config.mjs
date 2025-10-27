import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/images/:path*', // Ensure /images paths are not prefixed by locale
      },
    ];
  },
};

export default withMDX(config);