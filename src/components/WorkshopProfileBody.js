import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import WorkshopCard from '@/components/WorkshopCard';

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

            <div className="wkp-layout">
            <div className="workshop-grid">
              {workshops.map((w, i) => (
                <WorkshopCard key={i} workshop={w} accent={accent} color={color} />
              ))}
            </div>{/* /workshop-grid */}

            {/* TARJETA CONTACTO LATERAL */}
            <aside className="wkp-sidebar">
              <div className="wkp-contact-card">
                <div className="wkp-card-header" style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)` }}>
                  <div className="wkp-card-logo">
                    <img src="/media/vinculatumenteLogo.jpg" alt="Vincula Tu Mente" />
                  </div>
                  <div>
                    <p className="wkp-card-name">María Villalba</p>
                    <p className="wkp-card-role">Psicóloga y sexóloga</p>
                  </div>
                </div>
                <div className="wkp-card-body">
                  <p className="wkp-card-row wkp-card-colegiada">Nº Colegiada M-43581</p>
                  <p className="wkp-card-row wkp-card-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Alcalá de Henares · Online
                  </p>
                  <a href="tel:+34604807200" className="wkp-card-contact">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.59 19.79 19.79 0 0 1 1.83 4a2 2 0 0 1 2-1.92h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    +34 604 80 72 00
                  </a>
                  <a href="mailto:vinculatumente@gmail.com" className="wkp-card-contact">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    vinculatumente@gmail.com
                  </a>
                  <a href="/contacto" className="wkp-card-cta-btn" style={{ background: accent }}>
                    Solicitar información →
                  </a>
                  <p className="wkp-card-note" style={{ borderLeftColor: `${accent}50` }}>
                    {profile.note || 'Presencial en Alcalá de Henares y online en toda España.'}
                  </p>
                  <a href="https://www.instagram.com/vinculatumente/" target="_blank" rel="noopener noreferrer" className="wkp-card-ig" style={{ color: accent }}>
                    @vinculatumente
                  </a>
                </div>
              </div>
            </aside>

            </div>{/* /wkp-layout */}
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

        /* --- Layout con sidebar --- */
        .wkp-layout {
          display: grid;
          grid-template-columns: 1fr 290px;
          gap: 40px;
          align-items: start;
        }
        .wkp-sidebar {
          position: sticky;
          top: 100px;
        }

        /* --- Tarjeta de contacto --- */
        .wkp-contact-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(201,168,197,0.2);
          box-shadow: 0 8px 32px rgba(168,123,160,0.12);
        }
        .wkp-card-header {
          padding: 24px 22px;
          display: flex; align-items: center; gap: 16px;
        }
        .wkp-card-logo {
          width: 60px; height: 60px; border-radius: 50%;
          overflow: hidden; background: #fff; flex-shrink: 0;
          border: 2.5px solid rgba(255,255,255,0.8);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex; align-items: center; justify-content: center;
        }
        .wkp-card-logo img { width: 82%; height: 82%; object-fit: contain; }
        .wkp-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem; color: #fff; margin: 0 0 2px; font-weight: 600;
        }
        .wkp-card-role {
          font-size: 0.82rem; color: rgba(255,255,255,0.82);
          margin: 0; font-style: italic;
        }
        .wkp-card-body {
          padding: 20px 22px 22px;
          display: flex; flex-direction: column; gap: 0;
        }
        .wkp-card-row {
          font-size: 0.82rem; color: var(--text-muted);
          padding: 12px 0; border-bottom: 1px solid rgba(201,168,197,0.18);
          margin: 0; display: flex; align-items: center; gap: 8px;
        }
        .wkp-card-colegiada { font-size: 0.8rem; }
        .wkp-card-contact {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 0; border-bottom: 1px solid rgba(201,168,197,0.18);
          font-size: 0.88rem; font-weight: 700; color: var(--text);
          text-decoration: none; transition: color 0.2s;
        }
        .wkp-card-contact:hover { color: var(--accent); }
        .wkp-card-contact svg { color: var(--accent); flex-shrink: 0; }
        .wkp-card-cta-btn {
          display: block; text-align: center;
          margin: 18px 0 0; padding: 14px;
          color: #fff; border-radius: 50px;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 6px 18px rgba(168,123,160,0.28);
          transition: all 0.25s ease;
        }
        .wkp-card-cta-btn:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .wkp-card-note {
          font-size: 0.8rem; color: var(--text-muted); font-style: italic;
          line-height: 1.55; margin: 14px 0 0;
          padding: 10px 12px;
          background: rgba(201,168,197,0.08);
          border-left: 2px solid;
          border-radius: 0 8px 8px 0;
        }
        .wkp-card-ig {
          display: block; text-align: center;
          font-size: 0.82rem; font-weight: 600;
          margin-top: 16px; text-decoration: none;
          transition: opacity 0.2s;
        }
        .wkp-card-ig:hover { opacity: 0.75; }

        /* --- Workshop cards grid (estilos de tarjeta viven en WorkshopCard.js) --- */
        .workshop-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
        }

        @media (max-width: 1100px) {
          .wkp-layout { grid-template-columns: 1fr 260px; gap: 28px; }
        }
        @media (max-width: 900px) {
          .wkp-layout { grid-template-columns: 1fr; }
          .wkp-sidebar { position: static; }
          .workshop-grid { grid-template-columns: 1fr; }
          .wkp-hero { padding: 110px 5% 56px; }
        }
      `}</style>
    </>
  );
}
