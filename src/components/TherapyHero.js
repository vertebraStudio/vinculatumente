'use client';

import Link from 'next/link';

// ============================================================
// HERO DE PÁGINA DE TERAPIA — banda compacta.
// La foto forma parte del fondo (mitad derecha, borde asimétrico).
// Para poner la foto real, define background-image en .hero-bg-photo:
//   background: url('/media/[foto].jpg') center/cover;
// ============================================================

export default function TherapyHero({ category, title, titleEm, desc, photo, phIcon = '🖼️', phLabel = 'Foto de terapia', phDesc = 'Imagen representativa de esta especialidad.' }) {
  return (
    <section className="page-hero-split">
      {/* Definición del borde líquido (ondulado) que separa foto y contenido */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="therapyLiquidEdge" clipPathUnits="objectBoundingBox">
            <path d="M0.20 0 C0.05 0.20, 0.30 0.34, 0.18 0.52 C0.07 0.70, 0.30 0.84, 0.16 1 L1 1 L1 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Foto de fondo (mitad derecha, con corte líquido) */}
      <div
        className="hero-bg-photo"
        role="img"
        aria-label={phLabel}
        style={photo ? { backgroundImage: `url('${photo}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
      >
        {!photo && (
          <span className="hero-bg-ph">
            <span className="hero-bg-icon">{phIcon}</span>
            <span className="hero-bg-label">{phLabel}</span>
            <span className="hero-bg-desc">{phDesc}</span>
          </span>
        )}
      </div>

      <div className="hero-split-inner">
        <div className="hero-split-left">
          <Link href="/#terapias" className="hero-back-btn">
            <span style={{ marginRight: '6px' }}>←</span> Volver a especialidades
          </Link>
          <span className="hero-category">{category}</span>
          <h1 className="hero-split-title">
            {title}<br />
            <em>{titleEm}</em>
          </h1>
          <p className="hero-split-desc">{desc}</p>
          <div className="hero-split-ctas">
            <Link href="/contacto" className="btn-hero-primary">Reservar cita</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-hero-split {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(150deg, #F4E9F1 0%, #FBF7FB 70%);
        }
        .hero-bg-photo {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 52%;
          background: linear-gradient(140deg, #E7D6E5 0%, #CBADC7 58%, #B58FAE 100%);
          clip-path: url(#therapyLiquidEdge);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .hero-bg-ph { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; color: rgba(255,255,255,0.85); padding: 0 30px 0 100px; }
        .hero-bg-icon { font-size: 2rem; opacity: 0.7; }
        .hero-bg-label { font-family: 'Poppins', sans-serif; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
        .hero-bg-desc { font-size: 0.72rem; opacity: 0.8; max-width: 200px; line-height: 1.5; }

        .hero-split-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 94px 40px 30px;
        }
        .hero-split-left { display: flex; flex-direction: column; gap: 14px; max-width: 560px; }
        .hero-back-btn { display: inline-flex; align-items: center; gap: 6px; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.04em; color: var(--accent); text-decoration: none; width: fit-content; transition: color 0.2s ease; margin-bottom: 0; }
        .hero-back-btn:hover { color: var(--text); }
        .hero-category { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.18em; color: var(--accent); text-transform: uppercase; }
        .hero-split-title { font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 3.4vw, 3.2rem); font-weight: 600; line-height: 1.1; color: var(--text); margin: 0; }
        .hero-split-title em { font-style: italic; color: var(--accent); }
        .hero-split-desc { font-size: 1.08rem; line-height: 1.65; color: var(--text-muted); max-width: 520px; margin: 2px 0 0; }
        .hero-split-ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 16px; }

        :global(.btn-hero-primary) {
          display: inline-flex !important; align-items: center !important; justify-content: center !important;
          padding: 13px 28px !important; background-color: var(--accent) !important; color: #fff !important;
          border-radius: 50px !important; font-size: 0.76rem !important; font-weight: 600 !important;
          letter-spacing: 0.1em !important; text-transform: uppercase !important; text-decoration: none !important;
          width: fit-content !important; box-shadow: 0 8px 20px rgba(168,123,160,0.28) !important; transition: all 0.3s ease !important;
        }
        :global(.btn-hero-primary:hover) { background-color: var(--primary) !important; transform: translateY(-2px) !important; box-shadow: 0 12px 26px rgba(168,123,160,0.4) !important; }

        @media (max-width: 860px) {
          .hero-bg-photo { position: relative; top: auto; right: auto; transform: none; width: 86%; max-width: 360px; height: 210px; margin: 0 auto; clip-path: none; border-radius: 46% 54% 47% 53% / 56% 45% 55% 44%; }
          .hero-bg-ph { padding: 0 24px; }
          .hero-bg-desc { display: none; }
          .hero-split-inner { padding: 26px 24px 40px; }
          .hero-split-left { max-width: 100%; }
          .page-hero-split { padding-top: 64px; display: flex; flex-direction: column; }
          .hero-split-inner { order: 2; }
        }
      `}</style>
    </section>
  );
}
