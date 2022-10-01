/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: {
      ssr: true,
      fileName: true,
      displayName: true,
      pure: true,
    },
  },
  webpack(config) {
    config.resolve = {
      alias: {
        '@pages': path.resolve(__dirname, 'pages'),
        '@styles': path.resolve(__dirname, 'styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@locales': path.resolve(__dirname, 'src/locales'),
        '@mocks': path.resolve(__dirname, 'src/mocks'),
        '@react-query': path.resolve(__dirname, 'src/react-query'),
        '@recoil': path.resolve(__dirname, 'src/recoil'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
