/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/smile/cloud",
        destination: "/mood-cloud",
        permanent: true,
      },
      {
        source: "/laugh/cloud",
        destination: "/mood-cloud",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
