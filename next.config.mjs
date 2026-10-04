/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tsrkjbcotkiyurioiqhv.supabase.co",
        port: "",
        // CHANGED: "cabins" to "cabin-images" to match your Supabase storage bucket name
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },

  // output: "export",
};

export default nextConfig;
