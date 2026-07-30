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
// Si el contenido tiene un formato que Keystatic no puede convertir (p. ej.
// una lista "suelta" pegada desde Word/Docs con líneas en blanco entre
// viñetas), body() lanza un error. Sin este try/catch, ese único post
// tumbaba el build entero de Vercel y ninguna página se publicaba — con él,
// solo ese post queda como "no encontrado" hasta que se corrija el
// contenido, y el resto del sitio se despliega con normalidad.
export async function getPostBySlug(slug) {
  const entry = await reader.collections.posts.read(slug);
  if (!entry) return null;
  try {
    const body = await entry.body();
    return { ...entry, slug, body };
  } catch (err) {
    console.error(`[posts] No se pudo renderizar el post "${slug}":`, err.message);
    return null;
  }
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
