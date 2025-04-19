/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "**",
      },
    ],
  },
<<<<<<< HEAD
  output: "export",
=======
>>>>>>> 184abd034a453159df949ac775d50bf95e6a8180
};

module.exports = nextConfig;
