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
  // Posts que llegaron a publicarse con otra URL (duplicados del CMS o
  // renombrados) y luego se borraron. Redirigen al post vigente en vez de 404.
  async redirects() {
    return [
      ['senales-empezar-terapia-copy', 'senales-empezar-terapia'],
      ['libros-cuentos-educacion-sexual', 'libros-cuentos-educacion-sexual-ninos-6-12-anos'],
      ['libros-cuentos-educacion-sexual-ninos-6-12-anos-1', 'libros-cuentos-educacion-sexual-ninos-6-12-anos'],
      ['que-es-sexting-riesgos-proteger-intimidad', 'sexting-riesgos-proteger-intimidad'],
      ['cambios-sexuales-hombre-edad', 'cambios-sexuales-hombre-edad-1'],
    ].map(([from, to]) => ({
      source: `/blog/${from}`,
      destination: `/blog/${to}`,
      permanent: true,
    }));
  },
};

module.exports = nextConfig;
