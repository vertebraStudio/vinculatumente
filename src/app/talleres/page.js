import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Talleres y Formación | Vincula Tu Mente | María Villalba',
  description: 'Talleres y programas formativos para particulares, familias, centros educativos y empresas. Sexualidad, vínculos, salud mental, igualdad y bienestar emocional. María Villalba, psicóloga y sexóloga.',
  alternates: { canonical: 'https://vinculatumente.es/talleres' },
};

const perfiles = [
  {
    href: '/talleres/particulares',
    color: '#F4E9F1',
    accent: '#A87BA0',
    icon: '◎',
    eyebrow: 'Talleres para particulares',
    label: 'Para particulares',
    desc: 'Sesiones y talleres sobre terapia online, sexología, vínculos, trauma y bienestar emocional cotidiano.',
    tags: ['Terapia online', 'Sexología', 'Vínculos', 'Trauma', 'Bienestar emocional'],
  },
  {
    href: '/talleres/familias',
    color: '#EDE3F0',
    accent: '#8B6088',
    icon: '♡',
    eyebrow: 'Formación para familias',
    label: 'Para familias',
    desc: 'Formación sobre adolescencia, educación emocional, sexualidad, redes sociales y convivencia familiar.',
    tags: ['Adolescencia', 'Educación emocional', 'Sexualidad', 'Redes sociales', 'Convivencia'],
  },
  {
    href: '/talleres/centros-educativos',
    color: '#F8F0F7',
    accent: '#9B6E97',
    icon: '✦',
    eyebrow: 'Programas para centros',
    label: 'Para centros educativos',
    desc: 'Programas de educación afectivo-sexual, bullying, ansiedad académica, prevención digital y salud mental.',
    tags: ['Ed. afectivo-sexual', 'Bullying', 'Ansiedad académica', 'Prevención digital', 'Salud mental'],
  },
  {
    href: '/talleres/empresas',
    color: '#EDE8F2',
    accent: '#7A5580',
    icon: '⊙',
    eyebrow: 'Formación para organizaciones',
    label: 'Para empresas',
    desc: 'Talleres de burnout, prevención del acoso, igualdad, comunicación, liderazgo y bienestar laboral.',
    tags: ['Burnout', 'Acoso laboral', 'Igualdad', 'Liderazgo', 'Bienestar laboral'],
  },
];

export default function TalleresPage() {
  return (
    <>
      <Header solid={true} />
      <main className="fade-in">

        {/* HERO */}
        <section className="talleres-hero">
          <span className="talleres-blob" aria-hidden="true" />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
              <span className="eyebrow eyebrow-center">
                <span className="eyebrow-line" />
                <span className="eyebrow-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>{' '}
                Talleres y Formación{' '}
                <span className="eyebrow-line" />
              </span>
              <h1 className="talleres-hero-title">Formación para adolescentes, familias y entidades<br /><em>que quieren transformar realidades</em></h1>
              <p className="talleres-hero-lead">
                Talleres, charlas y programas formativos sobre sexualidad, vínculos, salud mental y cultura organizacional. Diseñados para empresas, centros educativos, entidades sociales y equipos profesionales.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link href="/contacto" className="btn-talleres-primary">Solicitar información</Link>
                <a href="#bloques" className="btn-talleres-ghost">Ver bloques temáticos ↓</a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO STRIP */}
        <section style={{ backgroundColor: 'var(--white)', padding: '60px 5%' }}>
          <div className="container">
            <div className="talleres-intro-grid">

              {/* Fila 1 — Formato flexible (ancho completo, horizontal) */}
              <div className="talleres-formato-card">
                <div className="talleres-formato-left">
                  <span className="talleres-intro-icon">✦</span>
                  <h3 className="talleres-intro-label">Formato flexible</h3>
                </div>
                <div className="talleres-formato-cols">
                  {[
                    ['Píldoras formativas', '1,5 – 2h'],
                    ['Talleres generales', '3 – 4h'],
                    ['Formaciones para empresas', '2h'],
                    ['Programas estructurados', 'paquete cerrado'],
                  ].map(([name, duration]) => (
                    <div key={name} className="talleres-formato-col">
                      <span className="talleres-formato-col-name">{name}</span>
                      <span className="talleres-formato-col-duration">{duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fila 2 — 3 tarjetas en fila */}
              <div className="talleres-intro-cards">
                {[
                  { icon: '◎', label: 'Contenido a medida', desc: 'Cada intervención se diseña según el perfil del grupo, el contexto y los objetivos.' },
                  { icon: '♡', label: 'Enfoque riguroso', desc: 'Basado en evidencia científica, perspectiva de género y psicología afirmativa.' },
                  { icon: '⊙', label: 'Presencial u online', desc: 'Talleres presenciales en centros educativos, empresas y entidades, con posibilidad de formato online o híbrido.' },
                ].map((item) => (
                  <div key={item.label} className="talleres-intro-item">
                    <span className="talleres-intro-icon">{item.icon}</span>
                    <h3 className="talleres-intro-label">{item.label}</h3>
                    <p className="talleres-intro-desc">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* PROPUESTAS FORMATIVAS — perfiles */}
        <section id="bloques" style={{ backgroundColor: 'var(--off-white)', padding: '80px 5% 100px' }}>
          <div className="container">
            <div className="talleres-section-header">
              <span className="eyebrow eyebrow-center">
                <span className="eyebrow-line" />Propuestas formativas<span className="eyebrow-line" />
              </span>
              <h2 className="talleres-section-title">Elige tu perfil</h2>
              <p className="talleres-section-sub">Cada propuesta está diseñada para un perfil concreto. Selecciona el tuyo para ver los talleres disponibles.</p>
            </div>

            <div className="talleres-perfiles-grid">
              {perfiles.map((p) => (
                <Link key={p.href} href={p.href} className="talleres-perfil-card" style={{ textDecoration: 'none' }}>
                  <div className="talleres-perfil-top" style={{ backgroundColor: p.color }}>
                    <span className="talleres-perfil-icon" style={{ color: p.accent }}>{p.icon}</span>
                    <span className="talleres-perfil-eyebrow" style={{ color: p.accent }}>{p.eyebrow}</span>
                    <h3 className="talleres-perfil-label">{p.label}</h3>
                  </div>
                  <div className="talleres-perfil-body">
                    <p className="talleres-perfil-desc">{p.desc}</p>
                    <div className="talleres-perfil-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="talleres-perfil-tag" style={{ color: p.accent, borderColor: `${p.accent}40` }}>{t}</span>
                      ))}
                    </div>
                    <span className="talleres-perfil-cta" style={{ color: p.accent }}>
                      Ver talleres →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: 'linear-gradient(135deg, var(--accent) 0%, #8B5E86 100%)', padding: '80px 5%', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '680px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', marginBottom: '16px' }}>
              ¿Quieres que diseñe un taller para tu organización?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '36px' }}>
              Cuéntame qué necesitáis — el contexto, el grupo y los objetivos — y te propongo un formato adaptado.
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
        .talleres-hero {
          position: relative;
          padding: 130px 5% 70px;
          overflow: hidden;
          background: linear-gradient(160deg, #F4E9F1 0%, #FBF7FB 70%);
        }
        .talleres-blob {
          position: absolute;
          width: 500px; height: 500px;
          top: -180px; right: -140px;
          border-radius: 50%;
          filter: blur(80px);
          background: radial-gradient(circle, rgba(201,168,197,0.4), rgba(201,168,197,0) 70%);
        }
        .talleres-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4vw, 3.4rem);
          color: var(--text);
          margin: 14px 0 16px;
          line-height: 1.12;
        }
        .talleres-hero-title em { font-style: italic; color: var(--accent); }
        .talleres-hero-lead {
          color: var(--text-muted);
          font-size: 1.08rem;
          line-height: 1.75;
          max-width: 640px;
          margin: 0 auto;
        }
        .btn-talleres-primary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 30px; background: var(--accent); color: #fff;
          border-radius: 50px; font-size: 0.8rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;
          box-shadow: 0 8px 22px rgba(168,123,160,0.32); transition: all 0.3s ease;
        }
        .btn-talleres-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(168,123,160,0.42); }
        .btn-talleres-ghost {
          display: inline-flex; align-items: center;
          padding: 14px 24px; color: var(--text);
          border-bottom: 1.5px solid var(--accent);
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; text-decoration: none; transition: color 0.25s ease;
        }
        .btn-talleres-ghost:hover { color: var(--accent); }

        .talleres-intro-grid {
          display: flex; flex-direction: column; gap: 16px;
        }
        /* Fila 1: Formato flexible horizontal */
        .talleres-formato-card {
          display: flex; align-items: center; gap: 0;
          padding: 28px 32px;
          background: var(--off-white); border-radius: 20px;
          border: 1px solid rgba(201,168,197,0.2);
        }
        .talleres-formato-left {
          display: flex; flex-direction: column; gap: 6px;
          flex-shrink: 0; min-width: 170px;
          padding-right: 32px;
          border-right: 1px solid rgba(201,168,197,0.25);
        }
        .talleres-formato-cols {
          flex: 1; display: flex; align-items: center;
        }
        .talleres-formato-col {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; gap: 8px;
          padding: 8px 20px;
          border-right: 1px solid rgba(201,168,197,0.2);
        }
        .talleres-formato-col:last-child { border-right: none; }
        .talleres-formato-col-name {
          font-size: 0.86rem; color: var(--text); font-weight: 500;
          text-align: center; line-height: 1.35;
        }
        .talleres-formato-col-duration {
          font-size: 0.82rem; color: var(--accent); font-weight: 600;
          white-space: nowrap;
        }
        /* Fila 2: 3 tarjetas en fila */
        .talleres-intro-cards {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
        }
        .talleres-intro-item {
          display: flex; flex-direction: column; gap: 10px; padding: 26px 24px;
          background: var(--off-white); border-radius: 20px;
          border: 1px solid rgba(201,168,197,0.2);
        }
        .talleres-intro-icon { font-size: 1.4rem; color: var(--accent); }
        .talleres-intro-label { font-family: 'Playfair Display', serif; font-size: 1.05rem; color: var(--text); margin: 0 0 4px; }
        .talleres-intro-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.55; margin: 0; }

        /* --- Propuestas formativas: perfiles --- */
        .talleres-section-header { text-align: center; margin-bottom: 56px; }
        .talleres-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          color: var(--text); margin: 12px 0 16px;
        }
        .talleres-section-sub {
          color: var(--text-muted); font-size: 1rem; line-height: 1.7;
          max-width: 540px; margin: 0 auto;
        }

        .talleres-perfiles-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .talleres-perfil-card {
          background: #fff; border-radius: 20px;
          border: 1px solid rgba(201,168,197,0.15);
          overflow: hidden; display: flex; flex-direction: column;
          box-shadow: 0 4px 20px rgba(168,123,160,0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .talleres-perfil-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 38px rgba(168,123,160,0.16);
        }
        .talleres-perfil-top {
          padding: 28px 28px 22px;
          display: flex; flex-direction: column; gap: 8px;
        }
        .talleres-perfil-icon { font-size: 1.6rem; }
        .talleres-perfil-eyebrow {
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
        }
        .talleres-perfil-label {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem; color: var(--text); margin: 0; line-height: 1.15;
        }
        .talleres-perfil-body {
          padding: 20px 28px 26px;
          display: flex; flex-direction: column; gap: 16px; flex: 1;
        }
        .talleres-perfil-desc {
          font-size: 0.9rem; color: var(--text-muted); line-height: 1.65; margin: 0;
        }
        .talleres-perfil-tags {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .talleres-perfil-tag {
          font-size: 0.73rem; font-weight: 600; padding: 3px 10px;
          border-radius: 50px; border: 1px solid; background: transparent;
        }
        .talleres-perfil-cta {
          font-size: 0.85rem; font-weight: 600; margin-top: auto;
          display: inline-flex; align-items: center; gap: 4px;
        }

        @media (max-width: 860px) {
          .talleres-perfiles-grid { grid-template-columns: 1fr; }
          .talleres-formato-card { flex-direction: column; align-items: flex-start; gap: 20px; }
          .talleres-formato-left { border-right: none; padding-right: 0; padding-bottom: 16px; border-bottom: 1px solid rgba(201,168,197,0.25); width: 100%; }
          .talleres-formato-cols { flex-wrap: wrap; width: 100%; }
          .talleres-formato-col { flex: 1 1 45%; border-right: none; padding: 10px 8px; border-bottom: 1px solid rgba(201,168,197,0.15); }
          .talleres-formato-col:nth-child(3), .talleres-formato-col:nth-child(4) { border-bottom: none; }
          .talleres-intro-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
