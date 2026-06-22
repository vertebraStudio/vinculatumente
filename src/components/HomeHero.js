'use client';

import Link from 'next/link';
import Image from 'next/image';

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

      {/* Ilustraciones decorativas flotantes */}
      <div className="deco deco-plant" aria-hidden="true">
        <Image src="/media/plant-draw 1.png" alt="" fill style={{ objectFit: 'contain' }} sizes="260px" priority />
      </div>
      <div className="deco deco-selfcare" aria-hidden="true">
        <Image src="/media/selfcare-draw 1.png" alt="" fill style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} sizes="280px" priority />
      </div>
      <div className="deco deco-bird" aria-hidden="true">
        <Image src="/media/bird-draw 1.png" alt="" fill style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} sizes="220px" priority />
      </div>

      {/* Contenido centrado */}
      <div className="hero-center">
        <span className="hero-eyebrow">
          <span className="eb-line" /> <span className="eb-heart">♡</span> Psicología · Sexología · Bienestar Emocional
        </span>

        <h1 className="hero-title">
          Tu bienestar<br />
          emocional y<br />
          sexual <em>importa</em>
        </h1>

        <p className="hero-lead">
          En Vincula Tu Mente acompañamos a comprenderte, aceptarte y vivir
          relaciones más sanas y conscientes. Desde un espacio seguro, cercano
          y libre de juicios.
        </p>

        <div className="hero-ctas">
          <Link href="/contacto" className="hero-btn-primary">Reservar mi cita</Link>
          <Link href="/equipo" className="hero-btn-ghost">Conoce el equipo</Link>
        </div>

        <div className="hero-meta">
          <span>Consulta presencial en <strong>Alcalá de Henares</strong> y sesiones <strong>online</strong> en toda España</span>
          <span className="meta-dot">·</span>
          <span>Col. <strong>M-43581</strong></span>
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
          min-height: 100svh;
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

        /* ---- Layout centrado ---- */
        .hero-center {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 22px;
          max-width: 680px;
          margin: 0 auto;
          padding: 120px 40px 80px;
        }

        .hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-poppins), sans-serif; font-size: 0.76rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
        .eb-line { width: 40px; height: 1px; background: var(--accent); opacity: 0.5; display: inline-block; }
        .eb-heart { font-size: 0.95rem; }
        .hero-title { font-family: var(--font-playfair), serif; font-size: clamp(2.8rem, 5.2vw, 4.8rem); font-weight: 500; line-height: 1.06; color: var(--text); margin: 0; letter-spacing: -0.01em; }
        .hero-title em { font-style: italic; color: var(--accent); }
        .hero-lead { font-size: 1.08rem; line-height: 1.8; color: var(--text-muted); max-width: 520px; margin: 0; }
        .hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-top: 6px; }
        .hero-meta { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 10px; margin-top: 14px; font-size: 0.82rem; color: var(--text-muted); }
        .hero-meta strong { color: var(--text); font-weight: 600; }
        .meta-dot { color: var(--primary); }

        /* ---- Ilustraciones decorativas ---- */
        .deco { position: absolute; z-index: 1; pointer-events: none; }

        .deco-plant {
          width: 240px; height: 360px;
          top: 60px; right: 4%;
          transform: rotate(6deg);
          opacity: 0.82;
        }
        .deco-selfcare {
          width: 260px; height: 320px;
          bottom: 40px; left: 3%;
          transform: rotate(-4deg);
          opacity: 0.75;
        }
        .deco-bird {
          width: 200px; height: 200px;
          top: 80px; left: 8%;
          transform: rotate(3deg);
          opacity: 0.65;
        }

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


        .hero-floating-card {
          position: absolute; z-index: 3; left: -6%; bottom: 8%;
          display: flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.85); backdrop-filter: blur(8px);
          border: 1px solid rgba(168,123,160,0.18); border-radius: 18px;
          padding: 14px 18px; box-shadow: 0 12px 30px rgba(26,20,22,0.1); max-width: 230px;
        }
        .fc-heart { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: var(--primary-light); color: var(--accent); font-size: 1rem; flex-shrink: 0; }
        .fc-text { font-family: var(--font-playfair), serif; font-style: italic; font-size: 0.92rem; line-height: 1.35; color: var(--text); }

        .scroll-cue { position: absolute; left: 50%; bottom: 26px; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; font-family: var(--font-poppins), sans-serif; font-size: 0.66rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--text-muted); z-index: 2; }
        .scroll-cue-line { width: 1px; height: 38px; background: linear-gradient(var(--accent), transparent); }

        @media (max-width: 900px) {
          .hero-center { padding: 110px 26px 70px; }
          .hero-title { font-size: clamp(2.6rem, 11vw, 3.6rem); }
          .deco-plant { width: 140px; height: 190px; right: -5px; top: 10px; }
          .deco-selfcare { width: 160px; height: 200px; left: -10px; bottom: 20px; }
          .deco-bird { display: none; }
          .scroll-cue { display: none; }
        }
      `}</style>
    </section>
  );
}
