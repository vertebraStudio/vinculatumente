import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// ============================================================
// WorkshopProfileBody — Layout compartido para páginas de talleres
// Props:
//   profile: { title, eyebrow, description, tagline, color, accent }
//   workshops: [{ name, audience, problem, takeaways[], duration, modality, price }]
// ============================================================

export default function WorkshopProfileBody({ profile, workshops }) {
  const { title, eyebrow, description, tagline, color, accent } = profile;

  return (
    <>
      <Header solid={true} />
      <main className="fade-in">

        {/* HERO */}
        <section className="wkp-hero" style={{ background: `linear-gradient(160deg, ${color} 0%, #FBF7FB 70%)` }}>
          <span className="wkp-blob" aria-hidden="true" style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }} />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <Link href="/talleres" className="wkp-back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
              Todos los talleres
            </Link>
            <span className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</span>
            <h1 className="wkp-hero-title">{title}</h1>
            <p className="wkp-hero-desc">{description}</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/34604807200"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wkp-primary"
              >
                Solicitar información
              </a>
              <Link href="/contacto" className="btn-wkp-ghost">
                Formulario de contacto
              </Link>
            </div>
          </div>
        </section>

        {/* TALLERES */}
        <section style={{ backgroundColor: 'var(--off-white)', padding: '80px 5% 100px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span className="eyebrow eyebrow-center">
                <span className="eyebrow-line" />Talleres disponibles<span className="eyebrow-line" />
              </span>
              <h2 className="wkp-section-title">{tagline}</h2>
            </div>

            <div className="workshop-grid">
              {workshops.map((w, i) => {
                const waUrl = `https://wa.me/34604807200?text=${encodeURIComponent(`Hola, me interesa el taller "${w.name}"`)}`;
                return (
                  <article key={i} className="workshop-card" style={{ borderTop: `3px solid ${accent}` }}>

                    <div className="workshop-card-top">
                      <h3 className="workshop-name">{w.name}</h3>
                      <span className="workshop-chip" style={{ color: accent, background: `${color}` }}>
                        {w.audience}
                      </span>
                    </div>

                    <div className="workshop-block">
                      <p className="workshop-label">Qué problema resuelve</p>
                      <p className="workshop-problem">{w.problem}</p>
                    </div>

                    <div className="workshop-block">
                      <p className="workshop-label">Qué se llevan los asistentes</p>
                      <ul className="workshop-takeaways">
                        {w.takeaways.map((t, j) => <li key={j}>{t}</li>)}
                      </ul>
                    </div>

                    <div className="workshop-meta">
                      <span className="workshop-meta-chip">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {w.duration}
                      </span>
                      <span className="workshop-meta-chip">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {w.modality}
                      </span>
                      <span className="workshop-meta-chip" style={{ color: accent, borderColor: `${accent}40`, background: color }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        {w.price}
                      </span>
                    </div>

                    <div className="workshop-cta-wrap">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-workshop"
                        style={{ background: accent }}
                      >
                        Solicitar este taller
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                      </a>
                    </div>

                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: 'linear-gradient(135deg, var(--accent) 0%, #8B5E86 100%)', padding: '80px 5%', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#fff', marginBottom: '16px' }}>
              ¿Quieres un formato a medida?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '32px' }}>
              Cuéntame el contexto, el grupo y los objetivos. Te propongo un taller adaptado.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/34604807200"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', backgroundColor: '#25D366', color: '#fff', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 8px 20px rgba(37,211,102,0.35)' }}
              >
                WhatsApp
              </a>
              <Link
                href="/contacto"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                Formulario de contacto
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* --- Hero --- */
        .wkp-hero {
          padding: 130px 5% 72px;
          position: relative; overflow: hidden;
        }
        .wkp-blob {
          position: absolute; width: 480px; height: 480px;
          top: -180px; right: -120px; border-radius: 50%;
          filter: blur(80px); pointer-events: none;
        }
        .wkp-back {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.75rem; font-weight: 600; color: var(--text-muted);
          text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 26px; transition: color 0.2s;
        }
        .wkp-back:hover { color: var(--accent); }
        .wkp-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: var(--text); margin: 14px 0 18px; line-height: 1.1;
        }
        .wkp-hero-desc {
          color: var(--text-muted); font-size: 1.05rem; line-height: 1.75;
          max-width: 620px; margin: 0 0 30px;
        }
        .btn-wkp-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; background: var(--accent); color: #fff;
          border-radius: 50px; font-size: 0.8rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;
          box-shadow: 0 8px 22px rgba(168,123,160,0.3); transition: all 0.3s ease;
        }
        .btn-wkp-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(168,123,160,0.42); }
        .btn-wkp-ghost {
          display: inline-flex; align-items: center;
          padding: 13px 24px; color: var(--text);
          border-bottom: 1.5px solid var(--accent);
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; text-decoration: none; transition: color 0.25s;
        }
        .btn-wkp-ghost:hover { color: var(--accent); }

        /* --- Section heading --- */
        .wkp-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem); color: var(--text); margin: 12px 0 0;
        }

        /* --- Workshop cards --- */
        .workshop-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
        }
        .workshop-card {
          background: #fff; border-radius: 16px;
          border: 1px solid rgba(201,168,197,0.15);
          overflow: hidden; display: flex; flex-direction: column;
          box-shadow: 0 4px 18px rgba(168,123,160,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .workshop-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(168,123,160,0.14);
        }
        .workshop-card-top { padding: 22px 24px 16px; }
        .workshop-name {
          font-family: 'Playfair Display', serif; font-size: 1.15rem;
          color: var(--text); margin: 0 0 10px; line-height: 1.25;
        }
        .workshop-chip {
          font-size: 0.75rem; font-weight: 600; padding: 4px 12px;
          border-radius: 50px; display: inline-block;
        }
        .workshop-block {
          padding: 14px 24px;
          border-top: 1px solid rgba(201,168,197,0.1);
        }
        .workshop-label {
          font-size: 0.67rem; text-transform: uppercase; letter-spacing: 0.12em;
          font-weight: 700; color: var(--text-muted); margin: 0 0 6px;
        }
        .workshop-problem {
          font-size: 0.86rem; color: var(--text-muted); line-height: 1.65;
          margin: 0; font-style: italic;
        }
        .workshop-takeaways {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 5px;
        }
        .workshop-takeaways li {
          font-size: 0.86rem; color: var(--text);
          padding-left: 20px; position: relative; line-height: 1.5;
        }
        .workshop-takeaways li::before {
          content: '✓'; position: absolute; left: 0;
          color: var(--accent); font-size: 0.75rem; font-weight: 700;
        }
        .workshop-meta {
          padding: 14px 24px; border-top: 1px solid rgba(201,168,197,0.1);
          display: flex; gap: 8px; flex-wrap: wrap;
        }
        .workshop-meta-chip {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.77rem; color: var(--text); background: var(--off-white);
          padding: 4px 11px; border-radius: 50px;
          border: 1px solid rgba(201,168,197,0.2);
        }
        .workshop-cta-wrap {
          padding: 16px 24px 22px; margin-top: auto;
          border-top: 1px solid rgba(201,168,197,0.08);
        }
        .btn-workshop {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 22px; color: #fff; border-radius: 50px;
          font-size: 0.78rem; font-weight: 600; text-decoration: none;
          letter-spacing: 0.06em; text-transform: uppercase;
          transition: all 0.25s ease; box-shadow: 0 6px 16px rgba(168,123,160,0.22);
        }
        .btn-workshop:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(168,123,160,0.34);
          filter: brightness(1.06);
        }

        @media (max-width: 900px) {
          .workshop-grid { grid-template-columns: 1fr; }
          .wkp-hero { padding: 110px 5% 56px; }
        }
      `}</style>
    </>
  );
}
