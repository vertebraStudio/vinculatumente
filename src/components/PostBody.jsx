import { DocumentRenderer } from '@keystatic/core/renderer';

// ============================================================
// Bloques editoriales (alineados con el tono de la marca)
// ============================================================
const componentBlocks = {
  callout: ({ value, children }) => {
    const tipo = value.tipo || 'info';
    return (
      <div className={`pb-callout pb-callout-${tipo}`}>
        {value.titulo && <p className="pb-callout-title">{value.titulo}</p>}
        <div className="pb-callout-body">{children}</div>
      </div>
    );
  },

  mitosRealidad: ({ value }) => (
    <div className="pb-myth">
      {value.titulo && <h3 className="pb-myth-title">{value.titulo}</h3>}
      <div className="pb-myth-grid">
        {(value.pares || []).map((p, i) => (
          <div key={i} className="pb-myth-pair">
            <div className="pb-myth-row pb-myth-mito">
              <span className="pb-myth-label">Mito</span>
              <p>{p.mito}</p>
            </div>
            <div className="pb-myth-row pb-myth-real">
              <span className="pb-myth-label">Realidad</span>
              <p>{p.realidad}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  cta: ({ value }) => (
    <a className="pb-cta" href={value.enlace || '/contacto'}>
      <div className="pb-cta-text-wrap">
        <p className="pb-cta-title">{value.titulo}</p>
        <p className="pb-cta-text">{value.texto}</p>
      </div>
      <span className="pb-cta-btn">{value.etiquetaBoton || 'Reservar mi cita'} →</span>
    </a>
  ),

  cita: ({ value }) => (
    <figure className="pb-cite">
      <span className="pb-cite-mark">“</span>
      <blockquote>{value.texto}</blockquote>
      {value.autor && <figcaption>— {value.autor}</figcaption>}
    </figure>
  ),

  definicion: ({ value }) => (
    <div className="pb-def">
      <p className="pb-def-term">{value.termino}</p>
      <p className="pb-def-text">{value.explicacion}</p>
    </div>
  ),
};

export default function PostBody({ document }) {
  return (
    <div className="post-body">
      <DocumentRenderer document={document} componentBlocks={componentBlocks} />
    </div>
  );
}
