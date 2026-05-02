/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // images: {
  //   domains: ['images.unsplash.com','plus.unsplash.com'],
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
       
      },
    ],
  },
};

export default nextConfig;
