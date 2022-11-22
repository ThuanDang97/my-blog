/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
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
}

module.exports = nextConfig
