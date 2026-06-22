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

      <div className="hero-grid">
        {/* Contenido */}
        <div className="hero-content">
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

        {/* Panel visual — composición ilustraciones flotantes */}
        <div className="hero-visual">
          <span className="hc-bg-blob" aria-hidden="true" />
          <div className="hero-composition">
            {/* Selfcare — tarjeta central grande */}
            <div className="hc-card hc-selfcare">
              <Image src="/media/selfcare-draw 1.png" alt="Autocuidado y bienestar emocional" fill style={{ objectFit: 'contain', padding: '16px', mixBlendMode: 'multiply' }} sizes="(max-width: 900px) 55vw, 26vw" priority />
            </div>
            {/* Plant — tarjeta superior derecha */}
            <div className="hc-card hc-plant">
              <Image src="/media/plant-draw 1.png" alt="Crecimiento personal" fill style={{ objectFit: 'contain', padding: '12px' }} sizes="(max-width: 900px) 32vw, 16vw" priority />
            </div>
            {/* Bird — tarjeta inferior izquierda */}
            <div className="hc-card hc-bird">
              <Image src="/media/bird-draw 1.png" alt="Libertad emocional" fill style={{ objectFit: 'contain', padding: '14px', mixBlendMode: 'multiply' }} sizes="(max-width: 900px) 34vw, 16vw" priority />
            </div>
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
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-poppins), sans-serif; font-size: 0.76rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
        .eb-line { width: 40px; height: 1px; background: var(--accent); opacity: 0.5; display: inline-block; }
        .eb-heart { font-size: 0.95rem; }
        .hero-title { font-family: var(--font-playfair), serif; font-size: clamp(2.8rem, 5.2vw, 4.8rem); font-weight: 500; line-height: 1.06; color: var(--text); margin: 0; letter-spacing: -0.01em; }
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
        .hero-visual { position: relative; display: flex; align-items: center; justify-content: center; min-height: 560px; }

        .hc-bg-blob {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background: radial-gradient(ellipse 80% 80% at 55% 48%, rgba(201,168,197,0.38) 0%, transparent 68%);
        }

        .hero-composition {
          position: relative; z-index: 2;
          width: 100%; height: 500px;
        }

        .hc-card {
          position: absolute;
          border-radius: 22px;
          overflow: hidden;
        }

        /* Selfcare — central, grande, ligera inclinación izquierda */
        .hc-selfcare {
          width: 54%; aspect-ratio: 3/4;
          background: #F7ECF4;
          top: 50%; left: 50%;
          transform: translate(-54%, -50%) rotate(-3deg);
          z-index: 2;
          box-shadow: 0 22px 56px rgba(26,20,22,0.15), 0 0 0 1px rgba(201,168,197,0.2);
        }

        /* Plant — esquina superior derecha, inclinación derecha */
        .hc-plant {
          width: 33%; aspect-ratio: 1/1.55;
          background: #EEF5E6;
          top: 2%; right: 3%;
          transform: rotate(7deg);
          z-index: 3;
          box-shadow: 0 14px 38px rgba(168,123,160,0.22), 0 0 0 1px rgba(201,168,197,0.15);
        }

        /* Bird — esquina inferior izquierda, inclinación contraria */
        .hc-bird {
          width: 36%; aspect-ratio: 1;
          background: #EBF0F8;
          bottom: 3%; left: 2%;
          transform: rotate(-6deg);
          z-index: 1;
          box-shadow: 0 14px 38px rgba(168,123,160,0.18), 0 0 0 1px rgba(201,168,197,0.15);
        }

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
          .hero-grid { grid-template-columns: 1fr; padding: 120px 26px 70px; gap: 44px; }
          .hero-visual { order: -1; min-height: 360px; }
          .hero-composition { height: 340px; }
          .hc-selfcare { width: 56%; }
          .hc-plant { width: 30%; }
          .hc-bird { width: 32%; }
          .hero-title { font-size: clamp(2.6rem, 11vw, 3.6rem); }
          .scroll-cue { display: none; }
        }
      `}</style>
    </section>
  );
}
