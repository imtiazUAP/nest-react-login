/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '../../.next',
  reactStrictMode: true,
  swcMinify: false,
  // transpilePackages: ['@material-ui/core', '@mui/material/styles', 'mui-rte'],
};

module.exports = nextConfig;
