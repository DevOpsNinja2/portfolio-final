/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'portfolio-final'; // <-- your GitHub repo name

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '', // Uses repo name for GitHub Pages
  assetPrefix: isGithubPages ? `/${repo}/` : '', // Prefix for assets on GitHub Pages
  images: {
    unoptimized: true, // Disables image optimization for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
