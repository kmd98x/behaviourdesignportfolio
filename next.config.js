/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true'
const basePath = isProd ? '/behaviourdesignportfolio' : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
}

module.exports = nextConfig
