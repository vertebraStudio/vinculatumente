import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import WorkshopSection from '@/components/WorkshopSection';

// ============================================================
// WorkshopProfileBody — Layout compartido para páginas de talleres
// Props:
//   profile: { title, eyebrow, description, tagline, color, accent }
//   workshops: [{ name, audience, problem, takeaways[], duration, modality, price }]
// ============================================================

// workshopGroups: [{ theme: string, workshops: [] }]
// workshops: [] — array plano (retrocompatible, se envuelve en un grupo sin título)
export default function WorkshopProfileBody({ profile, workshops, workshopGroups }) {
  const { title, eyebrow, description, tagline, color, accent, photo, photoPosition = 'center', benefits } = profile;
  // Normalizar: si llega workshops plano, convertir a grupos sin título
  const groups = workshopGroups ?? (workshops ? [{ theme: null, workshops }] : []);

  return (
    <>
      <Header solid={true} />
      <main className="fade-in">

        {/* HERO SPLIT — foto derecha con borde líquido, igual que TherapyHero */}
        <section className="wkp-hero-split" style={{ background: `linear-gradient(150deg, ${color} 0%, #FBF7FB 70%)` }}>

          {/* Clip path diagonal — diferencia visualmente talleres de sesiones */}
          <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
            <defs>
              <clipPath id="wkpDiagonalEdge" clipPathUnits="objectBoundingBox">
                <path d="M0.22 0 L0.10 1 L1 1 L1 0 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Foto / placeholder derecho */}
          <div
            className="wkp-hero-photo"
            style={!photo ? { background: `linear-gradient(140deg, ${color} 0%, ${accent}cc 55%, ${accent} 100%)` } : undefined}
          >
            {photo && (
              <Image
                src={photo}
                alt={eyebrow}
                fill
                style={{ objectFit: 'cover', objectPosition: photoPosition }}
                sizes="(max-width: 900px) 90vw, 54vw"
                priority
              />
            )}
          </div>

          {/* Contenido izquierdo */}
          <div className="wkp-hero-inner">
            <div className="wkp-hero-left">
              <Link href="/talleres" className="wkp-back">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
                Todos los talleres
              </Link>
              <span className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</span>
              <h1 className="wkp-hero-title">{title}</h1>
              <p className="wkp-hero-desc">{description}</p>
              <div className="wkp-hero-ctas">
                <a
                  href="https://wa.me/34604807200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wkp-primary"
                >
                  Solicitar información
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS — Formatos + Metodología */}
        <section className="wkp-method">
          <div className="container">

            {/* Franja de formatos */}
            <div className="wkp-formats-bar">
              {[
                { label: 'Píldoras', time: '20 – 30 min' },
                { label: 'Talleres', time: '1,5 – 2 h' },
                { label: 'Formaciones', time: '3 – 4 h' },
                { label: 'Programas', time: 'Varias sesiones' },
              ].map((f, i) => (
                <div key={i} className="wkp-format-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent }}>
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>
                    <strong>{f.label}</strong>
                    <em>{f.time}</em>
                  </span>
                </div>
              ))}
            </div>

            {/* 3 pilares metodológicos */}
            <div className="wkp-method-grid">
              <div className="wkp-method-card">
                <div className="wkp-method-icon" style={{ background: `${accent}1a` }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="wkp-method-title">Dinámica y participativa</h3>
                <p className="wkp-method-desc">No es una charla pasiva. Dinámicas activas, reflexión grupal y casos prácticos adaptados a tu colectivo.</p>
              </div>
              <div className="wkp-method-card">
                <div className="wkp-method-icon" style={{ background: `${accent}1a` }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent }}>
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <h3 className="wkp-method-title">Herramientas aplicables</h3>
                <p className="wkp-method-desc">Todo lo que se aprende es útil desde el primer día: sin tecnicismos, con recursos reales y transferibles.</p>
              </div>
              <div className="wkp-method-card">
                <div className="wkp-method-icon" style={{ background: `${accent}1a` }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h3 className="wkp-method-title">Materiales incluidos</h3>
                <p className="wkp-method-desc">Guías psicoeducativas, dosiers y recursos de seguimiento adaptados a cada temática y perfil.</p>
              </div>
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

            <WorkshopSection groups={groups} accent={accent} color={color}>

              {/* TARJETA CONTACTO LATERAL */}
              <aside className="wkp-sidebar">
                <div className="wkp-contact-card">
                  <div className="wkp-card-header">
                    <Image src="/media/vinculatumenteLogo.jpg" alt="Vincula Tu Mente" width={54} height={54} className="wkp-avatar" />
                    <div>
                      <p className="wkp-card-name">María Villalba</p>
                      <p className="wkp-card-role">Psicóloga y sexóloga</p>
                    </div>
                  </div>
                  <div className="wkp-card-body">
                    <span className="wkp-card-col">Nº Colegiada M-43581</span>
                    <span className="wkp-card-col">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Alcalá de Henares · Online
                    </span>
                    <a href="tel:+34604807200" className="wkp-card-contact">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.59 19.79 19.79 0 0 1 1.83 4a2 2 0 0 1 2-1.92h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      +34 604 80 72 00
                    </a>
                    <a href="mailto:vinculatumente@gmail.com" className="wkp-card-contact">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <span className="wkp-card-mail">vinculatumente@gmail.com</span>
                    </a>
                    <Link href="/contacto" className="wkp-card-cta-btn">
                      Solicitar información →
                    </Link>
                    <p className="wkp-card-note">
                      {profile.note || 'Presencial en Alcalá de Henares y online en toda España.'}
                    </p>
                    <a href="https://www.instagram.com/vinculatumente/" target="_blank" rel="noopener noreferrer" className="wkp-card-ig">
                      @vinculatumente
                    </a>
                  </div>
                </div>
              </aside>

            </WorkshopSection>
          </div>
        </section>

        {/* BENEFICIOS */}
        {benefits && benefits.length > 0 && (
          <section className="wkp-benefits">
            <div className="container">
              <div className="wkp-benefits-inner">
                <span className="eyebrow eyebrow-center">
                  <span className="eyebrow-line" />Resultados<span className="eyebrow-line" />
                </span>
                <h2 className="wkp-benefits-title">Lo que cambia desde las primeras sesiones</h2>
                <div className="wkp-benefits-grid">
                  {benefits.map((b, i) => (
                    <div key={i} className="wkp-benefit-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent, flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA FINAL */}
        <section style={{ background: 'linear-gradient(135deg, var(--accent) 0%, #8B5E86 100%)', padding: '80px 5%', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#fff', marginBottom: '16px' }}>
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
        /* --- Hero Split --- */
        .wkp-hero-split {
          position: relative; width: 100%; overflow: hidden;
        }
        .wkp-hero-photo {
          position: absolute; top: 0; right: 0;
          height: 100%; width: 54%;
          clip-path: url(#wkpDiagonalEdge);
          z-index: 1;
        }
        .wkp-hero-inner {
          position: relative; z-index: 2;
          max-width: 1080px; margin: 0 auto;
          padding: 64px 40px 36px;
        }
        .wkp-hero-left {
          display: flex; flex-direction: column; gap: 8px;
          max-width: 500px;
        }
        .wkp-back {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.78rem; font-weight: 500; letter-spacing: 0.04em;
          color: var(--accent); text-decoration: none; width: fit-content;
          transition: color 0.2s;
        }
        .wkp-back:hover { color: var(--text); }
        .wkp-hero-title {
          font-family: var(--font-playfair), serif;
          font-size: clamp(1.6rem, 2.2vw, 2.1rem);
          color: var(--text); margin: 0; line-height: 1.15;
        }
        .wkp-hero-desc {
          color: var(--text-muted); font-size: 0.97rem; line-height: 1.65;
          max-width: 500px; margin: 2px 0 0;
        }
        .wkp-hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 6px; }
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
          font-family: var(--font-playfair), serif;
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
          border-radius: 22px; overflow: hidden;
          box-shadow: 0 20px 50px rgba(168,123,160,0.18);
          border: 1px solid rgba(201,168,197,0.22);
        }
        .wkp-card-header {
          background: linear-gradient(150deg, #C9A8C5 0%, #A87BA0 100%);
          padding: 26px 24px; display: flex; align-items: center; gap: 14px;
        }
        .wkp-avatar {
          width: 54px; height: 54px; border-radius: 50%; object-fit: cover;
          background: #fff; border: 2px solid rgba(255,255,255,0.7); flex-shrink: 0;
        }
        .wkp-card-name {
          font-family: var(--font-playfair), serif;
          font-size: 1.2rem; color: #fff; margin: 0; font-weight: 600;
        }
        .wkp-card-role {
          font-size: 0.82rem; color: rgba(255,255,255,0.85); margin: 2px 0 0;
        }
        .wkp-card-body {
          background: #fff; padding: 22px 24px 26px;
          display: flex; flex-direction: column; gap: 14px;
        }
        .wkp-card-col {
          font-size: 0.78rem; letter-spacing: 0.04em; color: var(--text-muted);
          padding-bottom: 6px; border-bottom: 1px solid rgba(201,168,197,0.2);
          display: flex; align-items: center; gap: 5px;
        }
        .wkp-card-contact {
          display: flex; align-items: center; gap: 12px;
          color: var(--text); font-size: 0.82rem; font-weight: 500;
          text-decoration: none; transition: color 0.2s ease;
        }
        .wkp-card-contact svg { color: var(--accent); flex-shrink: 0; }
        .wkp-card-contact:hover { color: var(--accent); }
        .wkp-card-mail { word-break: break-all; }
        .wkp-card-cta-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-top: 8px; padding: 14px 20px;
          background: var(--accent); color: #fff;
          border-radius: 50px; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
          transition: all 0.3s ease;
        }
        .wkp-card-cta-btn:hover { background: var(--primary); transform: translateY(-2px); box-shadow: 0 10px 24px rgba(168,123,160,0.3); }
        .wkp-card-note {
          font-size: 0.8rem; color: var(--text-muted); font-style: italic;
          line-height: 1.55; padding: 10px 14px; margin: 0;
          background: rgba(201,168,197,0.1); border-left: 2px solid rgba(168,123,160,0.35);
          border-radius: 0 8px 8px 0;
        }
        .wkp-card-ig {
          text-align: center; font-size: 0.85rem; color: var(--accent);
          text-decoration: none; font-weight: 500;
        }
        .wkp-card-ig:hover { text-decoration: underline; }

        /* --- Grupos temáticos (header/collapse viven en WorkshopGroup.js) --- */
        .workshop-groups { display: flex; flex-direction: column; }

        /* --- Workshop cards grid (estilos de tarjeta viven en WorkshopCard.js) --- */
        .workshop-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
        }

        @media (max-width: 1100px) {
          .wkp-layout { grid-template-columns: 1fr 260px; gap: 28px; }
        }
        /* --- Formatos + Metodología --- */
        .wkp-method {
          background: #fff;
          padding: 52px 5% 56px;
          border-bottom: 1px solid rgba(201,168,197,0.12);
        }
        .wkp-formats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-bottom: 44px; padding-bottom: 28px;
          border-bottom: 1px solid rgba(201,168,197,0.15);
        }
        .wkp-format-item {
          display: flex; align-items: center; gap: 9px;
          padding: 12px 20px;
          border-right: 1px solid rgba(201,168,197,0.22);
        }
        .wkp-format-item:last-child { border-right: none; }
        .wkp-format-item strong {
          display: block; font-size: 0.8rem; font-weight: 700;
          color: var(--text); line-height: 1.3;
        }
        .wkp-format-item em {
          display: block; font-size: 0.72rem; color: var(--text-muted);
          font-style: normal; line-height: 1.3;
        }
        .wkp-method-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px; max-width: 960px; margin: 0 auto;
        }
        .wkp-method-card {
          background: var(--off-white); border-radius: 16px;
          padding: 26px 22px; border: 1px solid rgba(201,168,197,0.12);
        }
        .wkp-method-icon {
          width: 42px; height: 42px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }
        .wkp-method-title {
          font-family: var(--font-playfair), serif; font-size: 1rem;
          color: var(--text); margin: 0 0 8px; font-weight: 600; font-style: italic;
        }
        .wkp-method-desc {
          font-size: 0.86rem; color: var(--text-muted); line-height: 1.65; margin: 0;
        }

        /* --- Beneficios --- */
        .wkp-benefits {
          background: var(--off-white);
          padding: 80px 5%;
          border-bottom: 1px solid rgba(201,168,197,0.12);
        }
        .wkp-benefits-inner {
          max-width: 820px; margin: 0 auto; text-align: center;
        }
        .wkp-benefits-title {
          font-family: var(--font-playfair), serif;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          color: var(--text); margin: 12px 0 40px;
        }
        .wkp-benefits-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 14px; text-align: left;
        }
        .wkp-benefit-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 16px 18px; background: #fff;
          border-radius: 12px; border: 1px solid rgba(201,168,197,0.18);
        }
        .wkp-benefit-item span {
          font-size: 0.88rem; color: var(--text); line-height: 1.55;
        }

        @media (max-width: 900px) {
          /* Hero split en móvil: foto encima, texto debajo */
          .wkp-hero-split { padding-top: 64px; display: flex; flex-direction: column; }
          .wkp-hero-photo {
            position: relative; top: auto; right: auto;
            width: 90%; max-width: 380px; height: 170px;
            margin: 0 auto; clip-path: none;
            border-radius: 12px;
          }
          .wkp-hero-inner { order: 2; padding: 20px 24px 36px; }
          .wkp-hero-left { max-width: 100%; gap: 0; }

          /* Back link como barra de navegación separada visualmente del eyebrow */
          .wkp-back {
            display: flex;
            padding-bottom: 16px;
            margin-bottom: 18px;
            border-bottom: 1px solid rgba(201,168,197,0.2);
            width: 100%;
          }

          /* Layout talleres */
          .wkp-layout { grid-template-columns: 1fr; }
          .wkp-sidebar { position: static; }
          .workshop-grid { grid-template-columns: 1fr; }

          /* Formatos: columna única para que todos los iconos queden alineados */
          .wkp-formats-bar { grid-template-columns: 1fr; padding-bottom: 20px; margin-bottom: 32px; }
          .wkp-format-item {
            padding: 11px 12px;
            border-right: none;
            border-bottom: 1px solid rgba(201,168,197,0.15);
            align-items: center;
          }
          .wkp-format-item:last-child { border-bottom: none; }
          /* en 1 col, todos los nth-child rules del desktop no aplican */
          .wkp-format-item:nth-child(odd)  { border-right: none; }
          .wkp-format-item:nth-child(3),
          .wkp-format-item:nth-child(4)    { border-bottom: 1px solid rgba(201,168,197,0.15); }
          .wkp-format-item:nth-child(4)    { border-bottom: none; }
          /* label y tiempo en la misma línea para que la lista sea compacta */
          .wkp-format-item strong { display: inline; }
          .wkp-format-item em     { display: inline; margin-left: 5px; color: var(--text-muted); }
          .wkp-format-item em::before { content: '·'; margin-right: 5px; opacity: 0.5; }

          .wkp-method-grid { grid-template-columns: 1fr; }
          /* Beneficios */
          .wkp-benefits-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
