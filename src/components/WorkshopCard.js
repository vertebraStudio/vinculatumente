'use client';

import { useState } from 'react';

export default function WorkshopCard({ workshop: w, accent, color }) {
  const [open, setOpen] = useState(false);
  const waUrl = `https://wa.me/34604807200?text=${encodeURIComponent(`Hola, me interesa el taller "${w.name}"`)}`;

  return (
    <article
      className="workshop-card"
      style={{ borderTop: `3px solid ${accent}`, gridColumn: open ? 'span 2' : 'span 1' }}
    >

      {/* Cabecera siempre visible */}
      <div className="workshop-card-top">
        <h3 className="workshop-name">{w.name}</h3>
        <span className="workshop-chip" style={{ color: accent, background: color }}>
          {w.audience}
        </span>
      </div>

      {/* Contenido expandible */}
      <div className={`workshop-expandable ${open ? 'open' : ''}`}>
        <div className={`workshop-expandable-inner ${open ? 'wide' : ''}`}>
          <div className="workshop-block">
            <p className="workshop-label">Qué problema resuelve</p>
            <p className="workshop-problem">{w.problem}</p>
          </div>
          <div className="workshop-block">
            <p className="workshop-label">Qué se llevan los asistentes</p>
            <ul className="workshop-takeaways">
              {w.takeaways.map((t, j) => <li key={j}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Meta chips */}
      <div className="workshop-meta">
        <span className="workshop-meta-chip">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          {w.duration}
        </span>
        <span className="workshop-meta-chip">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {w.modality}
        </span>
        <span className="workshop-meta-chip" style={{ color: accent, borderColor: `${accent}40`, background: color }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          {w.price}
        </span>
      </div>

      {/* Acciones */}
      <div className="workshop-cta-wrap">
        <button
          onClick={() => setOpen(!open)}
          className="btn-toggle"
          style={{ color: accent }}
          aria-expanded={open}
        >
          {open ? 'Cerrar' : 'Leer más'}
          <svg
            width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-workshop"
          style={{ background: accent }}
        >
          Solicitar
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <style jsx>{`
        .workshop-card {
          background: #fff; border-radius: 16px;
          border: 1px solid rgba(201,168,197,0.15);
          overflow: hidden; display: flex; flex-direction: column;
          box-shadow: 0 4px 18px rgba(168,123,160,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .workshop-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(168,123,160,0.12);
        }
        .workshop-card-top { padding: 20px 22px 14px; }
        .workshop-name {
          font-family: 'Playfair Display', serif; font-size: 1.1rem;
          color: var(--text); margin: 0 0 10px; line-height: 1.25;
        }
        .workshop-chip {
          font-size: 0.74rem; font-weight: 600; padding: 3px 11px;
          border-radius: 50px; display: inline-block;
        }

        /* Contenido expandible con grid trick */
        .workshop-expandable {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.38s ease;
        }
        .workshop-expandable.open {
          grid-template-rows: 1fr;
        }
        .workshop-expandable-inner {
          overflow: hidden;
        }
        /* Cuando está expandida y ocupa 2 columnas: bloques en paralelo */
        .workshop-expandable-inner.wide {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .workshop-block {
          padding: 14px 22px;
          border-top: 1px solid rgba(201,168,197,0.1);
        }
        .workshop-expandable-inner.wide .workshop-block:last-child {
          border-left: 1px solid rgba(201,168,197,0.1);
        }
        .workshop-label {
          font-size: 0.67rem; text-transform: uppercase; letter-spacing: 0.12em;
          font-weight: 700; color: var(--text-muted); margin: 0 0 5px;
        }
        .workshop-problem {
          font-size: 0.85rem; color: var(--text-muted);
          line-height: 1.62; margin: 0; font-style: italic;
        }
        .workshop-takeaways {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 4px;
        }
        .workshop-takeaways li {
          font-size: 0.85rem; color: var(--text);
          padding-left: 18px; position: relative; line-height: 1.5;
        }
        .workshop-takeaways li::before {
          content: '✓'; position: absolute; left: 0;
          color: var(--accent); font-size: 0.75rem; font-weight: 700;
        }

        .workshop-meta {
          padding: 12px 22px; border-top: 1px solid rgba(201,168,197,0.1);
          display: flex; gap: 7px; flex-wrap: wrap;
        }
        .workshop-meta-chip {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 0.75rem; color: var(--text); background: var(--off-white);
          padding: 3px 10px; border-radius: 50px;
          border: 1px solid rgba(201,168,197,0.2);
        }

        .workshop-cta-wrap {
          padding: 12px 22px 18px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 10px;
          border-top: 1px solid rgba(201,168,197,0.08);
        }
        .btn-toggle {
          display: inline-flex; align-items: center; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 0;
          font-size: 0.8rem; font-weight: 600;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.04em; transition: opacity 0.2s;
        }
        .btn-toggle:hover { opacity: 0.7; }
        .btn-workshop {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 18px; color: #fff; border-radius: 50px;
          font-size: 0.76rem; font-weight: 600; text-decoration: none;
          letter-spacing: 0.06em; text-transform: uppercase;
          transition: all 0.25s ease; box-shadow: 0 4px 14px rgba(168,123,160,0.22);
          white-space: nowrap;
        }
        .btn-workshop:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(168,123,160,0.32);
          filter: brightness(1.06);
        }
      `}</style>
    </article>
  );
}
