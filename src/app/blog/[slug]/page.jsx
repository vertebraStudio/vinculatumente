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
  const others = all.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  // Si hay suficientes del mismo eje, usamos esos; si no, completamos con recientes
  const related = sameCategory.length >= 2
    ? sameCategory.slice(0, 3)
    : [...sameCategory, ...others.filter((p) => p.category !== post.category)]
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
              <div className="post-hero-inner" style={post.heroImage ? { display:'grid', gridTemplateColumns:'1fr 380px', gap:'52px', alignItems:'center' } : undefined}>
                <div className="post-hero-text">
                  <span className="post-chip">{categoryLabel(post.category)}</span>
                  <h1 className="post-title">{post.title}</h1>
                  {post.excerpt && <p className="post-lead">{post.excerpt}</p>}
                  <div className="post-meta">
                    <span>Por <strong>María Villalba</strong></span>
                    <span className="dot">·</span>
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  </div>
                </div>
                {post.heroImage && (
                  <div className="post-hero-image">
                    <img src={post.heroImage} alt={post.heroImageAlt || post.title} />
                  </div>
                )}
              </div>
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
                <h2 className="post-related-title">
                  {sameCategory.length >= 2
                    ? `Más sobre ${categoryLabel(post.category)}`
                    : 'También te puede interesar'}
                </h2>
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

      {/* Estilos en globals.css */}
    </>
  );
}
