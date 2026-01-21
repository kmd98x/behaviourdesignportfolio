/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    webpackMemoryOptimizations: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
