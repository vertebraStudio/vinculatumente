'use client';

import Link from 'next/link';

// ============================================================
// HERO — Vincula Tu Mente
// Composición editorial: panel de color con foto en forma orgánica
// (blob) a la derecha, contenido a la izquierda. Sustituye el div
// .hero-photo por <img src="/media/maria.jpg" className="hero-photo-img" />
// ============================================================

export default function HomeHero() {
  return (
    <section className="home-hero">
      {/* Capas de fondo */}
      <span className="bg-blob bg-blob-a" aria-hidden="true" />
      <span className="bg-blob bg-blob-b" aria-hidden="true" />

      <div className="hero-grid">
        {/* Contenido */}
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="eb-line" /> <span className="eb-heart">♡</span> Psicóloga y Sexóloga
          </span>

          <h1 className="hero-title">
            Tu bienestar<br />
            emocional y<br />
            sexual <em>importa</em>
          </h1>

          <p className="hero-lead">
            Soy María Villalba. Te acompaño a comprenderte, aceptarte y vivir
            relaciones más sanas y conscientes, desde un espacio seguro, cercano
            y libre de juicios.
          </p>

          <div className="hero-ctas">
            <Link href="/contacto" className="hero-btn-primary">Reservar mi cita</Link>
            <Link href="/#sobre-mi" className="hero-btn-ghost">Conóceme</Link>
          </div>

          <div className="hero-meta">
            <span><strong>Online</strong> en toda España</span>
            <span className="meta-dot">·</span>
            <span>Col. <strong>M-43581</strong></span>
          </div>
        </div>

        {/* Panel visual con foto en blob */}
        <div className="hero-visual">
          <span className="visual-ring" aria-hidden="true" />
          <div className="hero-photo">
            <img src="/media/maria-profile-2.png" alt="María Villalba, psicóloga y sexóloga" className="hero-photo-img" />
          </div>
          <div className="hero-floating-card">
            <span className="fc-heart">♡</span>
            <span className="fc-text">Un espacio seguro,<br />cercano y sin juicios</span>
          </div>
        </div>
      </div>

      <span className="scroll-cue" aria-hidden="true">
        <span className="scroll-cue-line" />
        desliza
      </span>

      <style jsx>{`
        .home-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(120% 90% at 100% 0%, #F2E3EF 0%, rgba(242,227,239,0) 55%),
            linear-gradient(165deg, #FBF9FB 0%, #FAF6F9 55%, #F4E9F2 100%);
          display: flex;
          align-items: center;
        }
        .bg-blob { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
        .bg-blob-a { width: 480px; height: 480px; top: -140px; left: -120px; background: radial-gradient(circle, rgba(201,168,197,0.35), rgba(201,168,197,0) 70%); }
        .bg-blob-b { width: 380px; height: 380px; bottom: -120px; left: 38%; background: radial-gradient(circle, rgba(234,217,232,0.6), rgba(234,217,232,0) 70%); }

        .hero-grid {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 140px 40px 90px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 50px;
          align-items: center;
        }

        /* ---- Contenido ---- */
        .hero-content { display: flex; flex-direction: column; gap: 22px; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: 'Poppins', sans-serif; font-size: 0.76rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
        .eb-line { width: 40px; height: 1px; background: var(--accent); opacity: 0.5; display: inline-block; }
        .eb-heart { font-size: 0.95rem; }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(2.8rem, 5.2vw, 4.8rem); font-weight: 500; line-height: 1.06; color: var(--text); margin: 0; letter-spacing: -0.01em; }
        .hero-title em { font-style: italic; color: var(--accent); position: relative; }
        .hero-lead { font-size: 1.08rem; line-height: 1.8; color: var(--text-muted); max-width: 480px; margin: 0; }
        .hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 6px; }
        .hero-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 14px; font-size: 0.82rem; color: var(--text-muted); }
        .hero-meta strong { color: var(--text); font-weight: 600; }
        .meta-dot { color: var(--primary); }

        :global(.hero-btn-primary) {
          display: inline-flex !important; align-items: center !important; justify-content: center !important;
          padding: 15px 32px !important; background: var(--accent) !important; color: #fff !important;
          border-radius: 50px !important; font-size: 0.8rem !important; font-weight: 600 !important;
          letter-spacing: 0.1em !important; text-transform: uppercase !important; text-decoration: none !important;
          box-shadow: 0 10px 26px rgba(168,123,160,0.32) !important; transition: all 0.3s ease !important;
        }
        :global(.hero-btn-primary:hover) { transform: translateY(-2px) !important; box-shadow: 0 14px 32px rgba(168,123,160,0.42) !important; }
        :global(.hero-btn-ghost) {
          display: inline-flex !important; align-items: center !important; padding: 15px 26px !important;
          color: var(--text) !important; border-bottom: 1.5px solid var(--accent) !important;
          font-size: 0.8rem !important; font-weight: 600 !important; letter-spacing: 0.1em !important;
          text-transform: uppercase !important; text-decoration: none !important; border-radius: 0 !important;
          transition: all 0.25s ease !important;
        }
        :global(.hero-btn-ghost:hover) { color: var(--accent) !important; }

        /* ---- Panel visual ---- */
        .hero-visual { position: relative; display: flex; align-items: center; justify-content: center; min-height: 540px; }
        .visual-ring {
          position: absolute; width: 86%; aspect-ratio: 1; border-radius: 46% 54% 50% 50% / 52% 48% 52% 48%;
          background: linear-gradient(150deg, #E4CFE1 0%, #C9A8C5 55%, #B58FAE 100%);
          transform: rotate(-6deg); box-shadow: 0 30px 70px rgba(168,123,160,0.28);
        }
        .hero-photo {
          position: relative; z-index: 2; width: 78%; aspect-ratio: 4/5;
          border-radius: 52% 48% 46% 54% / 48% 52% 48% 52%;
          overflow: hidden; box-shadow: 0 24px 60px rgba(26,20,22,0.18);
          background: #efe6ee;
        }
        :global(.hero-photo-img) { width: 100%; height: 100%; object-fit: cover; display: block; }
        .hero-photo-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; background: linear-gradient(160deg, #f3eaf1, #e7d6e5); color: var(--accent); text-align: center; }
        .ph-mark { font-family: 'Playfair Display', serif; font-size: 4rem; line-height: 1; opacity: 0.55; }
        .ph-text { font-family: 'Poppins', sans-serif; font-size: 0.82rem; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.7; }
        .ph-text small { font-size: 0.7rem; text-transform: none; letter-spacing: 0; }

        .hero-floating-card {
          position: absolute; z-index: 3; left: -6%; bottom: 8%;
          display: flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.85); backdrop-filter: blur(8px);
          border: 1px solid rgba(168,123,160,0.18); border-radius: 18px;
          padding: 14px 18px; box-shadow: 0 12px 30px rgba(26,20,22,0.1); max-width: 230px;
        }
        .fc-heart { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: var(--primary-light); color: var(--accent); font-size: 1rem; flex-shrink: 0; }
        .fc-text { font-family: 'Playfair Display', serif; font-style: italic; font-size: 0.92rem; line-height: 1.35; color: var(--text); }

        .scroll-cue { position: absolute; left: 50%; bottom: 26px; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; font-family: 'Poppins', sans-serif; font-size: 0.66rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--text-muted); z-index: 2; }
        .scroll-cue-line { width: 1px; height: 38px; background: linear-gradient(var(--accent), transparent); }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; padding: 120px 26px 70px; gap: 44px; }
          .hero-visual { order: -1; min-height: 0; }
          .hero-photo { width: 70%; max-width: 320px; }
          .visual-ring { width: 78%; max-width: 360px; }
          .hero-title { font-size: clamp(2.6rem, 11vw, 3.6rem); }
          .scroll-cue { display: none; }
          .hero-floating-card { left: 0; bottom: 0; }
        }
      `}</style>
    </section>
  );
}
