import Link from 'next/link';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSearch from '@/components/BlogSearch';
import { getAllPosts, categoryLabel, formatDate } from '@/lib/posts';

function normalize(str) {
  return str?.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '') ?? '';
}

export const metadata = {
  title: 'Blog | Vincula Tu Mente | María Villalba',
  description:
    'Artículos y reflexiones sobre relaciones y vínculos, infanto-juvenil, trauma y apego, sexología y bienestar emocional, por María Villalba — psicóloga y sexóloga.',
  alternates: { canonical: 'https://vinculatumente.es/blog' },
  openGraph: {
    title: 'Blog | Vincula Tu Mente',
    description:
      'Artículos sobre psicología, sexología y bienestar emocional desde un enfoque cercano, riguroso e inclusivo.',
    url: 'https://vinculatumente.es/blog',
    type: 'website',
  },
};

export default async function BlogIndexPage({ searchParams }) {
  const query = normalize((await searchParams)?.q ?? '');
  const allPosts = await getAllPosts();

  const posts = query
    ? allPosts.filter((p) =>
        normalize(p.title).includes(query) ||
        normalize(p.excerpt).includes(query) ||
        normalize(categoryLabel(p.category)).includes(query) ||
        (p.tags || []).some((t) => normalize(t).includes(query))
      )
    : allPosts;

  const featured = !query && (posts.find((p) => p.featured) || posts[0]);
  const rest = featured ? posts.filter((p) => p.slug !== featured.slug) : posts;

  return (
    <>
      <Header solid={true} />
      <main className="blog-page fade-in">
        <section className="blog-hero">
          <span className="blog-blob" aria-hidden="true" />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow eyebrow-center">
                <span className="eyebrow-line" />
                <span className="eyebrow-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </span>{' '}
                Blog{' '}
                <span className="eyebrow-line" />
              </span>
            </div>
            <h1 className="blog-hero-title">Reflexiones, artículos y recursos</h1>
            <p className="blog-hero-lead">
              Espacio para hablar de salud mental, vínculos y sexualidad desde un
              enfoque cercano, riguroso y libre de juicios.
            </p>
            <Suspense>
              <BlogSearch defaultValue={(await searchParams)?.q ?? ''} />
            </Suspense>
          </div>
        </section>

        <section className="blog-grid-section">
          <div className="container">
            {posts.length === 0 ? (
              <div className="blog-empty">
                {query
                  ? <p>No hay artículos que coincidan con <strong>"{(await searchParams)?.q}"</strong>. Prueba con otra búsqueda.</p>
                  : <p>Pronto compartiré aquí los primeros artículos. Mientras tanto, puedes seguirme en <a href="https://www.instagram.com/vinculatumente/" target="_blank" rel="noopener noreferrer">@vinculatumente</a>.</p>
                }
              </div>
            ) : (
              <>
                {featured && (
                  <Link href={`/blog/${featured.slug}/`} className="blog-featured">
                    <div className="bf-image">
                      {featured.heroImage ? (
                        <img src={featured.heroImage} alt={featured.heroImageAlt || ''} />
                      ) : (
                        <div className="bf-image-ph">
                          <span>{featured.title?.[0] || '♡'}</span>
                        </div>
                      )}
                    </div>
                    <div className="bf-content">
                      <div className="bf-meta">
                        <span className="bf-chip">{categoryLabel(featured.category)}</span>
                        <span className="bf-date">{formatDate(featured.publishedAt)}</span>
                      </div>
                      <h2 className="bf-title">{featured.title}</h2>
                      <p className="bf-excerpt">{featured.excerpt}</p>
                      <span className="bf-link">Leer artículo →</span>
                    </div>
                  </Link>
                )}

                {rest.length > 0 && (
                  <div className="blog-grid">
                    {rest.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}/`} className="blog-card">
                        <div className="bc-image">
                          {p.heroImage ? (
                            <img src={p.heroImage} alt={p.heroImageAlt || ''} />
                          ) : (
                            <div className="bc-image-ph">
                              <span>{p.title?.[0] || '♡'}</span>
                            </div>
                          )}
                        </div>
                        <div className="bc-content">
                          <div className="bc-meta">
                            <span className="bc-chip">{categoryLabel(p.category)}</span>
                            <span className="bc-date">{formatDate(p.publishedAt)}</span>
                          </div>
                          <h3 className="bc-title">{p.title}</h3>
                          <p className="bc-excerpt">{p.excerpt}</p>
                          <span className="bc-link">Leer más →</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .blog-hero { position: relative; padding: 130px 5% 40px; overflow: hidden; background: linear-gradient(160deg, #F4E9F1 0%, #FBF7FB 70%); }
        .blog-blob { position: absolute; width: 460px; height: 460px; top: -160px; right: -120px; border-radius: 50%; filter: blur(80px); background: radial-gradient(circle, rgba(201,168,197,0.4), rgba(201,168,197,0) 70%); }
        .blog-hero-title { font-family: 'Playfair Display', serif; font-size: clamp(2.3rem, 3.4vw, 3.1rem); text-align: center; color: var(--text); margin: 14px 0 12px; line-height: 1.12; }
        .blog-hero-lead { text-align: center; max-width: 620px; margin: 0 auto; color: var(--text-muted); font-size: 1.05rem; line-height: 1.6; }

        .blog-grid-section { padding: 60px 5% 100px; }
        .blog-empty { text-align: center; padding: 80px 20px; color: var(--text-muted); }
        .blog-empty a { color: var(--accent); }

        .blog-featured { display: grid; grid-template-columns: 1.1fr 1fr; gap: 36px; align-items: stretch; padding: 22px; background: #fff; border: 1px solid rgba(201,168,197,0.25); border-radius: 24px; box-shadow: 0 16px 38px rgba(168,123,160,0.12); text-decoration: none; color: inherit; transition: transform 0.35s ease, box-shadow 0.35s ease; margin-bottom: 60px; }
        .blog-featured:hover { transform: translateY(-4px); box-shadow: 0 22px 50px rgba(168,123,160,0.2); }
        .bf-image { border-radius: 18px; overflow: hidden; aspect-ratio: 4/3; background: linear-gradient(140deg, #EAD9E8, #C9A8C5); }
        .bf-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bf-image-ph { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 5rem; color: rgba(255,255,255,0.6); }
        .bf-content { display: flex; flex-direction: column; justify-content: center; padding: 8px 4px 8px 0; }
        .bf-meta, .bc-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
        .bf-chip, .bc-chip { display: inline-block; padding: 4px 12px; border-radius: 50px; background: var(--primary-light); color: var(--accent); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
        .bf-date, .bc-date { font-size: 0.78rem; color: var(--text-muted); }
        .bf-title { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 2.4vw, 2.2rem); line-height: 1.18; margin: 0 0 14px; color: var(--text); }
        .bf-excerpt { color: var(--text-muted); margin: 0 0 16px; line-height: 1.65; }
        .bf-link, .bc-link { color: var(--accent); font-weight: 600; font-size: 0.86rem; letter-spacing: 0.04em; }

        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .blog-card { display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(201,168,197,0.25); border-radius: 20px; overflow: hidden; text-decoration: none; color: inherit; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .blog-card:hover { transform: translateY(-5px); box-shadow: 0 18px 38px rgba(168,123,160,0.16); }
        .bc-image { aspect-ratio: 16/10; overflow: hidden; background: linear-gradient(140deg, #EAD9E8, #C9A8C5); }
        .bc-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bc-image-ph { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 3rem; color: rgba(255,255,255,0.6); }
        .bc-content { padding: 22px 22px 26px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .bc-title { font-family: 'Playfair Display', serif; font-size: 1.18rem; line-height: 1.3; color: var(--text); margin: 0; }
        .bc-excerpt { color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0; flex: 1; }
        .bc-link { margin-top: 6px; }

        @media (max-width: 900px) {
          .blog-featured { grid-template-columns: 1fr; gap: 20px; }
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
