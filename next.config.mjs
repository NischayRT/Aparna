/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...any other config you have
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig; // Use this line
