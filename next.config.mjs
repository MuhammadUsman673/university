/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: false,

  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  compiler: {
    removeConsole: true,
  },

  // ⭐ ADD THIS SECTION
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
