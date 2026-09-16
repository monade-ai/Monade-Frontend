import type { NextConfig } from "next";

// Routes that existed on the previous monade.ai site. They have no page here,
// so send them to the home page instead of a 404.
const RETIRED_ROUTES = [
  "/about",
  "/company",
  "/team",
  "/careers",
  "/products",
  "/pricing",
  "/design",
  "/open-claw",
  "/release-notes",
  "/trust",
  "/cookies",
  "/resources",
  "/blog",
  "/case-studies",
];

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED_ROUTES.flatMap((path) => [
      { source: path, destination: "/", permanent: true },
      { source: `${path}/:slug*`, destination: "/", permanent: true },
    ]);
  },
};

export default nextConfig;
