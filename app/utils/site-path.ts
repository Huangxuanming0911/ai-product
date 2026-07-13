const siteBasePath =
  process.env.GITHUB_PAGES === "true"
    ? `/${process.env.GITHUB_PAGES_REPO ?? "ai-product"}`
    : "";

export function withSiteBasePath(path: string) {
  if (!siteBasePath || !path.startsWith("/")) {
    return path;
  }

  return `${siteBasePath}${path}`;
}
