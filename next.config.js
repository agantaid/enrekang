/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n: {
//     locales: ['en', 'id'],
//     defaultLocale: 'en',
//   },
// };

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
  },
});

module.exports = nextConfig;
