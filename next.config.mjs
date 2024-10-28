/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/fintech-ui",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/fintech-ui',
          basePath: false,
          permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'deeladplace.com:8089',
      },
    ],
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

export default nextConfig