/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modo SSR/Node (necesario para Keystatic + API routes).
  // Despliegue recomendado: Vercel o Netlify (free tier), no GitHub Pages.
  // images.unoptimized eliminado: Vercel Image Optimization activa.
  // Sirve WebP/AVIF automáticamente y cachea en el CDN edge.
  // Para imágenes externas (ej. CDN del CMS) añadir remotePatterns aquí.
  trailingSlash: true,
};

module.exports = nextConfig;
