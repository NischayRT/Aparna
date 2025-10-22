/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...any other config you have
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com", // Your existing pattern
        port: "",
        pathname: "/**",
      },
      // --- ADD THIS ENTRY ---
      {
        protocol: "https",
        hostname: "d2tdzhum1kggza.cloudfront.net", // The hostname from the error
        port: "", // Usually empty unless specified
        pathname: "/**", // Allows any path on this hostname
      },
      // You can add more domains here if needed
    ],
  },
};

export default nextConfig;
