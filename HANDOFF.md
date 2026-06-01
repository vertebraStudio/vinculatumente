# Handoff — Vincula Tu Mente

Web profesional + blog con CMS para **María Villalba López**, psicóloga y sexóloga (Nº Col. **M-43581**), con consulta en **Alcalá de Henares** y atención **online en toda España**.

Branding: **Vincula Tu Mente** · `vinculatumente.es` (y `.com`) · IG/TikTok **@vinculatumente** · email **hola@vinculatumente.com** · tel **+34 604 80 72 00** · horario L-V 9-15, X 9-21.

## Stack

- **Next.js 16.2** (App Router) + **React 19**
- **JavaScript** (no TypeScript). El config de Keystatic está en `.jsx`.
- **CSS:** `globals.css` con variables + styled-jsx por componente.
- **Fuentes:** Playfair Display (títulos) + Poppins (texto). Cargadas con `<link>` en `<head>` de `src/app/layout.js` (el `@import` en CSS lo elimina Turbopack — importante recordar).
- **CMS:** [Keystatic](https://keystatic.com) (git-based, gratis) — `@keystatic/core` + `@keystatic/next` v0.5.50 / 5.0.4.
- **Despliegue recomendado:** Vercel o Netlify (free tier). NO GitHub Pages: necesita SSR/Node por las API routes de Keystatic. `output: 'export'` está quitado del `next.config.js`.

## Sistema de diseño

Paleta elegante/profesional (variables CSS en `globals.css`):
- `--primary` `#C9A8C5` — malva (botones, acentos)
- `--primary-light` `#F4EAF2` — lavanda muy clara (fondos)
- `--soft-primary` `#EAD9E8` — lavanda media
- `--accent` `#A87BA0` — malva oscuro (hover, énfasis)
- `--white` `#FFFFFF` · `--off-white` `#FAF8FA`
- `--text` `#1A1416` · `--text-muted` `#7A7078`

Motivo de marca: **eyebrow con corazón + líneas finas** en mayúsculas espaciadas malva, encima de los títulos Playfair. Por sección usamos iconos distintos (persona, birrete, corazón, escudo, chat, hoja), no siempre el corazón.

Lenguaje: **inclusivo con "x"** ("solx", "juntxs"), coherente con su Instagram.

Estructura visual de la home: hero asimétrico con foto en blob, sección oscura (suavizada) en lavanda, tarjetas blob para "Mi compromiso", iconos de línea en círculo lavanda, sin olas decorativas.

Footer: fondo malva (`var(--accent)`), texto en escala de blancos, sin línea superior, "Blog" añadido.

## Árbol del proyecto

```
vinculatumente/
├─ keystatic.config.jsx          ← schema del CMS + bloques editoriales
├─ next.config.js                ← SSR (sin output:export), trailingSlash, images unoptimized
├─ src/
│  ├─ app/
│  │  ├─ layout.js               ← metadata + JSON-LD Psychologist + <link> fuentes
│  │  ├─ page.js                 ← home
│  │  ├─ globals.css             ← variables, eyebrow, blob cards, post-body styles
│  │  ├─ contacto/
│  │  ├─ aviso-legal/
│  │  ├─ politica-privacidad/
│  │  ├─ politica-cookies/
│  │  ├─ terapias/
│  │  │  ├─ relaciones-y-vinculos/
│  │  │  ├─ infanto-juvenil/
│  │  │  ├─ trauma-y-apego/
│  │  │  └─ sexologia/
│  │  ├─ blog/
│  │  │  ├─ page.jsx             ← índice (featured + grid)
│  │  │  └─ [slug]/page.jsx      ← post (JSON-LD Article + relacionados)
│  │  ├─ keystatic/
│  │  │  ├─ layout.jsx           ← noindex, sin chrome del sitio
│  │  │  └─ [[...params]]/page.jsx  ← UI admin (catch-all)
│  │  ├─ api/keystatic/[...params]/route.js  ← handler de Keystatic
│  │  ├─ sitemap.js              ← sitemap.xml dinámico
│  │  ├─ robots.js               ← robots.txt
│  │  └─ feed.xml/route.js       ← RSS
│  ├─ components/
│  │  ├─ Header.js               ← logo circular + nav con Blog
│  │  ├─ Footer.js               ← malva, escala de blancos, Blog en menú
│  │  ├─ HomeHero.js             ← hero con blob, meta row, scroll cue
│  │  ├─ TherapyHero.js          ← banda compacta con clip-path líquido (SVG #therapyLiquidEdge)
│  │  ├─ TherapyBody.js          ← contenido + sidebar sticky de páginas de terapia
│  │  ├─ FAQ.js
│  │  ├─ WhatsAppButton.js       ← oculto en /keystatic
│  │  ├─ ScrollToTop.js          ← oculto en /keystatic
│  │  ├─ ScrollReveal.js
│  │  ├─ CookieBanner.js         ← oculto en /keystatic
│  │  └─ PostBody.jsx            ← renderer Keystatic con bloques custom
│  ├─ content/posts/             ← posts (cada uno en su carpeta con index.mdoc)
│  │  ├─ senales-empezar-terapia/index.mdoc
│  │  └─ mitos-sexualidad/index.mdoc
│  └─ lib/posts.js               ← reader Keystatic + helpers (CATEGORIES, formatDate)
└─ public/
   ├─ media/                     ← assets del sitio (Logo.jpeg + placeholders)
   └─ media/blog/                ← imágenes que sube Keystatic
```

## Schema del CMS (resumen)

Colección **posts** en `src/content/posts/*/` (folder por slug, `index.mdoc` con frontmatter YAML + body Markdoc).

Campos por post:
- `title` (req), `slug` (= nombre de carpeta), `publishedAt` (req)
- `category`: relaciones-y-vinculos · infanto-juvenil · trauma-y-apego · sexologia · bienestar-emocional · reflexiones
- `tags[]`, `featured` (boolean)
- `excerpt` (40–240 chars, sale como meta description)
- `heroImage` + `heroImageAlt`
- `body` (document field) — soporta H2/H3, listas, blockquote, negrita, cursiva, alineado center, divider, links, imágenes, **y bloques custom**:
  - `callout` (tipo info/importante/urgente) — wrapper
  - `mitosRealidad` (array de pares mito/realidad)
  - `cta` (titulo, texto, etiquetaBoton, enlace)
  - `cita` (texto, autor opcional)
  - `definicion` (termino, explicacion)
- `seoTitle`, `seoDescription` (overrides opcionales)

## Cómo ejecuta

```bash
cd vinculatumente
npm install
npm run dev          # http://localhost:3000
npm run build && npm start   # producción
```

URLs clave:
- `/` — home
- `/blog` — índice (vacío muestra empty state)
- `/blog/[slug]` — post
- `/keystatic` — admin del CMS (en dev: storage local)
- `/contacto`, `/terapias/[eje]`, `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`
- `/sitemap.xml`, `/robots.txt`, `/feed.xml`

## Estado actual

**Hecho**
- Sitio completo: home, 4 páginas de terapia, contacto, FAQ, legales.
- Sistema de diseño coherente y on-brand.
- Blog con CMS Keystatic funcional en dev (2 posts de muestra).
- SEO: metadata + JSON-LD `Psychologist` y `BlogPosting` + `BreadcrumbList`, sitemap, robots, RSS, OG + Twitter cards.
- Lenguaje inclusivo aplicado.
- Build de producción OK (16 rutas).

**Pendiente (necesita input/decisión)**
1. **Fotos reales**: los placeholders están marcados en hero, "Sobre mí", páginas de terapia, posts.
2. **Registro sanitario** en `/aviso-legal` (campo "Registro Sanitario") — pendiente de facilitar por la titular.
3. **Keystatic Cloud (gratis)** para producción:
   - Crear cuenta en https://keystatic.cloud
   - Crear proyecto vinculado al repo de GitHub.
   - Variables de entorno en el hosting:
     - `KEYSTATIC_STORAGE_KIND=cloud`
     - `KEYSTATIC_CLOUD_PROJECT=<team/proyecto>`
   - Esto habilita login para María (sin tocar GitHub) y subida de imágenes a través de Keystatic Cloud.
4. **Deploy**: Vercel/Netlify gratis. Conectar el repo, framework detect Next.js, add env vars de Keystatic Cloud. Webhook automático en cada push → rebuild → nueva publicación visible en ~2 min.
5. **Repo de GitHub**: aún no se ha hecho `git init` ni se ha publicado (el `.git` del boilerplate original no se copió).

## Decisiones de diseño que se han ido afinando (importante para contexto)

- Hero de páginas de terapia: foto **NO** como blob aislado; va integrada al fondo de la mitad derecha con **clip-path SVG curvo (líquido)** definido como `<clipPath id="therapyLiquidEdge">` en `TherapyHero.js`. Banda compacta, textos grandes.
- Tarjetas de "Mi compromiso" con **forma blob asimétrica** distinta por nth-child, sobre fondo lavanda claro (no oscuro).
- Logo del navbar: **círculo blanco con la M** a la izquierda del wordmark. El flex de `.logo-link` está marcado `:global` porque va en un `<Link>` y styled-jsx no scopea componentes.
- "¿Te identificas con alguna...?" usa **interrogación** (no check) en las chips.
- "¿Qué trabajamos en sesión?" usa **floret/petal SVG** (no números).
- Formación: iconos minimalistas en círculo lavanda (no 01/02/03).
- Footer: malva sólido + escala de blancos + sin línea superior.

## Gotchas a recordar

- **Fuentes**: Turbopack elimina `@import` remoto del CSS. Cargar con `<link>` en `<head>` (ya hecho en `layout.js`).
- **Styled-jsx y `<Link>`**: no aplica scope a componentes. Usar `:global(.clase)` para reglas que deban afectar a `<Link>` (ejemplo: `.logo-link` y `.ty-cta`).
- **Reader de Keystatic**: al combinar entry + slug, hacer `{ ...entry, slug }` (orden importa, porque entry contiene un slug vacío que sobrescribiría).
- **Path de la colección**: terminar en `/` (`src/content/posts/*/`) para que Keystatic use formato `[slug]/index.mdoc` (con assets en la misma carpeta).
- **Markdoc con component blocks complejos**: tener cuidado con arrays/objetos en atributos; en los posts de muestra los quité para evitar parsing issues. Los bloques funcionan bien cuando se editan desde el admin UI.
- **`/keystatic` y `/api/keystatic`**: rutas server (ƒ). Por eso quitamos `output: 'export'`.

## Comandos útiles

```bash
# Servidor desarrollo
npm run dev

# Build de producción
npm run build

# Lint
npm run lint
```

## Contacto del proyecto

- Cliente: María Villalba López (psicóloga y sexóloga, Nº Col. M-43581)
- Web: vinculatumente.es / .com
- Redes: @vinculatumente (IG + TikTok), LinkedIn villalba-maria
