/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'images.ctfassets.net'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/:all*',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=31536000, stale-while-revalidate=59',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/blog',
        has: [
          {
            type: 'query',
            key: 'page',
            value: '(?<page>.*)',
          },
        ],
        destination: '/blog/:page*',
      },
      {
        source: '/blog',
        destination: '/blog/1',
      },
      {
        source: '/category/:category*',
        has: [
          {
            type: 'query',
            key: 'page',
            value: '(?<page>.*)',
          },
        ],
        destination: '/category/:category*/:page',
      },
      {
        source: '/category/:category',
        destination: '/category/:category/1',
      },
    ]
  },
}

module.exports = nextConfig
