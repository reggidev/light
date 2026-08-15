/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // ...other config
};

export default nextConfig;
