import 'server-only';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

export const CATEGORIES = {
  'relaciones-y-vinculos': 'Relaciones y vínculos',
  'infanto-juvenil': 'Infanto-juvenil',
  'trauma-y-apego': 'Trauma y apego',
  sexologia: 'Sexología',
  'bienestar-emocional': 'Bienestar emocional',
  reflexiones: 'Reflexiones',
};

export function categoryLabel(value) {
  return CATEGORIES[value] || value;
}

// Devuelve todos los posts (sin el body) ordenados por fecha desc.
export async function getAllPosts() {
  const slugs = await reader.collections.posts.list();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.posts.read(slug);
      if (!entry) return null;
      return { ...entry, slug };
    })
  );
  return posts
    .filter(Boolean)
    .sort((a, b) =>
      String(b.publishedAt || '').localeCompare(String(a.publishedAt || ''))
    );
}

// Lee un post con su body resuelto.
export async function getPostBySlug(slug) {
  const entry = await reader.collections.posts.read(slug);
  if (!entry) return null;
  const body = await entry.body();
  return { ...entry, slug, body };
}

// Formato de fecha legible en español.
export function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}
