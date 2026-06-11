'use client';

import Link from 'next/link';
import Image from 'next/image';

// ============================================================
// CUERPO DE PÁGINA DE TERAPIA — contenido + sidebar sticky
// Props:
//   introTitle  — título introductorio
//   introParas  — array de párrafos del intro
//   senales     — array de "¿te identificas?"
//   herramientas— array de "¿qué trabajamos?"
// ============================================================

export default function TherapyBody({ introTitle, introParas = [], senales = [], herramientas = [], ctaNote }) {
  return (
    <section className="ty-section">
      <div className="ty-layout">
        {/* ---- Contenido principal ---- */}
        <div className="ty-main">
          <div className="reveal ty-intro">
            <span className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></svg></span> Cómo te acompaño</span>
            <h2 className="ty-h2">{introTitle}</h2>
            {introParas.map((p, i) => <p key={i} className="ty-para">{p}</p>)}
          </div>

          <div className="reveal ty-block">
            <h3 className="ty-block-title">¿Te identificas con alguna de estas situaciones?</h3>
            <div className="ty-chips">
              {senales.map((item, i) => (
                <div key={i} className="ty-chip">
                  <span className="ty-check">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M9.2 9a2.8 2.8 0 0 1 5.4 1c0 1.9-2.8 2.6-2.8 2.6" /><line x1="12" y1="17.4" x2="12.01" y2="17.4" /></svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal ty-block">
            <h3 className="ty-block-title">¿Qué trabajamos en sesión?</h3>
            <div className="ty-steps">
              {herramientas.map((item, i) => (
                <div key={i} className="ty-step">
                  <span className="ty-marker">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2.4" /><path d="M12 3c1.8 0 2.6 2 1.8 3.6M12 21c-1.8 0-2.6-2-1.8-3.6M21 12c0 1.8-2 2.6-3.6 1.8M3 12c0-1.8 2-2.6 3.6-1.8" /></svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Sidebar sticky ---- */}
        <aside className="ty-aside">
          <div className="ty-card">
            <div className="ty-card-head">
              <Image src="/media/vinculatumenteLogo.jpg" alt="Vincula Tu Mente" width={54} height={54} className="ty-avatar" />
              <div>
                <p className="ty-name">María Villalba</p>
                <p className="ty-role">Psicóloga y sexóloga</p>
              </div>
            </div>
            <div className="ty-card-body">
              <span className="ty-col">Nº Colegiada M-43581</span>
              <span className="ty-col" style={{ marginTop: '-6px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display:'inline', verticalAlign:'middle', marginRight:'5px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Alcalá de Henares · Online
              </span>

              <a href="tel:+34604807200" className="ty-contact">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                +34 604 80 72 00
              </a>
              <a href="mailto:vinculatumente@gmail.com" className="ty-contact">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <span className="ty-mail">vinculatumente@gmail.com</span>
              </a>

              <Link href="/contacto" className="ty-cta">Reservar mi cita →</Link>

              {ctaNote
                ? <p className="ty-modalidad ty-modalidad-custom">{ctaNote}</p>
                : <p className="ty-modalidad">Disponible en modalidad presencial y online.</p>
              }

              <a href="https://www.instagram.com/vinculatumente/" target="_blank" rel="noopener noreferrer" className="ty-ig">@vinculatumente</a>
            </div>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .ty-section { padding: 90px 5%; background: linear-gradient(180deg, #FFFFFF 0%, #FBF7FB 100%); }
        .ty-layout { max-width: 1140px; margin: 0 auto; display: grid; grid-template-columns: 1fr 350px; gap: 64px; align-items: start; }

        .ty-main { display: flex; flex-direction: column; gap: 50px; }
        .ty-h2 { font-family: var(--font-playfair), serif; font-size: 2.1rem; font-weight: 600; color: var(--text); margin: 6px 0 18px; line-height: 1.2; }
        .ty-para { line-height: 1.9; font-size: 1.05rem; color: var(--text); margin: 0 0 14px; }
        .ty-para:last-child { margin-bottom: 0; }

        .ty-block-title { font-family: var(--font-playfair), serif; font-size: 1.5rem; font-weight: 600; color: var(--text); margin: 0 0 24px; }

        /* Señales como chips */
        .ty-chips { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .ty-chip { display: flex; gap: 14px; align-items: flex-start; background: var(--off-white); border: 1px solid rgba(201,168,197,0.28); border-radius: 14px; padding: 18px 18px; transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .ty-chip:hover { transform: translateY(-3px); border-color: var(--primary); box-shadow: 0 12px 26px rgba(168,123,160,0.12); }
        .ty-check { flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%; background: var(--primary-light); color: var(--accent); display: inline-flex; align-items: center; justify-content: center; margin-top: 2px; }
        .ty-chip p { margin: 0; font-size: 0.95rem; line-height: 1.55; color: var(--text); }

        /* Herramientas numeradas */
        .ty-steps { display: flex; flex-direction: column; }
        .ty-step { display: flex; gap: 18px; align-items: center; padding: 18px 0; border-bottom: 1px solid rgba(201,168,197,0.22); }
        .ty-step:first-child { padding-top: 0; }
        .ty-step:last-child { border-bottom: none; padding-bottom: 0; }
        .ty-marker { flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: var(--primary-light); color: var(--accent); }
        .ty-marker svg { width: 18px; height: 18px; }
        .ty-step p { margin: 0; font-size: 1.02rem; line-height: 1.6; color: var(--text); }

        /* Sidebar cohesiva */
        .ty-aside { position: sticky; top: 110px; }
        .ty-card { border-radius: 22px; overflow: hidden; box-shadow: 0 20px 50px rgba(168,123,160,0.18); border: 1px solid rgba(201,168,197,0.22); }
        .ty-card-head { background: linear-gradient(150deg, #C9A8C5 0%, #A87BA0 100%); padding: 26px 24px; display: flex; align-items: center; gap: 14px; }
        .ty-avatar { width: 54px; height: 54px; border-radius: 50%; object-fit: cover; background: #fff; border: 2px solid rgba(255,255,255,0.7); }
        .ty-name { font-family: var(--font-playfair), serif; font-size: 1.2rem; color: #fff; margin: 0; }
        .ty-role { font-size: 0.82rem; color: rgba(255,255,255,0.85); margin: 2px 0 0; }
        .ty-card-body { background: #fff; padding: 22px 24px 26px; display: flex; flex-direction: column; gap: 14px; }
        .ty-col { font-size: 0.78rem; letter-spacing: 0.04em; color: var(--text-muted); padding-bottom: 6px; border-bottom: 1px solid rgba(201,168,197,0.2); }
        .ty-contact { display: flex; align-items: center; gap: 12px; color: var(--text); font-size: 0.92rem; font-weight: 500; text-decoration: none; transition: color 0.2s ease; }
        .ty-contact svg { color: var(--accent); flex-shrink: 0; }
        .ty-contact:hover { color: var(--accent); }
        .ty-mail { word-break: break-all; }
        :global(.ty-cta) { display: flex !important; align-items: center; justify-content: center; gap: 8px; margin-top: 8px; padding: 14px 20px; background: var(--accent); color: #fff !important; border-radius: 50px; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; transition: all 0.3s ease; }
        :global(.ty-cta:hover) { background: var(--primary); transform: translateY(-2px); box-shadow: 0 10px 24px rgba(168,123,160,0.3); }
        .ty-modalidad { text-align: center; font-size: 0.78rem; color: var(--text-muted); font-style: italic; margin: 2px 0 6px; }
        .ty-modalidad-custom { text-align: left; font-size: 0.8rem; line-height: 1.55; padding: 10px 14px; background: rgba(201,168,197,0.1); border-left: 2px solid rgba(168,123,160,0.35); border-radius: 0 8px 8px 0; font-style: italic; }
        .ty-ig { text-align: center; font-size: 0.85rem; color: var(--accent); text-decoration: none; font-weight: 500; }
        .ty-ig:hover { text-decoration: underline; }

        @media (max-width: 900px) {
          .ty-layout { grid-template-columns: 1fr; gap: 40px; }
          .ty-aside { position: static; }
        }
        @media (max-width: 560px) {
          .ty-chips { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
