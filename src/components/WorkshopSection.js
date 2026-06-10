'use client';

import { useState, useMemo } from 'react';
import WorkshopGroup from './WorkshopGroup';

// ============================================================
// WorkshopSection — columna izquierda con buscador integrado
// Recibe los grupos de talleres, gestiona el estado de búsqueda
// y renderiza los grupos filtrados.
// El aside (sidebar) se pasa como children desde el server component padre.
// ============================================================

export default function WorkshopSection({ groups, accent, color, children }) {
  const [query, setQuery] = useState('');
  const isSearching = query.trim().length > 0;

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map(group => ({
        ...group,
        workshops: group.workshops.filter(w =>
          w.name?.toLowerCase().includes(q) ||
          w.audience?.toLowerCase().includes(q) ||
          w.problem?.toLowerCase().includes(q) ||
          w.takeaways?.some(t => t.toLowerCase().includes(q))
        ),
      }))
      .filter(group => group.workshops.length > 0);
  }, [groups, query]);

  return (
    <div className="wkp-layout">

      {/* Columna izquierda: buscador + grupos */}
      <div>

        {/* Barra de búsqueda — mismos estilos que el blog */}
        <div className="blog-search-wrap" style={{ maxWidth: '100%', margin: '0 0 32px 0' }}>
          <svg
            className="blog-search-icon"
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            className="blog-search-input"
            placeholder="Buscar talleres…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Buscar talleres"
          />
        </div>

        {/* Sin resultados */}
        {isSearching && filteredGroups.length === 0 && (
          <p style={{
            textAlign: 'center', color: 'var(--text-muted)',
            fontSize: '0.92rem', padding: '48px 0', fontStyle: 'italic',
          }}>
            No se encontraron talleres para <em style={{ fontStyle: 'normal', color: 'var(--text)' }}>"{query}"</em>
          </p>
        )}

        {/* Grupos de talleres (forceOpen durante búsqueda activa) */}
        <div className="workshop-groups">
          {filteredGroups.map((group, gi) => (
            <WorkshopGroup
              key={group.theme ?? gi}
              group={group}
              accent={accent}
              color={color}
              forceOpen={isSearching}
            />
          ))}
        </div>
      </div>

      {/* Columna derecha: aside con tarjeta de contacto (server-rendered) */}
      {children}

    </div>
  );
}
