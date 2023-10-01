/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  output: 'standalone',
  env: {
    NEXTAUTH_SECRET:
      'b9174e70eb01830837f4afbf03fd4748501d08fb76bebcbc83ea93891150b639',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
