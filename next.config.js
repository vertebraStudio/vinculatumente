/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // Evita que Next fuerce el redirect a barra final en las rutas de Keystatic
  // (el callback de OAuth de Keystatic Cloud falla con la barra → "Not found").
  skipTrailingSlashRedirect: true,
  // Incluye los .mdoc de Keystatic en el bundle serverless de Vercel.
  // Sin esto el reader no encuentra los posts en producción.
  outputFileTracingIncludes: {
    '/**': ['./src/content/**/*'],
  },
};

module.exports = nextConfig;
