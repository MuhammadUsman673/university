/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ✅ Static export for GoDaddy
  reactCompiler: true,
  reactStrictMode: false,

  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  compiler: {
    removeConsole: true,
  },

  images: {
    unoptimized: true,     // ✅ Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;