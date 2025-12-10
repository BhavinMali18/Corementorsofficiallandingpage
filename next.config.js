/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
  // Removed 'output: export' for server-side deployment
};

module.exports = nextConfig;


