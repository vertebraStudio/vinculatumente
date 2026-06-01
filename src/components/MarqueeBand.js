'use client';

// MARQUEE BAND — Sustituye estos textos motivacionales con los tuyos
const statements = [
  "No tienes que poder con todo",
  "Entenderte es el primer paso",
  "Avanzar también puede ser ir despacio",
  "Lo que sientes tiene sentido",
  "Pedir ayuda es un acto de valentía",
  "Mereces un espacio donde ser tú",
  "No estás solo en esto",
  "Tus emociones son válidas",
  "El cambio empieza por dentro",
  "Cuidarte no es egoísmo",
  "[Añade tus propios mensajes aquí]",
];

export default function MarqueeBand() {
  const doubled = [...statements, ...statements];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-wave marquee-wave-top">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="var(--accent)" />
        </svg>
      </div>
      <div className="marquee-band">
        <div className="marquee-fade-container">
          <div className="marquee-track">
            {doubled.map((text, i) => (
              <span key={i} className="marquee-item">
                {text}
                <span className="marquee-dot" aria-hidden="true">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="marquee-wave marquee-wave-bottom">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,0 L0,0 Z" fill="var(--accent)" />
        </svg>
      </div>
      <style jsx>{`
        .marquee-wrapper { position: relative; overflow: hidden; margin: 0; padding: 0; line-height: 0; background-color: var(--soft-primary); }
        .marquee-wave { display: block; width: 100%; height: 60px; overflow: hidden; }
        .marquee-wave svg { display: block; width: 100%; height: 100%; }
        .marquee-wave-top { margin-bottom: -1px; }
        .marquee-wave-bottom { margin-top: -1px; }
        .marquee-band { background-color: var(--accent); padding: 30px 0; overflow: hidden; white-space: nowrap; }
        .marquee-fade-container { width: 100%; overflow: hidden; mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%); }
        .marquee-track { display: inline-flex; align-items: center; animation: marquee-scroll 70s linear infinite; white-space: nowrap; }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-item { display: inline-flex; align-items: center; font-size: 1.1rem; font-weight: 400; color: rgba(255, 255, 255, 0.92); letter-spacing: 0.03em; font-style: italic; line-height: 1; }
        .marquee-dot { margin: 0 24px; color: rgba(255, 255, 255, 0.45); font-style: normal; font-size: 1.2rem; }
        @keyframes marquee-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
