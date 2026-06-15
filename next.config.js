/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // Incluye los .mdoc de Keystatic en el bundle serverless de Vercel.
  // Sin esto el reader no encuentra los posts en producción.
  outputFileTracingIncludes: {
    '/**': ['./src/content/**/*'],
  },
};

module.exports = nextConfig;
