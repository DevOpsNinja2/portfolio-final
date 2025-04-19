/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'portfolio-final'; // Replace this with your actual GitHub repo name

const nextConfig = {
  output: 'export', // Exports the site as a static site
  basePath: isGithubPages ? `/${repo}` : '', // Set base path for GitHub Pages
  assetPrefix: isGithubPages ? `/${repo}/` : '', // Set asset prefix for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization for static export
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
