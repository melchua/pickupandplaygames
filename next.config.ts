import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Printed rulebook QR codes point here. Do not remove.
      {
        source: "/rules-qr",
        destination: "/how-to-play?utm_source=rulebook&utm_medium=qr",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
