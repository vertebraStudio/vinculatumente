/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modo SSR/Node (necesario para Keystatic + API routes).
  // Despliegue recomendado: Vercel o Netlify (free tier), no GitHub Pages.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
