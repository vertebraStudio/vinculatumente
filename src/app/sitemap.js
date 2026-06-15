import { getAllPosts } from '@/lib/posts';

const SITE = 'https://vinculatumente.es';

export default async function sitemap() {
  const posts = await getAllPosts();
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/equipo/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/equipo/maria-villalba/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/contacto/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/terapias/relaciones-y-vinculos/`, lastModified: now, priority: 0.8 },
    { url: `${SITE}/terapias/infanto-juvenil/`, lastModified: now, priority: 0.8 },
    { url: `${SITE}/terapias/trauma-y-apego/`, lastModified: now, priority: 0.8 },
    { url: `${SITE}/terapias/sexologia/`, lastModified: now, priority: 0.8 },
    { url: `${SITE}/aviso-legal/`, priority: 0.3 },
    { url: `${SITE}/politica-privacidad/`, priority: 0.3 },
    { url: `${SITE}/politica-cookies/`, priority: 0.3 },
    ...posts.map((p) => ({
      url: `${SITE}/blog/${p.slug}/`,
      lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
