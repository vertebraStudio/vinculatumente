'use client';

import { useState } from 'react';
import WorkshopCard from './WorkshopCard';

export default function WorkshopGroup({ group, accent, color, forceOpen = false }) {
  const [open, setOpen] = useState(true);
  // forceOpen (durante búsqueda activa) sobreescribe el estado local
  const isOpen = forceOpen || open;

  // Si no hay título (grupo plano sin temática) renderizamos solo el grid
  if (!group.theme) {
    return (
      <div className="workshop-grid">
        {group.workshops.map((w, i) => (
          <WorkshopCard key={i} workshop={w} accent={accent} color={color} />
        ))}
      </div>
    );
  }

  return (
    <div className="wg-wrap">
      <button
        className="wg-header"
        onClick={() => setOpen(!open)}
        aria-expanded={isOpen}
      >
        <span className="wg-title">{group.theme}</span>
        <span className="wg-meta">
          <span className="wg-count">{group.workshops.length} talleres</span>
          <svg
            className="wg-chevron"
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div className={`wg-body ${isOpen ? 'open' : ''}`}>
        <div className="wg-inner">
          <div className="workshop-grid">
            {group.workshops.map((w, i) => (
              <WorkshopCard key={i} workshop={w} accent={accent} color={color} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .wg-wrap { border-bottom: 1px solid rgba(201,168,197,0.2); }

        .wg-header {
          width: 100%; display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
          background: rgba(201, 168, 197, 0.07); border: none; cursor: pointer;
          padding: 14px 18px; text-align: left; border-radius: 8px;
          margin: 4px 0;
          transition: background 0.2s;
        }
        .wg-header:hover { background: rgba(201, 168, 197, 0.13); }

        .wg-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem; font-weight: 600;
          color: var(--text); font-style: italic;
          display: inline-flex; align-items: center; gap: 10px;
        }
        .wg-title::before {
          content: '';
          display: inline-block; width: 24px; height: 2px;
          background: currentColor; opacity: 0.35; flex-shrink: 0;
        }

        .wg-meta {
          display: inline-flex; align-items: center; gap: 10px;
          flex-shrink: 0;
        }
        .wg-count {
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em;
          color: var(--text-muted); text-transform: uppercase;
        }
        .wg-chevron { color: var(--text-muted); flex-shrink: 0; }

        /* Expand / collapse */
        .wg-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.38s ease;
        }
        .wg-body.open { grid-template-rows: 1fr; }
        .wg-inner { overflow: hidden; }
        .wg-body.open .wg-inner { padding-bottom: 28px; }
      `}</style>
    </div>
  );
}
