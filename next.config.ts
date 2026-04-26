import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactCompiler: true,
	reactStrictMode: false,
	allowedDevOrigins: ['192.168.4.22']
};

export default nextConfig;
