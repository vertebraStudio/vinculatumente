/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTA: no usar trailingSlash:true. Las rutas de API de Keystatic
  // (/api/keystatic/tree, /blob, etc.) se piden SIN barra final y con
  // trailingSlash devolvían 404. Además los canonicals del sitio ya van
  // sin barra, así que esto deja las URLs públicas coherentes.
  // Incluye los .mdoc de Keystatic en el bundle serverless de Vercel.
  // Sin esto el reader no encuentra los posts en producción.
  outputFileTracingIncludes: {
    '/**': ['./src/content/**/*'],
  },
};

module.exports = nextConfig;
