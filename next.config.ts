import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesRepo = process.env.GITHUB_PAGES_REPO ?? "ai-product";
const githubPagesBasePath = `/${githubPagesRepo}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? githubPagesBasePath : undefined,
  assetPrefix: isGitHubPages ? githubPagesBasePath : undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
