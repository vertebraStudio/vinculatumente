import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Talleres y Formación | Vincula Tu Mente | María Villalba',
  description:
    'Talleres y formación especializada en sexualidad, vínculos, salud mental y cultura organizacional para empresas, centros educativos y entidades. María Villalba, psicóloga y sexóloga.',
  alternates: { canonical: 'https://vinculatumente.es/talleres' },
};

const categories = [
  {
    id: 'sexualidad',
    eyebrow: 'Bloque 1',
    title: 'Sexualidad, Vínculos y Diversidad',
    lead: 'Formación especializada para profesionales, jóvenes, familias y población general sobre relaciones sanas, diversidad sexual y afectiva, y bienestar relacional.',
    color: '#F4E9F1',
    accent: '#A87BA0',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    workshops: [
      { title: 'Vínculos sanos: superando celos e infidelidades', audience: 'Parejas y personas en relaciones vinculares' },
      { title: 'Sexualidad positiva y bienestar sexual', audience: 'Personas adultas y adolescentes' },
      { title: 'Consentimiento, límites y deseo', audience: 'Jóvenes y adultos' },
      { title: 'Psicología afirmativa LGTBI+: diversidad en la consulta', audience: 'Personas adultas y adolescentes' },
      { title: 'Prevención del abuso sexual infantil (ASI): guía para familias', audience: 'Padres, madres y educadores' },
      { title: 'Prevención combinada del VIH y sexualidad informada', audience: 'Jóvenes y adultos' },
    ],
  },
  {
    id: 'empresas',
    eyebrow: 'Bloque 2',
    title: 'Empresas, Igualdad y Cultura Organizacional',
    lead: 'Programas para equipos, directivos y departamentos de RRHH orientados a mejorar el clima laboral, la igualdad y el bienestar psicosocial en el trabajo.',
    color: '#EDE3F0',
    accent: '#8B6088',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12.01" />
      </svg>
    ),
    workshops: [
      { title: 'Implementación práctica de planes de igualdad', audience: 'Directivos, RRHH y mandos intermedios' },
      { title: 'Prevención del acoso y micromachismos en el trabajo', audience: 'Plantillas completas (B2B)' },
      { title: 'Comunicación efectiva y negociación en el entorno laboral', audience: 'Equipos profesionales y de gestión' },
      { title: 'Liderazgo emocionalmente inteligente', audience: 'Mandos intermedios y directivos' },
      { title: 'Salud mental y bienestar laboral: mindfulness y work-life balance', audience: 'Empleados con alta carga de estrés' },
      { title: 'Diversidad LGTBI+ en la empresa', audience: 'Empresas y RRHH' },
    ],
  },
  {
    id: 'salud-mental',
    eyebrow: 'Bloque 3',
    title: 'Salud Mental, Trauma y Diversos Contextos',
    lead: 'Intervenciones psicoeducativas y de prevención para profesionales sanitarios, docentes, familias y población general en contextos de alta vulnerabilidad.',
    color: '#F8F0F7',
    accent: '#9B6E97',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    workshops: [
      { title: 'Prevención del suicidio y autolesiones: empoderamiento social', audience: 'Atención primaria, docentes, familias' },
      { title: 'Salud mental y regulación emocional', audience: 'Población general' },
      { title: 'Trastornos de la conducta alimentaria: detección temprana', audience: 'Familias y profesionales' },
      { title: 'Protocolo de detección de violencia de género', audience: 'Profesionales sociosanitarios y de seguridad' },
      { title: 'Maternidad y salud mental: acompañamiento en riesgo', audience: 'Madres, gestantes y profesionales sanitarios' },
      { title: 'Psicoeducación en trastornos psicóticos', audience: 'Familias y cuidadores' },
    ],
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
              {[
                {
                  icon: '✦', label: 'Formato flexible',
                  desc: (
                    <>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' }}>
                        {[
                          ['Píldoras formativas', '1,5 – 2h'],
                          ['Talleres generales', '3 – 4h'],
                          ['Formaciones para empresas', '2h'],
                          ['Programas estructurados', 'paquete cerrado'],
                        ].map(([name, duration]) => (
                          <li key={name} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)', borderBottom: '1px solid rgba(201,168,197,0.2)', paddingBottom: '8px', paddingTop: '8px' }}>
                            <span style={{ fontWeight: 500, color: 'var(--text)' }}>{name}</span>
                            <span style={{ whiteSpace: 'nowrap', color: 'var(--accent)', fontWeight: 600 }}>{duration}</span>
                          </li>
                        ))}
                      </ul>
                      <p style={{ margin: 0, fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--text-muted)', paddingTop: '4px' }}>
                        Cada formato se adapta al grupo, al contexto y a los objetivos. Cuéntame qué necesitas y lo diseñamos juntas.
                      </p>
                    </>
                  )
                },
                { icon: '◎', label: 'Contenido a medida', desc: 'Cada intervención se diseña según el perfil del grupo, el contexto y los objetivos.' },
                { icon: '♡', label: 'Enfoque riguroso', desc: 'Basado en evidencia científica, perspectiva de género y psicología afirmativa.' },
                { icon: '⊙', label: 'Presencial u online', desc: 'Talleres presenciales en centros educativos, empresas y entidades, con posibilidad de formato online o híbrido.' },
              ].map((item) => (
                <div key={item.label} className="talleres-intro-item">
                  <span className="talleres-intro-icon">{item.icon}</span>
                  <h3 className="talleres-intro-label">{item.label}</h3>
                  <div className="talleres-intro-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOQUES TEMÁTICOS */}
        <section id="bloques" style={{ backgroundColor: 'var(--off-white)', padding: '80px 5% 100px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="eyebrow eyebrow-center">
                <span className="eyebrow-line" />Bloques temáticos<span className="eyebrow-line" />
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--text)', margin: '12px 0 0' }}>
                Propuestas formativas
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
              {categories.map((cat, idx) => (
                <div key={cat.id} id={cat.id} className={`talleres-block ${idx % 2 === 1 ? 'talleres-block--reverse' : ''}`}>
                  <div className="talleres-block-header" style={{ backgroundColor: cat.color }}>
                    <span className="talleres-block-icon" style={{ color: cat.accent }}>{cat.icon}</span>
                    <span className="talleres-block-eyebrow" style={{ color: cat.accent }}>{cat.eyebrow}</span>
                    <h2 className="talleres-block-title">{cat.title}</h2>
                    <p className="talleres-block-lead">{cat.lead}</p>
                  </div>
                  <div className="talleres-block-list">
                    {cat.workshops.map((w) => (
                      <div key={w.title} className="talleres-item">
                        <div className="talleres-item-dot" style={{ backgroundColor: cat.accent }} />
                        <div>
                          <p className="talleres-item-title">{w.title}</p>
                          <p className="talleres-item-audience">{w.audience}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          grid-template-rows: repeat(3, 1fr);
          gap: 16px;
        }
        .talleres-intro-item {
          display: flex; flex-direction: column; gap: 10px; padding: 26px 24px;
          background: var(--off-white); border-radius: 20px;
          border: 1px solid rgba(201,168,197,0.2);
        }
        .talleres-intro-item:first-child {
          grid-row: 1 / 4;
          justify-content: space-between;
          padding: 32px 32px;
        }
        .talleres-intro-icon { font-size: 1.4rem; color: var(--accent); }
        .talleres-intro-label { font-family: 'Playfair Display', serif; font-size: 1.05rem; color: var(--text); margin: 0; }
        .talleres-intro-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.55; margin: 0; }

        .talleres-block {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(168,123,160,0.1);
        }
        .talleres-block--reverse { direction: rtl; }
        .talleres-block--reverse > * { direction: ltr; }

        .talleres-block-header {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 12px;
          justify-content: center;
        }
        .talleres-block-icon { display: flex; }
        .talleres-block-eyebrow {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
        }
        .talleres-block-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 2vw, 1.9rem);
          color: var(--text); margin: 0; line-height: 1.2;
        }
        .talleres-block-lead {
          font-size: 0.95rem; color: var(--text-muted);
          line-height: 1.65; margin: 0;
        }

        .talleres-block-list {
          background: #fff;
          padding: 32px 36px;
          display: flex; flex-direction: column; gap: 0;
        }
        .talleres-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(201,168,197,0.15);
        }
        .talleres-item:last-child { border-bottom: none; }
        .talleres-item-dot {
          width: 8px; height: 8px; border-radius: 50%;
          flex-shrink: 0; margin-top: 6px;
        }
        .talleres-item-title {
          font-size: 0.95rem; font-weight: 600;
          color: var(--text); margin: 0 0 3px;
          line-height: 1.4;
        }
        .talleres-item-audience {
          font-size: 0.8rem; color: var(--text-muted);
          margin: 0; line-height: 1.4;
        }

        @media (max-width: 860px) {
          .talleres-intro-grid { grid-template-columns: 1fr; }
          .talleres-intro-item:first-child { grid-row: auto; }
          .talleres-block { grid-template-columns: 1fr; direction: ltr; }
          .talleres-block-header { padding: 32px 24px; }
          .talleres-block-list { padding: 24px 24px; }
        }
      `}</style>
    </>
  );
}
