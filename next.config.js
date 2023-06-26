/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
