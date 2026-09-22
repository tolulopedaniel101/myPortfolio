/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Add remote hosts here if you serve project screenshots from a CDN.
    remotePatterns: [],
  },
  experimental: { optimizePackageImports: ['lucide-react', 'motion'] },
};

export default nextConfig;
