// @ts-check

const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS) || process.env.DEPLOY_TARGET === "github-pages";
const basePath = process.env.BASE_PATH ?? (isGitHubPages ? "/nextbites" : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
