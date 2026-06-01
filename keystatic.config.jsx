import { config, fields, collection } from '@keystatic/core';
import { wrapper, block } from '@keystatic/core/content-components';

// Categorías alineadas con los ejes de la web
const CATEGORIES = [
  { label: 'Relaciones y vínculos', value: 'relaciones-y-vinculos' },
  { label: 'Infanto-juvenil', value: 'infanto-juvenil' },
  { label: 'Trauma y apego', value: 'trauma-y-apego' },
  { label: 'Sexología', value: 'sexologia' },
  { label: 'Bienestar emocional', value: 'bienestar-emocional' },
  { label: 'Reflexiones', value: 'reflexiones' },
];

// Storage:
// - En desarrollo: local (escribe a /src/content/posts)
// - En producción con Keystatic Cloud: añadir KEYSTATIC_GITHUB_REPO y KEYSTATIC_STORAGE_KIND=github
//   más la app de Keystatic Cloud para OAuth + uploads.
const storage =
  process.env.KEYSTATIC_STORAGE_KIND === 'github' && process.env.KEYSTATIC_GITHUB_REPO
    ? { kind: 'github', repo: process.env.KEYSTATIC_GITHUB_REPO }
    : process.env.KEYSTATIC_STORAGE_KIND === 'cloud'
    ? { kind: 'cloud' }
    : { kind: 'local' };

export default config({
  storage,
  cloud: process.env.KEYSTATIC_CLOUD_PROJECT
    ? { project: process.env.KEYSTATIC_CLOUD_PROJECT }
    : undefined,
  ui: {
    brand: { name: 'Vincula Tu Mente · CMS' },
    navigation: {
      Contenido: ['posts'],
    },
  },
  collections: {
    posts: collection({
      label: 'Posts del blog',
      slugField: 'slug',
      path: 'src/content/posts/*/',
      format: { contentField: 'body' },
      entryLayout: 'content',
      columns: ['title', 'publishedAt'],
      schema: {
        title: fields.text({
          label: 'Título',
          validation: { isRequired: true },
        }),
        slug: fields.slug({
          name: {
            label: 'URL del post (slug)',
            description: 'Se genera automáticamente a partir del título; puedes editarlo.',
          },
        }),
        publishedAt: fields.date({
          label: 'Fecha de publicación',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: 'Categoría',
          options: CATEGORIES,
          defaultValue: 'bienestar-emocional',
        }),
        tags: fields.array(fields.text({ label: 'Etiqueta' }), {
          label: 'Etiquetas',
          itemLabel: (p) => p.value,
        }),
        featured: fields.checkbox({
          label: 'Destacar este post',
          description: 'Si lo activas, aparece en grande al principio del blog.',
        }),
        excerpt: fields.text({
          label: 'Resumen / entradilla',
          description: 'Texto breve para tarjetas y meta descripción (máx. ~200 caracteres).',
          multiline: true,
          validation: { length: { max: 240, min: 40 } },
        }),
        heroImage: fields.image({
          label: 'Imagen destacada',
          directory: 'public/media/blog',
          publicPath: '/media/blog/',
          description: 'Imagen principal del post (formato horizontal, mín. 1200×800).',
        }),
        heroImageAlt: fields.text({
          label: 'Texto alternativo de la imagen',
          description: 'Describe la imagen brevemente (accesibilidad y SEO).',
        }),
        body: fields.document({
          label: 'Contenido del post',
          formatting: {
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true,
              underline: true,
            },
            listTypes: { unordered: true, ordered: true },
            headingLevels: [2, 3],
            blockTypes: { blockquote: true },
            softBreaks: true,
            alignment: { center: true },
          },
          dividers: true,
          links: true,
          images: {
            directory: 'public/media/blog',
            publicPath: '/media/blog/',
            schema: {
              alt: fields.text({ label: 'Texto alternativo' }),
              title: fields.text({ label: 'Pie de foto (opcional)' }),
            },
          },
          componentBlocks: {
            callout: wrapper({
              label: 'Aviso / Callout',
              description: 'Bloque destacado para resaltar una idea importante.',
              schema: {
                tipo: fields.select({
                  label: 'Tipo',
                  options: [
                    { label: 'Info (lavanda suave)', value: 'info' },
                    { label: 'Importante (malva)', value: 'importante' },
                    { label: 'Urgente (recurso de ayuda)', value: 'urgente' },
                  ],
                  defaultValue: 'info',
                }),
                titulo: fields.text({ label: 'Título del aviso (opcional)' }),
              },
            }),
            mitosRealidad: block({
              label: 'Mitos vs. Realidad',
              description: 'Bloque de pares mito + realidad (como en tus posts de IG).',
              schema: {
                titulo: fields.text({
                  label: 'Título del bloque',
                  defaultValue: 'Mitos vs. Realidad',
                }),
                pares: fields.array(
                  fields.object({
                    mito: fields.text({ label: 'Mito', multiline: true }),
                    realidad: fields.text({ label: 'Realidad', multiline: true }),
                  }),
                  {
                    label: 'Pares',
                    itemLabel: (p) => p.fields.mito.value || 'Mito · Realidad',
                  }
                ),
              },
            }),
            cta: block({
              label: 'Llamada a la acción (CTA)',
              description: 'Caja malva con título, texto y botón.',
              schema: {
                titulo: fields.text({
                  label: 'Título',
                  defaultValue: '¿Empezamos a trabajarlo juntxs?',
                }),
                texto: fields.text({
                  label: 'Texto',
                  multiline: true,
                  defaultValue:
                    'Si esto te resuena, escríbeme sin compromiso. Te oriento en lo que necesites.',
                }),
                etiquetaBoton: fields.text({
                  label: 'Etiqueta del botón',
                  defaultValue: 'Reservar mi cita',
                }),
                enlace: fields.text({
                  label: 'Enlace del botón',
                  defaultValue: '/contacto',
                }),
              },
            }),
            cita: block({
              label: 'Cita destacada',
              description: 'Frase grande en serif, opcionalmente con autora.',
              schema: {
                texto: fields.text({ label: 'Cita', multiline: true }),
                autor: fields.text({ label: 'Autora (opcional)' }),
              },
            }),
            definicion: block({
              label: 'Definición / Glosario',
              description: 'Término + explicación corta.',
              schema: {
                termino: fields.text({ label: 'Término' }),
                explicacion: fields.text({ label: 'Explicación', multiline: true }),
              },
            }),
          },
        }),
        seoTitle: fields.text({
          label: 'SEO · Título (opcional)',
          description: 'Si lo dejas vacío, se usa el título del post.',
        }),
        seoDescription: fields.text({
          label: 'SEO · Descripción (opcional)',
          description: 'Si lo dejas vacío, se usa el resumen.',
          multiline: true,
        }),
      },
    }),
  },
});
