import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostBody from '@/components/PostBody';
import {
  reader,
  getAllPosts,
  getPostBySlug,
  categoryLabel,
  formatDate,
} from '@/lib/posts';

const SITE_URL = 'https://vinculatumente.es';

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);
  if (!post) return { title: 'Post no encontrado | Vincula Tu Mente' };
  const title = post.seoTitle || `${post.title} | Vincula Tu Mente`;
  const description = post.seoDescription || post.excerpt || '';
  const url = `${SITE_URL}/blog/${slug}`;
  const image = post.heroImage ? `${SITE_URL}${post.heroImage}` : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: image ? [image] : undefined,
      publishedTime: post.publishedAt,
      authors: ['María Villalba'],
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const all = await getAllPosts();
  const related = all
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.seoDescription || '',
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: post.heroImage ? [`${SITE_URL}${post.heroImage}`] : undefined,
    articleSection: categoryLabel(post.category),
    keywords: (post.tags || []).join(', '),
    author: {
      '@type': 'Person',
      name: 'María Villalba',
      url: SITE_URL,
      jobTitle: 'Psicóloga y Sexóloga',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vincula Tu Mente',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/media/Logo.jpeg` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Header solid={true} />
      <main className="post-page fade-in">
        <article>
          <header className="post-hero">
            <span className="post-blob" aria-hidden="true" />
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
              <nav className="post-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Inicio</Link>
                <span>/</span>
                <Link href="/blog/">Blog</Link>
                <span>/</span>
                <span className="cur">{post.title}</span>
              </nav>
              <span className="post-chip">{categoryLabel(post.category)}</span>
              <h1 className="post-title">{post.title}</h1>
              {post.excerpt && <p className="post-lead">{post.excerpt}</p>}
              <div className="post-meta">
                <span>Por <strong>María Villalba</strong></span>
                <span className="dot">·</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
              {post.heroImage && (
                <div className="post-hero-image">
                  <img src={post.heroImage} alt={post.heroImageAlt || post.title} />
                </div>
              )}
            </div>
          </header>

          <section className="post-content">
            <div className="container">
              <div className="post-content-inner">
                <PostBody document={post.body} />

                {(post.tags && post.tags.length > 0) && (
                  <div className="post-tags">
                    {post.tags.map((t) => (
                      <span key={t} className="post-tag">#{t}</span>
                    ))}
                  </div>
                )}

                <div className="post-author-card">
                  <img src="/media/Logo.jpeg" alt="Vincula Tu Mente" className="pac-avatar" />
                  <div>
                    <p className="pac-name">María Villalba</p>
                    <p className="pac-role">Psicóloga y Sexóloga · Nº Col. M-43581</p>
                    <p className="pac-bio">
                      Acompaño en relaciones y vínculos, infanto-juvenil, trauma y apego y
                      sexología. Alcalá de Henares y online en toda España.
                    </p>
                    <Link href="/contacto/" className="pac-cta">Reservar mi cita →</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section className="post-related">
              <div className="container">
                <span className="eyebrow eyebrow-center">
                  <span className="eyebrow-line" />
                  <span className="eyebrow-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A3.5 3.5 0 0 0 12 5 3.5 3.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z" /></svg>
                  </span>{' '}
                  Sigue leyendo{' '}
                  <span className="eyebrow-line" />
                </span>
                <h2 className="post-related-title">Más sobre {categoryLabel(post.category)}</h2>
                <div className="post-related-grid">
                  {related.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}/`} className="post-related-card">
                      <div className="prc-image">
                        {p.heroImage ? <img src={p.heroImage} alt={p.heroImageAlt || ''} /> : <div className="prc-ph"><span>{p.title?.[0] || '♡'}</span></div>}
                      </div>
                      <div className="prc-body">
                        <span className="prc-date">{formatDate(p.publishedAt)}</span>
                        <h3>{p.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />

      <style>{`
        .post-hero { position: relative; padding: 130px 5% 40px; overflow: hidden; background: linear-gradient(160deg, #F4E9F1 0%, #FBF7FB 70%); }
        .post-blob { position: absolute; width: 460px; height: 460px; top: -160px; right: -120px; border-radius: 50%; filter: blur(80px); background: radial-gradient(circle, rgba(201,168,197,0.4), rgba(201,168,197,0) 70%); }
        .post-breadcrumb { font-size: 0.78rem; display: flex; gap: 8px; align-items: center; color: var(--text-muted); margin-bottom: 20px; flex-wrap: wrap; }
        .post-breadcrumb a { color: var(--accent); text-decoration: none; }
        .post-breadcrumb a:hover { text-decoration: underline; }
        .post-breadcrumb .cur { color: var(--text); }
        .post-chip { display: inline-block; padding: 6px 16px; border-radius: 50px; background: var(--primary-light); color: var(--accent); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 18px; }
        .post-title { font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 3.6vw, 3.4rem); line-height: 1.1; color: var(--text); margin: 0 0 18px; max-width: 820px; }
        .post-lead { font-size: 1.15rem; line-height: 1.6; color: var(--text-muted); max-width: 700px; margin: 0 0 22px; }
        .post-meta { display: flex; gap: 12px; align-items: center; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 30px; }
        .post-meta .dot { color: var(--primary); }
        .post-hero-image { margin-top: 24px; border-radius: 24px; overflow: hidden; box-shadow: 0 24px 50px rgba(168,123,160,0.22); }
        .post-hero-image img { width: 100%; display: block; max-height: 480px; object-fit: cover; }

        .post-content { padding: 60px 5% 80px; }
        .post-content-inner { max-width: 760px; margin: 0 auto; }
        .post-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(201,168,197,0.25); }
        .post-tag { font-size: 0.78rem; color: var(--accent); background: var(--primary-light); padding: 4px 12px; border-radius: 50px; }

        .post-author-card { margin-top: 50px; padding: 28px; background: #fff; border: 1px solid rgba(201,168,197,0.25); border-radius: 22px; display: grid; grid-template-columns: 72px 1fr; gap: 22px; align-items: start; box-shadow: 0 16px 36px rgba(168,123,160,0.12); }
        .pac-avatar { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; background: #fff; border: 1px solid rgba(168,123,160,0.25); }
        .pac-name { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 600; margin: 0 0 2px; color: var(--text); }
        .pac-role { font-size: 0.82rem; color: var(--accent); margin: 0 0 8px; font-weight: 500; }
        .pac-bio { font-size: 0.92rem; line-height: 1.6; color: var(--text-muted); margin: 0 0 14px; }
        .pac-cta { display: inline-flex; align-items: center; padding: 10px 22px; background: var(--accent); color: #fff !important; border-radius: 50px; font-size: 0.74rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none !important; transition: all 0.3s ease; }
        .pac-cta:hover { background: var(--primary); }

        .post-related { padding: 70px 5%; background: linear-gradient(180deg, #FBF7FB 0%, #F4EAF2 100%); }
        .post-related-title { font-family: 'Playfair Display', serif; font-size: 1.9rem; text-align: center; margin: 14px 0 36px; color: var(--text); }
        .post-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; max-width: 1080px; margin: 0 auto; }
        .post-related-card { background: #fff; border-radius: 18px; overflow: hidden; border: 1px solid rgba(201,168,197,0.25); text-decoration: none; color: inherit; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .post-related-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(168,123,160,0.16); }
        .prc-image { aspect-ratio: 16/10; background: linear-gradient(140deg, #EAD9E8, #C9A8C5); overflow: hidden; }
        .prc-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .prc-ph { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-family: 'Playfair Display', serif; font-size: 2.6rem; }
        .prc-body { padding: 18px 20px 22px; }
        .prc-date { font-size: 0.74rem; color: var(--text-muted); }
        .prc-body h3 { font-family: 'Playfair Display', serif; font-size: 1.1rem; line-height: 1.3; margin: 6px 0 0; color: var(--text); }

        @media (max-width: 900px) {
          .post-related-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .post-related-grid { grid-template-columns: 1fr; }
          .post-author-card { grid-template-columns: 1fr; text-align: left; }
          .pac-avatar { margin-bottom: 4px; }
        }
      `}</style>
    </>
  );
}
