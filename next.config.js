/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongodburl: "mongodb+srv://andrey:1479314ade777@insta-copy.lenqu64.mongodb.net/?retryWrites=true&w=majority",
}
}

module.exports = nextConfig
