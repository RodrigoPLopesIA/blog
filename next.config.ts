import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 remotePatterns: [new URL('https://example.com/images/**')],
};

export default nextConfig;
