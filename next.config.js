/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/projects", destination: "/", permanent: true },
      { source: "/experience", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
