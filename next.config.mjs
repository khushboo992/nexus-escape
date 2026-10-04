/** @type {import('next').NextConfig} */
const nextConfig = {
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
