import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, categoryLabel, formatDate } from '@/lib/posts';

export default async function HomeBlogSection() {
  const posts = await getAllPosts();
  if (!posts.length) return null;

  const [featured, ...rest] = posts;
  const cards = rest.slice(0, 2);

  return (
    <section className="home-blog reveal">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="eyebrow eyebrow-center">
            <span className="eyebrow-line" />
            <span className="eyebrow-ic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </span>{' '}
            Del blog{' '}
            <span className="eyebrow-line" />
          </span>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>Últimas reflexiones</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Artículos y recursos sobre psicología, sexualidad y bienestar emocional.
          </p>
        </div>

        {/* Post destacado */}
        <Link href={`/blog/${featured.slug}/`} className="hb-featured">
          <div className="hb-featured-image">
            {featured.heroImage
              ? <Image src={featured.heroImage} alt={featured.heroImageAlt || featured.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 55vw" />
              : <div className="hb-image-ph"><span>{featured.title?.[0] || '♡'}</span></div>
            }
          </div>
          <div className="hb-featured-content">
            <div className="hb-meta">
              <span className="hb-chip">{categoryLabel(featured.category)}</span>
              <span className="hb-date">{formatDate(featured.publishedAt)}</span>
            </div>
            <h3 className="hb-featured-title">{featured.title}</h3>
            {featured.excerpt && <p className="hb-excerpt">{featured.excerpt}</p>}
            <span className="hb-link">Leer artículo →</span>
          </div>
        </Link>

        {/* Cards secundarias */}
        {cards.length > 0 && (
          <div className="hb-cards">
            {cards.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`} className="hb-card">
                <div className="hb-card-image">
                  {p.heroImage
                    ? <Image src={p.heroImage} alt={p.heroImageAlt || ''} fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, 50vw" />
                    : <div className="hb-image-ph"><span>{p.title?.[0] || '♡'}</span></div>
                  }
                </div>
                <div className="hb-card-body">
                  <div className="hb-meta">
                    <span className="hb-chip">{categoryLabel(p.category)}</span>
                    <span className="hb-date">{formatDate(p.publishedAt)}</span>
                  </div>
                  <h3 className="hb-card-title">{p.title}</h3>
                  {p.excerpt && <p className="hb-card-excerpt">{p.excerpt}</p>}
                  <span className="hb-link">Leer más →</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <Link href="/blog/" className="hb-cta-btn">Ver todos los artículos</Link>
        </div>
      </div>
    </section>
  );
}
